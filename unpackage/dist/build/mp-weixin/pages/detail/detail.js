(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"0258":function(t,e,n){"use strict";(function(t){n("251e");a(n("66fd"));var e=a(n("8467"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"044c":function(t,e,n){"use strict";n.r(e);var a=n("ec08"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"25db":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},8467:function(t,e,n){"use strict";n.r(e);var a=n("25db"),r=n("044c");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("b977");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=s.exports},b977:function(t,e,n){"use strict";var a=n("e3fb"),r=n.n(a);r.a},e3fb:function(t,e,n){},ec08:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,o){try{var u=t[i](o),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(a,r)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function u(t){i(o,a,r,u,s,"next",t)}function s(t){i(o,a,r,u,s,"throw",t)}u(void 0)}))}}var u=function(){n.e("components/share").then(function(){return resolve(n("8d8e"))}.bind(null,n)).catch(n.oe)},s={components:{share:u},data:function(){return{loaded:!1,currentEpd:1,data:{guessList:[{},{},{},{}]},shareList:[]}},onLoad:function(){var e=this;return o(a.default.mark((function n(){var r,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.json("detailData");case 2:return r=n.sent,n.next=5,e.$api.json("shareList");case 5:i=n.sent,e.loaded=!0,e.data=r,e.shareList=i,t.setNavigationBarTitle({title:r.title});case 10:case"end":return n.stop()}}),n)})))()},methods:{imageOnLoad:function(t,e){this.$set(this.data[t][e],"loaded","loaded")},changeEpd:function(t){var e=this.data.episodeList,n=e[t];this.$api.msg("切换到第".concat(n,"项")),this.currentEpd=n},share:function(){this.$refs.share.toggleMask()},favorite:function(){console.log("收藏与否:"),console.log(this.data),this.data.favorite=!this.data.favorite}},onBackPress:function(){if(this.$refs.share.show)return this.$refs.share.toggleMask(),!0}};e.default=s}).call(this,n("543d")["default"])}},[["0258","common/runtime","common/vendor"]]]);