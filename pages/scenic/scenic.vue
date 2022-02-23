<template>
	<view>
		<!-- navbar -->
		<u-navbar :is-back="false" :border-bottom="false" style="display:none;">
			<view class="search-wrap" @click="toSearch">
				<u-search shape="square" placeholder="动态|圈子|用户" :disabled="true" :show-action="false"></u-search>
			</view>
		</u-navbar>
		<!-- 轮播图 -->
		<view class="swiper-box">
			<u-swiper @click="onSwiper" :list="swiperList" name="img" border-radius="20" mode="rect"></u-swiper>
		</view>
		<!-- 热门圈子 -->
		<view class="block-title">
			<view>户外生活圈</view>
		</view>
		<view class="hot-topic">
			<navigator hover-class="none" :url="'/pages/topic/detail?id=' + item.id" class="topic-item"
				v-for="(item, index) in topicHotList" :key="index">
				<view class="topic-index">{{index+1}}</view>
				<image :src="item.thumb" class="cover-img" mode="aspectFill"></image>
				<view class="footer">
					<text>{{ item.addressName }}</text>
					<text class="user-num">{{ item.likes }}喜欢</text>
				</view>
			</navigator>
		</view>
		<!-- tabs -->
		<!-- <u-tabs :list="classList" name="cate_name" bg-color="#fff" :current="current" @change="tabChange"></u-tabs> -->
		<!-- 帖子列表 -->
		<navigator class="post-item" hover-class="none" :url="'/pages/post/detail?id=' + item.id"
			v-for="(item, index) in postList" :key="index" style="display:none">
			<view class="head">
				<u-image width="100rpx" height="100rpx" border-radius="10rpx" :src="item.topicInfo.cover_image">
				</u-image>
				<view class="info">
					<view>{{ item.topicInfo.topic_name }}</view>
					<view class="user">
						<u-avatar :size="25" :src="item.userInfo.avatar"></u-avatar>
						<text class="username">{{ item.userInfo.username.substring(0,10) }}</text>
						<text>发布于{{ item.create_time | timeFrom }}</text>
					</view>
				</view>
				<view @click.stop="jumpTopic(item.topic_id)" class="right">进圈</view>
			</view>
			<view class="post-content">
				<rich-text class="post-text" :nodes="item.content"></rich-text>
				<!-- 帖子类型 -->
				<block v-if="item.type == 1">
					<!--一张图片-->
					<block v-if="item.media.length == 1">
						<image :lazy-load="true" mode="aspectFill" class="img-style-1" :src="item.media[0]"
							@tap.stop="previewImage(item.media[0], item.media)"></image>
					</block>
					<!--二张图片-->
					<block v-if="item.media.length == 2">
						<view class="img-style-2">
							<image :lazy-load="true" v-for="(mediaItem, index2) in item.media" :key="index2"
								@tap.stop="previewImage(mediaItem, item.media)" mode="aspectFill" :src="mediaItem">
							</image>
						</view>
					</block>
					<!--三张以上图片-->
					<block v-if="item.media.length > 2">
						<view class="img-style-3">
							<image :lazy-load="true" v-for="(mediaItem, index2) in item.media" :key="index2"
								@tap.stop="previewImage(mediaItem, item.media)" mode="aspectFill" :src="mediaItem">
							</image>
						</view>
					</block>
				</block>
				<!-- 视频 -->
				<view class="video-wrap" v-if="item.type == 2 && item.media.length > 0">
					<image class="icon" src="/static/play.png"></image>
					<image mode="aspectFill" :src="item.media[0] + '?x-oss-process=video/snapshot,t_0,f_jpg'"></image>
					<!-- <video :show-center-play-btn="false" :controls="false" :src="item.media[0]"></video> -->
				</view>
			</view>
			<!-- 投票 -->
			<view v-if="item.type === 4" class="vote-box">
				<view class="title">{{ item.vote_info.title }}</view>
				<view class="expire-time">截止：{{ item.vote_info.expire_time | date('yyyy年mm月dd日hh时MM分') }}</view>
				<view class="vote-item" v-for="(item2, index2) in item.vote_info.options" :key="index2">
					{{ item2.content }}</view>
			</view>
			<!-- 位置 -->
			<view class="address" v-if="item.address">
				<u-icon class="icon" name="map-fill"></u-icon>
				<text>{{ item.address }}</text>
			</view>
			<!-- 底部 -->
			<view class="p-footer">
				<view class="p-item">
					<button @click.stop="onShare" class="u-reset-button" open-type="share">
						<u-icon name="zhuanfa"></u-icon>
						<text class="count">分享</text>
					</button>
				</view>
				<view class="p-item margin50">
					<text class="iconfont icon-pinglun"></text>
					<text class="count">{{ item.comment_count }}</text>
				</view>
				<view v-show="item.is_collection" class="p-item" @click.stop="cancelCollection(item.id, index)">
					<u-icon name="heart-fill" color="#cc0000"></u-icon>
					<text class="count">{{ item.collection_count }}</text>
				</view>
				<view v-show="!item.is_collection" class="p-item" @click.stop="addCollection(item.id, index)">
					<u-icon name="heart"></u-icon>
					<text class="count">{{ item.collection_count }}</text>
				</view>
			</view>
		</navigator>
		<!-- tabbar -->
		<q-tabbar :active="1" :count="msgCount"></q-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page: 1,
				classList: [],
				classId: '',
				topicList: [],
				loadStatus: 'loadmore',
				current: 0,
				topDisList: [],
				swiperList: [],
				postList: [],
				topicHotList:[]
			};
		},
		computed: {
			msgCount() {
				return this.$store.state.messegeNum;
				// return 3;
			}
		},
		onLoad() {
			this.getClassList();
			this.getDisTopic();
			this.getLinkList();
			this.getHotTopic();
		},
		onShow() {
			this.getMsgNum();
		},
		onReachBottom() {
			this.page++;
			this.getClassPost();
		},
		methods: {
			getHotTopic(){
				this.$H.get("topic/hot").then(res=>{
					this.topicHotList = res.result;
				})
			},
			jumpTopic(id) {
				console.log('jumpTopic:'+id);
				uni.navigateTo({
					url: '/pages/topic/detail?id=' + id
				});
			},
			previewImage(url, urls) {
				uni.previewImage({
					current: url, // 当前显示图片的http链接
					urls: urls // 需要预览的图片http链接列表
				});
			},
			// 获取分类下帖子列表
			getClassPost() {
				this.loadStatus = 'loading';
				this.$H
					.get('post/classPostList', {
						class_id: this.classId,
						page: this.page
					})
					.then(res => {
						this.postList = this.postList.concat(res.result.data);
						if (res.result.current_page === res.result.last_page || res.result.last_page === 0) {
							this.loadStatus = 'nomore';
						} else {
							this.loadStatus = 'loadmore';
						}
					});
			},
			// 处理点击轮播图跳转
			onSwiper(index) {
				let url = this.swiperList[index].url;
				if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
					uni.navigateTo({
						url: url
					});
				} else {
					uni.navigateTo({
						url: '/pages/webview/webview?src=' + url
					});
				}
			},
			// 获取推荐话题
			getDisTopic() {
				this.$H
					.get('discuss/list', {
						order: 'hot'
					})
					.then(res => {
						this.topDisList = res.result.data;
					});
			},
			// 获取轮播图
			getLinkList() {
				this.$H
					.post('link/list', {
						type: 3,
						page: 1
					})
					.then(res => {
						this.swiperList = res.result.data;
					});
			},
			getMsgNum() {
				this.$H.post('message/num').then(res => {
					this.$store.state.messegeNum = [0, 0, 0, res.result.all_count, 0];
				});
			},
			getClassList() {
				let that = this;
				this.$H.get('topic/classList').then(res => {
					this.classList = res.result;

					if (this.classId) {
						this.classList.forEach((item, index) => {
							if (item.cate_id == that.classId) {
								this.classId = res.result[index].cate_id;
								this.swichMenu(index);
							}
						});
					} else {
						this.classId = res.result[0].cate_id;
						this.getClassPost();
					}
				});
			},
			tabChange(index) {
				this.page = 1;
				this.current = index;
				this.classId = this.classList[index].cate_id;
				this.postList = [];
				this.getClassPost();
			},
			toSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
			}
		}
	};
