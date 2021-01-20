<template>
    <div style="width:100%;margin:0 auto;text-align:center;">
      <div @click="homeClick" style="padding:20px 10px;display:flex;justify:space-between;">
        <img style="width:20px;cursor:pointer;" src="@/assets/home_black.png" alt="">
      </div>
        歌手信息
        <div class="song-lrc">
          <lrc ref="player"  :lrcmid="musiclyric"  :currentTime="currentTime" :durationTime="durationTime" :songid="this.$route.params.songerid"/>
        </div>
    </div>
</template>
<script>
import {request} from "@/network/request"
import Lrc from "@/components/page/Lrc"

export default {
    name:"MusicLyric",
    components:{
      Lrc
    },
    data() {
       return {
           musiclyric:{
           },
           lyricdd:{},
           keyArr:[],
           currentTime:null,
           durationTime:null,
          //_currentTime:0,//当前播放时间
          //_durationTime:0,//整体的时间
       }
    },
    props:{
      songerid:{
        type:String,
        default:"0"
      }
    },
    created(){
        request({
            url:"/lyric?id=33894312",
            methods:"get"
        }).then(res => {
            // console.log(res.data)
            // this.musiclyric = res.data;
            var lyricd = res.data.lrc;
            var lyrics = lyricd.lyric.split("\n");
            var lrcObj = {};
            for(var i = 0;i < lyrics.length;i++){
              var lyric = decodeURIComponent(lyrics[i]);
              // eslint-disable-next-line no-useless-escape
              var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
              var timeRegExpArr = lyric.match(timeReg);
              if(!timeRegExpArr)continue;
              var clause = lyric.replace(timeReg,'');
              for(var k = 0,h = timeRegExpArr.length;k < h;k++){
                var t = timeRegExpArr[k];
                var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                    sec = Number(String(t.match(/\[\d*/i)).slice(1));
                var time = min * 60 + sec;
                lrcObj[time] = clause;
              }
            }
            this.musiclyric = lrcObj;

        }).catch(err => {
            console.log(err)
        })
    },
    computed:{
      // getAllkey(){
      //   for(var allkey in this.musiclyric){
      //     this.keyArr.push(allKey);
      //   }
      // }
    },
    methods:{
      homeClick(){
        this.$router.go(-1);
      },
      addEventListeners(){
        const self = this;
        self.$refs.player.$el.addEventListener('timeupdate',self._currentTime);
        self.$refs.player.$el.addEventListener('canplay',self._durationTime);
      },
      removeEventListeners(){
        const self = this;
        self.$refs.player.$el.removeEventListener('timeupdate',self._currentTime);
        self.$refs.player.$el.removeEventListener('canplay',self._durationTime);
      },
      _currentTime(){
        const self = this;
        self.currentTime = self.$refs.player.currentTime;
      },
      _durationTime(){
        const self = this;
        self.durationTime = self.$refs.player.duration;
      }
    },
    mounted(){
      this.addEventListeners();
    },
    beforeDestroy(){
      this.removeEventListeners();
    }
}
</script>
<style scoped>
  img{
    width: 100%;
  }
  .song-lrc{
    height: 100px;
    text-align: center;
  }
</style>
