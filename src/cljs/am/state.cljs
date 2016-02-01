(ns am.state)

(def state {:app/connected? false
            :app/title "Marketplace"
            :app/menu [{:id 0
                        :name "Todas as promocoes"
                        :handler :promotion/list}
                       {:id 1
                        :name "Adicionar"
                        :handler :promotion/new}]
            :app/active-route {:handler :promotion/list}
            :app/promotion-form {:name ""
                                 :hashtag ""}

            :promotion/list [{:id 0
                              :name "Ingresso para David Gilmour"
                              :hashtag "#davidgilmour"
                              :start-at nil
                              :end-at nil
                              :show-card? true
                              :category-id 0
                              :thumb {:small nil
                                      :medium nil
                                      :big "http://placehold.it/200x200"}}
                             {:id 1
                              :name "Pizza no iFoods"
                              :hashtag "#pizza"
                              :start-at nil
                              :end-at nil
                              :show-card? true
                              :category-id 0
                              :thumb {:small nil
                                      :medium nil
                                      :big "http://placehold.it/200x200"}}]

            :category/list [{:id 0
                             :name "Shows"}
                            {:id 1
                             :name "Eventos"}]})
