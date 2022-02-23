import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		hasCart:  false,
		hasOrder: false,
		
		orderInfo: {},//这是订单信息。只能有一单。
		userInfo: {},
		cartInfo: {},
	},
	mutations: {
		login(state, provider) {//登陆的状态

			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',  
			    data: provider  
			}) 
			// console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({  
                key: 'userInfo'  
            })
		},
		setOrder(state,provider){
			console.log('调用 order');
			state.hasOrder = true;			
			state.orderInfo = provider;
			uni.setStorage({
				key: 'orderInfo',
				data: provider
			})
		},
		clearOrder(state){
			state.hasCart = false;
			state.orderInfo = {};
			uni.removeStorage({
				key: 'orderInfo'
			})
		},
		editCart(state, provider) {//登陆的状态
			console.log('调用editCart');
			state.hasCart = true;
			state.cartInfo = provider;
			uni.setStorage({//缓存用户登陆状态
			    key: 'cartInfo',  
			    data: provider  
			}) 
			console.log(state.cartInfo);
			console.log(state.hasCart);
		},
		clearCartAll(state){
			state.cartInfo = {};
			uni.removeStorage({  
			    key: 'cartInfo'  
			})
		}
	},
	actions: {
	
	}
})

export default store
