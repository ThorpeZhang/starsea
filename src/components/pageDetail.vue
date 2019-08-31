<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="20" :offset="4">
          <div class="infoCard">
            <info-card :info="info"></info-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="4">
          <div class="writeComment">
            <el-button type="success" disabled v-if="info.isDone">您已评论</el-button>
            <el-button
              type="success"
              v-else-if="isLogin() && !show"
              @click="show=!show"
              autofocus="true"
            >撰写评论</el-button>
            <el-button
              type="danger"
              v-else-if="isLogin() && show"
              @click="show=!show"
              autofocus="true"
            >取消评论</el-button>
            <el-button type="primary" v-else disabled>登录后评论</el-button>
            <el-collapse-transition>
              <write-comment v-show="show" :type="type" :id="info.id"></write-comment>
            </el-collapse-transition>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="4">
          <div class="description">
            <h1 v-if="type==='movie'">剧情简介</h1>
            <h1 v-else>内容简介</h1>
            <p id="introbody">{{info.introduction}}</p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="4">
          <div class="comment">
            <h1 v-if="type==='movie'||type==='TV'">影视评论</h1>
            <h1 v-else>图书评论</h1>
            <div v-for="(value,index) in eva" :key="value">
              <people-comment :info="eva[index]"></people-comment>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>

    <!--侧边栏 推荐-->

    <el-aside width="35%">
      <div id="space"></div>

      <el-container height="100%">
        <el-header height="40px">
          <el-row>
            <el-col :span="15">
              <h2>
                推荐
                <hr />
              </h2>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-row v-for="(_item,o) in sdata.items" :key="o">
            <el-col :span="24">
              <bigger-logo-card :item="_item" :type="type"></bigger-logo-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-aside>
  </el-container>
</template>

<script>
import pageShowStar from "./pageShowStar.vue";
import writecomment from "./writeComment.vue";
import infoCard from "./infoCard.vue";
import peopleComment from "./peopleComment.vue";
import biggerLogoCard from "@/components/biggerLogoCard.vue";
export default {
  name: "pageDetail",
  data() {
    return {
      currentDate: new Date(),
      sdata: {},
      show: false,
    };
  },
  components: {
    "page-showstar": pageShowStar,
    "write-comment": writecomment,
    "info-card": infoCard,
    "people-comment": peopleComment,
    "bigger-logo-card": biggerLogoCard
  },
  props: {
    info: Object,
    type: String,
    eva: Array
  },
  watch: {
    info(){
      this.done(this.info);
    }
  },
  mounted:function() {
    if (this.type === "movie") {
      this.$axios
        .get("/showMovieIndex", {
          params: {
            num: "10"
          }
        })
        .then(successResponse => {
          this.$set(
            this.sdata,
            "items",
            this.movieDataListProcess(successResponse)
          );
        })
        .catch(failResponse => {});
    } else if (this.type === "book") {
      this.$axios
        .get("/showBookIndex", {
          params: {
            num: "10"
          }
        })
        .then(successResponse => {
          this.$set(
            this.sdata,
            "items",
            this.bookDataListProcess(successResponse)
          );
          //alert(this.sdata.items[0].title)
        })
        .catch(failResponse => {});
    } else if (this.type === "TV") {
      this.$axios
        .get("/showTVIndex", {
          params: {
            num: "10"
          }
        })
        .then(successResponse => {
          this.$set(
            this.sdata,
            "items",
            this.movieDataListProcess(successResponse)
          );
          //alert(this.sdata.items[0].title)
        })
        .catch(failResponse => {});
    }
  },
};
</script>

<style scoped>
#introbody {
  text-indent: 35px;
  line-height: 25px;
  font-family: "pingfang";
}
h2 {
  font-size: 15px;
  margin: 0;
  line-height: 20px;
  text-align: left;
}
#space {
  width: 100%;
  height: 60px;
  background-color: white;
}
.rightBlock {
  background: green;
}
.writeComment {
  text-align: left;
}
.description {
  text-align: left;
}
.comment {
  text-align: left;
  margin-top: 50px;
}

.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
