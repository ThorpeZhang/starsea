<template>
  <div id="topicIntro">
    <el-row>
      <el-col span="5">
        <el-avatar
          :size=45
          :src="info.imgAddr"
          shape="square"
        ></el-avatar>
      </el-col>
      <el-col span="19">
        <div class="name">
          <el-link type="primary" :href="'#/'+info.type+'Detail/'+info.id">{{info.title}}</el-link>
        </div>
        <div class="intro">
          {{info.mainBody}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "topicIntro",
        props: {
          info: Object,
        },
    }
</script>

<style scoped>
#topicIntro{
  margin: 10px 0 40px 0;
}
  .name {
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis
  }
  .intro {
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 15px;
    padding-top: 5px;
  }
</style>
