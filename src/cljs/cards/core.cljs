(ns cards.core
  (:require-macros [devcards.core :refer [defcard]])
  (:require [sablono.core :as s]
            [am.components.promotion.item :refer [promotion-item]]))

(defcard hello-card
  (s/html [:h1 "Hello!"]))

(defcard item-list-component
  "Need to implement a generic item component, then extend to other types."
  (promotion-item {:id 0 :name "Ingressos para David Gilmour" :hashtag "#davidgilmour"})
  {:id 0 :title "Ingressos para David Gilmour" :hashtag "#davidgilmour"}
  {:inspect-data true})


(def mock-promotion-list [{:id 0 :name "Ingressos para David Gilmour" :hashtag "#davidgilmour"}
                          {:id 1 :name "Promoção Cheftime" :hashtag "#cheftime"}
                          {:id 2 :name "Pizzas no iFoods" :hashtag "#pizza"}])

(defcard list-component
  "A list of promotions/stores/products/etc"
  (s/html
   [:ul.am-list
    (map promotion-item mock-promotion-list)]))

