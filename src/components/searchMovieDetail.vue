<template>
  <div id="searchMovieDetail">
    <el-row>
      <el-col span="20">
        <div class="info">
          <span>[电影]</span>
          <el-link href="./#/detail" target="_blank" type="primary">
            {{info.name}}
          </el-link>
          <div class="star">
            <show-star value="4.0"></show-star>
          </div>
          <div class="introduction">
            <span class="intro-title">简介：</span>
            <span class="intro-body">
              {{info.introduction}}
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
    },
    props: ['info'],
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
