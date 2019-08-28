<template>
    <el-row>
  <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 2">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <a :href="'#/movieDetail/'+items[index].title">
      <!--<a :href="link">-->
        <img
          :src="items[index].imgsrc"
          class="image"
        /></a>

      <div style="padding: 14px;">
        <!--<div class="text">{{items[0].data.introduction}}</div>-->
        <div class="text">{{items[index].introduction}}</div>
        <div class="bottom clearfix">
            <div><page-showstar :value="items[index].mark"></page-showstar></div>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
import pageShowStar from "./pageShowStar.vue"
export default {
  name: 'pageCard',
  data() {
    return {
      link:"#/movieDetail",  
    };
  },
  components: {
      'page-showstar': pageShowStar
  },
  props: {
    items:Array
  }
}
</script>
<style>
.text{
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow: ellipsis;
    line-height: 24px;
}
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>