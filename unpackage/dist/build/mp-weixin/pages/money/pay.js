(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/money/pay"],{"1c0c":function(e,t,n){},"488c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a")),a=(o(n("72de")),n("26cb"));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){c(o,r,a,i,u,"next",e)}function u(e){c(o,r,a,i,u,"throw",e)}i(void 0)}))}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={data:function(){return{payType:1,orderInfo:{},price:""}},computed:{},onLoad:function(e){this.loadpay(e)},methods:s(s({},(0,a.mapMutations)(["login","clearCartAll","editCart","setOrder","clearOrder"])),{},{changePayType:function(e){this.payType=e},loadpay:function(e){var t=this;return i(r.default.mark((function n(){var a,o,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.id,o={id:a},console.log("sendData"),console.log(o),n.next=6,t.$myRequest({url:"/api/pay/checkpay",method:"post",data:o});case 6:c=n.sent,console.log("checkpay:"+c.data),t.price=c.data.pay.price,t.payinfo=c.data.pay;case 10:case"end":return n.stop()}}),n)})))()},confirm:function(){var t=i(r.default.mark((function t(){var n,a,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.payType),n=this.payinfo,{payinfo:n},console.log("this.payinfo:"),console.log(this.payinfo),10,t.next=8,this.$myRequest({url:"/api/pay/wxPay?total=10"});case 8:return a=t.sent,console.log(a.data),t.abrupt("return");case 20:if(o=t.sent,console.log("checkpay:"+o.data.pay),0!=o.data.error){t.next=28;break}return t.abrupt("return");case 28:this.$alert("支付错误");case 29:e.requestPayment({provider:"wxpay",timeStamp:String(Date.now()),nonceStr:"A1B2C3D4E5",package:"prepay_id=wx20180101abcdefg",signType:"MD5",paySign:"",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}});case 30:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()})};t.default=l}).call(this,n("543d")["default"])},"5f44":function(e,t,n){"use strict";(function(e){n("251e");r(n("66fd"));var t=r(n("6d44"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"6d44":function(e,t,n){"use strict";n.r(t);var r=n("6f65"),a=n("757b");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("e9ae");var c,i=n("f0c5"),u=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=u.exports},"6f65":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"757b":function(e,t,n){"use strict";n.r(t);var r=n("488c"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},e9ae:function(e,t,n){"use strict";var r=n("1c0c"),a=n.n(r);a.a}},[["5f44","common/runtime","common/vendor"]]]);