<template>
	<view class="app">
		<view class="price-box">
			<text>支付金额</text>
			<text class="price">{{price}}</text>
		</view>

		<view class="pay-type-list">

			<view class="type-item b-b" @click="changePayType(1)">
				<text class="icon yticon icon-weixinzhifu"></text>
				<view class="con">
					<text class="tit">微信支付</text>
					<text>推荐使用微信支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 1' />
					</radio>
				</label>
			</view>
			<view class="type-item b-b" @click="changePayType(2)">
				<text class="icon yticon icon-alipay"></text>
				<view class="con">
					<text class="tit">支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 2' />
					</radio>
				</label>
			</view>
			<!-- <view class="type-item" @click="changePayType(3)">
				<text class="icon yticon icon-erjiye-yucunkuan"></text>
				<view class="con">
					<text class="tit">预存款支付</text>
					<text>可用余额 ¥198.5</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 3' />
					</radio>
				</label>
			</view> -->
		</view>
		
		<text class="mix-btn" @click="confirm">确认支付</text>
	</view>
</template>

<script>
	import store from '@/store/index.js';
	import {
	    mapState,mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				payType: 1,
				orderInfo: {},//获取订单信息再次对比。
				price: '',
			};
		},
		computed: {
		
		},
		onLoad(options) {
			// _self = this;
			// //检查是否登录参考代码,需要用的时候，可以把注释取掉
			// //if(this.checkLogin()==false){
			// //	return;
			// //}
			// //this.getLaction();//得到gps
			
			// //检测有没有传入id参数
			// if (options.id != null && options.id !=""){
			// 	this.id=options.id;
			// }
			this.loadpay(options);
		},

		methods: {
			...mapMutations(['login','clearCartAll','editCart','setOrder','clearOrder']),
			//选择支付方式
			changePayType(type) {
				this.payType = type;
			},
			
			async loadpay(option){
				let id = option.id;
				const sendData = {
					id,
				};
				console.log('sendData');
				console.log(sendData);
				const res = await this.$myRequest({url: '/api/pay/checkpay',method:'post',data: sendData});
				console.log('checkpay:'+res.data);
				this.price = res.data.pay.price;
				this.payinfo = res.data.pay;
			},
			//确认支付
			confirm: async function() {
				console.log(this.payType);
				//这里设定成功了就好。
				/**
				 *    1. 支付信息添加  pay。 确定支付的。pay_log
				 *    2. pay 支付状态需要修改
				 *    3. order 状态修改。
				 *    4. user 的使用状态 has_order  = 0 
				 *    5. 通知[暂无]
				 *    
				 * 
				 */
				
				/***
					这里缺少支付接口。 需要根据支付接口返回的结果做处理。 这里假设支付接口返回正常支付信息。
				**/
				let payinfo = this.payinfo;
				const sendData = {
					payinfo,
				};
				
				//这里需要调用支付接口
				
				console.log('this.payinfo:');
				console.log(this.payinfo);
				let total = 10;
				// const sendData = {
				// 	total,
				// };
				
				const ress = await this.$myRequest({url: '/api/pay/wxPay?total=10'});
				console.log(ress.data);
				
				
				
				return;
				var timeStr = String(new Date().getTime());
				var signStr = "appId=" + res.data.info.appid + "&nonceStr=" + res.data.info.nonce_str +
				                            "&package=prepay_id=" + res.data.info.prepay_id + "&signType=MD5&timeStamp=" +
				                            timeStr + "&key=" + res.data.info.key
				let paySign = that.$md5(signStr)
				uni.showLoading({}) //拉起支付加载提示
				    uni.hideLoading()
				    uni.requestPayment({ //下面参数为必传
				        appId: res.data.info.appid, //小程序Appid
				        nonceStr: res.data.info.nonce_str,
				        timeStamp: timeStr, //创建订单时间戳
				        package: "prepay_id=" + res.data.info.prepay_id,
				        signType: "MD5",
				        paySign: paySign, // 后台支付签名返回
				        success(res) {
				           uni.showToast({
				            title: "支付成功",
				            icon: "none"
				            });
				        },
				        fail(err) {
				            console.log('支付失败')
				        }
					})
				
				
				return;
				const res = await this.$myRequest({url: '/api/pay/okpay',method:'post',data: sendData});
				console.log('checkpay:'+res.data.pay);
				
				if(res.data.error == 0){//没有错就表示支付成功。到账了。
				
				
				
					
				
				
				
				
				    return;
					//到账了消除用户的 hasorder 以及 清理 clearOrder
					this.clearOrder();
					uni.redirectTo({
						url: '/pages/money/paySuccess'
					})	
				}else{
					this.$alert('支付错误');
				}
				
				
				
				
				
				
				uni.requestPayment({
				    provider: 'wxpay',
				    timeStamp: String(Date.now()),
				    nonceStr: 'A1B2C3D4E5',
				    package: 'prepay_id=wx20180101abcdefg',
				    signType: 'MD5',
				    paySign: '',
				    success: function (res) {
				        console.log('success:' + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log('fail:' + JSON.stringify(err));
				    }
				});
			},
		}
	}
</script>

<style lang='scss'>
	.app {
		width: 100%;
	}

	.price-box {
		background-color: #fff;
		height: 265upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #909399;

		.price{
			font-size: 50upx;
			color: #303133;
			margin-top: 12upx;
			&:before{
				content: '￥';
				font-size: 40upx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20upx;
		background-color: #fff;
		padding-left: 60upx;
		
		.type-item{
			height: 120upx;
			padding: 20upx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60upx;
			font-size: 30upx;
			position:relative;
		}
		
		.icon{
			width: 100upx;
			font-size: 52upx;
		}
		.icon-erjiye-yucunkuan {
			color: #fe8e2e;
		}
		.icon-weixinzhifu {
			color: #36cb59;
		}
		.icon-alipay {
			color: #01aaef;
		}
		.tit{
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 4upx;
		}
		.con{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}
	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630upx;
		height: 80upx;
		margin: 80upx auto 30upx;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

</style>
