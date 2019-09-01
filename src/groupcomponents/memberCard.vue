<template>
  <div id="memberCard">
    <div class="head">
      <el-avatar
        :size=65
        src="http://114.115.131.124:8666/image/avatar/buaa.jpg"
        shape="square"
      ></el-avatar>
    </div>
    <div class="name">
      <el-link type="primary" :href="'#/pageUser/'+info">{{info}}</el-link>
    </div>
  </div>
</template>

<script>
  export default {
      name: "memberCard",
      data() {
        return {
          signal: ''
        }
      },
      props: {
        info: String,
      },
      mounted(){
        this.$axios.get('/showSignature',{
          params:{
            username: info
          }
        })
        .then(successResponse=>{
          this.signal=successResponse.data;
        })
      }
  }
</script>

<style scoped>
  #memberCard {
    text-align: center;
  }
  .name {
    margin-bottom: 10px;
  }
</style>
