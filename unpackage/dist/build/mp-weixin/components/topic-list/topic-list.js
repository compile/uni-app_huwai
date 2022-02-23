(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/topic-list/topic-list"],{"03be":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={props:{list:Array,loadStatus:String},data:function(){return{}},filters:{replace:function(n){return n=n.replace(/\n/g,""),n.substring(0,40)}}};t.default=u},3263:function(n,t,e){},d59a:function(n,t,e){"use strict";var u=e("3263"),r=e.n(u);r.a},dca5:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={uImage:function(){return e.e("uview-ui/components/u-image/u-image").then(e.bind(null,"b277"))},uLoadmore:function(){return e.e("uview-ui/components/u-loadmore/u-loadmore").then(e.bind(null,"99cd"))},uEmpty:function(){return e.e("uview-ui/components/u-empty/u-empty").then(e.bind(null,"3977"))}},r=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.list,(function(t,e){var u=n.__get_orig(t),r=t.topic_name.substring(0,10),i=n._f("replace")(t.description);return{$orig:u,g0:r,f0:i}})));n.$mp.data=Object.assign({},{$root:{l0:e}})},i=[]},ee82:function(n,t,e){"use strict";e.r(t);var u=e("03be"),r=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=r.a},fae4:function(n,t,e){"use strict";e.r(t);var u=e("dca5"),r=e("ee82");for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);e("d59a");var a,o=e("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"54ac0a34",null,!1,u["a"],a);t["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/topic-list/topic-list-create-component',
    {
        'components/topic-list/topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fae4"))
        })
    },
    [['components/topic-list/topic-list-create-component']]
]);
