<template>
  <div>
    <div v-if="singermp3.data[0]">
          <music-lyric/>
          <audio ref="player" :src="singermp3.data[0].url" controls></audio>
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
           },
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
    }
}
</script>

<style scoped>

</style>
