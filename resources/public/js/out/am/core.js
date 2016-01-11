// Compiled by ClojureScript 1.7.228 {}
goog.provide('am.core');
goog.require('cljs.core');
goog.require('am.components.app');
goog.require('om.next');
goog.require('am.reconciler');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"AM");
am.core.mount_BANG_ = (function am$core$mount_BANG_(){
console.time("AM Root");

om.next.add_root_BANG_.call(null,am.reconciler.reconciler,am.components.app.App,document.getElementById("root"));

console.timeEnd("AM Root");

return om.next.add_root_BANG_.call(null,am.reconciler.reconciler,am.components.app.App,document.getElementById("root"));
});
am.core.mount_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1452475045479