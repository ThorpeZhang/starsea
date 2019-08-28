<template>
  <el-button type="text" @click="open">
    写评论
  </el-button>
</template>

<script>
  //怎样限制评论字数
  export default {
    name: "commentBox",
    methods: {
      open() {
        this.$prompt('请输入评论，不少于10个字', '评论', {
          confirmButtonText: '提交',
          cancelButtonText: '取消',
          minlength: 10,
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '提交成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
