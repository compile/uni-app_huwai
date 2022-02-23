<template>
	<view class="task">
		<view class="cu-chat">
			<view class="cu-item animation-bottom-top" :style="{'animationDelay': (index + 1)*0.1 + 's'}" v-for="(item,index) in taskList"
			 :key="index" @click="hrefTask(item)">

				<view class="main">

					<view class="content shadow">

						<view class="item-header">

							<view class="item-title text-lg text-bold">{{item.title}}</view>
							<view class="item-price"><text class="text-price text-red text-lg text-bold padding-sm">{{item.price}}</text></view>
						</view>
						<view class="item-desc text-gray text-sm">
							{{item.textareaAValue}}
						</view>
						<view class="item-tag">
							<view class="cu-tag bg-red sm round" :class="'light-'+k" v-for="(v,k) in item.tags" :key="k">{{v}}</view>
							<!-- <view class="cu-tag bg-green light sm round">史诗</view> -->
						</view>
						<view class="university">
							<text class="text-grey text-sm">{{item.auth.campus}}</text>
						</view>
					</view>
				</view>


				<view class="date">
					<text class="text-xs text-gray">发布时间:{{item.createTime}}</text>
					<button class="cu-btn round shadow bg-yellow sm"  @click.stop="hrefChat(item)">联系TA</button>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			taskList: Array
		},
		data() {
			return {

			}
		},
		methods: {
			hrefTask(item) {
				console.log(item)
				this.$emit("hrefTask",item)
			},
			hrefChat(item){
				this.$emit("hrefChat",item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cu-chat .cu-item>.main .content {
		display: block;
		width: 100%;

		padding: 0;
	}

	.cu-chat .cu-item>.main .content::before {
		display: none;

	}

	.cu-chat .cu-item>.main .content::after {
		display: none;

	}
	
.cu-chat .cu-item .date{
	height: 40px;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 15rpx;
		button{
			margin-left: auto;
			margin-right: 10rpx;
		}
	}
	.cu-chat .cu-item>.main {
		max-width: 100% !important;
		min-width: 100% !important;
	}

	.cu-chat .cu-item>.cu-avatar {
		width: 35px !important;
		height: 35px !important;
		border-radius: 50%;
	}

	.task {
		width: 100vw;
		display: flex;
		flex-flow: column;

		.cu-chat {
			.cu-item {
				margin: 10rpx 10rpx 0 10rpx;
				padding: 30rpx 15rpx 70rpx 15rpx;
				border-radius: 3px;
				background-color: #FFFFFF;
				.main {
					margin: 0;

					.content {
						background-color: #FFFFFF;

						.university {
							width: 100%;
							text-align: right;
							padding: 0 15rpx;
						}

						.item-header {
							width: 100%;
							display: flex;
							justify-content: flex-start;
							align-items: center;

							.item-price {
								margin-left: auto;
							}

							.item-title {
								// padding: 7px;
								display: -webkit-box;
								/*设置为弹性盒子*/
								-webkit-line-clamp: 1;
								/*最多显示1行*/
								overflow: hidden;
								/*超出隐藏*/
								text-overflow: ellipsis;
								/*超出显示为省略号*/
								-webkit-box-orient: vertical;
								word-break: break-all;
								/*强制英文单词自动换行*/
								max-width: 350rpx;
							}
						}

						.item-desc {
							// padding: 7px;
							display: -webkit-box;
							/*设置为弹性盒子*/
							-webkit-line-clamp: 3;
							/*最多显示1行*/
							overflow: hidden;
							/*超出隐藏*/
							text-overflow: ellipsis;
							/*超出显示为省略号*/
							-webkit-box-orient: vertical;
							word-break: break-all;
							/*强制英文单词自动换行*/
							max-width: 600rpx;
						}
					}
				}
			}

		}

	}
</style>
