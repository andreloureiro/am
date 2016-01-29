(ns am.components.promotion.item
  (:require-macros [am.macros :refer [log]])
  (:require [am.routing :refer [navigate-to!]]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]))


(defui PromotionItem
  static om/Ident
  (ident [this {:keys [id]}]
         `[:promotion/by-id ~id])
  static om/IQuery
  (query [this]
         '[:id :name :hashtag :thumb])
  Object
  (render [this]
          (let [{:keys [id name hashtag]} (om/props this)]
            (log :info "[RENDER] PromotionItem" id)
            (html
             [:li.am-list__item {:on-click #(navigate-to! :promotion/by-id :id id)}
              [:.am-list__item-primary
               [:span.am-list__item-primary-title name]
               [:span.am-list__item-primary-text hashtag]]]))))


(def promotion-item (om/factory PromotionItem {:keyfn :id}))
