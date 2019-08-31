<template>
  <div id="memberCard">
    <div class="head">
      <el-avatar
        :size=65
        :src="info.head"
        shape="square"
      ></el-avatar>
    </div>
    <div class="name">
      <el-link type="primary">{{info.name}}</el-link>
    </div>
  </div>
</template>

<script>
  export default {
      name: "memberCard",
      data() {
        return {
        }
      },
      props: {
        info: Object,
      }
  }
</script>

<style scoped>
  #memberCard {
    text-align: center;
  }
  .name {
    margin-bottom: 10px;
  }
</style>
