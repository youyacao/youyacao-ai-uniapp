<template>
	<view class="container container333415">
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex1-clz">
			<view class="flex flex-wrap diygw-col-24 justify-between items-center flex44-clz">
				<text class="diygw-col-0 text48-clz text-red"> 内部专用 请勿外泄 </text>
			</view>
			<view v-for="(item, index) in tasks.data.list" :key="index" class="flex flex-wrap diygw-col-24 flex-direction-column flex46-clz">
				<view class="flex flex-wrap diygw-col-24 justify-between items-center flex47-clz">
					<text class="diygw-text-line2 diygw-col-24 text50-clz">
						{{ item.prompt }}
					</text>
					<text class="diygw-text-line1 diygw-col-16 text-clz text-grey">
						{{ item.task_id }}
					</text>
					<text v-if="item.status == 'succeed'" class="diygw-text-line1 diygw-col-7 text51-clz"> 已完成 </text>
					<text v-if="item.status == 'failed'" class="diygw-text-line1 diygw-col-7 text3-clz"> 失败 </text>
					<text v-if="item.status == 'processing'" class="diygw-text-line1 diygw-col-7 text2-clz"> 进行中 </text>
					<text v-if="item.status == 'submitted'" class="diygw-text-line1 diygw-col-7 text1-clz"> 已提交 </text>
				</view>
				<view class="flex flex-wrap diygw-col-24 justify-start items-center flex48-clz">
					<button @tap="navigateTo" data-type="chaApi" :data-task_id="item.task_id" :data-chatype="item.chatype" class="diygw-col-24 btn-clz diygw-btn-default">查询结果</button>
				</view>
			</view>
		</view>
		<view class="clearfix"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//用户全局信息
				userInfo: {},
				//页面传参
				globalOption: {},
				//自定义全局变量
				globalData: {},
				tasksNum: 1,
				tasks: {
					msg: '',
					status: 0,
					success: true,
					data: {
						list: [
							{
								id: 0,
								user_id: 0,
								task_id: '',
								prompt: '',
								status: '',
								result: '',
								chatype: 0,
								created_at: '',
								updated_at: ''
							}
						]
					}
				},
				cha: {
					msg: '',
					status: 0,
					success: true,
					data: {
						status: '',
						list: [
							{
								index: 0,
								url: ''
							}
						]
					}
				}
			};
		},
		onShow() {
			this.setCurrentPage(this);
		},
		onLoad(option) {
			this.setCurrentPage(this);
			if (option) {
				this.setData({
					globalOption: this.getOption(option)
				});
			}

			this.init();
		},
		methods: {
			async init() {
				await this.tasksApi();
			},
			// 分页查询任务数据接口 API请求方法
			async tasksApi(param) {
				let thiz = this;
				param = param || {};

				//如果请求要重置页面，请配置点击附加参数refresh=1  增加判断如输入框回调param不是对象
				if (param.refresh || typeof param != 'object') {
					this.tasksNum = 1;
				}

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/tasks';
				let http_data = {
					pageNum: this.tasksNum,
					pageSize: 10
				};
				let http_header = {};

				let tasks = await this.$http.post(http_url, http_data, http_header, 'json');

				let datarows = tasks.data.list;
				if (http_data.pageNum == 1) {
					this.tasks = tasks;
				} else if (datarows) {
					let rows = this.tasks.data.list.concat(datarows);
					tasks.data.list = rows;
					this.tasks = tasks;
				}
				if (datarows && datarows.length > 0) {
					this.tasksNum = this.tasksNum + 1;
				}
				if (tasks.success != true) {
					let flag = await this.showModal('查询失败，请联系管理员！');
				}

				this.navigateTo({
					type: 'tip',
					tip: '查询成功！'
				});
			},
			// 可灵任务查询 API请求方法
			async chaApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/tasks/cha';
				let http_data = {
					task_id: param.task_id || this.task_id,
					chatype: param.chatype || this.chatype
				};
				let http_header = {};

				uni.showLoading({
					mask: true,
					title: '加载中'
				});

				let cha = await this.$http.post(http_url, http_data, http_header, 'json');

				this.cha = cha;
				uni.hideLoading();

				if (cha.success != true) {
					let flag = await this.showModal(cha.msg);
				}
				if (cha.data.status == 'succeed') {
					if (param.chatype == 1) {
						this.navigateTo({
							type: 'copy',
							copy: cha.data.list[0].url,
							tip: ''
						});
						this.navigateTo({
							type: 'tip',
							tip: '图片url已经复制到剪贴板啦！或者长按保存哦！'
						});
						this.navigateTo({
							type: 'preview',
							img: cha.data.list[0].url
						});
						return;
					} else if (param.chatype == 2) {
						// 下载视频

						// 提醒用户下载中
						uni.showLoading({
							mask: true,
							title: '加载中'
						});
						// 1 将远程文件下载到小程序的内存中
						uni.downloadFile({
							url: cha.data.list[0].url,
							success: (res) => {
								// 2 成功下载后而且状态码为200时将视频保存到本地系统
								if (res.statusCode === 200) {
									uni.saveVideoToPhotosAlbum({
										filePath: res.tempFilePath
									});
									uni.hideLoading();
									// 提示用户下载成功
									uni.showToast({
										title: '下载成功',
										icon: 'success'
									});
									this.showModal('视频url已经复制到剪贴板啦！如果没有保存成功，请自行复制到浏览器下载！');
								}
								// 如果该资源不可下载或文件格式出错则提示用户
								else {
									uni.showToast({
										title: '资源格式错误，请联系管理员'
									});
								}
							},
							fail: (err) => {
								// 下载失败提醒
								uni.hideLoading();
								uni.showToast({
									title: '下载失败'
								});
							}
						});
						return;
					}
				}
				let flag = await this.showModal('任务可能还没有完成！当前状态' + cha.data.status);
			}
		},
		onReachBottom() {
			// 分页查询任务数据接口 API请求方法
			this.tasksApi();
		}
	};
