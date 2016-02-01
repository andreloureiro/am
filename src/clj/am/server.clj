(ns am.server
  (require [am.parser :refer [server-parser state]]
           [clojure.core.async :as async :refer [<! >! go go-loop close!]]
           [taoensso.sente :as sente]
           [taoensso.timbre :as timbre]
           [taoensso.sente.server-adapters.http-kit :refer [sente-web-server-adapter]]))


;; Socket implementation

(def sente-socket (sente/make-channel-socket! sente-web-server-adapter {}))

(def handshake-fn (:ajax-get-or-ws-handshake-fn sente-socket))
(def ajax-post-fn (:ajax-post-fn sente-socket))
(def chsk-send! (:send-fn sente-socket))
(def ch-chsk (:ch-recv sente-socket))
(def connected-uids (:connected-uids sente-socket))


;; Ping client every 10 seconds

(defn start-broadcaster! [sente]
  (let [chsk-send! (:send-fn sente)
        connected-uids (:connected-uids sente)]
    (go-loop [i 0]
      (<! (async/timeout 10000))
      (doseq [uid (:any @connected-uids)]
        (chsk-send! uid [:am/ping {:to-whom uid :iteration i}]))
      (recur (inc 1)))))

(start-broadcaster! sente-socket)


;; Parse event requests from client

(defmulti receive-socket-events (fn [parser uid [ev-id ev-query]] ev-id))

(defmethod receive-socket-events :am/query
  [parser uid [ev-id ev-query]]
  (timbre/info (str "[REMOTE] : SERVER RECEIVED :am/query " ev-query))
  (let [data (parser {:state (atom state)} ev-query)]
    (doseq [u uid]
      (chsk-send! u [:am/response data]))))

(defmethod receive-socket-events :chsk/ws-ping
  [_ _ _]
  nil)

(defmethod receive-socket-events :chsk/uidport-open
  [_ uid [ev-id]]
  (timbre/info (str "[REMOTE] : CONNECTION OPEN :chsk/uidport-open"))
  (doseq [u uid]
    (chsk-send! u [:am/connected? true]))
  )

(defmethod receive-socket-events :chsk/uidport-close
  [_ uid [ev-id]]
  (timbre/info (str "[REMOTE] : CONNECTION CLOSED :chsk/uidport-closed"))
  (doseq [u uid]
    (chsk-send! u [:am/connected? false])))

(defmethod receive-socket-events :default
  [_ _ event]
  (timbre/info (str "[REMOTE] : SERVER RECEIVED :default " event)))

(def parse-socket-events (partial receive-socket-events server-parser))


;; Receive client events and parse with receive-socket-events multimethod

(defn parser-loop! [sente]
  (let [ch-chsk (:ch-recv sente)
        connected-uids (:connected-uids sente)
        chsk-send! (:send-fn sente)]
    (go-loop [{:keys [event ?data]} (<! ch-chsk)]
      (let [[ev-id ev-query] event
            uid (:any @connected-uids)]
        (parse-socket-events uid event)
        (recur (<! ch-chsk))))))

(parser-loop! sente-socket)
