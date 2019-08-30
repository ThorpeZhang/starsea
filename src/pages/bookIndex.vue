<template>
    <div id="bookIndex">
      <el-container>
        <el-main>


          <el-container>
            <el-header height="40px">
              <el-row>
                <el-col :span="20" :offset="4">
                  <h1>好书速递</h1>
                  <hr/>
                </el-col>
              </el-row>
            </el-header>

            <el-main>
              <page-card :items="info.line1.slice(0,5)" type="book"></page-card>
              <page-card :items="info.line1.slice(5,10)" type="book"></page-card>
            </el-main>
          </el-container>

          <el-container>
            <el-header height="40px">
              <el-row>
                <el-col :span="20" :offset="4">
                  <h1>最受关注图书榜</h1>
                  <hr/>
                </el-col>
              </el-row>
            </el-header>

            <el-main>
              <page-card :items="info.line1.slice(0,5)" type="book"></page-card>
              <page-card :items="info.line1.slice(5,10)" type="book"></page-card>
              <page-card :items="info.line1.slice(2,7)" type="book"></page-card>
              <page-card :items="info.line1.slice(4,9)" type="book"></page-card>
              <!--<info-card :info="info.line1[0]"></info-card>
              <bigger-logo-card :info="info.line1[0]" type="book"></bigger-logo-card>-->
            </el-main>
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
              <el-row v-for="(book,o) in info.line1" :key="o">
                <el-col :span="24"><bigger-logo-card :item="book" type="book"></bigger-logo-card></el-col>
              </el-row>
            </el-main>
          </el-container>


        </el-aside>
      </el-container>
    </div>
</template>

<script>
import pageCard from '@/components/pageCard.vue'
import biggerLogoCard from '@/components/biggerLogoCard.vue'
import infoCard from "@/components/infoCard.vue"

export default {
  name: 'bookIndex',
  components: {
    'page-card': pageCard,
    'bigger-logo-card': biggerLogoCard,
    'info-card': infoCard,
  },
  data() {
    return {
      info:{}
    }
  },
  mounted() {
    //alert("图书主页")
    this.$axios
            .get('/showBookIndex', {
                params: {
                    num: '10',
                }
            })
            .then(successResponse => {
              this.$set(this.info,"line1",this.bookDataListProcess(successResponse));
            })
            .catch(failResponse => {
            });
  }
}
</script>

<style scoped>
#space{
  width: 100%;
  height: 60px;
  background-color: #E9EEF3;
}
#bookIndex {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
}
h1{
  font-size: 25px;
  margin: 0;
}
h2{
  font-size: 15px;
  margin:0;
  line-height: 20px;
}
.el-header, .el-footer {
    /*background-color: #B3C0D1;#E9EEF3;*/
    background-color: #E9EEF3;
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
    border-collapse:inherit;
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
