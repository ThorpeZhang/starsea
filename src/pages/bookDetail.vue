<template>
    <div id="bookDetail">
    <el-container>
        <page-detail :info="info.data" :eva="info.evaluation" type="book"></page-detail>
    </el-container>
    </div>
</template>

<script>
import pageCard from '@/components/pageCard.vue'
import pageDetail from '@/components/pageDetail.vue'
import biggerLogoCard from '@/components/biggerLogoCard.vue'
export default {
  name: 'bookDetail',
  components: {
    'page-card': pageCard,
    'page-detail': pageDetail,
  },
  data() {
    return {
      info: {},
    }
  },
  mounted() {
    var title=this.$route.params.title//书名
    this.$axios
            .get('/showBook', {
                params: {
                  name:title
                }
            })
            .then(successResponse => {
                this.$set(this.info,"data",this.bookDataProcess(successResponse))          
            })
            .catch(failResponse => {
            })

    this.$axios
            .get('/showBookEvaluation', {
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
#bookDetail {
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