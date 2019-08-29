<template>
<div id="grouppostItem">
<el-row>
<el-col :span="16">
<div class="grid-content bg-light zhaiyao">
<a :href="postZhaiyao">{{zhaiyao}}</a>
</div>
</el-col>
<el-col :span="3">
<div class="grid-content bg-light zuozhe">
<a :href="postAuthor">{{author}}</a>
</div>
</el-col>
<el-col :span="3">
<div class="grid-content bg-light shijian">08-28 08:52</div>
</el-col>
</el-row>
<hr />
</div>
</template>

<style>
.el-row {
margin-bottom: 10px;
}
.el-col {
border-radius: 4px;
}

.bg-light {
background: #ffffff;
}
.grid-content {
border-radius: 4px;
min-height: 24px;
}
.row-bg {
padding: 10px 0;
background-color: #ffffff;
}
.zhaiyao {
color: #000;
text-align: left;
display: inline-block;
white-space: nowrap;
width: 100%;
overflow: hidden;
text-overflow: ellipsis;
}

.zuozhe {
text-align: center; 
text-overflow: ellipsis;
}
</style>

<script>
export default {
el: "#grouppostItem",
data: function() {
return {
zhaiyao:
"隐居地：走进三都古村落群，遭遇山民的热情,隐居地：走进三都古村落群，遭遇山民的热情,热情热情",
author: "作者",
postZhaiyao: "#/tieziDetail",
postAuthor:"https://www.douban.com/people/goodbyetoromanc/"
};
}
};
</script>