(ns am.routing
  (:require-macros [am.macros :refer [log]])
  (:require [bidi.bidi :as bidi]
            [om.next :as om]
            [am.reconciler :refer [reconciler]]
            [bidi.router :refer [set-location! start-router!]]
            [pushy.core :as pushy]))

(def ^:static routes
  ["/" [["" :app/main]
        ["promotions" [["" :promotion/list]
                       ["/" [["new" :promotion/new]
                             [[:id] :promotion/by-id]]]]]
        [true :app/not-found]]])


(defn set-view! [match]
  (om/transact! reconciler `[(route/activate ~match) :app/active-route]))

(def history
  (pushy/pushy set-view! (partial bidi/match-route routes)))

(defn init-router! []
  (pushy/start! history))

(defn push-to-history! [url]
  (pushy/set-token! history url))

(defn- handler->url
  ([handler] (bidi/path-for routes handler))
  ([handler k v] (bidi/path-for routes handler k v)))

(defn navigate-to!
  ([handler] (push-to-history! (handler->url handler)))
  ([handler k v] (push-to-history! (handler->url handler k v))))
