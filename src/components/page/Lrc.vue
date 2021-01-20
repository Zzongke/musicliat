<template>
    <div style="height:100%;overflow:auto;">
        歌词:
        <p class="p" v-for="(item,index) in lrcmid" :key="index">{{item}}</p>
    </div>
</template>
<script>
export default {
  name:'Lrc',
  props:{
    lrcmid:{
      lrc:{
        lyric:{
          type:String,
          default:null
        }
      }
    },
    getAllkey:{
      type:String,
      default:null
    },
    currentTime:{
      type:String,
      default:null
    },
    durationTime:{
      type:String,
      default:null
    }
  },
    data() {
       return {
       }
    },
    created(){
    },
    computed:{
    },
    methods:{
    },
}
</script>
<style scoped>
.p{
  text-align: center;
}
</style>
