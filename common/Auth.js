
	//  * All rights Reserved, Designed By www.youyacao.com <br>
	//  * @Description:用户验证 <br>
	//  * @version 蜻蜓AI系统  <br>
	//  * @author:成都市一颗优雅草科技有限公司  <br>
	//  * 注意：我司开源产品免费100%商用，但是必须遵循声明，详情查看LICENSE文件。
	//  * 需要商业用途或者定制开发等可访问songshu.youyacao.com  联系QQ: 422108995
	//  * 正版系统查询系统 zhengban.youyacao.com   优雅草QQ交流群：929353806
	



import Session from './Session';
function authPermission(permission) {
	//如果用户有role权限 且为admin直接返回
	const role =  Session.getUser()&&Session.getUser().role;
	if(role && role=='admin'){
		return true;
	}
	const all_permission = "*:*:*"
	const permissions = Session.getUser()&&Session.getUser().permissions;
	if (permissions && permissions.length > 0) {
		return permissions.some(v => {
			return all_permission === v || v === permission
		})
	} else {
		return false
	}
}

function authRole(role) {
	const super_admin = "admin"
	const roles = Session.getUser()&&Session.getUser().roles
	if (roles && roles.length > 0) {
		return roles.some(v => {
			return super_admin === v || v === role
		})
	} else {
		return false
	}
}

export default {
	// 验证用户是否具备某权限
	auth(permission) {
		return authPermission(permission)
	},
	// 验证用户是否含有指定权限，只需包含其中一个
	authOr(permissions) {
		return permissions.some(item => {
			return authPermission(item)
		})
	},
	// 验证用户是否含有指定权限，必须全部拥有
	authAnd(permissions) {
		return permissions.every(item => {
			return authPermission(item)
		})
	},
	// 验证用户是否具备某角色
	role(role) {
		return authRole(role)
	},
	// 验证用户是否含有指定角色，只需包含其中一个
	roleOr(roles) {
		return roles.some(item => {
			return authRole(item)
		})
	},
	// 验证用户是否含有指定角色，必须全部拥有
	roleAnd(roles) {
		return roles.every(item => {
			return authRole(item)
		})
	}
}