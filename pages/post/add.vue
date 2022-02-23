<template>
	<view class="container">
		<input v-model="form.title" class="title-input" placeholder="标题(选填)" />
		<textarea placeholder="这一刻的想法..." :auto-height="true" maxlength="-1" v-model="form.content" class="post-txt"></textarea>
		<block v-if="form.type == 1">
		<!-- 上传图片 -->
	
		
		                <view class="u-upload uni-upload-img uni-flex uni-row">
		                    <view class="u-list-item u-preview-wrap flex-item preview_img" v-for="(image,index) in imageList" :key="index">
		                        <image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
		                        <uni-icons type="clear" size="20" class="u-delete-icon u-icon img_icon" @tap="delect(index)"></uni-icons>
		                    </view>
							<view v-if="imgAllUrl.length <=8 " class="u-upload uni-upload-img uni-flex uni-row" @tap="addPic">
								<image class="icon uni-uploader__img" src="/static/add-1.png"></image>
								
							</view>
		                </view>
		</block>					
		<!-- 上传视频 -->
		<block v-if="form.type == 2">
			<view v-if="form.media.length == 0" class="upload-wrap" @click="chooseVideo">
				<image class="icon" src="/static/video.png"></image>
				<text>上传视频</text>
			</view>
			<video v-if="form.media.length > 0" @click="chooseVideo" :controls="false" :show-center-play-btn="false" class="upload-video" :src="form.media[0]"></video>
		</block>
		<!-- 选择圈子 -->
		<navigator v-if="isTopic" url="/pages/choose-topic/choose-topic" class="choose-item">
			<image class="icon" src="/static/p_1.png"></image>
			<text class="txt">{{ topicName }}</text>
			<u-icon class="u-icon" name="arrow-right"></u-icon>
		</navigator>
		<!-- 选择话题 -->
		<!-- <navigator v-if="!isTopic" :url="'/pages/choose-discuss/choose-discuss?topic_id=' + form.topic_id" class="choose-item">
			<image class="icon" src="/static/m_1.png"></image>
			<text class="txt">{{ disName }}</text>
			<u-icon class="u-icon" name="arrow-right"></u-icon>
		</navigator> -->
		<!-- 所在位置 -->
		<view @click="chooseLocation" class="choose-item">
			<u-icon class="icon add-icon" name="map" color="#999" size="40"></u-icon>
			<text class="txt">{{ form.address || '所在位置' }}</text>
			<u-icon class="u-icon" name="arrow-right"></u-icon>
		</view>
		<view class="submit-btn">
			<q-button v-if="form.type == 1" @click="submit" shape="circle">发布</q-button>
			<q-button v-if="form.type == 2" @click="videoSubmit" shape="circle">发布</q-button>
		</view>
	</view>
</template>

<script>
import {
	    mapState 
} from 'vuex';  
import Sparkmd5 from '@/common/spark-md5.js';
import util from '@/common/util.js';
var sourceType = [
            ['camera'],
            ['album'],
            ['camera', 'album']
        ]
    var sizeType = [
        ['compressed'],
        ['original'],
        ['compressed', 'original']
    ]
