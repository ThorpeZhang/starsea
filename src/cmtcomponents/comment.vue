<template>
<div id="comment">
      <el-button size="small" @click="pinglun" >评论</el-button>
</div>

</template>

<style>
#comment{
  margin: 0;
  padding: 0;
}
</style>

<script>
  export default {
    el:"#comment",

    methods: {
      pinglun() {
        this.$prompt('评论', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[\s\S]{5,}$/,
          inputErrorMessage: '内容应不少于5字'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '发表成功'
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