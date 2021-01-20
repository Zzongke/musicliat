<template>
	<div class="mod-songlists">
		<div class="songlist-title">
			<h2>热门歌单</h2>
			<span>更多</span>
		</div>
		<div class="container">
			<div class="wrapper">
				<singer-name v-for="(item,index) in singerListdata" :key="index" :singerid="item" />
			</div>
		</div>
	</div>
</template>

<script>
import SingerName from "@/singer/SingerName"

export default {
  name: 'Singer',
  components:{
	SingerName  
  },
  data () {
    return {
      singerListdata: ["3684", "2116", "5771", "6452", "5538", "4723"],
    }
  }
}

</script>

<style scoped>
	.mod-songlists{
		background-color: #ffffff;
		margin-top: 10px;
		padding: 10px 17px;
	}
	.songlist-title{
		display: flex;
		margin: 10px 0;
	}
	.songlist-title>h2{
		font-size: 20px;
		flex-grow: 1;
		margin: 0;
		text-align: left;
	}
	.wrapper {
		position: relative;
		overflow: hidden;
		border: none;
		margin: 0 -5px;
		width: auto;
	}
</style>
