(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/grouplist"],{"05fe":function(e,t,n){"use strict";(function(e){n("251e");o(n("66fd"));var t=o(n("2139"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"0aed":function(e,t,n){},"17a1":function(e,t,n){"use strict";n.r(t);var o=n("51ee"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},2139:function(e,t,n){"use strict";n.r(t);var o=n("9e29"),r=n("17a1");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("777f");var i,u=n("f0c5"),c=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=c.exports},"51ee":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,o,r,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(o,r)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function u(e){a(i,o,r,u,c,"next",e)}function c(e){a(i,o,r,u,c,"throw",e)}u(void 0)}))}}var u=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("bd91"))}.bind(null,n)).catch(n.oe)},c={components:{uniLoadMore:u},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[],pagenum:1}},onLoad:function(e){this.cateId=e.tid,this.loadCateList(e.fid,e.sid),this.loadData()},onPageScroll:function(e){e.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{loadCateList:function(e,t){var n=this;return i(o.default.mark((function t(){var r,a,i;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$myRequest({url:"/api/goods/goodscate"});case 2:r=t.sent,a=r.data.res,console.log(e),i=a.filter((function(t){return t.pId==e})),i.forEach((function(e){var t=a.filter((function(t){return t.pId==e.id}));e.child=t})),n.cateList=i;case 8:case"end":return t.stop()}}),t)})))()},loadData:function(){var t=arguments,n=this;return i(o.default.mark((function r(){var a,i,u,c,s,d,l,f,p;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a=t.length>0&&void 0!==t[0]?t[0]:"add",i=t.length>1?t[1]:void 0,console.log("this.cateId:"+n.cateId),"add"!==a){o.next=9;break}if("nomore"!==n.loadingType){o.next=6;break}return o.abrupt("return");case 6:n.loadingType="loading",o.next=10;break;case 9:n.loadingType="more";case 10:return u=n.pagenum,c=n.cateId,s=n.priceOrder,d=n.filterIndex,l={page:u,catId:c,priceOrder:s,filterIndex:d},o.next=17,n.$myRequest({url:"/api/goodsgroup/goodsGroupList",method:"post",data:l});case 17:f=o.sent,console.log(f),p=f.data.res,"refresh"===a&&(n.goodsList=[],n.pagenum=1),1===n.filterIndex&&p.sort((function(e,t){return t.sales-e.sales})),2===n.filterIndex&&p.sort((function(e,t){return 1==n.priceOrder?e.price-t.price:t.price-e.price})),n.goodsList=n.goodsList.concat(p),console.log("这里加入分类和页数控制"),console.log("filterIndex:"+n.filterIndex),console.log("priceOrder:"+n.priceOrder),n.loadingType=n.goodsList.length>20?"nomore":"more","refresh"===a?(1==i?e.hideLoading():e.stopPullDownRefresh(),n.pagenum=1):n.pagenum++,console.log("this.pagenum:"+n.pagenum);case 30:case"end":return o.stop()}}),r)})))()},tabClick:function(t){this.filterIndex===t&&2!==t||(this.filterIndex=t,this.priceOrder=2===t?1===this.priceOrder?2:1:0,e.pageScrollTo({duration:300,scrollTop:0}),this.pagenum=1,this.loadData("refresh",1),e.showLoading({title:"正在加载"}))},toggleCateMask:function(e){var t=this,n="show"===e?10:300,o="show"===e?1:0;this.cateMaskState=2,setTimeout((function(){t.cateMaskState=o}),n)},changeCate:function(t){this.cateId=t.id,this.toggleCateMask(),e.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),e.showLoading({title:"正在加载"})},navToDetailPage:function(t){var n=t.id;e.navigateTo({url:"/pages/product/goodsGroup?id=".concat(n)})},stopPrevent:function(){}}};t.default=c}).call(this,n("543d")["default"])},"777f":function(e,t,n){"use strict";var o=n("0aed"),r=n.n(o);r.a},"9e29":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"bd91"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[]}},[["05fe","common/runtime","common/vendor"]]]);