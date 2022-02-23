<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
<template>
	<view class="YmContent">
			<view class="order_completion_72">
				<view class="order_completion_70" v-if="orderDesc.status===0">
					<text decode="true" class="order_completion_18">您的确认号为</text>
					<text decode="true" class="num">{{num}}</text>
					<view class="order_completion_20">
						<text decode="true" class="order_completion_21">单号供核验</text>
						<image v-on:click="order_completion_22_22_click()"  src="/static/order_completion/images/order_completion_22_22.jpg" mode="scaleToFill" border="0"    class="order_completion_22"></image>
					</view>
					<text decode="true" class="order_completion_23">预计{{orderDesc.shipping_time}}到达</text>
				</view>
				<view class="order_completion_70" v-else-if="orderDesc.status===1">
					<text decode="true" class="order_completion_18">使用中</text>
					<text decode="true" @click="repay" class="num">归还</text>
					<view class="order_completion_20">
						<!-- <text decode="true" class="order_completion_21">愿您有个美好周末</text> -->
						<image v-on:click="order_completion_22_22_click()"  src="/static/order_completion/images/order_completion_22_22.jpg" mode="scaleToFill" border="0"    class="order_completion_22"></image>
					</view>
					<text decode="true" class="order_completion_23">愿您有个美好周末</text>
				</view>
				<view class="order_completion_70" v-else-if="orderDesc.status===2">
					<text decode="true" class="order_completion_18">确定完成</text>
					<text decode="true" class="num">时间</text>
					<view class="order_completion_20">
						<text decode="true" class="order_completion_21">这是</text>
						<image v-on:click="order_completion_22_22_click()"  src="/static/order_completion/images/order_completion_22_22.jpg" mode="scaleToFill" border="0"    class="order_completion_22"></image>
					</view>
					<text decode="true" class="order_completion_23">祝你生活愉快</text>
				</view>
				<view class="order_completion_70" v-else-if="orderDesc.status===3">
					<text decode="true"  class="order_completion_18">完成</text>
					<text decode="true"  class="order_completion_18">使用时长:{{orderDesc.duration}}</text>
					<text decode="true" class="num">完成</text>
					<view class="order_completion_20">
						<text decode="true"  class="order_completion_21">{{orderDesc.order_money}}</text>
						<image v-on:click="order_completion_22_22_click()"  src="/static/order_completion/images/order_completion_22_22.jpg" mode="scaleToFill" border="0"    class="order_completion_22"></image>
					</view>
				</view>
				<view class="order_completion_70" v-else-if="orderDesc.status===9">
					<text decode="true" class="order_completion_18">等待支付</text>
					<text decode="true"  class="order_completion_18">使用时长:{{orderDesc.duration}}</text>
					<text decode="true" class="num">{{orderDesc.order_money}}</text>
					<view class="order_completion_20">
						<text decode="true" @click="topay" class="order_completion_21">去支付</text>
						<image v-on:click="order_completion_22_22_click()"  src="/static/order_completion/images/order_completion_22_22.jpg" mode="scaleToFill" border="0"    class="order_completion_22"></image>
					</view>
				</view>
				<view class="order_completion_69">
					<view class="order_completion_74">
						<view class="order_completion_26">
							<text decode="true" class="order_completion_27">明细信息</text>
							<text decode="true" class="order_completion_28">收起</text>
							<image v-on:click="order_completion_29_29_click()"  src="/static/order_completion/images/order_completion_29_29.jpg" mode="scaleToFill" border="0"    class="order_completion_29"></image>
						</view>
					</view>
					<view class="goods">
						<view v-for="(item_goods, index) in list_goods" :key="index" class="row">
							<view class="order_completion_32">
								<image v-on:click="icon_33_click(item_goods)"  :src="item_goods.thumblist" mode="scaleToFill" border="0"    class="icon"></image>
								<view class="order_completion_76">
									<text decode="true" class="subject">{{item_goods.attr}}</text>
									<text decode="true" class="go">详情</text>
								</view>
								<text decode="true" class="price">{{item_goods.attr_price}}</text>
								<text decode="true" class="num">{{item_goods.num}}</text>
							</view>
						</view>
					</view>
					<text decode="true" class="total_money">¥{{total_money}}</text>
				</view>
				<view class="order_completion_68" v-bind:class="[showOrHidden68 ? 'ym_show' : 'ym_hide']">
					<text decode="true" class="order_completion_43">订单信息</text>
				</view>
				<view class="order_completion_66">
					<text decode="true" class="order_completion_48">订单信息</text>
					<view class="order_completion_67">
						<view class="order_completion_51">
							<navigator :url="'/pages/topic/detail?id=' + scenic.id" open-type="navigate">
								<text decode="true" class="order_completion_52">景点信息</text>
								<text decode="true" class="address">{{address}}</text>
							</navigator>
						</view>
						<view class="order_completion_56">
							<text decode="true" class="order_completion_57">联系电话</text>
							<text decode="true" class="position">18750298881</text>
						</view>
					</view>
					<view class="order_completion_60">
						<image v-on:click="order_completion_61_61_click()"  src="/static/order_completion/images/order_completion_61_61.jpg" mode="scaleToFill" border="0"    class="order_completion_61"></image>
						<text decode="true" class="btFaPiao">打电话</text>
						<view class="order_completion_63">
						</view>
						<image v-on:click="order_completion_64_64_click()"  src="/static/order_completion/images/order_completion_64_64.jpg" mode="scaleToFill" border="0"    class="order_completion_64"></image>
						<text decode="true" class="btService">在线客服</text>
					</view>
				</view>
			</view>
		

		<view class="loading">{{loadingText}}</view>
		<view class="ymBbottom"></view>
	</view>
