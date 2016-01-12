(ns am.remote
  (:require-macros [am.macros :refer [log]])
  (:require [cognitect.transit :as transit])
  (:import [goog.net XhrIo]))

(defn post-query [url]
  (fn [{:keys [remote]} cb]
    (.send XhrIo url
           (fn [e]
             (let [transit-response (-> e (.-target) (.getResponseText))
                   response (transit/read (transit/reader :json) transit-response)]
               (log :info "[REMOTE] " remote " -> " response)
               (cb response)))
           "POST"
           (transit/write (transit/writer :json) remote)
           #js {"Content-Type" "application/transit+json"})))
