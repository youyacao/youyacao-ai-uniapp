

	//  * All rights Reserved, Designed By www.youyacao.com <br>
	//  * @Description:请求数据封装<br>
	//  * @version 蜻蜓AI系统  <br>
	//  * @author:成都市一颗优雅草科技有限公司  <br>
	//  * 注意：我司开源产品免费100%商用，但是必须遵循声明，详情查看LICENSE文件。
	//  * 需要商业用途或者定制开发等可访问songshu.youyacao.com  联系QQ: 422108995
	//  * 正版系统查询系统 zhengban.youyacao.com   优雅草QQ交流群：929353806



import ServiceBase from './ServiceBase';
import Session from './Session';
class Service extends ServiceBase {
	constructor() {
		super();
		this.$$prefix = '';
	}

	/**
	 * 初始化默认拦截器
	 */
	__initInterceptor() {}

	//获取POST数据
	postData(params, url) {
		return this.post(url || this.$$path.data, params);
	}

	//获取GET数据
	getData(params, url) {
		return this.get(url || this.$$path.data, params);
	}

	//保存数据
	saveData(params, url) {
		return this.post(url || this.$$path.save, params);
	}

	//删除数据
	delData(params, url) {
		return this.post(url || this.$$path.del, params);
	}
}

export default Service;
