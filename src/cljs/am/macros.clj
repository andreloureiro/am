(ns am.macros)

(defmacro print-time
  [label & body]
  `(do
     (js/console.time ~label)
     ~@body
     (js/console.timeEnd ~label)
     ~@body))

(def *debug-enabled* true)

(defmacro log
  [type & body]
  (if *debug-enabled*
    (case type
      :debug `(js/console.debug ~@body)
      :error `(js/console.error ~@body)
      :info `(js/console.info ~@body)
      :warn `(js/console.warn ~@body)
      :log `(js/console.log ~@body)
      `(js/console.log ~@body))
    ~@body))
