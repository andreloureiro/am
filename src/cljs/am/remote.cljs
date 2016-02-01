(ns am.remote
  (:require-macros [am.macros :refer [log]]
                   [cljs.core.async.macros :as asyncm :refer [go-loop]])
  (:require [cognitect.transit :as transit]
            [taoensso.sente :as sente :refer [cb-success?]]
            [taoensso.timbre :as timbre]
            [om.next :as om]
            [cljs.core.async :as async :refer [<! >! put! take! chan]])
  (:import [goog.net XhrIo]))


(def sente-socket (sente/make-channel-socket! "/query" {:type :auto}))

(def chsk (:chsk sente-socket))
(def ch-chsk (:ch-recv sente-socket))
(def chsk-send! (:send-fn sente-socket))
(def chsk-state (:state sente-socket))


(def remote-chsk (chan))


(defn merge-remote [merge-fn results]
  (merge-fn results))

(defn remote-sk [queries merge-fn]
  (println "[REMOTE] : SENDING " (:remote queries))
  (put! remote-chsk {:queries queries :merge-fn merge-fn}))


(defn flush-queries! []
  (go-loop [data (<! remote-chsk)]
    (let [{:keys [queries merge-fn]} data]
      (chsk-send! [:am/query (:remote queries)]
                  5000
                  (partial merge-remote merge-fn))
      (recur (<! remote-chsk)))))

(flush-queries!)


(defmulti event-msg-handler (fn [_ data] (first data)))

(defmethod event-msg-handler :am/response
  [reconciler [_ value]]
  (log :info "[REMOTE] : RECEIVING :am/response " value)
  (om/merge! reconciler value))

(defmethod event-msg-handler :am/connected?
  [reconciler [_ value]]
  (log :info "[REMOTE] : RECEIVING :am/connected? " value)
  (om/merge! reconciler {:app/connected? value}))

(defmethod event-msg-handler :am/ping
  [_ [_ data]]
  nil)

(defmethod event-msg-handler :default
  [_ event]
  (println "[REMOTE] : event not handled" event))

(defn listen-remotes! [reconciler]
  (go-loop [data (<! ch-chsk)]
    (let [{:keys [event ?data]} data]
      (event-msg-handler reconciler ?data))
    (recur (<! ch-chsk))))
