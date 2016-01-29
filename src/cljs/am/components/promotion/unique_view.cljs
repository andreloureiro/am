(ns am.components.promotion.unique-view
  (:require-macros [am.macros :refer [log]])
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]))


(defui PromotionUniqueView
  Object
  (render [this]
          (let [{:keys [route-params promotion] :as props} (om/props this)
                {:keys [name hashtag thumb]} promotion]
            (log :info "[RENDER] PromotionUniqueView " props)
            (println thumb)
            (html
             [:div
              [:h3 name]
              [:.mdl-card.mdl-shadow--2dp.am-unique-card-view
               [:.mdl-card__title.mdl-card--expand.am-unique-card-view__image
                {:style {:background-image (str "url(" (:large thumb) ")")
                         :background-size "cover"}}
                [:h2.mdl-card__title-text.am-unique-card-view__title name]]
               [:.mdl-card__supporting-text hashtag]
               [:.mdl-card__actions.mdl-card--border
                [:span.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect
                 "EDITAR"]
                [:span.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect
                 "EXCLUIR"]]]
              [:p hashtag]]))))


(def promotion-unique-view (om/factory PromotionUniqueView))
