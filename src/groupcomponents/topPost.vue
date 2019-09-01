<template>
  <div id="topPost">
    <el-row>
      <el-col span="2">
        <div class="paper">
          {{info.number}}人<br>已赞
        </div>
      </el-col>
      <el-col span="22">
        <div class="main">
          <div>
            <el-col span="1">
              <div class="top">
                置顶
              </div>
            </el-col>
            <el-col span="23">
              <el-link type="primary" href="./#/topicDetail">&nbsp;&nbsp;{{info.title}}</el-link>
            </el-col>
          </div>
          <div class="introduction">
            <el-row>
              <el-col span="3">
                <el-avatar
                  :size=50
                  :src="info.head"
                  shape="square"
                ></el-avatar>
              </el-col>
              <el-col span="21">
                {{info.introduction}}
              </el-col>
            </el-row>
          </div>
          <br>
          <hr>
        </div>
      </el-col>
    </el-row>
  </div>
</template>



<script>
  export default {
    el: "#groupPost",
    props: {
      info: Object,
    }
  }
</script>

<style scoped>
  #topPost {
    position: relative;
    text-align: left;
    height: 125px;
    padding-bottom: 20px;
  }
  .paper {
    background: #FAE9DA;
    color: #CA6445;
    height: 50px;
    width: 50px;
    font-size: 13px;
    text-align: center;
    margin-top: 5px;
  }
  .introduction {
    font-size: 13px;
    background: #F9F9F9;
    padding-top: 30px;
    padding-bottom: 10px;
  }
  .main {
    margin-left: 20px;
    margin-bottom: 5px;
  }
  .top {
    background: #7CCD7C;
    font-size: 13px;
    border-radius: 5px 5px 5px 5px;
    opacity: 1;
    margin-top: 3px;
    margin-left: 1px;
  }
</style>
