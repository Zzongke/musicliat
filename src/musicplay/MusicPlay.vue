<template>
  <div>
    <div v-if="singermp3.data[0]">
          <music-lyric/>
          <audio controls v-if="singermp3.data[0].url !== null">
              <source :src="singermp3.data[0].url" type="audio/mpeg">
          </audio>
          <div v-else style="text-align:center;">
            没有内容
          </div>
          <music-mv/>
    </div>
  </div>
    
</template>

<script>
import {request} from "@/network/request"
import MusicLyric from "@/musicplay/MusicLyric"
import MusicMv from "@/musicplay/MusicMv"

export default {
    name:"MusicPlay",
    components:{
        MusicLyric,
        MusicMv
    },
    data() {
       return {
           singermp3:{
               data:{}
           }
       }
    },
    created(){
        request({
            url:"/song/url?id="+ this.$route.params.songerid,
            methods:'get'
        }).then(res => {
            // console.log(res.data)
            this.singermp3 = res.data
        }).catch(err => {
            console.log(err)
        })
    },
    computed:{
    },
    methods:{
    },
}
</script>

<style scoped>

</style>
