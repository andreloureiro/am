// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args44162 = [];
var len__39562__auto___44170 = arguments.length;
var i__39563__auto___44171 = (0);
while(true){
if((i__39563__auto___44171 < len__39562__auto___44170)){
args44162.push((arguments[i__39563__auto___44171]));

var G__44175 = (i__39563__auto___44171 + (1));
i__39563__auto___44171 = G__44175;
continue;
} else {
}
break;
}

var G__44166 = args44162.length;
switch (G__44166) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44162.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44167 = (function (f,blockable,meta44168){
this.f = f;
this.blockable = blockable;
this.meta44168 = meta44168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44169,meta44168__$1){
var self__ = this;
var _44169__$1 = this;
return (new cljs.core.async.t_cljs$core$async44167(self__.f,self__.blockable,meta44168__$1));
});

cljs.core.async.t_cljs$core$async44167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44169){
var self__ = this;
var _44169__$1 = this;
return self__.meta44168;
});

cljs.core.async.t_cljs$core$async44167.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44168","meta44168",745142890,null)], null);
});

cljs.core.async.t_cljs$core$async44167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44167";

cljs.core.async.t_cljs$core$async44167.cljs$lang$ctorPrWriter = (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async44167");
});

cljs.core.async.__GT_t_cljs$core$async44167 = (function cljs$core$async$__GT_t_cljs$core$async44167(f__$1,blockable__$1,meta44168){
return (new cljs.core.async.t_cljs$core$async44167(f__$1,blockable__$1,meta44168));
});

}

return (new cljs.core.async.t_cljs$core$async44167(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args44196 = [];
var len__39562__auto___44202 = arguments.length;
var i__39563__auto___44203 = (0);
while(true){
if((i__39563__auto___44203 < len__39562__auto___44202)){
args44196.push((arguments[i__39563__auto___44203]));

var G__44204 = (i__39563__auto___44203 + (1));
i__39563__auto___44203 = G__44204;
continue;
} else {
}
break;
}

var G__44198 = args44196.length;
switch (G__44198) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44196.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args44210 = [];
var len__39562__auto___44218 = arguments.length;
var i__39563__auto___44219 = (0);
while(true){
if((i__39563__auto___44219 < len__39562__auto___44218)){
args44210.push((arguments[i__39563__auto___44219]));

var G__44220 = (i__39563__auto___44219 + (1));
i__39563__auto___44219 = G__44220;
continue;
} else {
}
break;
}

var G__44215 = args44210.length;
switch (G__44215) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44210.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args44225 = [];
var len__39562__auto___44233 = arguments.length;
var i__39563__auto___44238 = (0);
while(true){
if((i__39563__auto___44238 < len__39562__auto___44233)){
args44225.push((arguments[i__39563__auto___44238]));

var G__44239 = (i__39563__auto___44238 + (1));
i__39563__auto___44238 = G__44239;
continue;
} else {
}
break;
}

var G__44227 = args44225.length;
switch (G__44227) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44225.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44253 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44253);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44253,ret){
return (function (){
return fn1.call(null,val_44253);
});})(val_44253,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args44260 = [];
var len__39562__auto___44266 = arguments.length;
var i__39563__auto___44267 = (0);
while(true){
if((i__39563__auto___44267 < len__39562__auto___44266)){
args44260.push((arguments[i__39563__auto___44267]));

var G__44268 = (i__39563__auto___44267 + (1));
i__39563__auto___44267 = G__44268;
continue;
} else {
}
break;
}

var G__44262 = args44260.length;
switch (G__44262) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44260.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__39407__auto___44285 = n;
var x_44286 = (0);
while(true){
if((x_44286 < n__39407__auto___44285)){
(a[x_44286] = (0));

var G__44287 = (x_44286 + (1));
x_44286 = G__44287;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44288 = (i + (1));
i = G__44288;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44292 = (function (alt_flag,flag,meta44293){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44293 = meta44293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44294,meta44293__$1){
var self__ = this;
var _44294__$1 = this;
return (new cljs.core.async.t_cljs$core$async44292(self__.alt_flag,self__.flag,meta44293__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44294){
var self__ = this;
var _44294__$1 = this;
return self__.meta44293;
});})(flag))
;

cljs.core.async.t_cljs$core$async44292.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44292.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44293","meta44293",-128493440,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44292";

cljs.core.async.t_cljs$core$async44292.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async44292");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44292 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44292(alt_flag__$1,flag__$1,meta44293){
return (new cljs.core.async.t_cljs$core$async44292(alt_flag__$1,flag__$1,meta44293));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44292(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44308 = (function (alt_handler,flag,cb,meta44309){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44309 = meta44309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44310,meta44309__$1){
var self__ = this;
var _44310__$1 = this;
return (new cljs.core.async.t_cljs$core$async44308(self__.alt_handler,self__.flag,self__.cb,meta44309__$1));
});

cljs.core.async.t_cljs$core$async44308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44310){
var self__ = this;
var _44310__$1 = this;
return self__.meta44309;
});

cljs.core.async.t_cljs$core$async44308.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44309","meta44309",107375878,null)], null);
});

cljs.core.async.t_cljs$core$async44308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44308";

cljs.core.async.t_cljs$core$async44308.cljs$lang$ctorPrWriter = (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async44308");
});

cljs.core.async.__GT_t_cljs$core$async44308 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44308(alt_handler__$1,flag__$1,cb__$1,meta44309){
return (new cljs.core.async.t_cljs$core$async44308(alt_handler__$1,flag__$1,cb__$1,meta44309));
});

}

return (new cljs.core.async.t_cljs$core$async44308(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44311_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44311_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44312_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44312_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__38504__auto__ = wport;
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44313 = (i + (1));
i = G__44313;
continue;
}
} else {
return null;
}
break;
}
})();
var or__38504__auto__ = ret;
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__38492__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__38492__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__38492__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__39569__auto__ = [];
var len__39562__auto___44326 = arguments.length;
var i__39563__auto___44327 = (0);
while(true){
if((i__39563__auto___44327 < len__39562__auto___44326)){
args__39569__auto__.push((arguments[i__39563__auto___44327]));

var G__44328 = (i__39563__auto___44327 + (1));
i__39563__auto___44327 = G__44328;
continue;
} else {
}
break;
}

