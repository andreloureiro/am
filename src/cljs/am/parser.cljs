(ns am.parser
  (:require-macros [am.macros :refer [log]])
  (:require [om.next :as om]
            [am.utils :refer [make-uid]]))


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

(defmethod readf :app/promotion-form
  [{:keys [state]} k _]
  (let [st @state]
    {:value (get st k)}))

(defmethod readf :promotion/list
  [{:keys [state query ast]} k _]
  (let [st @state]
    {:value (om/db->tree query (get st k) st)}))

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
  [{:keys [state]} k handler]
  {:action (swap! state assoc :app/active-route handler)})

(defmethod mutate 'form/update-field
  [{:keys [state]} k {:keys [form key value] :as params}]
  {:value {:keys [:app/promotion-form]}
   :action #(swap! state assoc-in [form key] value)})

(defn add-promotion [st]
  (let [ref [:promotion/by-id 3]
        promo-item {:id "ghi789" :name "andre" :hashtag "#ht"}]
    (-> st
        (assoc-in ref promo-item)
        (update :app/promotion-list conj ref))))

(defmethod mutate 'form/create-promotion
  [{:keys [state] :as env} _ promotion]
  {:value {:keys [:app/promotion-list]}
   :action (fn []
             (let [id (make-uid)
                   ref [:promotion/by-id id]
                   promo-item (assoc promotion :id id)
                   _ (println promotion)
                   _ (println promo-item)]
               (swap! state (fn [st]
                              (-> st
                                  (assoc-in ref promo-item)
                                  (update :promotion/list conj ref))))))})

(defmethod mutate 'app/testing
  [{:keys [state]} k p]
  {:remote true
   :action (fn [] (println @state))})


(def parser (om/parser {:read readf :mutate mutate}))

