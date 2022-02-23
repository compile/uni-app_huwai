<template>
	<view>
		<view class="fiexd">
			<view class="year">
				<view class="btn" @click="switchYear(-1)">
					<u-icon name="arrow-left"></u-icon>
				</view>
				<view class="title">{{check.year}}</view>
				<view class="btn" @click="switchYear(1)">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="week">
				<view v-for="item of fixed.week" :key="item" class="how">{{item}}</view>
			</view>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll">
				<template v-for="item of check.month_list">
					<view class="date">{{check.year+'年'+item.month+'月'}}</view>
					<view class="month">
						<view v-if="item.week!=0" class="day"
							:style="'margin-left: calc(calc(calc(100vw - 40rpx) / 7) * '+(item.week - 1)+');'"></view>
						<view v-for="value of item.num" @click="checkClass(item.time,value)"
							:class="[showReturnClass(item.time,value),'day']">
							{{value+1}}

							<view class="status">
								<view v-if="hua(item.time,value)">
									起租
								</view>
								<view v-if="gua(item.time,value)">
									归还
								</view>
							</view>
							<view class="num" v-if="gua(item.time,value) || (hua(item.time,value) && check.num != 0)">
								共{{check.num}}天
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
		</view>
		<view class="fiexd-btn">
			<view @click="remove" class="remove">重置</view>
			<view @click="save" :class="[form.end_time==0 || form.start_time ==0 ?'no':'','save']">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			init_year: {
				type: String | Number,
				required: false,
				default () {
					return null
				}
			},
			show_num: {
				type: String | Number,
				required: false,
				default () {
					return 1
				}
			},
			start: {
				type: Object,
				required: false,
				default () {
					return null
				}
			},
			end: {
				type: Object,
				required: false,
				default () {
					return null
				}
			},
			bidden_list: {
				type: Array,
				required: false,
				default () {
					return []
				}
			},
			time_list: {
				type: Function,
				required: false
			}
		},
		data() {
			return {
				fixed: {
					week: ["日", "一", "二", "三", "四", "五", "六"]
				},
				init: {
					start_time: 0, //开始时间戳
					end_time: 0, //结束时间戳
					start_year: 0, //开始年
					end_year: 0, //结束年
					year_list: [], //年的集合
					start_month: 0, //开始的月份
					end_month: 0, //结束的月份
					start_day: 0, //开始的日子
					end_day: 0, //结束的日子
					ben_time: [] //禁止操作的时间选择
				},
				check: { //选择
					year: 0, //选择的年份
					month_list: [], //显示的月份集合
					num: 0, //共计多少天
				},
				form: {
					start_time: 0, //开始时间
					end_time: 0 //结束时间
				}
			};
		},
		created() {
			this.init_func();
		},
		methods: {
			init_func() {
				///可以查看多少年进行初始化和初始化年份和结束年份
				let newDate = new Date();
				let year = this.init_year;
				if (this.$u.test.isEmpty(year)) {
					year = newDate.getFullYear();
				}
				let year_list = [];
				for (let i = 0; i < this.show_num; i++) {
					year_list.push(year);
					year++;
				}
				this.init.year_list = year_list;
				this.check.year = year_list[0]; //选择的当前的年份
				this.init.start_year = year_list[0]; //开始的年份
				this.init.end_year = year_list[year_list.length - 1]; //最后一位

				//不为空的时候
				let start_month = this.start;
				if (this.$u.test.isEmpty(start_month)) {
					start_month = {
						month: this.getMonth(newDate),
						start: newDate.getDate(), //没有的话就是现在的时间
					}
				}

				let end_month = this.end;
				if (this.$u.test.isEmpty(end_month)) {
					let endNewDate = new Date(this.init.end_year, 12, 0);
					end_month = {
						month: 12,
						end: endNewDate.getDate(), //没有的话就是现在的时间
					}
				}
				//生成时间戳
				this.init.start_time = this.getNewDate(this.init.start_year, start_month.month, start_month.start)
					.getTime();
				this.init.end_time = this.getNewDate(this.init.end_year, end_month.month, end_month.end).getTime();
				this.init.start_month = start_month.month;
				this.init.start_day = start_month.start;
				this.init.end_month = end_month.month;
				this.init.end_day = end_month.end;
				//今年有多少
				this.setMonthList(this.check.year);

				this.init.ben_time = this.getDateToTime(this.bidden_list);
			},
			setMonthList(checkYear) {
				let start = this.init.start_month;
				if (checkYear != this.init.start_year) {
					//如果年份相等的话
					start = 1;
				}

				let end = this.init.end_month;
				if (checkYear != this.init.end_year) {
					end = 12;
				}
				this.check.year = checkYear;
				this.check.month_list = [];
				//生成
				let k = 0;
				for (let i = start; i <= end; i++) {
					let newDate = new Date(checkYear, i, 0);
					let oneNewDate = this.getNewDate(checkYear, i, 1);
					this.check.month_list.push({
						month: i,
						num: newDate.getDate(),
						time: oneNewDate.getTime(),
						week: oneNewDate.getDay()
					});
					k++;
				}

				if (checkYear == this.init.end_year) {
					let newDate = this.getNewDate(checkYear, end, 1);
					this.check.month_list[k - 1] = {
						month: end,
						num: this.init.end_day,
						time: newDate.getTime(),
						week: newDate.getDay()
					}
				}
			},
			save() {
				this.$emit('time_list', this.form);
			},
			showReturnClass(tiemstamp, index) {
				//进行反馈时间是否可以操作
				//首先判断时间是否是自定义的，自定义的话之前的时间是不可以选择的
				let sumTimestamp = tiemstamp + (index * 86400000);
				if (sumTimestamp < this.init.start_time || sumTimestamp > this.init.end_time || this.init.ben_time.indexOf(
						sumTimestamp) != '-1') {
					return 'ben-bg';
				}

				if (this.form.start_time == sumTimestamp && this.form.end_time == sumTimestamp) {
					return 'one-bg';
				}

				if (this.form.start_time == sumTimestamp || this.form.end_time == sumTimestamp) {
					return 'check-bg';
				}

				if (this.form.start_time < sumTimestamp && this.form.end_time > sumTimestamp) {
					return 'within-bg';
				}
			},
			checkClass(tiemstamp, index) {
				//点击
				let sumTimestamp = tiemstamp + (index * 86400000);
				if (sumTimestamp < this.init.start_time || sumTimestamp > this.init.end_time || this.valiDateBan(
						sumTimestamp)) {
					uni.showToast({
						title: "存在无法选择的日期",
						icon: "none"
					});
					return;
				}

				if (this.form.start_time != 0 && this.form.end_time != 0) {
					this.form = {
						start_time: 0,
						end_time: 0
					};
					this.check.num = 0;
				}

				if (this.form.start_time == 0) {
					//选择的时间
					this.form.start_time = sumTimestamp;
				} else {
					this.form.end_time = sumTimestamp;
					if (this.form.start_time > sumTimestamp) {
						this.form.end_time = this.form.start_time;
						this.form.start_time = sumTimestamp;
					}

					this.check.num = parseInt([(this.form.end_time - this.form.start_time) / 86400000]) + 1;
				}
			},
			switchYear(i) {
				let year = this.check.year + i;
				if (this.init.year_list.indexOf(year) == '-1') {
					uni.showToast({
						title: "超过了可以选择的年份",
						icon: "none"
					});
					return;
				}
				this.setMonthList(year);
				this.check.year = year;
			},
			getMonth(newDate) {
				return newDate.getMonth() + 1;
			},
			getNewDate(year, month, day) {
				return new Date(year, month - 1, day);
			},
			hua(tiemstamp, index) {
				let sumTimestamp = tiemstamp + (index * 86400000);
				if (this.form.start_time == sumTimestamp) {
					return true;
				}
				return false;
			},
			gua(tiemstamp, index) {
				let sumTimestamp = tiemstamp + (index * 86400000);
				if (this.form.end_time == sumTimestamp) {
					return true;
				}
				return false;
			},
			getDateToTime(list) {
				if (!this.$u.test.isEmpty(list)) {
					return list.map(function(val) {
						return new Date(val + ' 00:00:00').getTime();
					});
				}
				return [];
			},
			valiDateBan(time) {
				if (this.init.ben_time.indexOf(time) != '-1') {
					return true;
				}
				let start = this.form.start_time;
				let end = this.form.end_time;
				if (start == 0 || (start != 0 && end != 0)) {
					return false;
				}
				end = time;
				if (start > end) {
					[start, end] = [end, start];
				}
				for (let item of this.init.ben_time) {
					if (item >= start && item <= end) {
						return true;
					}
				}
				return false;
			},
			remove() {
				this.form.start_time = 0;
				this.form.end_time = 0;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fiexd-btn {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.save {
			width: 100%;
			height: 100rpx;
			text-align: center;
			background: #19be6b;
			color: white;
			line-height: 100rpx;
		}

		.no {
			background: #F3F4F6;
			color: #aaaaaa;
		}

		.remove {
			width: 100%;
			height: 100rpx;
			text-align: center;
			background: #dd6161;
			color: white;
			line-height: 100rpx;
		}
	}

	.fiexd {
		height: 100rpx;

		.year {
			height: 50rpx;
			padding: 0 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				text-align: center;
				align-items: center;
			}

			.btn {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.week {
			display: flex;
			height: 50rpx;
			padding: 0 20rpx;
			background: #F3F4F6;

			.how {
				width: calc(calc(100vw - 40rpx) / 7);
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.main {
		padding: 0 20rpx;

		.scroll {
			width: 100%;
			height: calc(100vh - 200rpx);

			.date {
				height: 50rpx;
				text-align: center;
				line-height: 50rpx;
				margin: 20rpx 0;
				font-weight: bold;
			}

			.month {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				margin-bottom: 20rpx;

				.day {
					width: calc(calc(100vw - 40rpx) / 7);
					height: calc(calc(100vw - 40rpx) / 7);
					display: flex;
					justify-content: center;
					align-items: center;
					flex-flow: column;
					position: relative;


					.status {
						display: flex;
						font-size: 20rpx;
						justify-content: center;
						align-items: center;
					}


					.num {
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 20rpx;
					}
				}

				.ben-bg {
					color: #71d5a1;
				}

				.one-bg {
					background: #18b566;
					color: white;
					border-radius: 10rpx;
				}

				.within-bg {
					color: white;
					background: #dbf1e1;
				}

				.check-bg {
					color: white;
					background: #19be6b;
				}
			}
		}
	}
</style>
