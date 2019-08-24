<template>
    <el-row>
  <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 2">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <div class="text">天地灵气孕育出一颗能量巨大的混元珠，
            元始天尊将混元珠提炼成灵珠和魔丸，灵珠投胎为人，
            助周伐纣时可堪大用；而魔丸则会诞出魔王，为祸人间。
            元始天尊启动了天劫咒语，3年后天雷将会降临，摧毁魔丸。
            太乙受命将灵珠托生于陈塘关李靖家的儿子哪吒身上。
            然而阴差阳错，灵珠和魔丸竟然被掉包。
            本应是灵珠英雄的哪吒却成了混世大魔王。
            调皮捣蛋顽劣不堪的哪吒却徒有一颗做英雄的心。
            然而面对众人对魔丸的误解和即将来临的天雷的降临，
            哪吒是否命中注定会立地成魔？他将何去何从？</div>
        <div class="bottom clearfix">
            <div><page-showstar value=4.8></page-showstar></div>
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>
<style>
.text{
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow: ellipsis;
    line-height: 24px;
}
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
import pageShowStar from "./pageShowStar.vue"
export default {
  name: 'pageCard',
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