(ns am.components.app
  (:require-macros [am.macros :refer [print-time log]])
  (:require [am.components.app-menu :refer [app-menu]]
            [am.components.category-item :refer [CategoryItem]]
            [am.components.menu-item :refer [menu-item]]
            [am.components.promotion.item :refer [PromotionItem promotion-item]]
            [am.components.promotion.create-view :refer [promotion-create-view]]
            [am.components.promotion.list-view :refer [promotion-list-view]]
            [am.components.promotion.unique-view :refer [promotion-unique-view]]
            [am.routing :refer [init-router!]]
            [sablono.core :as html :refer-macros [html]]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]))


(defui App
  static om/IQuery
  (query [this]
         `[{:category/list ~(om/get-query CategoryItem)}
           {:promotion/list ~(om/get-query PromotionItem)}
           :app/title :app/active-route :app/menu :app/promotion-form])

  Object
  (componentDidMount [_]
                     (init-router!))

  (render-active-view [_ route]
                      )

  (render [this]
          (let [{:keys [app/title app/menu app/active-route promotion/list app/promotion-form] :as props} (om/props this)
                active-view (.render-active-view this active-route)]
            (log :debug "[RENDER] App with state" props)
            (html
             [:div
              (app-menu {:title title :menu menu
                         :active-view (condp = (:handler active-route)
                                        :app/main (dom/h1 nil "MAIN")
                                        :promotion/list (promotion-list-view {:promotion/list list})
                                        :promotion/new (promotion-create-view {:promotion-form promotion-form})
                                        :promotion/by-id (promotion-unique-view {:route-params (:route-params active-route)
                                                                                 :promotion (->> list
                                                                                                 (filter #(= (:id %) (:id (:route-params active-route))))
                                                                                                 (into {}) )})
                                        :app/not-found (dom/h1 nil "DEU RUIM")
                                        (dom/h1 "DEU RUIM"))})]))))
