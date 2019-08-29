<template>
  <div id="tieziNeirong">
    <el-row>
      <el-col :span="4">
        <div class="author">
          来自:
          <a :href="authorlink">{{author}}</a>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="shijian">{{time}}</div>
      </el-col>
    </el-row>
    <el-row>
      <div class="neirong">{{message}}</div>
    </el-row>
  </div>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.author {
  text-align: left;
}

.shijian {
  text-align: left;
  color: rgb(98, 196, 95);
}

.neirong{
    text-align: justify;
}

a {
  text-decoration: none;
}
</style>

<script>
export default {
  el: "#tieziNeirong",
  data: function() {
    return {
      author: "周大侠",
      authorlink: "https://www.douban.com/people/124221774/",
      time: "2019-08-24",
      message:
        "我对卧室的功能要求非常明确且唯一，那就是睡觉与休息。所以，我家主卧室里，除了一张舒适的床以外，其他任何家具都没有。没有床头柜，没有梳妆台，没有抽屉柜，没有斗橱，没有桌椅，没有衣柜。"
    };
  }
};
</script>