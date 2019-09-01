<template>
<div id="groupDetail">
    <el-container>
        <el-aside width="15%"></el-aside>
        <el-main>
            <group-name></group-name>
            <group-intro></group-intro>
            <group-post></group-post>
        </el-main>
        <el-aside width="15%">
            
        </el-aside>
    </el-container>

</div>
    
</template>


<style>
#groupDetail {
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}
</style>

<script>
import pageCard from "../components/pageCard.vue";
import pageGroupItem from "../components/pageGroupItem.vue";
import groupname from "../groupcomponents/groupName.vue";
import grouppost from "../groupcomponents/groupPost.vue";
import groupintro from "../groupcomponents/groupIntro.vue";

export default{
    el:"#groupDetail",
    data: function(){
        return {

        }
    },
    components:{
        'group-name':groupname,
        'group-post':grouppost,
        'group-intro':groupintro,
    }

}
</script>