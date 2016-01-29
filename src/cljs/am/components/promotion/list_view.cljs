(ns am.components.promotion.list-view
  (:require-macros [am.macros :refer [log]])
  (:require [om.next :as om :refer-macros [defui]]
            [am.routing :refer [navigate-to!]]
            [am.components.promotion.item :refer [promotion-item]]
            [sablono.core :as html :refer-macros [html]]
            [om.dom :as dom]))


(defui PromotionListView
  Object
  (render [this]
          (let [{:keys [promotion/list] :as props} (om/props this)]
            (log :info "[RENDER] PromotionListView" props)
            (html
             [:div
              [:h3 "Promoção"]
              [:ul.am-list (map promotion-item list)]]))))


(def promotion-list-view (om/factory PromotionListView))

