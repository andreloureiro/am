(ns am.templates
  (require [hiccup.core :as hiccup]
           [hiccup.page :refer [html5 include-js include-css]]))

(def layout-template
  (hiccup/html
   (html5
    [:head
     [:title "Marketplace"]
     [:meta {:charset "utf-8"}]
     [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1, user-scalable=no, minimal-ui"}]
     (include-css "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css")
     (include-css "https://fonts.googleapis.com/icon?family=Material+Icons")
     (include-css "/css/am.css")
     ]
    [:body
     [:div#root]
     (include-js "/js/am.js")
     ])))


(def devcards-template
  (hiccup/html
   (html5
    [:head
     [:title "Devcards"]
     [:meta {:charset "utf-8"}]
     [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1, user-scalable=no, minimal-ui"}]
     (include-css "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css")
     (include-css "https://fonts.googleapis.com/icon?family=Material+Icons")
     (include-css "/css/am.css")
     ]
    [:body
     [:div#root]
     (include-js "/js/devcards.js")
     ])))
