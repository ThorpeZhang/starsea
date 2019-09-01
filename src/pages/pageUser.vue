<template>
  <div id="pagePerson">
    <el-container>
      <el-main>
        <!--个人信息-->
        <el-row>
          <el-col span="20" offset="4">
            <div class="userInfo">
              <el-col span="10">
                <div class="paper">
                  <img src="http://114.115.131.124:8666/image/avatar/buaa.jpg" height="150px" />
                </div>
              </el-col>
              <el-col span="14">
                <div class="text">
                  <h1>
                    <span class="name">{{$store.state.username}}</span>
                  </h1>
                  <span class="time">{{info.signature}}</span>
                </div>
              </el-col>
            </div>
          </el-col>
        </el-row>
        <!--我的收藏（电影，图书，电视剧，帖子）-->

        <div class="collection">
          <el-row>
            <el-col span="20" offset="4">
              <h1>我的收藏</h1>
            </el-col>
          </el-row>

          <div class="movie">
            <page-card :items="info.movies" type="movie"></page-card>
          </div>
          <el-row>
            <el-col span="20" offset="4">
              <h2>图书</h2>
              <hr />
              <br />
            </el-col>
          </el-row>
          <div class="book">
            <page-card :items="info.books" type="book"></page-card>
          </div>
          <el-row>
            <el-col span="20" offset="4">
              <h2>帖子</h2>
              <hr />
              <br />
              <div v-for="(value,index) in info.posts" :key="value">
                <group-post :info="info.posts[index]"></group-post>
              </div>
            </el-col>
          </el-row>
        </div>

        <!--我发表的帖子-->

        <el-row>
          <el-col span="20" offset="4">
            <div class="article">
              <h1>我发表的帖子</h1>
              <div v-for="(value,index) in info.myposts" :key="value">
                <group-post :info="info.myposts[index]"></group-post>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>

      <el-aside width="35%">
        <!--加入的小组-->

        <div id="space"></div>
        <el-container height="100%">
          <el-header height="40px">
            <el-row>
              <el-col :span="15" offset="2">
                <h2>
                  <span class="joinGroup">加入的小组</span>
                  <hr />
                </h2>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-row>
              <el-col :span="15" offset="2">
                <div v-for="(item,i) in info.mygroups" :key="item">
                  <group-intro :info="info.mygroups[i]"></group-intro>
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
import groupPost from "../groupcomponents/groupPost.vue";
import pageCard from "../components/pageCard.vue";
import groupIntro from "../groupcomponents/groupIntro.vue";
import logoCard from "@/components/logoCard.vue";
export default {
  name: "pagePerson",
  data() {
    return {
      info: {}
    };
  },
  components: {
    "group-post": groupPost,
    "page-card": pageCard,
    "group-intro": groupIntro,
    "logo-card": logoCard
  },
  mounted() {
    var username = this.$store.state.username;

    //获取用户签名

    this.$axios
      .get("/showSignature", {
        params: {
          username: username
        }
      })
      .then(successResponse => {
        this.$set(this.info, "signature", successResponse.data);
      })
      .catch(failResponse => {});

    //获取收藏的电影
    this.$axios
      .get("/showCollectMovies", {
        params: {
          username: username
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "movies",
          this.movieDataListProcess(successResponse)
        );
      })
      .catch(failResponse => {});

    //收藏的书
    this.$axios
      .get("/showCollectBooks", {
        params: {
          username: username
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "books",
          this.bookDataListProcess(successResponse)
        );
      })
      .catch(failResponse => {});

    //我发的帖子
    this.$axios
      .get("/showMyPosts", {
        params: {
          username: username
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "myposts",
          this.topicListProcess(successResponse.data)
        );
      })
      .catch(failResponse => {});

    //我加入的小组
    this.$axios
      .get("/showMyGroups", {
        params: {
          username: username
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "mygroups",
          this.groupListProcess(successResponse.data)
        );
      })
      .catch(failResponse => {});

    //我收藏的帖子
    this.$axios
      .get("/showCollectPosts", {
        params: {
          username: username
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "posts",
          this.topicListProcess(successResponse.data)
        );
      })
      .catch(failResponse => {});
  }
};
</script>

<style scoped>
#pagePerson {
  width: 100%;
  top: 60px;
  position: absolute;
  left: 0;
  min-width: 1400px;
  text-align: left;
}
#space {
  width: 100%;
  height: 60px;
}
.userInfo {
  text-align: left;
  width: 500px;
  height: 200px;
  background: #fae9da;
  margin-top: 30px;
}
.paper {
  margin-top: 25px;
  margin-left: 20px;
  height: 150px;
  width: 150px;
  overflow: hidden;
  position: relative;
}
.name {
  color: #000;
}
.text {
  margin-top: 35px;
}
.time {
  color: darkgrey;
}
h1 {
  color: green;
}
h2 {
  font-size: 20px;
}
.movie {
  text-align: center;
  padding-top: 20px;
}
.book {
  text-align: center;
  padding-top: 20px;
}
.tvShow {
  text-align: center;
  padding-top: 20px;
}
.joinGroup {
  color: green;
}
.pageDivide {
  text-align: center;
  margin-left: 125px;
  margin-bottom: 50px;
}
.pageDivide1 {
  text-align: center;
}
.pageDivide2 {
  margin-left: 50px;
}
.article {
  margin-top: 60px;
}
</style>
