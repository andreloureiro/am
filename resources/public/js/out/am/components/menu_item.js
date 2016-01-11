// Compiled by ClojureScript 1.7.228 {}
goog.provide('am.components.menu_item');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
am.components.menu_item.MenuItem = (function am$components$menu_item$MenuItem(){
var this__41238__auto__ = this;
React.Component.apply(this__41238__auto__,arguments);

if(!((this__41238__auto__.initLocalState == null))){
this__41238__auto__.state = this__41238__auto__.initLocalState();
} else {
this__41238__auto__.state = {};
}

return this__41238__auto__;
});

am.components.menu_item.MenuItem.prototype = goog.object.clone(React.Component.prototype);

var x42569_42634 = am.components.menu_item.MenuItem.prototype;
x42569_42634.componentWillUpdate = ((function (x42569_42634){
return (function (next_props__41179__auto__,next_state__41180__auto__){
var this__41178__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__41178__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41178__auto__);
});})(x42569_42634))
;

x42569_42634.shouldComponentUpdate = ((function (x42569_42634){
return (function (next_props__41179__auto__,next_state__41180__auto__){
var this__41178__auto__ = this;
var or__38504__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41178__auto__),goog.object.get(next_props__41179__auto__,"omcljs$value"));
if(or__38504__auto__){
return or__38504__auto__;
} else {
var and__38492__auto__ = this__41178__auto__.state;
if(cljs.core.truth_(and__38492__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41178__auto__.state,"omcljs$state"),goog.object.get(next_state__41180__auto__,"omcljs$state"));
} else {
return and__38492__auto__;
}
}
});})(x42569_42634))
;

x42569_42634.componentWillUnmount = ((function (x42569_42634){
return (function (){
var this__41178__auto__ = this;
var r__41184__auto__ = om.next.get_reconciler.call(null,this__41178__auto__);
var cfg__41185__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41184__auto__);
var st__41186__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41185__auto__);
var indexer__41183__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41185__auto__);
if((st__41186__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__41186__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41178__auto__);
}

if((indexer__41183__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41183__auto__,this__41178__auto__);
}
});})(x42569_42634))
;

x42569_42634.componentDidUpdate = ((function (x42569_42634){
return (function (prev_props__41181__auto__,prev_state__41182__auto__){
var this__41178__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41178__auto__);
});})(x42569_42634))
;

x42569_42634.isMounted = ((function (x42569_42634){
return (function (){
var this__41178__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41178__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x42569_42634))
;

x42569_42634.componentWillMount = ((function (x42569_42634){
return (function (){
var this__41178__auto__ = this;
var indexer__41183__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41178__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41183__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41183__auto__,this__41178__auto__);
}
});})(x42569_42634))
;

x42569_42634.render = ((function (x42569_42634){
return (function (){
var this__41177__auto__ = this;
var this$ = this__41177__auto__;
var _STAR_reconciler_STAR_42611 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42612 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42613 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42614 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42615 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41177__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41177__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41177__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41177__auto__);

om.next._STAR_parent_STAR_ = this__41177__auto__;

try{var map__42619 = om.next.props.call(null,this$);
var map__42619__$1 = ((((!((map__42619 == null)))?((((map__42619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42619):map__42619);
var id = cljs.core.get.call(null,map__42619__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__42619__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__42619__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return React.DOM.li({"key": id},om.util.force_children.call(null,name));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42615;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42614;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42613;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42612;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42611;
}});})(x42569_42634))
;


am.components.menu_item.MenuItem.prototype.constructor = am.components.menu_item.MenuItem;

am.components.menu_item.MenuItem.prototype.om$isComponent = true;

var x42622_42661 = am.components.menu_item.MenuItem;
x42622_42661.om$next$IQuery$ = true;

x42622_42661.om$next$IQuery$query$arity$1 = ((function (x42622_42661){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"path","path",-188191168)], null);
});})(x42622_42661))
;


var x42627_42665 = am.components.menu_item.MenuItem.prototype;
x42627_42665.om$next$IQuery$ = true;

x42627_42665.om$next$IQuery$query$arity$1 = ((function (x42627_42665){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"path","path",-188191168)], null);
});})(x42627_42665))
;


am.components.menu_item.MenuItem.cljs$lang$type = true;

am.components.menu_item.MenuItem.cljs$lang$ctorStr = "am.components.menu-item/MenuItem";

am.components.menu_item.MenuItem.cljs$lang$ctorPrWriter = (function (this__41240__auto__,writer__41241__auto__,opt__41242__auto__){
return cljs.core._write.call(null,writer__41241__auto__,"am.components.menu-item/MenuItem");
});
am.components.menu_item.menu_item = om.next.factory.call(null,am.components.menu_item.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=menu_item.js.map?rel=1452464328242