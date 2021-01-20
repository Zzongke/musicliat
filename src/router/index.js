import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import("@/components/index")
const HostMusic = () => import("@/music/HostMusic")
const NewMusic = () => import("@/music/NewMusic")
const YaoGun = () => import("@/music/YaoGun")
const SingerInfo = () => import("@/singer/SingerInfo")
const SingerList = () => import("@/components/page/SingerList")
const MusicPlay = () => import("@/musicplay/MusicPlay")



const routes = [
	{
		path:'/',
		redirect:'/index/host'	
	},
	{
		path: '/index',
		name: 'index',
		component: index,
		children: [{
				path: 'host',
				name: 'host',
				component: HostMusic,
			},
			{
				path: 'new',
				name: 'new',
				component: NewMusic,
			},
			{
				path: 'yao',
				name: 'Yao',
				component: YaoGun,
			}
		]
	},
	{
		path: '/host',
		name: 'HostMusic',
		component: HostMusic
	}, {
		path: '/new',
		name: 'NewMusic',
		component: NewMusic
	}, {
		path: '/yao',
		name: 'YaoGun',
		component: YaoGun
	},
	{
		path:'/singerinfo/:singerid',
		name:'SingerInfo',
		component:SingerInfo,
		children:[
			{
				path:'/singerlist',
				name:'SingerList',
				component:SingerList
			}
		]
	},
	{
		path:'/musicplay/:songerid',
		name:'MusicPlay',
		component:MusicPlay
	}
]

const router = new Router({
	linkActiveClass: "active",
	routes,
	mode: 'history'
})

export default router
