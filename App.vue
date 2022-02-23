<script>
	/**
	 * vuex管理登陆状态，具体可以参考官方登陆模板示例
	 */
	import {
		mapMutations
	} from 'vuex';
	export default {
		methods: {
			...mapMutations(['login','editCart','setOrder'])
		},
		onLaunch: function() {//登陆的时候从缓存获得用户信息并记录。
			let userInfo = uni.getStorageSync('userInfo') || '';
			if(userInfo.id){
				//更新登陆状态
				uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						this.login(res.data);
					}
				});
			}
			
			let cartInfo = uni.getStorageSync('cartInfo') || '';
				//更新购物车状态
				uni.getStorage({
					key: 'cartInfo',
					success: (res) => {
						this.editCart(res.data);
					}
				});
				
			let orderInfo = uni.getStorageSync('orderInfo') || '';
					//更新购物车状态
					uni.getStorage({
						key: 'orderInfo',
						success: (res) => {
							this.setOrder(res.data);
							console.log('setorderInof is ok');
							console.log(res.data);
						}
					});

			console.log('onLaunch');
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>
<style>
	@import './common/uni.css';
	/*引入图标库*/
	@import './common/animate.css';
	@import './common/icon.css';
	@import './common/flexCoomn.css';
</style>