(ns am.parser
  (:require [om.next :as om]))


(defmulti readf om/dispatch)

(defmethod readf :app/title
  [{:keys [state]} k _]
  (let [st @state]
    {:value (get st k)}))

(defmethod readf :app/menu
  [{:keys [state]} k _]
  (let [st @state]
    {:value (get st k)}))

(defmethod readf :app/active-route
  [{:keys [state]} k _]
  (let [st @state]
    {:value (get st k)}))

(defmethod readf :promotion/list
  [{:keys [state query ast]} k _]
  (let [st @state]
    (merge
     {:value (om/db->tree query (get st k) st)}
     {:remote ast})
    ))

(defmethod readf :promotion/by-id
  [{:keys [state query]} k {:keys [id]}]
  (let [st @state]
    {:value (get-in st [k id])}))

(defmethod readf :category/list
  [{:keys [state query]} k _]
  (let [st @state]
    {:value (om/db->tree query (get st k) st)}))

(defmethod readf :category/by-id
  [{:keys [state]} k {:keys [id]}]
  {:value (get-in @state [k id])})


(defmulti mutate om/dispatch)

(defmethod mutate 'route/activate
  [{:keys [state]} k {:keys [to]}]
  {:action (swap! state assoc :app/active-route to)})

(defmethod mutate 'app/testing
  [{:keys [state]} k p]
  {:remote true
   :action (fn [] (println @state))})


(def parser (om/parser {:read readf :mutate mutate}))

