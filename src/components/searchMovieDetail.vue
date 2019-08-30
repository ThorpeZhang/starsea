<template>
  <div id="searchMovieDetail">
    <el-row>
      <el-col span="20">
        <div class="info">
          <span v-if="info.type==='movie'" class="types">[电影] <a :href="'#/'+info.type+'Detail/'+info.title">{{info.title}}</a></span>
          <span v-else-if="info.type==='TV'" class="types">[电视] <a :href="'#/'+info.type+'Detail/'+info.title">{{info.title}}</a></span>
          <span v-else-if="info.type==='book'" class="types">[图书] <a :href="'#/'+info.type+'Detail/'+info.title">{{info.title}}</a></span>
          <div class="star">
            <show-star :value="info.mark"></show-star>
          </div>
          <div class="introduction">
            <span class="intro-body">
              <p>{{info.tags}}</p>
            <span class="intro-title">简介：</span>
              {{info.introduction}}
            </span>
          </div>
        </div>
      </el-col>
      <el-col span="4">
        <div class="imagePaper">
          <img :src="info.imgsrc" class="movieLogo" height="160px">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import showStar from './pageShowStar.vue'

  export default {
    name: "searchMovieDetail",
    components: {
      'show-star': showStar,
    },
    props: {
      info: Object,
    },
  }
</script>

<style scoped>
h1{
  display: inline;
}
.types{
  line-height: 30px;
  font-size: 20px;
}
  #searchMovieDetail {
    text-align: left;
  }
  .introduction {
    padding-top: 10px;
  }
  .intro-title {
    font-weight: bolder;
  }
  p{
    -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient:vertical;
  overflow:hidden;
  text-overflow: ellipsis;
  }
  .intro-body {
    color: grey;
    line-height: 30px;
    
    -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient:vertical;
  overflow:hidden;
  text-overflow: ellipsis;
  }
  .imagePaper {
    width: 120px;
    height: 160px;
    overflow: hidden;
    position: relative;
    top: 30px;
    padding-left: 20%;
  }
  a{
    text-decoration: none;
    color: #74b9ff;
  }
  .star{
    position: relative;
    top:5px;
  }
</style>
