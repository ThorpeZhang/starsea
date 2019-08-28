<template>
    <div id="movieIndex">
      <el-container>
        <el-main>


          <el-container>
            <el-header height="40px">
              <el-row>
                <el-col :span="20" :offset="4">
                  <h1>优秀电影速递</h1>
                  <hr/>
                </el-col>
              </el-row>
            </el-header>

            <el-main>
              <page-card :items="info.movie1" type="movie"></page-card>
              <page-card :items="info.movie1" type="movie"></page-card>
            </el-main>
          </el-container>

          <el-container>
            <el-header height="40px">
              <el-row>
                <el-col :span="20" :offset="4">
                  <h1>优秀电视剧速递</h1>
                  <hr/>
                </el-col>
              </el-row>
            </el-header>

            <el-main>
              <page-card :items="info.tv1" type="TV"></page-card>
              <page-card :items="info.tv1" type="TV"></page-card>
            </el-main>
          </el-container>

          
        </el-main>

        <el-aside width="35%"></el-aside>
      </el-container>
    </div>
</template>

<script>
import pageCard from '@/components/pageCard.vue'
import biggerLogoCard from '@/components/biggerLogoCard.vue'
import infoCard from "@/components/infoCard.vue"
export default {
  name: 'movieIndex',
  components: {
    'page-card': pageCard,
  },
  data() {
    return {
      info:{}
    }
  },
  mounted() {
    this.$axios
            .get('/showMovieIndex', {
                params: {
                    num: '5',
                }
            })
            .then(successResponse => {
              this.$set(this.info,"movie1",this.movieDataListProcess(successResponse));
            })
            .catch(failResponse => {
            });

    this.$axios
            .get('/showTVIndex', {
                params: {
                    num: '5',
                }
            })
            .then(successResponse => {
              this.$set(this.info,"tv1",this.movieDataListProcess(successResponse));
            })
            .catch(failResponse => {
            });
  }
}
</script>

<style scoped>
#movieIndex {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
}
h1{
  font-size: 25px;
  margin: 0;
}
.el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 30px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
