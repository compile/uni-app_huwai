<template>
	<view>
	   <newsNabBar
	   :tabs="tabs"
	   :tabindex="tabindex"
	   @change="change($event)"
	   @openadd="openadd"
	   >	
	   </newsNabBar>
		<!-- 公共列表 -->
		<view class="uni-tab-bar">
		 <swiper class="swiper-box" :style="{height:swheigth+'px'}" :current="tabindex" @change="watchchange"> 
				<swiper-item style="margin-left: -20px;">
					<scroll-view scroll-y class="list" scroll-y :scroll-top='scrollTop'  scroll-with-animation="true" @scrolltolower="loadtop()">
					<block v-for="(item,index) in guanzhu.list" :key="index"> 
						<comonNews
					    :item="item"
						:index="index"
						@isgz="isgz(index)"
						></comonNews>
					</block>
					<view class="load">{{guanzhu.loadtext}}</view>
				    </scroll-view>	
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list" scroll-with-animation="true">
					<!-- 搜索 -->
					<!-- 轮播 -->
					<!-- 头部轮播 -->
					<view class="carousel-section">
						<!-- 标题栏和状态栏占位符 -->
						<view class="titleNview-placing"></view>
						<!-- 背景色区域 -->
						<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
						<!-- <swiper class="carousel" circular @change="swiperChange">
							<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToPage(item)">
								<image :src="item.pic" />
							</swiper-item>
						</swiper> -->
						<image style="width:100%" src="https://www.mescroll.com/img/beibei/beibei1.jpg" mode="widthFix"/>
						<!-- 自定义swiper指示器 -->
						<view class="swiper-dots">
							<text class="num">{{swiperCurrent+1}}</text>
							<text class="sign">/</text>
							<text class="num">{{swiperLength}}</text>
						</view>
					</view>		
							
							
							<!-- 分类 -->
							<view class="cate-section">
								<view v-for="(item, index) in navList" :key="index"  @click="navToPage(item)" class="cate-item">
									<image :src="item.thumb"></image>
									<text>{{item.name}}</text>
								</view>		
							</view>
					<!-- 秒杀楼层 -->
					<view class="seckill-section m-t" v-if="config.if_buylist">
						<view class="s-header">
							<image class="s-img" src="/static/temp/secskill-img2.jpg" mode="widthFix"></image>
							<text class="tip">套餐拿来即用</text>
						</view>
						<scroll-view class="floor-list" scroll-x>
							<view class="scoll-wrapper">
								<view 
									v-for="(item, index) in goodsGroupList" :key="index"
									class="floor-item"
									@click="navToGroupDetailPage(item)"
								>
									<image  :src="item.thumb" mode="aspectFill"></image>
									<text class="title clamp">{{item.title}}</text>
									<text class="price">￥{{item.price}}</text>
								</view>
							</view>
						</scroll-view>
					</view>
					
					<view class="seckill-section m-t" v-if="config.if_buy">
						<view class="s-header">
							<image class="s-img" src="/static/temp/secskill-img2.jpg" mode="widthFix"></image>
							<text class="tip">喜欢什么买什么</text>
						</view>
						<scroll-view class="floor-list" scroll-x>
							<view class="scoll-wrapper">
								<view 
									v-for="(item, index) in goodsList" :key="index"
									class="floor-item"
									@click="navToDetailPage(item)"
								>
									<image  :src="item.thumb" mode="aspectFill"></image>
									<text class="title clamp">{{item.title}}</text>
									<text class="price">￥{{item.price}}</text>
								</view>
							</view>
						</scroll-view>
					</view>
					
					<!-- 团购楼层 -->
					<!--
					<view class="f-header m-t" >
						<image src="/static/temp/h1.png"></image>
						<view class="tit-box">
							<text class="tit">景点</text>
							<text class="tit2">Boutique Group Buying</text>
						</view>
						<text class="yticon icon-you"></text>
					</view>
					<view class="group-section">
						<swiper class="g-swiper" :duration="500">
							<swiper-item
								class="g-swiper-item"
								v-for="(item, index) in scenicList" :key="index"
								v-if="index%2 === 0"
								@click="navToDetailPage(item)"
							>
								<view class="g-item left" @click="navToTopicDetailPage(item)">
									<image :src="item.thumb" mode="aspectFill"></image>
									<view class="t-box">
										<text class="title clamp">{{item.adressName}}</text>
										<view class="price-box">
											<text class="price">{{item.area}}</text> 
											<text class="m-price">￥188</text> 
										</view>
										
										<view class="pro-box">
										  	<view class="progress-box">
										  		<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
										  	</view>
											<text>6人成团</text>
										</view>
									</view>
									            
								</view>
								<view class="g-item right">
									<image :src="goodsList[index+1].image" mode="aspectFill"></image>
									<view class="t-box">
										<text class="title clamp">{{goodsList[index+1].title}}</text>
										<view class="price-box">
											<text class="price">￥{{goodsList[index+1].price}}</text> 
											<text class="m-price">￥188</text> 
										</view>
										<view class="pro-box">
										  	<view class="progress-box">
										  		<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
										  	</view>
											<text>10人成团</text>
										</view>
									</view> 
								</view>
							</swiper-item>
					
						</swiper>
					</view>
					<!-- 分类推荐楼层 -->
					<view class="f-header m-t">
						<!-- <image src="/static/temp/h1.png"></image> -->
						<view class="tit-box">
							<text class="tit">🔥景点</text>
							<text class="tit2">Scenic Spot</text>
						</view>
						<!-- <text class="yticon icon-you"></text> -->
					</view>
					<view class="hot-floor">
						<view class="cate-section">
							<view v-for="(item, index) in scenicList" :key="index"  @click="navToTopicDetailPage(item)" class="cate-item">
								<image style="border-radius: 30rpx;width:200rpx;height:100rpx;" :src="item.thumb"></image>
								<text>{{item.addressName}}</text>
							</view>		
						</view>	
					</view>
					<!-- 猜你喜欢 -->
					<view class="f-header m-t" style="display:none;" >
						<image src="/static/temp/h1.png"></image>
						<view class="tit-box">
							<text class="tit">猜你喜欢</text>
							<text class="tit2">Guess You Like It</text>
						</view>
						<text class="yticon icon-you"></text>
					</view>
					
					<view class="guess-section" style="display:none;">
						<view 
							v-for="(item, index) in goodsList" :key="index"
							class="guess-item"
							@click="navToDetailPage(item)"
						>
							<view class="image-wrapper">
								<image :src="item.thumb" mode="aspectFill"></image>
							</view>
							<text class="title clamp">{{item.title}}</text>
							<text class="price">￥{{item.price}}</text>
						</view>
					</view>
					
					<view class="tabbar" v-if="if_show">
						<navigator :url="'/pages/order/orderDesc?id='+order.id"  class="tab-item" hover-class="none">
							<image class="icon" src="../../static/hot.png"></image>
							<text>进行中</text>
						</navigator>
					</view>
					<!-- 热门分类 -->
					<!-- <topicNews :arryfenlei="topic.fenlei"></topicNews> -->
					<!-- 最近更新 -->
					<view class="top-new">
						<view>诗和远方</view>
						<block v-for="(item,index) in scenicList" :key="index">
							<view class="top-lists u-f-a"  @click="navToTopicDetailPage(item)">
								<image :src="item.thumb" mode="widthFix" lazy-load></image>
								<view> 
									<view>{{item.addressName}}</view>
									<view>{{item.descript}}</view>
									<!-- <view>动态 {{item.dongtainum}} 今日 {{item.jinrinum}}</view> -->
								</view>
							</view>
						</block>
					</view>
					</scroll-view>	
				</swiper-item>	
		</swiper>
			<!-- <view class="top" >
			    <uni-icons class="topc" type="arrowthinup" size="50" @click="shuaxin"></uni-icons>
			</view> -->
		</view>
		<q-tabbar :active="0" :count="msgCount"></q-tabbar>
	</view>
