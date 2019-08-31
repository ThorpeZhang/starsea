<template>
  <div id="groupIntro">
    <el-row>
      <el-col span="6">
        <el-avatar
          :size=45
          :src="info.imgAddr"
          shape="square"
        ></el-avatar>
      </el-col>
      <el-col span="18">
        <div class="name">
          <el-link type="primary" :href="'#/'+info.type+'Detail/'+info.id">{{info.name}}</el-link>
        </div>
        <div class="member">
          {{info.membersName.length}}人已加入小组
        </div>
      </el-col>
    </el-row>
    <hr>
  </div>
</template>

<script>
  export default{
      el:"#groupIntro",
      props: {
        'info': Object,
      }
  }
</script>

<style>
  #groupIntro {
    text-align: left;
    position: relative;
  }
  .member {
    font-size: 13px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
