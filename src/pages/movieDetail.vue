<template>
    <div id="movieDetail">
    <el-container>
        <page-detail :info="info.data" :eva="info.evaluation" type="movie"></page-detail>
    </el-container>
    </div>
</template>

<script>
import pageCard from '@/components/pageCard.vue'
import pageDetail from '@/components/pageDetail.vue'
export default {
  name: 'MovieDetail',
  components: {
    'page-card': pageCard,
    'page-detail': pageDetail
  },
  data() {
    return {
      info: {},
    }
  },
  computed: {
    title:function(){
      return this.$route.params.title
    }
  },
  watch:{
    title(){
      this.$axios
            .get('/showMovie', {
                params: {
                  name:this.title
                    //name: "寄生虫"
                }
            })
            .then(successResponse => {
                this.$set(this.info,"data",this.movieDataProcess(successResponse))
            })
            .catch(failResponse => {
            });

      this.$axios
            .get('/showMovieEvaluation', {
                params: {
                  name:this.title,
                  flag:2
                  //1是点赞数排序；2是评论日期排序
                }
            })
            .then(successResponse => {
                this.$set(this.info,"evaluation",this.evaluationListProcess(successResponse))          
            })
            .catch(failResponse => {
            })
      
    }

  },
  mounted() {
    var title=this.$route.params.title
    this.$axios
            .get('/showMovie', {
                params: {
                  name:title
                    //name: "寄生虫"
                }
            })
            .then(successResponse => {
                this.$set(this.info,"data",this.movieDataProcess(successResponse))
            })
            .catch(failResponse => {
            });

    this.$axios
            .get('/showMovieEvaluation', {
                params: {
                  name:title,
                  flag:2
                  //1是点赞数排序；2是评论日期排序
                }
            })
            .then(successResponse => {
                this.$set(this.info,"evaluation",this.evaluationListProcess(successResponse))          
            })
            .catch(failResponse => {
            })
  },
}
</script>

<style scoped>
#movieDetail {
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