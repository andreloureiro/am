// Compiled by ClojureScript 1.7.228 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
return pushy$core$recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__44049 = h;
G__44049.setUseFragment(false);

G__44049.setPathPrefix("");

G__44049.setEnabled(true);

return G__44049;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var args44050 = [];
var len__39562__auto___44053 = arguments.length;
var i__39563__auto___44054 = (0);
while(true){
if((i__39563__auto___44054 < len__39562__auto___44053)){
args44050.push((arguments[i__39563__auto___44054]));

var G__44055 = (i__39563__auto___44054 + (1));
i__39563__auto___44054 = G__44055;
continue;
} else {
}
break;
}

var G__44052 = args44050.length;
switch (G__44052) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44050.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;

/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var args44057 = [];
var len__39562__auto___44099 = arguments.length;
var i__39563__auto___44100 = (0);
while(true){
if((i__39563__auto___44100 < len__39562__auto___44099)){
args44057.push((arguments[i__39563__auto___44100]));

var G__44101 = (i__39563__auto___44100 + (1));
i__39563__auto___44100 = G__44101;
continue;
} else {
}
break;
}

var G__44059 = args44057.length;
switch (G__44059) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44057.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$,token);
} else {
var m__39160__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$,token,title);
} else {
var m__39160__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var args44073 = [];
var len__39562__auto___44103 = arguments.length;
var i__39563__auto___44104 = (0);
while(true){
if((i__39563__auto___44104 < len__39562__auto___44103)){
args44073.push((arguments[i__39563__auto___44104]));

var G__44105 = (i__39563__auto___44104 + (1));
i__39563__auto___44104 = G__44105;
continue;
} else {
}
break;
}

var G__44081 = args44073.length;
switch (G__44081) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44073.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$,token);
} else {
var m__39160__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$,token,title);
} else {
var m__39160__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (pushy.core.get_token[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$);
} else {
var m__39160__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$);
} else {
var m__39160__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$);
} else {
var m__39160__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (!(clojure.string.blank_QMARK_.call(null,uri))) && (((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain()))) || (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(location.origin),cljs.core.str(".*$")].join('')),[cljs.core.str(uri)].join('')))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str(path),cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__39569__auto__ = [];
var len__39562__auto___44187 = arguments.length;
var i__39563__auto___44188 = (0);
while(true){
if((i__39563__auto___44188 < len__39562__auto___44187)){
args__39569__auto__.push((arguments[i__39563__auto___44188]));

var G__44189 = (i__39563__auto___44188 + (1));
i__39563__auto___44188 = G__44189;
continue;
} else {
}
break;
}

