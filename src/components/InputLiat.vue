<template>
    <div style="padding:10px;width:50%;margin:0 auto;">
        <input class="input" type="text" v-model="text" @focus="inputFocus" @blur="inputBlur">
        <div v-show="texts" v-if="items" style="position:absolute;width:53%;margin:0 auto;background-color:#ffffff;z-index:10;height:250px;overflow:auto;">
          <router-link :to="{name:'MusicPlay',params:{songerid:item.id}}" tag="p" v-for="(item,index) in items.songs" :key="index" style="text-align:center;padding:10px;"
          :class="{hoverClass:index == hoverColor}" @mouseenter.native="hoverColor = index" @mouseleave.native="hoverColor = -1">
            {{item.name}}
          </router-link>
        </div>
    </div>
</template>
<script>
import {request} from '@/network/request'

export default {
    name:'InputLiat',
    data() {
       return {
        text:'',
        items:{
          type:String,
          default:null,
        },
        hoverColor:-1,
        texts:false
       }
    },
    watch:{
      text(){
        request({
        url:"/search?keywords="+ this.text,
        methods:"post"
      }).then(res => {
        console.log(res)
        this.items = res.data.result
      }).catch(err => {
        console.log(err)
      });
        this.textd();
      }
    },
    created(){
      
    },
    computed:{
    },
    methods:{
      inputFocus(){
        setTimeout(() => {
          this.textd();
        },300)
      },
      inputBlur(){
        this.texts = false;
      },
      textd(){
        if(this.text !== ''){
          this.texts = true
        }else{
          this.items.songs = '';
          this.texts = false;
        }
      }
    },
}
</script>
<style scoped>
.input{
  height: 30px;
  border-radius: 25px;
  padding: 0 10px 0 45px;
  width:100%;
  border: none;
  outline: none;
  background: url("../assets/search-white.png") no-repeat center;
  background-color: #cfcfcf;
  background-size: 15px;
  background-position-x: 20px;
}
p{
  margin: 0;
  cursor: pointer;
}
.hoverClass{
  background-color: #eeeeee;
}
</style>
