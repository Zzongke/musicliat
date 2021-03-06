<template>
	<div class="container">
    <input-liat/>
    <swiper/>
		<music-type/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
		<singer/>
	</div>
</template>

<script>
	import MusicType from '@/music/MusicType'
  import Singer from '@/singer/Singer'
  import Swiper from '@/swiper/Swiper'
  import InputLiat from '@/components/InputLiat'

	export default{
		name:'index',
		components:{
			MusicType,
      Singer,
      Swiper,
      InputLiat,
		},
		data(){
			return{
				
			}
    },
	}
</script>

<style scoped>
.container{
  position: relative;
}
</style>
