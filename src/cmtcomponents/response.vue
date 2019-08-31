<template>
  <div id="response">
    <div class="head">
      <el-avatar
        :size=25
        :src="info.head"
      ></el-avatar>
      <el-link type="primary" :underline="false">{{info.name}}</el-link>
      <span class="time">{{info.time}}</span>
      <span class="number">回复
        <el-link type="primary" underline="false">要回复的人的id</el-link>
      </span>
    </div>
    <span>{{info.comment}}</span>
    <hr>
  </div>
</template>

<script>
    export default {
      name: "response",
      props: ['info'],
    }
</script>

<style scoped>
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
</style>
