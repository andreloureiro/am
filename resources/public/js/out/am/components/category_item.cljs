(ns am.components.category-item
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))


(defui CategoryItem
  static om/Ident
  (ident [this {:keys [id]}]
         [:category/by-id id])
  static om/IQuery
  (query [this]
         '[:id :name]))

(def category-item (om/factory CategoryItem))

