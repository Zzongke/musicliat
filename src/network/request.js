import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true;

export function request(config){
	const instance = axios.create({
		baseURL:"http://localhost:3000",
		timeout:10000
	})
	
	// 1.请求拦截
	instance.interceptors.request.use(config => {
		if (config.meth === 'post' && !(config.data instanceof FormData)) {
			config.headers = {
			// 'Content-Type': 'application/x-www-form-urlencoded'
			'Content-Type': 'application/json;charset=utf-8'
			}
			config.data = qs.stringify(config.data, { arrayFormat: 'repeat' }) /*这里是，后端要求传数组的时候做的设置，以前出过错*/
		}
		return config;
	},err => {
		console.log(err);
	});
	
	// 2.相应拦截
	instance.interceptors.response.use(res => {
		// console.log(res);
		return res;
	},err => {
		console.log(err);
		return Promise.resolve(err)
	})
	
	return instance(config)
}