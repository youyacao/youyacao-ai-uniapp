
	//  * All rights Reserved, Designed By www.youyacao.com <br>
	//  * @Description:登录相关方法 <br>
	//  * @version 蜻蜓AI系统  <br>
	//  * @author:成都市一颗优雅草科技有限公司  <br>
	//  * 注意：我司开源产品免费100%商用，但是必须遵循声明，详情查看LICENSE文件。
	//  * 需要商业用途或者定制开发等可访问songshu.youyacao.com  联系QQ: 422108995
	//  * 正版系统查询系统 zhengban.youyacao.com   优雅草QQ交流群：929353806


//登录相关方法
var Login = {
	//微信登录
	weixin(thiz,dataset) {
		if(uni.getUserProfile){
			uni.getUserProfile({
				lang: 'zh_CN',
				desc: '用于登陆',
				success: function (wxInfo) {
					uni.login({
						provider:'weixin',
						success: function (res) {
							let data={
								code:res.code,
								type: dataset.logintype,
								userInfo: JSON.stringify(wxInfo.userInfo)
							}
							thiz.$http.post(dataset.loginurl,data,{},'json').then(res=>{
								if(typeof res.data=='object'){
									thiz.setData({
										userInfo:res.data
									})
									thiz.$session.setUser(res.data)
								}
								if(thiz[dataset.callback]){
									thiz[dataset.callback](res)
								}else if(thiz[dataset.callback+"Function"]){
									thiz[dataset.callback+"Function"](res)
								}else if(thiz[dataset.callback+"Api"]){
									thiz[dataset.callback+"Api"](res)
								}
							})
						},
						fail: function () {
							wx.showModal({
								title: '获取用户信息',
								content: '请允许授权以便为您提供给服务',
								success: function (res) {
									if (res.confirm) {
										thiz.navigateTo(dataset)
									}
								}
							})
						}
					});
				},
				fail: function (res) {
					wx.showModal({
						title: '友情提示',
						content: '已拒绝小程序获取信息',
						showCancel: !1,
					})
				}
			})
		}else{
			uni.showToast({
				title: '登录失败，请在小程序上登录',
				icon: 'none'
			})
		}
	}
}

export default Login
