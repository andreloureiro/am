// Compiled by ClojureScript 1.7.228 {}
goog.provide('am.remote');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
am.remote.post_query = (function am$remote$post_query(url){
return (function (p__42675,cb){
var map__42676 = p__42675;
var map__42676__$1 = ((((!((map__42676 == null)))?((((map__42676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42676):map__42676);
var remote = cljs.core.get.call(null,map__42676__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
return goog.net.XhrIo.send(url,((function (map__42676,map__42676__$1,remote){
return (function (e){
var transit_response = e.target.getResponseText();
var response = cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),transit_response);
cljs.core.println.call(null,[cljs.core.str("[REMOTE] "),cljs.core.str(remote),cljs.core.str(" -> "),cljs.core.str(response)].join(''));

return cb.call(null,response);
});})(map__42676,map__42676__$1,remote))
,"POST",cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),remote),{"Content-Type": "application/transit+json"});
});
});

//# sourceMappingURL=remote.js.map?rel=1452464328249