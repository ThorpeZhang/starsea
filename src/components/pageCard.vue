<template>
    <el-row>
  <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 2">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <a :href="link">
        <img
          src="../assets/ci8.jpg"
          class="image"
        /></a>
      <!--<a :href="link">
      <el-image
        style="width: 100%; height: 100%"
        :src="src"
        :fit="scale-down"></el-image>
      </a>-->

      <div style="padding: 14px;">
        <div class="text">《寄生虫》讲述了发生在身份地位悬殊的两个家庭身上的故事：宋康昊饰演的无业游民父亲基泽，让寄托了家人生计希望的大儿子（崔宇植 饰）前往IT公司老总朴社长（李善均 饰）家应聘课外教师，随之发生了一连串意外事件。</div>
        <div class="bottom clearfix">
            <div><page-showstar value=4.8></page-showstar></div>
          <time class="time">{{ currentDate }}</time>
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
      currentDate: new Date()
    };
  },
  components: {
      'page-showstar': pageShowStar
  },
  props: {
    src: String
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
  .time {
    font-size: 13px;
    color: #999;
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