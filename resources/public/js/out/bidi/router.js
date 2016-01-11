// Compiled by ClojureScript 1.7.228 {}
goog.provide('bidi.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');

/**
 * @interface
 */
bidi.router.Router = function(){};

bidi.router.set_location_BANG_ = (function bidi$router$set_location_BANG_(_,location){
if((!((_ == null))) && (!((_.bidi$router$Router$set_location_BANG_$arity$2 == null)))){
return _.bidi$router$Router$set_location_BANG_$arity$2(_,location);
} else {
var x__39159__auto__ = (((_ == null))?null:_);
var m__39160__auto__ = (bidi.router.set_location_BANG_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,_,location);
} else {
var m__39160__auto____$1 = (bidi.router.set_location_BANG_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,_,location);
} else {
throw cljs.core.missing_protocol.call(null,"Router.set-location!",_);
}
}
}
});

bidi.router.replace_location_BANG_ = (function bidi$router$replace_location_BANG_(_,location){
if((!((_ == null))) && (!((_.bidi$router$Router$replace_location_BANG_$arity$2 == null)))){
return _.bidi$router$Router$replace_location_BANG_$arity$2(_,location);
} else {
var x__39159__auto__ = (((_ == null))?null:_);
var m__39160__auto__ = (bidi.router.replace_location_BANG_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,_,location);
} else {
var m__39160__auto____$1 = (bidi.router.replace_location_BANG_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,_,location);
} else {
throw cljs.core.missing_protocol.call(null,"Router.replace-location!",_);
}
}
}
});

/**
 * Starts up a Bidi router based on Google Closure's 'History'
 * 
 *   Types:
 * 
 *  Location :- {:handler ...
 *               :route-params {...}}
 * 
 *   Parameters:
 * 
 *  routes :- a Bidi route structure
 *  on-navigate :- 0-arg function, accepting a Location
 *  default-location :- Location to default to if the current token doesn't match a route
 * 
 *   Returns :- Router
 * 
 *   Example usage:
 * 
 *  (require '[bidi.router :as br])
 * 
 *  (let [!location (atom nil)
 *        router (br/start-router! ["" {"/" ::home-page
 *                                        "/page2" ::page2}]
 *                                 {:on-navigate (fn [location]
 *                                                 (reset! !location location))
 *                                  :default-location {:handler ::home-page}})]
 * 
 *    ...
 * 
 *    (br/set-location! router {:handler ::page2}))
 */
