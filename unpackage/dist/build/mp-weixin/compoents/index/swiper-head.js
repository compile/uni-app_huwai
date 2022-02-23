(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["compoents/index/swiper-head"],{"011c":function(t,e,n){"use strict";n.r(e);var i=n("91f4"),u=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=u.a},"205f":function(t,e,n){"use strict";n.r(e);var i=n("98b1"),u=n("011c");for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);n("2fe3");var r,a=n("f0c5"),o=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"2d8155a0",null,!1,i["a"],r);e["default"]=o.exports},"2fe3":function(t,e,n){"use strict";var i=n("df31"),u=n.n(i);u.a},"91f4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{tablist:Array,tabindex:Number,linewidth:Number,scroll:Number,itemwidth:{type:String,default:""}},methods:{tabtap:function(t){this.$emit("tabtap",t)},watchscroll:function(t){this.$emit("watchscroll",t)}},mounted:function(){var e=t.createSelectorQuery().in(this);e.select("#big").boundingClientRect((function(t){console.log("节点宽度"+t.width)})).exec()}};e.default=n}).call(this,n("543d")["default"])},"98b1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var u=function(){var t=this,e=t.$createElement;t._self._c},c=[]},df31:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'compoents/index/swiper-head-create-component',
    {
        'compoents/index/swiper-head-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("205f"))
        })
    },
    [['compoents/index/swiper-head-create-component']]
]);
