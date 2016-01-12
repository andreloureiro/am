(ns am.components.app
  (:require-macros [am.macros :refer [print-time log]])
  (:require [om.next :as om :refer-macros [defui]]
            [am.components.promotion-item :refer [PromotionItem promotion-item]]
            [am.components.category-item :refer [CategoryItem]]
            [am.components.promotion-form :as pf]
            [am.components.menu-item :refer [menu-item]]
            [om.dom :as dom]))


(defui App
  static om/IQuery
  (query [this]
         [{:category/list (om/get-query CategoryItem)}
          {:promotion/list (om/get-query PromotionItem)}
          :app/menu :app/promotion-form])
  Object
  (render [this]
          (let [{:keys [promotion/list app/menu app/active-route app/promotion-form] :as props} (om/props this)]
            (log :debug "[RENDER] App with state" (om/props this))
            (dom/div nil
                     (dom/h1 nil "am")
                     (dom/ul nil (map menu-item menu))
                     (apply dom/ul nil
                            (map promotion-item list))
                     (str promotion-form)
                     (pf/promotion-form promotion-form)))))
