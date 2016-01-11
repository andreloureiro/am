// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24434 = cljs.core._EQ_;
var expr__24435 = (function (){var or__18324__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e24438){if((e24438 instanceof Error)){
var e = e24438;
return false;
} else {
throw e24438;

}
}})();
if(cljs.core.truth_(or__18324__auto__)){
return or__18324__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24434.call(null,"true",expr__24435))){
return true;
} else {
if(cljs.core.truth_(pred__24434.call(null,"false",expr__24435))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24435)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24440){if((e24440 instanceof Error)){
var e = e24440;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24440;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19389__auto__ = [];
var len__19382__auto___24442 = arguments.length;
var i__19383__auto___24443 = (0);
while(true){
if((i__19383__auto___24443 < len__19382__auto___24442)){
args__19389__auto__.push((arguments[i__19383__auto___24443]));

var G__24444 = (i__19383__auto___24443 + (1));
i__19383__auto___24443 = G__24444;
continue;
} else {
}
break;
}

var argseq__19390__auto__ = ((((0) < args__19389__auto__.length))?(new cljs.core.IndexedSeq(args__19389__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19390__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24441){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24441));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24445){
var map__24448 = p__24445;
var map__24448__$1 = ((((!((map__24448 == null)))?((((map__24448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24448):map__24448);
var message = cljs.core.get.call(null,map__24448__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24448__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18324__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18324__auto__)){
return or__18324__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18312__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18312__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18312__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21300__auto___24610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21300__auto___24610,ch){
return (function (){
var f__21301__auto__ = (function (){var switch__20363__auto__ = ((function (c__21300__auto___24610,ch){
return (function (state_24579){
var state_val_24580 = (state_24579[(1)]);
if((state_val_24580 === (7))){
var inst_24575 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24581_24611 = state_24579__$1;
(statearr_24581_24611[(2)] = inst_24575);

(statearr_24581_24611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (1))){
var state_24579__$1 = state_24579;
var statearr_24582_24612 = state_24579__$1;
(statearr_24582_24612[(2)] = null);

(statearr_24582_24612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (4))){
var inst_24532 = (state_24579[(7)]);
var inst_24532__$1 = (state_24579[(2)]);
var state_24579__$1 = (function (){var statearr_24583 = state_24579;
(statearr_24583[(7)] = inst_24532__$1);

return statearr_24583;
})();
if(cljs.core.truth_(inst_24532__$1)){
var statearr_24584_24613 = state_24579__$1;
(statearr_24584_24613[(1)] = (5));

} else {
var statearr_24585_24614 = state_24579__$1;
(statearr_24585_24614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (15))){
var inst_24539 = (state_24579[(8)]);
var inst_24554 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24539);
var inst_24555 = cljs.core.first.call(null,inst_24554);
var inst_24556 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24555);
var inst_24557 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24556)].join('');
var inst_24558 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24557);
var state_24579__$1 = state_24579;
var statearr_24586_24615 = state_24579__$1;
(statearr_24586_24615[(2)] = inst_24558);

(statearr_24586_24615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (13))){
var inst_24563 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24587_24616 = state_24579__$1;
(statearr_24587_24616[(2)] = inst_24563);

(statearr_24587_24616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (6))){
var state_24579__$1 = state_24579;
var statearr_24588_24617 = state_24579__$1;
(statearr_24588_24617[(2)] = null);

(statearr_24588_24617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (17))){
var inst_24561 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24589_24618 = state_24579__$1;
(statearr_24589_24618[(2)] = inst_24561);

(statearr_24589_24618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (3))){
var inst_24577 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24579__$1,inst_24577);
} else {
if((state_val_24580 === (12))){
var inst_24538 = (state_24579[(9)]);
var inst_24552 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24538,opts);
var state_24579__$1 = state_24579;
if(cljs.core.truth_(inst_24552)){
var statearr_24590_24619 = state_24579__$1;
(statearr_24590_24619[(1)] = (15));

} else {
var statearr_24591_24620 = state_24579__$1;
(statearr_24591_24620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (2))){
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24579__$1,(4),ch);
} else {
if((state_val_24580 === (11))){
var inst_24539 = (state_24579[(8)]);
var inst_24544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24545 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24539);
var inst_24546 = cljs.core.async.timeout.call(null,(1000));
var inst_24547 = [inst_24545,inst_24546];
var inst_24548 = (new cljs.core.PersistentVector(null,2,(5),inst_24544,inst_24547,null));
var state_24579__$1 = state_24579;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24579__$1,(14),inst_24548);
} else {
if((state_val_24580 === (9))){
var inst_24539 = (state_24579[(8)]);
var inst_24565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24566 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24539);
var inst_24567 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24566);
var inst_24568 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24567)].join('');
var inst_24569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24568);
var state_24579__$1 = (function (){var statearr_24592 = state_24579;
(statearr_24592[(10)] = inst_24565);

return statearr_24592;
})();
var statearr_24593_24621 = state_24579__$1;
(statearr_24593_24621[(2)] = inst_24569);

(statearr_24593_24621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (5))){
var inst_24532 = (state_24579[(7)]);
var inst_24534 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24535 = (new cljs.core.PersistentArrayMap(null,2,inst_24534,null));
var inst_24536 = (new cljs.core.PersistentHashSet(null,inst_24535,null));
var inst_24537 = figwheel.client.focus_msgs.call(null,inst_24536,inst_24532);
var inst_24538 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24537);
var inst_24539 = cljs.core.first.call(null,inst_24537);
var inst_24540 = figwheel.client.autoload_QMARK_.call(null);
var state_24579__$1 = (function (){var statearr_24594 = state_24579;
(statearr_24594[(9)] = inst_24538);

(statearr_24594[(8)] = inst_24539);

return statearr_24594;
})();
if(cljs.core.truth_(inst_24540)){
var statearr_24595_24622 = state_24579__$1;
(statearr_24595_24622[(1)] = (8));

} else {
var statearr_24596_24623 = state_24579__$1;
(statearr_24596_24623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (14))){
var inst_24550 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24597_24624 = state_24579__$1;
(statearr_24597_24624[(2)] = inst_24550);

(statearr_24597_24624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (16))){
var state_24579__$1 = state_24579;
var statearr_24598_24625 = state_24579__$1;
(statearr_24598_24625[(2)] = null);

(statearr_24598_24625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (10))){
var inst_24571 = (state_24579[(2)]);
var state_24579__$1 = (function (){var statearr_24599 = state_24579;
(statearr_24599[(11)] = inst_24571);

return statearr_24599;
})();
var statearr_24600_24626 = state_24579__$1;
(statearr_24600_24626[(2)] = null);

(statearr_24600_24626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (8))){
var inst_24538 = (state_24579[(9)]);
var inst_24542 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24538,opts);
var state_24579__$1 = state_24579;
if(cljs.core.truth_(inst_24542)){
var statearr_24601_24627 = state_24579__$1;
(statearr_24601_24627[(1)] = (11));

} else {
var statearr_24602_24630 = state_24579__$1;
(statearr_24602_24630[(1)] = (12));

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
});})(c__21300__auto___24610,ch))
;
return ((function (switch__20363__auto__,c__21300__auto___24610,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20364__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20364__auto____0 = (function (){
var statearr_24606 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24606[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20364__auto__);

(statearr_24606[(1)] = (1));

return statearr_24606;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20364__auto____1 = (function (state_24579){
while(true){
var ret_value__20365__auto__ = (function (){try{while(true){
var result__20366__auto__ = switch__20363__auto__.call(null,state_24579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20366__auto__;
}
break;
}
}catch (e24607){if((e24607 instanceof Object)){
var ex__20367__auto__ = e24607;
var statearr_24608_24631 = state_24579;
(statearr_24608_24631[(5)] = ex__20367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24632 = state_24579;
state_24579 = G__24632;
continue;
} else {
return ret_value__20365__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20364__auto__ = function(state_24579){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20364__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20364__auto____1.call(this,state_24579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20364__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20364__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20364__auto__;
})()
;})(switch__20363__auto__,c__21300__auto___24610,ch))
})();
var state__21302__auto__ = (function (){var statearr_24609 = f__21301__auto__.call(null);
(statearr_24609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21300__auto___24610);

return statearr_24609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21302__auto__);
});})(c__21300__auto___24610,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24633_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24633_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24640 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24640){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24638 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24639 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24639;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24638;
}}catch (e24637){if((e24637 instanceof Error)){
var e = e24637;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24640], null));
} else {
var e = e24637;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24640))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24641){
var map__24648 = p__24641;
var map__24648__$1 = ((((!((map__24648 == null)))?((((map__24648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24648):map__24648);
var opts = map__24648__$1;
var build_id = cljs.core.get.call(null,map__24648__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24648,map__24648__$1,opts,build_id){
return (function (p__24650){
var vec__24651 = p__24650;
var map__24652 = cljs.core.nth.call(null,vec__24651,(0),null);
var map__24652__$1 = ((((!((map__24652 == null)))?((((map__24652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24652):map__24652);
var msg = map__24652__$1;
var msg_name = cljs.core.get.call(null,map__24652__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24651,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24651,map__24652,map__24652__$1,msg,msg_name,_,map__24648,map__24648__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24651,map__24652,map__24652__$1,msg,msg_name,_,map__24648,map__24648__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24648,map__24648__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24658){
var vec__24659 = p__24658;
var map__24660 = cljs.core.nth.call(null,vec__24659,(0),null);
var map__24660__$1 = ((((!((map__24660 == null)))?((((map__24660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24660):map__24660);
var msg = map__24660__$1;
var msg_name = cljs.core.get.call(null,map__24660__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24659,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24662){
var map__24672 = p__24662;
var map__24672__$1 = ((((!((map__24672 == null)))?((((map__24672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24672):map__24672);
var on_compile_warning = cljs.core.get.call(null,map__24672__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24672__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24672,map__24672__$1,on_compile_warning,on_compile_fail){
return (function (p__24674){
var vec__24675 = p__24674;
var map__24676 = cljs.core.nth.call(null,vec__24675,(0),null);
var map__24676__$1 = ((((!((map__24676 == null)))?((((map__24676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24676):map__24676);
var msg = map__24676__$1;
var msg_name = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24675,(1));
var pred__24678 = cljs.core._EQ_;
var expr__24679 = msg_name;
if(cljs.core.truth_(pred__24678.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24679))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24678.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24679))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24672,map__24672__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21300__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21301__auto__ = (function (){var switch__20363__auto__ = ((function (c__21300__auto__,msg_hist,msg_names,msg){
return (function (state_24895){
var state_val_24896 = (state_24895[(1)]);
if((state_val_24896 === (7))){
var inst_24819 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24819)){
var statearr_24897_24943 = state_24895__$1;
(statearr_24897_24943[(1)] = (8));

} else {
var statearr_24898_24944 = state_24895__$1;
(statearr_24898_24944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (20))){
var inst_24889 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24899_24945 = state_24895__$1;
(statearr_24899_24945[(2)] = inst_24889);

(statearr_24899_24945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (27))){
var inst_24885 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24900_24946 = state_24895__$1;
(statearr_24900_24946[(2)] = inst_24885);

(statearr_24900_24946[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (1))){
var inst_24812 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24812)){
var statearr_24901_24947 = state_24895__$1;
(statearr_24901_24947[(1)] = (2));

} else {
var statearr_24902_24948 = state_24895__$1;
(statearr_24902_24948[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (24))){
var inst_24887 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24903_24949 = state_24895__$1;
(statearr_24903_24949[(2)] = inst_24887);

(statearr_24903_24949[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (4))){
var inst_24893 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24895__$1,inst_24893);
} else {
if((state_val_24896 === (15))){
var inst_24891 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24904_24950 = state_24895__$1;
(statearr_24904_24950[(2)] = inst_24891);

(statearr_24904_24950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (21))){
var inst_24850 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24905_24951 = state_24895__$1;
(statearr_24905_24951[(2)] = inst_24850);

(statearr_24905_24951[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (31))){
var inst_24874 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24874)){
var statearr_24906_24952 = state_24895__$1;
(statearr_24906_24952[(1)] = (34));

} else {
var statearr_24907_24953 = state_24895__$1;
(statearr_24907_24953[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (32))){
var inst_24883 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24908_24954 = state_24895__$1;
(statearr_24908_24954[(2)] = inst_24883);

(statearr_24908_24954[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (33))){
var inst_24872 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24909_24955 = state_24895__$1;
(statearr_24909_24955[(2)] = inst_24872);

(statearr_24909_24955[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (13))){
var inst_24833 = figwheel.client.heads_up.clear.call(null);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(16),inst_24833);
} else {
if((state_val_24896 === (22))){
var inst_24854 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24855 = figwheel.client.heads_up.append_message.call(null,inst_24854);
var state_24895__$1 = state_24895;
var statearr_24910_24956 = state_24895__$1;
(statearr_24910_24956[(2)] = inst_24855);

(statearr_24910_24956[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (36))){
var inst_24881 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24911_24957 = state_24895__$1;
(statearr_24911_24957[(2)] = inst_24881);

(statearr_24911_24957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (29))){
var inst_24865 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24912_24958 = state_24895__$1;
(statearr_24912_24958[(2)] = inst_24865);

(statearr_24912_24958[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (6))){
var inst_24814 = (state_24895[(7)]);
var state_24895__$1 = state_24895;
var statearr_24913_24959 = state_24895__$1;
(statearr_24913_24959[(2)] = inst_24814);

(statearr_24913_24959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (28))){
var inst_24861 = (state_24895[(2)]);
var inst_24862 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24863 = figwheel.client.heads_up.display_warning.call(null,inst_24862);
var state_24895__$1 = (function (){var statearr_24914 = state_24895;
(statearr_24914[(8)] = inst_24861);

return statearr_24914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(29),inst_24863);
} else {
if((state_val_24896 === (25))){
var inst_24859 = figwheel.client.heads_up.clear.call(null);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(28),inst_24859);
} else {
if((state_val_24896 === (34))){
var inst_24876 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(37),inst_24876);
} else {
if((state_val_24896 === (17))){
var inst_24841 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24915_24960 = state_24895__$1;
(statearr_24915_24960[(2)] = inst_24841);

(statearr_24915_24960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (3))){
var inst_24831 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24831)){
var statearr_24916_24961 = state_24895__$1;
(statearr_24916_24961[(1)] = (13));

} else {
var statearr_24917_24962 = state_24895__$1;
(statearr_24917_24962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (12))){
var inst_24827 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24918_24963 = state_24895__$1;
(statearr_24918_24963[(2)] = inst_24827);

(statearr_24918_24963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (2))){
var inst_24814 = (state_24895[(7)]);
var inst_24814__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24895__$1 = (function (){var statearr_24919 = state_24895;
(statearr_24919[(7)] = inst_24814__$1);

return statearr_24919;
})();
if(cljs.core.truth_(inst_24814__$1)){
var statearr_24920_24964 = state_24895__$1;
(statearr_24920_24964[(1)] = (5));

} else {
var statearr_24921_24965 = state_24895__$1;
(statearr_24921_24965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (23))){
var inst_24857 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24857)){
var statearr_24922_24966 = state_24895__$1;
(statearr_24922_24966[(1)] = (25));

} else {
var statearr_24923_24967 = state_24895__$1;
(statearr_24923_24967[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (35))){
var state_24895__$1 = state_24895;
var statearr_24924_24968 = state_24895__$1;
(statearr_24924_24968[(2)] = null);

(statearr_24924_24968[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (19))){
var inst_24852 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24852)){
var statearr_24925_24969 = state_24895__$1;
(statearr_24925_24969[(1)] = (22));

} else {
var statearr_24926_24970 = state_24895__$1;
(statearr_24926_24970[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (11))){
var inst_24823 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24927_24971 = state_24895__$1;
(statearr_24927_24971[(2)] = inst_24823);

(statearr_24927_24971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (9))){
var inst_24825 = figwheel.client.heads_up.clear.call(null);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(12),inst_24825);
} else {
if((state_val_24896 === (5))){
var inst_24816 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24895__$1 = state_24895;
var statearr_24928_24972 = state_24895__$1;
(statearr_24928_24972[(2)] = inst_24816);

(statearr_24928_24972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (14))){
var inst_24843 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24843)){
var statearr_24929_24973 = state_24895__$1;
(statearr_24929_24973[(1)] = (18));

} else {
var statearr_24930_24974 = state_24895__$1;
(statearr_24930_24974[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (26))){
var inst_24867 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24895__$1 = state_24895;
if(cljs.core.truth_(inst_24867)){
var statearr_24931_24975 = state_24895__$1;
(statearr_24931_24975[(1)] = (30));

} else {
var statearr_24932_24976 = state_24895__$1;
(statearr_24932_24976[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (16))){
var inst_24835 = (state_24895[(2)]);
var inst_24836 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24837 = figwheel.client.format_messages.call(null,inst_24836);
var inst_24838 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24839 = figwheel.client.heads_up.display_error.call(null,inst_24837,inst_24838);
var state_24895__$1 = (function (){var statearr_24933 = state_24895;
(statearr_24933[(9)] = inst_24835);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(17),inst_24839);
} else {
if((state_val_24896 === (30))){
var inst_24869 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24870 = figwheel.client.heads_up.display_warning.call(null,inst_24869);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(33),inst_24870);
} else {
if((state_val_24896 === (10))){
var inst_24829 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24934_24977 = state_24895__$1;
(statearr_24934_24977[(2)] = inst_24829);

(statearr_24934_24977[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (18))){
var inst_24845 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24846 = figwheel.client.format_messages.call(null,inst_24845);
var inst_24847 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24848 = figwheel.client.heads_up.display_error.call(null,inst_24846,inst_24847);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(21),inst_24848);
} else {
if((state_val_24896 === (37))){
var inst_24878 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24935_24978 = state_24895__$1;
(statearr_24935_24978[(2)] = inst_24878);

(statearr_24935_24978[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24896 === (8))){
var inst_24821 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24895__$1,(11),inst_24821);
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
});})(c__21300__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20363__auto__,c__21300__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto____0 = (function (){
var statearr_24939 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24939[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto__);

(statearr_24939[(1)] = (1));

return statearr_24939;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto____1 = (function (state_24895){
while(true){
var ret_value__20365__auto__ = (function (){try{while(true){
var result__20366__auto__ = switch__20363__auto__.call(null,state_24895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20366__auto__;
}
break;
}
}catch (e24940){if((e24940 instanceof Object)){
var ex__20367__auto__ = e24940;
var statearr_24941_24979 = state_24895;
(statearr_24941_24979[(5)] = ex__20367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24980 = state_24895;
state_24895 = G__24980;
continue;
} else {
return ret_value__20365__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto__ = function(state_24895){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto____1.call(this,state_24895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20364__auto__;
})()
;})(switch__20363__auto__,c__21300__auto__,msg_hist,msg_names,msg))
})();
var state__21302__auto__ = (function (){var statearr_24942 = f__21301__auto__.call(null);
(statearr_24942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21300__auto__);

return statearr_24942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21302__auto__);
});})(c__21300__auto__,msg_hist,msg_names,msg))
);

return c__21300__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21300__auto___25043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21300__auto___25043,ch){
return (function (){
var f__21301__auto__ = (function (){var switch__20363__auto__ = ((function (c__21300__auto___25043,ch){
return (function (state_25026){
var state_val_25027 = (state_25026[(1)]);
if((state_val_25027 === (1))){
var state_25026__$1 = state_25026;
var statearr_25028_25044 = state_25026__$1;
(statearr_25028_25044[(2)] = null);

(statearr_25028_25044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (2))){
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25026__$1,(4),ch);
} else {
if((state_val_25027 === (3))){
var inst_25024 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25026__$1,inst_25024);
} else {
if((state_val_25027 === (4))){
var inst_25014 = (state_25026[(7)]);
var inst_25014__$1 = (state_25026[(2)]);
var state_25026__$1 = (function (){var statearr_25029 = state_25026;
(statearr_25029[(7)] = inst_25014__$1);

return statearr_25029;
})();
if(cljs.core.truth_(inst_25014__$1)){
var statearr_25030_25045 = state_25026__$1;
(statearr_25030_25045[(1)] = (5));

} else {
var statearr_25031_25046 = state_25026__$1;
(statearr_25031_25046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (5))){
var inst_25014 = (state_25026[(7)]);
var inst_25016 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25014);
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25026__$1,(8),inst_25016);
} else {
if((state_val_25027 === (6))){
var state_25026__$1 = state_25026;
var statearr_25032_25047 = state_25026__$1;
(statearr_25032_25047[(2)] = null);

(statearr_25032_25047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (7))){
var inst_25022 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
var statearr_25033_25048 = state_25026__$1;
(statearr_25033_25048[(2)] = inst_25022);

(statearr_25033_25048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (8))){
var inst_25018 = (state_25026[(2)]);
var state_25026__$1 = (function (){var statearr_25034 = state_25026;
(statearr_25034[(8)] = inst_25018);

return statearr_25034;
})();
var statearr_25035_25049 = state_25026__$1;
(statearr_25035_25049[(2)] = null);

(statearr_25035_25049[(1)] = (2));


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
});})(c__21300__auto___25043,ch))
;
return ((function (switch__20363__auto__,c__21300__auto___25043,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20364__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20364__auto____0 = (function (){
var statearr_25039 = [null,null,null,null,null,null,null,null,null];
(statearr_25039[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20364__auto__);

(statearr_25039[(1)] = (1));

return statearr_25039;
});
var figwheel$client$heads_up_plugin_$_state_machine__20364__auto____1 = (function (state_25026){
while(true){
var ret_value__20365__auto__ = (function (){try{while(true){
var result__20366__auto__ = switch__20363__auto__.call(null,state_25026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20366__auto__;
}
break;
}
}catch (e25040){if((e25040 instanceof Object)){
var ex__20367__auto__ = e25040;
var statearr_25041_25050 = state_25026;
(statearr_25041_25050[(5)] = ex__20367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25051 = state_25026;
state_25026 = G__25051;
continue;
} else {
return ret_value__20365__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20364__auto__ = function(state_25026){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20364__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20364__auto____1.call(this,state_25026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20364__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20364__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20364__auto__;
})()
;})(switch__20363__auto__,c__21300__auto___25043,ch))
})();
var state__21302__auto__ = (function (){var statearr_25042 = f__21301__auto__.call(null);
(statearr_25042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21300__auto___25043);

return statearr_25042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21302__auto__);
});})(c__21300__auto___25043,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21300__auto__){
return (function (){
var f__21301__auto__ = (function (){var switch__20363__auto__ = ((function (c__21300__auto__){
return (function (state_25072){
var state_val_25073 = (state_25072[(1)]);
if((state_val_25073 === (1))){
var inst_25067 = cljs.core.async.timeout.call(null,(3000));
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(2),inst_25067);
} else {
if((state_val_25073 === (2))){
var inst_25069 = (state_25072[(2)]);
var inst_25070 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25072__$1 = (function (){var statearr_25074 = state_25072;
(statearr_25074[(7)] = inst_25069);

return statearr_25074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25072__$1,inst_25070);
} else {
return null;
}
}
});})(c__21300__auto__))
;
return ((function (switch__20363__auto__,c__21300__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20364__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20364__auto____0 = (function (){
var statearr_25078 = [null,null,null,null,null,null,null,null];
(statearr_25078[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20364__auto__);

(statearr_25078[(1)] = (1));

return statearr_25078;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20364__auto____1 = (function (state_25072){
while(true){
var ret_value__20365__auto__ = (function (){try{while(true){
var result__20366__auto__ = switch__20363__auto__.call(null,state_25072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20366__auto__;
}
break;
}
}catch (e25079){if((e25079 instanceof Object)){
var ex__20367__auto__ = e25079;
var statearr_25080_25082 = state_25072;
(statearr_25080_25082[(5)] = ex__20367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25083 = state_25072;
state_25072 = G__25083;
continue;
} else {
return ret_value__20365__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20364__auto__ = function(state_25072){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20364__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20364__auto____1.call(this,state_25072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20364__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20364__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20364__auto__;
})()
;})(switch__20363__auto__,c__21300__auto__))
})();
var state__21302__auto__ = (function (){var statearr_25081 = f__21301__auto__.call(null);
(statearr_25081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21300__auto__);

return statearr_25081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21302__auto__);
});})(c__21300__auto__))
);

return c__21300__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25084){
var map__25091 = p__25084;
var map__25091__$1 = ((((!((map__25091 == null)))?((((map__25091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25091):map__25091);
var ed = map__25091__$1;
var formatted_exception = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25093_25097 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25094_25098 = null;
var count__25095_25099 = (0);
var i__25096_25100 = (0);
while(true){
if((i__25096_25100 < count__25095_25099)){
var msg_25101 = cljs.core._nth.call(null,chunk__25094_25098,i__25096_25100);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25101);

var G__25102 = seq__25093_25097;
var G__25103 = chunk__25094_25098;
var G__25104 = count__25095_25099;
var G__25105 = (i__25096_25100 + (1));
seq__25093_25097 = G__25102;
chunk__25094_25098 = G__25103;
count__25095_25099 = G__25104;
i__25096_25100 = G__25105;
continue;
} else {
var temp__4425__auto___25106 = cljs.core.seq.call(null,seq__25093_25097);
if(temp__4425__auto___25106){
var seq__25093_25107__$1 = temp__4425__auto___25106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25093_25107__$1)){
var c__19127__auto___25108 = cljs.core.chunk_first.call(null,seq__25093_25107__$1);
var G__25109 = cljs.core.chunk_rest.call(null,seq__25093_25107__$1);
var G__25110 = c__19127__auto___25108;
var G__25111 = cljs.core.count.call(null,c__19127__auto___25108);
var G__25112 = (0);
seq__25093_25097 = G__25109;
chunk__25094_25098 = G__25110;
count__25095_25099 = G__25111;
i__25096_25100 = G__25112;
continue;
} else {
var msg_25113 = cljs.core.first.call(null,seq__25093_25107__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25113);

var G__25114 = cljs.core.next.call(null,seq__25093_25107__$1);
var G__25115 = null;
var G__25116 = (0);
var G__25117 = (0);
seq__25093_25097 = G__25114;
chunk__25094_25098 = G__25115;
count__25095_25099 = G__25116;
i__25096_25100 = G__25117;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25118){
var map__25121 = p__25118;
var map__25121__$1 = ((((!((map__25121 == null)))?((((map__25121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25121):map__25121);
var w = map__25121__$1;
var message = cljs.core.get.call(null,map__25121__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18312__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18312__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18312__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25129 = cljs.core.seq.call(null,plugins);
var chunk__25130 = null;
var count__25131 = (0);
var i__25132 = (0);
while(true){
if((i__25132 < count__25131)){
var vec__25133 = cljs.core._nth.call(null,chunk__25130,i__25132);
var k = cljs.core.nth.call(null,vec__25133,(0),null);
var plugin = cljs.core.nth.call(null,vec__25133,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25135 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25129,chunk__25130,count__25131,i__25132,pl_25135,vec__25133,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25135.call(null,msg_hist);
});})(seq__25129,chunk__25130,count__25131,i__25132,pl_25135,vec__25133,k,plugin))
);
} else {
}

var G__25136 = seq__25129;
var G__25137 = chunk__25130;
var G__25138 = count__25131;
var G__25139 = (i__25132 + (1));
seq__25129 = G__25136;
chunk__25130 = G__25137;
count__25131 = G__25138;
i__25132 = G__25139;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25129);
if(temp__4425__auto__){
var seq__25129__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25129__$1)){
var c__19127__auto__ = cljs.core.chunk_first.call(null,seq__25129__$1);
var G__25140 = cljs.core.chunk_rest.call(null,seq__25129__$1);
var G__25141 = c__19127__auto__;
var G__25142 = cljs.core.count.call(null,c__19127__auto__);
var G__25143 = (0);
seq__25129 = G__25140;
chunk__25130 = G__25141;
count__25131 = G__25142;
i__25132 = G__25143;
continue;
} else {
var vec__25134 = cljs.core.first.call(null,seq__25129__$1);
var k = cljs.core.nth.call(null,vec__25134,(0),null);
var plugin = cljs.core.nth.call(null,vec__25134,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25144 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25129,chunk__25130,count__25131,i__25132,pl_25144,vec__25134,k,plugin,seq__25129__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25144.call(null,msg_hist);
});})(seq__25129,chunk__25130,count__25131,i__25132,pl_25144,vec__25134,k,plugin,seq__25129__$1,temp__4425__auto__))
);
} else {
}

var G__25145 = cljs.core.next.call(null,seq__25129__$1);
var G__25146 = null;
var G__25147 = (0);
var G__25148 = (0);
seq__25129 = G__25145;
chunk__25130 = G__25146;
count__25131 = G__25147;
i__25132 = G__25148;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25149 = [];
var len__19382__auto___25152 = arguments.length;
var i__19383__auto___25153 = (0);
while(true){
if((i__19383__auto___25153 < len__19382__auto___25152)){
args25149.push((arguments[i__19383__auto___25153]));

var G__25154 = (i__19383__auto___25153 + (1));
i__19383__auto___25153 = G__25154;
continue;
} else {
}
break;
}

var G__25151 = args25149.length;
switch (G__25151) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25149.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19389__auto__ = [];
var len__19382__auto___25160 = arguments.length;
var i__19383__auto___25161 = (0);
while(true){
if((i__19383__auto___25161 < len__19382__auto___25160)){
args__19389__auto__.push((arguments[i__19383__auto___25161]));

var G__25162 = (i__19383__auto___25161 + (1));
i__19383__auto___25161 = G__25162;
continue;
} else {
}
break;
}

var argseq__19390__auto__ = ((((0) < args__19389__auto__.length))?(new cljs.core.IndexedSeq(args__19389__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19390__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25157){
var map__25158 = p__25157;
var map__25158__$1 = ((((!((map__25158 == null)))?((((map__25158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25158):map__25158);
var opts = map__25158__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25156){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25156));
});

//# sourceMappingURL=client.js.map?rel=1452472339495