(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderDesc"],{"0c9b":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},a=[]},3277:function(e,t,n){"use strict";n.r(t);var r=n("d8db"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},"3d62":function(e,t,n){},8797:function(e,t,n){"use strict";n.r(t);var r=n("0c9b"),o=n("3277");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("eb58");var i,c=n("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=s.exports},d8db:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a")),o=(a(n("72de")),n("26cb"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,s,"next",e)}function s(e){i(a,r,o,c,s,"throw",e)}c(void 0)}))}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={data:function(){return{loadingText:"",orderDesc:[],showOrHidden68:!1,num:"",address:"",scenic:[],position:"这里写备注",list_goods:[{subject:"帐篷10MxL",price:"￥65.0",num:" X1"},{subject:"X80天幕",price:"￥65.0",num:" X1"},{subject:"X80桌椅",price:"￥65.0",num:" X1"},{subject:"X80餐车",price:"￥65.0",num:" X1"}],total_money:"￥65.0",page:0,apiUrl:"https://www.ymznkf.com/wx_server",id:"",del_id:""}},computed:u({},(0,o.mapState)(["hasLogin","userInfo"])),onLoad:function(e){var t=this;if(this,this.page=0,null!=e.id&&""!=e.id&&(this.id=e.id),console.log("options"),console.log(e),this.loadOrderDesc(e.id),0==this.orderDesc.status){0;this.timer=setInterval((function(){console.log("test"),t.loadOrderStatus(e.id)}),1e3)}},onUnload:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},onShow:function(){console.log("on show")},onPullDownRefresh:function(){this.Refresh()},methods:{loadOrderStatus:function(e){var t=this;return c(r.default.mark((function n(){var o,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("ididididid:"),console.log(e),o={id:e},n.next=5,t.$myRequest({url:"/api/order/orderStatus",method:"post",data:o});case 5:a=n.sent,t.orderDesc=a.data.res,console.log(t.orderDesc);case 8:case"end":return n.stop()}}),n)})))()},loadOrderDesc:function(e){var t=this;return c(r.default.mark((function n(){var o,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("ididididid:"),console.log(e),o={id:e},n.next=5,t.$myRequest({url:"/api/order/orderDesc",method:"post",data:o});case 5:a=n.sent,console.log(a.data),t.address=a.data.res.address,t.total_money=a.data.res.order_money,t.orderDesc=a.data.res,t.scenic=a.data.scenic,t.num=a.data.res.arrivenum,t.list_goods=JSON.parse(a.data.res.goodslist),console.log(t.orderDesc);case 14:case"end":return n.stop()}}),n)})))()},repay:function(){var t=this;return c(r.default.mark((function n(){var o,a,i,c,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.orderDesc,a=t.userInfo,i={orderDesc:o,userInfo:a},n.next=5,t.$myRequest({url:"/api/order/getbill",method:"post",data:i});case 5:c=n.sent,console.log(c.data),0==c.data.error?(s=c.data.orderinfo.id,t.orderDesc=c.data.orderinfo,e.navigateTo({url:"/pages/money/pay?id=".concat(s)})):t.$alert("错误了");case 8:case"end":return n.stop()}}),n)})))()},topay:function(){var t=this;return c(r.default.mark((function n(){var o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=t.orderDesc.id,e.navigateTo({url:"/pages/money/pay?id=".concat(o)});case 2:case"end":return n.stop()}}),n)})))()},order_completion_22_22_click:function(e){},order_completion_29_29_click:function(e){},icon_33_click:function(e){},order_completion_61_61_click:function(e){},order_completion_64_64_click:function(e){},Refresh:function(t){e.showLoading();var n=this,r=n.apiUrl+"{server_code_file_path}";console.log(r),e.request({url:r,data:{action:t,uid:n.getUid(),id:n.id,del_id:n.del_id,page:n.page},method:"GET",success:function(t){e.hideNavigationBarLoading(),e.stopPullDownRefresh(),e.hideLoading();var r=t.data;deal_listpages,n.num=r.num,n.total_money=r.total_money,n.address=r.address,n.position=r.position,null!=r.message&&""!=r.message&&e.showToast({title:r.message,icon:"none",duration:2e3}),null!=r.page&&""!=r.page&&r.page},fail:function(t){e.showToast({title:"服务器访问失败",icon:"none",duration:2e3}),console.log(t.data),console.log("is failed")}})}}};t.default=l}).call(this,n("543d")["default"])},e096:function(e,t,n){"use strict";(function(e){n("251e");r(n("66fd"));var t=r(n("8797"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},eb58:function(e,t,n){"use strict";var r=n("3d62"),o=n.n(r);o.a}},[["e096","common/runtime","common/vendor"]]]);