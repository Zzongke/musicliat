<template>
    <div style="display:flex;justify-content:center;"  v-if="musicmv.data.url !== null">
        <video :src="musicmv.data.url" style="width:100%;" controls></video>
    </div>
</template>
<script>
import {request} from "@/network/request"
export default {
    name:"MusicMv",
    data() {
       return {
           musicmv:{
             data:{}
           }
       }
    },
    created(){
        request({
            url:"/mv/url?id=" + this.$route.params.songerid,
            methods:"get"
        }).then(res => {
            // console.log(res.data);
            this.musicmv = res.data;
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
