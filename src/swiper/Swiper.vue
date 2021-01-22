<template>
    <div class="banner-wrapper">
      <div class="slide-banner-wrapper" ref="slide">
        <div class="slide-banner-content">
          <div class="slide-page">
            <img src="@/assets/photo.png" alt="">
          </div>
          <div class="slide-page">
            <img src="@/assets/photo01.png" alt="">
          </div>
          <div class="slide-page">
            <img src="@/assets/photo02.png" alt="">
          </div>
          <div class="slide-page">
            <img src="@/assets/photo03.png" alt="">
          </div>
        </div>
      </div>
      <div class="dots-wrapper">
        <span
          class="dot"
          v-for="num in nums"
          :key="num"
          :class="{'active': currentPageIndex === (num - 1)}"></span>
      </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    name:'Swiper',
    data() {
       return {
         nums:4,
         currentPageIndex: 0
       }
    },
    created(){
    },
    mounted(){
      this.init()
    },
    beforeDestroy() {
      this.slide.destroy()
    },
    computed:{
    },
    methods:{
      init() {
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
          scrollY: false,
          slide: {
            threshold: 100
          },
          momentum: false,
          bounce: false,
          stopPropagation: true
        })
        this.slide.on('scrollEnd', this._onScrollEnd)

        this.slide.on('slideWillChange', (page) => {
          this.currentPageIndex = page.pageX
        })
      },
      nextPage() {
        this.slide.next()
      },
      prePage() {
        this.slide.prev()
      }
    }
}
</script>
<style scoped>
.width{
  height: 100%;
}
.banner-wrapper{
  position: relative;
}
.slide-banner-wrapper{
  min-height: 1px;
  overflow: hidden;
}
.slide-banner-content{
  height: 200px;
  white-space: nowrap;
  font-size: 0;
}
.slide-page{
  display: inline-block;
  height: 200px;
  width: 100%;
  line-height: 200px;
  text-align: center;
  font-size: 26px;
}
.slide-page img{
  height: 100%;
}
.dots-wrapper{
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
}
.dot{
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: lightblue;
}
.active{
  width: 20px;
  border-radius: 5px;
  background-color:lightgreen;
}
.btn-wrap{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.btn-wrap button{
  margin: 0 10px;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  background-color: #666;
}
</style>
