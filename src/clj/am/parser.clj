(ns
    ^{:doc "
     Om parser implementation"}
    am.parser
  (require [om.next.server :as om]
           [clojure.data.json :as json]
           [clj-http.client :as client]))


;; Temporary state and get-promotions. Should be changed for requests to workflow promotion API

(def state {:promotion/list []})

(defn get-promotions []
  (let [data (client/get "http://localhost:9123/promotions")
        {:keys [status body]} data]
    (if (= status 200)
      (json/read-str body :key-fn keyword))))


(defmulti readf (fn [e k p] k))

(defmethod readf :promotion/list
  [{:keys [state query]} k p]
  (let [st @state
        promotions (get-promotions)]
    {:value promotions}))

(defmethod readf :default
  [_ k _]
  {:value :not-found})


(defmulti mutatef (fn [e k p] k))

(defmethod mutatef :default
  [_ k _]
  {:value :not-found})


(def server-parser (om/parser {:read readf :mutate mutatef}))