</script>

<style lang="scss" scoped>
	.flex1-clz {
		padding-top: 10rpx;
		border-bottom-left-radius: 12rpx;
		padding-left: 10rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 12rpx;
		margin-right: 10rpx;
		background-color: #ffffff;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(100% - 10rpx - 10rpx) !important;
		border-top-left-radius: 12rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 12rpx;
		margin-bottom: 10rpx;
		padding-right: 10rpx;
	}
	.flex44-clz {
		padding-top: 10rpx;
		flex: 1;
		padding-left: 10rpx;
		padding-bottom: 10rpx;
		padding-right: 10rpx;
	}
	.text48-clz {
		padding-top: 0rpx;
		font-weight: bold;
		padding-left: 0rpx;
		font-size: 32rpx !important;
		padding-bottom: 0rpx;
		padding-right: 0rpx;
	}
	.flex46-clz {
		margin-left: 0rpx;
		width: calc(100% - 0rpx - 0rpx) !important;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		border-bottom: 2rpx solid #eee;
		margin-right: 0rpx;
	}
	.flex47-clz {
		padding-top: 10rpx;
		flex: 1;
		padding-left: 10rpx;
		padding-bottom: 10rpx;
		padding-right: 10rpx;
	}
	.text50-clz {
		font-weight: bold;
		font-size: 30rpx !important;
	}
	.text-clz {
		font-weight: bold;
	}
	.text51-clz {
		background-color: rgba(255, 162, 162, 0.27);
		padding-top: 6rpx;
		border-bottom-left-radius: 6rpx;
		overflow: hidden;
		color: #ff5733;
		padding-left: 6rpx;
		padding-bottom: 6rpx;
		border-top-left-radius: 6rpx;
		border-top-right-radius: 6rpx;
		border-bottom-right-radius: 6rpx;
		text-align: center;
		padding-right: 6rpx;
	}
	.text3-clz {
		background-color: rgba(255, 162, 162, 0.27);
		padding-top: 6rpx;
		border-bottom-left-radius: 6rpx;
		overflow: hidden;
		color: #ff5733;
		padding-left: 6rpx;
		padding-bottom: 6rpx;
		border-top-left-radius: 6rpx;
		border-top-right-radius: 6rpx;
		border-bottom-right-radius: 6rpx;
		text-align: center;
		padding-right: 6rpx;
	}
	.text2-clz {
		background-color: rgba(255, 162, 162, 0.27);
		padding-top: 6rpx;
		border-bottom-left-radius: 6rpx;
		overflow: hidden;
		color: #ff5733;
		padding-left: 6rpx;
		padding-bottom: 6rpx;
		border-top-left-radius: 6rpx;
		border-top-right-radius: 6rpx;
		border-bottom-right-radius: 6rpx;
		text-align: center;
		padding-right: 6rpx;
	}
	.text1-clz {
		background-color: rgba(255, 162, 162, 0.27);
		padding-top: 6rpx;
		border-bottom-left-radius: 6rpx;
		overflow: hidden;
		color: #ff5733;
		padding-left: 6rpx;
		padding-bottom: 6rpx;
		border-top-left-radius: 6rpx;
		border-top-right-radius: 6rpx;
		border-bottom-right-radius: 6rpx;
		text-align: center;
		padding-right: 6rpx;
	}
	.flex48-clz {
		padding-top: 10rpx;
		color: #808080;
		flex: 1;
		padding-left: 10rpx;
		padding-bottom: 10rpx;
		padding-right: 10rpx;
	}
	.btn-clz {
		background-color: #13beff;
		padding-top: 20rpx;
		border-bottom-left-radius: 20rpx;
		overflow: hidden;
		color: #fff;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		text-align: center;
		padding-right: 20rpx;
	}
	.container333415 {
	}
</style>
