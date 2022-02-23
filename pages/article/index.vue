<template>
	<view>
		<swiperHead 
		:tablist="tablist"
		:tabindex="tabindex"
		:linewidth="linewidth"
		:scroll="scroll"
		@tabtap="tabtap"
		@watchscroll="watchscroll"
		></swiperHead>
		<view class="uni-tab-bar">
		 <swiper class="swiper-box" :style="{height:swheigth+'px'}" :current="tabindex" @change="watchchange"> 
				<swiper-item v-for="(items,index1) in newlist" :key="index1">
					 <scroll-view scroll-y class="list" @scrolltolower="loadtop(index1)" 
					  scroll-with-animation="true">
						<template v-if="items.list.length>0">
							<!--图文列表-->
							<block v-for="(item,index) in items.list" :key="index">
							    <indexList 
								 :item="item" 
								 :index="index"
								 @guanzhu="guanzhu(index)"
								 @caozuo="caozuo($event,index)"></indexList>
							</block>
							 <!--上拉加载-->
							<loadMore :loadtext="items.loadtext"></loadMore>
						</template>
						<template v-else>
							 <!--无数据-->
							<noThing></noThing>
						</template>
					 </scroll-view>
				</swiper-item>
		</swiper>
	    </view>
		<q-tabbar :active="0" :count="msgCount"></q-tabbar>
	</view>
</template>

