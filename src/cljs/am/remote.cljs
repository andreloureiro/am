(ns am.remote
  (:require [cognitect.transit :as transit])
  (:import [goog.net XhrIo]))

(defn post-query [url]
  (fn [{:keys [remote]} cb]
    (.send XhrIo url
           (fn [e]
             (let [transit-response (-> e (.-target) (.getResponseText))
                   response (transit/read (transit/reader :json) transit-response)]
               (println (str "[REMOTE] " remote " -> " response))
               (cb response)))
           "POST"
           (transit/write (transit/writer :json) remote)
           #js {"Content-Type" "application/transit+json"})))
