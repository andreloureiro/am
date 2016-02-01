(ns
    ^{:doc "
     Resolve Marketplace server

     The responsability of this layer is to provide consistency to the client.
     All the requests and responses from/to the client are parsed. The client side
     doesn't need to know which part of the application it's requesting resources.

     Server receives queries from the client, interpret them, do whatever it needs
     to get the data, and returns to the client in the appropriated shape."}
    am.handler
  (:require [am.server :refer [handshake-fn ajax-post-fn]]
            [am.templates :refer [layout-template devcards-template]]
            [compojure.core :refer [defroutes GET POST ANY]]
            [compojure.route :as route]
            [org.httpkit.server :as http :refer [run-server]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.logger :refer [wrap-with-logger]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.transit :refer [wrap-transit-response wrap-transit-params]]
            [ring.util.http-response :refer [ok content-type]]))


;; Generate unique id. Should be changed for real world way of do it.

(def unique-id (rand-int 10000))


;; Add UID to the session

(defn with-uid [req]
  (assoc-in req [:session :uid] unique-id))

(defroutes app-routes
  (GET "/query" req (handshake-fn (with-uid req)))
  (POST "/query" req (ajax-post-fn (with-uid req)))
  (GET "/devcards" [] (-> (ok devcards-template) (content-type "text/html")))
  (route/resources "/")
  (ANY "*" [] (-> (ok layout-template) (content-type "text/html")))
  (route/not-found "Not Found"))

(def app-server
  (-> app-routes
      (wrap-with-logger)
      (wrap-transit-response {:encoding :json})
      (wrap-params)
      (wrap-keyword-params)
      (wrap-defaults (-> site-defaults
                         (assoc-in [:static :resources] "resources")
                         (assoc-in [:security :anty-forgery]
                                   {:read-token (fn [req] (-> req :params :csrf-token))})))))


(defn -main []
  (println "Server starting on localhost:3000")
  (run-server app-server {:port 3000}))
