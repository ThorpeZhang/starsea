<template>
  <div id="searchMovieDetail">
    <el-row>
      <el-col span="20">
        <div class="info">
          <span>[电影]</span>
          <el-link href="./#/detail" target="_blank" type="primary">
            电影名称
          </el-link>
          <div class="star">
            <show-star value="4.0"></show-star>
          </div>
          <div class="introduction">
            <span class="intro-title">简介：</span>
            <span class="intro-body">
                《寄生虫》讲述了发生在身份地位悬殊的两个家庭身上的故事：
                宋康昊饰演的无业游民父亲基泽，
                让寄托了家人生计希望的大儿子（崔宇植 饰）前往IT公司老总朴社长（李善均 饰）家应聘课外教师
                随之发生了一连串意外事件。
              </span>
          </div>
        </div>
      </el-col>
      <el-col span="4">
        <div class="imagePaper">
          <img src="../assets/ci8.jpg" class="movieLogo" height="160px">
        </div>
      </el-col>
    </el-row>
    <hr>
  </div>
</template>

<script>
  import showStar from './pageShowStar.vue'

  export default {
    name: "searchMovieDetail",
    components: {
      'show-star': showStar,
    }
  }
</script>

<style scoped>
  #searchMovieDetail {
    text-align: left;
  }
  .introduction {
    padding-top: 10px;
  }
  .intro-title {
    font-weight: bolder;
  }
  .intro-body {
    color: grey;
  }
  .imagePaper {
    width: 120px;
    height: 160px;
    overflow: hidden;
    position: relative;
    padding-left: 20%;
  }
</style>
