(ns user
  (:require [reloaded.repl :refer [system start init stop go reset]]
            [am.systems :refer [dev-system]]
            [taoensso.timbre :as timbre :refer [log info]]))

(info "Starting development environment")

(reloaded.repl/set-init! dev-system)

