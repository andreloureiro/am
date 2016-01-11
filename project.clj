(defproject am "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [hiccup "1.0.5"]
                 [http-kit "2.1.19"]
                 [com.stuartsierra/component "0.3.1"]
                 [figwheel "0.5.0-3"]
                 [figwheel-sidecar "0.5.0-3"]
                 [org.clojure/clojurescript "1.7.228"]
                 [org.omcljs/om "1.0.0-alpha28"]
                 [com.cognitect/transit-clj "0.8.285"]
                 [com.cognitect/transit-cljs "0.8.237"]
                 [ring-transit "0.1.4"]
                 [cljs-http "0.1.39"]
                 [bidi "1.25.0"]
                 [kibu/pushy "0.3.6"]
                 [ring-cors "0.1.7"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-figwheel "0.5.0-2"]
            [lein-cljsbuild "1.1.2"]]
  :main am.handler
  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]
  :source-paths ["src/clj" "src/cljs" "env"]
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]
                        [com.cemerick/piggieback "0.2.1"]]}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]
                :figwheel true
                :compiler {:main am.core
                           :asset-path "js/out"
                           :output-to "resources/public/js/am.js"
                           :output-dir "resources/public/js/out"
                           :parallel-build true
                           :compiler-stats true
                           :source-map true
                           :source-map-timestamp true
                           }}]}
  :figwheel {:nrepl-port 7878})
