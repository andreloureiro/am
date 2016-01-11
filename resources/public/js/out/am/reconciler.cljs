(ns am.reconciler
  (:require [am.state :refer [state]]
            [am.parser :refer [parser]]
            [om.next :as om]
            [am.remote :refer [post-query]]))

(def reconciler (om/reconciler {:state state
                                :parser parser
                                :send (post-query "/query")
                                :remotes [:remote]}))