var argseq__39570__auto__ = ((((2) < args__39569__auto__.length))?(new cljs.core.IndexedSeq(args__39569__auto__.slice((2)),(0))):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__39570__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__44177){
var map__44178 = p__44177;
var map__44178__$1 = ((((!((map__44178 == null)))?((((map__44178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44178):map__44178);
var processable_url_QMARK_ = cljs.core.get.call(null,map__44178__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__44178__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core44180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core44180 = (function (dispatch_fn,match_fn,p__44177,map__44178,processable_url_QMARK_,identity_fn,history,event_keys,meta44181){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__44177 = p__44177;
this.map__44178 = map__44178;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta44181 = meta44181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core44180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (_44182,meta44181__$1){
var self__ = this;
var _44182__$1 = this;
return (new pushy.core.t_pushy$core44180(self__.dispatch_fn,self__.match_fn,self__.p__44177,self__.map__44178,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta44181__$1));
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (_44182){
var self__ = this;
var _44182__$1 = this;
return self__.meta44181;
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.prototype.pushy$core$IHistory$ = true;

pushy.core.t_pushy$core44180.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4425__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
));

var temp__4425__auto___44216 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4425__auto___44216)){
var match_44217 = temp__4425__auto___44216;
self__.dispatch_fn.call(null,match_44217);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4425__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__4425__auto__)){
var el = temp__4425__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__38492__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__38492__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__38492__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__4423__auto___44223 = el.title;
if(cljs.core.truth_(temp__4423__auto___44223)){
var title_44224 = temp__4423__auto___44223;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_44224);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__44183_44228 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__44184_44229 = null;
var count__44185_44230 = (0);
var i__44186_44231 = (0);
while(true){
if((i__44186_44231 < count__44185_44230)){
var key_44232 = cljs.core._nth.call(null,chunk__44184_44229,i__44186_44231);
goog.events.unlistenByKey(key_44232);

var G__44234 = seq__44183_44228;
var G__44235 = chunk__44184_44229;
var G__44236 = count__44185_44230;
var G__44237 = (i__44186_44231 + (1));
seq__44183_44228 = G__44234;
chunk__44184_44229 = G__44235;
count__44185_44230 = G__44236;
i__44186_44231 = G__44237;
continue;
} else {
var temp__4425__auto___44240 = cljs.core.seq.call(null,seq__44183_44228);
if(temp__4425__auto___44240){
var seq__44183_44241__$1 = temp__4425__auto___44240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44183_44241__$1)){
var c__39307__auto___44243 = cljs.core.chunk_first.call(null,seq__44183_44241__$1);
var G__44244 = cljs.core.chunk_rest.call(null,seq__44183_44241__$1);
var G__44245 = c__39307__auto___44243;
var G__44246 = cljs.core.count.call(null,c__39307__auto___44243);
var G__44247 = (0);
seq__44183_44228 = G__44244;
chunk__44184_44229 = G__44245;
count__44185_44230 = G__44246;
i__44186_44231 = G__44247;
continue;
} else {
var key_44248 = cljs.core.first.call(null,seq__44183_44241__$1);
goog.events.unlistenByKey(key_44248);

var G__44249 = cljs.core.next.call(null,seq__44183_44241__$1);
var G__44250 = null;
var G__44251 = (0);
var G__44252 = (0);
seq__44183_44228 = G__44249;
chunk__44184_44229 = G__44250;
count__44185_44230 = G__44251;
i__44186_44231 = G__44252;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.getBasis = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__44177","p__44177",-750540019,null),new cljs.core.Symbol(null,"map__44178","map__44178",-1255442055,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta44181","meta44181",-947939090,null)], null);
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core44180.cljs$lang$type = true;

pushy.core.t_pushy$core44180.cljs$lang$ctorStr = "pushy.core/t_pushy$core44180";

pushy.core.t_pushy$core44180.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"pushy.core/t_pushy$core44180");
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.__GT_t_pushy$core44180 = ((function (history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core44180(dispatch_fn__$1,match_fn__$1,p__44177__$1,map__44178__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta44181){
return (new pushy.core.t_pushy$core44180(dispatch_fn__$1,match_fn__$1,p__44177__$1,map__44178__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta44181));
});})(history,event_keys,map__44178,map__44178__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core44180(dispatch_fn,match_fn,p__44177,map__44178__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq44172){
var G__44173 = cljs.core.first.call(null,seq44172);
var seq44172__$1 = cljs.core.next.call(null,seq44172);
var G__44174 = cljs.core.first.call(null,seq44172__$1);
var seq44172__$2 = cljs.core.next.call(null,seq44172__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__44173,G__44174,seq44172__$2);
});
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args44269 = [];
var len__39562__auto___44274 = arguments.length;
var i__39563__auto___44275 = (0);
while(true){
if((i__39563__auto___44275 < len__39562__auto___44274)){
args44269.push((arguments[i__39563__auto___44275]));

var G__44276 = (i__39563__auto___44275 + (1));
i__39563__auto___44275 = G__44276;
continue;
} else {
}
break;
}

var G__44273 = args44269.length;
switch (G__44273) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44269.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;
pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var args44278 = [];
var len__39562__auto___44281 = arguments.length;
var i__39563__auto___44282 = (0);
while(true){
if((i__39563__auto___44282 < len__39562__auto___44281)){
args44278.push((arguments[i__39563__auto___44282]));

var G__44283 = (i__39563__auto___44282 + (1));
i__39563__auto___44282 = G__44283;
continue;
} else {
}
break;
}

var G__44280 = args44278.length;
switch (G__44280) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44278.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map?rel=1452464335439