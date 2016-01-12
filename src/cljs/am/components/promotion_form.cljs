(ns am.components.promotion-form
  (:require-macros [am.macros :refer [log]])
  (:require [om.next :as om :refer-macros [defui]]
            [am.reconciler :refer [reconciler]]
            [om.dom :as dom]))


(defui PromotionForm
  static om/IQuery
  (query [this]
         '[:app/promotion-form])

  Object
  (update-field [this key value]
                (log :info "[FORM CHANGED]" {key value})
                (om/transact! reconciler `[(form/update-field {:form :app/promotion-form :key ~key :value ~value}) :app/promotion-form]))

  (render [this]
          (let [{:keys [name] :as props} (om/props this)]
            (log :info "[RENDER] PromotionForm" props)
            (dom/form #js {:onSubmit #(.preventDefault %)}
                      (dom/label nil "Name")
                      (dom/input #js {:type "text"
                                      :name "name"
                                      :onKeyUp #(.update-field this :name (.-value (.-target %)))})
                      (dom/label nil "Hashtag")
                      (dom/input #js {:type "text"
                                      :name "name"
                                      :onKeyUp #(.update-field this :hashtag (.-value (.-target %)))})
                      (dom/button #js {:type "submit"
                                       :onClick #(om/transact! reconciler `[(form/add-promotion)])} "CREATE")))))


(def promotion-form (om/factory PromotionForm))

