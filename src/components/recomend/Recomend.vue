<template>
<keep-alive>
    <div ref="scroll" style="height:100vh;overflow:auto;">
      <vue-data-loading 
        :loading="loading" 
        :completed="completed"
        :init-scroll="true" 
        :listens="['pull-up']" 
        @pull-up="pullUp"
        v-loading.fullscreen.lock="loading">
          <router-link 
            :to="{name:'MusicPlay',params:{songerid:item.creator.userId}}" 
            tag="div" 
            class="playlist" 
            v-for="(item,index) in recomends" 
            :key="index"
            plain 
            @click.native="open">
            <img v-lazy="item.coverImgUrl" alt="item.coverImgUrl">
            <p>{{item.name}}</p>
          </router-link>
      </vue-data-loading>
    </div>
</keep-alive>
</template>
<script>
import {request} from '@/network/request'
import VueDataLoading from 'vue-data-loading'

export default {
    name:'Recomend',
    components:{
      VueDataLoading
    },
    data() {
       return {
         recomends:[],
         count:0,
         loading: false,
          completed: false,
          page: 1,
          scrollTopd:0
       }
    },
    created(){
      this.load()
    },
    activated(){
      this.$nextTick(function(){
          let scrollTop = this.$store.state.scrollTop; //返回页面取出来
          this.$refs.scroll.scrollTo(0,scrollTop);
          // alert(scrollTop)
        })
    },
    beforeRouteLeave(to,from,next){
      //设置下一个路由的meta,让列表页面缓存,即不刷新
      // to.meta.keepAlive = true
      let scrollTopd = this.$refs.scroll.scrollTop
      this.$store.state.scrollTop = scrollTopd
      // alert(scrollTopd)
      next()
    },
    mounted(){
    },
    methods:{
    load(){
      this.loading = true;
      console.log(this.count)
      setTimeout(() => {
        this.count += 10;
        this.http();
      },1000)
    },
    http(){
      request({
      url:"/top/playlist/highquality?before=1503639064232&limit="+ this.count,
      methods:"post"
      }).then(res => {
        console.log(res)
        this.recomends = res.data.playlists
        this.loading = false;
        this.fullscreenLoading = false;
      }).catch(err => {
        console.log(err)
      });
    },
    open(){
      this.$notify.success({
        title: '成功',
        message: '这是一条信息提醒！',
        showClose: false
      });
    },
    pullUp() {
      this.load()
      this.page++
    },
  }
}
</script>
<style scoped>
.playlist{
  display: flex;
  padding: 10px;
  
}
.playlist img{
  width: 150px;
}
</style>
