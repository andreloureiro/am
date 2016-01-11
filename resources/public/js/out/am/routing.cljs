(ns am.routing)
;;   (:require [bidi.bidi :as bidi]
;;             [om.next :as om]
;;             [bidi.router :refer [set-location! start-router!]]
;;             [pushy.core :as pushy]))

;; (def routes
;;   ["/" [["" :main]
;;         "products" [["" :products]
;;                     ["/new" :new-product]]]])

;; (defn set-view! [match]
;;   (let [root-component (om/app-root reconciler)]
;;     (om/transact! root-component `[(route/activate {:to ~match})])))

;; (def history (pushy/pushy set-view! (partial bidi/match-route routes)))

;; (pushy/start! history)

;; (defn navigate-to! [url]
;;   (pushy/set-token! history url))


;; (defmulti set-current-view (fn [view params] view))

;; (defmethod set-current-view :default
;;   [v p]
;;   (println "current view"))

