<template>
	<router-link :to="{name:'SingerInfo',params:{singerid:singerid}}" tag="div" class="card" v-if="singerInfo.hotSongs">
		<div class="card-slider">
			<div class="poster">
				<img v-lazy="singerInfo.hotSongs[0].al.picUrl" :alt="singerInfo.hotSongs[0].al.picUrl">
			</div>
		</div>
		<div class="info">
			<div class="name">{{singerInfo.hotSongs[0].name}}</div>
		</div>
	</router-link>
</template>

<script>
	import {
		request
	} from "@/network/request"

	export default {
		name: 'SingerName',
		data() {
			return {
				singerInfo:{
					type: String,
					hotAlbums:[]
				}
			}
		},
		props:{
			singerid:{
				type:String,
				default:"0"
			}
		},
		created() {
			request({
				url:"/artists?id="+ this.singerid,
				method:'get'
			}).then(res => {
				this.singerInfo = res.data;
				// console.log(res.data)
			}).catch(err => {
				console.log(err)
			})
		},
	}
</script>

<style scoped>
	.card {
		width: 33.3%;
		min-height: 140px;
		float: left;
		box-sizing: border-box;
		padding: 0 10px;
	}

	.card-slider {
		border: 1px solid #eeeeee;
	}

	.poster {
		position: relative;
		height: 0;
		padding-bottom: 100%;
	}

	.poster img {
		max-width: 100%;
	}

	.card .info {
		font-size: 12px;
		overflow: hidden;
		white-space: normal;
		margin-top: 4px;
		margin-bottom: 2px;
		line-height: 14px;
		max-height: 28px;
	}
</style>
