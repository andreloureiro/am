(ns am.core
  (:require-macros [am.macros :refer [print-time]])
  (:require [am.components.app :refer [App]]
            [om.next :as om]
            [am.reconciler :refer [reconciler]]))

(enable-console-print!)
(println "AM")

(defn mount! []
  (print-time "AM Root"
              (om/add-root!
               reconciler
               App
               (.getElementById js/document "root"))))

(mount!)
