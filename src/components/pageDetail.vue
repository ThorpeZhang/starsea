<template>
    <el-card shadow="hover">
        <el-row>
            <el-col :span="12">
                <el-container>
                    <el-main>
                        <img src="../assets/ci1.jpg" class="movielogo">
                        
                    </el-main>
                </el-container>
                <el-container>
                    <el-main>
                        <page-showstar value=3.0></page-showstar>
                        <span>电影名称</span>
                    </el-main>
                </el-container>
            </el-col>
            <el-col :span="10" :offst="2">
                <el-container>
                    <el-main>
                        <span>电影简介</span>
                    </el-main>
                </el-container>
            </el-col>
        </el-row>
    </el-card>
</template>

<style scoped>
.movielogo{
    width: 100%;
}
.bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

<script>
import pageShowStar from "./pageShowStar.vue"
export default {
  name: 'pageDetail',
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
      'page-showstar': pageShowStar
  }
}
</script>