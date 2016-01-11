// Compiled by ClojureScript 1.7.228 {}
goog.provide('am.components.app');
goog.require('cljs.core');
goog.require('om.next');
goog.require('am.components.promotion_item');
goog.require('am.components.category_item');
goog.require('am.components.menu_item');
goog.require('om.dom');
/**
 * @constructor
 */
am.components.app.App = (function am$components$app$App(){
var this__21558__auto__ = this;
React.Component.apply(this__21558__auto__,arguments);

if(!((this__21558__auto__.initLocalState == null))){
this__21558__auto__.state = this__21558__auto__.initLocalState();
} else {
this__21558__auto__.state = {};
}

return this__21558__auto__;
});

am.components.app.App.prototype = goog.object.clone(React.Component.prototype);

var x27219_27229 = am.components.app.App.prototype;
x27219_27229.componentWillUpdate = ((function (x27219_27229){
return (function (next_props__21488__auto__,next_state__21489__auto__){
var this__21487__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21487__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21487__auto__);
});})(x27219_27229))
;

x27219_27229.shouldComponentUpdate = ((function (x27219_27229){
return (function (next_props__21488__auto__,next_state__21489__auto__){
var this__21487__auto__ = this;
var or__18324__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21487__auto__),goog.object.get(next_props__21488__auto__,"omcljs$value"));
if(or__18324__auto__){
return or__18324__auto__;
} else {
var and__18312__auto__ = this__21487__auto__.state;
if(cljs.core.truth_(and__18312__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21487__auto__.state,"omcljs$state"),goog.object.get(next_state__21489__auto__,"omcljs$state"));
} else {
return and__18312__auto__;
}
}
});})(x27219_27229))
;

x27219_27229.componentWillUnmount = ((function (x27219_27229){
return (function (){
var this__21487__auto__ = this;
var r__21493__auto__ = om.next.get_reconciler.call(null,this__21487__auto__);
var cfg__21494__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21493__auto__);
var st__21495__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21494__auto__);
var indexer__21492__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21494__auto__);
if((st__21495__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21495__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21487__auto__);
}

if((indexer__21492__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21492__auto__,this__21487__auto__);
}
});})(x27219_27229))
;

x27219_27229.componentDidUpdate = ((function (x27219_27229){
return (function (prev_props__21490__auto__,prev_state__21491__auto__){
var this__21487__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21487__auto__);
});})(x27219_27229))
;

x27219_27229.isMounted = ((function (x27219_27229){
return (function (){
var this__21487__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21487__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27219_27229))
;

x27219_27229.componentWillMount = ((function (x27219_27229){
return (function (){
var this__21487__auto__ = this;
var indexer__21492__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21487__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21492__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21492__auto__,this__21487__auto__);
}
});})(x27219_27229))
;

x27219_27229.render = ((function (x27219_27229){
return (function (){
var this__21486__auto__ = this;
var this$ = this__21486__auto__;
var _STAR_reconciler_STAR_27220 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27221 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27222 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27223 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27224 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21486__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21486__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21486__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21486__auto__);

om.next._STAR_parent_STAR_ = this__21486__auto__;

try{var map__27225 = om.next.props.call(null,this$);
var map__27225__$1 = ((((!((map__27225 == null)))?((((map__27225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27225):map__27225);
var list = cljs.core.get.call(null,map__27225__$1,new cljs.core.Keyword("promotion","list","promotion/list",1577284478));
var menu = cljs.core.get.call(null,map__27225__$1,new cljs.core.Keyword("app","menu","app/menu",352092863));
var active_route = cljs.core.get.call(null,map__27225__$1,new cljs.core.Keyword("app","active-route","app/active-route",-1914696978));
cljs.core.println.call(null,"[RENDER] App with state",om.next.props.call(null,this$));

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h1(null,om.util.force_children.call(null,"am"))),om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,cljs.core.map.call(null,am.components.menu_item.menu_item,menu)))),om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,cljs.core.map.call(null,am.components.promotion_item.promotion_item,list)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27224;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27223;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27222;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27221;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27220;
}});})(x27219_27229))
;


am.components.app.App.prototype.constructor = am.components.app.App;

am.components.app.App.prototype.om$isComponent = true;

var x27227_27230 = am.components.app.App;
x27227_27230.om$next$IQuery$ = true;

x27227_27230.om$next$IQuery$query$arity$1 = ((function (x27227_27230){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","list","category/list",714683249),om.next.get_query.call(null,am.components.category_item.CategoryItem)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("promotion","list","promotion/list",1577284478),om.next.get_query.call(null,am.components.promotion_item.PromotionItem)], null),new cljs.core.Keyword("app","menu","app/menu",352092863)], null);
});})(x27227_27230))
;


var x27228_27231 = am.components.app.App.prototype;
x27228_27231.om$next$IQuery$ = true;

x27228_27231.om$next$IQuery$query$arity$1 = ((function (x27228_27231){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","list","category/list",714683249),om.next.get_query.call(null,am.components.category_item.CategoryItem)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("promotion","list","promotion/list",1577284478),om.next.get_query.call(null,am.components.promotion_item.PromotionItem)], null),new cljs.core.Keyword("app","menu","app/menu",352092863)], null);
});})(x27228_27231))
;


am.components.app.App.cljs$lang$type = true;

am.components.app.App.cljs$lang$ctorStr = "am.components.app/App";

am.components.app.App.cljs$lang$ctorPrWriter = (function (this__21560__auto__,writer__21561__auto__,opt__21562__auto__){
return cljs.core._write.call(null,writer__21561__auto__,"am.components.app/App");
});

//# sourceMappingURL=app.js.map?rel=1452475010886