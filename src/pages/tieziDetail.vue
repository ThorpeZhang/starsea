<template>
  <div id="tieziDetail">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="20" :offset="4">
            <tiezihead></tiezihead>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="20" :offset="4">
            <neirong></neirong>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="1" :offset="4">
            <div >
              <comment></comment>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="20" :offset="4">
            <!--这里用v-for来循环渲染所有评论-->
            <cmt-item></cmt-item>
            <cmt-item></cmt-item>
            <cmt-item></cmt-item>
          </el-col>
        </el-row>


      </el-main>
      <el-aside width="35%"></el-aside>
    </el-container>
  </div>
</template>

<style>
#tieziDetail {
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
}
</style>

<script>
import tiezihead from "../tiezicomponents/tieziHead.vue";
import neirong from "../tiezicomponents/tieziNeirong.vue";
import star from "../cmtcomponents/star.vue";
import comment from "../cmtcomponents/comment.vue";
import cmtitem from "../cmtcomponents/cmtItem";
import cmtItem from '../cmtcomponents/cmtItem.vue';
export default {
  el: "#tieziDetail",
  data: function() {
    return {};
  },
  components: {
    'tiezihead': tiezihead,
    'neirong': neirong,
    'star': star,
    'comment':comment,
    'cmt-item':cmtItem
  }
};
</script>