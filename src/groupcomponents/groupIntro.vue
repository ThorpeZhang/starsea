<template>
    <div id="groupIntro">
        <el-card class="box-card">
            {{groupIntro}}
        </el-card>
    </div>
</template>

<style>
.box-card{
    background: rgb(232, 235, 190);
}
</style>

<script>
export default{
    el:"#groupIntro",
    data: function(){
        return {
            groupIntro:"创建于2006-03-09     组长：上海胖子Anson",
        }
    }
}

</script>