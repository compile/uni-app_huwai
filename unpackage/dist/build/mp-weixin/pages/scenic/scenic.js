(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scenic/scenic"],{"3cd0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{page:1,classList:[],classId:"",topicList:[],loadStatus:"loadmore",current:0,topDisList:[],swiperList:[],postList:[],topicHotList:[]}},computed:{msgCount:function(){return this.$store.state.messegeNum}},onLoad:function(){this.getClassList(),this.getDisTopic(),this.getLinkList(),this.getHotTopic()},onShow:function(){this.getMsgNum()},onReachBottom:function(){this.page++,this.getClassPost()},methods:{getHotTopic:function(){var t=this;this.$H.get("topic/hot").then((function(e){t.topicHotList=e.result}))},jumpTopic:function(e){console.log("jumpTopic:"+e),t.navigateTo({url:"/pages/topic/detail?id="+e})},previewImage:function(e,n){t.previewImage({current:e,urls:n})},getClassPost:function(){var t=this;this.loadStatus="loading",this.$H.get("post/classPostList",{class_id:this.classId,page:this.page}).then((function(e){t.postList=t.postList.concat(e.result.data),e.result.current_page===e.result.last_page||0===e.result.last_page?t.loadStatus="nomore":t.loadStatus="loadmore"}))},onSwiper:function(e){var n=this.swiperList[e].url;-1==n.indexOf("http://")&&-1==n.indexOf("https://")?t.navigateTo({url:n}):t.navigateTo({url:"/pages/webview/webview?src="+n})},getDisTopic:function(){var t=this;this.$H.get("discuss/list",{order:"hot"}).then((function(e){t.topDisList=e.result.data}))},getLinkList:function(){var t=this;this.$H.post("link/list",{type:3,page:1}).then((function(e){t.swiperList=e.result.data}))},getMsgNum:function(){var t=this;this.$H.post("message/num").then((function(e){t.$store.state.messegeNum=[0,0,0,e.result.all_count,0]}))},getClassList:function(){var t=this,e=this;this.$H.get("topic/classList").then((function(n){t.classList=n.result,t.classId?t.classList.forEach((function(s,i){s.cate_id==e.classId&&(t.classId=n.result[i].cate_id,t.swichMenu(i))})):(t.classId=n.result[0].cate_id,t.getClassPost())}))},tabChange:function(t){this.page=1,this.current=t,this.classId=this.classList[t].cate_id,this.postList=[],this.getClassPost()},toSearch:function(){t.navigateTo({url:"/pages/search/search"})}}};e.default=n}).call(this,n("543d")["default"])},"47bb":function(t,e,n){"use strict";n.r(e);var s=n("efb0"),i=n("cfcc");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("56cb");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],s["b"],s["c"],!1,null,"31224900",null,!1,s["a"],o);e["default"]=c.exports},"56cb":function(t,e,n){"use strict";var s=n("fefa"),i=n.n(s);i.a},9980:function(t,e,n){"use strict";(function(t){n("251e");s(n("66fd"));var e=s(n("47bb"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},cfcc:function(t,e,n){"use strict";n.r(e);var s=n("3cd0"),i=n.n(s);for(var u in s)"default"!==u&&function(t){n.d(e,t,(function(){return s[t]}))}(u);e["default"]=i.a},efb0:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s}));var s={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"be15"))},uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,"169f"))},uSwiper:function(){return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null,"dce6"))},uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,"b277"))},uAvatar:function(){return n.e("uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"c135"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"312f"))},qTabbar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/q-view/components/q-tabbar/q-tabbar")]).then(n.bind(null,"1815"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.postList,(function(e,n){var s=t.__get_orig(e),i=e.userInfo.username.substring(0,10),u=t._f("timeFrom")(e.create_time),o=4===e.type?t._f("date")(e.vote_info.expire_time,"yyyy年mm月dd日hh时MM分"):null;return{$orig:s,g0:i,f0:u,f1:o}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},u=[]},fefa:function(t,e,n){}},[["9980","common/runtime","common/vendor"]]]);