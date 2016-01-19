(ns am.components.promotion.create-view
  (:require-macros [am.macros :refer [log]])
  (:require [om.next :as om :refer-macros [defui]]
            [am.components.promotion.form :refer [promotion-form]]
            [sablono.core :as html :refer-macros [html]]))


(defui PromotionCreateView
  Object
  (render [this]
          (html
           [:div
            [:h2 "Nova promocao"]
            (promotion-form {:promotion-form (:promotion-form  (om/props this))})])))


(def promotion-create-view (om/factory PromotionCreateView))
