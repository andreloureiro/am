(ns am.systems
  (:require [com.stuartsierra.component :as component]
            [system.core :refer [defsystem]]
            [am.handler :refer [app-server]]
            (system.components
             [http-kit :refer [new-web-server]])))


(defsystem dev-system
  [:server (new-web-server 3000 app-server)])
