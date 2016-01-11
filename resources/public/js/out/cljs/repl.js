// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39666_39680 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39667_39681 = null;
var count__39668_39682 = (0);
var i__39669_39683 = (0);
while(true){
if((i__39669_39683 < count__39668_39682)){
var f_39684 = cljs.core._nth.call(null,chunk__39667_39681,i__39669_39683);
cljs.core.println.call(null,"  ",f_39684);

var G__39685 = seq__39666_39680;
var G__39686 = chunk__39667_39681;
var G__39687 = count__39668_39682;
var G__39688 = (i__39669_39683 + (1));
seq__39666_39680 = G__39685;
chunk__39667_39681 = G__39686;
count__39668_39682 = G__39687;
i__39669_39683 = G__39688;
continue;
} else {
var temp__4425__auto___39689 = cljs.core.seq.call(null,seq__39666_39680);
if(temp__4425__auto___39689){
var seq__39666_39690__$1 = temp__4425__auto___39689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39666_39690__$1)){
var c__39307__auto___39691 = cljs.core.chunk_first.call(null,seq__39666_39690__$1);
var G__39692 = cljs.core.chunk_rest.call(null,seq__39666_39690__$1);
var G__39693 = c__39307__auto___39691;
var G__39694 = cljs.core.count.call(null,c__39307__auto___39691);
var G__39695 = (0);
seq__39666_39680 = G__39692;
chunk__39667_39681 = G__39693;
count__39668_39682 = G__39694;
i__39669_39683 = G__39695;
continue;
} else {
var f_39696 = cljs.core.first.call(null,seq__39666_39690__$1);
cljs.core.println.call(null,"  ",f_39696);

var G__39697 = cljs.core.next.call(null,seq__39666_39690__$1);
var G__39698 = null;
var G__39699 = (0);
var G__39700 = (0);
seq__39666_39680 = G__39697;
chunk__39667_39681 = G__39698;
count__39668_39682 = G__39699;
i__39669_39683 = G__39700;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39701 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__38504__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39701);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39701)))?cljs.core.second.call(null,arglists_39701):arglists_39701));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39670 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39671 = null;
var count__39672 = (0);
var i__39673 = (0);
while(true){
if((i__39673 < count__39672)){
var vec__39674 = cljs.core._nth.call(null,chunk__39671,i__39673);
var name = cljs.core.nth.call(null,vec__39674,(0),null);
var map__39675 = cljs.core.nth.call(null,vec__39674,(1),null);
var map__39675__$1 = ((((!((map__39675 == null)))?((((map__39675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39675):map__39675);
var doc = cljs.core.get.call(null,map__39675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39675__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39702 = seq__39670;
var G__39703 = chunk__39671;
var G__39704 = count__39672;
var G__39705 = (i__39673 + (1));
seq__39670 = G__39702;
chunk__39671 = G__39703;
count__39672 = G__39704;
i__39673 = G__39705;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39670);
if(temp__4425__auto__){
var seq__39670__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39670__$1)){
var c__39307__auto__ = cljs.core.chunk_first.call(null,seq__39670__$1);
var G__39706 = cljs.core.chunk_rest.call(null,seq__39670__$1);
var G__39707 = c__39307__auto__;
var G__39708 = cljs.core.count.call(null,c__39307__auto__);
var G__39709 = (0);
seq__39670 = G__39706;
chunk__39671 = G__39707;
count__39672 = G__39708;
i__39673 = G__39709;
continue;
} else {
var vec__39677 = cljs.core.first.call(null,seq__39670__$1);
var name = cljs.core.nth.call(null,vec__39677,(0),null);
var map__39678 = cljs.core.nth.call(null,vec__39677,(1),null);
var map__39678__$1 = ((((!((map__39678 == null)))?((((map__39678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39678):map__39678);
var doc = cljs.core.get.call(null,map__39678__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39678__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39710 = cljs.core.next.call(null,seq__39670__$1);
var G__39711 = null;
var G__39712 = (0);
var G__39713 = (0);
seq__39670 = G__39710;
chunk__39671 = G__39711;
count__39672 = G__39712;
i__39673 = G__39713;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1452464261410