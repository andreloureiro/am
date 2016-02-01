(ns am.components.promotion.form
  (:require-macros [am.macros :refer [log]])
  (:require [om.next :as om :refer-macros [defui]]
            [am.reconciler :refer [reconciler]]
            [sablono.core :as html :refer-macros [html]]
            [om.dom :as dom]))


(defn text-input [this label form-value]
  (let [id (str "#" form-value)]
    [:.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label
     [:input.mdl-textfield__input {:id id
                                   :name form-value
                                   :type "text"
                                   :on-click #(.update-field this (keyword form-value)
                                                             (.-value (.-target %)))}]
     [:label.mdl-textfield__label {:for id} label]
     [:span.mdl-textfield__error ]]))


(defui PromotionForm
  static om/IQuery
  (query [this]
         [:app/promotion-form])

  Object
  (update-field [this key value]
                (log :info "[FORM CHANGED]" {key value})
                (om/transact! reconciler `[(form/update-field {:form :app/promotion-form :key ~key :value ~value}) :app/promotion-form]))

  (render [this]
          (let [{:keys [promotion-form] :as props} (om/props this)
                {:keys [name hashtag thumb]} promotion-form]
            (log :info "[RENDER] PromotionForm" (om/props this))
            (html
             [:form {:on-submit #(.preventDefault %)}
              [:.mdl-grid
               [:.mdl-cell.mdl-cell--12-col
                (text-input this "Nome" :name)]]
              [:.mdl-grid
               [:.mdl-cell.mdl-cell--6-col
                (text-input this "Label" :hashtag)]]
              [:button.mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.mdl-button--accent {:type "submit" :on-click #(om/transact! reconciler `[(form/create-promotion {:name ~name :hashtag ~hashtag}) :promotion/list])} "Salvar"]
              ])
            )))


(def promotion-form (om/factory PromotionForm))

