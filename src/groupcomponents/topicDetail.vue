<template>
  <div id="topicDetail">
    <!--这个是帖子模板-->
    <el-container>
      <el-main class="main">
        <el-row>
          <el-col span="20" offset="4">
            <div class="title">
              <h1>{{info.topic.title}}</h1>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="20" offset="4">
            <div class="authorInfo">
              <el-col span="2">
                <div class="paper">
                  <img :src="info.imgAddr" height="50px">
                </div>
              </el-col>
              <el-col span="22">
                <div class="text">
                  <el-link type="primary" :underline="false">{{info.username}}</el-link>
                  <span class="time">{{info.topic.time}}</span>
                </div>
              </el-col>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="18" offset="4">
            <div class="article">
              <!--段落缩进的问题-->
              <p>{{info.topic.mainBody}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="18" offset="4">
            <div class="writeComment">
              <!--这个地方放写评论的组件-->
              这个地方放写评论的组件
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="18" offset="4">
            <div class="comment">
              <!--这个地方放评论的组件-->
              <h1>评论</h1>
              <div v-for="(value,index) in info.topic.discuss" :key="value">
                <people-comment :info="info.topic.discuss[index]"></people-comment>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>

      <el-aside width="35%" class="side">
        <div id="space"></div>
        <el-container height="100%">
          <el-header height="40px">
            <el-row>
              <el-col :span="15" >
                <h2>热门帖子<hr/></h2>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-row>
              <el-col :span="15" >
                <div v-for="(item,i) in info.hotPosts" :key="item">
                  <topic-intro :info="info.hotPosts[i]"></topic-intro>
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
  import topicIntro from '../groupcomponents/topicIntro.vue'
  import peopleComment from "../components/peopleComment.vue"

  export default {
        name: "topicDetail",
        components: {
          'topic-intro': topicIntro,
          'people-comment': peopleComment,
        },
        data() {
          return {
            info: {},
          }
        },
        mounted(){
          var id=this.$route.params.title;
          this.$axios.get('/showPost',{
            params:{
              postId: id
            }
          })
          .then(successResponse => {
            this.$set(this.info,"topic",this.topicDataProcess(successResponse.data));
            //alert(this.info.group.name)
          })

          this.$axios.get('showPostIndex',{
            params:{
              num: 10,
            }
          })
          .then(successResponse => {
            this.$set(this.info,"hotPosts",this.topicListProcess(successResponse.data));
          })
        }
    }
</script>

<style scoped>
   #topicDetail {
    width: 100%;
    top: 60px;
    position: absolute;
    left: 0;
    min-width: 1200px;
  }
  #space{
    width: 100%;
    height: 60px;
  }
  h2{
    font-size: 20px;
    margin:0;
  }
  .side {
    text-align: left;
  }
  .main {
    text-align: left;
  }
   .paper {
     margin-top: 20px;
     height: 50px;
     width: 50px;
     overflow: hidden;
     position: relative;
   }
  .text {
    text-align: left;
    margin-top: 15px;
    line-height: 50px;
    margin-bottom: 20px;
  }
  .time {
    color: forestgreen;
  }
  .article {
    background: #FAE9DA;
    text-align: left;
    font-size: 15px;
    white-space: pre-line;
    line-height: 30px;
    padding: 5px 5% 5px;
  }
</style>
