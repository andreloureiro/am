(ns am.components.app-menu
  (:require-macros [am.macros :refer [log]])
  (:require [am.routing :refer [navigate-to!]]
            [om.dom :refer [a div header label li nav span ul]]
            [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]))

(defn menu-item [item]
  (let [{:keys [id name handler]} item]
    [:li.mdl-list__item {:key id :on-click #(navigate-to! handler)}
      name]))

(defn render-template [title menu child]
  (html
   [:div.mdl-layout.mdl-layout-js.mdl-layout--fixed-header
    [:header.mdl-layout__header
     [:div.mdl-layout__icon]
     [:div.mdl-layout__header-row
      [:span.mdl-layout__title title]
      [:div.mdl-layout-spacer]]]
    [:div.mdl-layout__content
     [:div.mdl-grid
      [:div.mdl-cell.mdl-cell--2-col
       [:ul.mdl-list (map menu-item menu)]]
      [:div.mdl-cell.mdl-cell--8-col child]
      [:div.mdl-cell.mdl-cell--2-col]]]]))

(defui AppMenu
  Object
  (render [this]
          (let [{:keys [title menu active-view]} (om/props this)]
            (log :info "[RENDER] AppMenu")
            (render-template title menu active-view))))

(def app-menu (om/factory AppMenu))
