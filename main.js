import Vue from 'vue'
import store from './store'
import App from './App'
import {toast} from 'common/utils.js'
import Json from './Json' //测试用数据


import articleapi from './config/api'
import base from './common/app'
import h5Api from './common/sdk/H5Api'



import request from './utils/request.js'
Vue.prototype.$H = request;
// config配置文件
import config from './utils/config.js';  
Vue.prototype.$c = config;

// 公共方法
import fun from './utils/function.js';  
Vue.prototype.$f = fun;

// Qui公共JS
import Qui from './uni_modules/q-view/js_sdk/index.js';  
Vue.prototype.$q = Qui;

import uView from "uview-ui";
Vue.use(uView);

/*无状态提示信息*/
Vue.prototype.$alert = function(msg = '', icon = 'none', url = '', openType = 'navigate') {
	base.alert(msg, icon, url, openType);
};

/*弹出加载框*/
Vue.prototype.$loading = function(msg = '', mask = true) {
	base.loading(msg, mask);
};

/*是否登录*/
Vue.prototype.$initLogin = function() {
	if (!uni.getStorageSync('isLogin')) {
		base.login();
	}
};

/*初始化页面标题*/
Vue.prototype.$initPageTitle = function(pageTitle = '7FuncC') {
	// #ifdef H5
	document.title = pageTitle;
	// #endif
};

/**
 *  因工具函数属于公司资产, 所以直接在Vue实例挂载几个常用的函数
 *  所有测试用数据均存放于根目录json.js
 *  
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}



Vue.prototype.$fire = new Vue();
Vue.prototype.$api = {msg, json, prePage};





Vue.prototype.$articleapi = articleapi
Vue.prototype.$app = base

import { myRequest } from './util/api.js'
Vue.prototype.$myRequest = myRequest
Vue.prototype.$store = store // 挂载以后你可以通过this.$store.state.hasLogin获取值。
Vue.prototype.$toast = toast
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()