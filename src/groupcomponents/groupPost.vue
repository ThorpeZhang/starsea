<template>
  <div id="groupPost">
    <el-row>
      <el-col span="2">
        <div class="paper">
          {{info.likeNum}}人<br>已赞
        </div>
      </el-col>
      <el-col span="22">
        <div class="main">
          <div>
            <el-link type="primary" :href="'#/'+info.type+'Detail/'+info.id">{{info.title}}</el-link>
          </div>
          <div class="introduction">
            <el-row>
              <el-col span="3">
                <el-avatar
                  :size=50
                  :src="info.imgAddr"
                  shape="square"
                ></el-avatar>
              </el-col>
              <el-col span="21">
                {{info.mainBody}}
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
  #groupPost {
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
    padding-top: 10px;
    padding-bottom: 10px;

     -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  }
  .main {
    margin-left: 20px;
    margin-bottom: 5px;
  }
</style>
