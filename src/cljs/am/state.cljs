(ns am.state)

;; (def mock-promotions (js->clj [{"id":"0740d1a4-e6bc-47d3-b787-f5c18377413d","title":"David Gilmour","description":"Show do David Gilmour! 50% de desconto no ingresso e ganhe outro ingresso para o acompanhante gratuitamente!","startAt":1449367200000,"endAt":1449972000000,"keyword":"#davidgilmour","greeting":{"text":"Show do David Gilmour"},"thumb":{"small":"","medium":"","large":"https://imagesapt-a.akamaihd.net/fit-in/500x500/2e3fc4a7139646449816d7490046aa7c/-5585660810233036309.jpg"},"actionLabel":"QUERO MEU INGRESSO!","itens":[],"workflowId":null,"showCard":null},{"id":"f96c4f95-22ab-4cdb-a383-2e59e179fe6b","title":"Olimpiadas 2016","description":"Ingressos para as Olimpiadas 2016","startAt":1454292000000,"endAt":1456714800000,"keyword":"#olimpiadas","greeting":{"text":"Olá Olimpiadas"},"thumb":{"small":"","medium":"","large":"https://imagesapt-a.akamaihd.net/fit-in/500x500/4c8dd5104c5640b9a49cb3305f3d2f23/5570044329580974005.jpg"},"actionLabel":"QUERO IR AS OLIMPIADAS","itens":[],"workflowId":null,"showCard":null},{"id":"64852f33-a90e-4256-924d-d13c982990ad","title":"Promoção teste","description":"promoção de teste","startAt":1447931168000,"endAt":1447931168000,"keyword":"#promo3","greeting":{"text":"bem vindo as promoções do resolve"},"thumb":{"small":null,"medium":null,"large":"https://imagesapt-a.akamaihd.net/4a4f5f20ad7a4d6ca581d87b198db10e/-4891749364127675633.jpg"},"actionLabel":"resgatar","itens":[],"workflowId":null,"showCard":true},{"id":"4d03a25a-6e6f-48ba-bdfd-084fc790eac2","title":"Promoção teste","description":"promoção de teste","startAt":1447931168000,"endAt":1447931168000,"keyword":"#promo5","greeting":{"text":"bem vindo as promoções do resolve"},"thumb":{"small":null,"medium":null,"large":"https://imagesapt-a.akamaihd.net/4a4f5f20ad7a4d6ca581d87b198db10e/-4891749364127675633.jpg"},"actionLabel":"resgatar","itens":[],"workflowId":null,"showCard":true},{"id":"03f7d85d-9a2e-406d-ba78-e2dc13bb03d3","title":"Nespresso","description":"Promocao Nespresso","startAt":1451613600000,"endAt":1459393200000,"keyword":"#nespresso","greeting":{"text":"olá nespresso"},"thumb":{"small":"","medium":"","large":"https://imagesapt-a.akamaihd.net/fit-in/500x500/dbab12649d2849e39d602dabc1db46ab/3039347402248243265.png"},"actionLabel":"PROMO NESPRESSO","itens":[],"workflowId":null,"showCard":true}] :keywordize-keys true)) 


(def state {:app/title "Marketplace"
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