bidi.router.start_router_BANG_ = (function bidi$router$start_router_BANG_(routes,p__47277){
var map__47318 = p__47277;
var map__47318__$1 = ((((!((map__47318 == null)))?((((map__47318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47318):map__47318);
var on_navigate = cljs.core.get.call(null,map__47318__$1,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.constantly.call(null,null));
var default_location = cljs.core.get.call(null,map__47318__$1,new cljs.core.Keyword(null,"default-location","default-location",1316404397));
var history = (new goog.History());
history.setEnabled(true);

var token__GT_location = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$_token__GT_location(token){
var or__38504__auto__ = bidi.bidi.match_route.call(null,routes,token);
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
return default_location;
}
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;
var location__GT_token = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$_location__GT_token(p__47332){
var map__47337 = p__47332;
var map__47337__$1 = ((((!((map__47337 == null)))?((((map__47337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47337):map__47337);
var handler = cljs.core.get.call(null,map__47337__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__47337__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return bidi.bidi.unmatch_pair.call(null,routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),route_params], null));
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;
goog.events.listen(history,goog.History.EventType.NAVIGATE,((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function (e){
return on_navigate.call(null,token__GT_location.call(null,e.token));
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
);

var initial_token_47360 = (function (){var token = history.getToken();
if(!(clojure.string.blank_QMARK_.call(null,token))){
return token;
} else {
var or__38504__auto__ = location__GT_token.call(null,default_location);
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
return "/";
}
}
})();
var initial_location_47361 = token__GT_location.call(null,initial_token_47360);
history.replaceToken(initial_token_47360);

on_navigate.call(null,initial_location_47361);

if(typeof bidi.router.t_bidi$router47340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {bidi.router.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bidi.router.t_bidi$router47340 = (function (start_router_BANG_,routes,p__47277,map__47318,on_navigate,default_location,history,token__GT_location,location__GT_token,meta47341){
this.start_router_BANG_ = start_router_BANG_;
this.routes = routes;
this.p__47277 = p__47277;
this.map__47318 = map__47318;
this.on_navigate = on_navigate;
this.default_location = default_location;
this.history = history;
this.token__GT_location = token__GT_location;
this.location__GT_token = location__GT_token;
this.meta47341 = meta47341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bidi.router.t_bidi$router47340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function (_47342,meta47341__$1){
var self__ = this;
var _47342__$1 = this;
return (new bidi.router.t_bidi$router47340(self__.start_router_BANG_,self__.routes,self__.p__47277,self__.map__47318,self__.on_navigate,self__.default_location,self__.history,self__.token__GT_location,self__.location__GT_token,meta47341__$1));
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router47340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function (_47342){
var self__ = this;
var _47342__$1 = this;
return self__.meta47341;
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router47340.prototype.bidi$router$Router$ = true;

bidi.router.t_bidi$router47340.prototype.bidi$router$Router$set_location_BANG_$arity$2 = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function (_,location){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(self__.location__GT_token.call(null,location));
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router47340.prototype.bidi$router$Router$replace_location_BANG_$arity$2 = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function (_,location){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(self__.location__GT_token.call(null,location));
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router47340.getBasis = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"start-router!","start-router!",141381462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"default-location","default-location",-1338031372,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",-271143939,null),null)], null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Starts up a Bidi router based on Google Closure's 'History'\n\n  Types:\n\n    Location :- {:handler ...\n                 :route-params {...}}\n\n  Parameters:\n\n    routes :- a Bidi route structure\n    on-navigate :- 0-arg function, accepting a Location\n    default-location :- Location to default to if the current token doesn't match a route\n\n  Returns :- Router\n\n  Example usage:\n\n    (require '[bidi.router :as br])\n\n    (let [!location (atom nil)\n          router (br/start-router! [\"\" {\"/\" ::home-page\n                                          \"/page2\" ::page2}]\n                                   {:on-navigate (fn [location]\n                                                   (reset! !location location))\n                                    :default-location {:handler ::home-page}})]\n\n      ...\n\n      (br/set-location! router {:handler ::page2}))"], null)),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"p__47277","p__47277",-1115721288,null),new cljs.core.Symbol(null,"map__47318","map__47318",-95138497,null),new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"default-location","default-location",-1338031372,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"token->location","token->location",354786609,null),new cljs.core.Symbol(null,"location->token","location->token",2092281408,null),new cljs.core.Symbol(null,"meta47341","meta47341",-804644825,null)], null);
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router47340.cljs$lang$type = true;

bidi.router.t_bidi$router47340.cljs$lang$ctorStr = "bidi.router/t_bidi$router47340";

bidi.router.t_bidi$router47340.cljs$lang$ctorPrWriter = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"bidi.router/t_bidi$router47340");
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;

bidi.router.__GT_t_bidi$router47340 = ((function (history,map__47318,map__47318__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$___GT_t_bidi$router47340(start_router_BANG___$1,routes__$1,p__47277__$1,map__47318__$2,on_navigate__$1,default_location__$1,history__$1,token__GT_location__$1,location__GT_token__$1,meta47341){
return (new bidi.router.t_bidi$router47340(start_router_BANG___$1,routes__$1,p__47277__$1,map__47318__$2,on_navigate__$1,default_location__$1,history__$1,token__GT_location__$1,location__GT_token__$1,meta47341));
});})(history,map__47318,map__47318__$1,on_navigate,default_location))
;

}

return (new bidi.router.t_bidi$router47340(bidi$router$start_router_BANG_,routes,p__47277,map__47318__$1,on_navigate,default_location,history,token__GT_location,location__GT_token,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=router.js.map?rel=1452464338421