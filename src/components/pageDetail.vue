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
            <h1>评价</h1>
            <write-comment></write-comment>
            <comment-box></comment-box>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="4">
          <div class="description">
            <h1>剧情简介</h1>
            <p>
              {{info.introduction}}
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="4">
          <div class="comment">
            <h1>影视评论</h1>
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
                <el-col :span="15" >
                  <h2>推荐<hr/></h2>
                  
                </el-col>
              </el-row>
            </el-header>
            <el-main>
              <el-row v-for="(movie,o) in sdata.movies" :key="o">
                <el-col :span="24"><bigger-logo-card :item="movie" type="movie"></bigger-logo-card></el-col>
              </el-row>
            </el-main>
          </el-container>


        </el-aside>





  </el-container>
</template>

<script>
import pageShowStar from "./pageShowStar.vue"
import writecomment from "./comment.vue"
import commentBox from "./commentBox"
import infoCard from "./infoCard.vue"
import peopleComment from "./peopleComment.vue"
import biggerLogoCard from '@/components/biggerLogoCard.vue'
export default {
  name: 'pageDetail',
  data() {
    return {
      currentDate: new Date(),
      sdata:{}
    };
  },
  components: {
      'page-showstar': pageShowStar,
      'write-comment': writecomment,
      'comment-box':commentBox,
      'info-card': infoCard,
      'people-comment': peopleComment,
    'bigger-logo-card': biggerLogoCard,
  },
  props:{
    info: Object,
    type: String,
    eva:Array,
  },
  mounted(){
    this.$axios
            .get('/showMovieIndex', {
                params: {
                    num: '10',
                }
            })
            .then(successResponse => {
              this.$set(this.sdata,"movies",this.movieDataListProcess(successResponse));
              //alert(this.sdata.items[0].title)
            })
            .catch(failResponse => {
            });
  }
}
</script>

<style scoped>
h2{
  font-size: 15px;
  margin:0;
  line-height: 20px;
  text-align: left;
}
#space{
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
  }
  
</style>
