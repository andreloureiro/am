(ns am.handler
  (:require [bidi.ring :refer [make-handler]]
            [cognitect.transit :as transit]
            [compojure.core :refer [defroutes GET POST ANY]]
            [compojure.route :as route]
            [com.stuartsierra.component :as component]
            [hiccup.core :as hiccup]
            [hiccup.page :refer [html5 include-js include-css]]
            [om.next.server :refer [parser]]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.logger :refer [wrap-with-logger]]
            [ring.middleware.transit :refer [wrap-transit-response wrap-transit-params]]
            [ring.util.http-response :refer [ok content-type]]
            [ring.util.response :refer [resource-response]]))

(def layout-template
  (hiccup/html
   (html5
    [:head
     [:title "oi"]
     [:meta {:charset "utf-8"}]
     [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1, user-scalable=no, minimal-ui"}]
     (include-css "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css")
     (include-js "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js")
     (include-css "https://fonts.googleapis.com/icon?family=Material+Icons")
     ]
    [:body
     [:div#root]
     (include-js "/js/material.js")
     (include-js "/js/am.js")
     ])))

(def state {:promotion/list [{:id "abc123"
                              :name "David Gilmour"
                              :hashtag "#davidgilmour"
                              :start-at nil
                              :end-at nil
                              :show-card? true
                              :category-id 0
                              :thumb {:small nil
                                      :medium nil
                                      :big "http://placehold.it/200x200"}}
                             {:id "def456"
                              :name "Olimpiadas 2016"
                              :hashtag "#olimpiadas"
                              :start-at nil
                              :end-at nil
                              :show-card? false
                              :category-id 1
                              :thumb {:small nil
                                      :medium nil
                                      :big "http://placehold.it/200x200"}}]})

(defn filtered-props [m query]
  (into {}
        (map
         (fn [prop]
           (find m prop)) query)))

(defn query-result-coll [state query]
  (into []
        (map (fn [promotion] (filtered-props promotion query)) state)))

(defmulti readf (fn [e k p] k))

(defmethod readf :promotion/list
  [{:keys [state query]} k p]
  (let [st @state]
    {:value (query-result-coll (get st k) query)}))

(defmethod readf :default
  [_ k _]
  {:value :not-found})


(defmulti mutatef (fn [e k p] k))

(defmethod mutatef :default
  [_ k _]
  {:value :not-found})

(defn generate-response [req]
  (let [data ((parser {:read readf :mutate mutatef})
              {:state (atom state)}
              (:transit-params req))]
    {:status 200
     :headers {"Content-Type" "application/transit+json"}
     :body data}))


(defroutes app-routes
  (GET "/query" req (generate-response req))
  (POST "/query" req (generate-response req))
  (route/resources "/")
  (ANY "*" [] (-> (ok layout-template) (content-type "text/html")))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-with-logger)
      (wrap-transit-response {:encoding :json})
      (wrap-transit-params)
      (wrap-defaults (assoc site-defaults :static {:resources "resources"} :security {:anti-forgery false}))))


(defrecord Server [port]
  component/Lifecycle
  (start [component]
    (let [server (run-server app {:port port})]
      (when server
        (do
          (println "Server on localhost:" port)
          (assoc component :server server)))))
  (stop [component]
    (let [server (:server component)]
      (when server
        (do
          (println "Server on localhost:" port)
          (server)))
      (dissoc component :server))))

(def system
  (atom
   (component/system-map
    :server (->Server 3000))))

(defn start []
  (swap! system component/start))

(defn stop []
  (swap! system component/stop))

(defn -main []
  (println "Server starting on localhost:3000")
  (run-server app {:port 3000}))
