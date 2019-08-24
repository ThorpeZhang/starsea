<template>
	<div id="header-bar">
		<el-row>
			<el-col :span="24">
				<ul>
			<li v-for="(item, index) in items" v-bind:key="item">
				<a v-bind:class="{ active: item.isActive }"
					v-bind:href="['#/'+item.name]"
					v-on:click="navClickEvent(items,index)">
					{{item.text}}
				</a>
			</li>
		</ul>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import pageSearch from './pageSearch.vue'
export default {
	name: 'pageHeader',
	data:function() {
		return {
			items:[
				{
					text: '星海',
					isActive: true,
					name: ''
				},
				{
					text: '影视',
					isActive: false,
					name: 'movie'
				},
				{
					text: '图书',
					isActive: false,
					name: 'book'
				},
				{
					text: '小组',
					isActive: false,
					name: 'group'
				}
			]
		}
	},
	methods: {
		navClickEvent: function(items,index){
			items.forEach(function(el){
				el.isActive=false;
			});
			items[index].isActive=true;
			this.$emit('navClickEvent',items,index);
		}
	},
	components: {
		'page-search': pageSearch
	}
}
</script>
<style scoped>
#header-bar {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
ul {
	list-style-type: none;
    margin: 0;
    padding: 0;
	overflow: hidden;
	border: 1px solid #E9EEF3;
	background-color: #E9EEF3;
	/*
    border: 1px solid #e7e7e7;
	background-color: #f3f3f3;
	*/
	
}
li {
	float: left;
}
li a {
    display: block;
    color: #666;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #ddd;
}

li a.active {
    color: white;
    background-color: #4CAF50;
}
</style>