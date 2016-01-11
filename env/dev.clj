(ns dev
  (:require [com.stuartsierra.component :as component]
            [am.handler :refer [app]]
            [org.httpkit.server :refer [run-server]]
            [figwheel-sidecar.repl-api :as ra]))

(def figwheel-config
  {:figwheel-options {}
   :build-ids ["dev"]
   :all-builds
   [{:id "dev"
     :source-paths ["src/cljs"]
     :figwheel true
     :compiler {:main 'am.core
                :asset-path "js/out"
                :output-to "resources/public/js/am.js"
                :output-dir "resources/public/js/out"
                :parallel-build true
                :compiler-stats true
                :source-map true
                :source-map-timestamp true
                }}]})

(defrecord Figwheel []
  component/Lifecycle
  (start [config]
    (println "AM - Starting Figwheel")
    (ra/start-figwheel! config)
    config)
  (stop [config]
    (println "AM - Stoping Figwheel")
    (ra/stop-figwheel!)
    config))

(defrecord Server [port]
  component/Lifecycle
  (start [this]
    (let [server (run-server app {:port port})]
      (println (str "AM - Starting Server on port " port))
      (assoc this :server server)))
  (stop [this]
    (let [server (:server this)]
      (println "AM - Stoping Server")
      (server)
      (dissoc this :server))))

(def system
  (atom
   (component/system-map
    :server (->Server 3000)
    :figwheel (map->Figwheel figwheel-config))))

(defn start []
  (swap! system component/start))

(defn stop []
  (swap! system component/stop))

(defn reload []
  (stop)
  (start))

(defn repl []
  (ra/cljs-repl))

(defn start-with-repl []
  (start)
  (repl))
