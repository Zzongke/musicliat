<template>
<div>
    <router-link :to="{name:'MusicPlay',params:{songerid:item.id}}" tag="div" class="card" v-for="(item,index) in singerid.mvs" :key="index">
        <div class="card-slider">
            <div class="poster">
                <img v-lazy="item.imgurl16v9" :alt="item.imgurl16v9">
            </div>
        </div>
        <div class="info">
            <div class="name">{{item.id}}</div>
            <div class="name">{{item.artistName}}</div>
        </div>
    </router-link>
</div>
</template>
<script>
import {request} from "@/network/request"

export default {
    name:"SingerList",
    data() {
       return {
           singerid:{
               type:String,
               default:false
           }
       }
    },
    created(){
        request({
				url:"/artist/mv?id="+ this.$route.params.singerid,
				method:'get'
			}).then(res => {
				this.singerid = res.data;
				// console.log(res.data)
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
    .card {
        display: flex;
		width: 100%;
		max-height: 140px;
		box-sizing: border-box;
		padding: 0 10px;
	}

	.card-slider {
        display: flex;
		border: 1px solid #eeeeee;
	}

	.poster {
		position: relative;
	}

	.poster img {
		height: 100px;
	}

	.card .info {
		font-size: 12px;
		white-space: normal;
		margin-top: 4px;
		margin-bottom: 2px;
		line-height: 14px;
	}
	.name{
		text-align: left;
		margin-bottom: 5px;
	}
</style>
