(defproject am "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[bidi "1.25.0"]
                 [binaryage/devtools "0.4.1"]
                 [cljs-http "0.1.39"]
                 [cljsjs/react "0.14.3-0"]
                 [cljsjs/react-dom "0.14.3-1"]
                 [cljsjs/react-dom-server "0.14.3-0"]
                 [com.cognitect/transit-clj "0.8.285"]
                 [com.cognitect/transit-cljs "0.8.237"]
                 [com.stuartsierra/component "0.3.1"]
                 [compojure "1.4.0"]
                 [figwheel "0.5.0-3"]
                 [figwheel-sidecar "0.5.0-3"]
                 [hiccup "1.0.5"]
                 [http-kit "2.1.19"]
                 [kibu/pushy "0.3.6"]
                 [metosin/ring-http-response "0.6.5"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [org.omcljs/om "1.0.0-alpha28"]
                 [ring-cors "0.1.7"]
                 [ring-transit "0.1.4"]
                 [ring/ring-defaults "0.1.5"]
                 [sablono "0.5.3"]
                 [secretary "1.2.3"]
                 [ring.middleware.logger "0.5.0"]
                 [cljsjs/material "1.0.6-0"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-figwheel "0.5.0-2"]
            [lein-cljsbuild "1.1.2"]]
  :main am.handler
  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]
  :source-paths ["src/clj" "src/cljs" "env"]
  :profiles
  {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                        [javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]
                :figwheel true
                :compiler {:main am.core
                           :asset-path "/js/out"
                           :output-to "resources/public/js/am.js"
                           :output-dir "resources/public/js/out"
                           :parallel-build true
                           :compiler-stats true
                           :source-map true
                           :source-map-timestamp true
                           }}]}
  :figwheel {:nrepl-port 7878})
