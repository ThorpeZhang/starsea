<template>
  <div id="detail_block">
    <el-timeline>
      <el-timeline-item  timestamp="2018/4/12" placement="top">
        <el-card>         
            <h4>{{title}}</h4>
            <span><a :href="zuming">小组名</a></span>
            <p>{{ message }}</p>  
        </el-card>
        <dianzan></dianzan>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>

<script>
import Vue from "vue";
import zan from "./zan.vue";

export default {
  el: "#detail_block",
  components: {
    "dianzan": zan
  },
  data: function() {
    return {
      zuming:"#/groupDetail",
      title: "这是默认标题",
      message: "这是默认内容"
    };
  }
};
</script>>