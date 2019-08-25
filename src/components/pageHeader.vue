<template>
	<div id="header-bar">
		<el-menu :default-active="activeIndex"
		 class="el-menu-demo"
		  mode="horizontal"
		   @select="handleSelect"
		   active-text-color="#4CAF50"
		   background-color="#545c64"
  			text-color="#fff"
		   >
			<el-menu-item index="1"><a href="#/">星海</a></el-menu-item>
			<el-menu-item index="2"><a href="#/movie">影视</a></el-menu-item>
			<el-menu-item index="3"><a href="#/book">图书</a></el-menu-item>
			<el-menu-item index="4"><a href="#/group">小组</a></el-menu-item>
			
            <a href="#/login"><el-button round>登录</el-button></a>
            <a href='#/register'><el-button round>注册</el-button></a>
			
			
			<a><el-button icon="el-icon-search" circle></el-button></a>
		</el-menu>
	</div>
</template>

<script>
import pageSearch from './pageSearch.vue'
export default {
	name: 'pageHeader',
	data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
	components: {
		'page-search': pageSearch
	}
}
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.11.0/lib/theme-chalk/index.css");
a .el-button{
	float:right;
	align-self: center;
	position:relative;
	top:10px;
}
#header-bar {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
a {
    text-decoration: none;
	font-size: 100%;
}
</style>