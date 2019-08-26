<template>
  <!--数据怎么实现加载进来-->

  <!--
    现在的问题是 左右屏幕不会滚动
  -->
  <el-row>
    <el-container style="width: 100%;" class="content">
      <el-header>
        <div class="title">
          <h1>
            <span align="left">寄生虫</span>
            <span>(2019)</span>
          </h1>
        </div>
      </el-header>
      <el-main>
        <el-col :span="6" push="4" class="left">
          <div class="imagePaper">
            <img src="../assets/ci8.jpg" class="movieLogo">
          </div>
        </el-col>
        <el-col :span="8" push="4" class="right">
          <div class="mark"> 评分：4.0<page-showstar value=4.0></page-showstar></div>
          <br>
          <div class="more-info">
            <div>导演：奉俊昊</div>
            <div>主演：宋康昊 / 李善均 / 赵汝贞 / 崔宇植 / 朴素丹 / 张慧珍 / 玄升玟 / 郑贤俊 / 朴叙俊 / 李静恩</div>
            <div>类型：剧情 / 喜剧</div>
            <div>制片国家/地区：韩国</div>
            <div>语言：韩语</div>
            <div>上映时间：2019-05-21</div>
            <div>片长：132分钟</div>
          </div>
        </el-col>
      </el-main>
    </el-container>
    <div class="description">
        <h1>剧情简介</h1>
        <p>《寄生虫》讲述了发生在身份地位悬殊的两个家庭身上的故事：宋康昊饰演的无业游民父亲基泽，让寄托了家人生计希望的大儿子（崔宇植 饰）前往IT公司老总朴社长（李善均 饰）家应聘课外教师，随之发生了一连串意外事件。</p>
    </div>
    <div class="comment">
      <h1>影视评论</h1>
      <p>很好看</p>
    </div>
  </el-row>
</template>

<style scoped>

  template {
    overflow: hidden;
    min-width:1500px;
  }
  .content {
    width: 100%;
  }
  .left {

  }
  .right {

    text-align: left;
    font-size: 20px;
    border-top: 100px;
    display: -moz-grid-line;
  }
  .title {
    margin-left: 18%;
    text-align: left;
    font-size: 30px;
  }
  .imagePaper {
    margin-left: 0%;
    margin-top: 15px;
    width: 300px;
    height: 400px;
    overflow: hidden;
    position: relative;
  }
  .movieLogo {
    height: 100%;
    overflow: hidden;
  }
  .mark {
    font-size: 30px;
    color: orange;
  }
  .more-info {
    line-height: 40px;
  }
  .description {
    text-align: left;
    margin: 20px 15% 50px;
  }
  .comment {
    text-align: left;
    margin: 20px 15% 50px;
  }
</style>

<script>
import pageShowStar from "./pageShowStar.vue"
export default {
  name: 'pageDetail',
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
      'page-showstar': pageShowStar
  }
}
</script>
