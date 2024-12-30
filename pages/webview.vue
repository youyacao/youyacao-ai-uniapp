

<!-- 
	/**
	 * All rights Reserved, Designed By www.youyacao.com <br>
	 * @Description:web-view组件 <br>
	 * @version 蜻蜓AI系统  <br>
	 * @author:成都市一颗优雅草科技有限公司  <br>
	 * 注意：我司开源产品免费100%商用，但是必须遵循声明，详情查看LICENSE文件。
	 * 需要商业用途或者定制开发等可访问songshu.youyacao.com  联系QQ: 422108995
	 * 正版系统查询系统 zhengban.youyacao.com   优雅草QQ交流群：929353806
	 */
 -->



<template>
	<view class="start">
		<web-view :src="url"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				url: ''
			};
		},
		onLoad(options) {
			if (options && options.url) {
				this.url = decodeURIComponent(options.url);
			}
		},
		onShow() {},
		onShareAppMessage: function () {}
	};
</script>

<style>
	page,
	body {
		width: 100%;
		height: 100%;
		position: relative;
		color: #333;
		background-color: #f8f8f8;
		font-size: 16px;
		font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
	}

	.start {
		height: 100%;
	}

	.start swiper {
		height: 100%;
	}

	.start image {
		width: 100%;
		height: 100%;
	}
</style>
