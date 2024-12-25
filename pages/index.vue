<template>
	<view class="container container333415">
		<u-navbar :isSlot="true" :isFixed="false" :isMarginRight="false" :borderBottom="false" :background="headerBackgroundStyle" title="" :backTextStyle="{ color: 'inherit' }" backIconColor="#fff" titleColor="inherit" :isHome="false" :isBack="false">
			<view :background="headerBackgroundStyle" class="flex align-center diygw-text-md text-bold align-center flex-nowrap diygw-col-24 justify-between items-center">
				<image src="/static/banner-blue.png" class="response diygw-col-7 image10-clz" mode="widthFix"></image>
				<button v-show="userInfo.is_admin == '1'" @tap="navigateTo" data-type="openmodal" data-id="modal4" class="diygw-col-6 btn-clz diygw-btn-default">管理员功能</button>
				<button @tap="navigateTo" data-type="logoutApi" class="diygw-col-6 btn1-clz diygw-btn-default">退出登录</button>
			</view>
		</u-navbar>
		<view class="flex swipers diygw-col-24 swipers-clz">
			<swiper :current="swipersIndex" class="swiper swiper-indicator_rect_radius" @change="changeSwipers" indicator-color="rgba(51, 51, 51, 0.39)" indicator-active-color="rgba(64, 64, 64, 0.93)" indicator-dots="true" autoplay interval="3000" circular="true" style="height: 240rpx">
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap flex flex-direction-column">
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center flex2-clz">
							<text class="diygw-col-24 text4-clz"> 一颗优雅草科技 </text>
							<text class="diygw-col-24"> 开启全新AI探索之旅 </text>
						</view>
					</view>
				</swiper-item>
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap flex flex-direction-column"> </view>
				</swiper-item>
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap flex flex-direction-column"> </view>
				</swiper-item>
			</swiper>
		</view>
		<view class="flex flex-wrap diygw-col-24 flex20-clz">
			<view class="flex diygw-col-12 items-center flex-nowrap flex27-clz" @tap="navigateTo" data-type="openmodal" data-id="modal1">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column flex28-clz">
					<text class="diygw-col-0 text30-clz"> AI文生视频 </text>
					<text class="diygw-col-0 text31-clz"> 文生视频 </text>
				</view>
				<image src="/static/g001.png" class="image3-size diygw-image diygw-col-0" mode="widthFix"></image>
			</view>
			<view class="flex diygw-col-12 items-center flex-nowrap flex33-clz">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column flex34-clz">
					<text class="diygw-col-0 text33-clz"> VEO2 </text>
					<text class="diygw-col-0 text34-clz"> 谷歌VEO2 </text>
				</view>
				<image src="/static/g003.png" class="image4-size diygw-image diygw-col-0" mode="widthFix"></image>
			</view>
			<view class="flex diygw-col-12 items-center flex-nowrap flex52-clz" @tap="navigateTo" data-type="openmodal" data-id="modal2">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column flex53-clz">
					<text class="diygw-col-0 text41-clz"> AI生图 </text>
					<text class="diygw-col-0 text42-clz"> 文/图生图 </text>
				</view>
				<image src="/static/g002.png" class="image15-size diygw-image diygw-col-0" mode="widthFix"></image>
			</view>
			<view class="flex diygw-col-12 items-center flex-nowrap flex4-clz" @tap="navigateTo" data-type="openmodal" data-id="modal3">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column flex5-clz">
					<text class="diygw-col-0 text5-clz"> AI图生视频 </text>
					<text class="diygw-col-0 text6-clz"> 图生视频 </text>
				</view>
				<image src="/static/g002.png" class="image1-size diygw-image diygw-col-0" mode="widthFix"></image>
			</view>
			<view class="flex diygw-col-12 items-center flex-nowrap flex1-clz">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column flex3-clz">
					<text class="diygw-col-0 text2-clz"> 预留位置 </text>
					<text class="diygw-col-0 text3-clz"> 预留位置 </text>
				</view>
				<image src="/static/g002.png" class="image-size diygw-image diygw-col-0" mode="widthFix"></image>
			</view>
			<view class="flex diygw-col-12 items-center flex-nowrap flex8-clz">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column flex9-clz">
					<text class="diygw-col-0 text11-clz"> 预留位置 </text>
					<text class="diygw-col-0 text12-clz"> 预留位置 </text>
				</view>
				<image src="/static/g002.png" class="image6-size diygw-image diygw-col-0" mode="widthFix"></image>
			</view>
			<view class="flex diygw-col-24 flex-direction-column items-center flex-nowrap flex26-clz">
				<view class="flex flex-wrap diygw-col-24 items-center flex30-clz">
					<text class="diygw-col-0 text32-clz"> 进度管理 </text>
				</view>
				<view class="flex flex-wrap diygw-col-24 justify-center items-center flex36-clz" @tap="navigateTo" data-type="page" data-url="/pages/tasks">
					<text class="diygw-text-line1 diygw-col-0"> 查看进度 </text>
				</view>
			</view>
		</view>
		<view class="flex flex-wrap diygw-col-24 justify-center items-center">
			<text class="flex icon diygw-col-0 diy-icon-title"></text>
			<text @tap="navigateTo" data-type="href" data-url="https://www.youyacao.com" class="diygw-col-0"> 一颗优雅草科技 提供独家技术支持 </text>
			<text @tap="navigateTo" data-type="href" data-url="https://www.youyacao.com" class="diygw-col-0"> 本产品仅供代理商和优雅草科技内部使用 </text>
		</view>
		<view @touchmove.stop.prevent="" @click.stop.prevent="closeModal4" v-if="modal4" class="diygw-modal drawer-left-modal" :class="modal4" style="z-index: 1000000">
			<view @click.stop.prevent="stopCloseModal4" class="diygw-dialog diygw-dialog-modal4 basis-lg">
				<view class="justify-end diygw-bar">
					<view class="content"> 管理员专区 </view>
					<view class="action" data-type="closemodal" data-id="modal4" @tap="navigateTo">
						<text class="diy-icon-close"></text>
					</view>
				</view>
				<view>
					<view class="flex diygw-dialog-content">
						<view class="flex diygw-col-12 items-center flex-nowrap flex6-clz" @tap="navigateTo" data-type="openmodal" data-id="modal5">
							<view class="flex flex-wrap diygw-col-0 flex-direction-column flex7-clz">
								<text class="diygw-col-0 text9-clz"> 添加次数 </text>
								<text class="diygw-col-0 text10-clz"> 用户加次数 </text>
							</view>
						</view>
						<view class="flex diygw-col-12 items-center flex-nowrap flex37-clz" @tap="navigateTo" data-type="openmodal" data-id="modal">
							<view class="flex flex-wrap diygw-col-0 flex-direction-column flex39-clz">
								<text class="diygw-col-0 text38-clz"> 添加账号 </text>
								<text class="diygw-text-line1 diygw-col-0 text39-clz"> 管理员专用 </text>
							</view>
						</view>
						<view class="flex diygw-col-12 items-center flex-nowrap flex10-clz" @tap="navigateTo" data-type="page" data-url="/pages/admin_tasks">
							<view class="flex flex-wrap diygw-col-0 flex-direction-column flex11-clz">
								<text class="diygw-col-0 text14-clz"> 任务管理 </text>
								<text class="diygw-text-line1 diygw-col-0 text15-clz"> 管理员专用 </text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view @touchmove.stop.prevent="" v-if="modal2" class="diygw-modal bottom-modal" :class="modal2" style="z-index: 1000000">
			<view class="diygw-dialog diygw-dialog-modal2">
				<view class="justify-end diygw-bar">
					<view class="content"> 可灵AI生成图片 </view>
					<view class="action" data-type="closemodal" data-id="modal2" @tap="navigateTo">
						<text class="diy-icon-close"></text>
					</view>
				</view>
				<view>
					<view class="flex diygw-dialog-content">
						<u-form-item class="diygw-col-24" label="正向提示词" prop="prompt">
							<u-input maxlength="200" height="60px" class="" placeholder="正向文本提示，必须，不能超过500个字符" v-model="prompt" type="textarea"></u-input>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="负向提示词" prop="negative_prompt">
							<u-input maxlength="200" height="60px" class="" placeholder="负向文本提示，可空，不能超过200个字符" v-model="negative_prompt" type="textarea"></u-input>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="图片上传" prop="image">
							<u-upload width="160" height="160" margin="0" maxCount="1" @on-success="uploadImage" @on-remove="delImage" action="http://127.0.0.1/upload" v-model="image"> </u-upload>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="图片参考度" prop="image_fidelity">
							<view class="flex1 flex align-center diygw-col-24">
								<u-slider class="flex1" active-color="#07c160" blockWidth="50" @change="changeImage_fidelity" name="image_fidelity" v-model="image_fidelity" :min="0" :max="1" :step="0.1" />
							</view>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="纵横比" prop="aspect_ratio">
							<diy-selectinput @click="showAspect_ratio = true" class="diygw-col-24" valueName="value" labelName="label" :list="aspect_ratioDatas" placeholder="选择纵横比，16:9, 9:16, 1:1, 4:3, 3:4, 3:2, 2:3" v-model="aspect_ratio" type="select"></diy-selectinput>
							<u-select mode="single-column" valueName="value" labelName="label" :list="aspect_ratioDatas" isDefaultSelect :defaultSelectValue="aspect_ratio" v-model="showAspect_ratio" @confirm="changeAspect_ratio"></u-select>
						</u-form-item>
					</view>
				</view>
				<view class="flex justify-end">
					<button @tap="navigateTo" data-type="aidrawApi" :data-prompt="prompt" :data-negative_prompt="negative_prompt" :data-image="image" :data-image_fidelity="image_fidelity" :data-aspect_ratio="aspect_ratio" class="diygw-btn green flex1 margin-xs">提交任务</button>
				</view>
			</view>
		</view>
		<view @touchmove.stop.prevent="" v-if="modal1" class="diygw-modal bottom-modal" :class="modal1" style="z-index: 1000000">
			<view class="diygw-dialog diygw-dialog-modal1">
				<view class="justify-end diygw-bar">
					<view class="content"> 可灵AI文生视频 </view>
					<view class="action" data-type="closemodal" data-id="modal1" @tap="navigateTo">
						<text class="diy-icon-close"></text>
					</view>
				</view>
				<view>
					<view class="flex diygw-dialog-content justify-center">
						<u-form-item class="diygw-col-24" label="正向提示词" prop="prompt1">
							<u-input maxlength="200" height="60px" class="" placeholder="正向文本提示，必须，不能超过500个字符" v-model="prompt1" type="textarea"></u-input>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="负向提示词" prop="negative_prompt1">
							<u-input maxlength="200" height="60px" class="" placeholder="负向文本提示，可空，不能超过200个字符" v-model="negative_prompt1" type="textarea"></u-input>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="自由度" prop="cfg_scale1">
							<view class="flex1 flex align-center diygw-col-24">
								<u-slider class="flex1" active-color="#07c160" blockWidth="50" @change="changeCfg_scale1" name="cfg_scale1" v-model="cfg_scale1" :min="0" :max="1" :step="0.1" />
							</view>
						</u-form-item>
						<text class="diygw-col-0"> 生成视频的自由度，可选，值越大，相关性越强 </text>
						<u-form-item class="diygw-col-24" label="选择模式" prop="mode1">
							<diy-selectinput @click="showMode1 = true" class="diygw-col-24" valueName="value" labelName="label" :list="mode1Datas" placeholder="请选择" v-model="mode1" type="select"></diy-selectinput>
							<u-select mode="single-column" valueName="value" labelName="label" :list="mode1Datas" isDefaultSelect :defaultSelectValue="mode1" v-model="showMode1" @confirm="changeMode1"></u-select>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="相机控制" prop="camera_control_type1">
							<diy-selectinput @click="showCamera_control_type1 = true" class="diygw-col-24" valueName="value" labelName="label" :list="camera_control_type1Datas" placeholder="请选择" v-model="camera_control_type1" type="select"></diy-selectinput>
							<u-select mode="single-column" valueName="value" labelName="label" :list="camera_control_type1Datas" isDefaultSelect :defaultSelectValue="camera_control_type1" v-model="showCamera_control_type1" @confirm="changeCamera_control_type1"></u-select>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="纵横比" prop="aspect_ratio1">
							<diy-selectinput @click="showAspect_ratio1 = true" class="diygw-col-24" valueName="value" labelName="label" :list="aspect_ratio1Datas" placeholder="选择纵横比，16:9, 9:16, 1:1, 4:3, 3:4, 3:2, 2:3" v-model="aspect_ratio1" type="select"></diy-selectinput>
							<u-select mode="single-column" valueName="value" labelName="label" :list="aspect_ratio1Datas" isDefaultSelect :defaultSelectValue="aspect_ratio1" v-model="showAspect_ratio1" @confirm="changeAspect_ratio1"></u-select>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="视频时长" prop="duration1">
							<u-radio-group class="flex flex-wrap diygw-col-24 justify-around" wrapClass=" justify-around" v-model="duration1">
								<u-radio shape="circle" v-for="(duration1item, duration1index) in duration1Datas" :key="duration1index" :name="duration1item.value">
									{{ duration1item.label }}
								</u-radio>
							</u-radio-group>
						</u-form-item>
					</view>
				</view>
				<view class="flex justify-end">
					<button @tap="navigateTo" data-type="aivideoApi" :data-prompt="prompt1" :data-negative_prompt="negative_prompt1" :data-cfg_scale="cfg_scale1" :data-mode="mode1" :data-camera_control_type="camera_control_type1" :data-aspect_ratio="aspect_ratio1" :data-duration="duration1" class="diygw-btn green flex1 margin-xs">提交任务</button>
				</view>
			</view>
		</view>
		<view @touchmove.stop.prevent="" v-if="modal3" class="diygw-modal bottom-modal" :class="modal3" style="z-index: 1000000">
			<view class="diygw-dialog diygw-dialog-modal3">
				<view class="justify-end diygw-bar">
					<view class="content"> 可灵AI图生视频 </view>
					<view class="action" data-type="closemodal" data-id="modal3" @tap="navigateTo">
						<text class="diy-icon-close"></text>
					</view>
				</view>
				<view>
					<view class="flex diygw-dialog-content justify-center">
						<u-form-item class="diygw-col-24" label="参考图像 必须上传" prop="image3">
							<u-upload width="160" height="160" margin="0" maxCount="1" @on-success="uploadImage3" @on-remove="delImage3" action="http://127.0.0.1/upload" v-model="image3"> </u-upload>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="参考图像  尾帧控制 可不上传" prop="image_tail3">
							<u-upload width="160" height="160" margin="0" maxCount="1" @on-success="uploadImage_tail3" @on-remove="delImage_tail3" action="http://127.0.0.1/upload" v-model="image_tail3"> </u-upload>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="正向提示词" prop="prompt3">
							<u-input maxlength="200" height="60px" class="" placeholder="正向文本提示，必须，不能超过500个字符" v-model="prompt3" type="textarea"></u-input>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="负向提示词" prop="negative_prompt3">
							<u-input maxlength="200" height="60px" class="" placeholder="负向文本提示，可空，不能超过200个字符" v-model="negative_prompt3" type="textarea"></u-input>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="自由度" prop="cfg_scale3">
							<view class="flex1 flex align-center diygw-col-24">
								<u-slider class="flex1" active-color="#07c160" blockWidth="50" @change="changeCfg_scale3" name="cfg_scale3" v-model="cfg_scale3" :min="0" :max="1" :step="0.1" />
							</view>
						</u-form-item>
						<text class="diygw-col-0"> 生成视频的自由度，可选，值越大，相关性越强 </text>
						<u-form-item class="diygw-col-24" label="选择模式" prop="mode3">
							<diy-selectinput @click="showMode3 = true" class="diygw-col-24" valueName="value" labelName="label" :list="mode3Datas" placeholder="请选择" v-model="mode3" type="select"></diy-selectinput>
							<u-select mode="single-column" valueName="value" labelName="label" :list="mode3Datas" isDefaultSelect :defaultSelectValue="mode3" v-model="showMode3" @confirm="changeMode3"></u-select>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="视频时长" prop="duration3">
							<u-radio-group class="flex flex-wrap diygw-col-24 justify-around" wrapClass=" justify-around" v-model="duration3">
								<u-radio shape="circle" v-for="(duration3item, duration3index) in duration3Datas" :key="duration3index" :name="duration3item.value">
									{{ duration3item.label }}
								</u-radio>
							</u-radio-group>
						</u-form-item>
					</view>
				</view>
				<view class="flex justify-end">
					<button @tap="navigateTo" data-type="aivideo_picApi" :data-prompt="prompt3" :data-negative_prompt="negative_prompt3" :data-cfg_scale="cfg_scale3" :data-mode="mode3" :data-duration="duration3" :data-image="image3" :data-image_tail="image_tail3" class="diygw-btn green flex1 margin-xs">提交任务</button>
				</view>
			</view>
		</view>
		<view @touchmove.stop.prevent="" v-if="modal" class="diygw-modal bottom-modal" :class="modal" style="z-index: 1000000">
			<view class="diygw-dialog diygw-dialog-modal">
				<view class="justify-end diygw-bar">
					<view class="content"> 添加账号 </view>
					<view class="action" data-type="closemodal" data-id="modal" @tap="navigateTo">
						<text class="diy-icon-close"></text>
					</view>
				</view>
				<view>
					<view class="flex diygw-dialog-content">
						<u-form-item class="diygw-col-24" label="账号" prop="username">
							<u-input :focus="usernameFocus" placeholder="" v-model="username"></u-input>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="密码" prop="password">
							<u-input :focus="passwordFocus" placeholder="" v-model="password"></u-input>
						</u-form-item>
					</view>
				</view>
				<view class="flex justify-end">
					<button @tap="navigateTo" data-type="adduserApi" :data-username="username" :data-password="password" class="diygw-btn green flex1 margin-xs">立即添加</button>
				</view>
			</view>
		</view>
		<view @touchmove.stop.prevent="" v-if="modal5" class="diygw-modal bottom-modal" :class="modal5" style="z-index: 1000000">
			<view class="diygw-dialog diygw-dialog-modal5">
				<view class="justify-end diygw-bar">
					<view class="content"> 添加点数 </view>
					<view class="action" data-type="closemodal" data-id="modal5" @tap="navigateTo">
						<text class="diy-icon-close"></text>
					</view>
				</view>
				<view>
					<view class="flex diygw-dialog-content">
						<u-form-item class="diygw-col-24" label="账号" prop="addnum_input">
							<u-input :focus="addnum_inputFocus" placeholder="" v-model="addnum_input"></u-input>
						</u-form-item>
						<u-form-item class="diygw-col-24" label="面额" prop="num">
							<diy-selectinput @click="showNum = true" class="diygw-col-24" valueName="value" labelName="label" :list="numDatas" placeholder="请选择" v-model="num" type="select"></diy-selectinput>
							<u-select mode="single-column" valueName="value" labelName="label" :list="numDatas" isDefaultSelect :defaultSelectValue="num" v-model="showNum" @confirm="changeNum"></u-select>
						</u-form-item>
					</view>
				</view>
				<view class="flex justify-end">
					<button @tap="navigateTo" data-type="addnumApi" :data-username="addnum_input" :data-num="num" class="diygw-btn green flex1 margin-xs">立即添加</button>
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
				adduser: {
					msg: '',
					status: 0,
					success: true,
					data: {}
				},
				logout: {
					msg: '',
					status: 0,
					success: true,
					data: {}
				},
				onlogin: {
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
				aidraw: {
					msg: '',
					status: 0,
					success: true,
					data: {}
				},
				aivideo: {
					msg: '提交成功！',
					status: 0,
					success: true,
					data: {}
				},
				aivideo_pic: {
					msg: '',
					status: 0,
					success: true,
					data: {}
				},
				addnum: {
					msg: '',
					status: 0,
					success: true,
					data: {}
				},
				headerBackgroundStyle: { background: 'none !important' },
				swipersIndex: 0,
				modal4: '',
				modal2: '',
				prompt: '',
				negative_prompt: '',
				image: '',
				image_fidelity: 0,
				showAspect_ratio: false,
				aspect_ratioDatas: [
					{ value: '16:9', label: '16:9' },
					{ value: '9:16', label: '9:16' },
					{ value: '1:1', label: '1:1' },
					{ value: '3:2', label: '3:2' },
					{ value: '2:3', label: '2:3' }
				],

				aspect_ratio: '16:9',
				modal1: '',
				prompt1: '',
				negative_prompt1: '',
				cfg_scale1: 0,
				showMode1: false,
				mode1Datas: [
					{ value: 'std', label: 'std（高性能）' },
					{ value: 'pro', label: 'pro（高表现）' }
				],

				mode1: 'std',
				showCamera_control_type1: false,
				camera_control_type1Datas: [
					{ value: 'down_back', label: '镜头下压并后退 ➡️ 下移拉远' },
					{ value: 'forward_up', label: '镜头前进并上仰 ➡️ 推进上移' },
					{ value: 'right_turn_forward', label: '先右旋转后前进 ➡️ 右旋推进' },
					{ value: 'left_turn_forward', label: '先左旋并前进 ➡️ 左旋推进' }
				],

				camera_control_type1: 'down_back',
				showAspect_ratio1: false,
				aspect_ratio1Datas: [
					{ value: '16:9', label: '16:9' },
					{ value: '9:16', label: '9:16' },
					{ value: '1:1', label: '1:1' },
					{ value: '3:2', label: '3:2' },
					{ value: '2:3', label: '2:3' }
				],

				aspect_ratio1: '16:9',
				duration1Datas: [
					{ value: '5', label: '5秒', checked: true },
					{ value: '10', label: '10秒', checked: false }
				],
				duration1: '5',
				modal3: '',
				image3: '',
				image_tail3: '',
				prompt3: '',
				negative_prompt3: '',
				cfg_scale3: 0,
				showMode3: false,
				mode3Datas: [
					{ value: 'std', label: 'std（高性能）' },
					{ value: 'pro', label: 'pro（高表现）' }
				],

				mode3: 'std',
				duration3Datas: [
					{ value: '5', label: '5秒', checked: true },
					{ value: '10', label: '10秒', checked: false }
				],
				duration3: '5',
				modal: '',
				usernameFocus: false,
				username: '',
				passwordFocus: false,
				password: '',
				modal5: '',
				addnum_inputFocus: false,
				addnum_input: '',
				showNum: false,
				numDatas: [
					{ value: '100', label: '10元' },
					{ value: '500', label: '50元' },
					{ value: '1000', label: '100元' },
					{ value: '2000', label: '200元' }
				],

				num: '100'
			};
		},
		onPageScroll(e) {
			const scrollTop = e.scrollTop;
			this.headerBackgroundStyle = this.headerBackgroundStyle || { background: 'none' };
			if (scrollTop <= 80) {
				const opacity = scrollTop / 100;
				const color = `rgba(255, 255, 255, ${opacity})`;
				this.headerBackgroundStyle.background = color;
			} else {
				this.headerBackgroundStyle.background = '#ffffff';
			}
		},
		onShow() {
			this.setCurrentPage(this);

			this.initShow();
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
			async initShow() {
				//强制重新刷新页面
				await this.onloginApi({ refresh: 1 });
			},
			// 添加账号接口 API请求方法
			async adduserApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/adduser';
				let http_data = {
					username: param.username || this.username || 'new_user',
					password: param.password || this.password || 'new_user'
				};
				let http_header = {};

				let adduser = await this.$http.post(http_url, http_data, http_header, 'json');

				this.adduser = adduser;
				if (adduser.status == 0) {
					let flag = await this.showModal('添加成功！');
					this.navigateTo({
						type: 'closemodal',
						id: 'modal'
					});
				} else {
					let flag = await this.showModal('出现错误！' + adduser.msg);
				}
			},
			// 退出登录 API请求方法
			async logoutApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/logout';
				let http_data = {};
				let http_header = {};

				let logout = await this.$http.post(http_url, http_data, http_header, 'json');

				this.logout = logout;
				this.navigateTo({
					type: 'page',
					url: 'login'
				});
			},
			// 是否登录 API请求方法
			async onloginApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/onlogin';
				let http_data = {};
				let http_header = {};

				let onlogin = await this.$http.post(http_url, http_data, http_header, 'json');

				this.onlogin = onlogin;
				if (onlogin.status != 0) {
					this.navigateTo({
						type: 'tip',
						tip: '未登录'
					});
					this.navigateTo({
						type: 'page',
						url: 'login'
					});
				}
				this.$session.setUser(onlogin.data.info);
			},
			// 可灵ai绘图接口 API请求方法
			async aidrawApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/keling/aidraw';
				let http_data = {
					prompt: param.prompt || this.prompt,
					negative_prompt: param.negative_prompt || this.negative_prompt,
					image: param.image || this.image,
					image_fidelity: param.image_fidelity || this.image_fidelity,
					aspect_ratio: param.aspect_ratio || this.aspect_ratio
				};
				let http_header = {};

				uni.showLoading({
					mask: true,
					title: '加载中'
				});

				let aidraw = await this.$http.post(http_url, http_data, http_header, 'json');

				this.aidraw = aidraw;
				uni.hideLoading();

				if (aidraw.status == 0) {
					let flag = await this.showModal('提交成功，请稍后到任务管理页查看详情');
					this.navigateTo({
						type: 'closemodal',
						id: 'modal2'
					});
				} else {
					let flag = await this.showModal('提交失败，请稍后再试。错误：' + aidraw.msg);
				}
			},
			// 可灵AI文生视频 API请求方法
			async aivideoApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/keling/aivideo';
				let http_data = {
					prompt: param.prompt || this.prompt1,
					negative_prompt: param.negative_prompt || this.negative_prompt1,
					cfg_scale: param.cfg_scale || this.cfg_scale1,
					mode: param.mode || this.mode1,
					camera_control_type: param.camera_control_type || this.camera_control_type1,
					aspect_ratio: param.aspect_ratio || this.aspect_ratio1,
					duration: param.duration || this.duration1
				};
				let http_header = {};

				uni.showLoading({
					mask: true,
					title: '加载中'
				});

				let aivideo = await this.$http.post(http_url, http_data, http_header, 'json');

				this.aivideo = aivideo;
				uni.hideLoading();
				if (aivideo.status == 0) {
					let flag = await this.showModal('提交成功，请稍后到任务管理页查看详情');
					this.navigateTo({
						type: 'closemodal',
						id: 'modal1'
					});
				} else {
					let flag = await this.showModal('提交失败，请稍后再试。错误：' + aivideo.msg);
				}
			},
			// 可灵AI图生视频 API请求方法
			async aivideo_picApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/keling/aivideo_pic';
				let http_data = {
					prompt: param.prompt || this.prompt3,
					negative_prompt: param.negative_prompt || this.negative_prompt3,
					cfg_scale: param.cfg_scale || this.cfg_scale3,
					mode: param.mode || this.mode3,
					duration: param.duration || this.duration3,
					image: param.image || this.image3,
					image_tail: param.image_tail || this.image_tail3
				};
				let http_header = {};

				uni.showLoading({
					mask: true,
					title: '加载中'
				});

				let aivideo_pic = await this.$http.post(http_url, http_data, http_header, 'json');

				this.aivideo_pic = aivideo_pic;
				uni.hideLoading();
				if (aivideo_pic.status == 0) {
					let flag = await this.showModal('提交成功，请稍后到任务管理页查看详情');
					this.navigateTo({
						type: 'closemodal',
						id: 'modal1'
					});
				} else {
					let flag = await this.showModal('提交失败，请稍后再试。错误：' + aivideo_pic.msg);
				}
			},
			// 添加次数接口 API请求方法
			async addnumApi(param) {
				let thiz = this;
				param = param || {};

				//请求地址及请求数据，可以在加载前执行上面增加自己的代码逻辑
				let http_url = '/addnum';
				let http_data = {
					username: param.username || this.addnum_input || 'new_user',
					num: param.num || this.num || 'new_user'
				};
				let http_header = {};

				let addnum = await this.$http.post(http_url, http_data, http_header, 'json');

				this.addnum = addnum;
				if (addnum.status == 0) {
					let flag = await this.showModal('添加成功！');
					this.navigateTo({
						type: 'closemodal',
						id: 'modal'
					});
				} else {
					let flag = await this.showModal('出现错误！' + addnum.msg);
				}
			},

			// 文件回调 自定义方法
			async file_callbackFunction(param) {
				let thiz = this;
			},
			changeSwipers(evt) {
				let swipersIndex = evt.detail.current;
				this.setData({ swipersIndex });
			},
			stopCloseModal4(e) {
				e.stopPropagation();
			},
			closeModal4() {
				this.modal4 = '';
			},
			changeImage(index, lists) {
				this.$nextTick(() => {
					this.navigateTo({ type: 'file_callbackFunction' });
				});
			},
			delImage(index, lists) {
				this.changeImage(index, lists);
			},
			uploadImage(res, index, lists) {
				this.changeImage(index, lists);
			},
			changeImage_fidelity(evt) {},
			changeAspect_ratio(evt) {
				evt.map((val, index) => {
					this.aspect_ratio = val.value;
				});
			},
			changeCfg_scale1(evt) {},
			changeMode1(evt) {
				evt.map((val, index) => {
					this.mode1 = val.value;
				});
			},
			changeCamera_control_type1(evt) {
				evt.map((val, index) => {
					this.camera_control_type1 = val.value;
				});
			},
			changeAspect_ratio1(evt) {
				evt.map((val, index) => {
					this.aspect_ratio1 = val.value;
				});
			},
			changeImage3(index, lists) {},
			delImage3(index, lists) {
				this.changeImage3(index, lists);
			},
			uploadImage3(res, index, lists) {
				this.changeImage3(index, lists);
			},
			changeImage_tail3(index, lists) {},
			delImage_tail3(index, lists) {
				this.changeImage_tail3(index, lists);
			},
			uploadImage_tail3(res, index, lists) {
				this.changeImage_tail3(index, lists);
			},
			changeCfg_scale3(evt) {},
			changeMode3(evt) {
				evt.map((val, index) => {
					this.mode3 = val.value;
				});
			},
			changeNum(evt) {
				evt.map((val, index) => {
					this.num = val.value;
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.image10-clz {
		margin-left: 20rpx;
		width: calc(29.1666666667% - 20rpx - 0rpx) !important;
		margin-top: 10rpx;
		margin-bottom: 0rpx;
		margin-right: 0rpx;
	}
	.btn-clz {
		background-color: #13beff;
		padding-top: 10rpx;
		color: #fff;
		padding-left: 10rpx;
		font-size: 22rpx !important;
		padding-bottom: 10rpx;
		text-align: center;
		padding-right: 10rpx;
	}
	.btn1-clz {
		padding-top: 10rpx;
		color: #fff;
		padding-left: 10rpx;
		font-size: 22rpx !important;
		padding-bottom: 10rpx;
		margin-right: 20rpx;
		background-color: #13beff;
		margin-left: 0rpx;
		width: calc(25% - 0rpx - 20rpx) !important;
		margin-top: 0rpx;
		margin-bottom: 0rpx;
		text-align: center;
		padding-right: 10rpx;
	}
	.swipers-clz {
		margin-left: 20rpx;
		border-bottom-left-radius: 20rpx;
		overflow: hidden;
		width: calc(100% - 20rpx - 20rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		margin-bottom: 10rpx;
		margin-right: 20rpx;
	}
	.swipers-radius {
		overflow: hidden;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
	}
	.flex2-clz {
		padding-top: 40rpx;
		background-repeat: no-repeat;
		background-size: cover;
		color: #ffffff;
		flex: 1;
		padding-left: 40rpx;
		padding-bottom: 40rpx;
		background-image: url(/static/090.jpg);
		padding-right: 40rpx;
	}
	.text4-clz {
		font-weight: bold;
		font-size: 38rpx !important;
	}
	.flex20-clz {
		padding-top: 10rpx;
		padding-left: 10rpx;
		padding-bottom: 10rpx;
		padding-right: 10rpx;
	}
	.flex27-clz {
		border: 8rpx solid #fefefe;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		background-color: #f7faff;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #fff8de, #fff8e0);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex28-clz {
		flex: 1;
	}
	.text30-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text31-clz {
		color: #a9a9a9;
	}
	.image3-size {
		height: 120rpx !important;
		width: 120rpx !important;
	}
	.flex33-clz {
		border: 8rpx solid #ffffff;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		background-color: #f7faff;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #ffe4e0, #fff1ef);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex34-clz {
		flex: 1;
	}
	.text33-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text34-clz {
		color: #a9a9a9;
	}
	.image4-size {
		height: 120rpx !important;
		width: 120rpx !important;
	}
	.flex52-clz {
		border: 8rpx solid #ffffff;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		background-color: #f7faff;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #e5f0ff, #e8f0ff);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex53-clz {
		flex: 1;
	}
	.text41-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text42-clz {
		color: #a9a9a9;
	}
	.image15-size {
		height: 120rpx !important;
		width: 120rpx !important;
	}
	.flex4-clz {
		border: 8rpx solid #ffffff;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		background-color: #f7faff;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #fad0c4, #fad0c4);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex5-clz {
		flex: 1;
	}
	.text5-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text6-clz {
		color: #a9a9a9;
	}
	.image1-size {
		height: 120rpx !important;
		width: 120rpx !important;
	}
	.flex1-clz {
		border: 8rpx solid #ffffff;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #cfd9df, #e2ebf0);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex3-clz {
		flex: 1;
	}
	.text2-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text3-clz {
		color: #a9a9a9;
	}
	.image-size {
		height: 120rpx !important;
		width: 120rpx !important;
	}
	.flex8-clz {
		border: 8rpx solid #ffffff;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #cfd9df, #e2ebf0);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex9-clz {
		flex: 1;
	}
	.text11-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text12-clz {
		color: #a9a9a9;
	}
	.image6-size {
		height: 120rpx !important;
		width: 120rpx !important;
	}
	.flex26-clz {
		border: 8rpx solid #ffffff;
		padding-top: 30rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 30rpx;
		padding-bottom: 30rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		background-color: #f7faff;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(100% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #e6f7e7, #eef7ef);
		margin-bottom: 10rpx;
		padding-right: 30rpx;
	}
	.flex30-clz {
		flex: 1;
	}
	.text32-clz {
		margin-left: 10rpx;
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-right: 10rpx;
	}
	.flex36-clz {
		background-color: #ffffff;
		padding-top: 20rpx;
		border-bottom-left-radius: 20rpx;
		overflow: hidden;
		font-weight: bold;
		padding-left: 20rpx;
		font-size: 28rpx !important;
		padding-bottom: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		padding-right: 20rpx;
	}
	.icon {
		font-size: 30rpx;
	}
	.modal4-clz {
		z-index: 1000000;
	}
	.diygw-dialog-modal4 {
	}
	.flex6-clz {
		border: 8rpx solid #ffffff;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #cfd9df, #e2ebf0);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex7-clz {
		flex: 1;
	}
	.text9-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text10-clz {
		color: #a9a9a9;
	}
	.flex37-clz {
		border: 8rpx solid #ffffff;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		background-color: #f7faff;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(120deg, #e6f7e7, #eef7ef);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex39-clz {
		flex: 1;
	}
	.text38-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text39-clz {
		color: #a9a9a9;
	}
	.flex10-clz {
		border: 8rpx solid #ffffff;
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 20rpx;
		margin-right: 10rpx;
		background-color: #f7faff;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(50% - 10rpx - 10rpx) !important;
		border-top-left-radius: 20rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 20rpx;
		background-image: linear-gradient(135deg, #ffd2b0 0%, #dafca4 50%, #69ffac 100%);
		margin-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flex11-clz {
		flex: 1;
	}
	.text14-clz {
		font-weight: bold;
		flex: 1;
		font-size: 32rpx !important;
	}
	.text15-clz {
		color: #a9a9a9;
	}
	.modal2-clz {
		z-index: 1000000;
	}
	.diygw-dialog-modal2 {
	}
	.modal1-clz {
		z-index: 1000000;
	}
	.diygw-dialog-modal1 {
	}
	.modal3-clz {
		z-index: 1000000;
	}
	.diygw-dialog-modal3 {
	}
	.modal-clz {
		z-index: 1000000;
	}
	.diygw-dialog-modal {
	}
	.modal5-clz {
		z-index: 1000000;
	}
	.diygw-dialog-modal5 {
	}
	.container333415 {
		padding-bottom: 120rpx;
		background-color: #f6f6f6;

		background-size: cover;
	}
</style>