</template>

<script>	
	import comonNews from '../../compoents/common/comon-news.vue';
	import newsNabBar from '../../compoents/news/news-nab-bar.vue';
	import loadMore from "../../compoents/common/load-more.vue";
	import topicNews from "../../compoents/news/topic-news.vue";
	import topicList from "../../compoents/news/topic-list.vue";
	
	
	
	import {
		mapState,mapMutations
	} from 'vuex';
	
	
	export default {
		...mapMutations(['store']),//引用
		components:{			
			comonNews,
			newsNabBar,
			loadMore,
			topicNews,
			topicList,
			...mapState(['hasLogin','userInfo','hasOrder','cartInfo','orderInfo'])
		},
		data() {
			return {
				scrollTop:'',
				text5: '今天天气多云转晴,适合出游哦',
				config: [],
				page: 1,
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				if_show: false,
				order:'',
				scenicList: [],
				carouselList: [],
				goodsList: [],
				goodsGroupList: [],
				navList: [],
				countdown: '',//倒计时
				                day: '',
				                time: '',
				                minute: '',
				                second: '',
				                timer: null ,//重复执行,
							
				swheigth:0,
				tabindex:0,
				topic:{			
					lists:[
						{
							thumb:'https://img0.baidu.com/it/u=3507443953,760374200&fm=26&fmt=auto',
							addressName:'九寨沟',
							neirong:'120斤到80斤 我的反转人生',
							dongtainum:545,
							jinrinum:720		
						},
						{
							thumb:'https://img0.baidu.com/it/u=1285021259,3708807712&fm=26&fmt=auto',
							addressName:'五缘湾',
							neirong:'120斤到80斤 我的反转人生',
							dongtainum:545,
							jinrinum:720		
						},
						{
							thumb:'https://img0.baidu.com/it/u=1285021259,3708807712&fm=26&fmt=auto',
							addressName:'下谭尾',
							neirong:'120斤到80斤 我的反转人生',
							dongtainum:545,
							jinrinum:720		
						}
					]
				},
				tabs:[
					{
						name:'动态',
						id:'dongtai'
						
					},
					{
						name:'7Fun',
						id:'huati'
					}
				],
				guanzhu:{
					loadtext:"上拉加载更多👆",
					list:[],
				},
				topState:false
			}
		},
		
		methods: {
			watchchange(e){
				
				this.tabindex=e.detail.current;
				console.log('watcchchange:'+e.detail.current);
			},
			change(index){
				console.log('change:'+index)
				this.tabindex=index;
			//	uni.setStorageSync('storage_key', 'hello');
			},
			openadd(e){
				//console.log(e)
				uni.navigateTo({
				   url:'../fabu/fabu'	   
				});
			},
			isgz(index){
				// console.log(this.list[index].isguanzhu)
				this.guanzhu.list[index].isguanzhu=true;
				uni.showToast({
					title:'关注成功',
					icon:'none',
					mask:true
				})
			},
			//上拉加载
			async loadtop(){
				if(this.guanzhu.loadtext!="上拉加载更多👆"){return;}					
				this.guanzhu.loadtext="加载中o(*￣▽￣*)ブ";
				
				let page = this.page;
				const sendData = {
					page,
				};
				console.log('page:'+page);
				const res = await this.$myRequest({url: '/api/topic/topic',method:'post',data: sendData });
				console.log('testapi::::::');
				console.log(res.data.res);
				// console.log(this.config);
				let tempList = res.data.res;
			
				tempList.forEach((item,key)=>{
					// if(item.checked){
				
				this.guanzhu.list.push(item);
				 this.guanzhu.loadtext="上拉加载更多👆";
				//this.guanzhu.loadtext="没有更多数据了/(ㄒoㄒ)/~~";	
					// }
					// console.log(item['goodslist']);
					// console.log('goodsGroupList');
					// console.log(item['likes']);	
				})
				
				console.log('res.data.last_page:'+res.data.last_page);
				
				console.log('res.data.current_page'+res.data.current_page);
				if(res.data.last_page <= res.data.current_page){
					this.guanzhu.loadtext="没有更多数据了/(ㄒoㄒ)/~~";
				}else{
					this.page ++;
					console.log(this.page);
					this.guanzhu.loadtext="上拉加载更多👆";
				}
				/**
				setTimeout(()=> {
					let obj={
						//文字
					  userimg:'../../static/userpic/19.jpg',
					  username:'张三',
					  userage:'30',
					  sex:0,//0代表男，1 代表女
					  isguanzhu:false,
					  title:'庆祝祖国成立70周年！',
					  titleimg:'',
					  video:false,
					  sharea:false,
					  positiona:'深圳 龙岗',
					  sharenum:30,
					  pinglunnum:100,
					  zannum:50					   
					};
					this.guanzhu.list.push(obj);
					// this.guanzhu.loadtext="上拉加载更多👆";				  
					this.guanzhu.loadtext="没有更多数据了/(ㄒoㄒ)/~~";				 
				}, 1000);
								**/
			},
			//轮播图切换修改背景色
			swiperChange(e) {
							const index = e.detail.current;
							this.swiperCurrent = index;
							this.titleNViewBackground = this.carouselList[index].bg;
						},
						//详情页
			navToDetailPage(item) {
							//测试数据没有写id，用title代替
							let id = item.id;
							// console.log(item);
							uni.navigateTo({
								url: `/pages/product/product?id=${id}`
							})
			},navToGroupDetailPage(item){
				let id = item.id;
				// console.log(item);
				uni.navigateTo({
					url: `/pages/product/goodsGroup?id=${id}`
				})
			},
			navToTopicDetailPage(item){
				let id = item.id;
				// console.log(item);
				// console.log(id);
				// return;
				// console.log('detail:'+id);
				// uni.switchTab({
				uni.navigateTo({
					url: `/pages/topic/detail?id=${id}`
				})
			},navToPage(item) {
				//测试数据没有写id，用title代替
				let path = item.path;
				// console.log(path);
				uni.navigateTo({
					url: '/'+path
				})
			},
			async search(){
				console.log('search');
				this.$api.msg('点击了搜索框');
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			async getconfig(){
				const res = await this.$myRequest({url: '/api/api/config'});
				this.config = res.data.config;
				// console.log(this.config);
			},
			async loadIndex(){
				// this.loadData();//
				const res = await this.$myRequest({url: '/api/shop/loadIndex'});	
				this.navList = res.data.res.navList;
				this.carouselList = res.data.res.carouselList;
				this.titleNViewBackground = this.carouselList[0].background;
				this.swiperLength = this.carouselList.length;
				this.carouselList = this.carouselList;
				this.scenicList   = res.data.res.scenicList;
				
				let tempList = res.data.res.goodsGroupList;
				let goodsGroupList = [];
				tempList.forEach((item,key)=>{
					// if(item.checked){
						
					let tempgoodslist = JSON.parse(item.goodslist);
						// console.log(tempgoodslist);
						goodsGroupList.push({
							title: item.title,
							price: item.price,
							descript: item.descript,
							thumb: item.thumb,
							id: item.id,
							likes: item.likes,
							goodslist: tempgoodslist,
						})
					// }
					// console.log(item['goodslist']);
					// console.log('goodsGroupList');
					// console.log(item['likes']);
					// console.log('goodsGroupList:');
					// console.log(goodsGroupList);
					this.goodsGroupList = goodsGroupList;
				})
				
				// this.goodsGroupList = 
				// this.IndexAd = res.data.ad;
				this.goodsList = res.data.res.goodsList;				
				// console.log('all');
				// console.log(res.data.res);
			},
			
			shuaxin(){
					this.scrollTop = 0;
					this.loadtop();
					this.loadIndex();
				uni.getSystemInfo({
				    success:(res)=> {
				        // let height=res.windowHeight-uni.upx2px(145);
						let height=res.windowHeight;
						// console.log('height:');
						// console.log(height);
						this.swheigth=height;			
				    }
				});	
				
			}
		},// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			console.log('search');
			this.$api.msg('点击了搜索框');
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
			
		},
		// #endif
		onLoad() {
			// this.watchchange(1);
			this.loadtop();
			this.getconfig();
			this.loadIndex();

		uni.getSystemInfo({
		    success:(res)=> {
		        // let height=res.windowHeight-uni.upx2px(145);
				let height=res.windowHeight;
				// console.log('height:');
				// console.log(height);
				this.swheigth=height;			
		    }
		});				  
		}
		
	}
