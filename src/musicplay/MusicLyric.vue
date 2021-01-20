<template>
    <div style="width:50%;margin:0 auto;text-align:center;" v-if="musiclyric.data.user.nickname !== null">
        歌手信息
        {{musiclyric.data.user.nickname}}<br/>
        <img v-lazy="musiclyric.data.user.backgroundUrl" alt="">
    </div>
</template>
<script>
import {request} from "@/network/request"

export default {
    name:"MusicLyric",
    data() {
       return {
           musiclyric:{
             data:{
               user:{
                 type:String,
                 default:false
               }
             }
           }
       }
    },
    created(){
        request({
            url:"/artist/detail?id=" + this.$route.params.songerid,
            methods:"get"
        }).then(res => {
            console.log(res.data)
            this.musiclyric = res.data;
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
  img{
    width: 100%;
  }
</style>
