// Compiled by ClojureScript 1.7.228 {}
goog.provide('am.components.promotion_item');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
am.components.promotion_item.PromotionItem = (function am$components$promotion_item$PromotionItem(){
var this__21558__auto__ = this;
React.Component.apply(this__21558__auto__,arguments);

if(!((this__21558__auto__.initLocalState == null))){
this__21558__auto__.state = this__21558__auto__.initLocalState();
} else {
this__21558__auto__.state = {};
}

return this__21558__auto__;
});

am.components.promotion_item.PromotionItem.prototype = goog.object.clone(React.Component.prototype);

var x27146_27162 = am.components.promotion_item.PromotionItem.prototype;
x27146_27162.componentWillUpdate = ((function (x27146_27162){
return (function (next_props__21488__auto__,next_state__21489__auto__){
var this__21487__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21487__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21487__auto__);
});})(x27146_27162))
;

x27146_27162.shouldComponentUpdate = ((function (x27146_27162){
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
});})(x27146_27162))
;

x27146_27162.componentWillUnmount = ((function (x27146_27162){
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
});})(x27146_27162))
;

x27146_27162.componentDidUpdate = ((function (x27146_27162){
return (function (prev_props__21490__auto__,prev_state__21491__auto__){
var this__21487__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21487__auto__);
});})(x27146_27162))
;

x27146_27162.isMounted = ((function (x27146_27162){
return (function (){
var this__21487__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21487__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27146_27162))
;

x27146_27162.componentWillMount = ((function (x27146_27162){
return (function (){
var this__21487__auto__ = this;
var indexer__21492__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21487__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21492__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21492__auto__,this__21487__auto__);
}
});})(x27146_27162))
;

x27146_27162.render = ((function (x27146_27162){
return (function (){
var this__21486__auto__ = this;
var this$ = this__21486__auto__;
var _STAR_reconciler_STAR_27147 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27148 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27149 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27150 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27151 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21486__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21486__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21486__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21486__auto__);

om.next._STAR_parent_STAR_ = this__21486__auto__;

try{var map__27152 = om.next.props.call(null,this$);
var map__27152__$1 = ((((!((map__27152 == null)))?((((map__27152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27152):map__27152);
var id = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var hashtag = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899));
cljs.core.println.call(null,"[RENDER] PromotionItem",id);

return React.DOM.li({"key": id},om.util.force_children.call(null,[cljs.core.str(name),cljs.core.str(" - "),cljs.core.str(hashtag)].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27151;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27150;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27149;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27148;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27147;
}});})(x27146_27162))
;


am.components.promotion_item.PromotionItem.prototype.constructor = am.components.promotion_item.PromotionItem;

am.components.promotion_item.PromotionItem.prototype.om$isComponent = true;

var x27154_27163 = am.components.promotion_item.PromotionItem;
x27154_27163.om$next$Ident$ = true;

x27154_27163.om$next$Ident$ident$arity$2 = ((function (x27154_27163){
return (function (this$,p__27155){
var map__27156 = p__27155;
var map__27156__$1 = ((((!((map__27156 == null)))?((((map__27156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27156):map__27156);
var id = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("promotion","by-id","promotion/by-id",1890574882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))));
});})(x27154_27163))
;

x27154_27163.om$next$IQuery$ = true;

x27154_27163.om$next$IQuery$query$arity$1 = ((function (x27154_27163){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899)], null);
});})(x27154_27163))
;


var x27158_27164 = am.components.promotion_item.PromotionItem.prototype;
x27158_27164.om$next$Ident$ = true;

x27158_27164.om$next$Ident$ident$arity$2 = ((function (x27158_27164){
return (function (this$,p__27159){
var map__27160 = p__27159;
var map__27160__$1 = ((((!((map__27160 == null)))?((((map__27160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27160):map__27160);
var id = cljs.core.get.call(null,map__27160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("promotion","by-id","promotion/by-id",1890574882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))));
});})(x27158_27164))
;

x27158_27164.om$next$IQuery$ = true;

x27158_27164.om$next$IQuery$query$arity$1 = ((function (x27158_27164){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899)], null);
});})(x27158_27164))
;


am.components.promotion_item.PromotionItem.cljs$lang$type = true;

am.components.promotion_item.PromotionItem.cljs$lang$ctorStr = "am.components.promotion-item/PromotionItem";

am.components.promotion_item.PromotionItem.cljs$lang$ctorPrWriter = (function (this__21560__auto__,writer__21561__auto__,opt__21562__auto__){
return cljs.core._write.call(null,writer__21561__auto__,"am.components.promotion-item/PromotionItem");
});
am.components.promotion_item.promotion_item = om.next.factory.call(null,am.components.promotion_item.PromotionItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=promotion_item.js.map?rel=1452474757363