</script>

<style>
/*下拉加载样式*/
.load{padding: 15upx 0;text-align: center;font-size: 25upx;color: #010101;}
/*搜索样式*/
.search{padding: 20upx;}
.input-search{text-align: center;font-size: 25upx;color: #9F9F9F;}
.inpu{background: #F4F4F4;border-radius: 10upx;text-align: center;padding: 10upx;}
/*swiper组件样式*/
.big-swiper{padding: 0 20upx 20upx 20upx;}
swiper-item{border-radius: 20upx;}
.swiper-item image{width: 100%;height: 100%;border-radius: 20upx;}
/*最近更新*/
.top-new{
	padding: 20upx;
}
.top-new>view:first-child{
	font-size: 30upx;
	padding-bottom: 10upx;
}
/*.top-new>view:last-child{
	height: 200upx;
}*/

</style>
<style lang="scss">
	/* #ifdef MP */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */
	
	
	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30upx 22upx; 
		background: #fff;
		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}
	.ad-1{
		width: 100%;
		height: 210upx;
		padding: 10upx 0;
		background: #fff;
		image{
			width:100%;
			height: 100%; 
		}
	}
	/* 秒杀专区 */
	.seckill-section{
		padding: 4upx 30upx 24upx;
		background: #fff;
		.s-header{
			display:flex;
			align-items:center;
			height: 92upx;
			line-height: 1;
			.s-img{
				width: 140upx;
				height: 30upx;
			}
			.tip{
				font-size: $font-base;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}
			.timer{
				display:inline-block;
				width: 40upx;
				height: 36upx;
				text-align:center;
				line-height: 36upx;
				margin-right: 14upx;
				font-size: $font-sm+2upx;
				color: #fff;
				border-radius: 2px;
				background: rgba(0,0,0,.8);
			}
			.icon-you{
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}
		.floor-list{
			white-space: nowrap;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 150upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 150upx;
				height: 150upx;
				border-radius: 26upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
	}
	
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.icon-you{
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	/* 团购楼层 */
	.group-section{
		background: #fff;
		.g-swiper{
			height: 650upx;
			padding-bottom: 30upx;
		}
		.g-swiper-item{
			width: 100%;
			padding: 0 30upx;
			display:flex;
		}
		image{
			width: 100%;
			height: 460upx;
			border-radius: 4px;
		}
		.g-item{
			display:flex;
			flex-direction: column;
			overflow:hidden;
		}
		.left{
			flex: 1.2;
			margin-right: 24upx;
			.t-box{
				padding-top: 20upx;
			}
		}
		.right{
			flex: 0.8;
			flex-direction: column-reverse;
			.t-box{
				padding-bottom: 20upx;
			}
		}
		.t-box{
			height: 160upx;
			font-size: $font-base+2upx;
			color: $font-color-dark;
			line-height: 1.6;
		}
		.price{
			color:$uni-color-primary;
		}
		.m-price{
			font-size: $font-sm+2upx;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}
		.pro-box{
			display:flex;
			align-items:center;
			margin-top: 10upx;
			font-size: $font-sm;
			color: $font-base;
			padding-right: 10upx;
		}
		.progress-box{
			flex: 1;
			border-radius: 10px;
			overflow: hidden;
			margin-right: 8upx;
		}
	}
	/* 分类推荐楼层 */
	.hot-floor{
		width: 100%;
		overflow: hidden;
		margin-bottom: 20upx;
		.floor-img-box{
			width: 100%;
			height:186upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(rgba(255,255,255,.06) 30%, #f8f8f8);
			}
		}
		.floor-img{
			width: 100%;
			height: 100%;
		}
		.floor-list{
			white-space: nowrap;
			padding: 20upx;
			padding-right: 50upx;
			border-radius: 6upx;
			margin-top:-140upx;
			margin-left: 30upx;
			background: #fff;
			box-shadow: 1px 1px 5px rgba(0,0,0,.2);
			position: relative;
			z-index: 1;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 360upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 360upx;
				height: 260upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
		.more{
			display:flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;
			text:first-child{
				margin-bottom: 4upx;
			}
		}
	}
	/* 猜你喜欢 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
		}
	}
	
	// 菜单
	.tabbar{
		position: fixed;
		bottom: 50rpx;
		right: 0rpx;
		width: 20;
		margin-left: 15%;
		margin-right: 15%;
		background-color: #fff;
		display: flex;
		padding: 10rpx;
		box-shadow: 0 0 10rpx #e6e6e6;
		font-size: 24rpx;
		border-radius: 100rpx;
		z-index: 9999;
		.tab-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 auto;
			.icon{
				margin-top: 10rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
		
		.mid-button{
			background-color: #333;
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
			color: #fff;
		}
	}

</style>
<style scoped>
.top-lists{
	padding: 20upx 0;
	border-bottom: 1px solid #EFEFEF;
}
.top-lists image{
	width: 180upx;
	height: 180upx;
	border-radius:10upx ;
	} 
.top-lists>view{
	margin-left: 20upx;
}
.top-lists>view>view:nth-child(1){
	font-size: 30upx;
}
.top-lists>view>view:nth-child(2){
	font-size: 25upx;
	color: #A4A4A4;
}
.top-lists>view>view:nth-child(3){
	font-size: 25upx;
	color: #A4A4A4;
}
.bottom_shuaxin{
	
	     position: relative;
	            display: none; /* 先将元素隐藏 */
	    bottom: 98rpx;
	    right: 10rpx;
	    z-index: 999999999;
	    width: 100rpx;
	    height: 100rpx;
	    background: #f0f0f0;
		text-align:center;
}

 .topc {
        position: fixed;
        right: 0;
        background: #F0F0F0;
        top: 70%;
        height: 50px;
        line-height: 50px;
    }
</style>

