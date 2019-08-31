<template>
  <div class="page-card">
    <div class="logo">
      <a :href="'#/'+item.type+'Detail/'+item.title">
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
  name: 'logoCard',
  components: {
      'page-showstar': pageShowStar
  },
  props:{
    item: Object,
    type: String
  }

}
</script>

<style scoped>
div{
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  font-family: 'pf';
}
.page-card{
  margin: 0 0 25px 0;
  height: 210px;
  width: 120px;
  transition: 0.6s;
}
.page-card:hover{
  transform: scale(1.1);
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