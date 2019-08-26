<template>
  <div>
    <el-row>
      <el-button size="small" @click="pinglun">&emsp;评论&emsp;</el-button>
      <el-button size="small" @click="dianzan">&emsp;点赞&emsp;</el-button>
      <el-button size="small" @click="zhuanfa">&emsp;转发&emsp;</el-button>
    </el-row>
  </div>
</template>


<style>
</style>
<script>
export default {
  methods: {
    pinglun() {
        this.$prompt('评论', {
          confirmButtonText: '确定发表',
          cancelButtonText: '取消',
         
        }).then(({ value }) => {  //这个value就是输入的评论
          this.$message({
            type: 'success',
            message: '发表成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消评论'
          });       
        });
      },

    dianzan() {
      const h = this.$createElement;
      this.$message({
        title: "点赞成功",
        message: h("i", { style: "color: #55ccff" }, "赞！")
      });
    },

    zhuanfa() {
      const h = this.$createElement;
      this.$message({
        title: "成功",
        message: h("i", { style: "color: #55ccff" }, "转发成功！")
      });
    }
  }
};
</script>