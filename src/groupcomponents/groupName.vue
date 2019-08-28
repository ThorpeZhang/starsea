<template>
  <div id="groupName">
    <el-row :gutter="20">
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <img :src="imgsrc" height="50px" />
        </div>
      </el-col>

      <el-col :span="4">
        <div class="grid-content bg-purple">
          <h4><a :href="joingroup">{{groupname}}</a></h4>
        </div>
      </el-col>

      
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
.bg-purple-dark {
  background: #ffffff;
}
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<script>
export default {
  el: "#groupName",
  data: function() {
    return {
      imgsrc:
        "https://img1.doubanio.com/view/group/sqxs/public/babce0b3bdf3869.webp",
      groupname: "Photoshop",
      joingroup:"https://www.douban.com/"

    };
  }
};
</script>