export default {
	computed: {
		...mapState(['hasLogin','userInfo','hasCart','cartInfo'])
	},
	data() {
		return {
			imageList: [],
			imagecount: 0,
			uploadImgUrl: this.$c.domain + 'common/uploadimg',
			topicName: '选择圈子',
			disName: '选择话题',
			videoInfo: {
				thumb: '',
				width: '',
				height: '',
				duration: '',
				size: '',
				width: '',
			},
			form: {
				title: '',
				type: 1,
				topic_id: '',
				discuss_id: '',
				content: '',
				media: [],
				videoInfo: '',
				longitude: 0,
				latitude: 0,
				address: ''
			},
			header: {
				token: uni.getStorageSync('token')
			},
			isTopic: true,
			
			                sourceTypeIndex: 2,
			                sourceType: ['拍照', '相册', '拍照或相册'],
			                sizeTypeIndex: 2,
			                sizeType: ['压缩', '原图', '压缩或原图'],
			                countIndex: 8,
			                count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			imgAllUrl:[],
		};
	},
	onLoad(options) {
		console.log(this.userInfo);
		this.if_login();
		this.form.type = options.type;
		console.log(options);
		if (options.is_topic) {
			this.isTopic = options.is_topic;
		}

		if (options.topic_id) {
			this.form.topic_id = options.topic_id;
			this.isTopic = false;
		}
		if (options.discuss_id) {
			this.form.discuss_id = options.discuss_id;
		}

		let location = uni.getStorageSync('location_info');
		this.form.longitude = location.longitude;
		this.form.latitude = location.latitude;
	},
	methods: {
		if_login(){
			if(!this.hasLogin){//如果没有登陆则提示要登陆。 或者直接去登陆页面。
				console.log('没有登陆。请登陆！');				
				uni.navigateTo({
					url: '/pages/public/login'
				})
				return;
			}
		},
		addPic : function(imgAll){
			console.log(this.imgAllUrl);
                // this.imgAllUrl = [];
                let url = "路径";
                var that = this;
				console.log(this.imagecount);
                uni.chooseImage({
                    sourceType: sourceType[this.sourceTypeIndex],
                    sizeType: sizeType[this.sizeTypeIndex],
                    count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length :
                        this.count[this.countIndex],
                    success: (res) => {
                        this.imageList = this.imageList.concat(res.tempFilePaths);
                        var imageData = this.imageList
                        const tempFilePaths = res.tempFilePaths;
						const uid = this.userInfo['id'];						
						console.log(uid);
                        //上传个数循环拿到每一个照片的路径，然后放到一个数组中
								console.log(tempFilePaths);
								tempFilePaths.forEach(function(item, index) {									
									            var md5 = Sparkmd5.hashBinary(item)//获得文件MD5
												console.log(md5);									    
									//that.imgAllUrl.push(item);//这里直接上传。 用md5取名
									util.uploadFileToTencentClound(md5+'_'+uid,item).then((res)=>{
										console.log("[图片上传]",res)//这里返回了图片地址
										//self.videoInfo.thumb = res//成功
										that.imgAllUrl.push(res);
										//
										//uni.hideLoading();//隐藏。
									})
									
									
								});
                      },
                })
            },
            //图片预览
            previewImage: function(e) {
                var current = e.target.dataset.src
                uni.previewImage({
                    current: current,
                    urls: this.imageList
                })
            },
            delect(index,e){
                var that = this;
                uni.showModal({
                    title: '提示',
                    content: '是否删除该图片？',
                    success: (res) =>{
                        if (res.confirm) {
                            //删除数组中指定项
                            function removeByValue(arr, val) {
                                for(var i=0; i<arr.length; i++) {
                                    if(arr[i] == val) {
                                        arr.splice(i, 1);
                                        break;
                                    }
                                }
                            }
                            var forImg = that.imgAllUrl[index];
                            var imageUrl = that.imageList.splice(forImg, 1)
                            removeByValue(that.imageList, imageUrl);
                            //重新赋值
                            that.imgAllUrl = that.imageList
                        } 
                    }
                });
            },
		chooseVideo() {
			var self = this;
			uni.chooseVideo({
				count: 1,
				sourceType: ['camera', 'album'],
				success: function(res) {
					let viedoPath = res.tempFilePath;
					uni.showLoading({
						mask: true,
						title: '上传中'
					});
					console.log(console.log);
					console.log(res);//这里可以保存视频信息。 
					//res.duration = 时长
					//res.height  高
					//res.size 大小
					//res.width 宽
					// filename,filePath
					self.videoInfo.duration = res.duration;
					self.videoInfo.height = res.height;
					self.videoInfo.size = res.size;
					self.videoInfo.width = res.width;
					//这里可以限制大小。
					const uid = self.userInfo['id'];
					var picmd5 = Sparkmd5.hashBinary(res.thumbTempFilePath)//获得文件MD5
								console.log(picmd5);									    
					//that.imgAllUrl.push(item);//这里直接上传。 用md5取名
				
					
					
					util.uploadFileToTencentClound(picmd5+'_'+uid,res.thumbTempFilePath).then((res)=>{
						console.log("[修改s视频图片]",res)//这里返回了图片地址。 后台可以直接做在小程序。 方便上传视频。
						self.videoInfo.thumb = res//成功
						//uni.hideLoading();//隐藏。
					})
					console.log(self.form);
					var vmd5 = Sparkmd5.hashBinary(res.thumbTempFilePath)//获得文件MD5
								console.log(vmd5);
					util.uploadFileToTencentClound(vmd5+'_'+uid+'.mp4',res.tempFilePath).then((res)=>{
						console.log("[修改头像]",res)//这里返回了视频地址。
						self.form.media.push(res);//成功
						uni.hideLoading();//隐藏。
					})
				}
			});
		},
		errorback(){
			console.log('test');
		},
		test2(){
			console.log('hehe');
		},
		uploadImg() {
			if (!this.form.topic_id) {
				this.$u.toast('请选择圈子');
				return;
			}

			if (!this.form.content) {
				this.$u.toast('内容不能为空');
				return;
			}

			uni.showLoading({
				mask: true,
				title: '发布中'
			});
			//this.$refs.uUpload.upload();
		},
		chooseLocation() {
			let that = this;
			uni.chooseLocation({
				success: function(res) {
					// console.log('位置名称：' + res.name);
					// console.log('详细地址：' + res.address);
					// console.log('纬度：' + res.latitude);
					// console.log('经度：' + res.longitude);
					that.form.address = res.name;
					that.form.latitude = res.latitude;
					that.form.longitude = res.longitude;
				}
			});
		},
		videoSubmit() {
			if (this.form.media.length == 0) {
				this.$u.toast('请上传视频');
				return;
			}

			if (!this.form.topic_id) {
				this.$u.toast('请选择圈子');
				return;
			}
			uni.showLoading({
				mask: true,
				title: '发布中'
			});
			console.log(this.form);
			console.log('videoInfo');
			console.log(this.videoInfo);
			this.form.videoInfo = this.videoInfo;
			this.$H.post('post/addPost', this.form).then(res => {
				if (res.code == 200) {
					uni.redirectTo({
						url: '/pages/post/video-detail?id=' + res.result.id
					});
				}
				uni.hideLoading();
			});
		},
		submit() {
			if (!this.form.topic_id) {
				this.$u.toast('请选择圈子');
				return;
			}
			
			if (!this.form.content) {
				this.$u.toast('内容不能为空');
				return;
			}
			uni.showLoading({
				mask: true,
				title: '发布中'
			});

			// let mediaList = [];
			// e.forEach(function(item, index) {
			// 	console.log(item);
			// 	mediaList.push(item.response.url);
			// });

			// this.form.media = mediaList;
			this.form.media = this.imgAllUrl;
			console.log(this.form);
			this.$H.post('post/addPost', this.form).then(res => {
				if (res.code == 200) {
					uni.redirectTo({
						url: '/pages/post/detail?id=' + res.result.id
					});
				}
				uni.hideLoading();
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.title-input{
	border-bottom: 1px solid #F5F5F5;
	margin: 20rpx 0;
	padding: 20rpx 0;
}
.post-txt {
	width: 100%;
	padding: 20rpx 0;
	min-height: 300rpx;
}
.uni-uploader__img{
	border:0px !important
}
.title-input,.post-txt{
	padding-left:20rpx;
	padding-right:20rpx;
}
.upload-wrap {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 180rpx;
	height: 180rpx;
	background-color: #F5F5F5;
	margin-top: 30rpx;
	border-radius: 10rpx;
	.icon{
		width: 50rpx;
		height: 50rpx;
	}
	
	text{
		font-size: 24rpx;
	}
}

.upload-video{
	width: 180rpx;
	height: 180rpx;
	margin-top: 30rpx;
}

.choose-item{
	display: flex;
	align-items: center;
	padding: 20rpx;
	border-bottom: 1px solid #F5F5F5;
	&:last-child{
		border: 0;
	}
	.txt{
		margin-left: 20rpx;
	}
	.icon{
		width: 40rpx;
		height: 40rpx;
	}
	.u-icon{
		margin-left: auto;
		color: #999;
	}
	
	.add-icon{
		margin-left: 0;
	}
}

.submit-btn{
	margin-top: 50rpx;
}

.img-box {
	.img {
		width: 200rpx;
		height: 200rpx;
		position: relative;
		margin-left: 20rpx;
		margin-top: 20rpx;

		&:nth-child(3n + 1) {
			margin-left: 0;
		}

		.pic {
			width: 100%;
			height: 100%;
		}

		.close {
			width: 38rpx;
			height: 38rpx;
			position: absolute;
			top: -10rpx;
			right: -10rpx;
		}
	}

	.upload {
		background-color: #f6f6f6;

		.add-pic {
			width: 100rpx;
			height: 100rpx;
		}
	}
}


.u-upload {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}
.u-list-item {
    width: 210rpx;
    height: 210rpx;
    overflow: hidden;
    margin: 10rpx;
    border-radius: 10rpx;
    border: 1px solid #999;
    position: relative;
    border-radius: 10rpx;
    display: flex;
    align-items: center;
    justify-content: center;
}
.u-delete-icon{
    position: absolute;
    top: 10rpx;
    right: 10rpx;
    z-index: 10;
    background-color: #fa3534;
    border-radius: 100rpx;
    width: 44rpx;
    height: 44rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
	}
	.u-preview-image{
	    display: block;
	    width: 100%;
	    height: 100%;
	    border-radius: 10rpx;
	}
</style>
