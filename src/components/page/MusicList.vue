<template>
	<div class="wrapper" ref="wrapper" style="position:relative;height: 400px;overflow: hidden;background-color: #ffffff;">
		<ul class="content">
			<router-link :to="{name:'MusicPlay',params:{songerid:item.id}}" tag="li" v-for="(item,index) in items.artists" :key="index">
				<div class="poster">
					<img v-lazy="item.img1v1Url" :alt="item.img1v1Url">
				</div>
				<div class="info">
					<div class="name">{{item.name}}</div>
					<div class="author" :title="item.content">{{item.id}}</div>
				</div>
			</router-link>
      <div class="pullup-tips">
        <div v-if="!isPullUpLoad" class="before-trigger">
          <span class="pullup-txt">Pull up and load more</span>
        </div>
        <div v-else class="after-trigger">
          <span class="pullup-txt">Loading...</span>
        </div>
      </div>
		</ul>
	</div>
</template>

<script>
	import {
		request
  } from '@/network/request'
  import BScroll from 'better-scroll'

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
          artists:[],
        },
        scroll:null,
        isPullUpLoad: false,
        data:10,
			}
    },
    watch:{
      items(){
        this.$nextTick(() => {
          this.Scroll()
          this.scroll.refresh()
        })
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
    mounted(){
      this.Scroll()
    },
		methods: {
      Scroll(){
        this.scroll = new BScroll(this.$refs.wrapper,{
          click: true,      // 配置允许点击事件
          scrollY: true ,    // 开启纵向滚动
          scrollbar: { // 滚动条
            fade: true,
          },
          pullUpLoad: true,
        })
      }
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
  .pullup-tips{
    padding: 20px;
    text-align: center;
    color: #999;
  }
</style>
