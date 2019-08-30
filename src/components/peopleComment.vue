<template>
  <div id="peopleComment">
    <div class="head">
      <el-avatar
        :size=25
        src="http://114.115.131.124:8666/image/book/test.png"
      ></el-avatar>
      <el-link type="primary" :underline="false">{{info.author}}</el-link>
      <span class="time">{{info.time}}</span>
      <span class="number">{{info.likeNum}}人已赞</span>
    </div>
    <span id="cmtbody">{{info.content}}</span>
    <div class="zan">
      <el-button size="mini">
        <i class="el-icon-star-off"></i>
      </el-button>

    </div>
  </div>

</template>

<script>
    export default {
      name: "peopleComment",
      props: ['info'],
    }

</script>

<style scoped>
  #peopleComment {
    margin: 10px 0 50px 0;
  }
  #cmtbody{
    text-indent:35px;
    line-height: 30px;
  }
  .head {
    text-align: left;
  }
  .time {
    color: lightgrey;
    font-size: 15px;
  }
  .number {
    float: right;
    font-size: 13px;
  }
  .zan {
    text-align: right;
    position: relative;
    bottom: 5px;
  }
</style>
