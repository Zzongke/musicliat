<template>
	<div class="music-tab">
		<div class="bar">
			<router-link to="host">热歌榜</router-link>
		</div>
		<div class="bar">
			<router-link to="new">新歌榜</router-link>
		</div>
		<div class="bar">
			<router-link to="Yao">摇滚</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MusicType',
		props: {
			
		},
		data() {
			return{
				
			}
		},
		created() {
			
		},
		methods: {
	
		}
	}
</script>

<style scoped>
	.music-tab{
		position: fixed;
		width: calc(100% - 40px);
		left: 0;
		top: 0;
		display: flex;
		line-height: 30px;
		padding: 0 20px;
		background-color: #eeeeee;
		z-index: 2;
	}
	.bar{
		flex: 1;
		padding: 10px 0;
		font-size: 20px;
	}
	.bar a{
		color: #333333;
		text-decoration: none;
	}
	.active{
		color: #299de7 !important;
	}
</style>
