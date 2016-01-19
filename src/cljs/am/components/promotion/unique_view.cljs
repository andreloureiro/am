(ns am.components.promotion.unique-view
  (:require-macros [am.macros :refer [log]])
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]))


(defui PromotionUniqueView
  Object
  (render [this]
          (let [{:keys [route-params promotion] :as props} (om/props this)
                {:keys [name hashtag]} promotion]
            (log :info "[RENDER] PromotionUniqueView " props)
            (html
             [:div
              [:h2 name]
              [:small "Nome"]
              [:p name]
              [:small "Hashtag"]
              [:p hashtag]]))))


(def promotion-unique-view (om/factory PromotionUniqueView))
