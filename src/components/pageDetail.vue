<template>
  <!--数据怎么实现加载进来-->

  <!--
    现在的问题是 左右屏幕不会滚动
  -->
  <div>
    <el-row>
      <el-col :span="10" :offset="6">
        <info-card :info="info"></info-card>
      </el-col>
    </el-row>
  </div>
    
      
</template>

<script>
import pageShowStar from "./pageShowStar.vue"
import writecomment from "./comment.vue"
import commentBox from "./commentBox"
import infoCard from "./infoCard.vue"
export default {
  name: 'pageDetail',
  data() {
    return {
      currentDate: new Date(),
      /*
      info :{
        title: '保持沉默',
        mark: 3.9,
        items: [
          {name: '导演', value:'周可'},
          {name: '主演', value:'周迅 / 吴镇宇 / 祖峰 / 孙睿'},
          {name: '类型', value:'剧情 / 爱情 / 悬疑'},
          {name: '制片国家/地区', value:'中国大陆'},
          {name: '语言', value:'汉语普通话'},
          {name: '上映日期', value:'2019-08-23(中国大陆)'},
          {name: '片长', value:'96分钟'},
        ]
      }*/
    };
  },
  components: {
      'page-showstar': pageShowStar,
      'write-comment': writecomment,
      'comment-box':commentBox,
      'info-card': infoCard,
  },
  props:{
    info: Object
  }
}
</script>

<style scoped>
  template {
    overflow: hidden;
    min-width:1500px;
  }
  .content {
    width: 100%;
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
    margin-top: 15px;/*
    width: 300px;
    height: 400px;*/
    overflow: hidden;
    position: relative;
  }
  .imagePaper img {
    width:100%;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:center;
			/*为了效果明显，可以将如下边框打开，看一下效果*/
			/* border:1px solid black; */
  }
  .mark {
    font-size: 30px;
    color: orange;
    padding-top: 10px;
  }
  .more-info {
    line-height: 40px;
    padding-top: 10px;
  }
  .description {
    text-align: left;
    margin: 20px 15% 50px;
  }
  .comment {
    text-align: left;
    margin: 20px 15% 50px;
  }
  .writeComment {
    text-align: left;
    margin: 20px 15% 50px;
  }

</style>
