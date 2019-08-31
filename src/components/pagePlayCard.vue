<template>
  <el-carousel :interval="4000" type="card" height="350px" width="100px">
    <el-carousel-item  v-for="(o, item) in 4" :key="o"><h1>广告位招租</h1>
      <!--<h3 class="medium">{{ item }}test</h3>-->
      <!--<img src="../assets/play1.jpg"/>-->
      <!--<a :href="link">-->
        <!--
      <a :href="'#/movieDetail/'+items[item].title">
      <el-image
        style="height: 100%"
        :src="items[item].imgsrc"
        ></el-image>
      </a>-->
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data(){
    return {
      item: 'test',
      /*url: [
        '../assets/play1.jpg',
        '../assets/play2.jpg',
        '../assets/play3.jpg',
        '../assets/play4.jpg',
        '../assets/play5.jpg',
        '../assets/play6.jpg'
      ]*/
      url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      link:"#/movieDetail",
    }
  },
  props:{
    items:Array
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>