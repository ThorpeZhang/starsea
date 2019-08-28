<template>
    <div class="info-card">
        <div class="item-logo-info">
            <div class="item-logo">
                <img :src="info.imgsrc"/>
                <!--<img :src="info.imgsrc"/>-->
                <!--<el-image :src="info.imgsrc"/>-->
            </div>
            <div class="item-name">
                <h1>{{info.title}}</h1>
            </div>
            <div class="item-info">
                <div class="item-mark">
                    <span>评分：</span><br/>
                    <page-showstar :value=info.mark></page-showstar>
                </div>    
                <div class="item-text">
                    <p v-for="item in info.items" :key="item">
                        {{item.name}}: {{item.value}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pageShowStar from "./pageShowStar.vue"
export default {
    name: 'infoCard',
    components:{
        'page-showstar': pageShowStar,
    },
    props: {
        info: Object,
    }
}
</script>

<style scoped>
div{
    margin: 0;
    padding: 0;
}
p{
    margin: 2px;
    line-height: 27px;
}
.info-card{
    height: 300px;
    width: 650px;
}
.item-name{
    float: right;
    width:68%;
    height: 18%;
    text-align: left;
}
.item-name h1{
    display: inline;
    font-size: 40px;

    -webkit-line-clamp: 1;
    display: -webkit-box inline;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow: ellipsis;
}
.item-title h1{
    text-align: left;
    font-size: 40px;
    display: inline;
}
.item-logo-info{
    /*background-color: green;*/
    width: 100%;
    height: 100%;
    float: right;
    margin:0px;
}
.item-logo{
    text-align: left;
    overflow: hidden;
    width: 30%;
    height: 100%;
    float: left;
    padding: 0px;
}
.item-logo img{
    height: 100%;
    width:auto;
    float:left;
}
.item-info{
    text-align: left;
    width: 68%;
    height: 80%;
    float: right;
}
.item-text{
    line-height: 80%;
    width:100%;
    height: 80%;
    float:right;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-mark {
    font-size: 100%;
    color: orange;
    float:right;
    height: 17%;
    width: 100%;
    float:left;
}
</style>