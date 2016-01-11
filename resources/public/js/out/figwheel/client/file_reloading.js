// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18324__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18324__auto__){
return or__18324__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18324__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18324__auto__)){
return or__18324__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21541_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21541_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21602 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21603 = null;
var count__21604 = (0);
var i__21605 = (0);
while(true){
if((i__21605 < count__21604)){
var n = cljs.core._nth.call(null,chunk__21603,i__21605);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21609 = seq__21602;
var G__21610 = chunk__21603;
var G__21611 = count__21604;
var G__21612 = (i__21605 + (1));
seq__21602 = G__21609;
chunk__21603 = G__21610;
count__21604 = G__21611;
i__21605 = G__21612;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21602);
if(temp__4425__auto__){
var seq__21602__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21602__$1)){
var c__19127__auto__ = cljs.core.chunk_first.call(null,seq__21602__$1);
var G__21619 = cljs.core.chunk_rest.call(null,seq__21602__$1);
var G__21620 = c__19127__auto__;
var G__21621 = cljs.core.count.call(null,c__19127__auto__);
var G__21622 = (0);
seq__21602 = G__21619;
chunk__21603 = G__21620;
count__21604 = G__21621;
i__21605 = G__21622;
continue;
} else {
var n = cljs.core.first.call(null,seq__21602__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21640 = cljs.core.next.call(null,seq__21602__$1);
var G__21641 = null;
var G__21642 = (0);
var G__21643 = (0);
seq__21602 = G__21640;
chunk__21603 = G__21641;
count__21604 = G__21642;
i__21605 = G__21643;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__21693_21705 = cljs.core.seq.call(null,deps);
var chunk__21694_21706 = null;
var count__21695_21707 = (0);
var i__21696_21708 = (0);
while(true){
if((i__21696_21708 < count__21695_21707)){
var dep_21709 = cljs.core._nth.call(null,chunk__21694_21706,i__21696_21708);
topo_sort_helper_STAR_.call(null,dep_21709,(depth + (1)),state);

var G__21710 = seq__21693_21705;
var G__21711 = chunk__21694_21706;
var G__21712 = count__21695_21707;
var G__21713 = (i__21696_21708 + (1));
seq__21693_21705 = G__21710;
chunk__21694_21706 = G__21711;
count__21695_21707 = G__21712;
i__21696_21708 = G__21713;
continue;
} else {
var temp__4425__auto___21714 = cljs.core.seq.call(null,seq__21693_21705);
if(temp__4425__auto___21714){
var seq__21693_21715__$1 = temp__4425__auto___21714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21693_21715__$1)){
var c__19127__auto___21716 = cljs.core.chunk_first.call(null,seq__21693_21715__$1);
var G__21717 = cljs.core.chunk_rest.call(null,seq__21693_21715__$1);
var G__21718 = c__19127__auto___21716;
var G__21719 = cljs.core.count.call(null,c__19127__auto___21716);
var G__21720 = (0);
seq__21693_21705 = G__21717;
chunk__21694_21706 = G__21718;
count__21695_21707 = G__21719;
i__21696_21708 = G__21720;
continue;
} else {
var dep_21721 = cljs.core.first.call(null,seq__21693_21715__$1);
topo_sort_helper_STAR_.call(null,dep_21721,(depth + (1)),state);

var G__21722 = cljs.core.next.call(null,seq__21693_21715__$1);
var G__21723 = null;
var G__21724 = (0);
var G__21725 = (0);
seq__21693_21705 = G__21722;
chunk__21694_21706 = G__21723;
count__21695_21707 = G__21724;
i__21696_21708 = G__21725;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21699){
var vec__21701 = p__21699;
var x = cljs.core.nth.call(null,vec__21701,(0),null);
var xs = cljs.core.nthnext.call(null,vec__21701,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21701,x,xs,get_deps__$1){
return (function (p1__21649_SHARP_){
return clojure.set.difference.call(null,p1__21649_SHARP_,x);
});})(vec__21701,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__21761 = cljs.core.seq.call(null,provides);
var chunk__21762 = null;
var count__21763 = (0);
var i__21764 = (0);
while(true){
if((i__21764 < count__21763)){
var prov = cljs.core._nth.call(null,chunk__21762,i__21764);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21765_21810 = cljs.core.seq.call(null,requires);
var chunk__21766_21811 = null;
var count__21767_21812 = (0);
var i__21768_21813 = (0);
while(true){
if((i__21768_21813 < count__21767_21812)){
var req_21815 = cljs.core._nth.call(null,chunk__21766_21811,i__21768_21813);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21815,prov);

var G__21816 = seq__21765_21810;
var G__21817 = chunk__21766_21811;
var G__21818 = count__21767_21812;
var G__21819 = (i__21768_21813 + (1));
seq__21765_21810 = G__21816;
chunk__21766_21811 = G__21817;
count__21767_21812 = G__21818;
i__21768_21813 = G__21819;
continue;
} else {
var temp__4425__auto___21820 = cljs.core.seq.call(null,seq__21765_21810);
if(temp__4425__auto___21820){
var seq__21765_21821__$1 = temp__4425__auto___21820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21765_21821__$1)){
var c__19127__auto___21822 = cljs.core.chunk_first.call(null,seq__21765_21821__$1);
var G__21823 = cljs.core.chunk_rest.call(null,seq__21765_21821__$1);
var G__21824 = c__19127__auto___21822;
var G__21825 = cljs.core.count.call(null,c__19127__auto___21822);
var G__21826 = (0);
seq__21765_21810 = G__21823;
chunk__21766_21811 = G__21824;
count__21767_21812 = G__21825;
i__21768_21813 = G__21826;
continue;
} else {
var req_21828 = cljs.core.first.call(null,seq__21765_21821__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21828,prov);

var G__21829 = cljs.core.next.call(null,seq__21765_21821__$1);
var G__21830 = null;
var G__21831 = (0);
var G__21832 = (0);
seq__21765_21810 = G__21829;
chunk__21766_21811 = G__21830;
count__21767_21812 = G__21831;
i__21768_21813 = G__21832;
continue;
}
} else {
}
}
break;
}

var G__21833 = seq__21761;
var G__21834 = chunk__21762;
var G__21835 = count__21763;
var G__21836 = (i__21764 + (1));
seq__21761 = G__21833;
chunk__21762 = G__21834;
count__21763 = G__21835;
i__21764 = G__21836;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21761);
if(temp__4425__auto__){
var seq__21761__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21761__$1)){
var c__19127__auto__ = cljs.core.chunk_first.call(null,seq__21761__$1);
var G__21837 = cljs.core.chunk_rest.call(null,seq__21761__$1);
var G__21838 = c__19127__auto__;
var G__21839 = cljs.core.count.call(null,c__19127__auto__);
var G__21840 = (0);
seq__21761 = G__21837;
chunk__21762 = G__21838;
count__21763 = G__21839;
i__21764 = G__21840;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21761__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21769_21843 = cljs.core.seq.call(null,requires);
var chunk__21770_21844 = null;
var count__21771_21845 = (0);
var i__21772_21846 = (0);
while(true){
if((i__21772_21846 < count__21771_21845)){
var req_21850 = cljs.core._nth.call(null,chunk__21770_21844,i__21772_21846);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21850,prov);

var G__21852 = seq__21769_21843;
var G__21853 = chunk__21770_21844;
var G__21854 = count__21771_21845;
var G__21855 = (i__21772_21846 + (1));
seq__21769_21843 = G__21852;
chunk__21770_21844 = G__21853;
count__21771_21845 = G__21854;
i__21772_21846 = G__21855;
continue;
} else {
var temp__4425__auto___21856__$1 = cljs.core.seq.call(null,seq__21769_21843);
if(temp__4425__auto___21856__$1){
var seq__21769_21859__$1 = temp__4425__auto___21856__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21769_21859__$1)){
var c__19127__auto___21862 = cljs.core.chunk_first.call(null,seq__21769_21859__$1);
var G__21863 = cljs.core.chunk_rest.call(null,seq__21769_21859__$1);
var G__21864 = c__19127__auto___21862;
var G__21865 = cljs.core.count.call(null,c__19127__auto___21862);
var G__21866 = (0);
seq__21769_21843 = G__21863;
chunk__21770_21844 = G__21864;
count__21771_21845 = G__21865;
i__21772_21846 = G__21866;
continue;
} else {
var req_21872 = cljs.core.first.call(null,seq__21769_21859__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21872,prov);

var G__21876 = cljs.core.next.call(null,seq__21769_21859__$1);
var G__21877 = null;
var G__21878 = (0);
var G__21879 = (0);
seq__21769_21843 = G__21876;
chunk__21770_21844 = G__21877;
count__21771_21845 = G__21878;
i__21772_21846 = G__21879;
continue;
}
} else {
}
}
break;
}