</template>

<script>
	import store from '@/store/index.js';
	import {
	    mapState,mapMutations
	} from 'vuex';
	// 定义全局参数,控制数据加载
		var _self, page = 1,timer = null;
	
		export default {
			data() {
				return {
					loadingText: '',
					orderDesc:[],
					showOrHidden68: false,//滑动门显示与隐藏
					num:'',//随机的收货号
					address:'',
					scenic: [],
					position:'这里写备注',
					list_goods: [
							{
											subject:'帐篷10MxL',
										price:'￥65.0',
										num:' X1',
					
							},
							{
											subject:'X80天幕',
										price:'￥65.0',
										num:' X1',
					
							},
							{
											subject:'X80桌椅',
										price:'￥65.0',
										num:' X1',
					
							},
							{
											subject:'X80餐车',
										price:'￥65.0',
										num:' X1',
					
							},
							],
					total_money:'￥65.0',
					
					page:0,//当前分页页码
					apiUrl:'https://www.ymznkf.com/wx_server',//后端接口地址
					id:'',//传值使用,方便存在本地的locakStorage  
					del_id:''//方便存在本地的locakStorage  
				}
			},
			computed:{
				...mapState(['hasLogin','userInfo']),
				// this.loadData();
			},
			onLoad(options) {
				_self = this;
				//检查是否登录参考代码,需要用的时候，可以把注释取掉
				//if(this.checkLogin()==false){
				//	return;
				//}
				//this.getLaction();//得到gps
				this.page=0;
				//检测有没有传入id参数
				if (options.id != null && options.id !=""){
					this.id=options.id;
				}   
				//执行初始化,需要用的时候，可以把注释取掉
				//this.Refresh("init");
				console.log('options');
				console.log(options);
				this.loadOrderDesc(options.id);
				if(this.orderDesc.status == 0){
					var hour, minute, second; //时 分 秒/
					hour = minute = second = 0; //初始化
					var millisecond = 0; //毫秒
					this.timer = setInterval(() => {
						console.log('test');
						this.loadOrderStatus(options.id);
					},1000);
				}					
			},
			onUnload() {
				if(this.timer) {  
					clearTimeout(this.timer);  
					this.timer = null;  
				}  
			},
			onShow() {
				console.log("on show");
				//if(this.checkLogin()==false){
				//	return;
				//}
	
				//执行初始化,需要用的时候，可以把注释取掉
				//this.Refresh("init");
			},
			onPullDownRefresh: function() {
				//下拉刷新的时候请求一次数据
				this.Refresh();
			},
			methods: {
				
				async loadOrderStatus(id){
					console.log('ididididid:');
					console.log(id);
					const sendData = {
						id
					}
					const res = await this.$myRequest({url: '/api/order/orderStatus',method:'post',data: sendData});
					this.orderDesc     = res.data.res;
					console.log(this.orderDesc);
				},
				async loadOrderDesc(id){
					console.log('ididididid:');
					console.log(id);
					const sendData = {
						id
					}
					const res = await this.$myRequest({url: '/api/order/orderDesc',method:'post',data: sendData});
					console.log(res.data);
					//order_status 订单状态 0未开始 1 开始 2完成 3 取消
					this.address = res.data.res.address;
					this.total_money  = res.data.res.order_money;
					this.orderDesc     = res.data.res;
					this.scenic = res.data.scenic;
					this.num    = res.data.res.arrivenum;
					this.list_goods = JSON.parse(res.data.res.goodslist);
					console.log(this.orderDesc);
				},
				async repay(){
					//归还
					let orderDesc = this.orderDesc;
					let userInfo  = this.userInfo;
					const sendData = {
						orderDesc,
						userInfo,
					}
					//服务器计算时间 和价格
					const res = await this.$myRequest({url: '/api/order/getbill',method:'post',data: sendData});
					
					console.log(res.data);

					if(res.data.error == 0){//正常 就跳转到 支付
						let id = res.data.orderinfo.id;//订单id去支付。
						
						this.orderDesc = res.data.orderinfo;
						uni.navigateTo({
							url: `/pages/money/pay?id=${id}`
						})
					}else{
						this.$alert('错误了'); 
					}
					
				},
				async topay(){
					let id = this.orderDesc.id;//订单id去支付。
					uni.navigateTo({
						url: `/pages/money/pay?id=${id}`
					})
				},
				/**
				* order_completion_22_22处理函数
				* 数据绑定  data-index="{{index}}" 
				* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
				*/
				order_completion_22_22_click:function(event){
				
				},
				
				/**
				* order_completion_29_29处理函数
				* 数据绑定  data-index="{{index}}" 
				* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
				*/
				order_completion_29_29_click:function(event){
				
				},
				
				/**
				* icon_33处理函数
				* 数据绑定  data-index="{{index}}" 
				* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
				*/
				icon_33_click:function(event){
				
				},
				
				/**
				* order_completion_61_61处理函数
				* 数据绑定  data-index="{{index}}" 
				* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
				*/
				order_completion_61_61_click:function(event){
				
				},
				
				/**
				* order_completion_64_64处理函数
				* 数据绑定  data-index="{{index}}" 
				* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
				*/
				order_completion_64_64_click:function(event){
				
				},
				
				
	
				//刷新数据
				Refresh:function(_action) {
				
					uni.showLoading();
					
					//提交到服务器
					var that = this
					var url=that.apiUrl+'{server_code_file_path}';
					console.log(url);
					uni.request({
					url: url,//后端接口地址，需要改成自己的接口地址
					data: {
						action: _action,//上传动作，如按钮点击会产生click动作，分页也会产生，在后端根据具体的动作来判断事件
						uid: that.getUid(),//上传用户id,在登录中获得
						//上传页面中的变量
						//定义变量---start
						
						//定义变量---end
						id: that.id,//上传id值，后端可以根据此值来操作当前id
						del_id: that.del_id,//在列表中删除按钮选中时，上传到有后端，进行删除操作
						page:that.page
					},
					method: 'GET',
					success: function (res) {//后端返回数据
	
						// 隐藏导航栏加载框  
						uni.hideNavigationBarLoading();
						// 停止下拉动作  
						uni.stopPullDownRefresh();  
	
						// 隐藏加载框  
						uni.hideLoading();  
	
						var tmp = res.data;
	
						//初始化，对页面上的控件进行赋值操作
						if(_action=="init"){
	
						}
	
						{deal_listpages}
	
						that.num=tmp.num;
						that.total_money=tmp.total_money;
						that.address=tmp.address;
						that.position=tmp.position;
						
	
	
						//如果后端有返回消息，则弹出消息提示
						if (tmp.message != null && tmp.message != "") {
							uni.showToast({
							title: tmp.message,
							icon: 'none',
							duration: 2000
							})
						}
	
	
	
						//如果后端有返回页码，则更改当前页码
						if(tmp.page!=null && tmp.page!=""){
							page=tmp.page;
						}					
	
					},
					fail: function (res) {
						uni.showToast({
							title: "服务器访问失败",
							icon: 'none',
							duration: 2000
						})
						console.log(res.data);
						console.log('is failed')
					}
					})
				},
			}
		}
		</script>
		<style>
	//本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm
	html,body,#app {height: 100%;width: 100%;}
	.YmContent {height: 100%;width: 100%;}
	uni-page-body,#app {height: 100%;}
	button::after {border: none;width: auto;}
	input{outline: none;border: none;list-style: none;width: auto;}
	.list_item{float: left;}
	.ym_hide{display: none;}
	.ym_show{display: block;}
	.slide-image {  width: 100%;  height:100%;}
	.list_horizontal {width: auto; display:inline-block; }
	 .order_completion_72{white-space:normal;width:749upx;height:100%;padding:0upx;clear:both;float:left;background-color:#f0f0f0; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_70{white-space:normal;width:749upx;height:502upx;padding:0upx;clear:both;margin-top:0upx;margin-left:0upx;float:left;background-color:#ffffff; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_70 .order_completion_18{white-space:normal;width:170upx;height:25upx;padding:0upx;clear:both;margin-top:43upx;margin-left:290upx;float:left;text-align:center;justify-content:center; border-radius:0upx; color:#c8c8c8;font-size:23upx; line-height:25upx;}
	 .order_completion_72 .order_completion_70 .num{white-space:normal;width:198upx;height:198upx;overflow:hidden;padding:0upx;clear:both;margin-top:50upx;margin-left:277upx;float:left;background-color:#30bee9;text-align:center;justify-content:center; border-radius:143upx; color:#ffffff;font-size:55upx; line-height:198upx;}
	 .order_completion_72 .order_completion_70 .order_completion_20{white-space:normal;width:213upx;height:36upx;padding:0upx;clear:both;margin-top:45upx;margin-left:265upx;float:left; border-radius:0upx;font-size:35upx; line-height:36upx;}
	 .order_completion_72 .order_completion_70 .order_completion_20 .order_completion_21{white-space:normal;width:177upx;height:36upx;padding:0upx;margin-top:0upx;margin-left:6upx;float:left;text-align:center;justify-content:center; border-radius:0upx; color:#c80064;font-size:33upx; line-height:36upx;}
	 .order_completion_72 .order_completion_70 .order_completion_20 .order_completion_22{white-space:normal;width:15upx;height:27upx;padding:0upx;margin-top:5upx;margin-left:2upx;float:left; border-radius:0upx;font-size:25upx; line-height:27upx;}
	 .order_completion_72 .order_completion_70 .order_completion_23{white-space:normal;width:302upx;height:27upx;padding:0upx;clear:both;margin-top:36upx;margin-left:224upx;float:left;text-align:center;justify-content:center; border-radius:0upx; color:#646464;font-size:26upx; line-height:27upx;}
	 .order_completion_72 .order_completion_69{white-space:normal;width:749upx;min-height:277upx;padding:0upx;clear:both;margin-top:18upx;margin-left:0upx;float:left;background-color:#ffffff; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_69 .order_completion_74{white-space:normal;width:749upx;height:84upx;padding:0upx;clear:both;margin-top:0upx;margin-left:0upx;float:left; border-bottom-color:#f0f0f0; border-bottom-width:1upx; border-bottom-style:solid; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_69 .order_completion_74 .order_completion_26{white-space:normal;width:694upx;height:27upx;padding:0upx;margin-top:26upx;margin-left:29upx;float:left; border-radius:0upx;font-size:25upx; line-height:27upx;}
	 .order_completion_72 .order_completion_69 .order_completion_74 .order_completion_26 .order_completion_27{white-space:normal;width:126upx;height:27upx;padding:0upx;margin-top:0upx;margin-left:0upx;float:left; border-radius:0upx; color:#000000;font-size:24upx; line-height:27upx;}
	 .order_completion_72 .order_completion_69 .order_completion_74 .order_completion_26 .order_completion_28{white-space:normal;width:65upx;height:23upx;padding:0upx;margin-top:2upx;margin-left:476upx;float:left;text-align:right; border-radius:0upx; color:#c8c8c8;font-size:20upx; line-height:23upx;}
	 .order_completion_72 .order_completion_69 .order_completion_74 .order_completion_26 .order_completion_29{white-space:normal;width:25upx;height:16upx;padding:0upx;margin-top:8upx;margin-left:0upx;float:left; border-radius:0upx;font-size:15upx; line-height:16upx;}
	 .order_completion_72 .order_completion_69 .goods{white-space:normal;width:749upx;min-height:116upx;padding:0upx;clear:both;margin-top:0upx;margin-left:0upx;float:left; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_69 .goods .row{white-space:normal;width:749upx;height:108upx;padding:0upx;margin-top:0upx;margin-left:0upx;float:left; border-bottom-color:#e1e1e1; border-bottom-width:1upx; border-bottom-style:solid; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_69 .goods .row .order_completion_32{white-space:normal;width:681upx;height:33upx;padding:0upx;margin-top:34upx;margin-left:43upx;float:left; border-radius:0upx;font-size:31upx; line-height:33upx;}
	 .order_completion_72 .order_completion_69 .goods .row .order_completion_32 .icon{white-space:normal;width:34upx;height:33upx;padding:0upx;margin-top:0upx;margin-left:0upx;float:left; border-radius:0upx;font-size:31upx; line-height:33upx;}
	 .order_completion_72 .order_completion_69 .goods .row .order_completion_32 .order_completion_76{white-space:normal;width:425upx;height:33upx;padding:0upx;margin-top:0upx;margin-left:29upx;float:left; border-radius:0upx;font-size:31upx; line-height:33upx;}
	 .order_completion_72 .order_completion_69 .goods .row .order_completion_32 .order_completion_76 .subject{white-space:normal;width:auto;height:29upx;padding:0upx;margin-top:2upx;margin-left:2upx;float:left; border-radius:0upx; color:#000000;font-size:27upx; line-height:29upx;}
	 .order_completion_72 .order_completion_69 .goods .row .order_completion_32 .order_completion_76 .go{white-space:normal;width:auto;height:24upx;padding:0upx;margin-top:5upx;margin-left:5upx;float:left; border-radius:0upx; color:#c8c8c8;font-size:20upx; line-height:24upx;}
	 .order_completion_72 .order_completion_69 .goods .row .order_completion_32 .price{white-space:normal;width:113upx;height:23upx;padding:0upx;margin-top:4upx;margin-left:24upx;float:left;text-align:right; border-radius:0upx; color:#000000;font-size:18upx; line-height:23upx;}
	 .order_completion_72 .order_completion_69 .goods .row .order_completion_32 .num{white-space:normal;width:47upx;height:23upx;padding:0upx;margin-top:4upx;margin-left:4upx;float:left;text-align:right; border-radius:0upx; color:#646464;font-size:20upx; line-height:23upx;}
	 .order_completion_72 .order_completion_69 .total_money{white-space:normal;width:255upx;height:26upx;padding:0upx;clear:both;margin-top:18upx;margin-left:467upx;float:left;text-align:right; border-radius:0upx; color:#c80064;font-size:21upx; line-height:26upx;}
	 .order_completion_72 .order_completion_68{white-space:normal;width:749upx;height:118upx;padding:0upx;clear:both;margin-top:18upx;margin-left:0upx;float:left;background-color:#ffffff; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_68 .order_completion_43{white-space:normal;width:118upx;height:27upx;padding:0upx;margin-top:26upx;margin-left:28upx;float:left; border-radius:0upx; color:#000000;font-size:24upx; line-height:27upx;}
	 .order_completion_72 .order_completion_66{white-space:normal;width:749upx;height:379upx;padding:0upx;clear:both;margin-top:17upx;margin-left:0upx;float:left;background-color:#ffffff; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_66 .order_completion_48{white-space:normal;width:118upx;height:27upx;padding:0upx;clear:both;margin-top:27upx;margin-left:28upx;float:left; border-radius:0upx; color:#000000;font-size:24upx; line-height:27upx;}
	 .order_completion_72 .order_completion_66 .order_completion_67{white-space:normal;width:749upx;height:196upx;padding:0upx;clear:both;margin-top:29upx;margin-left:0upx;float:left; border-bottom-color:#e1e1e1; border-bottom-width:1upx; border-bottom-style:solid; border-top-color:#e1e1e1; border-top-width:1upx; border-top-style:solid; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_66 .order_completion_67 .order_completion_51{white-space:normal;width:705upx;height:69upx;padding:0upx;clear:both;margin-top:27upx;margin-left:22upx;float:left; border-radius:0upx;font-size:8upx;}
	 .order_completion_72 .order_completion_66 .order_completion_67 .order_completion_51 .order_completion_52{white-space:normal;width:127upx;height:28upx;padding:0upx;margin-top:18upx;margin-left:0upx;float:left; border-radius:0upx; color:#646464;font-size:25upx; line-height:28upx;}
	 .order_completion_72 .order_completion_66 .order_completion_67 .order_completion_51 .address{white-space:normal;width:443upx;height:69upx;padding:0upx;margin-top:0upx;margin-left:134upx;float:left; border-radius:0upx; color:#646464;font-size:29upx;}
	 .order_completion_72 .order_completion_66 .order_completion_67 .order_completion_56{white-space:normal;width:705upx;height:28upx;padding:0upx;clear:both;margin-top:49upx;margin-left:22upx;float:left; border-radius:0upx;font-size:27upx; line-height:28upx;}
	 .order_completion_72 .order_completion_66 .order_completion_67 .order_completion_56 .order_completion_57{white-space:normal;width:127upx;height:28upx;padding:0upx;margin-top:0upx;margin-left:0upx;float:left; border-radius:0upx; color:#646464;font-size:24upx; line-height:28upx;}
	 .order_completion_72 .order_completion_66 .order_completion_67 .order_completion_56 .position{white-space:normal;width:443upx;height:28upx;padding:0upx;margin-top:0upx;margin-left:134upx;float:left;text-align:right; border-radius:0upx; color:#646464;font-size:25upx; line-height:27upx;}
	 .order_completion_72 .order_completion_66 .order_completion_60{white-space:normal;width:545upx;height:68upx;padding:0upx;clear:both;margin-top:16upx;margin-left:120upx;float:left; border-radius:0upx;font-size:67upx; line-height:68upx;}
	 .order_completion_72 .order_completion_66 .order_completion_60 .order_completion_61{white-space:normal;width:40upx;height:37upx;padding:0upx;margin-top:17upx;margin-left:0upx;float:left; border-radius:0upx;font-size:36upx; line-height:37upx;}
	 .order_completion_72 .order_completion_66 .order_completion_60 .btFaPiao{white-space:normal;width:103upx;height:27upx;padding:0upx;margin-top:20upx;margin-left:20upx;float:left; border-radius:0upx; color:#646464;font-size:24upx; line-height:27upx;}
	 .order_completion_72 .order_completion_66 .order_completion_60 .order_completion_63{white-space:normal;width:1upx;height:68upx;padding:0upx;margin-top:0upx;margin-left:90upx;float:left;background-color:#e1e1e1; border-radius:0upx;font-size:67upx; line-height:68upx;}
	 .order_completion_72 .order_completion_66 .order_completion_60 .order_completion_64{white-space:normal;width:43upx;height:34upx;padding:0upx;margin-top:17upx;margin-left:104upx;float:left; border-radius:0upx;font-size:33upx; line-height:34upx;}
	 .order_completion_72 .order_completion_66 .order_completion_60 .btService{white-space:normal;width:120upx;height:27upx;padding:0upx;margin-top:20upx;margin-left:15upx;float:left; border-radius:0upx; color:#646464;font-size:25upx; line-height:27upx;}
	</style>