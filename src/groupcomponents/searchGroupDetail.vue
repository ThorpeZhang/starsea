<template>
  <div id="searchGroupDetail">
    <el-row>
      <div class="head">
        <!--小组链接没加-->
        <span>[小组] <a  :href="'#/'+info.type+'Detail/'+info.id">{{info.name}}</a> {{info.createTime}}</span>
      </div>
    </el-row>
    <el-row>
      <el-col span="4">
        <div class="imagePaper">
          <img :src="pic" class="movieLogo" height="120px">
        </div>
      </el-col>
      <el-col span="20">
        <div class="introduction">
            <span class="intro-body">
            <span class="intro-title">简介：</span>
              {{info.introduction}}
            </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "searchGroupDetail",
    data() {
      return {
        pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    props: {
      info: Object,
    },
  }
</script>

<style scoped>
 #searchGroupDetail {
   text-align: left;
 }
 a{
   text-decoration: none;
   color: #74b9ff;
 }
 .head{
   line-height: 30px;
   font-size: 20px;
 }
 .imagePaper {
   width: 120px;
   height: 120px;
   overflow: hidden;
   position: relative;
   top: 10px;
 }
 .intro-body {
   color: grey;
   line-height: 30px;
   -webkit-line-clamp: 4;
   display: -webkit-box;
   -webkit-box-orient:vertical;
   overflow:hidden;
   text-overflow: ellipsis;
   padding-top: 10px;
 }
  .intro-title {
    font-weight: bolder;
  }
  .introduction {
    padding-left: 10px;
  }
</style>
