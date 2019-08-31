<template>
	<div id="header-bar">
		<el-menu :default-active="this.$router.path"
		 class="el-menu-demo"
		 router
		  mode="horizontal"
		   @select="handleSelect"
		   active-text-color="#9e9e9e"
		   background-color="black"
  			text-color="white"
		   >
		   <!--
			<el-menu-item index="1"><a href="#/">星海</a></el-menu-item>
			<el-menu-item index="2"><a href="#/movie">影视</a></el-menu-item>
			<el-menu-item index="3"><a href="#/book">图书</a></el-menu-item>
			<el-menu-item index="4"><a href="#/group">小组</a></el-menu-item>
			-->

			<el-menu-item v-for="(item,i) in navList"
			id="pingfang"
				:key="i"
				:index="item.name">
				<!--<a v-bind:href="'#'+[item.name]">{{item.navItem}}</a>-->
				{{item.navItem}}
			</el-menu-item>
			
			<div v-if="isLogin">
				<el-link type="success" :href="'#/pageUser/'+$store.state.username">{{$store.state.username}}&nbsp;</el-link>
				<el-link type="info" @click="$store.commit('logout')">&nbsp;注销</el-link>
				<!--
				<a><el-button round @click="$store.commit('logout')">注销</el-button></a>
				<a><el-button round>{{$store.state.username}}</el-button></a>-->
			</div>
			<div v-else>
				<el-link href="#/login" type="success">登录&nbsp;</el-link>
				<el-link href='#/register' type="success">&nbsp;注册</el-link>
				<!--
            	<a href='#/register' ><el-button round>注册</el-button></a>
				<a href="#/login"><el-button round>登录</el-button></a>-->
			</div>

			
			
			<!--<a href='#/mainSearchPage'><el-button icon="el-icon-search" circle></el-button></a>-->
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
			{name: '/movieIndex' ,  navItem:'影视'},
			{name: '/bookIndex' ,  navItem:'图书'},
			{name: '/group' ,  navItem:'小组'},
			{name: '/mainSearchPage', navItem:'搜索'}
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
    },
	components: {
		'page-search': pageSearch
	},
	store
}
</script>
<style scoped>
/*
@import url("//unpkg.com/element-ui@2.11.0/lib/theme-chalk/index.css");
*/
@import "../common/font/font.css";
#pingfang{
	font-family: pf;
}
a .el-button{
	float:right;
	align-self: center;
	position:relative;
	
}
.el-link{
	position: relative;
	left: 510px;
}
.el-menu, .el-menu-item{
	height:45px;
	line-height: 45px;
	font-size: 16px;
	/*
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;*/
}
.el-menu-item:hover{
	background-color: black;
}
#header-bar {
	z-index: 5;
	margin: 0;
	border-style:none;
	/*
	position: absolute;
	*/
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	opacity: 0.7;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
a {
    text-decoration: none;
	font-size: 100%;
}
</style>