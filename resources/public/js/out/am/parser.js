// Compiled by ClojureScript 1.7.228 {}
goog.provide('am.parser');
goog.require('cljs.core');
goog.require('om.next');
if(typeof am.parser.readf !== 'undefined'){
} else {
am.parser.readf = (function (){var method_table__19237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"am.parser","readf"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19241__auto__,method_table__19237__auto__,prefer_table__19238__auto__,method_cache__19239__auto__,cached_hierarchy__19240__auto__));
})();
}
cljs.core._add_method.call(null,am.parser.readf,new cljs.core.Keyword("app","title","app/title",636408784),(function (p__27238,k,_){
var map__27239 = p__27238;
var map__27239__$1 = ((((!((map__27239 == null)))?((((map__27239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27239):map__27239);
var state = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
}));
cljs.core._add_method.call(null,am.parser.readf,new cljs.core.Keyword("app","menu","app/menu",352092863),(function (p__27241,k,_){
var map__27242 = p__27241;
var map__27242__$1 = ((((!((map__27242 == null)))?((((map__27242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27242):map__27242);
var state = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
}));
cljs.core._add_method.call(null,am.parser.readf,new cljs.core.Keyword("app","active-route","app/active-route",-1914696978),(function (p__27244,k,_){
var map__27245 = p__27244;
var map__27245__$1 = ((((!((map__27245 == null)))?((((map__27245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27245):map__27245);
var state = cljs.core.get.call(null,map__27245__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
}));
cljs.core._add_method.call(null,am.parser.readf,new cljs.core.Keyword("promotion","list","promotion/list",1577284478),(function (p__27247,k,_){
var map__27248 = p__27247;
var map__27248__$1 = ((((!((map__27248 == null)))?((((map__27248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27248):map__27248);
var state = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var st = cljs.core.deref.call(null,state);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,k),st)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),ast], null));
}));
cljs.core._add_method.call(null,am.parser.readf,new cljs.core.Keyword("promotion","by-id","promotion/by-id",1890574882),(function (p__27250,k,p__27251){
var map__27252 = p__27250;
var map__27252__$1 = ((((!((map__27252 == null)))?((((map__27252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27252):map__27252);
var state = cljs.core.get.call(null,map__27252__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27252__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__27253 = p__27251;
var map__27253__$1 = ((((!((map__27253 == null)))?((((map__27253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27253):map__27253);
var id = cljs.core.get.call(null,map__27253__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,id], null))], null);
}));
cljs.core._add_method.call(null,am.parser.readf,new cljs.core.Keyword("category","list","category/list",714683249),(function (p__27256,k,_){
var map__27257 = p__27256;
var map__27257__$1 = ((((!((map__27257 == null)))?((((map__27257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27257):map__27257);
var state = cljs.core.get.call(null,map__27257__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27257__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,k),st)], null);
}));
cljs.core._add_method.call(null,am.parser.readf,new cljs.core.Keyword("category","by-id","category/by-id",-2045374139),(function (p__27259,k,p__27260){
var map__27261 = p__27259;
var map__27261__$1 = ((((!((map__27261 == null)))?((((map__27261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27261):map__27261);
var state = cljs.core.get.call(null,map__27261__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27262 = p__27260;
var map__27262__$1 = ((((!((map__27262 == null)))?((((map__27262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27262):map__27262);
var id = cljs.core.get.call(null,map__27262__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,id], null))], null);
}));
if(typeof am.parser.mutate !== 'undefined'){
} else {
am.parser.mutate = (function (){var method_table__19237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"am.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19241__auto__,method_table__19237__auto__,prefer_table__19238__auto__,method_cache__19239__auto__,cached_hierarchy__19240__auto__));
})();
}
cljs.core._add_method.call(null,am.parser.mutate,new cljs.core.Symbol("route","activate","route/activate",-2053590500,null),(function (p__27265,k,p__27266){
var map__27267 = p__27265;
var map__27267__$1 = ((((!((map__27267 == null)))?((((map__27267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27267):map__27267);
var state = cljs.core.get.call(null,map__27267__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27268 = p__27266;
var map__27268__$1 = ((((!((map__27268 == null)))?((((map__27268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27268):map__27268);
var to = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("app","active-route","app/active-route",-1914696978),to)], null);
}));
cljs.core._add_method.call(null,am.parser.mutate,new cljs.core.Symbol("app","testing","app/testing",-1492868987,null),(function (p__27271,k,p){
var map__27272 = p__27271;
var map__27272__$1 = ((((!((map__27272 == null)))?((((map__27272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27272):map__27272);
var state = cljs.core.get.call(null,map__27272__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27272,map__27272__$1,state){
return (function (){
return cljs.core.println.call(null,cljs.core.deref.call(null,state));
});})(map__27272,map__27272__$1,state))
], null);
}));
am.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),am.parser.readf,new cljs.core.Keyword(null,"mutate","mutate",1422419038),am.parser.mutate], null));

//# sourceMappingURL=parser.js.map?rel=1452475023624