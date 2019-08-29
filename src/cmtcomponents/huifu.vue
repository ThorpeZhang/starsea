<template>
  <div id="huifu">
    <el-col span="4" class="hui-fu">
      <i class="el-icon-more" @click="huifu"></i>
    </el-col>
  </div>
</template>


<style>
</style>

<script>
export default {
  el: "#huifu",
  data: function() {
    return {
    };
  },
  methods: {
      huifu() {
        this.$prompt('回复评论', '', {
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
};
</script>