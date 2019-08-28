<template>

  <!---->
  <div id="mainSearchPage">
    <el-backtop target=".mainBlock"></el-backtop>
    <el-row :gutter="20">
      <el-row>
        <el-col :span="24" class="search-box">
          <el-input placeholder="请输入内容" v-model="mainSearchInput" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-col :span="2" push="2">
        <div class="sideBlock">
          <div><el-button type="success" plain>全部</el-button></div>
          <div><el-button type="success" plain>电影</el-button></div>
          <div><el-button type="success" plain>书籍</el-button></div>
          <div><el-button type="success" plain>小组</el-button></div>
        </div>
      </el-col>
      <el-col :span="18" push="2">
        <div class="mainBlock" v-for="item in items">
          <search-movie-detail></search-movie-detail>
        </div>
      </el-col>
    </el-row>
  </div>


  <!--
  分页
  <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
  -->

</template>

<script>
    import searchMovieDetail from '../components/searchMovieDetail.vue'
    export default {
        name: "mainSearchPage",
        components : {
          'search-movie-detail': searchMovieDetail,
        },
        data() {
          return {
            mainSearchInput: '',
            item: searchMovieDetail,
          }
        }
    }
</script>

<style scoped>
  #mainSearchPage {
    min-width: 1000px;
  }
  .search-box {
    padding-left: 9.5%;
    padding-right: 9.5%;
    margin-bottom: 40px;
  }
  .sideBlock {
    padding-left: 5px;
    text-align: left;
  }
</style>
