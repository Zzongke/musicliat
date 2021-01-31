<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    data() {
       return {
         scroll:null
       }
    },
    created(){
    },
    mounted(){
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper,{
          click: true,      // 配置允许点击事件
          scrollY: true ,    // 开启纵向滚动
          scrollbar: { // 滚动条
            fade: true,
          },
          pullUpLoad: true,
        });
        this.scroll.refresh();
        this.scroll.scrollTo(0,0,500)
      })
    },
    computed:{
    },
    methods:{
    },
}
</script>
<style scoped>
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
}
</style>
