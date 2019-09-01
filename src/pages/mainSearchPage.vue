<template>
  <!---->
  <div id="mainSearchPage">
    <el-container>
      <el-main>
        <el-row>
          <el-row>
            <el-col :span="22" class="search-box" push="2">
              <el-input placeholder="请输入关键词；或者空关键词直接搜索，以获取全部内容" v-model="mainSearchInput" class="input-with-select">
                <el-button @click="changeSearch(searchType)" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
          <el-col :span="2" push="2">
            <div class="sideBlock">
              <el-radio-group v-model="searchType" @change="changeSearch">
                <div>
                  <el-radio-button label="综合"></el-radio-button>
                </div>
                <div>
                  <el-radio-button label="电影"></el-radio-button>
                </div>
                <div>
                  <el-radio-button label="电视"></el-radio-button>
                </div>
                <div>
                  <el-radio-button label="图书"></el-radio-button>
                </div>
                <div>
                  <el-radio-button label="小组"></el-radio-button>
                </div>
                <div>
                  <el-radio-button label="贴子"></el-radio-button>
                </div>
              </el-radio-group>
              <!--
              <div>
                <el-button type="success" plain>全部</el-button>
              </div>
              <div>
                <el-button type="success" plain>电影</el-button>
              </div>
              <div>
                <el-button type="success" plain>书籍</el-button>
              </div>
              <div>
                <el-button type="success" plain>小组</el-button>
              </div>-->
            </div>
          </el-col>
          <el-col :span="18" push="2">
            <!--
            <div class="mainBlock">
              <group-topic></group-topic>
            </div>
            -->
            <div class="mainBlock" v-for="(result,o) in info.searchResults" :key="o">
              <group-detail v-if="result.type==='group'" :info="result"></group-detail>
              <topic-detail v-else-if="result.type==='topic'" :info="result"></topic-detail>
              <search-movie-detail v-else  :info="result"></search-movie-detail>
            </div>
          </el-col>
        </el-row>
      </el-main>

      <el-aside width="30%">
        <div id="space"></div>

        <el-container height="100%">
          <el-header height="40px">
            <el-row>
              <el-col :span="15">
                <h2>
                  搜索推荐
                  <hr />
                </h2>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-row v-for="(movie,o) in info.movies" :key="o">
              <el-col :span="24">
                <bigger-logo-card :item="movie" type="movie"></bigger-logo-card>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import searchMovieDetail from "../components/searchMovieDetail.vue";
import biggerLogoCard from "@/components/biggerLogoCard.vue";
import groupIntro from "@/groupcomponents/groupIntro.vue";
import topicIntro from "@/groupcomponents/topicIntro.vue";
import groupPost from "@/groupcomponents/groupPost.vue";
import searchGroupDetail from "@/groupcomponents/searchGroupDetail.vue"
import searchTopicDetail from "@/groupcomponents/searchTopicDetail.vue"

export default {
  name: "mainSearchPage",
  components: {
    "search-movie-detail": searchMovieDetail,
    "bigger-logo-card": biggerLogoCard,
    "group-intro": groupIntro,
    "topic-intro": topicIntro,
    "group-post": groupPost,
    "group-detail": searchGroupDetail,
    "topic-detail": searchTopicDetail,
  },
  data() {
    return {
      mainSearchInput: "",
      info: {},
      searchType: '电影'
    };
  },
  computed:{
    type: function(){
      return 'movie';
    }
  },
  mounted() {
    this.$axios
      .get("/showMovieIndex", {
        params: {
          num: "10"
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
  },
  methods: {
    searchBook: function(keyword){
      this.$axios
      .get("/searchBook", {
        params: {
          keyword: keyword
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "searchResults",
          this.bookDataListProcess(successResponse)
        );
      })
      .catch(failResponse => {});
    },
    searchMovie: function(keyword){
      this.$axios
      .get("/searchMovie", {
        params: {
          keyword: keyword
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "searchResults",
          this.movieDataListProcess(successResponse)
        );
      })
      .catch(failResponse => {});
    },
    searchPost: function(keyword){
      this.$axios
      .get("/searchPost", {
        params: {
          keyword: keyword
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "searchResults",
          this.topicListProcess(successResponse.data)
        );
      })
      .catch(failResponse => {});
    },
    searchTV: function(keyword){
      this.$axios
      .get("/searchTV", {
        params: {
          keyword: keyword
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "searchResults",
          this.movieDataListProcess(successResponse)
        );
      })
      .catch(failResponse => {});
    },
    searchAll: function(keyword){
      this.$axios
      .get("/searchAll", {
        params: {
          keyword: keyword
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "searchResults",
          this.allListProcess(successResponse.data)
        );

      })
      .catch(failResponse => {});
    },
    searchGroup: function(keyword){
      this.$axios
      .get("/searchGroup", {
        params: {
          keyword: keyword
        }
      })
      .then(successResponse => {
        this.$set(
          this.info,
          "searchResults",
          this.groupListProcess(successResponse.data)
        );

      })
      .catch(failResponse => {});
    },
    changeSearch: function(val) {
      if(val==='综合'){
        this.searchAll(this.mainSearchInput)
      }
      else if(val==='电影'){
        this.searchMovie(this.mainSearchInput)
      }
      else if(val==='电视'){
        this.searchTV(this.mainSearchInput)
      }
      else if(val==='图书'){
        this.searchBook(this.mainSearchInput)
      }
      else if(val==='小组'){
        this.searchGroup(this.mainSearchInput)
      }
      else if(val==='贴子'){
        this.searchPost(this.mainSearchInput)
      }
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 15px;
  margin: 0;
  line-height: 20px;
  text-align: left;
}
#space {
  width: 100%;
  height: 70px;
  background-color: white;
}
#mainSearchPage {
  min-width: 1300px;
}
.search-box {
  padding-left: 0;
  padding-right: 8%;
  margin-bottom: 40px;
}
.sideBlock {
  text-align: left;
}
.block {
  margin-top: 30px;
  margin-bottom: 50px;
}
.rightBlock {
  background: green;
}

.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.mainBlock{
  padding: 10px 0 70px 0;
}
</style>
