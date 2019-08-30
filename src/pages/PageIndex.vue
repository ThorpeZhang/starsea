<template>
    <div id="APP-index">
        <el-container>
        <el-main>
            <page-playcard :items="info.movies"></page-playcard>
        </el-main>   
    </el-container>
    
    <el-container>
      <el-main width="65%">
        <el-container>
          <el-header height="40px">
            <el-row>
              <el-col :span="20" :offset="4">
                <h1>热门电影</h1>
                <hr/>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <page-card :items="info.movies.slice(0,5)" type="movie"></page-card>
            <page-card :items="info.movies.slice(5,10)" type="movie"></page-card>
          </el-main>
        </el-container>


        <el-container>
          <el-header height="40px">
            <el-row>
              <el-col :span="20" :offset="4">
                <h1>热门好剧</h1>
                <hr/>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <page-card :items="info.TV.slice(0,5)" type="TV"></page-card>
            <page-card :items="info.TV.slice(5,10)" type="TV"></page-card>
          </el-main>


        <el-container>
          <el-header height="40px">
            <el-row>
              <el-col :span="20" :offset="4">
                <h1>热门图书</h1>
                <hr/>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <page-card :items="info.books.slice(0,5)" type="book"></page-card>
            <page-card :items="info.books.slice(5,10)" type="book"></page-card>
          </el-main>
        </el-container>
        
        </el-container>


      </el-main>



      <el-aside width="35%">
          <div id="space"></div>
          
          <el-container height="100%">
            <el-header height="40px">
              <el-row>
                <el-col :span="15" >
                  <h2>最受关注图书榜<hr/></h2>
                  
                </el-col>
              </el-row>
            </el-header>
            <el-main>
              <el-row v-for="(movie,o) in info.movies" :key="o">
                <el-col :span="24"><bigger-logo-card :item="movie" type="movie"></bigger-logo-card></el-col>
              </el-row>
            </el-main>
          </el-container>


        </el-aside>



    </el-container>
    </div>
</template>

<script>
import pageCard from '@/components/pageCard.vue'
import pagePlayCard from '@/components/pagePlayCard.vue'
import biggerLogoCard from '@/components/biggerLogoCard.vue'
export default {
  name: 'PageIndex',
  data(){
    return {
      info:{},
    }
  },
  components: {
    'page-card': pageCard,
    'page-playcard': pagePlayCard,
    'bigger-logo-card': biggerLogoCard,
  },
  mounted() {
    this.$axios
            .get('/showMovieIndex', {
                params: {
                    num: '10',
                }
            })
            .then(successResponse => {
              this.$set(this.info,"movies",this.movieDataListProcess(successResponse));
            })
            .catch(failResponse => {
            });
            
    this.$axios
            .get('/showBookIndex', {
                params: {
                    num: '11',
                }
            })
            .then(successResponse => {
              this.$set(this.info,"books",this.bookDataListProcess(successResponse));
            })
            .catch(failResponse => {
            });

    this.$axios
            .get('/showTVIndex', {
                params: {
                    num: '10',
                }
            })
            .then(successResponse => {
              this.$set(this.info,"TV",this.movieDataListProcess(successResponse));
            })
            .catch(failResponse => {
            });
  },
}
</script>

<style scoped>
h2{
  font-size: 15px;
  margin:0;
  line-height: 20px;
}
#space{
  width: 100%;
  height: 60px;
  background-color: #E9EEF3;
}
h1{
  font-size: 25px;
  margin: 0;
}
#APP-index {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    min-width: 1500px;
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