<template>
    <div class="singerinfo">
      <singer-list />
    </div>
</template>
<script>

import SingerList from "@/components/page/SingerList"

export default {
    name:"SingerInfo",
    components:{
        SingerList
    },
    data() {
       return {
       }
    },
}
</script>
<style scoped>
    .singerinfo{
        padding: 10px 0;
    }
</style>
