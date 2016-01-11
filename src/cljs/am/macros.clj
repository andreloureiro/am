(ns am.macros)

(defmacro print-time
  [label & body]
  `(do
     (js/console.time ~label)
     ~@body
     (js/console.timeEnd ~label)
     ~@body))
