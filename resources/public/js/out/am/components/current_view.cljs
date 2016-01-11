(ns am.components.current-view)
;;   (:require [om.next :as om :refer-macros [defui]]
;;             [am.routing :refer [set-current-view]]
;;             [om.dom :as dom]))


;; (defui CurrentView
;;   static om/IQuery
;;   (query [this]
;;          [:app/active-route])
;;   Object
;;   (select-view [this destination]
;;                (om/transact! this `[(route/activate) ~destination]))
;;   (componentWillUpdate [this new-props new-state]
;;                        (let [{:keys [handler params]} new-props]
;;                          (if (not= handler nil)
;;                            (println "[RENDER] App will update:" handler params)
;;                            (.select-view this {:handler handler :params params}))))
;;   (render [this]
;;           (let [{:keys [handler params]} (om/props this)]
;;             (println "[RENDER] Rendering View with" handler params)
;;             (set-current-view handler params))))

;; (def current-view (om/factory CurrentView))

