<template>
	<view class="container container333415">
		<view class="flex diygw-col-24 flex-direction-column justify-center items-center flex-nowrap flex-clz"> </view>
		<text class="diygw-col-24 logintitle-clz diygw-text-lg"> 优雅草科技AI制图 - 内部版本 </text>
		<text class="diygw-col-24 text-clz diygw-text-sm"> 支持内部员工和优雅草代理商登录 </text>
		<u-form-item class="diygw-col-24 username-clz diygw-form-item-small" labelPosition="top" prop="username">
			<text class="diy-icon-my margin-right-xs" style="color: #13beff; font-size: 32rpx"></text>
			<u-input :focus="usernameFocus" placeholder="请输入用户名" v-model="username"></u-input>
		</u-form-item>
		<u-form-item class="diygw-col-24 password-clz diygw-form-item-small" labelPosition="top" prop="password">
			<text class="diy-icon-lock margin-right-xs" style="color: #13beff; font-size: 32rpx"></text>
			<u-input :focus="passwordFocus" placeholder="请输入密码" v-model="password" type="password" :password-icon="true"></u-input>
		</u-form-item>
		<view class="flex diygw-col-24 button-clz">
			<button style="color: #ffffff !important; background-color: #13beff !important" @tap="navigateTo" data-type="userApi" :data-username="username" :data-password="password" class="diygw-btn md flex-sub margin-xs button-button-clz">点击登录</button>
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
				user: {
					msg: '',
					status: 0,
					success: true,
					data: {
						info: {
							user_id: 0,
							is_admin: 0,
							num: 0
						}
					}
				},
				logout: {
					msg: '未登录',
					status: -2,
					success: false,
					data: {}
				},
				usernameFocus: false,
				username: '',
				passwordFocus: false,
				password: ''
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
			async init() {},
			// 登录接口 API请求方法
			async userApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/login';
				let http_data = {
					username: param.username || this.username || 'admin',
					password: param.password || this.password || 'admin'
				};
				let http_header = {};

				let user = await this.$http.post(http_url, http_data, http_header, 'json');

				this.user = user;
				if (user.status == 0) {
					this.navigateTo({
						type: 'tip',
						tip: '登陆成功'
					});

					this.navigateTo({
						type: 'page',
						url: 'index'
					});
				} else {
					this.navigateTo({
						type: 'tip',
						tip: '登陆失败'
					});
				}
				this.$session.setUser(onlogin.data.info);
			},
			// 退出登录接口 API请求方法
			async logoutApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/logout';
				let http_data = {};
				let http_header = {};

				let logout = await this.$http.post(http_url, http_data, http_header, 'json');

				this.logout = logout;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.flex-clz {
		z-index: 1000;
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url(/static/grouppng.png);
		background-position: center center;
		height: 360rpx;
	}
	.logintitle-clz {
		color: #13beff;
		text-align: center;
	}
	.text-clz {
		color: #13beff;
		text-align: center;
	}
	.username-clz {
		margin-left: 30rpx;
		box-shadow: 0rpx 2rpx 6rpx 3px rgba(199, 181, 255, 0.2);
		overflow: hidden;
		width: calc(100% - 30rpx - 30rpx) !important;
		margin-top: 50rpx;
		margin-bottom: 30rpx;
		margin-right: 30rpx;
	}
	.password-clz {
		margin-left: 30rpx;
		box-shadow: 0rpx 2rpx 6rpx 3px rgba(199, 181, 255, 0.2);
		overflow: hidden;
		width: calc(100% - 30rpx - 30rpx) !important;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		margin-right: 30rpx;
	}
	.button-clz {
		margin-left: 20rpx;
		width: calc(100% - 20rpx - 20rpx) !important;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		margin-right: 20rpx;
	}
	.button-button-clz {
		margin: 6rpx !important;
	}
	.container333415 {
		background-size: contain;
	}
</style>
