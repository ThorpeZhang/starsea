
<template>
  <div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="影视" value="1"></el-option>
      <el-option label="图书" value="2"></el-option>
      <el-option label="小组" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
</template>
 
<style>
 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
 
<script>
export default {
  name: 'pageSearch',
  data() {
    return {
      input: '',
      select: ''
    }
  }
}
</script>
