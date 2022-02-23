<template>
	<view class="content">
		<view class="navbar">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item" 
				:class="{current: tabCurrentIndex === index}"
				@click="tabClick(index)"
			>
				{{item.text}}
			</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view 
					class="list-scroll-content" 
					scroll-y
					@scrolltolower="loadData"
				>
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>
					
					<!-- 订单列表 -->
					<view 
						v-for="(item,index) in tabItem.orderList" :key="index"
						class="order-item" @click="navToPage(item)"
					>
						<view class="i-top b-b">
							<text class="time">{{item.time}}</text>
							<text class="state" :style="{color: item.stateTipColor}">{{item.address}}</text>
							<text 
								v-if="item.state===9" 
								class="del-btn yticon icon-iconfontshanchu1"
								@click="deleteOrder(index)"
							></text>
						</view>
						
						<scroll-view v-if="item.goodsList.length > 1" class="goods-box" scroll-x>
							<view
								v-for="(goodsItem, goodsIndex) in item.goodsList" :key="goodsIndex"
								class="goods-item"
							>
								<image class="goods-img" :src="goodsItem.image" mode="aspectFill"></image>
							</view>
						</scroll-view>
						<view 
							v-if="item.goodsList.length === 1" 
							class="goods-box-single"
							v-for="(goodsItem, goodsIndex) in item.goodsList" :key="goodsIndex"
						>
							<image class="goods-img" :src="goodsItem.thumblist" mode="aspectFill"></image>
							<view class="right">
								<text class="title clamp">{{goodsItem.attr}}</text>
								<text class="attr-box">{{goodsItem.attr}}  x {{goodsItem.num}}</text>
								<text class="price">{{goodsItem.attrprice}}</text>
							</view>
						</view>
						
						<view class="price-box">
							共
							<text class="num">{{item.goods_num}}</text>
							件商品 实付款 {{item.order_status}}
							<text class="price">{{item.total_price}}</text>
						</view>
						<view class="action-box b-t" v-if="item.order_status == 1">
							<text class="left" style="font-size:20rpx;float:left;flex: 1;
			display: flex;">行程号:{{item.order_sn}}</text>
							<button class="action-btn" @click="cancelOrder(item)">进行中</button>
							<button class="action-btn recom" @click="payOrder(item)">立刻结束</button>
						</view>
						<view class="action-box b-t" v-else-if="item.order_status == 2">
										<text class="left" style="font-size:20rpx;float:left;flex: 1;
						display: flex;">行程号:{{item.order_sn}}</text>
										<button class="action-btn" @click="cancelOrder(item)">预约中</button>
										<button class="action-btn recom">取消</button>
						</view>
						<view class="action-box b-t" v-else-if="item.order_status == 3">
							<text class="left" style="font-size:20rpx;float:left;flex: 1;
							display: flex;">行程号:{{item.order_sn}}</text>
							<button class="action-btn">评价</button>
							<button class="action-btn">完成</button>
						</view>
						
						<view class="action-box b-t" v-else-if="item.order_status == 4">
							<text class="left" style="font-size:20rpx;float:left;flex: 1;
							display: flex;">订单号:{{item.order_sn}}</text>
							<button class="action-btn">取消了</button>
						</view>
					</view>
					 
					<uni-load-more status="tabItem.loadingType"></uni-load-more>
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import {
		mapState,mapMutations
	} from 'vuex';
	export default {
		components: {
			uniLoadMore,
			empty
		},
		computed:{
			...mapState(['hasLogin','userInfo']),
			// this.loadData();
		},
		data() {
			return {
				tabCurrentIndex: 0,//当前分类
				navList: [{
						state: 0,
						text: '全部',
						loadingType: 'more',
						orderList: [],
						page:1,
					},
					{
						state: 1,
						text: '待付款',
						loadingType: 'more',
						orderList: [],
						page:1,
					},
					{
						state: 2,
						text: '待收货',
						loadingType: 'more',
						orderList: [],
						page:1,
					},
					{
						state: 3,
						text: '待评价',
						loadingType: 'more',
						orderList: [],
						page:1,
					},
					{
						state: 4,
						text: '售后',
						loadingType: 'more',
						orderList: [],
						page:1,
					}
				],
			};
		},
		
		onLoad(options){
			/**
			 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
			 * 替换onLoad下代码即可
			 */
			this.tabCurrentIndex = +options.state;
			// #ifndef MP
			this.loadData()
			console.log('here'+options.state);
			// #endif
			// #ifdef MP
			if(options.state == 0){
				this.loadData()
			}
			// #endif
			
		},
		 
		methods: {
			//获取订单列表
			async	loadData(source){
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				let userInfo = this.userInfo;
				
				console.log('state:'+state);
				console.log('index:'+index);
				// console.log('navItem:'+JSON.stringify(navItem));
				if(source === 'tabChange' && navItem.loaded === true){
					//tab切换只有第一次需要加载数据
					return;
				}
				if(navItem.loadingType === 'loading'){
					//防止重复加载
					return;
				}
				navItem.loadingType = 'loading';
				// console.log('tabItem:'+this.tabItem);
				const sendData = { //根据分类得到相应的 状态订单
					state,
					userInfo,
					index,
					navItem,
				};
				const res = await this.$myRequest({url: '/api/order/getOrder',method:'post',data:sendData});
				console.log('navItem:'+JSON.stringify(navItem));
				navItem.page ++;
				res.data.res = JSON.parse(JSON.stringify(res.data.res));
				// console.log(res.data.res);
				setTimeout(()=>{
					// let orderList = Json.orderList.filter(item=>{
						 let orderList = res.data.res.filter(item=>{
							 // item = JSON.parse(JSON.stringify(item));
						//添加不同状态下订单的表现形式
						item = Object.assign(item, this.orderStateExp(item.state));
						// console.log('item.status:'+item.status);
						// console.log('filterItem:'+JSON.stringify(item));
						//演示数据所以自己进行状态筛选
						if(state === 0){
							// console.log('item:筛选:');
							//0为全部订单
							return item;
						}
						if(state === 1){
							//0为全部订单
							return item;
						}
						if(state === 2){
							//0为全部订单
							return item;
						}
						if(state === 3){
							//0为全部订单
							return item;
						}
						if(state === 4){
							//0为全部订单
							return item;
						}
						// console.log('item.state:'+item.state);
						return item.state === state
					});
					
					console.log('这里 根据分类 push到不同的orderList??');// 不对。 这里是根据 state 分类 给api 得到相应的结果。
					orderList.forEach(item=>{
						navItem.orderList.push(item);
					})
					this.navItem[index].page ++;
					console.log(this.pagenum);
					//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
					this.$set(navItem, 'loaded', true);
					//判断是否还有数据， 有改为 more， 没有改为noMore 
					navItem.loadingType = 'more';
					// console.log('navItem:');
					// console.log(JSON.stringify(navItem));
				}, 600);	
			}, 

			//swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current;
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			},
			//删除订单
			deleteOrder(index){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					this.navList[this.tabCurrentIndex].orderList.splice(index, 1);
					uni.hideLoading();
				}, 600)
			},
			async payOrder(item){
				let id = item.id;
				uni.navigateTo({
					url: `/pages/money/pay?id=${id}`
				})
			},
			//取消订单
			async cancelOrder(item){
				uni.showLoading({
					title: '请稍后'
				})
				let dotype='cancel';
				const sendData = { //根据分类得到相应的 状态订单
					dotype,	
					item,
				};
				const res = await this.$myRequest({url: '/api/order/changeOrder',method:'post',data:sendData});
				// console.log(res);
				setTimeout(()=>{
					let {stateTip, stateTipColor} = this.orderStateExp(9);
					item = Object.assign(item, {
						state: 9,
						stateTip, 
						stateTipColor
					})
					//取消订单后 库存还原 。 金额还原。 积分还原。并且记录。
					 
							
									
					// console.log('item:'+JSON.stringify(item));
					return;
					//取消订单后删除待付款中该项
					let list = this.navList[1].orderList;
					let index = list.findIndex(val=>val.id === item.id);
					index !== -1 && list.splice(index, 1);
					
					uni.hideLoading();
				}, 600)
			},

			//订单状态文字和颜色
			orderStateExp(state){
				let stateTip = '',
					stateTipColor = '#fa436a';
				switch(+state){
					case 1:
						stateTip = '待付款'; break;
					case 2:
						stateTip = '待发货'; break;
					case 9:
						stateTip = '订单已关闭'; 
						stateTipColor = '#909399';
						break;
						
					//更多自定义
				}
				return {stateTip, stateTipColor};
			},
			//详情页
			navToPage(item) {
				//测试数据没有写id，用title代替
				let id = item.id;
				console.log(id);
				uni.navigateTo({
					url: '/pages/order/orderDesc?id='+id
				})
			},
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
		height: 100%;
	}
	
	.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}
	
	.navbar{
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: $base-color;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}

	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;
		.i-top{
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right:30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;
			.time{
				flex: 1;
			}
			.state{
				color: $base-color;
			}
			.del-btn{
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;
				&:after{
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		/* 多条商品 */
		.goods-box{
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;
			.goods-item{
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}
			.goods-img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		/* 单条商品 */
		.goods-box-single{
			display: flex;
			padding: 20upx 0;
			.goods-img{
				display: block;
				width: 120upx;
				height: 120upx;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;
				.title{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				}
				.attr-box{
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 12upx;
				}
				.price{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					&:before{
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 8upx;
					}
				}
			}
		}
		
		.price-box{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.num{
				margin: 0 8upx;
				color: $font-color-dark;
			}
			.price{
				font-size: $font-lg;
				color: $font-color-dark;
				&:before{
					content: '￥';
					font-size: $font-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}
		.action-box{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}
		.action-btn{
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;
			&:after{
				border-radius: 100px;
			}
			&.recom{
				background: #fff9f9;
				color: $base-color;
				&:after{
					border-color: #f7bcc8;
				}
			}
		}
	}
	
	
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	
	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}
	
	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}
	
	.uni-load-more__img>view {
		position: absolute
	}
	
	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}
	
	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}
	
	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}
	
	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}
	
	.load2 {
		transform: rotate(30deg)
	}
	
	.load3 {
		transform: rotate(60deg)
	}
	
	.load1 view:nth-child(1) {
		animation-delay: 0s
	}
	
	.load2 view:nth-child(1) {
		animation-delay: .13s
	}
	
	.load3 view:nth-child(1) {
		animation-delay: .26s
	}
	
	.load1 view:nth-child(2) {
		animation-delay: .39s
	}
	
	.load2 view:nth-child(2) {
		animation-delay: .52s
	}
	
	.load3 view:nth-child(2) {
		animation-delay: .65s
	}
	
	.load1 view:nth-child(3) {
		animation-delay: .78s
	}
	
	.load2 view:nth-child(3) {
		animation-delay: .91s
	}
	
	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}
	
	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}
	
	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}
	
	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}
	
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
</style>
