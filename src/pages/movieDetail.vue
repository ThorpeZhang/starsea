<template>
    <div id="movieDetail">
    <el-container>
        <page-detail :info="info"></page-detail>
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
import pageDetail from '@/components/pageDetail.vue'
export default {
  name: 'MovieDetail',
  components: {
    'page-header': pageHeader,
    'page-search': pageSearch,
    'page-card': pageCard,
    'page-star': pageStar,
    'page-showstar': pageShowStar,
    'page-playcard': pagePlayCard,
    'page-detail': pageDetail
  },
  data() {
    return {
      info: {},
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
                
                this.$set(this.info,"title",successResponse.data.name);
                this.$set(this.info,"mark",successResponse.data.score);
                this.$set(this.info,"imgsrc",successResponse.data.imgAddr)
                var _items=[
                    {name: '导演', value:successResponse.data.director},
                    {name: '主演', value:successResponse.data.stars},
                    {name: '类型', value:successResponse.data.types},
                    {name: '制片国家/地区', value:successResponse.data.region},
                    {name: '语言', value:successResponse.data.language},
                    {name: '上映日期', value:successResponse.data.releaseYear},
                  ];
                  this.$set(this.info,"items",_items);
                
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