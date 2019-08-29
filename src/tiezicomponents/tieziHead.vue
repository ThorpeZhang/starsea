<template>
<div id="tieziHead">
    <p class="tieziName">{{tieziName}}</p>
</div>

</template>

<style>
.tieziName{
    font-size:32px;
    font-weight:700;
    text-align:left;
}
</style>

<script>
export default {
    el:"#tieziHead",
    data: function(){
        return {
            tieziName:"极简主义与生活烟火气之间的平衡",
        }
    }
}
</script>