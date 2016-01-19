(ns am.components.promotion.item
  (:require-macros [am.macros :refer [log]])
  (:require [om.next :as om :refer-macros [defui]]
            [am.routing :refer [navigate-to!]]
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
            (log :info "[RENDER] PromotionItem" id)
            (dom/li #js {:onClick #(navigate-to! :promotion/by-id :id id)} (str name " - " hashtag)))))


(def promotion-item (om/factory PromotionItem {:keyfn :id}))
