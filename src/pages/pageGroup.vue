<!--
小组和帖子的数据 先都给到pageGroup 然后子组件都到这里申请数据
-->

<template>
  <div id="pageGroup">
    <el-container>
      <el-main>
        <el-container>
          <el-header height="40px">
            <el-row>
              <el-col :span="20" :offset="4">
                <h1>精选帖子速递</h1>
                <hr/>
              </el-col>
            </el-row>
          </el-header>
          <el-main class="main">
            <el-col :span="20" :offset="4" >
              <!--这里是帖子推荐-->
              <div v-for="(value,index) in info.topics" :key="value">
                <group-post :info="info.topics[index]"></group-post>
              </div>
            </el-col>
          </el-main>
        </el-container>
      </el-main>

      <el-aside width="35%">
        <div id="space"></div>
        <el-container height="100%">
          <el-header height="40px">
            <el-row>
              <el-col :span="15" >
                <h2>热门小组<hr/></h2>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-row>
              <!--这里是小组推荐-->
              <el-col :span="15" >
                <div v-for="(item,i) in info.groups" :key="item">
                  <group-intro :info="info.groups[i]"></group-intro>
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>

      </el-aside>
    </el-container>
  </div>
</template>

<script>
  import groupPost from '../groupcomponents/groupPost.vue'
  import groupIntro from '../groupcomponents/groupIntro.vue'
  import groupDetail from '../groupcomponents/groupDetail.vue'
  export default {
    name: "PageGroup",
    components: {
      'group-post': groupPost,
      'group-intro': groupIntro,
      'group-detail': groupDetail,
    },
    data() {
      return {
        info: {},
      }
    },
    mounted(){
      this.$axios.get('/showGroupIndex',{
        params:{
          num: '10'
        }
      })
      .then(successResponse => {
        this.$set(this.info,"groups",this.groupListProcess(successResponse.data));
      })
      .catch(failResponse => {})

      this.$axios.get('/showPostIndex',{
        params:{
          num: '10'
        }
      })
      .then(successResponse => {
        this.$set(this.info,"topics",this.topicListProcess(successResponse.data));
      })
      .catch(failResponse => {})
    }
  };
</script>

<style scoped>
  #pageGroup {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    min-width: 1200px;
  }
  h1{
    font-size: 25px;
    margin: 0;
  }
  h2{
    font-size: 15px;
    margin:0;
  }
  #space{
    width: 100%;
    height: 60px;
  }
  .el-header, .el-footer {
    text-align: left;
    line-height: 30px;
  }
  .el-main {
    text-align: center;
  }
</style>
