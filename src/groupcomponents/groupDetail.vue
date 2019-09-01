<template>
  <div id="groupDetail">
    <!--这个是小组模板-->
    <el-container>
      <el-main>
        <el-container>
          <el-header>
            <el-col span="20" offset="4">
              <div class="head">
                <el-col span="3">
                  <div class="paper">
                    <img :src="info.group.imgAddr" height="60px" />
                  </div>
                </el-col>
                <el-col span="19">
                  <h1>{{info.group.name}}</h1>
                </el-col>
                <el-col span="2" pull="2">
                  <div class="button">
                    <el-button v-if="info.beInGroup" type="primary" disabled>您已加入</el-button>
                    <el-button v-else @click="joinGroup" type="success">加入小组</el-button>
                  </div>
                </el-col>
              </div>
            </el-col>
          </el-header>
          <el-main>
            <el-row>
              <el-col span="20" offset="4">
                <div class="introduction">
                  创建于：{{info.group.createTime}}&nbsp;&nbsp;&nbsp;组长：{{info.group.leaderName}}
                  {{info.group.introduction}}
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="20" :offset="4">
                <div class="writeComment">
                  <el-button
                    v-if="isLogin() && !show"
                    type="success"
                    @click="show=!show"
                    autofocus="true"
                  >撰写贴子</el-button>
                  <el-button
                    type="danger"
                    v-else-if="isLogin() && show"
                    @click="show=!show"
                    autofocus="true"
                  >取消发表</el-button>
                  <el-button type="primary" v-else disabled>登录后发帖</el-button>
                  <el-collapse-transition>
                    <write-topic v-show="show" :groupId="$route.params.title"></write-topic>
                  </el-collapse-transition>
                </div>
              </el-col>
            </el-row>

              <el-row>
              <el-col span="20" offset="4">
                <div class="title">
                  <h1>置顶帖</h1>
                </div>
                <div>
                  <top-post :info="info.topPosts[0]"></top-post>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="20" offset="4">
                <div class="title">
                  <h1>最近帖子</h1>
                </div>
                <div v-for="(value,index) in info.postInGroup" :key="value">
                  <group-post :info="info.postInGroup[index]"></group-post>
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-main>

      <el-aside width="35%" class="side">
        <div id="space"></div>
        <el-container height="100%">
          <el-header height="40px">
            <el-row>
              <el-col :span="15">
                <h2>
                  热门帖子
                  <hr />
                </h2>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-row>
              <el-col :span="15">
                <div v-for="(item,i) in info.hotPosts" :key="item">
                  <topic-intro :info="info.hotPosts[i]"></topic-intro>
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>

        <div class="space"></div>
        <el-container height="100%">
          <el-header height="40px">
            <el-row>
              <el-col :span="15" >
                <h2>小组成员<hr/></h2>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-col :span="15">
              <!--
              <el-row>
                <el-col span="6" v-for="(value,index) in 4" :key="value">
                  <member-card :info="info.group.membersName[index]"></member-card>
                </el-col>
                <hr>
              </el-row>
              <el-row>
                <el-col span="6" v-for="(value,index) in 4" :key="value">
                  <member-card :info="info.group.membersName[index]"></member-card>
                </el-col>
                <hr>
              </el-row>-->
              <!--只有组长和管理员能点开这个链接-->
              <el-link type="primary" href="#/groupMemberPage">管理成员</el-link>
            </el-col>
          </el-main>
        </el-container>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import groupPost from "../groupcomponents/groupPost.vue";
import groupIntro from "../groupcomponents/groupIntro.vue";
import topicIntro from "../groupcomponents/topicIntro.vue";
import writetopic from "@/components/writeTopic.vue";
export default {
  name: "groupDetail",
  data() {
    return {
      info: {},
      show: false,
    };
  },
  components: {
    "group-post": groupPost,
    "group-intro": groupIntro,
    "topic-intro": topicIntro,
    "write-topic": writetopic
  },
  mounted() {
    //alert(this.isLogin())
    var id = this.$route.params.title;
    this.$axios
      .get("/showGroup", {
        params: {
          groupId: id
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "group",
          this.groupDataProcess(successResponse.data)
        );
        //alert(this.info.group.name)
      });

    this.$axios
      .get("/showPostInGroup", {
        params: {
          groupId: id,
          flag: 1,
          num: 10
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "postInGroup",
          this.topicListProcess(successResponse.data)
        );
        //alert(this.info.group.name)
      });

    this.$axios
      .get("/showPostIndex", {
        params: {
          num: 10
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "hotPosts",
          this.topicListProcess(successResponse.data)
        );
      });

      this.$axios
      .get("/showTopPostInGroup", {
        params: {
          groupId: id,
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "topPosts",
          this.topicListProcess(successResponse.data)
        );
      });

      
  },
  methods: {
    joinGroup: function() {
      var id = this.$route.params.title;
      var name = this.$store.username;
      this.$axios
        .post("/joinGroup", {
          groupId: id,
          username: name
        })
        .then(successResponse => {
          if (successResponse.data === "SUCCESS") {
            this.$notify({
              title: "加入小组成功",
              message: "刷新页面试试吧！",
              type: "success"
            });
          }
        });
    }
  },

  watch: {
    info() {
      var id = this.$route.params.title;
      var name = this.$store.username;
      this.beInGroup(id, name, this.info);
    }
  }
};
</script>

<style scoped>
.writeComment {
  margin: 50px 0;
  text-align: left;
}
#groupDetail {
  width: 100%;
  top: 60px;
  position: absolute;
  left: 0;
  min-width: 1200px;
}
#space {
  width: 100%;
  height: 60px;
}
h2 {
  font-size: 20px;
  margin: 0;
}
.head {
  text-align: left;
  line-height: 50px;
  font-size: 23px;
}
.paper {
  margin-top: 20px;
  height: 60px;
  width: 60px;
  overflow: hidden;
  position: relative;
}
.button {
  margin-top: 22px;
}
.introduction {
  background: #fae9da;
  margin-top: 30px;
  text-align: left;
  font-size: 14px;
  white-space: pre-line;
}
.title {
  font-size: 20px;
  text-align: left;
}
.side {
  text-align: left;
}
</style>
