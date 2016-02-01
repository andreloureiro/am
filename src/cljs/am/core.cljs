(ns am.core
  (:require-macros [am.macros :refer [print-time]])
  (:require [am.components.app :refer [App]]
            [om.next :as om]
            [am.remote :refer [listen-remotes!]]
            [devtools.core :as devtools]
            [am.reconciler :refer [reconciler]]
            [cljsjs.material]))


(enable-console-print!)
(devtools/install!)
(println "AM")

(js/console.time "App")
(om/add-root!
 reconciler
 App
 (.getElementById js/document "root"))
(listen-remotes! reconciler)

(js/console.timeEnd "App")

(js/setInterval #(.upgradeDom js/componentHandler) 100)
