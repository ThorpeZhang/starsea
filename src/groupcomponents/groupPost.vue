<template>
  <div id="groupPost">
    <el-card>
    <el-row>
      <el-col :span="16">
        <div class="grid-content bg-light zhaiyao">
          讨论
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-light zuozhe">
         作者
        </div>
      </el-col>
      <el-col :span="3">
        最后回应
      </el-col>
    </el-row>
    <hr />


   
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>

        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>

    </el-card>
  </div>
</template>

<style scoped>
#groupPost {
  text-align: left;
}

.zhaiyao{
    color:#000;
}
</style>

<script>
import item from "./grouppostItem.vue";
export default {
  el: "#groupPost",
  data: function() {
    return {
      postDetail: "https://www.douban.com/group/topic/6802379/"
    };
  },
  components: {
    "post-item": item
  }
};
</script>