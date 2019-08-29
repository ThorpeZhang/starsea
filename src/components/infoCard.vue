<template>
  <el-row>
    <el-col :span="9">
      <div class="item-logo">
        <img :src="info.imgsrc"/>
      </div>
    </el-col>
    <el-col :span="15">
      <div class="right">
        <div class="item-name">
          <h1>{{info.title}}</h1>
        </div>
        <div class="item-info">
          <div class="item-mark">
            <span>评分：</span><br/>
            <page-showstar :value=info.mark></page-showstar>
          </div>
          <div class="item-text">
            <p v-for="item in info.items" :key="item">
              {{item.name}}: {{item.value}}
            </p>
          </div>
        </div>
      </div>

    </el-col>
  </el-row>
</template>

<script>
import pageShowStar from "./pageShowStar.vue"
export default {
    name: 'infoCard',
    components:{
        'page-showstar': pageShowStar,
    },
    props: {
        info: Object,
    }
}
</script>

<style scoped>
  .item-logo {
    text-align: left;
    padding-top: 20px;
  }
  .item-logo img{
    height: 300px;
  }
  .right {
    text-align: left;
  }
</style>