var argseq__39570__auto__ = ((((1) < args__39569__auto__.length))?(new cljs.core.IndexedSeq(args__39569__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39570__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44321){
var map__44322 = p__44321;
var map__44322__$1 = ((((!((map__44322 == null)))?((((map__44322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44322):map__44322);
var opts = map__44322__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44317){
var G__44318 = cljs.core.first.call(null,seq44317);
var seq44317__$1 = cljs.core.next.call(null,seq44317);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44318,seq44317__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args44335 = [];
var len__39562__auto___44390 = arguments.length;
var i__39563__auto___44391 = (0);
while(true){
if((i__39563__auto___44391 < len__39562__auto___44390)){
args44335.push((arguments[i__39563__auto___44391]));

var G__44392 = (i__39563__auto___44391 + (1));
i__39563__auto___44391 = G__44392;
continue;
} else {
}
break;
}

var G__44337 = args44335.length;
switch (G__44337) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44335.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44117__auto___44397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___44397){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___44397){
return (function (state_44365){
var state_val_44366 = (state_44365[(1)]);
if((state_val_44366 === (7))){
var inst_44361 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44367_44401 = state_44365__$1;
(statearr_44367_44401[(2)] = inst_44361);

(statearr_44367_44401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (1))){
var state_44365__$1 = state_44365;
var statearr_44368_44403 = state_44365__$1;
(statearr_44368_44403[(2)] = null);

(statearr_44368_44403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (4))){
var inst_44344 = (state_44365[(7)]);
var inst_44344__$1 = (state_44365[(2)]);
var inst_44345 = (inst_44344__$1 == null);
var state_44365__$1 = (function (){var statearr_44369 = state_44365;
(statearr_44369[(7)] = inst_44344__$1);

return statearr_44369;
})();
if(cljs.core.truth_(inst_44345)){
var statearr_44370_44405 = state_44365__$1;
(statearr_44370_44405[(1)] = (5));

} else {
var statearr_44371_44406 = state_44365__$1;
(statearr_44371_44406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (13))){
var state_44365__$1 = state_44365;
var statearr_44372_44407 = state_44365__$1;
(statearr_44372_44407[(2)] = null);

(statearr_44372_44407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (6))){
var inst_44344 = (state_44365[(7)]);
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44365__$1,(11),to,inst_44344);
} else {
if((state_val_44366 === (3))){
var inst_44363 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44365__$1,inst_44363);
} else {
if((state_val_44366 === (12))){
var state_44365__$1 = state_44365;
var statearr_44373_44411 = state_44365__$1;
(statearr_44373_44411[(2)] = null);

(statearr_44373_44411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (2))){
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44365__$1,(4),from);
} else {
if((state_val_44366 === (11))){
var inst_44354 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
if(cljs.core.truth_(inst_44354)){
var statearr_44374_44412 = state_44365__$1;
(statearr_44374_44412[(1)] = (12));

} else {
var statearr_44375_44413 = state_44365__$1;
(statearr_44375_44413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (9))){
var state_44365__$1 = state_44365;
var statearr_44376_44414 = state_44365__$1;
(statearr_44376_44414[(2)] = null);

(statearr_44376_44414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (5))){
var state_44365__$1 = state_44365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44377_44415 = state_44365__$1;
(statearr_44377_44415[(1)] = (8));

} else {
var statearr_44378_44416 = state_44365__$1;
(statearr_44378_44416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (14))){
var inst_44359 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44379_44417 = state_44365__$1;
(statearr_44379_44417[(2)] = inst_44359);

(statearr_44379_44417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (10))){
var inst_44351 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44380_44419 = state_44365__$1;
(statearr_44380_44419[(2)] = inst_44351);

(statearr_44380_44419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (8))){
var inst_44348 = cljs.core.async.close_BANG_.call(null,to);
var state_44365__$1 = state_44365;
var statearr_44381_44420 = state_44365__$1;
(statearr_44381_44420[(2)] = inst_44348);

(statearr_44381_44420[(1)] = (10));


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
});})(c__44117__auto___44397))
;
return ((function (switch__43799__auto__,c__44117__auto___44397){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_44385 = [null,null,null,null,null,null,null,null];
(statearr_44385[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_44385[(1)] = (1));

return statearr_44385;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_44365){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_44365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e44386){if((e44386 instanceof Object)){
var ex__43803__auto__ = e44386;
var statearr_44387_44421 = state_44365;
(statearr_44387_44421[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44422 = state_44365;
state_44365 = G__44422;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_44365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_44365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___44397))
})();
var state__44119__auto__ = (function (){var statearr_44389 = f__44118__auto__.call(null);
(statearr_44389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___44397);

return statearr_44389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___44397))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44622){
var vec__44623 = p__44622;
var v = cljs.core.nth.call(null,vec__44623,(0),null);
var p = cljs.core.nth.call(null,vec__44623,(1),null);
var job = vec__44623;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44117__auto___44827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___44827,res,vec__44623,v,p,job,jobs,results){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___44827,res,vec__44623,v,p,job,jobs,results){
return (function (state_44628){
var state_val_44629 = (state_44628[(1)]);
if((state_val_44629 === (1))){
var state_44628__$1 = state_44628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44628__$1,(2),res,v);
} else {
if((state_val_44629 === (2))){
var inst_44625 = (state_44628[(2)]);
var inst_44626 = cljs.core.async.close_BANG_.call(null,res);
var state_44628__$1 = (function (){var statearr_44630 = state_44628;
(statearr_44630[(7)] = inst_44625);

return statearr_44630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44628__$1,inst_44626);
} else {
return null;
}
}
});})(c__44117__auto___44827,res,vec__44623,v,p,job,jobs,results))
;
return ((function (switch__43799__auto__,c__44117__auto___44827,res,vec__44623,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0 = (function (){
var statearr_44634 = [null,null,null,null,null,null,null,null];
(statearr_44634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__);

(statearr_44634[(1)] = (1));

return statearr_44634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1 = (function (state_44628){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_44628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e44635){if((e44635 instanceof Object)){
var ex__43803__auto__ = e44635;
var statearr_44636_44838 = state_44628;
(statearr_44636_44838[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44839 = state_44628;
state_44628 = G__44839;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = function(state_44628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1.call(this,state_44628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___44827,res,vec__44623,v,p,job,jobs,results))
})();
var state__44119__auto__ = (function (){var statearr_44637 = f__44118__auto__.call(null);
(statearr_44637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___44827);

return statearr_44637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___44827,res,vec__44623,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44638){
var vec__44639 = p__44638;
var v = cljs.core.nth.call(null,vec__44639,(0),null);
var p = cljs.core.nth.call(null,vec__44639,(1),null);
var job = vec__44639;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__39407__auto___44842 = n;
var __44844 = (0);
while(true){
if((__44844 < n__39407__auto___44842)){
var G__44641_44845 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44641_44845) {
case "compute":
var c__44117__auto___44847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44844,c__44117__auto___44847,G__44641_44845,n__39407__auto___44842,jobs,results,process,async){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (__44844,c__44117__auto___44847,G__44641_44845,n__39407__auto___44842,jobs,results,process,async){
return (function (state_44654){
var state_val_44655 = (state_44654[(1)]);
if((state_val_44655 === (1))){
var state_44654__$1 = state_44654;
var statearr_44656_44854 = state_44654__$1;
(statearr_44656_44854[(2)] = null);

(statearr_44656_44854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (2))){
var state_44654__$1 = state_44654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44654__$1,(4),jobs);
} else {
if((state_val_44655 === (3))){
var inst_44652 = (state_44654[(2)]);
var state_44654__$1 = state_44654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44654__$1,inst_44652);
} else {
if((state_val_44655 === (4))){
var inst_44644 = (state_44654[(2)]);
var inst_44645 = process.call(null,inst_44644);
var state_44654__$1 = state_44654;
if(cljs.core.truth_(inst_44645)){
var statearr_44657_44858 = state_44654__$1;
(statearr_44657_44858[(1)] = (5));

} else {
var statearr_44658_44859 = state_44654__$1;
(statearr_44658_44859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (5))){
var state_44654__$1 = state_44654;
var statearr_44659_44860 = state_44654__$1;
(statearr_44659_44860[(2)] = null);

(statearr_44659_44860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (6))){
var state_44654__$1 = state_44654;
var statearr_44660_44864 = state_44654__$1;
(statearr_44660_44864[(2)] = null);

(statearr_44660_44864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (7))){
var inst_44650 = (state_44654[(2)]);
var state_44654__$1 = state_44654;
var statearr_44661_44867 = state_44654__$1;
(statearr_44661_44867[(2)] = inst_44650);

(statearr_44661_44867[(1)] = (3));


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
});})(__44844,c__44117__auto___44847,G__44641_44845,n__39407__auto___44842,jobs,results,process,async))
;
return ((function (__44844,switch__43799__auto__,c__44117__auto___44847,G__44641_44845,n__39407__auto___44842,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0 = (function (){
var statearr_44665 = [null,null,null,null,null,null,null];
(statearr_44665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__);

(statearr_44665[(1)] = (1));

return statearr_44665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1 = (function (state_44654){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_44654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e44666){if((e44666 instanceof Object)){
var ex__43803__auto__ = e44666;
var statearr_44667_44878 = state_44654;
(statearr_44667_44878[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44879 = state_44654;
state_44654 = G__44879;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = function(state_44654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1.call(this,state_44654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__;
})()
;})(__44844,switch__43799__auto__,c__44117__auto___44847,G__44641_44845,n__39407__auto___44842,jobs,results,process,async))
})();
var state__44119__auto__ = (function (){var statearr_44668 = f__44118__auto__.call(null);
(statearr_44668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___44847);

return statearr_44668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(__44844,c__44117__auto___44847,G__44641_44845,n__39407__auto___44842,jobs,results,process,async))
);


break;
case "async":
var c__44117__auto___44880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44844,c__44117__auto___44880,G__44641_44845,n__39407__auto___44842,jobs,results,process,async){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (__44844,c__44117__auto___44880,G__44641_44845,n__39407__auto___44842,jobs,results,process,async){
return (function (state_44681){
var state_val_44682 = (state_44681[(1)]);
if((state_val_44682 === (1))){
var state_44681__$1 = state_44681;
var statearr_44683_44884 = state_44681__$1;
(statearr_44683_44884[(2)] = null);

(statearr_44683_44884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (2))){
var state_44681__$1 = state_44681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44681__$1,(4),jobs);
} else {
if((state_val_44682 === (3))){
var inst_44679 = (state_44681[(2)]);
var state_44681__$1 = state_44681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44681__$1,inst_44679);
} else {
if((state_val_44682 === (4))){
var inst_44671 = (state_44681[(2)]);
var inst_44672 = async.call(null,inst_44671);
var state_44681__$1 = state_44681;
if(cljs.core.truth_(inst_44672)){
var statearr_44684_44894 = state_44681__$1;
(statearr_44684_44894[(1)] = (5));

} else {
var statearr_44685_44895 = state_44681__$1;
(statearr_44685_44895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (5))){
var state_44681__$1 = state_44681;
var statearr_44686_44896 = state_44681__$1;
(statearr_44686_44896[(2)] = null);

(statearr_44686_44896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (6))){
var state_44681__$1 = state_44681;
var statearr_44687_44899 = state_44681__$1;
(statearr_44687_44899[(2)] = null);

(statearr_44687_44899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (7))){
var inst_44677 = (state_44681[(2)]);
var state_44681__$1 = state_44681;
var statearr_44688_44905 = state_44681__$1;
(statearr_44688_44905[(2)] = inst_44677);

(statearr_44688_44905[(1)] = (3));


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
});})(__44844,c__44117__auto___44880,G__44641_44845,n__39407__auto___44842,jobs,results,process,async))
;
return ((function (__44844,switch__43799__auto__,c__44117__auto___44880,G__44641_44845,n__39407__auto___44842,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0 = (function (){
var statearr_44692 = [null,null,null,null,null,null,null];
(statearr_44692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__);

(statearr_44692[(1)] = (1));

return statearr_44692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1 = (function (state_44681){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_44681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e44693){if((e44693 instanceof Object)){
var ex__43803__auto__ = e44693;
var statearr_44694_44911 = state_44681;
(statearr_44694_44911[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44919 = state_44681;
state_44681 = G__44919;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = function(state_44681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1.call(this,state_44681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__;
})()
;})(__44844,switch__43799__auto__,c__44117__auto___44880,G__44641_44845,n__39407__auto___44842,jobs,results,process,async))
})();
var state__44119__auto__ = (function (){var statearr_44695 = f__44118__auto__.call(null);
(statearr_44695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___44880);

return statearr_44695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(__44844,c__44117__auto___44880,G__44641_44845,n__39407__auto___44842,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__44920 = (__44844 + (1));
__44844 = G__44920;
continue;
} else {
}
break;
}

var c__44117__auto___44921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___44921,jobs,results,process,async){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___44921,jobs,results,process,async){
return (function (state_44717){
var state_val_44718 = (state_44717[(1)]);
if((state_val_44718 === (1))){
var state_44717__$1 = state_44717;
var statearr_44719_44924 = state_44717__$1;
(statearr_44719_44924[(2)] = null);

(statearr_44719_44924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (2))){
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(4),from);
} else {
if((state_val_44718 === (3))){
var inst_44715 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44717__$1,inst_44715);
} else {
if((state_val_44718 === (4))){
var inst_44698 = (state_44717[(7)]);
var inst_44698__$1 = (state_44717[(2)]);
var inst_44699 = (inst_44698__$1 == null);
var state_44717__$1 = (function (){var statearr_44721 = state_44717;
(statearr_44721[(7)] = inst_44698__$1);

return statearr_44721;
})();
if(cljs.core.truth_(inst_44699)){
var statearr_44722_44934 = state_44717__$1;
(statearr_44722_44934[(1)] = (5));

} else {
var statearr_44723_44935 = state_44717__$1;
(statearr_44723_44935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (5))){
var inst_44701 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44717__$1 = state_44717;
var statearr_44725_44936 = state_44717__$1;
(statearr_44725_44936[(2)] = inst_44701);

(statearr_44725_44936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (6))){
var inst_44698 = (state_44717[(7)]);
var inst_44703 = (state_44717[(8)]);
var inst_44703__$1 = cljs.core.async.chan.call(null,(1));
var inst_44704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44705 = [inst_44698,inst_44703__$1];
var inst_44706 = (new cljs.core.PersistentVector(null,2,(5),inst_44704,inst_44705,null));
var state_44717__$1 = (function (){var statearr_44727 = state_44717;
(statearr_44727[(8)] = inst_44703__$1);

return statearr_44727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44717__$1,(8),jobs,inst_44706);
} else {
if((state_val_44718 === (7))){
var inst_44713 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44729_44941 = state_44717__$1;
(statearr_44729_44941[(2)] = inst_44713);

(statearr_44729_44941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (8))){
var inst_44703 = (state_44717[(8)]);
var inst_44708 = (state_44717[(2)]);
var state_44717__$1 = (function (){var statearr_44730 = state_44717;
(statearr_44730[(9)] = inst_44708);

return statearr_44730;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44717__$1,(9),results,inst_44703);
} else {
if((state_val_44718 === (9))){
var inst_44710 = (state_44717[(2)]);
var state_44717__$1 = (function (){var statearr_44731 = state_44717;
(statearr_44731[(10)] = inst_44710);

return statearr_44731;
})();
var statearr_44732_44943 = state_44717__$1;
(statearr_44732_44943[(2)] = null);

(statearr_44732_44943[(1)] = (2));


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
});})(c__44117__auto___44921,jobs,results,process,async))
;
return ((function (switch__43799__auto__,c__44117__auto___44921,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0 = (function (){
var statearr_44736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__);

(statearr_44736[(1)] = (1));

return statearr_44736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1 = (function (state_44717){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_44717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e44737){if((e44737 instanceof Object)){
var ex__43803__auto__ = e44737;
var statearr_44738_44949 = state_44717;
(statearr_44738_44949[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44950 = state_44717;
state_44717 = G__44950;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = function(state_44717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1.call(this,state_44717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___44921,jobs,results,process,async))
})();
var state__44119__auto__ = (function (){var statearr_44741 = f__44118__auto__.call(null);
(statearr_44741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___44921);

return statearr_44741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___44921,jobs,results,process,async))
);


var c__44117__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto__,jobs,results,process,async){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto__,jobs,results,process,async){
return (function (state_44779){
var state_val_44780 = (state_44779[(1)]);
if((state_val_44780 === (7))){
var inst_44775 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44781_44960 = state_44779__$1;
(statearr_44781_44960[(2)] = inst_44775);

(statearr_44781_44960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (20))){
var state_44779__$1 = state_44779;
var statearr_44782_44964 = state_44779__$1;
(statearr_44782_44964[(2)] = null);

(statearr_44782_44964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (1))){
var state_44779__$1 = state_44779;
var statearr_44783_44969 = state_44779__$1;
(statearr_44783_44969[(2)] = null);

(statearr_44783_44969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (4))){
var inst_44744 = (state_44779[(7)]);
var inst_44744__$1 = (state_44779[(2)]);
var inst_44745 = (inst_44744__$1 == null);
var state_44779__$1 = (function (){var statearr_44784 = state_44779;
(statearr_44784[(7)] = inst_44744__$1);

return statearr_44784;
})();
if(inst_44745){
var statearr_44785_44977 = state_44779__$1;
(statearr_44785_44977[(1)] = (5));

} else {
var statearr_44786_44979 = state_44779__$1;
(statearr_44786_44979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (15))){
var inst_44757 = (state_44779[(8)]);
var state_44779__$1 = state_44779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44779__$1,(18),to,inst_44757);
} else {
if((state_val_44780 === (21))){
var inst_44770 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44787_44989 = state_44779__$1;
(statearr_44787_44989[(2)] = inst_44770);

(statearr_44787_44989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (13))){
var inst_44772 = (state_44779[(2)]);
var state_44779__$1 = (function (){var statearr_44788 = state_44779;
(statearr_44788[(9)] = inst_44772);

return statearr_44788;
})();
var statearr_44789_44990 = state_44779__$1;
(statearr_44789_44990[(2)] = null);

(statearr_44789_44990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (6))){
var inst_44744 = (state_44779[(7)]);
var state_44779__$1 = state_44779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44779__$1,(11),inst_44744);
} else {
if((state_val_44780 === (17))){
var inst_44765 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
if(inst_44765){
var statearr_44790_44992 = state_44779__$1;
(statearr_44790_44992[(1)] = (19));

} else {
var statearr_44791_44996 = state_44779__$1;
(statearr_44791_44996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (3))){
var inst_44777 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44779__$1,inst_44777);
} else {
if((state_val_44780 === (12))){
var inst_44754 = (state_44779[(10)]);
var state_44779__$1 = state_44779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44779__$1,(14),inst_44754);
} else {
if((state_val_44780 === (2))){
var state_44779__$1 = state_44779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44779__$1,(4),results);
} else {
if((state_val_44780 === (19))){
var state_44779__$1 = state_44779;
var statearr_44792_44999 = state_44779__$1;
(statearr_44792_44999[(2)] = null);

(statearr_44792_44999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (11))){
var inst_44754 = (state_44779[(2)]);
var state_44779__$1 = (function (){var statearr_44798 = state_44779;
(statearr_44798[(10)] = inst_44754);

return statearr_44798;
})();
var statearr_44799_45003 = state_44779__$1;
(statearr_44799_45003[(2)] = null);

(statearr_44799_45003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (9))){
var state_44779__$1 = state_44779;
var statearr_44800_45005 = state_44779__$1;
(statearr_44800_45005[(2)] = null);

(statearr_44800_45005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (5))){
var state_44779__$1 = state_44779;
if(close_QMARK_){
var statearr_44801_45007 = state_44779__$1;
(statearr_44801_45007[(1)] = (8));

} else {
var statearr_44802_45008 = state_44779__$1;
(statearr_44802_45008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (14))){
var inst_44759 = (state_44779[(11)]);
var inst_44757 = (state_44779[(8)]);
var inst_44757__$1 = (state_44779[(2)]);
var inst_44758 = (inst_44757__$1 == null);
var inst_44759__$1 = cljs.core.not.call(null,inst_44758);
var state_44779__$1 = (function (){var statearr_44803 = state_44779;
(statearr_44803[(11)] = inst_44759__$1);

(statearr_44803[(8)] = inst_44757__$1);

return statearr_44803;
})();
if(inst_44759__$1){
var statearr_44804_45009 = state_44779__$1;
(statearr_44804_45009[(1)] = (15));

} else {
var statearr_44805_45010 = state_44779__$1;
(statearr_44805_45010[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (16))){
var inst_44759 = (state_44779[(11)]);
var state_44779__$1 = state_44779;
var statearr_44806_45014 = state_44779__$1;
(statearr_44806_45014[(2)] = inst_44759);

(statearr_44806_45014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (10))){
var inst_44751 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44807_45016 = state_44779__$1;
(statearr_44807_45016[(2)] = inst_44751);

(statearr_44807_45016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (18))){
var inst_44762 = (state_44779[(2)]);
var state_44779__$1 = state_44779;
var statearr_44808_45017 = state_44779__$1;
(statearr_44808_45017[(2)] = inst_44762);

(statearr_44808_45017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44780 === (8))){
var inst_44748 = cljs.core.async.close_BANG_.call(null,to);
var state_44779__$1 = state_44779;
var statearr_44809_45018 = state_44779__$1;
(statearr_44809_45018[(2)] = inst_44748);

(statearr_44809_45018[(1)] = (10));


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
});})(c__44117__auto__,jobs,results,process,async))
;
return ((function (switch__43799__auto__,c__44117__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0 = (function (){
var statearr_44813 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__);

(statearr_44813[(1)] = (1));

return statearr_44813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1 = (function (state_44779){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_44779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e44814){if((e44814 instanceof Object)){
var ex__43803__auto__ = e44814;
var statearr_44815_45020 = state_44779;
(statearr_44815_45020[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45021 = state_44779;
state_44779 = G__45021;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__ = function(state_44779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1.call(this,state_44779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto__,jobs,results,process,async))
})();
var state__44119__auto__ = (function (){var statearr_44816 = f__44118__auto__.call(null);
(statearr_44816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto__);

return statearr_44816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto__,jobs,results,process,async))
);

return c__44117__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args45030 = [];
var len__39562__auto___45036 = arguments.length;
var i__39563__auto___45037 = (0);
while(true){
if((i__39563__auto___45037 < len__39562__auto___45036)){
args45030.push((arguments[i__39563__auto___45037]));

var G__45038 = (i__39563__auto___45037 + (1));
i__39563__auto___45037 = G__45038;
continue;
} else {
}
break;
}

var G__45035 = args45030.length;
switch (G__45035) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45030.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args45054 = [];
var len__39562__auto___45066 = arguments.length;
var i__39563__auto___45069 = (0);
while(true){
if((i__39563__auto___45069 < len__39562__auto___45066)){
args45054.push((arguments[i__39563__auto___45069]));

var G__45075 = (i__39563__auto___45069 + (1));
i__39563__auto___45069 = G__45075;
continue;
} else {
}
break;
}

var G__45059 = args45054.length;
switch (G__45059) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45054.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args45091 = [];
var len__39562__auto___45156 = arguments.length;
var i__39563__auto___45157 = (0);
while(true){
if((i__39563__auto___45157 < len__39562__auto___45156)){
args45091.push((arguments[i__39563__auto___45157]));

var G__45158 = (i__39563__auto___45157 + (1));
i__39563__auto___45157 = G__45158;
continue;
} else {
}
break;
}

var G__45093 = args45091.length;
switch (G__45093) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45091.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44117__auto___45169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___45169,tc,fc){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___45169,tc,fc){
return (function (state_45119){
var state_val_45120 = (state_45119[(1)]);
if((state_val_45120 === (7))){
var inst_45115 = (state_45119[(2)]);
var state_45119__$1 = state_45119;
var statearr_45121_45171 = state_45119__$1;
(statearr_45121_45171[(2)] = inst_45115);

(statearr_45121_45171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (1))){
var state_45119__$1 = state_45119;
var statearr_45123_45172 = state_45119__$1;
(statearr_45123_45172[(2)] = null);

(statearr_45123_45172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (4))){
var inst_45096 = (state_45119[(7)]);
var inst_45096__$1 = (state_45119[(2)]);
var inst_45097 = (inst_45096__$1 == null);
var state_45119__$1 = (function (){var statearr_45124 = state_45119;
(statearr_45124[(7)] = inst_45096__$1);

return statearr_45124;
})();
if(cljs.core.truth_(inst_45097)){
var statearr_45125_45173 = state_45119__$1;
(statearr_45125_45173[(1)] = (5));

} else {
var statearr_45126_45174 = state_45119__$1;
(statearr_45126_45174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (13))){
var state_45119__$1 = state_45119;
var statearr_45127_45175 = state_45119__$1;
(statearr_45127_45175[(2)] = null);

(statearr_45127_45175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (6))){
var inst_45096 = (state_45119[(7)]);
var inst_45102 = p.call(null,inst_45096);
var state_45119__$1 = state_45119;
if(cljs.core.truth_(inst_45102)){
var statearr_45129_45176 = state_45119__$1;
(statearr_45129_45176[(1)] = (9));

} else {
var statearr_45131_45177 = state_45119__$1;
(statearr_45131_45177[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (3))){
var inst_45117 = (state_45119[(2)]);
var state_45119__$1 = state_45119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45119__$1,inst_45117);
} else {
if((state_val_45120 === (12))){
var state_45119__$1 = state_45119;
var statearr_45132_45178 = state_45119__$1;
(statearr_45132_45178[(2)] = null);

(statearr_45132_45178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (2))){
var state_45119__$1 = state_45119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45119__$1,(4),ch);
} else {
if((state_val_45120 === (11))){
var inst_45096 = (state_45119[(7)]);
var inst_45106 = (state_45119[(2)]);
var state_45119__$1 = state_45119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45119__$1,(8),inst_45106,inst_45096);
} else {
if((state_val_45120 === (9))){
var state_45119__$1 = state_45119;
var statearr_45133_45179 = state_45119__$1;
(statearr_45133_45179[(2)] = tc);

(statearr_45133_45179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (5))){
var inst_45099 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45100 = cljs.core.async.close_BANG_.call(null,fc);
var state_45119__$1 = (function (){var statearr_45134 = state_45119;
(statearr_45134[(8)] = inst_45099);

return statearr_45134;
})();
var statearr_45135_45181 = state_45119__$1;
(statearr_45135_45181[(2)] = inst_45100);

(statearr_45135_45181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (14))){
var inst_45113 = (state_45119[(2)]);
var state_45119__$1 = state_45119;
var statearr_45136_45182 = state_45119__$1;
(statearr_45136_45182[(2)] = inst_45113);

(statearr_45136_45182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (10))){
var state_45119__$1 = state_45119;
var statearr_45137_45183 = state_45119__$1;
(statearr_45137_45183[(2)] = fc);

(statearr_45137_45183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45120 === (8))){
var inst_45108 = (state_45119[(2)]);
var state_45119__$1 = state_45119;
if(cljs.core.truth_(inst_45108)){
var statearr_45138_45184 = state_45119__$1;
(statearr_45138_45184[(1)] = (12));

} else {
var statearr_45139_45186 = state_45119__$1;
(statearr_45139_45186[(1)] = (13));

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
});})(c__44117__auto___45169,tc,fc))
;
return ((function (switch__43799__auto__,c__44117__auto___45169,tc,fc){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_45146 = [null,null,null,null,null,null,null,null,null];
(statearr_45146[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_45146[(1)] = (1));

return statearr_45146;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_45119){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_45119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e45148){if((e45148 instanceof Object)){
var ex__43803__auto__ = e45148;
var statearr_45149_45193 = state_45119;
(statearr_45149_45193[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45196 = state_45119;
state_45119 = G__45196;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_45119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_45119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___45169,tc,fc))
})();
var state__44119__auto__ = (function (){var statearr_45153 = f__44118__auto__.call(null);
(statearr_45153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___45169);

return statearr_45153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___45169,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44117__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto__){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto__){
return (function (state_45264){
var state_val_45265 = (state_45264[(1)]);
if((state_val_45265 === (7))){
var inst_45260 = (state_45264[(2)]);
var state_45264__$1 = state_45264;
var statearr_45269_45299 = state_45264__$1;
(statearr_45269_45299[(2)] = inst_45260);

(statearr_45269_45299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45265 === (1))){
var inst_45244 = init;
var state_45264__$1 = (function (){var statearr_45270 = state_45264;
(statearr_45270[(7)] = inst_45244);

return statearr_45270;
})();
var statearr_45271_45300 = state_45264__$1;
(statearr_45271_45300[(2)] = null);

(statearr_45271_45300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45265 === (4))){
var inst_45247 = (state_45264[(8)]);
var inst_45247__$1 = (state_45264[(2)]);
var inst_45248 = (inst_45247__$1 == null);
var state_45264__$1 = (function (){var statearr_45272 = state_45264;
(statearr_45272[(8)] = inst_45247__$1);

return statearr_45272;
})();
if(cljs.core.truth_(inst_45248)){
var statearr_45273_45301 = state_45264__$1;
(statearr_45273_45301[(1)] = (5));

} else {
var statearr_45274_45302 = state_45264__$1;
(statearr_45274_45302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45265 === (6))){
var inst_45244 = (state_45264[(7)]);
var inst_45247 = (state_45264[(8)]);
var inst_45251 = (state_45264[(9)]);
var inst_45251__$1 = f.call(null,inst_45244,inst_45247);
var inst_45252 = cljs.core.reduced_QMARK_.call(null,inst_45251__$1);
var state_45264__$1 = (function (){var statearr_45275 = state_45264;
(statearr_45275[(9)] = inst_45251__$1);

return statearr_45275;
})();
if(inst_45252){
var statearr_45276_45309 = state_45264__$1;
(statearr_45276_45309[(1)] = (8));

} else {
var statearr_45277_45311 = state_45264__$1;
(statearr_45277_45311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45265 === (3))){
var inst_45262 = (state_45264[(2)]);
var state_45264__$1 = state_45264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45264__$1,inst_45262);
} else {
if((state_val_45265 === (2))){
var state_45264__$1 = state_45264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45264__$1,(4),ch);
} else {
if((state_val_45265 === (9))){
var inst_45251 = (state_45264[(9)]);
var inst_45244 = inst_45251;
var state_45264__$1 = (function (){var statearr_45278 = state_45264;
(statearr_45278[(7)] = inst_45244);

return statearr_45278;
})();
var statearr_45279_45317 = state_45264__$1;
(statearr_45279_45317[(2)] = null);

(statearr_45279_45317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45265 === (5))){
var inst_45244 = (state_45264[(7)]);
var state_45264__$1 = state_45264;
var statearr_45280_45318 = state_45264__$1;
(statearr_45280_45318[(2)] = inst_45244);

(statearr_45280_45318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45265 === (10))){
var inst_45258 = (state_45264[(2)]);
var state_45264__$1 = state_45264;
var statearr_45281_45319 = state_45264__$1;
(statearr_45281_45319[(2)] = inst_45258);

(statearr_45281_45319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45265 === (8))){
var inst_45251 = (state_45264[(9)]);
var inst_45254 = cljs.core.deref.call(null,inst_45251);
var state_45264__$1 = state_45264;
var statearr_45282_45323 = state_45264__$1;
(statearr_45282_45323[(2)] = inst_45254);

(statearr_45282_45323[(1)] = (10));


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
});})(c__44117__auto__))
;
return ((function (switch__43799__auto__,c__44117__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43800__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43800__auto____0 = (function (){
var statearr_45289 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45289[(0)] = cljs$core$async$reduce_$_state_machine__43800__auto__);

(statearr_45289[(1)] = (1));

return statearr_45289;
});
var cljs$core$async$reduce_$_state_machine__43800__auto____1 = (function (state_45264){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_45264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e45290){if((e45290 instanceof Object)){
var ex__43803__auto__ = e45290;
var statearr_45291_45325 = state_45264;
(statearr_45291_45325[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45326 = state_45264;
state_45264 = G__45326;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43800__auto__ = function(state_45264){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43800__auto____1.call(this,state_45264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43800__auto____0;
cljs$core$async$reduce_$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43800__auto____1;
return cljs$core$async$reduce_$_state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto__))
})();
var state__44119__auto__ = (function (){var statearr_45295 = f__44118__auto__.call(null);
(statearr_45295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto__);

return statearr_45295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto__))
);

return c__44117__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args45327 = [];
var len__39562__auto___45379 = arguments.length;
var i__39563__auto___45380 = (0);
while(true){
if((i__39563__auto___45380 < len__39562__auto___45379)){
args45327.push((arguments[i__39563__auto___45380]));

var G__45381 = (i__39563__auto___45380 + (1));
i__39563__auto___45380 = G__45381;
continue;
} else {
}
break;
}

var G__45329 = args45327.length;
switch (G__45329) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45327.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44117__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto__){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto__){
return (function (state_45354){
var state_val_45355 = (state_45354[(1)]);
if((state_val_45355 === (7))){
var inst_45336 = (state_45354[(2)]);
var state_45354__$1 = state_45354;
var statearr_45356_45389 = state_45354__$1;
(statearr_45356_45389[(2)] = inst_45336);

(statearr_45356_45389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (1))){
var inst_45330 = cljs.core.seq.call(null,coll);
var inst_45331 = inst_45330;
var state_45354__$1 = (function (){var statearr_45357 = state_45354;
(statearr_45357[(7)] = inst_45331);

return statearr_45357;
})();
var statearr_45358_45392 = state_45354__$1;
(statearr_45358_45392[(2)] = null);

(statearr_45358_45392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (4))){
var inst_45331 = (state_45354[(7)]);
var inst_45334 = cljs.core.first.call(null,inst_45331);
var state_45354__$1 = state_45354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45354__$1,(7),ch,inst_45334);
} else {
if((state_val_45355 === (13))){
var inst_45348 = (state_45354[(2)]);
var state_45354__$1 = state_45354;
var statearr_45359_45400 = state_45354__$1;
(statearr_45359_45400[(2)] = inst_45348);

(statearr_45359_45400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (6))){
var inst_45339 = (state_45354[(2)]);
var state_45354__$1 = state_45354;
if(cljs.core.truth_(inst_45339)){
var statearr_45360_45404 = state_45354__$1;
(statearr_45360_45404[(1)] = (8));

} else {
var statearr_45361_45405 = state_45354__$1;
(statearr_45361_45405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (3))){
var inst_45352 = (state_45354[(2)]);
var state_45354__$1 = state_45354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45354__$1,inst_45352);
} else {
if((state_val_45355 === (12))){
var state_45354__$1 = state_45354;
var statearr_45362_45406 = state_45354__$1;
(statearr_45362_45406[(2)] = null);

(statearr_45362_45406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (2))){
var inst_45331 = (state_45354[(7)]);
var state_45354__$1 = state_45354;
if(cljs.core.truth_(inst_45331)){
var statearr_45363_45408 = state_45354__$1;
(statearr_45363_45408[(1)] = (4));

} else {
var statearr_45364_45409 = state_45354__$1;
(statearr_45364_45409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (11))){
var inst_45345 = cljs.core.async.close_BANG_.call(null,ch);
var state_45354__$1 = state_45354;
var statearr_45365_45410 = state_45354__$1;
(statearr_45365_45410[(2)] = inst_45345);

(statearr_45365_45410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (9))){
var state_45354__$1 = state_45354;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45366_45411 = state_45354__$1;
(statearr_45366_45411[(1)] = (11));

} else {
var statearr_45367_45412 = state_45354__$1;
(statearr_45367_45412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (5))){
var inst_45331 = (state_45354[(7)]);
var state_45354__$1 = state_45354;
var statearr_45368_45413 = state_45354__$1;
(statearr_45368_45413[(2)] = inst_45331);

(statearr_45368_45413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (10))){
var inst_45350 = (state_45354[(2)]);
var state_45354__$1 = state_45354;
var statearr_45369_45415 = state_45354__$1;
(statearr_45369_45415[(2)] = inst_45350);

(statearr_45369_45415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (8))){
var inst_45331 = (state_45354[(7)]);
var inst_45341 = cljs.core.next.call(null,inst_45331);
var inst_45331__$1 = inst_45341;
var state_45354__$1 = (function (){var statearr_45370 = state_45354;
(statearr_45370[(7)] = inst_45331__$1);

return statearr_45370;
})();
var statearr_45371_45416 = state_45354__$1;
(statearr_45371_45416[(2)] = null);

(statearr_45371_45416[(1)] = (2));


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
});})(c__44117__auto__))
;
return ((function (switch__43799__auto__,c__44117__auto__){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_45375 = [null,null,null,null,null,null,null,null];
(statearr_45375[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_45375[(1)] = (1));

return statearr_45375;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_45354){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_45354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e45376){if((e45376 instanceof Object)){
var ex__43803__auto__ = e45376;
var statearr_45377_45419 = state_45354;
(statearr_45377_45419[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45422 = state_45354;
state_45354 = G__45422;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_45354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_45354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto__))
})();
var state__44119__auto__ = (function (){var statearr_45378 = f__44118__auto__.call(null);
(statearr_45378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto__);

return statearr_45378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto__))
);

return c__44117__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__39159__auto__ = (((_ == null))?null:_);
var m__39160__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,_);
} else {
var m__39160__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__39159__auto__ = (((m == null))?null:m);
var m__39160__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__39160__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__39159__auto__ = (((m == null))?null:m);
var m__39160__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,m,ch);
} else {
var m__39160__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__39159__auto__ = (((m == null))?null:m);
var m__39160__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,m);
} else {
var m__39160__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45688 = (function (mult,ch,cs,meta45689){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45689 = meta45689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45690,meta45689__$1){
var self__ = this;
var _45690__$1 = this;
return (new cljs.core.async.t_cljs$core$async45688(self__.mult,self__.ch,self__.cs,meta45689__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45690){
var self__ = this;
var _45690__$1 = this;
return self__.meta45689;
});})(cs))
;

cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45688.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45689","meta45689",-1670233734,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45688";

cljs.core.async.t_cljs$core$async45688.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async45688");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45688 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45688(mult__$1,ch__$1,cs__$1,meta45689){
return (new cljs.core.async.t_cljs$core$async45688(mult__$1,ch__$1,cs__$1,meta45689));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45688(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__44117__auto___45941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___45941,cs,m,dchan,dctr,done){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___45941,cs,m,dchan,dctr,done){
return (function (state_45828){
var state_val_45831 = (state_45828[(1)]);
if((state_val_45831 === (7))){
var inst_45823 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45832_45949 = state_45828__$1;
(statearr_45832_45949[(2)] = inst_45823);

(statearr_45832_45949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (20))){
var inst_45725 = (state_45828[(7)]);
var inst_45735 = cljs.core.first.call(null,inst_45725);
var inst_45736 = cljs.core.nth.call(null,inst_45735,(0),null);
var inst_45737 = cljs.core.nth.call(null,inst_45735,(1),null);
var state_45828__$1 = (function (){var statearr_45833 = state_45828;
(statearr_45833[(8)] = inst_45736);

return statearr_45833;
})();
if(cljs.core.truth_(inst_45737)){
var statearr_45834_45957 = state_45828__$1;
(statearr_45834_45957[(1)] = (22));

} else {
var statearr_45835_45959 = state_45828__$1;
(statearr_45835_45959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (27))){
var inst_45772 = (state_45828[(9)]);
var inst_45765 = (state_45828[(10)]);
var inst_45696 = (state_45828[(11)]);
var inst_45767 = (state_45828[(12)]);
var inst_45772__$1 = cljs.core._nth.call(null,inst_45765,inst_45767);
var inst_45773 = cljs.core.async.put_BANG_.call(null,inst_45772__$1,inst_45696,done);
var state_45828__$1 = (function (){var statearr_45838 = state_45828;
(statearr_45838[(9)] = inst_45772__$1);

return statearr_45838;
})();
if(cljs.core.truth_(inst_45773)){
var statearr_45839_45963 = state_45828__$1;
(statearr_45839_45963[(1)] = (30));

} else {
var statearr_45840_45964 = state_45828__$1;
(statearr_45840_45964[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (1))){
var state_45828__$1 = state_45828;
var statearr_45842_45965 = state_45828__$1;
(statearr_45842_45965[(2)] = null);

(statearr_45842_45965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (24))){
var inst_45725 = (state_45828[(7)]);
var inst_45742 = (state_45828[(2)]);
var inst_45743 = cljs.core.next.call(null,inst_45725);
var inst_45705 = inst_45743;
var inst_45706 = null;
var inst_45707 = (0);
var inst_45708 = (0);
var state_45828__$1 = (function (){var statearr_45843 = state_45828;
(statearr_45843[(13)] = inst_45707);

(statearr_45843[(14)] = inst_45705);

(statearr_45843[(15)] = inst_45742);

(statearr_45843[(16)] = inst_45708);

(statearr_45843[(17)] = inst_45706);

return statearr_45843;
})();
var statearr_45844_45967 = state_45828__$1;
(statearr_45844_45967[(2)] = null);

(statearr_45844_45967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (39))){
var state_45828__$1 = state_45828;
var statearr_45848_45971 = state_45828__$1;
(statearr_45848_45971[(2)] = null);

(statearr_45848_45971[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (4))){
var inst_45696 = (state_45828[(11)]);
var inst_45696__$1 = (state_45828[(2)]);
var inst_45697 = (inst_45696__$1 == null);
var state_45828__$1 = (function (){var statearr_45849 = state_45828;
(statearr_45849[(11)] = inst_45696__$1);

return statearr_45849;
})();
if(cljs.core.truth_(inst_45697)){
var statearr_45850_45977 = state_45828__$1;
(statearr_45850_45977[(1)] = (5));

} else {
var statearr_45851_45979 = state_45828__$1;
(statearr_45851_45979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (15))){
var inst_45707 = (state_45828[(13)]);
var inst_45705 = (state_45828[(14)]);
var inst_45708 = (state_45828[(16)]);
var inst_45706 = (state_45828[(17)]);
var inst_45721 = (state_45828[(2)]);
var inst_45722 = (inst_45708 + (1));
var tmp45845 = inst_45707;
var tmp45846 = inst_45705;
var tmp45847 = inst_45706;
var inst_45705__$1 = tmp45846;
var inst_45706__$1 = tmp45847;
var inst_45707__$1 = tmp45845;
var inst_45708__$1 = inst_45722;
var state_45828__$1 = (function (){var statearr_45854 = state_45828;
(statearr_45854[(13)] = inst_45707__$1);

(statearr_45854[(18)] = inst_45721);

(statearr_45854[(14)] = inst_45705__$1);

(statearr_45854[(16)] = inst_45708__$1);

(statearr_45854[(17)] = inst_45706__$1);

return statearr_45854;
})();
var statearr_45856_46000 = state_45828__$1;
(statearr_45856_46000[(2)] = null);

(statearr_45856_46000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (21))){
var inst_45746 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45860_46002 = state_45828__$1;
(statearr_45860_46002[(2)] = inst_45746);

(statearr_45860_46002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (31))){
var inst_45772 = (state_45828[(9)]);
var inst_45776 = done.call(null,null);
var inst_45777 = cljs.core.async.untap_STAR_.call(null,m,inst_45772);
var state_45828__$1 = (function (){var statearr_45861 = state_45828;
(statearr_45861[(19)] = inst_45776);

return statearr_45861;
})();
var statearr_45862_46004 = state_45828__$1;
(statearr_45862_46004[(2)] = inst_45777);

(statearr_45862_46004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (32))){
var inst_45766 = (state_45828[(20)]);
var inst_45765 = (state_45828[(10)]);
var inst_45764 = (state_45828[(21)]);
var inst_45767 = (state_45828[(12)]);
var inst_45779 = (state_45828[(2)]);
var inst_45780 = (inst_45767 + (1));
var tmp45857 = inst_45766;
var tmp45858 = inst_45765;
var tmp45859 = inst_45764;
var inst_45764__$1 = tmp45859;
var inst_45765__$1 = tmp45858;
var inst_45766__$1 = tmp45857;
var inst_45767__$1 = inst_45780;
var state_45828__$1 = (function (){var statearr_45864 = state_45828;
(statearr_45864[(22)] = inst_45779);

(statearr_45864[(20)] = inst_45766__$1);

(statearr_45864[(10)] = inst_45765__$1);

(statearr_45864[(21)] = inst_45764__$1);

(statearr_45864[(12)] = inst_45767__$1);

return statearr_45864;
})();
var statearr_45865_46012 = state_45828__$1;
(statearr_45865_46012[(2)] = null);

(statearr_45865_46012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (40))){
var inst_45792 = (state_45828[(23)]);
var inst_45799 = done.call(null,null);
var inst_45800 = cljs.core.async.untap_STAR_.call(null,m,inst_45792);
var state_45828__$1 = (function (){var statearr_45866 = state_45828;
(statearr_45866[(24)] = inst_45799);

return statearr_45866;
})();
var statearr_45867_46022 = state_45828__$1;
(statearr_45867_46022[(2)] = inst_45800);

(statearr_45867_46022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (33))){
var inst_45783 = (state_45828[(25)]);
var inst_45785 = cljs.core.chunked_seq_QMARK_.call(null,inst_45783);
var state_45828__$1 = state_45828;
if(inst_45785){
var statearr_45868_46024 = state_45828__$1;
(statearr_45868_46024[(1)] = (36));

} else {
var statearr_45869_46025 = state_45828__$1;
(statearr_45869_46025[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (13))){
var inst_45715 = (state_45828[(26)]);
var inst_45718 = cljs.core.async.close_BANG_.call(null,inst_45715);
var state_45828__$1 = state_45828;
var statearr_45870_46027 = state_45828__$1;
(statearr_45870_46027[(2)] = inst_45718);

(statearr_45870_46027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (22))){
var inst_45736 = (state_45828[(8)]);
var inst_45739 = cljs.core.async.close_BANG_.call(null,inst_45736);
var state_45828__$1 = state_45828;
var statearr_45871_46032 = state_45828__$1;
(statearr_45871_46032[(2)] = inst_45739);

(statearr_45871_46032[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (36))){
var inst_45783 = (state_45828[(25)]);
var inst_45787 = cljs.core.chunk_first.call(null,inst_45783);
var inst_45788 = cljs.core.chunk_rest.call(null,inst_45783);
var inst_45789 = cljs.core.count.call(null,inst_45787);
var inst_45764 = inst_45788;
var inst_45765 = inst_45787;
var inst_45766 = inst_45789;
var inst_45767 = (0);
var state_45828__$1 = (function (){var statearr_45875 = state_45828;
(statearr_45875[(20)] = inst_45766);

(statearr_45875[(10)] = inst_45765);

(statearr_45875[(21)] = inst_45764);

(statearr_45875[(12)] = inst_45767);

return statearr_45875;
})();
var statearr_45878_46037 = state_45828__$1;
(statearr_45878_46037[(2)] = null);

(statearr_45878_46037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (41))){
var inst_45783 = (state_45828[(25)]);
var inst_45802 = (state_45828[(2)]);
var inst_45803 = cljs.core.next.call(null,inst_45783);
var inst_45764 = inst_45803;
var inst_45765 = null;
var inst_45766 = (0);
var inst_45767 = (0);
var state_45828__$1 = (function (){var statearr_45880 = state_45828;
(statearr_45880[(20)] = inst_45766);

(statearr_45880[(10)] = inst_45765);

(statearr_45880[(21)] = inst_45764);

(statearr_45880[(12)] = inst_45767);

(statearr_45880[(27)] = inst_45802);

return statearr_45880;
})();
var statearr_45881_46038 = state_45828__$1;
(statearr_45881_46038[(2)] = null);

(statearr_45881_46038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (43))){
var state_45828__$1 = state_45828;
var statearr_45886_46042 = state_45828__$1;
(statearr_45886_46042[(2)] = null);

(statearr_45886_46042[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (29))){
var inst_45811 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45887_46045 = state_45828__$1;
(statearr_45887_46045[(2)] = inst_45811);

(statearr_45887_46045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (44))){
var inst_45820 = (state_45828[(2)]);
var state_45828__$1 = (function (){var statearr_45888 = state_45828;
(statearr_45888[(28)] = inst_45820);

return statearr_45888;
})();
var statearr_45889_46049 = state_45828__$1;
(statearr_45889_46049[(2)] = null);

(statearr_45889_46049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (6))){
var inst_45756 = (state_45828[(29)]);
var inst_45755 = cljs.core.deref.call(null,cs);
var inst_45756__$1 = cljs.core.keys.call(null,inst_45755);
var inst_45757 = cljs.core.count.call(null,inst_45756__$1);
var inst_45758 = cljs.core.reset_BANG_.call(null,dctr,inst_45757);
var inst_45763 = cljs.core.seq.call(null,inst_45756__$1);
var inst_45764 = inst_45763;
var inst_45765 = null;
var inst_45766 = (0);
var inst_45767 = (0);
var state_45828__$1 = (function (){var statearr_45890 = state_45828;
(statearr_45890[(20)] = inst_45766);

(statearr_45890[(30)] = inst_45758);

(statearr_45890[(10)] = inst_45765);

(statearr_45890[(21)] = inst_45764);

(statearr_45890[(12)] = inst_45767);

(statearr_45890[(29)] = inst_45756__$1);

return statearr_45890;
})();
var statearr_45892_46051 = state_45828__$1;
(statearr_45892_46051[(2)] = null);

(statearr_45892_46051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (28))){
var inst_45783 = (state_45828[(25)]);
var inst_45764 = (state_45828[(21)]);
var inst_45783__$1 = cljs.core.seq.call(null,inst_45764);
var state_45828__$1 = (function (){var statearr_45893 = state_45828;
(statearr_45893[(25)] = inst_45783__$1);

return statearr_45893;
})();
if(inst_45783__$1){
var statearr_45894_46052 = state_45828__$1;
(statearr_45894_46052[(1)] = (33));

} else {
var statearr_45895_46053 = state_45828__$1;
(statearr_45895_46053[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (25))){
var inst_45766 = (state_45828[(20)]);
var inst_45767 = (state_45828[(12)]);
var inst_45769 = (inst_45767 < inst_45766);
var inst_45770 = inst_45769;
var state_45828__$1 = state_45828;
if(cljs.core.truth_(inst_45770)){
var statearr_45896_46054 = state_45828__$1;
(statearr_45896_46054[(1)] = (27));

} else {
var statearr_45897_46055 = state_45828__$1;
(statearr_45897_46055[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (34))){
var state_45828__$1 = state_45828;
var statearr_45899_46056 = state_45828__$1;
(statearr_45899_46056[(2)] = null);

(statearr_45899_46056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (17))){
var state_45828__$1 = state_45828;
var statearr_45900_46057 = state_45828__$1;
(statearr_45900_46057[(2)] = null);

(statearr_45900_46057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (3))){
var inst_45825 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45828__$1,inst_45825);
} else {
if((state_val_45831 === (12))){
var inst_45751 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45901_46058 = state_45828__$1;
(statearr_45901_46058[(2)] = inst_45751);

(statearr_45901_46058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (2))){
var state_45828__$1 = state_45828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45828__$1,(4),ch);
} else {
if((state_val_45831 === (23))){
var state_45828__$1 = state_45828;
var statearr_45902_46059 = state_45828__$1;
(statearr_45902_46059[(2)] = null);

(statearr_45902_46059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (35))){
var inst_45809 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45903_46060 = state_45828__$1;
(statearr_45903_46060[(2)] = inst_45809);

(statearr_45903_46060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (19))){
var inst_45725 = (state_45828[(7)]);
var inst_45729 = cljs.core.chunk_first.call(null,inst_45725);
var inst_45730 = cljs.core.chunk_rest.call(null,inst_45725);
var inst_45731 = cljs.core.count.call(null,inst_45729);
var inst_45705 = inst_45730;
var inst_45706 = inst_45729;
var inst_45707 = inst_45731;
var inst_45708 = (0);
var state_45828__$1 = (function (){var statearr_45904 = state_45828;
(statearr_45904[(13)] = inst_45707);

(statearr_45904[(14)] = inst_45705);

(statearr_45904[(16)] = inst_45708);

(statearr_45904[(17)] = inst_45706);

return statearr_45904;
})();
var statearr_45908_46065 = state_45828__$1;
(statearr_45908_46065[(2)] = null);

(statearr_45908_46065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (11))){
var inst_45725 = (state_45828[(7)]);
var inst_45705 = (state_45828[(14)]);
var inst_45725__$1 = cljs.core.seq.call(null,inst_45705);
var state_45828__$1 = (function (){var statearr_45909 = state_45828;
(statearr_45909[(7)] = inst_45725__$1);

return statearr_45909;
})();
if(inst_45725__$1){
var statearr_45910_46071 = state_45828__$1;
(statearr_45910_46071[(1)] = (16));

} else {
var statearr_45911_46073 = state_45828__$1;
(statearr_45911_46073[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (9))){
var inst_45753 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45912_46075 = state_45828__$1;
(statearr_45912_46075[(2)] = inst_45753);

(statearr_45912_46075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (5))){
var inst_45703 = cljs.core.deref.call(null,cs);
var inst_45704 = cljs.core.seq.call(null,inst_45703);
var inst_45705 = inst_45704;
var inst_45706 = null;
var inst_45707 = (0);
var inst_45708 = (0);
var state_45828__$1 = (function (){var statearr_45913 = state_45828;
(statearr_45913[(13)] = inst_45707);

(statearr_45913[(14)] = inst_45705);

(statearr_45913[(16)] = inst_45708);

(statearr_45913[(17)] = inst_45706);

return statearr_45913;
})();
var statearr_45914_46080 = state_45828__$1;
(statearr_45914_46080[(2)] = null);

(statearr_45914_46080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (14))){
var state_45828__$1 = state_45828;
var statearr_45915_46082 = state_45828__$1;
(statearr_45915_46082[(2)] = null);

(statearr_45915_46082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (45))){
var inst_45817 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45916_46083 = state_45828__$1;
(statearr_45916_46083[(2)] = inst_45817);

(statearr_45916_46083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (26))){
var inst_45756 = (state_45828[(29)]);
var inst_45813 = (state_45828[(2)]);
var inst_45814 = cljs.core.seq.call(null,inst_45756);
var state_45828__$1 = (function (){var statearr_45917 = state_45828;
(statearr_45917[(31)] = inst_45813);

return statearr_45917;
})();
if(inst_45814){
var statearr_45918_46087 = state_45828__$1;
(statearr_45918_46087[(1)] = (42));

} else {
var statearr_45919_46088 = state_45828__$1;
(statearr_45919_46088[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (16))){
var inst_45725 = (state_45828[(7)]);
var inst_45727 = cljs.core.chunked_seq_QMARK_.call(null,inst_45725);
var state_45828__$1 = state_45828;
if(inst_45727){
var statearr_45920_46089 = state_45828__$1;
(statearr_45920_46089[(1)] = (19));

} else {
var statearr_45921_46090 = state_45828__$1;
(statearr_45921_46090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (38))){
var inst_45806 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45922_46091 = state_45828__$1;
(statearr_45922_46091[(2)] = inst_45806);

(statearr_45922_46091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (30))){
var state_45828__$1 = state_45828;
var statearr_45923_46092 = state_45828__$1;
(statearr_45923_46092[(2)] = null);

(statearr_45923_46092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (10))){
var inst_45708 = (state_45828[(16)]);
var inst_45706 = (state_45828[(17)]);
var inst_45714 = cljs.core._nth.call(null,inst_45706,inst_45708);
var inst_45715 = cljs.core.nth.call(null,inst_45714,(0),null);
var inst_45716 = cljs.core.nth.call(null,inst_45714,(1),null);
var state_45828__$1 = (function (){var statearr_45924 = state_45828;
(statearr_45924[(26)] = inst_45715);

return statearr_45924;
})();
if(cljs.core.truth_(inst_45716)){
var statearr_45925_46094 = state_45828__$1;
(statearr_45925_46094[(1)] = (13));

} else {
var statearr_45926_46095 = state_45828__$1;
(statearr_45926_46095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (18))){
var inst_45749 = (state_45828[(2)]);
var state_45828__$1 = state_45828;
var statearr_45927_46099 = state_45828__$1;
(statearr_45927_46099[(2)] = inst_45749);

(statearr_45927_46099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (42))){
var state_45828__$1 = state_45828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45828__$1,(45),dchan);
} else {
if((state_val_45831 === (37))){
var inst_45783 = (state_45828[(25)]);
var inst_45696 = (state_45828[(11)]);
var inst_45792 = (state_45828[(23)]);
var inst_45792__$1 = cljs.core.first.call(null,inst_45783);
var inst_45794 = cljs.core.async.put_BANG_.call(null,inst_45792__$1,inst_45696,done);
var state_45828__$1 = (function (){var statearr_45928 = state_45828;
(statearr_45928[(23)] = inst_45792__$1);

return statearr_45928;
})();
if(cljs.core.truth_(inst_45794)){
var statearr_45930_46104 = state_45828__$1;
(statearr_45930_46104[(1)] = (39));

} else {
var statearr_45931_46105 = state_45828__$1;
(statearr_45931_46105[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45831 === (8))){
var inst_45707 = (state_45828[(13)]);
var inst_45708 = (state_45828[(16)]);
var inst_45710 = (inst_45708 < inst_45707);
var inst_45711 = inst_45710;
var state_45828__$1 = state_45828;
if(cljs.core.truth_(inst_45711)){
var statearr_45932_46107 = state_45828__$1;
(statearr_45932_46107[(1)] = (10));

} else {
var statearr_45933_46108 = state_45828__$1;
(statearr_45933_46108[(1)] = (11));

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
});})(c__44117__auto___45941,cs,m,dchan,dctr,done))
;
return ((function (switch__43799__auto__,c__44117__auto___45941,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43800__auto__ = null;
var cljs$core$async$mult_$_state_machine__43800__auto____0 = (function (){
var statearr_45937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45937[(0)] = cljs$core$async$mult_$_state_machine__43800__auto__);

(statearr_45937[(1)] = (1));

return statearr_45937;
});
var cljs$core$async$mult_$_state_machine__43800__auto____1 = (function (state_45828){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_45828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e45938){if((e45938 instanceof Object)){
var ex__43803__auto__ = e45938;
var statearr_45939_46114 = state_45828;
(statearr_45939_46114[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46120 = state_45828;
state_45828 = G__46120;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43800__auto__ = function(state_45828){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43800__auto____1.call(this,state_45828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43800__auto____0;
cljs$core$async$mult_$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43800__auto____1;
return cljs$core$async$mult_$_state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___45941,cs,m,dchan,dctr,done))
})();
var state__44119__auto__ = (function (){var statearr_45940 = f__44118__auto__.call(null);
(statearr_45940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___45941);

return statearr_45940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___45941,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args46121 = [];
var len__39562__auto___46124 = arguments.length;
var i__39563__auto___46125 = (0);
while(true){
if((i__39563__auto___46125 < len__39562__auto___46124)){
args46121.push((arguments[i__39563__auto___46125]));

var G__46126 = (i__39563__auto___46125 + (1));
i__39563__auto___46125 = G__46126;
continue;
} else {
}
break;
}

var G__46123 = args46121.length;
switch (G__46123) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46121.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__39159__auto__ = (((m == null))?null:m);
var m__39160__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,m,ch);
} else {
var m__39160__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__39159__auto__ = (((m == null))?null:m);
var m__39160__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,m,ch);
} else {
var m__39160__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__39159__auto__ = (((m == null))?null:m);
var m__39160__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,m);
} else {
var m__39160__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__39159__auto__ = (((m == null))?null:m);
var m__39160__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,m,state_map);
} else {
var m__39160__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__39159__auto__ = (((m == null))?null:m);
var m__39160__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,m,mode);
} else {
var m__39160__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__39569__auto__ = [];
var len__39562__auto___46159 = arguments.length;
var i__39563__auto___46160 = (0);
while(true){
if((i__39563__auto___46160 < len__39562__auto___46159)){
args__39569__auto__.push((arguments[i__39563__auto___46160]));

var G__46161 = (i__39563__auto___46160 + (1));
i__39563__auto___46160 = G__46161;
continue;
} else {
}
break;
}

var argseq__39570__auto__ = ((((3) < args__39569__auto__.length))?(new cljs.core.IndexedSeq(args__39569__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__39570__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46153){
var map__46154 = p__46153;
var map__46154__$1 = ((((!((map__46154 == null)))?((((map__46154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46154):map__46154);
var opts = map__46154__$1;
var statearr_46156_46162 = state;
(statearr_46156_46162[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__46154,map__46154__$1,opts){
return (function (val){
var statearr_46157_46163 = state;
(statearr_46157_46163[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46154,map__46154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_46158_46164 = state;
(statearr_46158_46164[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46149){
var G__46150 = cljs.core.first.call(null,seq46149);
var seq46149__$1 = cljs.core.next.call(null,seq46149);
var G__46151 = cljs.core.first.call(null,seq46149__$1);
var seq46149__$2 = cljs.core.next.call(null,seq46149__$1);
var G__46152 = cljs.core.first.call(null,seq46149__$2);
var seq46149__$3 = cljs.core.next.call(null,seq46149__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46150,G__46151,G__46152,seq46149__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46355 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46356){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46356 = meta46356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46357,meta46356__$1){
var self__ = this;
var _46357__$1 = this;
return (new cljs.core.async.t_cljs$core$async46355(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46356__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46357){
var self__ = this;
var _46357__$1 = this;
return self__.meta46356;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46356","meta46356",-361647632,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46355";

cljs.core.async.t_cljs$core$async46355.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async46355");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46355 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46355(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46356){
return (new cljs.core.async.t_cljs$core$async46355(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46356));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46355(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44117__auto___46518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___46518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___46518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46455){
var state_val_46456 = (state_46455[(1)]);
if((state_val_46456 === (7))){
var inst_46373 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
var statearr_46457_46519 = state_46455__$1;
(statearr_46457_46519[(2)] = inst_46373);

(statearr_46457_46519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (20))){
var inst_46385 = (state_46455[(7)]);
var state_46455__$1 = state_46455;
var statearr_46458_46520 = state_46455__$1;
(statearr_46458_46520[(2)] = inst_46385);

(statearr_46458_46520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (27))){
var state_46455__$1 = state_46455;
var statearr_46459_46521 = state_46455__$1;
(statearr_46459_46521[(2)] = null);

(statearr_46459_46521[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (1))){
var inst_46361 = (state_46455[(8)]);
var inst_46361__$1 = calc_state.call(null);
var inst_46363 = (inst_46361__$1 == null);
var inst_46364 = cljs.core.not.call(null,inst_46363);
var state_46455__$1 = (function (){var statearr_46460 = state_46455;
(statearr_46460[(8)] = inst_46361__$1);

return statearr_46460;
})();
if(inst_46364){
var statearr_46461_46522 = state_46455__$1;
(statearr_46461_46522[(1)] = (2));

} else {
var statearr_46462_46523 = state_46455__$1;
(statearr_46462_46523[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (24))){
var inst_46429 = (state_46455[(9)]);
var inst_46408 = (state_46455[(10)]);
var inst_46415 = (state_46455[(11)]);
var inst_46429__$1 = inst_46408.call(null,inst_46415);
var state_46455__$1 = (function (){var statearr_46463 = state_46455;
(statearr_46463[(9)] = inst_46429__$1);

return statearr_46463;
})();
if(cljs.core.truth_(inst_46429__$1)){
var statearr_46464_46524 = state_46455__$1;
(statearr_46464_46524[(1)] = (29));

} else {
var statearr_46465_46525 = state_46455__$1;
(statearr_46465_46525[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (4))){
var inst_46376 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
if(cljs.core.truth_(inst_46376)){
var statearr_46466_46526 = state_46455__$1;
(statearr_46466_46526[(1)] = (8));

} else {
var statearr_46467_46527 = state_46455__$1;
(statearr_46467_46527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (15))){
var inst_46402 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
if(cljs.core.truth_(inst_46402)){
var statearr_46468_46528 = state_46455__$1;
(statearr_46468_46528[(1)] = (19));

} else {
var statearr_46469_46529 = state_46455__$1;
(statearr_46469_46529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (21))){
var inst_46407 = (state_46455[(12)]);
var inst_46407__$1 = (state_46455[(2)]);
var inst_46408 = cljs.core.get.call(null,inst_46407__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46409 = cljs.core.get.call(null,inst_46407__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46410 = cljs.core.get.call(null,inst_46407__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46455__$1 = (function (){var statearr_46470 = state_46455;
(statearr_46470[(12)] = inst_46407__$1);

(statearr_46470[(13)] = inst_46409);

(statearr_46470[(10)] = inst_46408);

return statearr_46470;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46455__$1,(22),inst_46410);
} else {
if((state_val_46456 === (31))){
var inst_46437 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
if(cljs.core.truth_(inst_46437)){
var statearr_46471_46530 = state_46455__$1;
(statearr_46471_46530[(1)] = (32));

} else {
var statearr_46472_46531 = state_46455__$1;
(statearr_46472_46531[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (32))){
var inst_46414 = (state_46455[(14)]);
var state_46455__$1 = state_46455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46455__$1,(35),out,inst_46414);
} else {
if((state_val_46456 === (33))){
var inst_46407 = (state_46455[(12)]);
var inst_46385 = inst_46407;
var state_46455__$1 = (function (){var statearr_46473 = state_46455;
(statearr_46473[(7)] = inst_46385);

return statearr_46473;
})();
var statearr_46474_46532 = state_46455__$1;
(statearr_46474_46532[(2)] = null);

(statearr_46474_46532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (13))){
var inst_46385 = (state_46455[(7)]);
var inst_46392 = inst_46385.cljs$lang$protocol_mask$partition0$;
var inst_46393 = (inst_46392 & (64));
var inst_46394 = inst_46385.cljs$core$ISeq$;
var inst_46395 = (inst_46393) || (inst_46394);
var state_46455__$1 = state_46455;
if(cljs.core.truth_(inst_46395)){
var statearr_46475_46533 = state_46455__$1;
(statearr_46475_46533[(1)] = (16));

} else {
var statearr_46476_46534 = state_46455__$1;
(statearr_46476_46534[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (22))){
var inst_46414 = (state_46455[(14)]);
var inst_46415 = (state_46455[(11)]);
var inst_46413 = (state_46455[(2)]);
var inst_46414__$1 = cljs.core.nth.call(null,inst_46413,(0),null);
var inst_46415__$1 = cljs.core.nth.call(null,inst_46413,(1),null);
var inst_46416 = (inst_46414__$1 == null);
var inst_46417 = cljs.core._EQ_.call(null,inst_46415__$1,change);
var inst_46418 = (inst_46416) || (inst_46417);
var state_46455__$1 = (function (){var statearr_46477 = state_46455;
(statearr_46477[(14)] = inst_46414__$1);

(statearr_46477[(11)] = inst_46415__$1);

return statearr_46477;
})();
if(cljs.core.truth_(inst_46418)){
var statearr_46478_46539 = state_46455__$1;
(statearr_46478_46539[(1)] = (23));

} else {
var statearr_46479_46540 = state_46455__$1;
(statearr_46479_46540[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (36))){
var inst_46407 = (state_46455[(12)]);
var inst_46385 = inst_46407;
var state_46455__$1 = (function (){var statearr_46480 = state_46455;
(statearr_46480[(7)] = inst_46385);

return statearr_46480;
})();
var statearr_46481_46543 = state_46455__$1;
(statearr_46481_46543[(2)] = null);

(statearr_46481_46543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (29))){
var inst_46429 = (state_46455[(9)]);
var state_46455__$1 = state_46455;
var statearr_46482_46544 = state_46455__$1;
(statearr_46482_46544[(2)] = inst_46429);

(statearr_46482_46544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (6))){
var state_46455__$1 = state_46455;
var statearr_46483_46545 = state_46455__$1;
(statearr_46483_46545[(2)] = false);

(statearr_46483_46545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (28))){
var inst_46425 = (state_46455[(2)]);
var inst_46426 = calc_state.call(null);
var inst_46385 = inst_46426;
var state_46455__$1 = (function (){var statearr_46484 = state_46455;
(statearr_46484[(15)] = inst_46425);

(statearr_46484[(7)] = inst_46385);

return statearr_46484;
})();
var statearr_46485_46546 = state_46455__$1;
(statearr_46485_46546[(2)] = null);

(statearr_46485_46546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (25))){
var inst_46451 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
var statearr_46486_46547 = state_46455__$1;
(statearr_46486_46547[(2)] = inst_46451);

(statearr_46486_46547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (34))){
var inst_46449 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
var statearr_46487_46548 = state_46455__$1;
(statearr_46487_46548[(2)] = inst_46449);

(statearr_46487_46548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (17))){
var state_46455__$1 = state_46455;
var statearr_46488_46549 = state_46455__$1;
(statearr_46488_46549[(2)] = false);

(statearr_46488_46549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (3))){
var state_46455__$1 = state_46455;
var statearr_46489_46550 = state_46455__$1;
(statearr_46489_46550[(2)] = false);

(statearr_46489_46550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (12))){
var inst_46453 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46455__$1,inst_46453);
} else {
if((state_val_46456 === (2))){
var inst_46361 = (state_46455[(8)]);
var inst_46366 = inst_46361.cljs$lang$protocol_mask$partition0$;
var inst_46367 = (inst_46366 & (64));
var inst_46368 = inst_46361.cljs$core$ISeq$;
var inst_46369 = (inst_46367) || (inst_46368);
var state_46455__$1 = state_46455;
if(cljs.core.truth_(inst_46369)){
var statearr_46490_46552 = state_46455__$1;
(statearr_46490_46552[(1)] = (5));

} else {
var statearr_46491_46553 = state_46455__$1;
(statearr_46491_46553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (23))){
var inst_46414 = (state_46455[(14)]);
var inst_46420 = (inst_46414 == null);
var state_46455__$1 = state_46455;
if(cljs.core.truth_(inst_46420)){
var statearr_46492_46554 = state_46455__$1;
(statearr_46492_46554[(1)] = (26));

} else {
var statearr_46493_46555 = state_46455__$1;
(statearr_46493_46555[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (35))){
var inst_46440 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
if(cljs.core.truth_(inst_46440)){
var statearr_46494_46556 = state_46455__$1;
(statearr_46494_46556[(1)] = (36));

} else {
var statearr_46495_46557 = state_46455__$1;
(statearr_46495_46557[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (19))){
var inst_46385 = (state_46455[(7)]);
var inst_46404 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46385);
var state_46455__$1 = state_46455;
var statearr_46496_46558 = state_46455__$1;
(statearr_46496_46558[(2)] = inst_46404);

(statearr_46496_46558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (11))){
var inst_46385 = (state_46455[(7)]);
var inst_46389 = (inst_46385 == null);
var inst_46390 = cljs.core.not.call(null,inst_46389);
var state_46455__$1 = state_46455;
if(inst_46390){
var statearr_46497_46559 = state_46455__$1;
(statearr_46497_46559[(1)] = (13));

} else {
var statearr_46498_46560 = state_46455__$1;
(statearr_46498_46560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (9))){
var inst_46361 = (state_46455[(8)]);
var state_46455__$1 = state_46455;
var statearr_46499_46561 = state_46455__$1;
(statearr_46499_46561[(2)] = inst_46361);

(statearr_46499_46561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (5))){
var state_46455__$1 = state_46455;
var statearr_46500_46562 = state_46455__$1;
(statearr_46500_46562[(2)] = true);

(statearr_46500_46562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (14))){
var state_46455__$1 = state_46455;
var statearr_46501_46563 = state_46455__$1;
(statearr_46501_46563[(2)] = false);

(statearr_46501_46563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (26))){
var inst_46415 = (state_46455[(11)]);
var inst_46422 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46415);
var state_46455__$1 = state_46455;
var statearr_46502_46564 = state_46455__$1;
(statearr_46502_46564[(2)] = inst_46422);

(statearr_46502_46564[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (16))){
var state_46455__$1 = state_46455;
var statearr_46503_46565 = state_46455__$1;
(statearr_46503_46565[(2)] = true);

(statearr_46503_46565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (38))){
var inst_46445 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
var statearr_46504_46566 = state_46455__$1;
(statearr_46504_46566[(2)] = inst_46445);

(statearr_46504_46566[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (30))){
var inst_46409 = (state_46455[(13)]);
var inst_46408 = (state_46455[(10)]);
var inst_46415 = (state_46455[(11)]);
var inst_46432 = cljs.core.empty_QMARK_.call(null,inst_46408);
var inst_46433 = inst_46409.call(null,inst_46415);
var inst_46434 = cljs.core.not.call(null,inst_46433);
var inst_46435 = (inst_46432) && (inst_46434);
var state_46455__$1 = state_46455;
var statearr_46505_46567 = state_46455__$1;
(statearr_46505_46567[(2)] = inst_46435);

(statearr_46505_46567[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (10))){
var inst_46361 = (state_46455[(8)]);
var inst_46381 = (state_46455[(2)]);
var inst_46382 = cljs.core.get.call(null,inst_46381,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46383 = cljs.core.get.call(null,inst_46381,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46384 = cljs.core.get.call(null,inst_46381,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46385 = inst_46361;
var state_46455__$1 = (function (){var statearr_46506 = state_46455;
(statearr_46506[(7)] = inst_46385);

(statearr_46506[(16)] = inst_46384);

(statearr_46506[(17)] = inst_46383);

(statearr_46506[(18)] = inst_46382);

return statearr_46506;
})();
var statearr_46507_46571 = state_46455__$1;
(statearr_46507_46571[(2)] = null);

(statearr_46507_46571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (18))){
var inst_46399 = (state_46455[(2)]);
var state_46455__$1 = state_46455;
var statearr_46508_46572 = state_46455__$1;
(statearr_46508_46572[(2)] = inst_46399);

(statearr_46508_46572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (37))){
var state_46455__$1 = state_46455;
var statearr_46509_46573 = state_46455__$1;
(statearr_46509_46573[(2)] = null);

(statearr_46509_46573[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46456 === (8))){
var inst_46361 = (state_46455[(8)]);
var inst_46378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46361);
var state_46455__$1 = state_46455;
var statearr_46510_46583 = state_46455__$1;
(statearr_46510_46583[(2)] = inst_46378);

(statearr_46510_46583[(1)] = (10));


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
});})(c__44117__auto___46518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43799__auto__,c__44117__auto___46518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43800__auto__ = null;
var cljs$core$async$mix_$_state_machine__43800__auto____0 = (function (){
var statearr_46514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46514[(0)] = cljs$core$async$mix_$_state_machine__43800__auto__);

(statearr_46514[(1)] = (1));

return statearr_46514;
});
var cljs$core$async$mix_$_state_machine__43800__auto____1 = (function (state_46455){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_46455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e46515){if((e46515 instanceof Object)){
var ex__43803__auto__ = e46515;
var statearr_46516_46585 = state_46455;
(statearr_46516_46585[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46586 = state_46455;
state_46455 = G__46586;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43800__auto__ = function(state_46455){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43800__auto____1.call(this,state_46455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43800__auto____0;
cljs$core$async$mix_$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43800__auto____1;
return cljs$core$async$mix_$_state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___46518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44119__auto__ = (function (){var statearr_46517 = f__44118__auto__.call(null);
(statearr_46517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___46518);

return statearr_46517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___46518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__39159__auto__ = (((p == null))?null:p);
var m__39160__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__39160__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__39159__auto__ = (((p == null))?null:p);
var m__39160__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,p,v,ch);
} else {
var m__39160__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args46589 = [];
var len__39562__auto___46600 = arguments.length;
var i__39563__auto___46601 = (0);
while(true){
if((i__39563__auto___46601 < len__39562__auto___46600)){
args46589.push((arguments[i__39563__auto___46601]));

var G__46602 = (i__39563__auto___46601 + (1));
i__39563__auto___46601 = G__46602;
continue;
} else {
}
break;
}

var G__46591 = args46589.length;
switch (G__46591) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46589.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__39159__auto__ = (((p == null))?null:p);
var m__39160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,p);
} else {
var m__39160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__39159__auto__ = (((p == null))?null:p);
var m__39160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,p,v);
} else {
var m__39160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args46623 = [];
var len__39562__auto___46763 = arguments.length;
var i__39563__auto___46764 = (0);
while(true){
if((i__39563__auto___46764 < len__39562__auto___46763)){
args46623.push((arguments[i__39563__auto___46764]));

var G__46765 = (i__39563__auto___46764 + (1));
i__39563__auto___46764 = G__46765;
continue;
} else {
}
break;
}

var G__46629 = args46623.length;
switch (G__46629) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46623.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__38504__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__38504__auto__,mults){
return (function (p1__46622_SHARP_){
if(cljs.core.truth_(p1__46622_SHARP_.call(null,topic))){
return p1__46622_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46622_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__38504__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46631 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46632){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46632 = meta46632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46633,meta46632__$1){
var self__ = this;
var _46633__$1 = this;
return (new cljs.core.async.t_cljs$core$async46631(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46632__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46633){
var self__ = this;
var _46633__$1 = this;
return self__.meta46632;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46631.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46631.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46632","meta46632",842068079,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46631";

cljs.core.async.t_cljs$core$async46631.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async46631");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46631 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46631(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46632){
return (new cljs.core.async.t_cljs$core$async46631(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46632));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46631(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44117__auto___46777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___46777,mults,ensure_mult,p){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___46777,mults,ensure_mult,p){
return (function (state_46709){
var state_val_46710 = (state_46709[(1)]);
if((state_val_46710 === (7))){
var inst_46705 = (state_46709[(2)]);
var state_46709__$1 = state_46709;
var statearr_46711_46778 = state_46709__$1;
(statearr_46711_46778[(2)] = inst_46705);

(statearr_46711_46778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (20))){
var state_46709__$1 = state_46709;
var statearr_46712_46779 = state_46709__$1;
(statearr_46712_46779[(2)] = null);

(statearr_46712_46779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (1))){
var state_46709__$1 = state_46709;
var statearr_46713_46780 = state_46709__$1;
(statearr_46713_46780[(2)] = null);

(statearr_46713_46780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (24))){
var inst_46688 = (state_46709[(7)]);
var inst_46697 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46688);
var state_46709__$1 = state_46709;
var statearr_46714_46781 = state_46709__$1;
(statearr_46714_46781[(2)] = inst_46697);

(statearr_46714_46781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (4))){
var inst_46640 = (state_46709[(8)]);
var inst_46640__$1 = (state_46709[(2)]);
var inst_46641 = (inst_46640__$1 == null);
var state_46709__$1 = (function (){var statearr_46717 = state_46709;
(statearr_46717[(8)] = inst_46640__$1);

return statearr_46717;
})();
if(cljs.core.truth_(inst_46641)){
var statearr_46718_46782 = state_46709__$1;
(statearr_46718_46782[(1)] = (5));

} else {
var statearr_46719_46783 = state_46709__$1;
(statearr_46719_46783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (15))){
var inst_46682 = (state_46709[(2)]);
var state_46709__$1 = state_46709;
var statearr_46720_46784 = state_46709__$1;
(statearr_46720_46784[(2)] = inst_46682);

(statearr_46720_46784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (21))){
var inst_46702 = (state_46709[(2)]);
var state_46709__$1 = (function (){var statearr_46721 = state_46709;
(statearr_46721[(9)] = inst_46702);

return statearr_46721;
})();
var statearr_46723_46785 = state_46709__$1;
(statearr_46723_46785[(2)] = null);

(statearr_46723_46785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (13))){
var inst_46664 = (state_46709[(10)]);
var inst_46666 = cljs.core.chunked_seq_QMARK_.call(null,inst_46664);
var state_46709__$1 = state_46709;
if(inst_46666){
var statearr_46725_46786 = state_46709__$1;
(statearr_46725_46786[(1)] = (16));

} else {
var statearr_46726_46787 = state_46709__$1;
(statearr_46726_46787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (22))){
var inst_46694 = (state_46709[(2)]);
var state_46709__$1 = state_46709;
if(cljs.core.truth_(inst_46694)){
var statearr_46727_46788 = state_46709__$1;
(statearr_46727_46788[(1)] = (23));

} else {
var statearr_46728_46789 = state_46709__$1;
(statearr_46728_46789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (6))){
var inst_46688 = (state_46709[(7)]);
var inst_46640 = (state_46709[(8)]);
var inst_46690 = (state_46709[(11)]);
var inst_46688__$1 = topic_fn.call(null,inst_46640);
var inst_46689 = cljs.core.deref.call(null,mults);
var inst_46690__$1 = cljs.core.get.call(null,inst_46689,inst_46688__$1);
var state_46709__$1 = (function (){var statearr_46729 = state_46709;
(statearr_46729[(7)] = inst_46688__$1);

(statearr_46729[(11)] = inst_46690__$1);

return statearr_46729;
})();
if(cljs.core.truth_(inst_46690__$1)){
var statearr_46730_46790 = state_46709__$1;
(statearr_46730_46790[(1)] = (19));

} else {
var statearr_46731_46791 = state_46709__$1;
(statearr_46731_46791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (25))){
var inst_46699 = (state_46709[(2)]);
var state_46709__$1 = state_46709;
var statearr_46732_46792 = state_46709__$1;
(statearr_46732_46792[(2)] = inst_46699);

(statearr_46732_46792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (17))){
var inst_46664 = (state_46709[(10)]);
var inst_46673 = cljs.core.first.call(null,inst_46664);
var inst_46674 = cljs.core.async.muxch_STAR_.call(null,inst_46673);
var inst_46675 = cljs.core.async.close_BANG_.call(null,inst_46674);
var inst_46676 = cljs.core.next.call(null,inst_46664);
var inst_46650 = inst_46676;
var inst_46651 = null;
var inst_46652 = (0);
var inst_46653 = (0);
var state_46709__$1 = (function (){var statearr_46733 = state_46709;
(statearr_46733[(12)] = inst_46650);

(statearr_46733[(13)] = inst_46651);

(statearr_46733[(14)] = inst_46675);

(statearr_46733[(15)] = inst_46653);

(statearr_46733[(16)] = inst_46652);

return statearr_46733;
})();
var statearr_46734_46793 = state_46709__$1;
(statearr_46734_46793[(2)] = null);

(statearr_46734_46793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (3))){
var inst_46707 = (state_46709[(2)]);
var state_46709__$1 = state_46709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46709__$1,inst_46707);
} else {
if((state_val_46710 === (12))){
var inst_46684 = (state_46709[(2)]);
var state_46709__$1 = state_46709;
var statearr_46735_46798 = state_46709__$1;
(statearr_46735_46798[(2)] = inst_46684);

(statearr_46735_46798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (2))){
var state_46709__$1 = state_46709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46709__$1,(4),ch);
} else {
if((state_val_46710 === (23))){
var state_46709__$1 = state_46709;
var statearr_46736_46799 = state_46709__$1;
(statearr_46736_46799[(2)] = null);

(statearr_46736_46799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (19))){
var inst_46640 = (state_46709[(8)]);
var inst_46690 = (state_46709[(11)]);
var inst_46692 = cljs.core.async.muxch_STAR_.call(null,inst_46690);
var state_46709__$1 = state_46709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46709__$1,(22),inst_46692,inst_46640);
} else {
if((state_val_46710 === (11))){
var inst_46650 = (state_46709[(12)]);
var inst_46664 = (state_46709[(10)]);
var inst_46664__$1 = cljs.core.seq.call(null,inst_46650);
var state_46709__$1 = (function (){var statearr_46737 = state_46709;
(statearr_46737[(10)] = inst_46664__$1);

return statearr_46737;
})();
if(inst_46664__$1){
var statearr_46738_46802 = state_46709__$1;
(statearr_46738_46802[(1)] = (13));

} else {
var statearr_46739_46803 = state_46709__$1;
(statearr_46739_46803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (9))){
var inst_46686 = (state_46709[(2)]);
var state_46709__$1 = state_46709;
var statearr_46740_46804 = state_46709__$1;
(statearr_46740_46804[(2)] = inst_46686);

(statearr_46740_46804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (5))){
var inst_46647 = cljs.core.deref.call(null,mults);
var inst_46648 = cljs.core.vals.call(null,inst_46647);
var inst_46649 = cljs.core.seq.call(null,inst_46648);
var inst_46650 = inst_46649;
var inst_46651 = null;
var inst_46652 = (0);
var inst_46653 = (0);
var state_46709__$1 = (function (){var statearr_46741 = state_46709;
(statearr_46741[(12)] = inst_46650);

(statearr_46741[(13)] = inst_46651);

(statearr_46741[(15)] = inst_46653);

(statearr_46741[(16)] = inst_46652);

return statearr_46741;
})();
var statearr_46742_46805 = state_46709__$1;
(statearr_46742_46805[(2)] = null);

(statearr_46742_46805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (14))){
var state_46709__$1 = state_46709;
var statearr_46746_46806 = state_46709__$1;
(statearr_46746_46806[(2)] = null);

(statearr_46746_46806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (16))){
var inst_46664 = (state_46709[(10)]);
var inst_46668 = cljs.core.chunk_first.call(null,inst_46664);
var inst_46669 = cljs.core.chunk_rest.call(null,inst_46664);
var inst_46670 = cljs.core.count.call(null,inst_46668);
var inst_46650 = inst_46669;
var inst_46651 = inst_46668;
var inst_46652 = inst_46670;
var inst_46653 = (0);
var state_46709__$1 = (function (){var statearr_46749 = state_46709;
(statearr_46749[(12)] = inst_46650);

(statearr_46749[(13)] = inst_46651);

(statearr_46749[(15)] = inst_46653);

(statearr_46749[(16)] = inst_46652);

return statearr_46749;
})();
var statearr_46750_46807 = state_46709__$1;
(statearr_46750_46807[(2)] = null);

(statearr_46750_46807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (10))){
var inst_46650 = (state_46709[(12)]);
var inst_46651 = (state_46709[(13)]);
var inst_46653 = (state_46709[(15)]);
var inst_46652 = (state_46709[(16)]);
var inst_46658 = cljs.core._nth.call(null,inst_46651,inst_46653);
var inst_46659 = cljs.core.async.muxch_STAR_.call(null,inst_46658);
var inst_46660 = cljs.core.async.close_BANG_.call(null,inst_46659);
var inst_46661 = (inst_46653 + (1));
var tmp46743 = inst_46650;
var tmp46744 = inst_46651;
var tmp46745 = inst_46652;
var inst_46650__$1 = tmp46743;
var inst_46651__$1 = tmp46744;
var inst_46652__$1 = tmp46745;
var inst_46653__$1 = inst_46661;
var state_46709__$1 = (function (){var statearr_46751 = state_46709;
(statearr_46751[(17)] = inst_46660);

(statearr_46751[(12)] = inst_46650__$1);

(statearr_46751[(13)] = inst_46651__$1);

(statearr_46751[(15)] = inst_46653__$1);

(statearr_46751[(16)] = inst_46652__$1);

return statearr_46751;
})();
var statearr_46752_46808 = state_46709__$1;
(statearr_46752_46808[(2)] = null);

(statearr_46752_46808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (18))){
var inst_46679 = (state_46709[(2)]);
var state_46709__$1 = state_46709;
var statearr_46753_46809 = state_46709__$1;
(statearr_46753_46809[(2)] = inst_46679);

(statearr_46753_46809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46710 === (8))){
var inst_46653 = (state_46709[(15)]);
var inst_46652 = (state_46709[(16)]);
var inst_46655 = (inst_46653 < inst_46652);
var inst_46656 = inst_46655;
var state_46709__$1 = state_46709;
if(cljs.core.truth_(inst_46656)){
var statearr_46754_46810 = state_46709__$1;
(statearr_46754_46810[(1)] = (10));

} else {
var statearr_46755_46811 = state_46709__$1;
(statearr_46755_46811[(1)] = (11));

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
});})(c__44117__auto___46777,mults,ensure_mult,p))
;
return ((function (switch__43799__auto__,c__44117__auto___46777,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_46759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46759[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_46759[(1)] = (1));

return statearr_46759;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_46709){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_46709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e46760){if((e46760 instanceof Object)){
var ex__43803__auto__ = e46760;
var statearr_46761_46812 = state_46709;
(statearr_46761_46812[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46813 = state_46709;
state_46709 = G__46813;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_46709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_46709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___46777,mults,ensure_mult,p))
})();
var state__44119__auto__ = (function (){var statearr_46762 = f__44118__auto__.call(null);
(statearr_46762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___46777);

return statearr_46762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___46777,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args46817 = [];
var len__39562__auto___46823 = arguments.length;
var i__39563__auto___46825 = (0);
while(true){
if((i__39563__auto___46825 < len__39562__auto___46823)){
args46817.push((arguments[i__39563__auto___46825]));

var G__46827 = (i__39563__auto___46825 + (1));
i__39563__auto___46825 = G__46827;
continue;
} else {
}
break;
}

var G__46819 = args46817.length;
switch (G__46819) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46817.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args46830 = [];
var len__39562__auto___46839 = arguments.length;
var i__39563__auto___46840 = (0);
while(true){
if((i__39563__auto___46840 < len__39562__auto___46839)){
args46830.push((arguments[i__39563__auto___46840]));

var G__46841 = (i__39563__auto___46840 + (1));
i__39563__auto___46840 = G__46841;
continue;
} else {
}
break;
}

var G__46835 = args46830.length;
switch (G__46835) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46830.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args46844 = [];
var len__39562__auto___46927 = arguments.length;
var i__39563__auto___46928 = (0);
while(true){
if((i__39563__auto___46928 < len__39562__auto___46927)){
args46844.push((arguments[i__39563__auto___46928]));

var G__46929 = (i__39563__auto___46928 + (1));
i__39563__auto___46928 = G__46929;
continue;
} else {
}
break;
}

var G__46848 = args46844.length;
switch (G__46848) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46844.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__44117__auto___46941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___46941,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___46941,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46887){
var state_val_46888 = (state_46887[(1)]);
if((state_val_46888 === (7))){
var state_46887__$1 = state_46887;
var statearr_46889_46942 = state_46887__$1;
(statearr_46889_46942[(2)] = null);

(statearr_46889_46942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (1))){
var state_46887__$1 = state_46887;
var statearr_46890_46943 = state_46887__$1;
(statearr_46890_46943[(2)] = null);

(statearr_46890_46943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (4))){
var inst_46851 = (state_46887[(7)]);
var inst_46853 = (inst_46851 < cnt);
var state_46887__$1 = state_46887;
if(cljs.core.truth_(inst_46853)){
var statearr_46891_46944 = state_46887__$1;
(statearr_46891_46944[(1)] = (6));

} else {
var statearr_46892_46945 = state_46887__$1;
(statearr_46892_46945[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (15))){
var inst_46883 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
var statearr_46893_46946 = state_46887__$1;
(statearr_46893_46946[(2)] = inst_46883);

(statearr_46893_46946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (13))){
var inst_46876 = cljs.core.async.close_BANG_.call(null,out);
var state_46887__$1 = state_46887;
var statearr_46894_46947 = state_46887__$1;
(statearr_46894_46947[(2)] = inst_46876);

(statearr_46894_46947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (6))){
var state_46887__$1 = state_46887;
var statearr_46895_46948 = state_46887__$1;
(statearr_46895_46948[(2)] = null);

(statearr_46895_46948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (3))){
var inst_46885 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46887__$1,inst_46885);
} else {
if((state_val_46888 === (12))){
var inst_46873 = (state_46887[(8)]);
var inst_46873__$1 = (state_46887[(2)]);
var inst_46874 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46873__$1);
var state_46887__$1 = (function (){var statearr_46900 = state_46887;
(statearr_46900[(8)] = inst_46873__$1);

return statearr_46900;
})();
if(cljs.core.truth_(inst_46874)){
var statearr_46901_46949 = state_46887__$1;
(statearr_46901_46949[(1)] = (13));

} else {
var statearr_46902_46950 = state_46887__$1;
(statearr_46902_46950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (2))){
var inst_46850 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46851 = (0);
var state_46887__$1 = (function (){var statearr_46903 = state_46887;
(statearr_46903[(7)] = inst_46851);

(statearr_46903[(9)] = inst_46850);

return statearr_46903;
})();
var statearr_46904_46951 = state_46887__$1;
(statearr_46904_46951[(2)] = null);

(statearr_46904_46951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (11))){
var inst_46851 = (state_46887[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46887,(10),Object,null,(9));
var inst_46860 = chs__$1.call(null,inst_46851);
var inst_46861 = done.call(null,inst_46851);
var inst_46862 = cljs.core.async.take_BANG_.call(null,inst_46860,inst_46861);
var state_46887__$1 = state_46887;
var statearr_46905_46954 = state_46887__$1;
(statearr_46905_46954[(2)] = inst_46862);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46887__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (9))){
var inst_46851 = (state_46887[(7)]);
var inst_46864 = (state_46887[(2)]);
var inst_46865 = (inst_46851 + (1));
var inst_46851__$1 = inst_46865;
var state_46887__$1 = (function (){var statearr_46906 = state_46887;
(statearr_46906[(10)] = inst_46864);

(statearr_46906[(7)] = inst_46851__$1);

return statearr_46906;
})();
var statearr_46907_46962 = state_46887__$1;
(statearr_46907_46962[(2)] = null);

(statearr_46907_46962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (5))){
var inst_46871 = (state_46887[(2)]);
var state_46887__$1 = (function (){var statearr_46908 = state_46887;
(statearr_46908[(11)] = inst_46871);

return statearr_46908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46887__$1,(12),dchan);
} else {
if((state_val_46888 === (14))){
var inst_46873 = (state_46887[(8)]);
var inst_46878 = cljs.core.apply.call(null,f,inst_46873);
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46887__$1,(16),out,inst_46878);
} else {
if((state_val_46888 === (16))){
var inst_46880 = (state_46887[(2)]);
var state_46887__$1 = (function (){var statearr_46911 = state_46887;
(statearr_46911[(12)] = inst_46880);

return statearr_46911;
})();
var statearr_46915_46968 = state_46887__$1;
(statearr_46915_46968[(2)] = null);

(statearr_46915_46968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (10))){
var inst_46855 = (state_46887[(2)]);
var inst_46856 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46887__$1 = (function (){var statearr_46916 = state_46887;
(statearr_46916[(13)] = inst_46855);

return statearr_46916;
})();
var statearr_46917_46969 = state_46887__$1;
(statearr_46917_46969[(2)] = inst_46856);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46887__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (8))){
var inst_46869 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
var statearr_46918_46970 = state_46887__$1;
(statearr_46918_46970[(2)] = inst_46869);

(statearr_46918_46970[(1)] = (5));


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
});})(c__44117__auto___46941,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43799__auto__,c__44117__auto___46941,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_46922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46922[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_46922[(1)] = (1));

return statearr_46922;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_46887){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_46887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e46923){if((e46923 instanceof Object)){
var ex__43803__auto__ = e46923;
var statearr_46924_46971 = state_46887;
(statearr_46924_46971[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46972 = state_46887;
state_46887 = G__46972;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_46887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_46887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___46941,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44119__auto__ = (function (){var statearr_46925 = f__44118__auto__.call(null);
(statearr_46925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___46941);

return statearr_46925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___46941,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args46974 = [];
var len__39562__auto___47039 = arguments.length;
var i__39563__auto___47040 = (0);
while(true){
if((i__39563__auto___47040 < len__39562__auto___47039)){
args46974.push((arguments[i__39563__auto___47040]));

var G__47041 = (i__39563__auto___47040 + (1));
i__39563__auto___47040 = G__47041;
continue;
} else {
}
break;
}

var G__46979 = args46974.length;
switch (G__46979) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46974.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44117__auto___47043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___47043,out){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___47043,out){
return (function (state_47011){
var state_val_47012 = (state_47011[(1)]);
if((state_val_47012 === (7))){
var inst_46991 = (state_47011[(7)]);
var inst_46990 = (state_47011[(8)]);
var inst_46990__$1 = (state_47011[(2)]);
var inst_46991__$1 = cljs.core.nth.call(null,inst_46990__$1,(0),null);
var inst_46992 = cljs.core.nth.call(null,inst_46990__$1,(1),null);
var inst_46993 = (inst_46991__$1 == null);
var state_47011__$1 = (function (){var statearr_47016 = state_47011;
(statearr_47016[(7)] = inst_46991__$1);

(statearr_47016[(8)] = inst_46990__$1);

(statearr_47016[(9)] = inst_46992);

return statearr_47016;
})();
if(cljs.core.truth_(inst_46993)){
var statearr_47017_47044 = state_47011__$1;
(statearr_47017_47044[(1)] = (8));

} else {
var statearr_47018_47045 = state_47011__$1;
(statearr_47018_47045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47012 === (1))){
var inst_46981 = cljs.core.vec.call(null,chs);
var inst_46982 = inst_46981;
var state_47011__$1 = (function (){var statearr_47019 = state_47011;
(statearr_47019[(10)] = inst_46982);

return statearr_47019;
})();
var statearr_47020_47050 = state_47011__$1;
(statearr_47020_47050[(2)] = null);

(statearr_47020_47050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47012 === (4))){
var inst_46982 = (state_47011[(10)]);
var state_47011__$1 = state_47011;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47011__$1,(7),inst_46982);
} else {
if((state_val_47012 === (6))){
var inst_47007 = (state_47011[(2)]);
var state_47011__$1 = state_47011;
var statearr_47021_47054 = state_47011__$1;
(statearr_47021_47054[(2)] = inst_47007);

(statearr_47021_47054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47012 === (3))){
var inst_47009 = (state_47011[(2)]);
var state_47011__$1 = state_47011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47011__$1,inst_47009);
} else {
if((state_val_47012 === (2))){
var inst_46982 = (state_47011[(10)]);
var inst_46984 = cljs.core.count.call(null,inst_46982);
var inst_46985 = (inst_46984 > (0));
var state_47011__$1 = state_47011;
if(cljs.core.truth_(inst_46985)){
var statearr_47023_47059 = state_47011__$1;
(statearr_47023_47059[(1)] = (4));

} else {
var statearr_47024_47060 = state_47011__$1;
(statearr_47024_47060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47012 === (11))){
var inst_46982 = (state_47011[(10)]);
var inst_47000 = (state_47011[(2)]);
var tmp47022 = inst_46982;
var inst_46982__$1 = tmp47022;
var state_47011__$1 = (function (){var statearr_47025 = state_47011;
(statearr_47025[(11)] = inst_47000);

(statearr_47025[(10)] = inst_46982__$1);

return statearr_47025;
})();
var statearr_47026_47062 = state_47011__$1;
(statearr_47026_47062[(2)] = null);

(statearr_47026_47062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47012 === (9))){
var inst_46991 = (state_47011[(7)]);
var state_47011__$1 = state_47011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47011__$1,(11),out,inst_46991);
} else {
if((state_val_47012 === (5))){
var inst_47005 = cljs.core.async.close_BANG_.call(null,out);
var state_47011__$1 = state_47011;
var statearr_47028_47070 = state_47011__$1;
(statearr_47028_47070[(2)] = inst_47005);

(statearr_47028_47070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47012 === (10))){
var inst_47003 = (state_47011[(2)]);
var state_47011__$1 = state_47011;
var statearr_47029_47071 = state_47011__$1;
(statearr_47029_47071[(2)] = inst_47003);

(statearr_47029_47071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47012 === (8))){
var inst_46991 = (state_47011[(7)]);
var inst_46990 = (state_47011[(8)]);
var inst_46982 = (state_47011[(10)]);
var inst_46992 = (state_47011[(9)]);
var inst_46995 = (function (){var cs = inst_46982;
var vec__46988 = inst_46990;
var v = inst_46991;
var c = inst_46992;
return ((function (cs,vec__46988,v,c,inst_46991,inst_46990,inst_46982,inst_46992,state_val_47012,c__44117__auto___47043,out){
return (function (p1__46973_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46973_SHARP_);
});
;})(cs,vec__46988,v,c,inst_46991,inst_46990,inst_46982,inst_46992,state_val_47012,c__44117__auto___47043,out))
})();
var inst_46996 = cljs.core.filterv.call(null,inst_46995,inst_46982);
var inst_46982__$1 = inst_46996;
var state_47011__$1 = (function (){var statearr_47030 = state_47011;
(statearr_47030[(10)] = inst_46982__$1);

return statearr_47030;
})();
var statearr_47031_47073 = state_47011__$1;
(statearr_47031_47073[(2)] = null);

(statearr_47031_47073[(1)] = (2));


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
});})(c__44117__auto___47043,out))
;
return ((function (switch__43799__auto__,c__44117__auto___47043,out){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_47035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47035[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_47035[(1)] = (1));

return statearr_47035;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_47011){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_47011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e47036){if((e47036 instanceof Object)){
var ex__43803__auto__ = e47036;
var statearr_47037_47074 = state_47011;
(statearr_47037_47074[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47075 = state_47011;
state_47011 = G__47075;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_47011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_47011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___47043,out))
})();
var state__44119__auto__ = (function (){var statearr_47038 = f__44118__auto__.call(null);
(statearr_47038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___47043);

return statearr_47038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___47043,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args47076 = [];
var len__39562__auto___47135 = arguments.length;
var i__39563__auto___47136 = (0);
while(true){
if((i__39563__auto___47136 < len__39562__auto___47135)){
args47076.push((arguments[i__39563__auto___47136]));

var G__47137 = (i__39563__auto___47136 + (1));
i__39563__auto___47136 = G__47137;
continue;
} else {
}
break;
}

var G__47088 = args47076.length;
switch (G__47088) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47076.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44117__auto___47139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___47139,out){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___47139,out){
return (function (state_47112){
var state_val_47113 = (state_47112[(1)]);
if((state_val_47113 === (7))){
var inst_47094 = (state_47112[(7)]);
var inst_47094__$1 = (state_47112[(2)]);
var inst_47095 = (inst_47094__$1 == null);
var inst_47096 = cljs.core.not.call(null,inst_47095);
var state_47112__$1 = (function (){var statearr_47114 = state_47112;
(statearr_47114[(7)] = inst_47094__$1);

return statearr_47114;
})();
if(inst_47096){
var statearr_47115_47150 = state_47112__$1;
(statearr_47115_47150[(1)] = (8));

} else {
var statearr_47116_47151 = state_47112__$1;
(statearr_47116_47151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47113 === (1))){
var inst_47089 = (0);
var state_47112__$1 = (function (){var statearr_47117 = state_47112;
(statearr_47117[(8)] = inst_47089);

return statearr_47117;
})();
var statearr_47118_47155 = state_47112__$1;
(statearr_47118_47155[(2)] = null);

(statearr_47118_47155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47113 === (4))){
var state_47112__$1 = state_47112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47112__$1,(7),ch);
} else {
if((state_val_47113 === (6))){
var inst_47107 = (state_47112[(2)]);
var state_47112__$1 = state_47112;
var statearr_47119_47159 = state_47112__$1;
(statearr_47119_47159[(2)] = inst_47107);

(statearr_47119_47159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47113 === (3))){
var inst_47109 = (state_47112[(2)]);
var inst_47110 = cljs.core.async.close_BANG_.call(null,out);
var state_47112__$1 = (function (){var statearr_47120 = state_47112;
(statearr_47120[(9)] = inst_47109);

return statearr_47120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47112__$1,inst_47110);
} else {
if((state_val_47113 === (2))){
var inst_47089 = (state_47112[(8)]);
var inst_47091 = (inst_47089 < n);
var state_47112__$1 = state_47112;
if(cljs.core.truth_(inst_47091)){
var statearr_47121_47169 = state_47112__$1;
(statearr_47121_47169[(1)] = (4));

} else {
var statearr_47122_47170 = state_47112__$1;
(statearr_47122_47170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47113 === (11))){
var inst_47089 = (state_47112[(8)]);
var inst_47099 = (state_47112[(2)]);
var inst_47100 = (inst_47089 + (1));
var inst_47089__$1 = inst_47100;
var state_47112__$1 = (function (){var statearr_47123 = state_47112;
(statearr_47123[(8)] = inst_47089__$1);

(statearr_47123[(10)] = inst_47099);

return statearr_47123;
})();
var statearr_47124_47174 = state_47112__$1;
(statearr_47124_47174[(2)] = null);

(statearr_47124_47174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47113 === (9))){
var state_47112__$1 = state_47112;
var statearr_47125_47176 = state_47112__$1;
(statearr_47125_47176[(2)] = null);

(statearr_47125_47176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47113 === (5))){
var state_47112__$1 = state_47112;
var statearr_47126_47178 = state_47112__$1;
(statearr_47126_47178[(2)] = null);

(statearr_47126_47178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47113 === (10))){
var inst_47104 = (state_47112[(2)]);
var state_47112__$1 = state_47112;
var statearr_47127_47182 = state_47112__$1;
(statearr_47127_47182[(2)] = inst_47104);

(statearr_47127_47182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47113 === (8))){
var inst_47094 = (state_47112[(7)]);
var state_47112__$1 = state_47112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47112__$1,(11),out,inst_47094);
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
});})(c__44117__auto___47139,out))
;
return ((function (switch__43799__auto__,c__44117__auto___47139,out){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_47131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47131[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_47131[(1)] = (1));

return statearr_47131;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_47112){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_47112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e47132){if((e47132 instanceof Object)){
var ex__43803__auto__ = e47132;
var statearr_47133_47184 = state_47112;
(statearr_47133_47184[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47185 = state_47112;
state_47112 = G__47185;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_47112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_47112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___47139,out))
})();
var state__44119__auto__ = (function (){var statearr_47134 = f__44118__auto__.call(null);
(statearr_47134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___47139);

return statearr_47134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___47139,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47196 = (function (map_LT_,f,ch,meta47197){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47197 = meta47197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47198,meta47197__$1){
var self__ = this;
var _47198__$1 = this;
return (new cljs.core.async.t_cljs$core$async47196(self__.map_LT_,self__.f,self__.ch,meta47197__$1));
});

cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47198){
var self__ = this;
var _47198__$1 = this;
return self__.meta47197;
});

cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47203 = (function (map_LT_,f,ch,meta47197,_,fn1,meta47204){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47197 = meta47197;
this._ = _;
this.fn1 = fn1;
this.meta47204 = meta47204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47205,meta47204__$1){
var self__ = this;
var _47205__$1 = this;
return (new cljs.core.async.t_cljs$core$async47203(self__.map_LT_,self__.f,self__.ch,self__.meta47197,self__._,self__.fn1,meta47204__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47205){
var self__ = this;
var _47205__$1 = this;
return self__.meta47204;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47186_SHARP_){
return f1.call(null,(((p1__47186_SHARP_ == null))?null:self__.f.call(null,p1__47186_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47203.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47197","meta47197",541318423,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47196","cljs.core.async/t_cljs$core$async47196",1068739267,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47204","meta47204",284106008,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47203";

cljs.core.async.t_cljs$core$async47203.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async47203");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47203 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47203(map_LT___$1,f__$1,ch__$1,meta47197__$1,___$2,fn1__$1,meta47204){
return (new cljs.core.async.t_cljs$core$async47203(map_LT___$1,f__$1,ch__$1,meta47197__$1,___$2,fn1__$1,meta47204));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47203(self__.map_LT_,self__.f,self__.ch,self__.meta47197,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__38492__auto__ = ret;
if(cljs.core.truth_(and__38492__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__38492__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47197","meta47197",541318423,null)], null);
});

cljs.core.async.t_cljs$core$async47196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47196";

cljs.core.async.t_cljs$core$async47196.cljs$lang$ctorPrWriter = (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async47196");
});

cljs.core.async.__GT_t_cljs$core$async47196 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47196(map_LT___$1,f__$1,ch__$1,meta47197){
return (new cljs.core.async.t_cljs$core$async47196(map_LT___$1,f__$1,ch__$1,meta47197));
});

}

return (new cljs.core.async.t_cljs$core$async47196(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47231 = (function (map_GT_,f,ch,meta47232){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta47232 = meta47232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47233,meta47232__$1){
var self__ = this;
var _47233__$1 = this;
return (new cljs.core.async.t_cljs$core$async47231(self__.map_GT_,self__.f,self__.ch,meta47232__$1));
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47233){
var self__ = this;
var _47233__$1 = this;
return self__.meta47232;
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47232","meta47232",-724157283,null)], null);
});

cljs.core.async.t_cljs$core$async47231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47231";

cljs.core.async.t_cljs$core$async47231.cljs$lang$ctorPrWriter = (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async47231");
});

cljs.core.async.__GT_t_cljs$core$async47231 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47231(map_GT___$1,f__$1,ch__$1,meta47232){
return (new cljs.core.async.t_cljs$core$async47231(map_GT___$1,f__$1,ch__$1,meta47232));
});

}

return (new cljs.core.async.t_cljs$core$async47231(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47242 = (function (filter_GT_,p,ch,meta47243){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta47243 = meta47243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47244,meta47243__$1){
var self__ = this;
var _47244__$1 = this;
return (new cljs.core.async.t_cljs$core$async47242(self__.filter_GT_,self__.p,self__.ch,meta47243__$1));
});

cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47244){
var self__ = this;
var _47244__$1 = this;
return self__.meta47243;
});

cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47243","meta47243",1901995829,null)], null);
});

cljs.core.async.t_cljs$core$async47242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47242";

cljs.core.async.t_cljs$core$async47242.cljs$lang$ctorPrWriter = (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"cljs.core.async/t_cljs$core$async47242");
});

cljs.core.async.__GT_t_cljs$core$async47242 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47242(filter_GT___$1,p__$1,ch__$1,meta47243){
return (new cljs.core.async.t_cljs$core$async47242(filter_GT___$1,p__$1,ch__$1,meta47243));
});

}

return (new cljs.core.async.t_cljs$core$async47242(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args47255 = [];
var len__39562__auto___47326 = arguments.length;
var i__39563__auto___47327 = (0);
while(true){
if((i__39563__auto___47327 < len__39562__auto___47326)){
args47255.push((arguments[i__39563__auto___47327]));

var G__47330 = (i__39563__auto___47327 + (1));
i__39563__auto___47327 = G__47330;
continue;
} else {
}
break;
}

var G__47260 = args47255.length;
switch (G__47260) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47255.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44117__auto___47343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___47343,out){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___47343,out){
return (function (state_47286){
var state_val_47287 = (state_47286[(1)]);
if((state_val_47287 === (7))){
var inst_47280 = (state_47286[(2)]);
var state_47286__$1 = state_47286;
var statearr_47293_47347 = state_47286__$1;
(statearr_47293_47347[(2)] = inst_47280);

(statearr_47293_47347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47287 === (1))){
var state_47286__$1 = state_47286;
var statearr_47294_47349 = state_47286__$1;
(statearr_47294_47349[(2)] = null);

(statearr_47294_47349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47287 === (4))){
var inst_47265 = (state_47286[(7)]);
var inst_47265__$1 = (state_47286[(2)]);
var inst_47266 = (inst_47265__$1 == null);
var state_47286__$1 = (function (){var statearr_47295 = state_47286;
(statearr_47295[(7)] = inst_47265__$1);

return statearr_47295;
})();
if(cljs.core.truth_(inst_47266)){
var statearr_47297_47350 = state_47286__$1;
(statearr_47297_47350[(1)] = (5));

} else {
var statearr_47299_47351 = state_47286__$1;
(statearr_47299_47351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47287 === (6))){
var inst_47265 = (state_47286[(7)]);
var inst_47270 = p.call(null,inst_47265);
var state_47286__$1 = state_47286;
if(cljs.core.truth_(inst_47270)){
var statearr_47301_47354 = state_47286__$1;
(statearr_47301_47354[(1)] = (8));

} else {
var statearr_47302_47356 = state_47286__$1;
(statearr_47302_47356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47287 === (3))){
var inst_47283 = (state_47286[(2)]);
var state_47286__$1 = state_47286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47286__$1,inst_47283);
} else {
if((state_val_47287 === (2))){
var state_47286__$1 = state_47286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47286__$1,(4),ch);
} else {
if((state_val_47287 === (11))){
var inst_47273 = (state_47286[(2)]);
var state_47286__$1 = state_47286;
var statearr_47305_47357 = state_47286__$1;
(statearr_47305_47357[(2)] = inst_47273);

(statearr_47305_47357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47287 === (9))){
var state_47286__$1 = state_47286;
var statearr_47309_47358 = state_47286__$1;
(statearr_47309_47358[(2)] = null);

(statearr_47309_47358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47287 === (5))){
var inst_47268 = cljs.core.async.close_BANG_.call(null,out);
var state_47286__$1 = state_47286;
var statearr_47310_47359 = state_47286__$1;
(statearr_47310_47359[(2)] = inst_47268);

(statearr_47310_47359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47287 === (10))){
var inst_47276 = (state_47286[(2)]);
var state_47286__$1 = (function (){var statearr_47311 = state_47286;
(statearr_47311[(8)] = inst_47276);

return statearr_47311;
})();
var statearr_47312_47363 = state_47286__$1;
(statearr_47312_47363[(2)] = null);

(statearr_47312_47363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47287 === (8))){
var inst_47265 = (state_47286[(7)]);
var state_47286__$1 = state_47286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47286__$1,(11),out,inst_47265);
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
});})(c__44117__auto___47343,out))
;
return ((function (switch__43799__auto__,c__44117__auto___47343,out){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_47316 = [null,null,null,null,null,null,null,null,null];
(statearr_47316[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_47316[(1)] = (1));

return statearr_47316;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_47286){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_47286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e47317){if((e47317 instanceof Object)){
var ex__43803__auto__ = e47317;
var statearr_47319_47364 = state_47286;
(statearr_47319_47364[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47365 = state_47286;
state_47286 = G__47365;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_47286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_47286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___47343,out))
})();
var state__44119__auto__ = (function (){var statearr_47321 = f__44118__auto__.call(null);
(statearr_47321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___47343);

return statearr_47321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___47343,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args47366 = [];
var len__39562__auto___47369 = arguments.length;
var i__39563__auto___47370 = (0);
while(true){
if((i__39563__auto___47370 < len__39562__auto___47369)){
args47366.push((arguments[i__39563__auto___47370]));

var G__47371 = (i__39563__auto___47370 + (1));
i__39563__auto___47370 = G__47371;
continue;
} else {
}
break;
}

var G__47368 = args47366.length;
switch (G__47368) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47366.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44117__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto__){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto__){
return (function (state_47542){
var state_val_47543 = (state_47542[(1)]);
if((state_val_47543 === (7))){
var inst_47538 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47544_47591 = state_47542__$1;
(statearr_47544_47591[(2)] = inst_47538);

(statearr_47544_47591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (20))){
var inst_47507 = (state_47542[(7)]);
var inst_47518 = (state_47542[(2)]);
var inst_47519 = cljs.core.next.call(null,inst_47507);
var inst_47493 = inst_47519;
var inst_47494 = null;
var inst_47495 = (0);
var inst_47496 = (0);
var state_47542__$1 = (function (){var statearr_47545 = state_47542;
(statearr_47545[(8)] = inst_47518);

(statearr_47545[(9)] = inst_47496);

(statearr_47545[(10)] = inst_47493);

(statearr_47545[(11)] = inst_47495);

(statearr_47545[(12)] = inst_47494);

return statearr_47545;
})();
var statearr_47546_47592 = state_47542__$1;
(statearr_47546_47592[(2)] = null);

(statearr_47546_47592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (1))){
var state_47542__$1 = state_47542;
var statearr_47547_47593 = state_47542__$1;
(statearr_47547_47593[(2)] = null);

(statearr_47547_47593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (4))){
var inst_47481 = (state_47542[(13)]);
var inst_47481__$1 = (state_47542[(2)]);
var inst_47482 = (inst_47481__$1 == null);
var state_47542__$1 = (function (){var statearr_47548 = state_47542;
(statearr_47548[(13)] = inst_47481__$1);

return statearr_47548;
})();
if(cljs.core.truth_(inst_47482)){
var statearr_47549_47594 = state_47542__$1;
(statearr_47549_47594[(1)] = (5));

} else {
var statearr_47551_47595 = state_47542__$1;
(statearr_47551_47595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (15))){
var state_47542__$1 = state_47542;
var statearr_47556_47596 = state_47542__$1;
(statearr_47556_47596[(2)] = null);

(statearr_47556_47596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (21))){
var state_47542__$1 = state_47542;
var statearr_47557_47597 = state_47542__$1;
(statearr_47557_47597[(2)] = null);

(statearr_47557_47597[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (13))){
var inst_47496 = (state_47542[(9)]);
var inst_47493 = (state_47542[(10)]);
var inst_47495 = (state_47542[(11)]);
var inst_47494 = (state_47542[(12)]);
var inst_47503 = (state_47542[(2)]);
var inst_47504 = (inst_47496 + (1));
var tmp47553 = inst_47493;
var tmp47554 = inst_47495;
var tmp47555 = inst_47494;
var inst_47493__$1 = tmp47553;
var inst_47494__$1 = tmp47555;
var inst_47495__$1 = tmp47554;
var inst_47496__$1 = inst_47504;
var state_47542__$1 = (function (){var statearr_47558 = state_47542;
(statearr_47558[(9)] = inst_47496__$1);

(statearr_47558[(10)] = inst_47493__$1);

(statearr_47558[(14)] = inst_47503);

(statearr_47558[(11)] = inst_47495__$1);

(statearr_47558[(12)] = inst_47494__$1);

return statearr_47558;
})();
var statearr_47559_47598 = state_47542__$1;
(statearr_47559_47598[(2)] = null);

(statearr_47559_47598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (22))){
var state_47542__$1 = state_47542;
var statearr_47560_47599 = state_47542__$1;
(statearr_47560_47599[(2)] = null);

(statearr_47560_47599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (6))){
var inst_47481 = (state_47542[(13)]);
var inst_47490 = f.call(null,inst_47481);
var inst_47491 = cljs.core.seq.call(null,inst_47490);
var inst_47493 = inst_47491;
var inst_47494 = null;
var inst_47495 = (0);
var inst_47496 = (0);
var state_47542__$1 = (function (){var statearr_47564 = state_47542;
(statearr_47564[(9)] = inst_47496);

(statearr_47564[(10)] = inst_47493);

(statearr_47564[(11)] = inst_47495);

(statearr_47564[(12)] = inst_47494);

return statearr_47564;
})();
var statearr_47565_47600 = state_47542__$1;
(statearr_47565_47600[(2)] = null);

(statearr_47565_47600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (17))){
var inst_47507 = (state_47542[(7)]);
var inst_47511 = cljs.core.chunk_first.call(null,inst_47507);
var inst_47512 = cljs.core.chunk_rest.call(null,inst_47507);
var inst_47513 = cljs.core.count.call(null,inst_47511);
var inst_47493 = inst_47512;
var inst_47494 = inst_47511;
var inst_47495 = inst_47513;
var inst_47496 = (0);
var state_47542__$1 = (function (){var statearr_47566 = state_47542;
(statearr_47566[(9)] = inst_47496);

(statearr_47566[(10)] = inst_47493);

(statearr_47566[(11)] = inst_47495);

(statearr_47566[(12)] = inst_47494);

return statearr_47566;
})();
var statearr_47567_47601 = state_47542__$1;
(statearr_47567_47601[(2)] = null);

(statearr_47567_47601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (3))){
var inst_47540 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47542__$1,inst_47540);
} else {
if((state_val_47543 === (12))){
var inst_47528 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47568_47602 = state_47542__$1;
(statearr_47568_47602[(2)] = inst_47528);

(statearr_47568_47602[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (2))){
var state_47542__$1 = state_47542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47542__$1,(4),in$);
} else {
if((state_val_47543 === (23))){
var inst_47536 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47569_47605 = state_47542__$1;
(statearr_47569_47605[(2)] = inst_47536);

(statearr_47569_47605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (19))){
var inst_47522 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47570_47607 = state_47542__$1;
(statearr_47570_47607[(2)] = inst_47522);

(statearr_47570_47607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (11))){
var inst_47493 = (state_47542[(10)]);
var inst_47507 = (state_47542[(7)]);
var inst_47507__$1 = cljs.core.seq.call(null,inst_47493);
var state_47542__$1 = (function (){var statearr_47571 = state_47542;
(statearr_47571[(7)] = inst_47507__$1);

return statearr_47571;
})();
if(inst_47507__$1){
var statearr_47572_47612 = state_47542__$1;
(statearr_47572_47612[(1)] = (14));

} else {
var statearr_47573_47613 = state_47542__$1;
(statearr_47573_47613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (9))){
var inst_47530 = (state_47542[(2)]);
var inst_47531 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47542__$1 = (function (){var statearr_47574 = state_47542;
(statearr_47574[(15)] = inst_47530);

return statearr_47574;
})();
if(cljs.core.truth_(inst_47531)){
var statearr_47575_47617 = state_47542__$1;
(statearr_47575_47617[(1)] = (21));

} else {
var statearr_47576_47618 = state_47542__$1;
(statearr_47576_47618[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (5))){
var inst_47484 = cljs.core.async.close_BANG_.call(null,out);
var state_47542__$1 = state_47542;
var statearr_47577_47620 = state_47542__$1;
(statearr_47577_47620[(2)] = inst_47484);

(statearr_47577_47620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (14))){
var inst_47507 = (state_47542[(7)]);
var inst_47509 = cljs.core.chunked_seq_QMARK_.call(null,inst_47507);
var state_47542__$1 = state_47542;
if(inst_47509){
var statearr_47578_47621 = state_47542__$1;
(statearr_47578_47621[(1)] = (17));

} else {
var statearr_47579_47622 = state_47542__$1;
(statearr_47579_47622[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (16))){
var inst_47526 = (state_47542[(2)]);
var state_47542__$1 = state_47542;
var statearr_47580_47623 = state_47542__$1;
(statearr_47580_47623[(2)] = inst_47526);

(statearr_47580_47623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47543 === (10))){
var inst_47496 = (state_47542[(9)]);
var inst_47494 = (state_47542[(12)]);
var inst_47501 = cljs.core._nth.call(null,inst_47494,inst_47496);
var state_47542__$1 = state_47542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47542__$1,(13),out,inst_47501);
} else {
if((state_val_47543 === (18))){
var inst_47507 = (state_47542[(7)]);
var inst_47516 = cljs.core.first.call(null,inst_47507);
var state_47542__$1 = state_47542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47542__$1,(20),out,inst_47516);
} else {
if((state_val_47543 === (8))){
var inst_47496 = (state_47542[(9)]);
var inst_47495 = (state_47542[(11)]);
var inst_47498 = (inst_47496 < inst_47495);
var inst_47499 = inst_47498;
var state_47542__$1 = state_47542;
if(cljs.core.truth_(inst_47499)){
var statearr_47581_47627 = state_47542__$1;
(statearr_47581_47627[(1)] = (10));

} else {
var statearr_47582_47628 = state_47542__$1;
(statearr_47582_47628[(1)] = (11));

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
});})(c__44117__auto__))
;
return ((function (switch__43799__auto__,c__44117__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43800__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43800__auto____0 = (function (){
var statearr_47586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47586[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43800__auto__);

(statearr_47586[(1)] = (1));

return statearr_47586;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43800__auto____1 = (function (state_47542){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_47542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e47587){if((e47587 instanceof Object)){
var ex__43803__auto__ = e47587;
var statearr_47588_47630 = state_47542;
(statearr_47588_47630[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47631 = state_47542;
state_47542 = G__47631;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43800__auto__ = function(state_47542){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43800__auto____1.call(this,state_47542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43800__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43800__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto__))
})();
var state__44119__auto__ = (function (){var statearr_47589 = f__44118__auto__.call(null);
(statearr_47589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto__);

return statearr_47589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto__))
);

return c__44117__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args47632 = [];
var len__39562__auto___47635 = arguments.length;
var i__39563__auto___47636 = (0);
while(true){
if((i__39563__auto___47636 < len__39562__auto___47635)){
args47632.push((arguments[i__39563__auto___47636]));

var G__47637 = (i__39563__auto___47636 + (1));
i__39563__auto___47636 = G__47637;
continue;
} else {
}
break;
}

var G__47634 = args47632.length;
switch (G__47634) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47632.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args47639 = [];
var len__39562__auto___47642 = arguments.length;
var i__39563__auto___47643 = (0);
while(true){
if((i__39563__auto___47643 < len__39562__auto___47642)){
args47639.push((arguments[i__39563__auto___47643]));

var G__47644 = (i__39563__auto___47643 + (1));
i__39563__auto___47643 = G__47644;
continue;
} else {
}
break;
}

var G__47641 = args47639.length;
switch (G__47641) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47639.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args47646 = [];
var len__39562__auto___47697 = arguments.length;
var i__39563__auto___47698 = (0);
while(true){
if((i__39563__auto___47698 < len__39562__auto___47697)){
args47646.push((arguments[i__39563__auto___47698]));

var G__47699 = (i__39563__auto___47698 + (1));
i__39563__auto___47698 = G__47699;
continue;
} else {
}
break;
}

var G__47648 = args47646.length;
switch (G__47648) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47646.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44117__auto___47701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___47701,out){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___47701,out){
return (function (state_47672){
var state_val_47673 = (state_47672[(1)]);
if((state_val_47673 === (7))){
var inst_47667 = (state_47672[(2)]);
var state_47672__$1 = state_47672;
var statearr_47674_47702 = state_47672__$1;
(statearr_47674_47702[(2)] = inst_47667);

(statearr_47674_47702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (1))){
var inst_47649 = null;
var state_47672__$1 = (function (){var statearr_47675 = state_47672;
(statearr_47675[(7)] = inst_47649);

return statearr_47675;
})();
var statearr_47676_47703 = state_47672__$1;
(statearr_47676_47703[(2)] = null);

(statearr_47676_47703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (4))){
var inst_47652 = (state_47672[(8)]);
var inst_47652__$1 = (state_47672[(2)]);
var inst_47653 = (inst_47652__$1 == null);
var inst_47654 = cljs.core.not.call(null,inst_47653);
var state_47672__$1 = (function (){var statearr_47677 = state_47672;
(statearr_47677[(8)] = inst_47652__$1);

return statearr_47677;
})();
if(inst_47654){
var statearr_47678_47704 = state_47672__$1;
(statearr_47678_47704[(1)] = (5));

} else {
var statearr_47679_47705 = state_47672__$1;
(statearr_47679_47705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (6))){
var state_47672__$1 = state_47672;
var statearr_47680_47706 = state_47672__$1;
(statearr_47680_47706[(2)] = null);

(statearr_47680_47706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (3))){
var inst_47669 = (state_47672[(2)]);
var inst_47670 = cljs.core.async.close_BANG_.call(null,out);
var state_47672__$1 = (function (){var statearr_47681 = state_47672;
(statearr_47681[(9)] = inst_47669);

return statearr_47681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47672__$1,inst_47670);
} else {
if((state_val_47673 === (2))){
var state_47672__$1 = state_47672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47672__$1,(4),ch);
} else {
if((state_val_47673 === (11))){
var inst_47652 = (state_47672[(8)]);
var inst_47661 = (state_47672[(2)]);
var inst_47649 = inst_47652;
var state_47672__$1 = (function (){var statearr_47682 = state_47672;
(statearr_47682[(7)] = inst_47649);

(statearr_47682[(10)] = inst_47661);

return statearr_47682;
})();
var statearr_47683_47707 = state_47672__$1;
(statearr_47683_47707[(2)] = null);

(statearr_47683_47707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (9))){
var inst_47652 = (state_47672[(8)]);
var state_47672__$1 = state_47672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47672__$1,(11),out,inst_47652);
} else {
if((state_val_47673 === (5))){
var inst_47649 = (state_47672[(7)]);
var inst_47652 = (state_47672[(8)]);
var inst_47656 = cljs.core._EQ_.call(null,inst_47652,inst_47649);
var state_47672__$1 = state_47672;
if(inst_47656){
var statearr_47685_47708 = state_47672__$1;
(statearr_47685_47708[(1)] = (8));

} else {
var statearr_47686_47709 = state_47672__$1;
(statearr_47686_47709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (10))){
var inst_47664 = (state_47672[(2)]);
var state_47672__$1 = state_47672;
var statearr_47687_47710 = state_47672__$1;
(statearr_47687_47710[(2)] = inst_47664);

(statearr_47687_47710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (8))){
var inst_47649 = (state_47672[(7)]);
var tmp47684 = inst_47649;
var inst_47649__$1 = tmp47684;
var state_47672__$1 = (function (){var statearr_47688 = state_47672;
(statearr_47688[(7)] = inst_47649__$1);

return statearr_47688;
})();
var statearr_47689_47711 = state_47672__$1;
(statearr_47689_47711[(2)] = null);

(statearr_47689_47711[(1)] = (2));


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
});})(c__44117__auto___47701,out))
;
return ((function (switch__43799__auto__,c__44117__auto___47701,out){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_47693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47693[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_47693[(1)] = (1));

return statearr_47693;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_47672){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_47672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e47694){if((e47694 instanceof Object)){
var ex__43803__auto__ = e47694;
var statearr_47695_47712 = state_47672;
(statearr_47695_47712[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47713 = state_47672;
state_47672 = G__47713;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_47672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_47672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___47701,out))
})();
var state__44119__auto__ = (function (){var statearr_47696 = f__44118__auto__.call(null);
(statearr_47696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___47701);

return statearr_47696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___47701,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47714 = [];
var len__39562__auto___47784 = arguments.length;
var i__39563__auto___47785 = (0);
while(true){
if((i__39563__auto___47785 < len__39562__auto___47784)){
args47714.push((arguments[i__39563__auto___47785]));

var G__47786 = (i__39563__auto___47785 + (1));
i__39563__auto___47785 = G__47786;
continue;
} else {
}
break;
}

var G__47716 = args47714.length;
switch (G__47716) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47714.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44117__auto___47788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___47788,out){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___47788,out){
return (function (state_47754){
var state_val_47755 = (state_47754[(1)]);
if((state_val_47755 === (7))){
var inst_47750 = (state_47754[(2)]);
var state_47754__$1 = state_47754;
var statearr_47756_47789 = state_47754__$1;
(statearr_47756_47789[(2)] = inst_47750);

(statearr_47756_47789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (1))){
var inst_47717 = (new Array(n));
var inst_47718 = inst_47717;
var inst_47719 = (0);
var state_47754__$1 = (function (){var statearr_47757 = state_47754;
(statearr_47757[(7)] = inst_47718);

(statearr_47757[(8)] = inst_47719);

return statearr_47757;
})();
var statearr_47758_47790 = state_47754__$1;
(statearr_47758_47790[(2)] = null);

(statearr_47758_47790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (4))){
var inst_47722 = (state_47754[(9)]);
var inst_47722__$1 = (state_47754[(2)]);
var inst_47723 = (inst_47722__$1 == null);
var inst_47724 = cljs.core.not.call(null,inst_47723);
var state_47754__$1 = (function (){var statearr_47759 = state_47754;
(statearr_47759[(9)] = inst_47722__$1);

return statearr_47759;
})();
if(inst_47724){
var statearr_47760_47791 = state_47754__$1;
(statearr_47760_47791[(1)] = (5));

} else {
var statearr_47761_47792 = state_47754__$1;
(statearr_47761_47792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (15))){
var inst_47744 = (state_47754[(2)]);
var state_47754__$1 = state_47754;
var statearr_47762_47793 = state_47754__$1;
(statearr_47762_47793[(2)] = inst_47744);

(statearr_47762_47793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (13))){
var state_47754__$1 = state_47754;
var statearr_47763_47794 = state_47754__$1;
(statearr_47763_47794[(2)] = null);

(statearr_47763_47794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (6))){
var inst_47719 = (state_47754[(8)]);
var inst_47740 = (inst_47719 > (0));
var state_47754__$1 = state_47754;
if(cljs.core.truth_(inst_47740)){
var statearr_47764_47795 = state_47754__$1;
(statearr_47764_47795[(1)] = (12));

} else {
var statearr_47765_47796 = state_47754__$1;
(statearr_47765_47796[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (3))){
var inst_47752 = (state_47754[(2)]);
var state_47754__$1 = state_47754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47754__$1,inst_47752);
} else {
if((state_val_47755 === (12))){
var inst_47718 = (state_47754[(7)]);
var inst_47742 = cljs.core.vec.call(null,inst_47718);
var state_47754__$1 = state_47754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47754__$1,(15),out,inst_47742);
} else {
if((state_val_47755 === (2))){
var state_47754__$1 = state_47754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47754__$1,(4),ch);
} else {
if((state_val_47755 === (11))){
var inst_47734 = (state_47754[(2)]);
var inst_47735 = (new Array(n));
var inst_47718 = inst_47735;
var inst_47719 = (0);
var state_47754__$1 = (function (){var statearr_47766 = state_47754;
(statearr_47766[(10)] = inst_47734);

(statearr_47766[(7)] = inst_47718);

(statearr_47766[(8)] = inst_47719);

return statearr_47766;
})();
var statearr_47767_47797 = state_47754__$1;
(statearr_47767_47797[(2)] = null);

(statearr_47767_47797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (9))){
var inst_47718 = (state_47754[(7)]);
var inst_47732 = cljs.core.vec.call(null,inst_47718);
var state_47754__$1 = state_47754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47754__$1,(11),out,inst_47732);
} else {
if((state_val_47755 === (5))){
var inst_47718 = (state_47754[(7)]);
var inst_47727 = (state_47754[(11)]);
var inst_47719 = (state_47754[(8)]);
var inst_47722 = (state_47754[(9)]);
var inst_47726 = (inst_47718[inst_47719] = inst_47722);
var inst_47727__$1 = (inst_47719 + (1));
var inst_47728 = (inst_47727__$1 < n);
var state_47754__$1 = (function (){var statearr_47768 = state_47754;
(statearr_47768[(12)] = inst_47726);

(statearr_47768[(11)] = inst_47727__$1);

return statearr_47768;
})();
if(cljs.core.truth_(inst_47728)){
var statearr_47769_47798 = state_47754__$1;
(statearr_47769_47798[(1)] = (8));

} else {
var statearr_47770_47799 = state_47754__$1;
(statearr_47770_47799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (14))){
var inst_47747 = (state_47754[(2)]);
var inst_47748 = cljs.core.async.close_BANG_.call(null,out);
var state_47754__$1 = (function (){var statearr_47772 = state_47754;
(statearr_47772[(13)] = inst_47747);

return statearr_47772;
})();
var statearr_47773_47800 = state_47754__$1;
(statearr_47773_47800[(2)] = inst_47748);

(statearr_47773_47800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (10))){
var inst_47738 = (state_47754[(2)]);
var state_47754__$1 = state_47754;
var statearr_47774_47801 = state_47754__$1;
(statearr_47774_47801[(2)] = inst_47738);

(statearr_47774_47801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47755 === (8))){
var inst_47718 = (state_47754[(7)]);
var inst_47727 = (state_47754[(11)]);
var tmp47771 = inst_47718;
var inst_47718__$1 = tmp47771;
var inst_47719 = inst_47727;
var state_47754__$1 = (function (){var statearr_47775 = state_47754;
(statearr_47775[(7)] = inst_47718__$1);

(statearr_47775[(8)] = inst_47719);

return statearr_47775;
})();
var statearr_47776_47802 = state_47754__$1;
(statearr_47776_47802[(2)] = null);

(statearr_47776_47802[(1)] = (2));


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
});})(c__44117__auto___47788,out))
;
return ((function (switch__43799__auto__,c__44117__auto___47788,out){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_47780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47780[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_47780[(1)] = (1));

return statearr_47780;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_47754){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_47754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e47781){if((e47781 instanceof Object)){
var ex__43803__auto__ = e47781;
var statearr_47782_47803 = state_47754;
(statearr_47782_47803[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47804 = state_47754;
state_47754 = G__47804;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_47754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_47754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___47788,out))
})();
var state__44119__auto__ = (function (){var statearr_47783 = f__44118__auto__.call(null);
(statearr_47783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___47788);

return statearr_47783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___47788,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47805 = [];
var len__39562__auto___47880 = arguments.length;
var i__39563__auto___47881 = (0);
while(true){
if((i__39563__auto___47881 < len__39562__auto___47880)){
args47805.push((arguments[i__39563__auto___47881]));

var G__47882 = (i__39563__auto___47881 + (1));
i__39563__auto___47881 = G__47882;
continue;
} else {
}
break;
}

var G__47807 = args47805.length;
switch (G__47807) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47805.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44117__auto___47884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44117__auto___47884,out){
return (function (){
var f__44118__auto__ = (function (){var switch__43799__auto__ = ((function (c__44117__auto___47884,out){
return (function (state_47850){
var state_val_47851 = (state_47850[(1)]);
if((state_val_47851 === (7))){
var inst_47846 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
var statearr_47852_47885 = state_47850__$1;
(statearr_47852_47885[(2)] = inst_47846);

(statearr_47852_47885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (1))){
var inst_47809 = [];
var inst_47810 = inst_47809;
var inst_47811 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47850__$1 = (function (){var statearr_47853 = state_47850;
(statearr_47853[(7)] = inst_47811);

(statearr_47853[(8)] = inst_47810);

return statearr_47853;
})();
var statearr_47854_47886 = state_47850__$1;
(statearr_47854_47886[(2)] = null);

(statearr_47854_47886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (4))){
var inst_47814 = (state_47850[(9)]);
var inst_47814__$1 = (state_47850[(2)]);
var inst_47815 = (inst_47814__$1 == null);
var inst_47816 = cljs.core.not.call(null,inst_47815);
var state_47850__$1 = (function (){var statearr_47855 = state_47850;
(statearr_47855[(9)] = inst_47814__$1);

return statearr_47855;
})();
if(inst_47816){
var statearr_47856_47887 = state_47850__$1;
(statearr_47856_47887[(1)] = (5));

} else {
var statearr_47857_47888 = state_47850__$1;
(statearr_47857_47888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (15))){
var inst_47840 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
var statearr_47858_47889 = state_47850__$1;
(statearr_47858_47889[(2)] = inst_47840);

(statearr_47858_47889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (13))){
var state_47850__$1 = state_47850;
var statearr_47859_47890 = state_47850__$1;
(statearr_47859_47890[(2)] = null);

(statearr_47859_47890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (6))){
var inst_47810 = (state_47850[(8)]);
var inst_47835 = inst_47810.length;
var inst_47836 = (inst_47835 > (0));
var state_47850__$1 = state_47850;
if(cljs.core.truth_(inst_47836)){
var statearr_47860_47891 = state_47850__$1;
(statearr_47860_47891[(1)] = (12));

} else {
var statearr_47861_47892 = state_47850__$1;
(statearr_47861_47892[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (3))){
var inst_47848 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47850__$1,inst_47848);
} else {
if((state_val_47851 === (12))){
var inst_47810 = (state_47850[(8)]);
var inst_47838 = cljs.core.vec.call(null,inst_47810);
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47850__$1,(15),out,inst_47838);
} else {
if((state_val_47851 === (2))){
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47850__$1,(4),ch);
} else {
if((state_val_47851 === (11))){
var inst_47818 = (state_47850[(10)]);
var inst_47814 = (state_47850[(9)]);
var inst_47828 = (state_47850[(2)]);
var inst_47829 = [];
var inst_47830 = inst_47829.push(inst_47814);
var inst_47810 = inst_47829;
var inst_47811 = inst_47818;
var state_47850__$1 = (function (){var statearr_47862 = state_47850;
(statearr_47862[(7)] = inst_47811);

(statearr_47862[(11)] = inst_47830);

(statearr_47862[(12)] = inst_47828);

(statearr_47862[(8)] = inst_47810);

return statearr_47862;
})();
var statearr_47863_47893 = state_47850__$1;
(statearr_47863_47893[(2)] = null);

(statearr_47863_47893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (9))){
var inst_47810 = (state_47850[(8)]);
var inst_47826 = cljs.core.vec.call(null,inst_47810);
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47850__$1,(11),out,inst_47826);
} else {
if((state_val_47851 === (5))){
var inst_47811 = (state_47850[(7)]);
var inst_47818 = (state_47850[(10)]);
var inst_47814 = (state_47850[(9)]);
var inst_47818__$1 = f.call(null,inst_47814);
var inst_47819 = cljs.core._EQ_.call(null,inst_47818__$1,inst_47811);
var inst_47820 = cljs.core.keyword_identical_QMARK_.call(null,inst_47811,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47821 = (inst_47819) || (inst_47820);
var state_47850__$1 = (function (){var statearr_47864 = state_47850;
(statearr_47864[(10)] = inst_47818__$1);

return statearr_47864;
})();
if(cljs.core.truth_(inst_47821)){
var statearr_47865_47894 = state_47850__$1;
(statearr_47865_47894[(1)] = (8));

} else {
var statearr_47866_47895 = state_47850__$1;
(statearr_47866_47895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (14))){
var inst_47843 = (state_47850[(2)]);
var inst_47844 = cljs.core.async.close_BANG_.call(null,out);
var state_47850__$1 = (function (){var statearr_47868 = state_47850;
(statearr_47868[(13)] = inst_47843);

return statearr_47868;
})();
var statearr_47869_47896 = state_47850__$1;
(statearr_47869_47896[(2)] = inst_47844);

(statearr_47869_47896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (10))){
var inst_47833 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
var statearr_47870_47897 = state_47850__$1;
(statearr_47870_47897[(2)] = inst_47833);

(statearr_47870_47897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (8))){
var inst_47818 = (state_47850[(10)]);
var inst_47810 = (state_47850[(8)]);
var inst_47814 = (state_47850[(9)]);
var inst_47823 = inst_47810.push(inst_47814);
var tmp47867 = inst_47810;
var inst_47810__$1 = tmp47867;
var inst_47811 = inst_47818;
var state_47850__$1 = (function (){var statearr_47871 = state_47850;
(statearr_47871[(7)] = inst_47811);

(statearr_47871[(14)] = inst_47823);

(statearr_47871[(8)] = inst_47810__$1);

return statearr_47871;
})();
var statearr_47872_47898 = state_47850__$1;
(statearr_47872_47898[(2)] = null);

(statearr_47872_47898[(1)] = (2));


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
});})(c__44117__auto___47884,out))
;
return ((function (switch__43799__auto__,c__44117__auto___47884,out){
return (function() {
var cljs$core$async$state_machine__43800__auto__ = null;
var cljs$core$async$state_machine__43800__auto____0 = (function (){
var statearr_47876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47876[(0)] = cljs$core$async$state_machine__43800__auto__);

(statearr_47876[(1)] = (1));

return statearr_47876;
});
var cljs$core$async$state_machine__43800__auto____1 = (function (state_47850){
while(true){
var ret_value__43801__auto__ = (function (){try{while(true){
var result__43802__auto__ = switch__43799__auto__.call(null,state_47850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43802__auto__;
}
break;
}
}catch (e47877){if((e47877 instanceof Object)){
var ex__43803__auto__ = e47877;
var statearr_47878_47899 = state_47850;
(statearr_47878_47899[(5)] = ex__43803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47900 = state_47850;
state_47850 = G__47900;
continue;
} else {
return ret_value__43801__auto__;
}
break;
}
});
cljs$core$async$state_machine__43800__auto__ = function(state_47850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43800__auto____1.call(this,state_47850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43800__auto____0;
cljs$core$async$state_machine__43800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43800__auto____1;
return cljs$core$async$state_machine__43800__auto__;
})()
;})(switch__43799__auto__,c__44117__auto___47884,out))
})();
var state__44119__auto__ = (function (){var statearr_47879 = f__44118__auto__.call(null);
(statearr_47879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44117__auto___47884);

return statearr_47879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44119__auto__);
});})(c__44117__auto___47884,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1452464338738