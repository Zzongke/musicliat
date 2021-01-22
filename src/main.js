import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import Axios from 'axios'
import qs from 'qs'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import VueLazyload from 'vue-lazyload'
import { Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Carousel);
Vue.use(CarouselItem);

Nprogress.configure({
	showSpinner:false,
	easing:'ease',
	spend:4000
})

Vue.use(VueLazyload, {
	preLoad: 1.3,
	loading: require('@/assets/logo.png'),
	error: require('@/assets/logo.png'),
	attempt: 1
})

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

router.beforeEach((to,from,next) => {
	Nprogress.start();
	next()
})

router.afterEach(() =>{
	Nprogress.done();
	window.scrollTo(0,0);
})

const server = Axios.create({
	// 公共接口--这里注意后面会讲
	baseURL: "http://tingapi.ting.baidu.com",
	// 超时时间 单位是ms，这里设置了3s的超时时间
	timeout: 3 * 1000
})

// 2.请求拦截器
server.interceptors.request.use(config => {
	//发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
	config.data = qs.stringify(config.data); //数据转化,也可以使用qs转换
	config.headers = {
		'Content-Type': 'application/x-www-form-urlencoded' //配置请求头
	}
	//注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
	return config
}, error => {
	Promise.reject(error)
})

// 3.响应拦截器
server.interceptors.response.use(response => {
	//接收到响应数据并成功后的一些共有的处理，关闭loading等

	return response
}, error => {
	/***** 接收到异常响应的处理开始 *****/
	if (error && error.response) {
		// 1.公共错误处理
		// 2.根据响应码具体处理
		switch (error.response.status) {
			case 400:
				error.message = '错误请求'
				break;
			case 401:
				error.message = '未授权，请重新登录'
				break;
			case 403:
				error.message = '拒绝访问'
				break;
			case 404:
				error.message = '请求错误,未找到该资源'
				window.location.href = "/NotFound"
				break;
			case 405:
				error.message = '请求方法未允许'
				break;
			case 408:
				error.message = '请求超时'
				break;
			case 500:
				error.message = '服务器端出错'
				break;
			case 501:
				error.message = '网络未实现'
				break;
			case 502:
				error.message = '网络错误'
				break;
			case 503:
				error.message = '服务不可用'
				break;
			case 504:
				error.message = '网络超时'
				break;
			case 505:
				error.message = 'http版本不支持该请求'
				break;
			default:
				error.message = `连接错误${error.response.status}`
		}
	} else {
		return error
	}

	/***** 处理结束 *****/
	//如果不需要错误处理，以上的处理过程都可省略
	return Promise.resolve(error.response)
})

new Vue({
	router,
	server,
	render: h => h(App),
}).$mount('#app')