var G__21886 = cljs.core.next.call(null,seq__21761__$1);
var G__21887 = null;
var G__21888 = (0);
var G__21889 = (0);
seq__21761 = G__21886;
chunk__21762 = G__21887;
count__21763 = G__21888;
i__21764 = G__21889;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__21899_21906 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21900_21907 = null;
var count__21901_21908 = (0);
var i__21902_21909 = (0);
while(true){
if((i__21902_21909 < count__21901_21908)){
var ns_21910 = cljs.core._nth.call(null,chunk__21900_21907,i__21902_21909);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21910);

var G__21911 = seq__21899_21906;
var G__21912 = chunk__21900_21907;
var G__21913 = count__21901_21908;
var G__21914 = (i__21902_21909 + (1));
seq__21899_21906 = G__21911;
chunk__21900_21907 = G__21912;
count__21901_21908 = G__21913;
i__21902_21909 = G__21914;
continue;
} else {
var temp__4425__auto___21915 = cljs.core.seq.call(null,seq__21899_21906);
if(temp__4425__auto___21915){
var seq__21899_21916__$1 = temp__4425__auto___21915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21899_21916__$1)){
var c__19127__auto___21917 = cljs.core.chunk_first.call(null,seq__21899_21916__$1);
var G__21918 = cljs.core.chunk_rest.call(null,seq__21899_21916__$1);
var G__21919 = c__19127__auto___21917;
var G__21920 = cljs.core.count.call(null,c__19127__auto___21917);
var G__21921 = (0);
seq__21899_21906 = G__21918;
chunk__21900_21907 = G__21919;
count__21901_21908 = G__21920;
i__21902_21909 = G__21921;
continue;
} else {
var ns_21922 = cljs.core.first.call(null,seq__21899_21916__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21922);

var G__21923 = cljs.core.next.call(null,seq__21899_21916__$1);
var G__21924 = null;
var G__21925 = (0);
var G__21926 = (0);
seq__21899_21906 = G__21923;
chunk__21900_21907 = G__21924;
count__21901_21908 = G__21925;
i__21902_21909 = G__21926;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18324__auto__ = goog.require__;
if(cljs.core.truth_(or__18324__auto__)){
return or__18324__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__21941__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21944__i = 0, G__21944__a = new Array(arguments.length -  0);
while (G__21944__i < G__21944__a.length) {G__21944__a[G__21944__i] = arguments[G__21944__i + 0]; ++G__21944__i;}
  args = new cljs.core.IndexedSeq(G__21944__a,0);
} 
return G__21941__delegate.call(this,args);};
G__21941.cljs$lang$maxFixedArity = 0;
G__21941.cljs$lang$applyTo = (function (arglist__21945){
var args = cljs.core.seq(arglist__21945);
return G__21941__delegate(args);
});
G__21941.cljs$core$IFn$_invoke$arity$variadic = G__21941__delegate;
return G__21941;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21953 = cljs.core._EQ_;
var expr__21954 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21953.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21954))){
var path_parts = ((function (pred__21953,expr__21954){
return (function (p1__21948_SHARP_){
return clojure.string.split.call(null,p1__21948_SHARP_,/[\/\\]/);
});})(pred__21953,expr__21954))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__21953,expr__21954){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21956){if((e21956 instanceof Error)){
var e = e21956;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21956;

}
}})());
});
;})(path_parts,sep,root,pred__21953,expr__21954))
} else {
if(cljs.core.truth_(pred__21953.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21954))){
return ((function (pred__21953,expr__21954){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__21953,expr__21954){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__21953,expr__21954))
);

return deferred.addErrback(((function (deferred,pred__21953,expr__21954){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__21953,expr__21954))
);
});
;})(pred__21953,expr__21954))
} else {
return ((function (pred__21953,expr__21954){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21953,expr__21954))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22009,callback){
var map__22014 = p__22009;
var map__22014__$1 = ((((!((map__22014 == null)))?((((map__22014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22014):map__22014);
var file_msg = map__22014__$1;
var request_url = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22014,map__22014__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22014,map__22014__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21300__auto__){
return (function (){
var f__21301__auto__ = (function (){var switch__20363__auto__ = ((function (c__21300__auto__){
return (function (state_22081){
var state_val_22082 = (state_22081[(1)]);
if((state_val_22082 === (7))){
var inst_22077 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22086_22117 = state_22081__$1;
(statearr_22086_22117[(2)] = inst_22077);

(statearr_22086_22117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (1))){
var state_22081__$1 = state_22081;
var statearr_22087_22119 = state_22081__$1;
(statearr_22087_22119[(2)] = null);

(statearr_22087_22119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (4))){
var inst_22059 = (state_22081[(7)]);
var inst_22059__$1 = (state_22081[(2)]);
var state_22081__$1 = (function (){var statearr_22088 = state_22081;
(statearr_22088[(7)] = inst_22059__$1);

return statearr_22088;
})();
if(cljs.core.truth_(inst_22059__$1)){
var statearr_22089_22120 = state_22081__$1;
(statearr_22089_22120[(1)] = (5));

} else {
var statearr_22090_22121 = state_22081__$1;
(statearr_22090_22121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (6))){
var state_22081__$1 = state_22081;
var statearr_22091_22122 = state_22081__$1;
(statearr_22091_22122[(2)] = null);

(statearr_22091_22122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (3))){
var inst_22079 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22081__$1,inst_22079);
} else {
if((state_val_22082 === (2))){
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22081__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22082 === (11))){
var inst_22071 = (state_22081[(2)]);
var state_22081__$1 = (function (){var statearr_22092 = state_22081;
(statearr_22092[(8)] = inst_22071);

return statearr_22092;
})();
var statearr_22093_22129 = state_22081__$1;
(statearr_22093_22129[(2)] = null);

(statearr_22093_22129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (9))){
var inst_22065 = (state_22081[(9)]);
var inst_22063 = (state_22081[(10)]);
var inst_22067 = inst_22065.call(null,inst_22063);
var state_22081__$1 = state_22081;
var statearr_22094_22134 = state_22081__$1;
(statearr_22094_22134[(2)] = inst_22067);

(statearr_22094_22134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (5))){
var inst_22059 = (state_22081[(7)]);
var inst_22061 = figwheel.client.file_reloading.blocking_load.call(null,inst_22059);
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22081__$1,(8),inst_22061);
} else {
if((state_val_22082 === (10))){
var inst_22063 = (state_22081[(10)]);
var inst_22069 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22063);
var state_22081__$1 = state_22081;
var statearr_22095_22144 = state_22081__$1;
(statearr_22095_22144[(2)] = inst_22069);

(statearr_22095_22144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (8))){
var inst_22065 = (state_22081[(9)]);
var inst_22059 = (state_22081[(7)]);
var inst_22063 = (state_22081[(2)]);
var inst_22064 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22065__$1 = cljs.core.get.call(null,inst_22064,inst_22059);
var state_22081__$1 = (function (){var statearr_22096 = state_22081;
(statearr_22096[(9)] = inst_22065__$1);

(statearr_22096[(10)] = inst_22063);

return statearr_22096;
})();
if(cljs.core.truth_(inst_22065__$1)){
var statearr_22097_22155 = state_22081__$1;
(statearr_22097_22155[(1)] = (9));

} else {
var statearr_22098_22157 = state_22081__$1;
(statearr_22098_22157[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21300__auto__))
;
return ((function (switch__20363__auto__,c__21300__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20364__auto__ = null;
var figwheel$client$file_reloading$state_machine__20364__auto____0 = (function (){
var statearr_22103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22103[(0)] = figwheel$client$file_reloading$state_machine__20364__auto__);

(statearr_22103[(1)] = (1));

return statearr_22103;
});
var figwheel$client$file_reloading$state_machine__20364__auto____1 = (function (state_22081){
while(true){
var ret_value__20365__auto__ = (function (){try{while(true){
var result__20366__auto__ = switch__20363__auto__.call(null,state_22081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20366__auto__;
}
break;
}
}catch (e22105){if((e22105 instanceof Object)){
var ex__20367__auto__ = e22105;
var statearr_22108_22163 = state_22081;
(statearr_22108_22163[(5)] = ex__20367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22164 = state_22081;
state_22081 = G__22164;
continue;
} else {
return ret_value__20365__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20364__auto__ = function(state_22081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20364__auto____1.call(this,state_22081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20364__auto____0;
figwheel$client$file_reloading$state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20364__auto____1;
return figwheel$client$file_reloading$state_machine__20364__auto__;
})()
;})(switch__20363__auto__,c__21300__auto__))
})();
var state__21302__auto__ = (function (){var statearr_22110 = f__21301__auto__.call(null);
(statearr_22110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21300__auto__);

return statearr_22110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21302__auto__);
});})(c__21300__auto__))
);

return c__21300__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22172,callback){
var map__22175 = p__22172;
var map__22175__$1 = ((((!((map__22175 == null)))?((((map__22175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22175):map__22175);
var file_msg = map__22175__$1;
var namespace = cljs.core.get.call(null,map__22175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22175,map__22175__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22175,map__22175__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22178){
var map__22183 = p__22178;
var map__22183__$1 = ((((!((map__22183 == null)))?((((map__22183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22183):map__22183);
var file_msg = map__22183__$1;
var namespace = cljs.core.get.call(null,map__22183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18312__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18312__auto__){
var or__18324__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18324__auto__)){
return or__18324__auto__;
} else {
var or__18324__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18324__auto____$1)){
return or__18324__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18312__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22195,callback){
var map__22198 = p__22195;
var map__22198__$1 = ((((!((map__22198 == null)))?((((map__22198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22198):map__22198);
var file_msg = map__22198__$1;
var request_url = cljs.core.get.call(null,map__22198__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22198__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21300__auto___22327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21300__auto___22327,out){
return (function (){
var f__21301__auto__ = (function (){var switch__20363__auto__ = ((function (c__21300__auto___22327,out){
return (function (state_22306){
var state_val_22307 = (state_22306[(1)]);
if((state_val_22307 === (1))){
var inst_22284 = cljs.core.nth.call(null,files,(0),null);
var inst_22285 = cljs.core.nthnext.call(null,files,(1));
var inst_22286 = files;
var state_22306__$1 = (function (){var statearr_22308 = state_22306;
(statearr_22308[(7)] = inst_22286);

(statearr_22308[(8)] = inst_22285);

(statearr_22308[(9)] = inst_22284);

return statearr_22308;
})();
var statearr_22309_22344 = state_22306__$1;
(statearr_22309_22344[(2)] = null);

(statearr_22309_22344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (2))){
var inst_22286 = (state_22306[(7)]);
var inst_22289 = (state_22306[(10)]);
var inst_22289__$1 = cljs.core.nth.call(null,inst_22286,(0),null);
var inst_22290 = cljs.core.nthnext.call(null,inst_22286,(1));
var inst_22291 = (inst_22289__$1 == null);
var inst_22292 = cljs.core.not.call(null,inst_22291);
var state_22306__$1 = (function (){var statearr_22310 = state_22306;
(statearr_22310[(11)] = inst_22290);

(statearr_22310[(10)] = inst_22289__$1);

return statearr_22310;
})();
if(inst_22292){
var statearr_22311_22352 = state_22306__$1;
(statearr_22311_22352[(1)] = (4));

} else {
var statearr_22312_22354 = state_22306__$1;
(statearr_22312_22354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (3))){
var inst_22304 = (state_22306[(2)]);
var state_22306__$1 = state_22306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22306__$1,inst_22304);
} else {
if((state_val_22307 === (4))){
var inst_22289 = (state_22306[(10)]);
var inst_22294 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22289);
var state_22306__$1 = state_22306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22306__$1,(7),inst_22294);
} else {
if((state_val_22307 === (5))){
var inst_22300 = cljs.core.async.close_BANG_.call(null,out);
var state_22306__$1 = state_22306;
var statearr_22314_22366 = state_22306__$1;
(statearr_22314_22366[(2)] = inst_22300);

(statearr_22314_22366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (6))){
var inst_22302 = (state_22306[(2)]);
var state_22306__$1 = state_22306;
var statearr_22317_22367 = state_22306__$1;
(statearr_22317_22367[(2)] = inst_22302);

(statearr_22317_22367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (7))){
var inst_22290 = (state_22306[(11)]);
var inst_22296 = (state_22306[(2)]);
var inst_22297 = cljs.core.async.put_BANG_.call(null,out,inst_22296);
var inst_22286 = inst_22290;
var state_22306__$1 = (function (){var statearr_22318 = state_22306;
(statearr_22318[(7)] = inst_22286);

(statearr_22318[(12)] = inst_22297);

return statearr_22318;
})();
var statearr_22319_22374 = state_22306__$1;
(statearr_22319_22374[(2)] = null);

(statearr_22319_22374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21300__auto___22327,out))
;
return ((function (switch__20363__auto__,c__21300__auto___22327,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto____0 = (function (){
var statearr_22323 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22323[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto__);

(statearr_22323[(1)] = (1));

return statearr_22323;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto____1 = (function (state_22306){
while(true){
var ret_value__20365__auto__ = (function (){try{while(true){
var result__20366__auto__ = switch__20363__auto__.call(null,state_22306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20366__auto__;
}
break;
}
}catch (e22324){if((e22324 instanceof Object)){
var ex__20367__auto__ = e22324;
var statearr_22325_22375 = state_22306;
(statearr_22325_22375[(5)] = ex__20367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22376 = state_22306;
state_22306 = G__22376;
continue;
} else {
return ret_value__20365__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto__ = function(state_22306){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto____1.call(this,state_22306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20364__auto__;
})()
;})(switch__20363__auto__,c__21300__auto___22327,out))
})();
var state__21302__auto__ = (function (){var statearr_22326 = f__21301__auto__.call(null);
(statearr_22326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21300__auto___22327);

return statearr_22326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21302__auto__);
});})(c__21300__auto___22327,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22377,opts){
var map__22381 = p__22377;
var map__22381__$1 = ((((!((map__22381 == null)))?((((map__22381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22381):map__22381);
var eval_body__$1 = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18312__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18312__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18312__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22383){var e = e22383;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22384_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22384_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22389){
var vec__22390 = p__22389;
var k = cljs.core.nth.call(null,vec__22390,(0),null);
var v = cljs.core.nth.call(null,vec__22390,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22391){
var vec__22392 = p__22391;
var k = cljs.core.nth.call(null,vec__22392,(0),null);
var v = cljs.core.nth.call(null,vec__22392,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22396,p__22397){
var map__22644 = p__22396;
var map__22644__$1 = ((((!((map__22644 == null)))?((((map__22644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22644):map__22644);
var opts = map__22644__$1;
var before_jsload = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22645 = p__22397;
var map__22645__$1 = ((((!((map__22645 == null)))?((((map__22645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22645):map__22645);
var msg = map__22645__$1;
var files = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21301__auto__ = (function (){var switch__20363__auto__ = ((function (c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22804){
var state_val_22805 = (state_22804[(1)]);
if((state_val_22805 === (7))){
var inst_22661 = (state_22804[(7)]);
var inst_22659 = (state_22804[(8)]);
var inst_22660 = (state_22804[(9)]);
var inst_22662 = (state_22804[(10)]);
var inst_22667 = cljs.core._nth.call(null,inst_22660,inst_22662);
var inst_22668 = figwheel.client.file_reloading.eval_body.call(null,inst_22667,opts);
var inst_22669 = (inst_22662 + (1));
var tmp22806 = inst_22661;
var tmp22807 = inst_22659;
var tmp22808 = inst_22660;
var inst_22659__$1 = tmp22807;
var inst_22660__$1 = tmp22808;
var inst_22661__$1 = tmp22806;
var inst_22662__$1 = inst_22669;
var state_22804__$1 = (function (){var statearr_22809 = state_22804;
(statearr_22809[(7)] = inst_22661__$1);

(statearr_22809[(8)] = inst_22659__$1);

(statearr_22809[(11)] = inst_22668);

(statearr_22809[(9)] = inst_22660__$1);

(statearr_22809[(10)] = inst_22662__$1);

return statearr_22809;
})();
var statearr_22810_22997 = state_22804__$1;
(statearr_22810_22997[(2)] = null);

(statearr_22810_22997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (20))){
var inst_22702 = (state_22804[(12)]);
var inst_22710 = figwheel.client.file_reloading.sort_files.call(null,inst_22702);
var state_22804__$1 = state_22804;
var statearr_22811_23001 = state_22804__$1;
(statearr_22811_23001[(2)] = inst_22710);

(statearr_22811_23001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (27))){
var state_22804__$1 = state_22804;
var statearr_22812_23007 = state_22804__$1;
(statearr_22812_23007[(2)] = null);

(statearr_22812_23007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (1))){
var inst_22651 = (state_22804[(13)]);
var inst_22648 = before_jsload.call(null,files);
var inst_22649 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22650 = (function (){return ((function (inst_22651,inst_22648,inst_22649,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22393_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22393_SHARP_);
});
;})(inst_22651,inst_22648,inst_22649,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22651__$1 = cljs.core.filter.call(null,inst_22650,files);
var inst_22652 = cljs.core.not_empty.call(null,inst_22651__$1);
var state_22804__$1 = (function (){var statearr_22813 = state_22804;
(statearr_22813[(14)] = inst_22649);

(statearr_22813[(15)] = inst_22648);

(statearr_22813[(13)] = inst_22651__$1);

return statearr_22813;
})();
if(cljs.core.truth_(inst_22652)){
var statearr_22814_23016 = state_22804__$1;
(statearr_22814_23016[(1)] = (2));

} else {
var statearr_22815_23018 = state_22804__$1;
(statearr_22815_23018[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (24))){
var state_22804__$1 = state_22804;
var statearr_22816_23019 = state_22804__$1;
(statearr_22816_23019[(2)] = null);

(statearr_22816_23019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (39))){
var inst_22756 = (state_22804[(16)]);
var state_22804__$1 = state_22804;
var statearr_22817_23022 = state_22804__$1;
(statearr_22817_23022[(2)] = inst_22756);

(statearr_22817_23022[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (46))){
var inst_22799 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
var statearr_22818_23027 = state_22804__$1;
(statearr_22818_23027[(2)] = inst_22799);

(statearr_22818_23027[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (4))){
var inst_22696 = (state_22804[(2)]);
var inst_22697 = cljs.core.List.EMPTY;
var inst_22698 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22697);
var inst_22699 = (function (){return ((function (inst_22696,inst_22697,inst_22698,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22394_SHARP_){
var and__18312__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22394_SHARP_);
if(cljs.core.truth_(and__18312__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22394_SHARP_));
} else {
return and__18312__auto__;
}
});
;})(inst_22696,inst_22697,inst_22698,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22700 = cljs.core.filter.call(null,inst_22699,files);
var inst_22701 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22702 = cljs.core.concat.call(null,inst_22700,inst_22701);
var state_22804__$1 = (function (){var statearr_22819 = state_22804;
(statearr_22819[(12)] = inst_22702);

(statearr_22819[(17)] = inst_22696);

(statearr_22819[(18)] = inst_22698);

return statearr_22819;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22820_23045 = state_22804__$1;
(statearr_22820_23045[(1)] = (16));

} else {
var statearr_22821_23046 = state_22804__$1;
(statearr_22821_23046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (15))){
var inst_22686 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
var statearr_22822_23050 = state_22804__$1;
(statearr_22822_23050[(2)] = inst_22686);

(statearr_22822_23050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (21))){
var inst_22712 = (state_22804[(19)]);
var inst_22712__$1 = (state_22804[(2)]);
var inst_22713 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22712__$1);
var state_22804__$1 = (function (){var statearr_22823 = state_22804;
(statearr_22823[(19)] = inst_22712__$1);

return statearr_22823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22804__$1,(22),inst_22713);
} else {
if((state_val_22805 === (31))){
var inst_22802 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22804__$1,inst_22802);
} else {
if((state_val_22805 === (32))){
var inst_22756 = (state_22804[(16)]);
var inst_22761 = inst_22756.cljs$lang$protocol_mask$partition0$;
var inst_22762 = (inst_22761 & (64));
var inst_22763 = inst_22756.cljs$core$ISeq$;
var inst_22764 = (inst_22762) || (inst_22763);
var state_22804__$1 = state_22804;
if(cljs.core.truth_(inst_22764)){
var statearr_22824_23075 = state_22804__$1;
(statearr_22824_23075[(1)] = (35));

} else {
var statearr_22825_23076 = state_22804__$1;
(statearr_22825_23076[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (40))){
var inst_22778 = (state_22804[(20)]);
var inst_22777 = (state_22804[(2)]);
var inst_22778__$1 = cljs.core.get.call(null,inst_22777,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22779 = cljs.core.get.call(null,inst_22777,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22780 = cljs.core.not_empty.call(null,inst_22778__$1);
var state_22804__$1 = (function (){var statearr_22828 = state_22804;
(statearr_22828[(21)] = inst_22779);

(statearr_22828[(20)] = inst_22778__$1);

return statearr_22828;
})();
if(cljs.core.truth_(inst_22780)){
var statearr_22829_23084 = state_22804__$1;
(statearr_22829_23084[(1)] = (41));

} else {
var statearr_22830_23086 = state_22804__$1;
(statearr_22830_23086[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (33))){
var state_22804__$1 = state_22804;
var statearr_22833_23089 = state_22804__$1;
(statearr_22833_23089[(2)] = false);

(statearr_22833_23089[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (13))){
var inst_22672 = (state_22804[(22)]);
var inst_22676 = cljs.core.chunk_first.call(null,inst_22672);
var inst_22677 = cljs.core.chunk_rest.call(null,inst_22672);
var inst_22678 = cljs.core.count.call(null,inst_22676);
var inst_22659 = inst_22677;
var inst_22660 = inst_22676;
var inst_22661 = inst_22678;
var inst_22662 = (0);
var state_22804__$1 = (function (){var statearr_22836 = state_22804;
(statearr_22836[(7)] = inst_22661);

(statearr_22836[(8)] = inst_22659);

(statearr_22836[(9)] = inst_22660);

(statearr_22836[(10)] = inst_22662);

return statearr_22836;
})();
var statearr_22837_23093 = state_22804__$1;
(statearr_22837_23093[(2)] = null);

(statearr_22837_23093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (22))){
var inst_22722 = (state_22804[(23)]);
var inst_22717 = (state_22804[(24)]);
var inst_22712 = (state_22804[(19)]);
var inst_22715 = (state_22804[(25)]);
var inst_22715__$1 = (state_22804[(2)]);
var inst_22717__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22715__$1);
var inst_22719 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715__$1;
var res = inst_22717__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22722,inst_22717,inst_22712,inst_22715,inst_22715__$1,inst_22717__$1,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22395_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22395_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22722,inst_22717,inst_22712,inst_22715,inst_22715__$1,inst_22717__$1,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22720 = cljs.core.filter.call(null,inst_22719,inst_22715__$1);
var inst_22721 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22722__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22721);
var inst_22723 = cljs.core.not_empty.call(null,inst_22722__$1);
var state_22804__$1 = (function (){var statearr_22838 = state_22804;
(statearr_22838[(23)] = inst_22722__$1);

(statearr_22838[(26)] = inst_22720);

(statearr_22838[(24)] = inst_22717__$1);

(statearr_22838[(25)] = inst_22715__$1);

return statearr_22838;
})();
if(cljs.core.truth_(inst_22723)){
var statearr_22839_23109 = state_22804__$1;
(statearr_22839_23109[(1)] = (23));

} else {
var statearr_22840_23110 = state_22804__$1;
(statearr_22840_23110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (36))){
var state_22804__$1 = state_22804;
var statearr_22841_23112 = state_22804__$1;
(statearr_22841_23112[(2)] = false);

(statearr_22841_23112[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (41))){
var inst_22778 = (state_22804[(20)]);
var inst_22783 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22784 = cljs.core.map.call(null,inst_22783,inst_22778);
var inst_22785 = cljs.core.pr_str.call(null,inst_22784);
var inst_22786 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22785)].join('');
var inst_22787 = figwheel.client.utils.log.call(null,inst_22786);
var state_22804__$1 = state_22804;
var statearr_22842_23115 = state_22804__$1;
(statearr_22842_23115[(2)] = inst_22787);

(statearr_22842_23115[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (43))){
var inst_22779 = (state_22804[(21)]);
var inst_22790 = (state_22804[(2)]);
var inst_22791 = cljs.core.not_empty.call(null,inst_22779);
var state_22804__$1 = (function (){var statearr_22843 = state_22804;
(statearr_22843[(27)] = inst_22790);

return statearr_22843;
})();
if(cljs.core.truth_(inst_22791)){
var statearr_22844_23119 = state_22804__$1;
(statearr_22844_23119[(1)] = (44));

} else {
var statearr_22845_23121 = state_22804__$1;
(statearr_22845_23121[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (29))){
var inst_22722 = (state_22804[(23)]);
var inst_22720 = (state_22804[(26)]);
var inst_22717 = (state_22804[(24)]);
var inst_22756 = (state_22804[(16)]);
var inst_22712 = (state_22804[(19)]);
var inst_22715 = (state_22804[(25)]);
var inst_22752 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22755 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715;
var res = inst_22717;
var files_not_loaded = inst_22720;
var dependencies_that_loaded = inst_22722;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22722,inst_22720,inst_22717,inst_22756,inst_22712,inst_22715,inst_22752,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22754){
var map__22847 = p__22754;
var map__22847__$1 = ((((!((map__22847 == null)))?((((map__22847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22847):map__22847);
var namespace = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22722,inst_22720,inst_22717,inst_22756,inst_22712,inst_22715,inst_22752,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22756__$1 = cljs.core.group_by.call(null,inst_22755,inst_22720);
var inst_22758 = (inst_22756__$1 == null);
var inst_22759 = cljs.core.not.call(null,inst_22758);
var state_22804__$1 = (function (){var statearr_22852 = state_22804;
(statearr_22852[(28)] = inst_22752);

(statearr_22852[(16)] = inst_22756__$1);

return statearr_22852;
})();
if(inst_22759){
var statearr_22853_23152 = state_22804__$1;
(statearr_22853_23152[(1)] = (32));

} else {
var statearr_22854_23154 = state_22804__$1;
(statearr_22854_23154[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (44))){
var inst_22779 = (state_22804[(21)]);
var inst_22793 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22779);
var inst_22794 = cljs.core.pr_str.call(null,inst_22793);
var inst_22795 = [cljs.core.str("not required: "),cljs.core.str(inst_22794)].join('');
var inst_22796 = figwheel.client.utils.log.call(null,inst_22795);
var state_22804__$1 = state_22804;
var statearr_22855_23156 = state_22804__$1;
(statearr_22855_23156[(2)] = inst_22796);

(statearr_22855_23156[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (6))){
var inst_22693 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
var statearr_22861_23163 = state_22804__$1;
(statearr_22861_23163[(2)] = inst_22693);

(statearr_22861_23163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (28))){
var inst_22720 = (state_22804[(26)]);
var inst_22749 = (state_22804[(2)]);
var inst_22750 = cljs.core.not_empty.call(null,inst_22720);
var state_22804__$1 = (function (){var statearr_22864 = state_22804;
(statearr_22864[(29)] = inst_22749);

return statearr_22864;
})();
if(cljs.core.truth_(inst_22750)){
var statearr_22865_23171 = state_22804__$1;
(statearr_22865_23171[(1)] = (29));

} else {
var statearr_22866_23173 = state_22804__$1;
(statearr_22866_23173[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (25))){
var inst_22717 = (state_22804[(24)]);
var inst_22734 = (state_22804[(2)]);
var inst_22735 = cljs.core.not_empty.call(null,inst_22717);
var state_22804__$1 = (function (){var statearr_22867 = state_22804;
(statearr_22867[(30)] = inst_22734);

return statearr_22867;
})();
if(cljs.core.truth_(inst_22735)){
var statearr_22868_23181 = state_22804__$1;
(statearr_22868_23181[(1)] = (26));

} else {
var statearr_22870_23186 = state_22804__$1;
(statearr_22870_23186[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (34))){
var inst_22771 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
if(cljs.core.truth_(inst_22771)){
var statearr_22872_23194 = state_22804__$1;
(statearr_22872_23194[(1)] = (38));

} else {
var statearr_22873_23195 = state_22804__$1;
(statearr_22873_23195[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (17))){
var state_22804__$1 = state_22804;
var statearr_22875_23196 = state_22804__$1;
(statearr_22875_23196[(2)] = recompile_dependents);

(statearr_22875_23196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (3))){
var state_22804__$1 = state_22804;
var statearr_22877_23201 = state_22804__$1;
(statearr_22877_23201[(2)] = null);

(statearr_22877_23201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (12))){
var inst_22689 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
var statearr_22878_23204 = state_22804__$1;
(statearr_22878_23204[(2)] = inst_22689);

(statearr_22878_23204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (2))){
var inst_22651 = (state_22804[(13)]);
var inst_22658 = cljs.core.seq.call(null,inst_22651);
var inst_22659 = inst_22658;
var inst_22660 = null;
var inst_22661 = (0);
var inst_22662 = (0);
var state_22804__$1 = (function (){var statearr_22879 = state_22804;
(statearr_22879[(7)] = inst_22661);

(statearr_22879[(8)] = inst_22659);

(statearr_22879[(9)] = inst_22660);

(statearr_22879[(10)] = inst_22662);

return statearr_22879;
})();
var statearr_22881_23216 = state_22804__$1;
(statearr_22881_23216[(2)] = null);

(statearr_22881_23216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (23))){
var inst_22722 = (state_22804[(23)]);
var inst_22720 = (state_22804[(26)]);
var inst_22717 = (state_22804[(24)]);
var inst_22712 = (state_22804[(19)]);
var inst_22715 = (state_22804[(25)]);
var inst_22725 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22727 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715;
var res = inst_22717;
var files_not_loaded = inst_22720;
var dependencies_that_loaded = inst_22722;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22722,inst_22720,inst_22717,inst_22712,inst_22715,inst_22725,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22726){
var map__22888 = p__22726;
var map__22888__$1 = ((((!((map__22888 == null)))?((((map__22888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22888):map__22888);
var request_url = cljs.core.get.call(null,map__22888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22722,inst_22720,inst_22717,inst_22712,inst_22715,inst_22725,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22728 = cljs.core.reverse.call(null,inst_22722);
var inst_22729 = cljs.core.map.call(null,inst_22727,inst_22728);
var inst_22730 = cljs.core.pr_str.call(null,inst_22729);
var inst_22731 = figwheel.client.utils.log.call(null,inst_22730);
var state_22804__$1 = (function (){var statearr_22900 = state_22804;
(statearr_22900[(31)] = inst_22725);

return statearr_22900;
})();
var statearr_22904_23248 = state_22804__$1;
(statearr_22904_23248[(2)] = inst_22731);

(statearr_22904_23248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (35))){
var state_22804__$1 = state_22804;
var statearr_22908_23255 = state_22804__$1;
(statearr_22908_23255[(2)] = true);

(statearr_22908_23255[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (19))){
var inst_22702 = (state_22804[(12)]);
var inst_22708 = figwheel.client.file_reloading.expand_files.call(null,inst_22702);
var state_22804__$1 = state_22804;
var statearr_22912_23264 = state_22804__$1;
(statearr_22912_23264[(2)] = inst_22708);

(statearr_22912_23264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (11))){
var state_22804__$1 = state_22804;
var statearr_22913_23268 = state_22804__$1;
(statearr_22913_23268[(2)] = null);

(statearr_22913_23268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (9))){
var inst_22691 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
var statearr_22914_23276 = state_22804__$1;
(statearr_22914_23276[(2)] = inst_22691);

(statearr_22914_23276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (5))){
var inst_22661 = (state_22804[(7)]);
var inst_22662 = (state_22804[(10)]);
var inst_22664 = (inst_22662 < inst_22661);
var inst_22665 = inst_22664;
var state_22804__$1 = state_22804;
if(cljs.core.truth_(inst_22665)){
var statearr_22915_23286 = state_22804__$1;
(statearr_22915_23286[(1)] = (7));

} else {
var statearr_22916_23288 = state_22804__$1;
(statearr_22916_23288[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (14))){
var inst_22672 = (state_22804[(22)]);
var inst_22681 = cljs.core.first.call(null,inst_22672);
var inst_22682 = figwheel.client.file_reloading.eval_body.call(null,inst_22681,opts);
var inst_22683 = cljs.core.next.call(null,inst_22672);
var inst_22659 = inst_22683;
var inst_22660 = null;
var inst_22661 = (0);
var inst_22662 = (0);
var state_22804__$1 = (function (){var statearr_22919 = state_22804;
(statearr_22919[(7)] = inst_22661);

(statearr_22919[(8)] = inst_22659);

(statearr_22919[(32)] = inst_22682);

(statearr_22919[(9)] = inst_22660);

(statearr_22919[(10)] = inst_22662);

return statearr_22919;
})();
var statearr_22920_23293 = state_22804__$1;
(statearr_22920_23293[(2)] = null);

(statearr_22920_23293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (45))){
var state_22804__$1 = state_22804;
var statearr_22921_23296 = state_22804__$1;
(statearr_22921_23296[(2)] = null);

(statearr_22921_23296[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (26))){
var inst_22722 = (state_22804[(23)]);
var inst_22720 = (state_22804[(26)]);
var inst_22717 = (state_22804[(24)]);
var inst_22712 = (state_22804[(19)]);
var inst_22715 = (state_22804[(25)]);
var inst_22737 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22739 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715;
var res = inst_22717;
var files_not_loaded = inst_22720;
var dependencies_that_loaded = inst_22722;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22722,inst_22720,inst_22717,inst_22712,inst_22715,inst_22737,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22738){
var map__22922 = p__22738;
var map__22922__$1 = ((((!((map__22922 == null)))?((((map__22922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22922):map__22922);
var namespace = cljs.core.get.call(null,map__22922__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22722,inst_22720,inst_22717,inst_22712,inst_22715,inst_22737,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22740 = cljs.core.map.call(null,inst_22739,inst_22717);
var inst_22741 = cljs.core.pr_str.call(null,inst_22740);
var inst_22742 = figwheel.client.utils.log.call(null,inst_22741);
var inst_22744 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715;
var res = inst_22717;
var files_not_loaded = inst_22720;
var dependencies_that_loaded = inst_22722;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22722,inst_22720,inst_22717,inst_22712,inst_22715,inst_22737,inst_22739,inst_22740,inst_22741,inst_22742,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22722,inst_22720,inst_22717,inst_22712,inst_22715,inst_22737,inst_22739,inst_22740,inst_22741,inst_22742,state_val_22805,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22745 = setTimeout(inst_22744,(10));
var state_22804__$1 = (function (){var statearr_22927 = state_22804;
(statearr_22927[(33)] = inst_22742);

(statearr_22927[(34)] = inst_22737);

return statearr_22927;
})();
var statearr_22929_23335 = state_22804__$1;
(statearr_22929_23335[(2)] = inst_22745);

(statearr_22929_23335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (16))){
var state_22804__$1 = state_22804;
var statearr_22930_23336 = state_22804__$1;
(statearr_22930_23336[(2)] = reload_dependents);

(statearr_22930_23336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (38))){
var inst_22756 = (state_22804[(16)]);
var inst_22774 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22756);
var state_22804__$1 = state_22804;
var statearr_22931_23343 = state_22804__$1;
(statearr_22931_23343[(2)] = inst_22774);

(statearr_22931_23343[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (30))){
var state_22804__$1 = state_22804;
var statearr_22933_23345 = state_22804__$1;
(statearr_22933_23345[(2)] = null);

(statearr_22933_23345[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (10))){
var inst_22672 = (state_22804[(22)]);
var inst_22674 = cljs.core.chunked_seq_QMARK_.call(null,inst_22672);
var state_22804__$1 = state_22804;
if(inst_22674){
var statearr_22935_23351 = state_22804__$1;
(statearr_22935_23351[(1)] = (13));

} else {
var statearr_22938_23352 = state_22804__$1;
(statearr_22938_23352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (18))){
var inst_22706 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
if(cljs.core.truth_(inst_22706)){
var statearr_22941_23365 = state_22804__$1;
(statearr_22941_23365[(1)] = (19));

} else {
var statearr_22943_23366 = state_22804__$1;
(statearr_22943_23366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (42))){
var state_22804__$1 = state_22804;
var statearr_22945_23373 = state_22804__$1;
(statearr_22945_23373[(2)] = null);

(statearr_22945_23373[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (37))){
var inst_22768 = (state_22804[(2)]);
var state_22804__$1 = state_22804;
var statearr_22947_23377 = state_22804__$1;
(statearr_22947_23377[(2)] = inst_22768);

(statearr_22947_23377[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22805 === (8))){
var inst_22672 = (state_22804[(22)]);
var inst_22659 = (state_22804[(8)]);
var inst_22672__$1 = cljs.core.seq.call(null,inst_22659);
var state_22804__$1 = (function (){var statearr_22949 = state_22804;
(statearr_22949[(22)] = inst_22672__$1);

return statearr_22949;
})();
if(inst_22672__$1){
var statearr_22950_23384 = state_22804__$1;
(statearr_22950_23384[(1)] = (10));

} else {
var statearr_22951_23387 = state_22804__$1;
(statearr_22951_23387[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20363__auto__,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto____0 = (function (){
var statearr_22960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22960[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto__);

(statearr_22960[(1)] = (1));

return statearr_22960;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto____1 = (function (state_22804){
while(true){
var ret_value__20365__auto__ = (function (){try{while(true){
var result__20366__auto__ = switch__20363__auto__.call(null,state_22804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20366__auto__;
}
break;
}
}catch (e22961){if((e22961 instanceof Object)){
var ex__20367__auto__ = e22961;
var statearr_22962_23407 = state_22804;
(statearr_22962_23407[(5)] = ex__20367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23409 = state_22804;
state_22804 = G__23409;
continue;
} else {
return ret_value__20365__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto__ = function(state_22804){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto____1.call(this,state_22804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20364__auto__;
})()
;})(switch__20363__auto__,c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21302__auto__ = (function (){var statearr_22965 = f__21301__auto__.call(null);
(statearr_22965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21300__auto__);

return statearr_22965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21302__auto__);
});})(c__21300__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21300__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23427,link){
var map__23436 = p__23427;
var map__23436__$1 = ((((!((map__23436 == null)))?((((map__23436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23436):map__23436);
var file = cljs.core.get.call(null,map__23436__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23436,map__23436__$1,file){
return (function (p1__23423_SHARP_,p2__23424_SHARP_){
if(cljs.core._EQ_.call(null,p1__23423_SHARP_,p2__23424_SHARP_)){
return p1__23423_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23436,map__23436__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23470){
var map__23471 = p__23470;
var map__23471__$1 = ((((!((map__23471 == null)))?((((map__23471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23471):map__23471);
var match_length = cljs.core.get.call(null,map__23471__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23471__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23462_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23462_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23498 = [];
var len__19382__auto___23518 = arguments.length;
var i__19383__auto___23520 = (0);
while(true){
if((i__19383__auto___23520 < len__19382__auto___23518)){
args23498.push((arguments[i__19383__auto___23520]));

var G__23523 = (i__19383__auto___23520 + (1));
i__19383__auto___23520 = G__23523;
continue;
} else {
}
break;
}

var G__23506 = args23498.length;
switch (G__23506) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23498.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23545_SHARP_,p2__23546_SHARP_){
return cljs.core.assoc.call(null,p1__23545_SHARP_,cljs.core.get.call(null,p2__23546_SHARP_,key),p2__23546_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23554){
var map__23561 = p__23554;
var map__23561__$1 = ((((!((map__23561 == null)))?((((map__23561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23561):map__23561);
var f_data = map__23561__$1;
var file = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23575,files_msg){
var map__23586 = p__23575;
var map__23586__$1 = ((((!((map__23586 == null)))?((((map__23586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23586):map__23586);
var opts = map__23586__$1;
var on_cssload = cljs.core.get.call(null,map__23586__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23590_23599 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23591_23600 = null;
var count__23592_23601 = (0);
var i__23593_23602 = (0);
while(true){
if((i__23593_23602 < count__23592_23601)){
var f_23618 = cljs.core._nth.call(null,chunk__23591_23600,i__23593_23602);
figwheel.client.file_reloading.reload_css_file.call(null,f_23618);

var G__23622 = seq__23590_23599;
var G__23623 = chunk__23591_23600;
var G__23624 = count__23592_23601;
var G__23625 = (i__23593_23602 + (1));
seq__23590_23599 = G__23622;
chunk__23591_23600 = G__23623;
count__23592_23601 = G__23624;
i__23593_23602 = G__23625;
continue;
} else {
var temp__4425__auto___23626 = cljs.core.seq.call(null,seq__23590_23599);
if(temp__4425__auto___23626){
var seq__23590_23627__$1 = temp__4425__auto___23626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23590_23627__$1)){
var c__19127__auto___23628 = cljs.core.chunk_first.call(null,seq__23590_23627__$1);
var G__23629 = cljs.core.chunk_rest.call(null,seq__23590_23627__$1);
var G__23630 = c__19127__auto___23628;
var G__23631 = cljs.core.count.call(null,c__19127__auto___23628);
var G__23632 = (0);
seq__23590_23599 = G__23629;
chunk__23591_23600 = G__23630;
count__23592_23601 = G__23631;
i__23593_23602 = G__23632;
continue;
} else {
var f_23633 = cljs.core.first.call(null,seq__23590_23627__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23633);

var G__23634 = cljs.core.next.call(null,seq__23590_23627__$1);
var G__23635 = null;
var G__23636 = (0);
var G__23637 = (0);
seq__23590_23599 = G__23634;
chunk__23591_23600 = G__23635;
count__23592_23601 = G__23636;
i__23593_23602 = G__23637;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23586,map__23586__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23586,map__23586__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1452472338339