</script>
<style lang="scss" scoped>
	.search-wrap {
		flex: 1;
		margin: 0 20rpx;
	}
	
	.swiper-box {
		padding: 20rpx;
	}
	// 热门圈子
	.hot-topic {
		padding: 20rpx;
		display: grid;
		grid-template-columns: repeat(2,1fr);
		grid-gap: 20rpx;
		.topic-item {
			box-shadow: 10rpx 10rpx 20rpx #F5F5F5;
			position: relative;
			overflow: hidden;
			.topic-index{
				position: absolute;
				top: 0;
				left: 0;
				background-color: $themes-color;
				padding: 0 20rpx;
				border-radius: 0 0 30rpx 0;
			}
			.cover-img{
				width: 100%;
				height: 350rpx;
				border-radius: 10rpx 10rpx 0 0;
			}
			
			.footer{
				padding: 20rpx;
				font-size: 24rpx;
				display: flex;
				.user-num{
					margin-left: auto;
					white-space: nowrap;
					color: #999;
				}
			}
		}
	}
	// 块标题
	.block-title {
		font-weight: bold;
		padding: 20rpx;
		color: #616161;
		display: flex;
		font-size: 28rpx;
		.right {
			margin-left: auto;
			color: #999;
			font-size: 24rpx;
		}
	}
	
	// 帖子
	.post-item {
		padding: 20rpx;
		margin-bottom: 20rpx;
		border-bottom: 1px solid #f5f5f5;
		.head {
			display: flex;
			.info {
				margin-left: 10rpx;
				.user {
					display: flex;
					align-items: center;
					font-size: 24rpx;
					color: #999;
					.username {
						margin-left: 10rpx;
					}
				}
			}
			.right {
				margin-left: auto;
				background-color: $themes-color;
				font-size: 24rpx;
				height: 50rpx;
				line-height: 50rpx;
				padding: 0 20rpx;
				border-radius: 10rpx;
			}
		}
		.post-content {
			margin-top: 20rpx;
	
			.video-wrap {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				width: 100%;
				height: 500rpx;
	
				.icon {
					width: 100rpx;
					height: 100rpx;
					z-index: 999;
				}
	
				image {
					position: absolute;
					width: 100%;
					border-radius: 10rpx;
				}
			}
	
			.img-style-1 {
				display: block;
				width: 100%;
				max-height: 600rpx;
				border-radius: 5px;
				overflow: hidden;
			}
	
			.img-style-2 {
				display: flex;
	
				image {
					margin: 5rpx;
					border-radius: 5px;
					width: 100%;
					height: 294rpx;
				}
			}
	
			.img-style-3 {
				display: flex;
				flex-wrap: wrap;
	
				image {
					width: 31.3%;
					height: 200rpx;
					margin: 1%;
					border-radius: 5px;
				}
			}
		}
	
		.address {
			display: flex;
			font-size: 20rpx;
			background-color: #f5f5f5;
			border-radius: 20rpx;
			display: inline-block;
			padding: 5rpx 20rpx;
			margin: 20rpx 0;
	
			.icon {
				margin-right: 5rpx;
			}
		}
	
		// 投票
		.vote-box {
			background-color: #f5f5f5;
			border-radius: 20rpx;
			padding: 20rpx;
			margin: 20rpx;
	
			.title {
				font-weight: bold;
			}
	
			.expire-time {
				font-size: 24rpx;
				margin: 20rpx 0;
			}
	
			.vote-item {
				font-size: 24rpx;
				font-weight: bold;
				padding: 20rpx;
				border-radius: 20rpx;
				border: 1px solid #999;
				text-align: center;
				margin-bottom: 20rpx;
	
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	
		.p-footer {
			display: flex;
			margin: 20rpx 0;
	
			.p-item {
				margin: 0 auto;
				color: #616161;
				display: flex;
				align-items: center;
	
				.count {
					margin-left: 10rpx;
					font-size: 28rpx;
				}
			}
	
			.p-item[hidden] {
				display: none !important;
			}
		}
	}
	
</style>
