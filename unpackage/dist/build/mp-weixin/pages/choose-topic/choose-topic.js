(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/choose-topic/choose-topic"],{3067:function(t,e,n){},"3ee5":function(t,e,n){"use strict";n.r(e);var o=n("45b4"),i=n("feb1");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("4125");var c,u=n("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"0af90a2a",null,!1,o["a"],c);e["default"]=r.exports},4125:function(t,e,n){"use strict";var o=n("3067"),i=n.n(o);i.a},"45b4":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,"b277"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.topicList,(function(e,n){var o=t.__get_orig(e),i=e.topic_name.substring(0,10),a=t._f("replace")(e.description);return{$orig:o,g0:i,f0:a}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},a=[]},"7f6d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{topicList:[],loadStatus:"loadmore",page:1}},onLoad:function(t){this.getTopicList()},filters:{replace:function(t){return t=t.replace(/\n/g,""),t.substring(0,40)}},onReachBottom:function(){this.page++,this.getTopicList()},methods:{getTopicList:function(){var t=this;this.$H.get("topic/userJoinTopic",{page:this.page}).then((function(e){t.topicList=t.topicList.concat(e.result.data),e.result.current_page===e.result.last_page||0===e.result.last_page?t.loadStatus="nomore":t.loadStatus="loadmore"}))},chooseTopic:function(e,n){var o=getCurrentPages(),i=(o[o.length-1],o[o.length-2]);i.$vm.form.topic_id=e,i.$vm.topicName=n,t.navigateBack()}}};e.default=n}).call(this,n("543d")["default"])},cf6b:function(t,e,n){"use strict";(function(t){n("251e");o(n("66fd"));var e=o(n("3ee5"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},feb1:function(t,e,n){"use strict";n.r(e);var o=n("7f6d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a}},[["cf6b","common/runtime","common/vendor"]]]);