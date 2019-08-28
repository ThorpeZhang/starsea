<template>
    <el-row>
  <el-col :span="2" v-for="(o, index) in 5"  :key="o" :offset="index > 0 ? 2 : 4">
    <logo-card :item="items[index]" :type="type"></logo-card>
  </el-col>
</el-row>
</template>

<script>
import logoCard from "./logoCard.vue"
export default {
  name: 'pageCard',
  data() {
    return {
      link:"#/movieDetail",  
    };
  },
  components: {
      'logo-card': logoCard
  },
  props: {
    items:Array,
    type:String,
  }
}
</script>
<style>
.text{
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow: ellipsis;
    line-height: 24px;
}
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    height: 90%;
    width: 100%;
    display: block;
    overflow: hidden;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>