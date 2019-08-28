<template>
    <div id="APP-index">
        <el-container>
        <el-main>
            <page-playcard :items="info.movies"></page-playcard>
        </el-main>
        
    </el-container>
    <el-container>
        <el-main><page-card :items="info.movies"></page-card></el-main>
    </el-container>
    <el-container>
        <el-main><page-card :items="info.books"></page-card></el-main>
    </el-container>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader.vue'
import pageSearch from '@/components/pageSearch.vue'
import pageCard from '@/components/pageCard.vue'
import pageStar from '@/components/pageStar.vue'
import pageShowStar from '@/components/pageShowStar.vue'
import pagePlayCard from '@/components/pagePlayCard.vue'
export default {
  name: 'PageIndex',
  data(){
    return {
      info:{},
    }
  },
  components: {
    'page-header': pageHeader,
    'page-search': pageSearch,
    'page-card': pageCard,
    'page-star': pageStar,
    'page-showstar': pageShowStar,
    'page-playcard': pagePlayCard
  },
  mounted() {
    this.$axios
            .get('/showMovieIndex', {
                params: {
                    num: '4',
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
                    num: '4',
                }
            })
            .then(successResponse => {
              this.$set(this.info,"books",this.bookDataListProcess(successResponse));
            })
            .catch(failResponse => {
            });
  },
}
</script>

<style scoped>
#APP-index {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
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