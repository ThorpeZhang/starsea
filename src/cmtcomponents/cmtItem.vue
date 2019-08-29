<template>
  <div id="cmtItem">
    <el-row>
      <el-col :span="3">
        <div class="headpic" align="left">
          <img :src="headpicsrc" />
        </div>
      </el-col>
      <el-col :span="21">
        <div>
          <el-row class="name-time">
            <el-col span="4" class="name"><a :href="namelink">{{name}}</a></el-col>
            <el-col span="18" class="time">发表于：{{time}}</el-col>
            <el-col span="2" class="huifu"><hui-fu></hui-fu></el-col>
          </el-row>
          <el-row class="neirong">{{neirong}}</el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<style>
.name-time{
    background: rgb(232, 241, 243);
}
.name{
    text-align:left;
}
.time{
    text-align:left;
}

</style>

<script>
import huifu from './huifu.vue'
export default {
  el: "#cmtItem",
  data: function() {
    return {
      headpicsrc: "https://img3.doubanio.com/icon/u179533994-2.jpg",
      namelink:"https://www.douban.com/people/199138931/",
      name:"哎哟哟",
      time:"2019-08-27 13:25",
      neirong:"真的好干净，等更新"
    };
  },
  components :{
      'hui-fu':huifu
  },

};
</script>