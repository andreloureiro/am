(ns am.components.menu-item
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))


(defui MenuItem
  static om/IQuery
  (query [this]
         '[:id :name :path])
  Object
  (render [this]
          (let [{:keys [id name path]} (om/props this)]
            (dom/li #js {:key id} name))))

(def menu-item (om/factory MenuItem {:keyfn :id}))

