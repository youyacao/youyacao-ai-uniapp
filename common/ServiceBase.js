
	//  * All rights Reserved, Designed By www.youyacao.com <br>
	//  * @Description:基础服务 <br>
	//  * @version 蜻蜓AI系统  <br>
	//  * @author:成都市一颗优雅草科技有限公司  <br>
	//  * 注意：我司开源产品免费100%商用，但是必须遵循声明，详情查看LICENSE文件。
	//  * 需要商业用途或者定制开发等可访问songshu.youyacao.com  联系QQ: 422108995
	//  * 正版系统查询系统 zhengban.youyacao.com   优雅草QQ交流群：929353806





import __config from '../siteinfo'
import Session from './Session'
class ServiceBase {
	constructor() {
		Object.assign(this, {
			$$basePath: __config.basePath
		})
		this.__init()
	}

	/**
	 * __init
	 */
	__init() {
		this.__initDefaults()
		this.__initMethods()
	}


	
	__initInterceptor(){
		
	}
	/**
	 * __initDefaults
	 */
	__initDefaults() {
		// 方法名后缀字符串
		this.suffix = ''

		// 发起请求所支持的方法
		this.instanceSource = {
			method: [
				'OPTIONS',
				'GET',
				'HEAD',
				'POST',
				'PUT',
				'PATCH',
				'DELETE',
				'TRACE',
				'CONNECT',
			]
		}
	}

	/**
	 * 遍历对象构造方法，方法名以小写字母+后缀名
	 */
	__initMethods() {
		for (let key in this.instanceSource) {
			this.instanceSource[key].forEach((method, index) => {
				this[method.toLowerCase() + this.suffix] = (...args) => this.__defaultRequest(method, ...
					args)
			})
		}
	}

	/**
	 * 以uni.request作为底层方法
	 * @param {String} method 请求方法
	 * @param {String} url    接口地址
	 * @param {Object} params 请求参数
	 * @param {Object} header 设置请求的 header
	 * @param {String} dataType 请求的数据类型
	 */
	__defaultRequest(method = '', url = '', params = {}, header = {}, dataType = 'json') {
		const $$header = Object.assign({}, this.setHeaders(), header)
		const $$url = this.setUrl(url,params)
		if(params.url){
			params.url = this.setUrl(params.url,params)
		}

		// 注入拦截器
		const chainInterceptors = (promise, interceptors) => {
			for (let i = 0, ii = interceptors.length; i < ii;) {
				let thenFn = interceptors[i++]
				let rejectFn = interceptors[i++]
				promise = promise.then(thenFn, rejectFn)
			}
			return promise
		}
	

		// 请求参数配置
		const $$config = {
			url: $$url,
			data: params,
			header: $$header,
			method: method,
			dataType: dataType,
		}

		let requestInterceptors = []
		let responseInterceptors = []
		let reversedInterceptors = this.setInterceptors()
		let promise = this.__resolve($$config)

		// 缓存拦截器
		reversedInterceptors.forEach((n, i) => {
			if (n.request || n.requestError) {
				requestInterceptors.push(n.request, n.requestError)
			}
			if (n.response || n.responseError) {
				responseInterceptors.unshift(n.response, n.responseError)
			}
		})

		// 注入请求拦截器
		promise = chainInterceptors(promise, requestInterceptors)

		// 发起HTTPS请求
		promise = promise.then(this.__http)

		// 注入响应拦截器
		promise = chainInterceptors(promise, responseInterceptors)

		// 接口调用成功，res = {data: '开发者服务器返回的内容'}
		promise = promise.then(res => res.data, err => err)

		return promise
	}

	/**
	 * __http - uni.request
	 */
	__http(obj) {
		return new Promise((resolve, reject) => {
			obj.success = (res) => resolve(res)
			obj.fail = (res) => reject(res)
			uni.request(obj)
		})
	}

	/**
	 * __resolve
	 */
	__resolve(res) {
		return new Promise((resolve, reject) => {
			resolve(res)
		})
	}

	/**
	 * __reject
	 */
	__reject(res) {
		return new Promise((resolve, reject) => {
			reject(res)
		})
	}

	getPathValue(obj, desc) {
	  var arr = desc.split('.');
	  while (arr.length) {
	    obj = obj[arr.shift()];
	  }
	  return obj;
	}
	
	
	getRestUrl(url,data){
	  if(!data){
		return url
	  }else if(data !== null && typeof data === 'object'){
		url = url.replace(/\{\{(.+?)\}\}/g, (_, key) => {
			let name = key.trim()
			return this.getPathValue(data,name)
		})
		url = url.replace(/\{(.+?)\}/g, (_, key) => {
			let name = key.trim()
			return this.getPathValue(data,name)
		})
		return url;
	  }
	  return url;
	}
	
	/**
	 * 设置请求路径
	 */
	setUrl(url,param) {
	    let ishttp = /^http(s)?:\/\/.*/i.test(url);
		url = this.getRestUrl(url,param)
		if(ishttp){
			return url
		}
		let basePath = this.$$basePath;
		//方便用户发布后随时修改全局API域名
		//判断用户有没有自定义全局请求API前缀
		//uni.setStorageSync("basePath","你的域名")
		let settingBasePath = uni.getStorageSync("basePath");
		//如果有，即改变默认basepath;
		if(settingBasePath){
			basePath = settingBasePath;
		}
		if(url.startsWith("/")||url.endsWith("/")){
			return `${basePath}${this.$$prefix}${url}`
		}else{
			return `${basePath}/${this.$$prefix}${url}`
		}
	}

	/**
	 * 设置请求的 header , header 中不能设置 Referer
	 */
	setHeaders() {
		return {
			// 'Accept': 'application/json', 
			// 'Content-type': 'application/json', 
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}

	/**
	 * 设置request拦截器
	 */
	setInterceptors() {
		this.interceptors =  [{
			request: (request) => {
				request.header = request.header || {}
				request.requestTimestamp = new Date().getTime()
				if (Session.getToken()) {
					request.header.Authorization = Session.getToken()
				}
				uni.showNavigationBarLoading()
				if (request.data['redirecturl']) {
					Session.setRedirecturl(request.data['redirecturl']);
					delete request.data['redirecturl'];
				}
				delete request.data['loadmsg'];
				return request;
			},
			requestError: (requestError) => {
				uni.hideToast()
				return requestError
			},
			response: (response) => {
			    if(!response){
					return
				}
				response.responseTimestamp = new Date().getTime()
				uni.hideNavigationBarLoading()
				if (response.data.code == 401||response.data.status == 401) {
					Session.clearUser();
					uni.reLaunch({
						url: getApp().globalData.homePage
					});
				}
				return response;
			},
			responseError: (responseError) => {
				uni.hideNavigationBarLoading()
				return responseError;
			},
		}]
		this.__initInterceptor()
		return this.interceptors
	}
}

export default ServiceBase
