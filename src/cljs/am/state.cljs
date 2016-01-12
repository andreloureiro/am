(ns am.state)

(def state {:app/title "AM"
            :app/menu [{:id 0
                        :name "All"
                        :path :promotions}
                       {:id 1
                        :name "New"
                        :path :new-promotion}]
            :app/active-route :main
            :app/promotion-form {:name ""
                                 :hashtag ""}

            ;; :promotion/list [{:id "abc123"
            ;;                   :name "David Gilmour"
            ;;                   :hashtag "#davidgilmour"
            ;;                   :start-at nil
            ;;                   :end-at nil
            ;;                   :show-card? true
            ;;                   :category-id 0
            ;;                   :thumb {:small nil
            ;;                           :medium nil
            ;;                           :big "http://placehold.it/200x200"}}]

            :promotion/list []

            :category/list [{:id 0
                             :name "Shows"}
                            {:id 1
                             :name "Eventos"}]})
