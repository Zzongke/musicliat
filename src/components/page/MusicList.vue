<template>
	<div style="margin-top: 50px;height: 400px;overflow-x: hidden;overflow-y: auto;background-color: #ffffff;">
		<ul>
			<router-link :to="{name:'MusicPlay',params:{songerid:item.id}}" tag="li" v-for="(item,index) in items.artists" :key="index">
				<div class="poster">
					<img v-lazy="item.img1v1Url" :alt="item.img1v1Url">
				</div>
				<div class="info">
					<div class="name">{{item.name}}</div>
					<div class="author" :title="item.content">{{item.id}}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import {
		request
	} from '@/network/request'

	export default {
		name: 'MusicList',
		props: {
			musictype: {
				type: String,
				default:"1"
			}
		},
		data() {
			return {
				items: {
					type: String,
					artists:[]
				},
			}
		},
		created() {
			request({
					url: "/artist/list?type="+ this.musictype +"&area=-1&initial=b",
					method: 'get',
				})
				.then(res => {
					// console.log(res.data);
					this.items = res.data;
				}).catch(error => {
					console.log(error)
				})
		},
		methods: {

		}
	}
</script>

<style scoped>
	ul{
		display: flex;
		flex-direction: column;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	li{
		display: flex;
		text-align: left;
		margin: 0 5px;
		padding: 5px;
		border-bottom: 1px solid #dddddd;
	}
	li img{
		width: 100px;
	}
	.info>div{
		padding: 5px;
	}
	.author{
		position:relative;
		line-height:1.4em;
		/* 3 times the line-height to show 3 lines */
		height:4.2em;
		overflow:auto;
	}
	
</style>
