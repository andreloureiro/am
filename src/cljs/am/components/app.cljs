(ns am.components.app
  (:require-macros [am.macros :refer [print-time]])
  (:require [om.next :as om :refer-macros [defui]]
            [am.components.promotion-item :refer [PromotionItem promotion-item]]
            [am.components.category-item :refer [CategoryItem]]
            [am.components.menu-item :refer [menu-item]]
            [om.dom :as dom]))


(defui App
  static om/IQuery
  (query [this]
         [{:category/list (om/get-query CategoryItem)}
          {:promotion/list (om/get-query PromotionItem)}
          :app/menu])
  Object
  (render [this]
          (let [{:keys [promotion/list app/menu app/active-route]} (om/props this)]
            (println "[RENDER] App with state" (om/props this))
            (dom/div nil
                     (dom/h1 nil "am")
                     (dom/ul nil (map menu-item menu))
                     (dom/ul nil
                             (map promotion-item list))))))
