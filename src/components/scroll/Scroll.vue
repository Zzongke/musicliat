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
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
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
  height: 400px;
  overflow: hidden;
  background-color: #ffffff;
}
</style>
