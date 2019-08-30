<template>
  <div id="APP-Group">
    <el-container>
      <el-aside width="15%"></el-aside>
      <el-main>
        <page-group></page-group>
        <page-group></page-group>
        <page-group></page-group>
        <page-group></page-group>
      </el-main>
      <el-aside width="15%"></el-aside>
    </el-container>
  </div>
</template>

<script>
import pageCard from "../components/pageCard.vue";
import pageGroupItem from "../components/pageGroupItem.vue";

export default {
  name: "PageGroup",
  components: {
    "page-card": pageCard,
    "page-group": pageGroupItem
  }
};
</script>

<style scoped>
#APP-Group {
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>