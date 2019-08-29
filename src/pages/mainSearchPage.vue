<template>

  <!---->
  <div id="mainSearchPage">
    <el-container>
      <el-main>
        <el-row>
          <el-row>
            <el-col :span="22" class="search-box" push="2">
              <el-input placeholder="请输入内容" v-model="mainSearchInput" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
          <el-col :span="2" push="2">
            <div class="sideBlock">
              <div><el-button type="success" plain>全部</el-button></div>
              <div><el-button type="success" plain>电影</el-button></div>
              <div><el-button type="success" plain>书籍</el-button></div>
              <div><el-button type="success" plain>小组</el-button></div>
            </div>
          </el-col>
          <el-col :span="18" push="2">
            <div class="mainBlock" v-for="(value,index) in objects" :key="value">
              <search-movie-detail :info="objects[index]"></search-movie-detail>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <div class="block">
            <el-pagination
              background
              hide-on-single-page
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </el-row>
      </el-main>

      <el-aside width="30%">
          <div id="space"></div>
          
          <el-container height="100%">
            <el-header height="40px">
              <el-row>
                <el-col :span="15" >
                  <h2>搜索推荐<hr/></h2>
                  
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
    import searchMovieDetail from '../components/searchMovieDetail.vue'
    import biggerLogoCard from '@/components/biggerLogoCard.vue'
    export default {
        name: "mainSearchPage",
        components : {
          'search-movie-detail': searchMovieDetail,
    'bigger-logo-card': biggerLogoCard,
        },
        data() {
          return {
            mainSearchInput: '',
            info:{},
            objects: [
              {
                name: '寄生虫',
                introduction:
                  '《寄生虫》讲述了发生在身份地位悬殊的两个家庭身上的故事：\n' +
                  '宋康昊饰演的无业游民父亲基泽，\n' +
                  '让寄托了家人生计希望的大儿子（崔宇植 饰）前往IT公司老总朴社长（李善均 饰）家应聘课外教师\n' +
                  '随之发生了一连串意外事件。',
              },
              {
                name: '复仇者联盟',
                introduction:
                  '一声响指，宇宙间半数生命灰飞烟灭。' +
                  '几近绝望的复仇者们在惊奇队长（布丽·拉尔森 Brie Larson 饰）' +
                  '的帮助下找到灭霸（乔什·布洛林 Josh Brolin 饰）归隐之处，' +
                  '却得知六颗无限宝石均被销毁，希望彻底破灭。' +
                  '如是过了五年，迷失在量子领域的蚁人（保罗·路德 Paul Rudd 饰）意外回到现实世界，' +
                  '他的出现为幸存的复仇者们点燃了希望。' +
                  '与美国队长（克里斯·埃文斯 Chris Evans 饰）' +
                  '冰释前嫌的托尼（小罗伯特·唐尼 Robert Downey Jr. 饰）找到了穿越时空的方法，' +
                  '星散各地的超级英雄再度集结，他们分别穿越不同的时代去搜集无限宝石。' +
                  '而在这一过程中，平行宇宙的灭霸察觉了他们的计划。'
              },
              {
                name: '123',
                introduction: '445'
              },
              {
                name: '123',
                introduction: '445'
              },
              {
                name: '123',
                introduction: '445'
              },
              {
                name: '123',
                introduction: '445'
              },{
                name: '123',
                introduction: '445'
              },
              {
                name: '123',
                introduction: '445'
              },
              {
                name: '123',
                introduction: '445'
              },
              {
                name: '123',
                introduction: '445'
              },
              {
                name: '123',
                introduction: '445'
              },
              {
                name: '123',
                introduction: '445'
              },

            ]
          }
        },
        mounted(){
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
</style>
