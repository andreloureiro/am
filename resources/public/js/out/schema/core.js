// Compiled by ClojureScript 1.7.228 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (schema.core.spec[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$);
} else {
var m__39160__auto____$1 = (schema.core.spec["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (schema.core.explain[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$);
} else {
var m__39160__auto____$1 = (schema.core.explain["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.spec.core.run_checker.call(null,(function (s,params){
return schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker.call(null,schema__$1);
return ((function (c){
return (function (value){
var temp__4425__auto___44191 = c.call(null,value);
if(cljs.core.truth_(temp__4425__auto___44191)){
var error_44193 = temp__4425__auto___44191;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_44193)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_44193], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator.call(null,schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition.call(null,s,(function (p1__44194_SHARP_){
var and__38492__auto__ = !((p1__44194_SHARP_ == null));
if(and__38492__auto__){
var or__38504__auto__ = (klass === p1__44194_SHARP_.constructor);
if(or__38504__auto__){
return or__38504__auto__;
} else {
return p1__44194_SHARP_ instanceof klass;
}
} else {
return and__38492__auto__;
}
}),(function (p1__44195_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44195_SHARP_),klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition.call(null,this$,this$);
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var class_schema = temp__4423__auto__;
return schema.spec.variant.variant_spec.call(null,pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec.call(null,pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var more_schema = temp__4423__auto__;
return schema.core.explain.call(null,more_schema);
} else {
var pred__44199 = cljs.core._EQ_;
var expr__44200 = this$;
if(cljs.core.truth_(pred__44199.call(null,null,expr__44200))){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
if(cljs.core.truth_(pred__44199.call(null,Boolean,expr__44200))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_(pred__44199.call(null,Number,expr__44200))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_(pred__44199.call(null,null,expr__44200))){
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
} else {
if(cljs.core.truth_(pred__44199.call(null,Date,expr__44200))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_(pred__44199.call(null,cljs.core.UUID,expr__44200))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44207,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44209 = (((k44207 instanceof cljs.core.Keyword))?k44207.fqn:null);
switch (G__44209) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44207,else__39121__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.AnythingSchema{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44206){
var self__ = this;
var G__44206__$1 = this;
return (new cljs.core.RecordIter((0),G__44206__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44206){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44212 = cljs.core.keyword_identical_QMARK_;
var expr__44213 = k__39126__auto__;
if(cljs.core.truth_(pred__44212.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__44213))){
return (new schema.core.AnythingSchema(G__44206,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44206),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44206){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__44206,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__44208){
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__44208),null,cljs.core.dissoc.call(null,G__44208,new cljs.core.Keyword(null,"_","_",1453416199)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44257,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44259 = (((k44257 instanceof cljs.core.Keyword))?k44257.fqn:null);
switch (G__44259) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44257,else__39121__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.EqSchema{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44256){
var self__ = this;
var G__44256__$1 = this;
return (new cljs.core.RecordIter((0),G__44256__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44256){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44263 = cljs.core.keyword_identical_QMARK_;
var expr__44264 = k__39126__auto__;
if(cljs.core.truth_(pred__44263.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__44264))){
return (new schema.core.EqSchema(G__44256,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44256),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44256){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__44256,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__44254_SHARP_){
return cljs.core._EQ_.call(null,self__.v,p1__44254_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__44255_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44255_SHARP_),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__44258){
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__44258),null,cljs.core.dissoc.call(null,G__44258,new cljs.core.Keyword(null,"v","v",21465059)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44298,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44300 = (((k44298 instanceof cljs.core.Keyword))?k44298.fqn:null);
switch (G__44300) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44298,else__39121__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Isa{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44297){
var self__ = this;
var G__44297__$1 = this;
return (new cljs.core.RecordIter((0),G__44297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44297){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44301 = cljs.core.keyword_identical_QMARK_;
var expr__44302 = k__39126__auto__;
if(cljs.core.truth_(pred__44301.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44302))){
return (new schema.core.Isa(G__44297,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44301.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__44302))){
return (new schema.core.Isa(self__.h,G__44297,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44297),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44297){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__44297,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__44295_SHARP_){
return cljs.core.isa_QMARK_.call(null,self__.h,p1__44295_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__44296_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),p1__44296_SHARP_),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__44299){
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44299),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__44299),null,cljs.core.dissoc.call(null,G__44299,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args44314 = [];
var len__39562__auto___44319 = arguments.length;
var i__39563__auto___44320 = (0);
while(true){
if((i__39563__auto___44320 < len__39562__auto___44319)){
args44314.push((arguments[i__39563__auto___44320]));

var G__44324 = (i__39563__auto___44320 + (1));
i__39563__auto___44320 = G__44324;
continue;
} else {
}
break;
}

var G__44316 = args44314.length;
switch (G__44316) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44314.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44332,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44334 = (((k44332 instanceof cljs.core.Keyword))?k44332.fqn:null);
switch (G__44334) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44332,else__39121__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.EnumSchema{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44331){
var self__ = this;
var G__44331__$1 = this;
return (new cljs.core.RecordIter((0),G__44331__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44331){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44338 = cljs.core.keyword_identical_QMARK_;
var expr__44339 = k__39126__auto__;
if(cljs.core.truth_(pred__44338.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__44339))){
return (new schema.core.EnumSchema(G__44331,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44331),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44331){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__44331,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__44329_SHARP_){
return cljs.core.contains_QMARK_.call(null,self__.vs,p1__44329_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__44330_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44330_SHARP_),self__.vs);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__44333){
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__44333),null,cljs.core.dissoc.call(null,G__44333,new cljs.core.Keyword(null,"vs","vs",-2022097090)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__39569__auto__ = [];
var len__39562__auto___44393 = arguments.length;
var i__39563__auto___44394 = (0);
while(true){
if((i__39563__auto___44394 < len__39562__auto___44393)){
args__39569__auto__.push((arguments[i__39563__auto___44394]));

var G__44396 = (i__39563__auto___44394 + (1));
i__39563__auto___44394 = G__44396;
continue;
} else {
}
break;
}

var argseq__39570__auto__ = ((((0) < args__39569__auto__.length))?(new cljs.core.IndexedSeq(args__39569__auto__.slice((0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__39570__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq44388){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44388));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44400,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44404 = (((k44400 instanceof cljs.core.Keyword))?k44400.fqn:null);
switch (G__44404) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44400,else__39121__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Predicate{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44399){
var self__ = this;
var G__44399__$1 = this;
return (new cljs.core.RecordIter((0),G__44399__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44399){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44408 = cljs.core.keyword_identical_QMARK_;
var expr__44409 = k__39126__auto__;
if(cljs.core.truth_(pred__44408.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__44409))){
return (new schema.core.Predicate(G__44399,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44408.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__44409))){
return (new schema.core.Predicate(self__.p_QMARK_,G__44399,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44399),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44399){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__44399,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__44398_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44398_SHARP_),self__.pred_name);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__44402){
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__44402),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__44402),null,cljs.core.dissoc.call(null,G__44402,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args44504 = [];
var len__39562__auto___44527 = arguments.length;
var i__39563__auto___44528 = (0);
while(true){
if((i__39563__auto___44528 < len__39562__auto___44527)){
args44504.push((arguments[i__39563__auto___44528]));

var G__44532 = (i__39563__auto___44528 + (1));
i__39563__auto___44528 = G__44532;
continue;
} else {
}
break;
}

var G__44521 = args44504.length;
switch (G__44521) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44504.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.call(null,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44588,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44598 = (((k44588 instanceof cljs.core.Keyword))?k44588.fqn:null);
switch (G__44598) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44588,else__39121__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Protocol{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44587){
var self__ = this;
var G__44587__$1 = this;
return (new cljs.core.RecordIter((0),G__44587__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44587){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44613 = cljs.core.keyword_identical_QMARK_;
var expr__44614 = k__39126__auto__;
if(cljs.core.truth_(pred__44613.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__44614))){
return (new schema.core.Protocol(G__44587,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44587),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44587){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__44587,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__44585_SHARP_){
return new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,p1__44585_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__44586_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44586_SHARP_),schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__44592){
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__44592),null,cljs.core.dissoc.call(null,G__44592,new cljs.core.Keyword(null,"p","p",151049309)),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,cljs.core.some_fn.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__4991__4992__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__4991__4992__auto__),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
),schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__44739_SHARP_){
return cljs.core.re_find.call(null,this$__$1,p1__44739_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__44740_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44740_SHARP_),schema.core.explain.call(null,this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core44795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core44795 = (function (meta44796){
this.meta44796 = meta44796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core44795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44797,meta44796__$1){
var self__ = this;
var _44797__$1 = this;
return (new schema.core.t_schema$core44795(meta44796__$1));
});

schema.core.t_schema$core44795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44797){
var self__ = this;
var _44797__$1 = this;
return self__.meta44796;
});

schema.core.t_schema$core44795.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core44795.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__44793_SHARP_){
return (p1__44793_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__44794_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44794_SHARP_),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
));
});

schema.core.t_schema$core44795.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t_schema$core44795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44796","meta44796",-409078968,null)], null);
});

schema.core.t_schema$core44795.cljs$lang$type = true;

schema.core.t_schema$core44795.cljs$lang$ctorStr = "schema.core/t_schema$core44795";

schema.core.t_schema$core44795.cljs$lang$ctorPrWriter = (function (this__39102__auto__,writer__39103__auto__,opt__39104__auto__){
return cljs.core._write.call(null,writer__39103__auto__,"schema.core/t_schema$core44795");
});

schema.core.__GT_t_schema$core44795 = (function schema$core$__GT_t_schema$core44795(meta44796){
return (new schema.core.t_schema$core44795(meta44796));
});

}

return (new schema.core.t_schema$core44795(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44818,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44820 = (((k44818 instanceof cljs.core.Keyword))?k44818.fqn:null);
switch (G__44820) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44818,else__39121__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Maybe{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44817){
var self__ = this;
var G__44817__$1 = this;
return (new cljs.core.RecordIter((0),G__44817__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44817){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44824 = cljs.core.keyword_identical_QMARK_;
var expr__44825 = k__39126__auto__;
if(cljs.core.truth_(pred__44824.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__44825))){
return (new schema.core.Maybe(G__44817,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44817),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44817){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__44817,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq.call(null,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__44819){
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__44819),null,cljs.core.dissoc.call(null,G__44819,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44850,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44853 = (((k44850 instanceof cljs.core.Keyword))?k44850.fqn:null);
switch (G__44853) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44850,else__39121__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.NamedSchema{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44849){
var self__ = this;
var G__44849__$1 = this;
return (new cljs.core.RecordIter((0),G__44849__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44849){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44855 = cljs.core.keyword_identical_QMARK_;
var expr__44856 = k__39126__auto__;
if(cljs.core.truth_(pred__44855.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__44856))){
return (new schema.core.NamedSchema(G__44849,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44855.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__44856))){
return (new schema.core.NamedSchema(self__.schema,G__44849,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44849),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44849){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__44849,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),((function (this$__$1){
return (function (p1__44848_SHARP_){
return schema.utils.__GT_NamedError.call(null,self__.name,p1__44848_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__44851){
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__44851),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__44851),null,cljs.core.dissoc.call(null,G__44851,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44902,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44907 = (((k44902 instanceof cljs.core.Keyword))?k44902.fqn:null);
switch (G__44907) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44902,else__39121__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Either{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44901){
var self__ = this;
var G__44901__$1 = this;
return (new cljs.core.RecordIter((0),G__44901__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44901){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44908 = cljs.core.keyword_identical_QMARK_;
var expr__44909 = k__39126__auto__;
if(cljs.core.truth_(pred__44908.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__44909))){
return (new schema.core.Either(G__44901,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44901),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44901){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__44901,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__39276__auto__ = ((function (this$__$1){
return (function schema$core$iter__44915(s__44916){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__44916__$1 = s__44916;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44916__$1);
if(temp__4425__auto__){
var s__44916__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44916__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__44916__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__44918 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__44917 = (0);
while(true){
if((i__44917 < size__39275__auto__)){
var s = cljs.core._nth.call(null,c__39274__auto__,i__44917);
cljs.core.chunk_append.call(null,b__44918,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__44947 = (i__44917 + (1));
i__44917 = G__44947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44918),schema$core$iter__44915.call(null,cljs.core.chunk_rest.call(null,s__44916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44918),null);
}
} else {
var s = cljs.core.first.call(null,s__44916__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__44915.call(null,cljs.core.rest.call(null,s__44916__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__39276__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__44900_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44900_SHARP_),new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null));
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__44904){
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__44904),null,cljs.core.dissoc.call(null,G__44904,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__39569__auto__ = [];
var len__39562__auto___44956 = arguments.length;
var i__39563__auto___44957 = (0);
while(true){
if((i__39563__auto___44957 < len__39562__auto___44956)){
args__39569__auto__.push((arguments[i__39563__auto___44957]));

var G__44958 = (i__39563__auto___44957 + (1));
i__39563__auto___44957 = G__44958;
continue;
} else {
}
break;
}

var argseq__39570__auto__ = ((((0) < args__39569__auto__.length))?(new cljs.core.IndexedSeq(args__39569__auto__.slice((0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__39570__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq44954){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44954));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k44962,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__44965 = (((k44962 instanceof cljs.core.Keyword))?k44962.fqn:null);
switch (G__44965) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44962,else__39121__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44961){
var self__ = this;
var G__44961__$1 = this;
return (new cljs.core.RecordIter((0),G__44961__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__44961){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__44970 = cljs.core.keyword_identical_QMARK_;
var expr__44971 = k__39126__auto__;
if(cljs.core.truth_(pred__44970.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__44971))){
return (new schema.core.ConditionalSchema(G__44961,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44970.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__44971))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__44961,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__44961),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__44961){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__44961,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__39276__auto__ = ((function (this$__$1){
return (function schema$core$iter__44973(s__44974){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__44974__$1 = s__44974;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44974__$1);
if(temp__4425__auto__){
var s__44974__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44974__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__44974__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__44976 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__44975 = (0);
while(true){
if((i__44975 < size__39275__auto__)){
var vec__44983 = cljs.core._nth.call(null,c__39274__auto__,i__44975);
var p = cljs.core.nth.call(null,vec__44983,(0),null);
var s = cljs.core.nth.call(null,vec__44983,(1),null);
cljs.core.chunk_append.call(null,b__44976,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__45015 = (i__44975 + (1));
i__44975 = G__45015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44976),schema$core$iter__44973.call(null,cljs.core.chunk_rest.call(null,s__44974__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44976),null);
}
} else {
var vec__44985 = cljs.core.first.call(null,s__44974__$2);
var p = cljs.core.nth.call(null,vec__44985,(0),null);
var s = cljs.core.nth.call(null,vec__44985,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__44973.call(null,cljs.core.rest.call(null,s__44974__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__39276__auto__.call(null,self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__44959_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__44959_SHARP_),(function (){var or__38504__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,self__.preds_and_schemas))){
return cljs.core.symbol.call(null,schema.utils.fn_name.call(null,cljs.core.ffirst.call(null,self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})());
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__44986){
var vec__44987 = p__44986;
var pred = cljs.core.nth.call(null,vec__44987,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__44987,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,schema.utils.fn_name.call(null,pred)),schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__44963){
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__44963),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__44963),null,cljs.core.dissoc.call(null,G__44963,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__39569__auto__ = [];
var len__39562__auto___45031 = arguments.length;
var i__39563__auto___45032 = (0);
while(true){
if((i__39563__auto___45032 < len__39562__auto___45031)){
args__39569__auto__.push((arguments[i__39563__auto___45032]));

var G__45034 = (i__39563__auto___45032 + (1));
i__39563__auto___45032 = G__45034;
continue;
} else {
}
break;
}

var argseq__39570__auto__ = ((((0) < args__39569__auto__.length))?(new cljs.core.IndexedSeq(args__39569__auto__.slice((0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__39570__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq.call(null,preds_and_schemas)) && ((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))) || ((cljs.core.last.call(null,preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema((function (){var iter__39276__auto__ = (function schema$core$iter__45022(s__45023){
return (new cljs.core.LazySeq(null,(function (){
var s__45023__$1 = s__45023;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45023__$1);
if(temp__4425__auto__){
var s__45023__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45023__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__45023__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__45025 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__45024 = (0);
while(true){
if((i__45024 < size__39275__auto__)){
var vec__45028 = cljs.core._nth.call(null,c__39274__auto__,i__45024);
var pred = cljs.core.nth.call(null,vec__45028,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__45028,(1),null);
cljs.core.chunk_append.call(null,b__45025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));

var G__45043 = (i__45024 + (1));
i__45024 = G__45043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45025),schema$core$iter__45022.call(null,cljs.core.chunk_rest.call(null,s__45023__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45025),null);
}
} else {
var vec__45029 = cljs.core.first.call(null,s__45023__$2);
var pred = cljs.core.nth.call(null,vec__45029,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__45029,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),schema$core$iter__45022.call(null,cljs.core.rest.call(null,s__45023__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__39276__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))?cljs.core.last.call(null,preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq45019){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45019));
});

/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__39159__auto__ = (((this$ == null))?null:this$);
var m__39160__auto__ = (schema.core.precondition[goog.typeOf(x__39159__auto__)]);
if(!((m__39160__auto__ == null))){
return m__39160__auto__.call(null,this$);
} else {
var m__39160__auto____$1 = (schema.core.precondition["_"]);
if(!((m__39160__auto____$1 == null))){
return m__39160__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.call(null,cljs.core.complement.call(null,this$__$1.pre),cljs.core.apply.call(null,cljs.core.some_fn,(function (){var iter__39276__auto__ = ((function (this$__$1){
return (function schema$core$iter__45062(s__45063){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__45063__$1 = s__45063;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45063__$1);
if(temp__4425__auto__){
var s__45063__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45063__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__45063__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__45065 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__45064 = (0);
while(true){
if((i__45064 < size__39275__auto__)){
var map__45079 = cljs.core._nth.call(null,c__39274__auto__,i__45064);
var map__45079__$1 = ((((!((map__45079 == null)))?((((map__45079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45079):map__45079);
var guard = cljs.core.get.call(null,map__45079__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__45079__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append.call(null,b__45065,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))));

var G__45122 = (i__45064 + (1));
i__45064 = G__45122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45065),schema$core$iter__45062.call(null,cljs.core.chunk_rest.call(null,s__45063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45065),null);
}
} else {
var map__45081 = cljs.core.first.call(null,s__45063__$2);
var map__45081__$1 = ((((!((map__45081 == null)))?((((map__45081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45081):map__45081);
var guard = cljs.core.get.call(null,map__45081__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__45081__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons.call(null,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))),schema$core$iter__45062.call(null,cljs.core.rest.call(null,s__45063__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__39276__auto__.call(null,this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k45145,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__45152 = (((k45145 instanceof cljs.core.Keyword))?k45145.fqn:null);
switch (G__45152) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45145,else__39121__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.CondPre{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45144){
var self__ = this;
var G__45144__$1 = this;
return (new cljs.core.RecordIter((0),G__45144__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__45144){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__45160 = cljs.core.keyword_identical_QMARK_;
var expr__45161 = k__39126__auto__;
if(cljs.core.truth_(pred__45160.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__45161))){
return (new schema.core.CondPre(G__45144,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__45144),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__45144){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__45144,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__39276__auto__ = ((function (this$__$1){
return (function schema$core$iter__45165(s__45166){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__45166__$1 = s__45166;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45166__$1);
if(temp__4425__auto__){
var s__45166__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45166__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__45166__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__45168 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__45167 = (0);
while(true){
if((i__45167 < size__39275__auto__)){
var s = cljs.core._nth.call(null,c__39274__auto__,i__45167);
cljs.core.chunk_append.call(null,b__45168,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__45180 = (i__45167 + (1));
i__45167 = G__45180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45168),schema$core$iter__45165.call(null,cljs.core.chunk_rest.call(null,s__45166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45168),null);
}
} else {
var s = cljs.core.first.call(null,s__45166__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__45165.call(null,cljs.core.rest.call(null,s__45166__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__39276__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__45143_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__45143_SHARP_),new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null));
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__45147){
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__45147),null,cljs.core.dissoc.call(null,G__45147,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__39569__auto__ = [];
var len__39562__auto___45187 = arguments.length;
var i__39563__auto___45188 = (0);
while(true){
if((i__39563__auto___45188 < len__39562__auto___45187)){
args__39569__auto__.push((arguments[i__39563__auto___45188]));

var G__45189 = (i__39563__auto___45188 + (1));
i__39563__auto___45188 = G__45189;
continue;
} else {
}
break;
}

var argseq__39570__auto__ = ((((0) < args__39569__auto__.length))?(new cljs.core.IndexedSeq(args__39569__auto__.slice((0)),(0))):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__39570__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq45185){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45185));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k45192,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__45195 = (((k45192 instanceof cljs.core.Keyword))?k45192.fqn:null);
switch (G__45195) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45192,else__39121__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Constrained{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$ = true;

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45191){
var self__ = this;
var G__45191__$1 = this;
return (new cljs.core.RecordIter((0),G__45191__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__45191){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__45197 = cljs.core.keyword_identical_QMARK_;
var expr__45198 = k__39126__auto__;
if(cljs.core.truth_(pred__45197.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__45198))){
return (new schema.core.Constrained(G__45191,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45197.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__45198))){
return (new schema.core.Constrained(self__.schema,G__45191,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45197.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__45198))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__45191,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__45191),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__45191){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__45191,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = true;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition.call(null,this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__45190_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__45190_SHARP_),self__.post_name);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.post_name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null));
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__45194){
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45194),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__45194),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__45194),null,cljs.core.dissoc.call(null,G__45194,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var args45303 = [];
var len__39562__auto___45306 = arguments.length;
var i__39563__auto___45307 = (0);
while(true){
if((i__39563__auto___45307 < len__39562__auto___45306)){
args45303.push((arguments[i__39563__auto___45307]));

var G__45308 = (i__39563__auto___45307 + (1));
i__39563__auto___45307 = G__45308;
continue;
} else {
}
break;
}

var G__45305 = args45303.length;
switch (G__45305) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45303.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.call(null,s,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k45314,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__45316 = (((k45314 instanceof cljs.core.Keyword))?k45314.fqn:null);
switch (G__45316) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45314,else__39121__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.call(null,((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = t.call(null,x);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,tx))){
return tx;
} else {
return f.call(null,(function (){var or__38504__auto__ = tx;
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
return x;
}
})());
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__45312_SHARP_){
return schema.spec.core.sub_checker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__45312_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse.call(null,self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Both{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45313){
var self__ = this;
var G__45313__$1 = this;
return (new cljs.core.RecordIter((0),G__45313__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,cljs.core.comp.call(null,schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__45313){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__45320 = cljs.core.keyword_identical_QMARK_;
var expr__45321 = k__39126__auto__;
if(cljs.core.truth_(pred__45320.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__45321))){
return (new schema.core.Both(G__45313,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__45313),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__45313){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__45313,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__45315){
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__45315),null,cljs.core.dissoc.call(null,G__45315,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__39569__auto__ = [];
var len__39562__auto___45384 = arguments.length;
var i__39563__auto___45385 = (0);
while(true){
if((i__39563__auto___45385 < len__39562__auto___45384)){
args__39569__auto__.push((arguments[i__39563__auto___45385]));

var G__45386 = (i__39563__auto___45385 + (1));
i__39563__auto___45385 = G__45386;
continue;
} else {
}
break;
}

var argseq__39570__auto__ = ((((0) < args__39569__auto__.length))?(new cljs.core.IndexedSeq(args__39569__auto__.slice((0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__39570__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq45382){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45382));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
schema.core.var_name = (function schema$core$var_name(v){
var map__45390 = cljs.core.meta.call(null,v);
var map__45390__$1 = ((((!((map__45390 == null)))?((((map__45390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45390):map__45390);
var ns = cljs.core.get.call(null,map__45390__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__45390__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.call(null,[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k45394,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__45398 = (((k45394 instanceof cljs.core.Keyword))?k45394.fqn:null);
switch (G__45398) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45394,else__39121__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Recursive{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45393){
var self__ = this;
var G__45393__$1 = this;
return (new cljs.core.RecordIter((0),G__45393__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__45393){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__45401 = cljs.core.keyword_identical_QMARK_;
var expr__45402 = k__39126__auto__;
if(cljs.core.truth_(pred__45401.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__45402))){
return (new schema.core.Recursive(G__45393,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__45393),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__45393){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__45393,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.var_name.call(null,self__.derefable)),new cljs.core.Symbol(null,"var","var",870848730,null)):new cljs.core.Symbol(null,"...","...",-1926939749,null))),new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null));
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__45395){
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__45395),null,cljs.core.dissoc.call(null,G__45395,new cljs.core.Keyword(null,"derefable","derefable",377265868)),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not an IDeref: %s",schema__$1)));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || (x.cljs$core$IAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k45428,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__45430 = (((k45428 instanceof cljs.core.Keyword))?k45428.fqn:null);
switch (G__45430) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45428,else__39121__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Atomic{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$ = true;

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45427){
var self__ = this;
var G__45427__$1 = this;
return (new cljs.core.RecordIter((0),G__45427__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__45427){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__45431 = cljs.core.keyword_identical_QMARK_;
var expr__45432 = k__39126__auto__;
if(cljs.core.truth_(pred__45431.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__45432))){
return (new schema.core.Atomic(G__45427,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__45427),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__45427){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__45427,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = true;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__4991__4992__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__4991__4992__auto__),new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null));
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
item_fn.call(null,cljs.core.deref.call(null,coll));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.atom.call(null,cljs.core.first.call(null,xs));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"atom","atom",1243487874,null));
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__45429){
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45429),null,cljs.core.dissoc.call(null,G__45429,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic.call(null,schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k45444,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__45451 = (((k45444 instanceof cljs.core.Keyword))?k45444.fqn:null);
switch (G__45451) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45444,else__39121__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.RequiredKey{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45443){
var self__ = this;
var G__45443__$1 = this;
return (new cljs.core.RecordIter((0),G__45443__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__45443){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__45484 = cljs.core.keyword_identical_QMARK_;
var expr__45485 = k__39126__auto__;
if(cljs.core.truth_(pred__45484.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__45485))){
return (new schema.core.RequiredKey(G__45443,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__45443),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__45443){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__45443,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__45448){
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__45448),null,cljs.core.dissoc.call(null,G__45448,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k45639,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__45643 = (((k45639 instanceof cljs.core.Keyword))?k45639.fqn:null);
switch (G__45643) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45639,else__39121__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.OptionalKey{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45638){
var self__ = this;
var G__45638__$1 = this;
return (new cljs.core.RecordIter((0),G__45638__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__45638){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__45651 = cljs.core.keyword_identical_QMARK_;
var expr__45652 = k__39126__auto__;
if(cljs.core.truth_(pred__45651.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__45652))){
return (new schema.core.OptionalKey(G__45638,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__45638),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__45638){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__45638,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__45640){
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__45640),null,cljs.core.dissoc.call(null,G__45640,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__38504__auto__ = schema.core.required_key_QMARK_.call(null,ks);
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
return schema.core.optional_key_QMARK_.call(null,ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k45853,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__45863 = (((k45853 instanceof cljs.core.Keyword))?k45853.fqn:null);
switch (G__45863) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45853,else__39121__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.MapEntry{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45852){
var self__ = this;
var G__45852__$1 = this;
return (new cljs.core.RecordIter((0),G__45852__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__45852){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__45872 = cljs.core.keyword_identical_QMARK_;
var expr__45873 = k__39126__auto__;
if(cljs.core.truth_(pred__45872.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__45873))){
return (new schema.core.MapEntry(G__45852,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45872.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__45873))){
return (new schema.core.MapEntry(self__.key_schema,G__45852,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__45852),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__45852){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__45852,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.key.call(null,e));

return e;
});})(this$__$1))
),schema.spec.collection.one_element.call(null,true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.val.call(null,e));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__45882,p__45883,_){
var vec__45884 = p__45882;
var k = cljs.core.nth.call(null,vec__45884,(0),null);
var vec__45885 = p__45883;
var xk = cljs.core.nth.call(null,vec__45885,(0),null);
var xv = cljs.core.nth.call(null,vec__45885,(1),null);
var temp__4423__auto__ = schema.utils.error_val.call(null,xk);
if(cljs.core.truth_(temp__4423__auto__)){
var k_err = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val.call(null,xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.val_schema)),schema.core.explain.call(null,self__.key_schema)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__45855){
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__45855),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__45855),null,cljs.core.dissoc.call(null,G__45855,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explicit_schema_key.call(null,kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain.call(null,kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,this$);
var duplicate_keys_45962 = cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema){
return (function (p1__45942_SHARP_){
return (cljs.core.count.call(null,p1__45942_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_.call(null,duplicate_keys_45962)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",duplicate_keys_45962)));
}

return cljs.core.concat.call(null,(function (){var iter__39276__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__45952(s__45953){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__45953__$1 = s__45953;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45953__$1);
if(temp__4425__auto__){
var s__45953__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45953__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__45953__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__45955 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__45954 = (0);
while(true){
if((i__45954 < size__39275__auto__)){
var vec__45960 = cljs.core._nth.call(null,c__39274__auto__,i__45954);
var k = cljs.core.nth.call(null,vec__45960,(0),null);
var v = cljs.core.nth.call(null,vec__45960,(1),null);
cljs.core.chunk_append.call(null,b__45955,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (i__45954,rk,required_QMARK_,vec__45960,k,v,c__39274__auto__,size__39275__auto__,b__45955,s__45953__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(i__45954,rk,required_QMARK_,vec__45960,k,v,c__39274__auto__,size__39275__auto__,b__45955,s__45953__$2,temp__4425__auto__,extra_keys_schema))
);
})());

var G__45969 = (i__45954 + (1));
i__45954 = G__45969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45955),schema$core$map_elements_$_iter__45952.call(null,cljs.core.chunk_rest.call(null,s__45953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45955),null);
}
} else {
var vec__45961 = cljs.core.first.call(null,s__45953__$2);
var k = cljs.core.nth.call(null,vec__45961,(0),null);
var v = cljs.core.nth.call(null,vec__45961,(1),null);
return cljs.core.cons.call(null,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (rk,required_QMARK_,vec__45961,k,v,s__45953__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__45961,k,v,s__45953__$2,temp__4425__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__45952.call(null,cljs.core.rest.call(null,s__45953__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__39276__auto__.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema));
})(),((extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,cljs.core.keep.call(null,schema.utils.error_val,elts),(function (){var iter__39276__auto__ = (function schema$core$map_error_$_iter__45989(s__45990){
return (new cljs.core.LazySeq(null,(function (){
var s__45990__$1 = s__45990;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45990__$1);
if(temp__4425__auto__){
var s__45990__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45990__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__45990__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__45992 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__45991 = (0);
while(true){
if((i__45991 < size__39275__auto__)){
var vec__45999 = cljs.core._nth.call(null,c__39274__auto__,i__45991);
var k = cljs.core.nth.call(null,vec__45999,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__45999,(1),null);
cljs.core.chunk_append.call(null,b__45992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__46003 = (i__45991 + (1));
i__45991 = G__46003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45992),schema$core$map_error_$_iter__45989.call(null,cljs.core.chunk_rest.call(null,s__45990__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45992),null);
}
} else {
var vec__46001 = cljs.core.first.call(null,s__45990__$2);
var k = cljs.core.nth.call(null,vec__46001,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__46001,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__45989.call(null,cljs.core.rest.call(null,s__45990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__39276__auto__.call(null,extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$,cljs.core.map_QMARK_,(function (p1__4991__4992__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__4991__4992__auto__),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
})),(function (p1__46005_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__46005_SHARP_);
}),schema.core.map_elements.call(null,this$),schema.core.map_error.call(null));
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__39276__auto__ = (function schema$core$map_explain_$_iter__46015(s__46016){
return (new cljs.core.LazySeq(null,(function (){
var s__46016__$1 = s__46016;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46016__$1);
if(temp__4425__auto__){
var s__46016__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46016__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__46016__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__46018 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__46017 = (0);
while(true){
if((i__46017 < size__39275__auto__)){
var vec__46021 = cljs.core._nth.call(null,c__39274__auto__,i__46017);
var k = cljs.core.nth.call(null,vec__46021,(0),null);
var v = cljs.core.nth.call(null,vec__46021,(1),null);
cljs.core.chunk_append.call(null,b__46018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null));

var G__46026 = (i__46017 + (1));
i__46017 = G__46026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46018),schema$core$map_explain_$_iter__46015.call(null,cljs.core.chunk_rest.call(null,s__46016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46018),null);
}
} else {
var vec__46023 = cljs.core.first.call(null,s__46016__$2);
var k = cljs.core.nth.call(null,vec__46023,(0),null);
var v = cljs.core.nth.call(null,vec__46023,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null),schema$core$map_explain_$_iter__46015.call(null,cljs.core.rest.call(null,s__46016__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__39276__auto__.call(null,this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__4991__4992__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__4991__4992__auto__),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.first.call(null,this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k46040,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__46043 = (((k46040 instanceof cljs.core.Keyword))?k46040.fqn:null);
switch (G__46043) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46040,else__39121__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Queue{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46039){
var self__ = this;
var G__46039__$1 = this;
return (new cljs.core.RecordIter((0),G__46039__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__46039){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__46046 = cljs.core.keyword_identical_QMARK_;
var expr__46047 = k__39126__auto__;
if(cljs.core.truth_(pred__46046.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__46047))){
return (new schema.core.Queue(G__46039,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__46039),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__46039){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__46039,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__4991__4992__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__4991__4992__auto__),new cljs.core.Symbol(null,"queue?","queue?",-880510795,null));
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"queue","queue",-1198599890,null));
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__46041){
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__46041),null,cljs.core.dissoc.call(null,G__46041,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k46062,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__46064 = (((k46062 instanceof cljs.core.Keyword))?k46062.fqn:null);
switch (G__46064) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46062,else__39121__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.One{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46061){
var self__ = this;
var G__46061__$1 = this;
return (new cljs.core.RecordIter((0),G__46061__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__46061){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__46067 = cljs.core.keyword_identical_QMARK_;
var expr__46068 = k__39126__auto__;
if(cljs.core.truth_(pred__46067.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__46068))){
return (new schema.core.One(G__46061,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46067.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__46068))){
return (new schema.core.One(self__.schema,G__46061,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46067.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__46068))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__46061,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__46061),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__46061){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__46061,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__46063){
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__46063),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__46063),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__46063),null,cljs.core.dissoc.call(null,G__46063,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__46102 = cljs.core.split_with.call(null,(function (p1__46096_SHARP_){
return ((p1__46096_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__46096_SHARP_)));
}),s);
var required = cljs.core.nth.call(null,vec__46102,(0),null);
var more = cljs.core.nth.call(null,vec__46102,(1),null);
var vec__46103 = cljs.core.split_with.call(null,((function (vec__46102,required,more){
return (function (p1__46097_SHARP_){
var and__38492__auto__ = (p1__46097_SHARP_ instanceof schema.core.One);
if(and__38492__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__46097_SHARP_);
} else {
return and__38492__auto__;
}
});})(vec__46102,required,more))
,more);
var optional = cljs.core.nth.call(null,vec__46103,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__46103,(1),null);
if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__46102,required,more,vec__46103,optional,more__$1){
return (function (p1__46098_SHARP_){
return !((p1__46098_SHARP_ instanceof schema.core.One));
});})(vec__46102,required,more,vec__46103,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Sequence schema %s does not match [one* optional* rest-schema?]",s)));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_.call(null,x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__46106_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__46106_SHARP_),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(this$__$1))
),cljs.core.vec,(function (){var vec__46109 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__46109,(0),null);
var multi = cljs.core.nth.call(null,vec__46109,(1),null);
return cljs.core.concat.call(null,(function (){var iter__39276__auto__ = ((function (vec__46109,singles,multi,this$__$1){
return (function schema$core$iter__46110(s__46111){
return (new cljs.core.LazySeq(null,((function (vec__46109,singles,multi,this$__$1){
return (function (){
var s__46111__$1 = s__46111;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46111__$1);
if(temp__4425__auto__){
var s__46111__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46111__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__46111__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__46113 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__46112 = (0);
while(true){
if((i__46112 < size__39275__auto__)){
var s = cljs.core._nth.call(null,c__39274__auto__,i__46112);
cljs.core.chunk_append.call(null,b__46113,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (i__46112,required_QMARK_,s,c__39274__auto__,size__39275__auto__,b__46113,s__46111__$2,temp__4425__auto__,vec__46109,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (i__46112,temp__4423__auto__,required_QMARK_,s,c__39274__auto__,size__39275__auto__,b__46113,s__46111__$2,temp__4425__auto__,vec__46109,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(i__46112,temp__4423__auto__,required_QMARK_,s,c__39274__auto__,size__39275__auto__,b__46113,s__46111__$2,temp__4425__auto__,vec__46109,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(i__46112,required_QMARK_,s,c__39274__auto__,size__39275__auto__,b__46113,s__46111__$2,temp__4425__auto__,vec__46109,singles,multi,this$__$1))
);
})());

var G__46128 = (i__46112 + (1));
i__46112 = G__46128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46113),schema$core$iter__46110.call(null,cljs.core.chunk_rest.call(null,s__46111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46113),null);
}
} else {
var s = cljs.core.first.call(null,s__46111__$2);
return cljs.core.cons.call(null,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (required_QMARK_,s,s__46111__$2,temp__4425__auto__,vec__46109,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (temp__4423__auto__,required_QMARK_,s,s__46111__$2,temp__4425__auto__,vec__46109,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(temp__4423__auto__,required_QMARK_,s,s__46111__$2,temp__4425__auto__,vec__46109,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(required_QMARK_,s,s__46111__$2,temp__4425__auto__,vec__46109,singles,multi,this$__$1))
);
})(),schema$core$iter__46110.call(null,cljs.core.rest.call(null,s__46111__$2)));
}
} else {
return null;
}
break;
}
});})(vec__46109,singles,multi,this$__$1))
,null,null));
});})(vec__46109,singles,multi,this$__$1))
;
return iter__39276__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.call(null,schema.utils.error_val,elts);
if(cljs.core.seq.call(null,extra)){
return cljs.core.conj.call(null,head,schema.utils.error_val.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,extra)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__46115 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__46115,(0),null);
var multi = cljs.core.nth.call(null,vec__46115,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__39276__auto__ = ((function (vec__46115,singles,multi,this$__$1){
return (function schema$core$iter__46116(s__46117){
return (new cljs.core.LazySeq(null,((function (vec__46115,singles,multi,this$__$1){
return (function (){
var s__46117__$1 = s__46117;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46117__$1);
if(temp__4425__auto__){
var s__46117__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46117__$2)){
var c__39274__auto__ = cljs.core.chunk_first.call(null,s__46117__$2);
var size__39275__auto__ = cljs.core.count.call(null,c__39274__auto__);
var b__46119 = cljs.core.chunk_buffer.call(null,size__39275__auto__);
if((function (){var i__46118 = (0);
while(true){
if((i__46118 < size__39275__auto__)){
var s = cljs.core._nth.call(null,c__39274__auto__,i__46118);
cljs.core.chunk_append.call(null,b__46119,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__46133 = (i__46118 + (1));
i__46118 = G__46133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46119),schema$core$iter__46116.call(null,cljs.core.chunk_rest.call(null,s__46117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46119),null);
}
} else {
var s = cljs.core.first.call(null,s__46117__$2);
return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),schema$core$iter__46116.call(null,cljs.core.rest.call(null,s__46117__$2)));
}
} else {
return null;
}
break;
}
});})(vec__46115,singles,multi,this$__$1))
,null,null));
});})(vec__46115,singles,multi,this$__$1))
;
return iter__39276__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k46141,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__46143 = (((k46141 instanceof cljs.core.Keyword))?k46141.fqn:null);
switch (G__46143) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46141,else__39121__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.Record{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46140){
var self__ = this;
var G__46140__$1 = this;
return (new cljs.core.RecordIter((0),G__46140__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__46140){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__46145 = cljs.core.keyword_identical_QMARK_;
var expr__46146 = k__39126__auto__;
if(cljs.core.truth_(pred__46145.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__46146))){
return (new schema.core.Record(G__46140,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46145.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__46146))){
return (new schema.core.Record(self__.klass,G__46140,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__46140),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__46140){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__46140,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,(function (){var p = schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__46137_SHARP_){
return (p1__46137_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__46138_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__46138_SHARP_),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
);
var temp__4423__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return cljs.core.some_fn.call(null,p,schema.spec.core.precondition.call(null,this$__$1,evf,((function (evf,temp__4423__auto__,p,this$__$1){
return (function (p1__46139_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__46139_SHARP_),new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null));
});})(evf,temp__4423__auto__,p,this$__$1))
));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)),schema.core.map_elements.call(null,self__.schema),schema.core.map_error.call(null));
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__46142){
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__46142),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__46142),null,cljs.core.dissoc.call(null,G__46142,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return cljs.core.with_meta.call(null,(new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__46168 = cljs.core.split_with.call(null,(function (p1__46165_SHARP_){
return (p1__46165_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__46168,(0),null);
var more = cljs.core.nth.call(null,vec__46168,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__46168,required,more){
return (function (p1__46166_SHARP_){
return schema.core.explain.call(null,p1__46166_SHARP_.schema);
});})(vec__46168,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39118__auto__,k__39119__auto__){
var self__ = this;
var this__39118__auto____$1 = this;
return cljs.core._lookup.call(null,this__39118__auto____$1,k__39119__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39120__auto__,k46173,else__39121__auto__){
var self__ = this;
var this__39120__auto____$1 = this;
var G__46179 = (((k46173 instanceof cljs.core.Keyword))?k46173.fqn:null);
switch (G__46179) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46173,else__39121__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39132__auto__,writer__39133__auto__,opts__39134__auto__){
var self__ = this;
var this__39132__auto____$1 = this;
var pr_pair__39135__auto__ = ((function (this__39132__auto____$1){
return (function (keyval__39136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,cljs.core.pr_writer,""," ","",opts__39134__auto__,keyval__39136__auto__);
});})(this__39132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39133__auto__,pr_pair__39135__auto__,"#schema.core.FnSchema{",", ","}",opts__39134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46172){
var self__ = this;
var G__46172__$1 = this;
return (new cljs.core.RecordIter((0),G__46172__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39116__auto__){
var self__ = this;
var this__39116__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39112__auto__){
var self__ = this;
var this__39112__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39122__auto__){
var self__ = this;
var this__39122__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39113__auto__){
var self__ = this;
var this__39113__auto____$1 = this;
var h__38939__auto__ = self__.__hash;
if(!((h__38939__auto__ == null))){
return h__38939__auto__;
} else {
var h__38939__auto____$1 = cljs.core.hash_imap.call(null,this__39113__auto____$1);
self__.__hash = h__38939__auto____$1;

return h__38939__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39114__auto__,other__39115__auto__){
var self__ = this;
var this__39114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__38492__auto__ = other__39115__auto__;
if(cljs.core.truth_(and__38492__auto__)){
var and__38492__auto____$1 = (this__39114__auto____$1.constructor === other__39115__auto__.constructor);
if(and__38492__auto____$1){
return cljs.core.equiv_map.call(null,this__39114__auto____$1,other__39115__auto__);
} else {
return and__38492__auto____$1;
}
} else {
return and__38492__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39127__auto__,k__39128__auto__){
var self__ = this;
var this__39127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__39128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39127__auto____$1),self__.__meta),k__39128__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39128__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39125__auto__,k__39126__auto__,G__46172){
var self__ = this;
var this__39125__auto____$1 = this;
var pred__46183 = cljs.core.keyword_identical_QMARK_;
var expr__46184 = k__39126__auto__;
if(cljs.core.truth_(pred__46183.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__46184))){
return (new schema.core.FnSchema(G__46172,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46183.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__46184))){
return (new schema.core.FnSchema(self__.output_schema,G__46172,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39126__auto__,G__46172),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39130__auto__){
var self__ = this;
var this__39130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39117__auto__,G__46172){
var self__ = this;
var this__39117__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__46172,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39123__auto__,entry__39124__auto__){
var self__ = this;
var this__39123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39124__auto__)){
return cljs.core._assoc.call(null,this__39123__auto____$1,cljs.core._nth.call(null,entry__39124__auto__,(0)),cljs.core._nth.call(null,entry__39124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39123__auto____$1,entry__39124__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__4991__4992__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__4991__4992__auto__),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__39152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__39152__auto__,writer__39153__auto__){
return cljs.core._write.call(null,writer__39153__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__46177){
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__46177),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__46177),null,cljs.core.dissoc.call(null,G__46177,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.call(null,schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__38504__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__38504__auto__)){
return or__38504__auto__;
} else {
var m__4792__auto__ = cljs.core.meta.call(null,f);
var k__4793__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__4423__auto__ = cljs.core.find.call(null,m__4792__auto__,k__4793__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__4794__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__4794__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__4793__auto__,m__4792__auto__)));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length);
});

//# sourceMappingURL=core.js.map?rel=1452464337085