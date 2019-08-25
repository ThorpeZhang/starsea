<template>
    <div id="APP-index">
        <el-container>
        <el-main>
            <page-playcard></page-playcard>
        </el-main>
        
    </el-container>
    <el-container>
        <el-main><page-card></page-card></el-main>
        <el-aside width="26%">
            <div><page-search></page-search></div>
        </el-aside>
    </el-container>
    </div>
</template>

<script>
import pageHeader from '../components/pageHeader.vue'
import pageSearch from '../components/pageSearch.vue'
import pageCard from '../components/pageCard.vue'
import pageStar from '../components/pageStar.vue'
import pageShowStar from '../components/pageShowStar.vue'
import pagePlayCard from '../components/pagePlayCard.vue'
export default {
  name: 'PageIndex',
  components: {
    'page-header': pageHeader,
    'page-search': pageSearch,
    'page-card': pageCard,
    'page-star': pageStar,
    'page-showstar': pageShowStar,
    'page-playcard': pagePlayCard
  }
}
</script>

<style scoped>
#APP-index {
    width: 100%;
    position: absolute;
    top: 50px;
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