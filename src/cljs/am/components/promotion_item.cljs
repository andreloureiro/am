(ns am.components.promotion-item
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))


(defui PromotionItem
  static om/Ident
  (ident [this {:keys [id]}]
         `[:promotion/by-id ~id])
  static om/IQuery
  (query [this]
         '[:id :name :hashtag])
  Object
  (render [this]
          (let [{:keys [id name hashtag]} (om/props this)]
            (println "[RENDER] PromotionItem" id)
            (dom/li #js {:key id} (str name " - " hashtag)))))

(def promotion-item (om/factory PromotionItem {:keyfn :id}))
