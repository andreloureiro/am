(ns am.utils
  (:import [goog.ui IdGenerator]))

(defn make-uid []
  (.getNextUniqueId (.getInstance IdGenerator)))
