(ns am.reconciler
  (:require [am.state :refer [state]]
            [am.parser :refer [parser]]
            [om.next :as om]
            [am.remote :refer [remote-sk]]))

(def reconciler (om/reconciler {:state state
                                :parser parser
                                :send remote-sk
                                :remotes [:remote]}))