<script>
	import indexList from '../../compoents/index/index-list.vue';
	import swiperHead from '../../compoents/index/swiper-head.vue';
	import loadMore from '../../compoents/common/load-more.vue';
	import noThing from '../../compoents/common/no-thing.vue';
	var _self;
	export default {
		components:{
			indexList,
			swiperHead,
			loadMore,
			noThing
		},
		data() {
			return {
				swheigth:0,
				tabindex:0,
				linewidth:38,
				scroll:0,
				scrollwidth:360,//这个值通过swiperHead计算得来的，可以进去看一下
				tablist:[
					{name:"推荐",id:"tuijian"},
					     {name:"学习",id:"yule"},
					     {name:"嬉戏",id:"xiha"},
					     {name:"宝妈",id:"meinv"},
					     {name:"宝爸",id:"keji"},
					     {name:"方法",id:"caifu"}
				],
				newlist:[
					{   
						loadtext:"上拉加载更多👆",
						list:[
							// {
							// 	userimg:"../../static/userpic/10.jpg",
							// 	username:"昵称",
							// 	guanzhupd:true,
							// 	contents:"我是标题",
							// 	type:"img",//img图片，video视频
							// 	contentsimg:"../../static/datapic/14.jpg",
							// 	biaoqing:{
							// 		index:1,//0表示无操作，1表示顶了，2表示踩了
							// 		dingnum:10,
							// 		cainum:10
							// 	},
							// 	pinglunnum:10,
							// 	sharenum:100
							// },
							// {
							// 	userimg:"../../static/userpic/10.jpg",
							// 	username:"昵称",
							// 	guanzhupd:true,
							// 	contents:"我是标题",
							// 	type:"video",//img图片，video视频
							// 	playnum:"20w",
							// 	playtime:"2:40",
							// 	contentsimg:"../../static/datapic/14.jpg",
							// 	biaoqing:{
							// 		index:1,//0表示无操作，1表示顶了，2表示踩了
							// 		dingnum:10,
							// 		cainum:10
							// 	},
							// 	pinglunnum:10,
							// 	sharenum:100
							// }
						],
						page:1
					},
					{   loadtext:"上拉加载更多👆",
						list:[
							// {
							// 	userimg:"https://thirdwx.qlogo.cn/mmopen/vi_32/ibExFwaPU2hQGSslDicARo6ZvXnkvvhhZpDbE3potm9Y2G8skbEdo7fmkGliaXJXHMnUA3pLQhrCQicMkia2nfH9l2Q/132",
							// 	username:"昵称",
							// 	guanzhupd:false,
							// 	contents:"我是标题",
							// 	type:"img",//img图片，video视频
							// 	contentsimg:"https://kaiyuan.ymeoo.com/uploads/postImages/20211011/90334c762855f771f8fb394dc107d2cf.jpeg",
							// 	biaoqing:{
							// 		index:0,//0表示无操作，1表示顶了，2表示踩了
							// 		dingnum:10,
							// 		cainum:10
							// 	},
							// 	pinglunnum:10,
							// 	sharenum:100
							// },
							// {
							// 	userimg:"https://thirdwx.qlogo.cn/mmopen/vi_32/ibExFwaPU2hQGSslDicARo6ZvXnkvvhhZpDbE3potm9Y2G8skbEdo7fmkGliaXJXHMnUA3pLQhrCQicMkia2nfH9l2Q/132",
							// 	username:"昵称",
							// 	guanzhupd:true,
							// 	contents:"我是标题",
							// 	type:"video",//img图片，video视频
							// 	playnum:"20w",
							// 	playtime:"2:40",
							// 	contentsimg:"https://kaiyuan.ymeoo.com/uploads/postImages/20211011/f2c10a2487596f1d473c9882f394964c.jpg",
							// 	biaoqing:{
							// 		index:1,//0表示无操作，1表示顶了，2表示踩了
							// 		dingnum:10,
							// 		cainum:10
							// 	},
							// 	pinglunnum:10,
							// 	sharenum:100
							// }
						],
						page:1
					},
					{loadtext:"上拉加载更多👆",
						list:[
							
						],
						page:1
					},
					{loadtext:"上拉加载更多👆",
						list:[
							
						],
						page:1
					},
					{loadtext:"上拉加载更多👆",
						list:[
							
						],
						page:1
					},
					{loadtext:"上拉加载更多👆",
						list:[
							
						],
						page:1
					}
				]
				
			}
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
			    url: '../search/search'			   
			});
		},
		onNavigationBarButtonTap(e){
			if(e.index==1){
				uni.navigateTo({
				   url:'../fabu/fabu'	   
				});
			}
			},
		methods:{
			watchscroll(e){			
			},
			tabtap(index){
				this.tabindex=index;
				console.log('tabtap:');
				console.log(index);
			},
			//关注
			guanzhu(index1){			
				let o=this.newlist[this.tabindex].list[index1];
				o.guanzhupd=true;
				uni.showToast({
					title:'关注成功',
					mask:true,
					icon:'none'
				})
			},
			//顶踩操作
			caozuo(type,index2){
				let ok=this.newlist[this.tabindex].list[index2];
				switch (type){
					case "ding":
					if(ok.biaoqing.index==1){return;}
					ok.biaoqing.dingnum++;					
					if(ok.biaoqing.index==2){
						ok.biaoqing.cainum--;
					}
					ok.biaoqing.index=1;
						break;
					case "cai":
					if(ok.biaoqing.index==2){return;}
					ok.biaoqing.cainum++;
					if(ok.biaoqing.index==1){
						ok.biaoqing.dingnum--;
					}
					ok.biaoqing.index=2;
						break;
			}
			},
			//监听导航的index
			watchchange(e){
				this.tabindex=e.detail.current;
			},
			//上拉事件
			async loadtop(index1){
				console.log('index1具体值');
				console.log(index1);
				console.log(this.tablist[index1].id);//分类
				if(this.newlist[index1].loadtext!="上拉加载更多👆"){return;}					
				this.newlist[index1].loadtext="别拉了 没力气了o(*￣▽￣*)ブ";
				let page = this.newlist[index1].page;
				console.log('page::::::');
				console.log(page);
				const sendData = {
					page,
				};			
				const res = await this.$myRequest({url: '/api/article/index',method:'post',data: sendData });
				// console.log(this.config);
				let tempList = res.data.list;
							
				tempList.forEach((item,key)=>{
					// if(item.checked){
				
					this.newlist[index1].list.push(item);
					
					
				})
				
				
				console.log(res.data.last_page);
				console.log(res.data.current_page);
				if(res.data.last_page >= res.data.current_page){
					this.newlist[index1].loadtext=="没有更多数据了/(ㄒoㄒ)/~~";
				}else{
					this.newlist[index1].page ++;
					this.newlist[index1].loadtext=="上拉加载更多👆";
				}
				// this.newlist[index1].loadtext=="没有更多数据了/(ㄒoㄒ)/~~";
				/**
				setTimeout(()=> {
					let obj={
						userimg:"../../static/userpic/10.jpg",
						username:"昵称",
						guanzhupd:false,
						contents:"我是标题",
						type:"img",//img图片，video视频
						contentsimg:"../../static/datapic/14.jpg",
						biaoqing:{
							index:0,//0表示无操作，1表示顶了，2表示踩了
							dingnum:10,
							cainum:10
						}, 
						pinglunnum:10,
						sharenum:100
					};
					this.newlist[index1].list.push(obj);
					this.newlist[index1].loadtext="上拉加载更多👆";
					 
					  
					//this.newlist[index1].loadtext="没有更多数据了/(ㄒoㄒ)/~~";
					 
				}, 1000);
				**/
			}				
		},
		watch:{
			tabindex(e){
				console.log(e);
				//监听index来滑动导航栏
				this.loadtop(e);
				if(e==0){
				this.scroll=this.scrollwidth*(0/100);
				}
				else if(e==1){
				this.scroll=this.scrollwidth*(5/100);
				}
				else if(e==2){
				this.scroll=this.scrollwidth*(10/100);
				}
				else if(e==3){
				this.scroll=this.scrollwidth*(10/100);
				}
				else if(e==4){
				this.scroll=this.scrollwidth*(15/100);
				}
				else{
				this.scroll=this.scrollwidth*(100/100);
				}							
			}
		},
		onLoad() {	
			this.loadtop(0);
		uni.getSystemInfo({
		    success:res=> {
				console.log(res)
		        let height=res.windowHeight-uni.upx2px(100);
				this.swheigth=height;	
		    }
		});				  
		}
		
	}
</script>