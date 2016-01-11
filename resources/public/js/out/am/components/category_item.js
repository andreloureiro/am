// Compiled by ClojureScript 1.7.228 {}
goog.provide('am.components.category_item');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
am.components.category_item.CategoryItem = (function am$components$category_item$CategoryItem(){
var this__41238__auto__ = this;
React.Component.apply(this__41238__auto__,arguments);

if(!((this__41238__auto__.initLocalState == null))){
this__41238__auto__.state = this__41238__auto__.initLocalState();
} else {
this__41238__auto__.state = {};
}

return this__41238__auto__;
});

am.components.category_item.CategoryItem.prototype = goog.object.clone(React.Component.prototype);

var x42570_42626 = am.components.category_item.CategoryItem.prototype;
x42570_42626.componentWillUpdate = ((function (x42570_42626){
return (function (next_props__41179__auto__,next_state__41180__auto__){
var this__41178__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__41178__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41178__auto__);
});})(x42570_42626))
;

x42570_42626.shouldComponentUpdate = ((function (x42570_42626){
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
});})(x42570_42626))
;

x42570_42626.componentWillUnmount = ((function (x42570_42626){
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
});})(x42570_42626))
;

x42570_42626.componentDidUpdate = ((function (x42570_42626){
return (function (prev_props__41181__auto__,prev_state__41182__auto__){
var this__41178__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41178__auto__);
});})(x42570_42626))
;

x42570_42626.isMounted = ((function (x42570_42626){
return (function (){
var this__41178__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41178__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x42570_42626))
;

x42570_42626.componentWillMount = ((function (x42570_42626){
return (function (){
var this__41178__auto__ = this;
var indexer__41183__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41178__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41183__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41183__auto__,this__41178__auto__);
}
});})(x42570_42626))
;


am.components.category_item.CategoryItem.prototype.constructor = am.components.category_item.CategoryItem;

am.components.category_item.CategoryItem.prototype.om$isComponent = true;

var x42592_42646 = am.components.category_item.CategoryItem;
x42592_42646.om$next$Ident$ = true;

x42592_42646.om$next$Ident$ident$arity$2 = ((function (x42592_42646){
return (function (this$,p__42593){
var map__42594 = p__42593;
var map__42594__$1 = ((((!((map__42594 == null)))?((((map__42594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42594):map__42594);
var id = cljs.core.get.call(null,map__42594__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","by-id","category/by-id",-2045374139),id], null);
});})(x42592_42646))
;

x42592_42646.om$next$IQuery$ = true;

x42592_42646.om$next$IQuery$query$arity$1 = ((function (x42592_42646){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x42592_42646))
;


var x42603_42655 = am.components.category_item.CategoryItem.prototype;
x42603_42655.om$next$Ident$ = true;

x42603_42655.om$next$Ident$ident$arity$2 = ((function (x42603_42655){
return (function (this$,p__42604){
var map__42605 = p__42604;
var map__42605__$1 = ((((!((map__42605 == null)))?((((map__42605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42605):map__42605);
var id = cljs.core.get.call(null,map__42605__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","by-id","category/by-id",-2045374139),id], null);
});})(x42603_42655))
;

x42603_42655.om$next$IQuery$ = true;

x42603_42655.om$next$IQuery$query$arity$1 = ((function (x42603_42655){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x42603_42655))
;


am.components.category_item.CategoryItem.cljs$lang$type = true;

am.components.category_item.CategoryItem.cljs$lang$ctorStr = "am.components.category-item/CategoryItem";

am.components.category_item.CategoryItem.cljs$lang$ctorPrWriter = (function (this__41240__auto__,writer__41241__auto__,opt__41242__auto__){
return cljs.core._write.call(null,writer__41241__auto__,"am.components.category-item/CategoryItem");
});
am.components.category_item.category_item = om.next.factory.call(null,am.components.category_item.CategoryItem);

//# sourceMappingURL=category_item.js.map?rel=1452464328218