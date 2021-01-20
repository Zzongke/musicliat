<template>
	<div class="container">
		<music-type/>
		<router-view></router-view>
		<singer/>
	</div>
</template>

<script>
	import MusicType from '@/music/MusicType'
	import Singer from '@/singer/Singer'
	
	export default{
		name:'index',
		components:{
			MusicType,
			Singer
		},
		data(){
			return{
				
			}
		},
		
	}
</script>

<style scoped>
</style>
