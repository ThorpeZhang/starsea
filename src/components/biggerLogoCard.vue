<template>

    <div class="bigger-logo-card">
        <div class="logo">
            <a :href="'#/'+type+'Detail/'+item.title">
                <img :src="item.imgsrc"/>
            </a>
        </div>

        <div class="title">
            {{item.title}}
        </div>

        <div class="star">
            {{item.mark}}
        </div>
        
    </div>



</template>

<script>
import pageShowStar from "./pageShowStar.vue"
export default {
    name: 'biggerLogoCard',
    components:{
        'page-showstar': pageShowStar,
    },
    props: {
        item: Object,
        type: String,
    },
    mounted(){
        //alert(this.info.title)
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
.bigger-logo-card{
    height: 200px;
    width: 420px;
    background-color: red;
}
.logo{
  height: 80%;
  width: 100%;
  float: left;
}
.logo img{
  width: 100%;
  height: auto;
  overflow: hidden;
}
.title{
  height: 10%;
  width: 100%;

  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient:vertical;
  overflow:hidden;
  text-overflow: ellipsis;
  line-height: 24px;
}
.star{
  height: 10%;
  width: 100%;
  float: left;
  color: orange;
  line-height: 24px;
}
</style>