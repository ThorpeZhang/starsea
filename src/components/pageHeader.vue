<template>
	<div id="header-bar">
		<el-menu :default-active="this.$router.path"
		 class="el-menu-demo"
		 router
		  mode="horizontal"
		   @select="handleSelect"
		   active-text-color="#4CAF50"
		   background-color="#545c64"
  			text-color="#fff"
		   >
		   <!--
			<el-menu-item index="1"><a href="#/">星海</a></el-menu-item>
			<el-menu-item index="2"><a href="#/movie">影视</a></el-menu-item>
			<el-menu-item index="3"><a href="#/book">图书</a></el-menu-item>
			<el-menu-item index="4"><a href="#/group">小组</a></el-menu-item>
			-->

			<el-menu-item v-for="(item,i) in navList"
				:key="i"
				:index="item.name">
				<!--<a v-bind:href="'#'+[item.name]">{{item.navItem}}</a>-->
				{{item.navItem}}
			</el-menu-item>

			
			<div v-if="isLogin">
				<a><el-button round @click="$store.commit('logout')">注销</el-button></a>
				<a><el-button round>{{$store.state.username}}</el-button></a>
			</div>
			<div v-else>
            	<a href='#/register' ><el-button round>注册</el-button></a>
				<a href="#/login"><el-button round>登录</el-button></a>
			</div>

			
			
			<a href='#/mainSearchPage'><el-button icon="el-icon-search" circle></el-button></a>
		</el-menu>
	</div>
</template>

<script>
import pageSearch from './pageSearch.vue'
import store from '@/store'


export default {
	name: 'pageHeader',
	data() {
      return {
        navList: [
			{name: '/' ,  navItem:'星海'},
			{name: '/movie' ,  navItem:'影视'},
			{name: '/book' ,  navItem:'图书'},
			{name: '/group' ,  navItem:'小组'}
		]
      };
	},
	computed:{
		isLogin:function() {
			if(window.sessionStorage.getItem('flag')==='true'){
      			this.$store.commit('login',window.sessionStorage.getItem('username'));
    		}
			return this.$store.state.flag == true;
			//return 2>1
		},
		username:function(){
            return this.$store.state.username;
		}
	},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
	  },
	  /*
	  search() {
      this.$prompt("搜索", {
        confirmButtonText: "搜索",
		cancelButtonText: "取消",

      })
        .then(({ value }) => {
		  //这个value就是输入的搜索内容
		  //message返回搜索到的内容
          this.$message({
            type: "success",
            message: "这是搜索返回的默认内容"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
      }*/
    },
	components: {
		'page-search': pageSearch
	},
	store
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