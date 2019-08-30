<template>
  <div class="bigger-logo-card">
    <div class="top-header">
      <div class="logo">
        <a :href="'#/'+item.type+'Detail/'+item.title">
          <img :src="item.imgsrc" />
        </a>
      </div>

      <div class="text">
        <page-showstar :value="item.mark"></page-showstar>
        <h1>{{item.title}}</h1>
        <div class="intro">{{item.introduction}}</div>
      </div>
    </div>

    <div class="title">{{hotCmt.data.content}}</div>
  </div>
</template>

<script>
import pageShowStar from "./pageShowStar.vue";
export default {
  name: "biggerLogoCard",
  components: {
    "page-showstar": pageShowStar
  },
  data() {
    return {
      hotCmt: {}
    };
  },
  props: {
    item: Object
  },
  mounted() {
    if (this.item.type === "movie") {
      this.$axios
        .get('showOneMovieEvaluation', {
          params: {
            name: this.item.title
          }
        })
        .then(successResponse => {
          this.$set(
            this.hotCmt,
            "data",
            this.evaluationProcess(successResponse.data)
          );
        });
    }
    else if(this.item.type === "TV") {
      this.$axios
        .get('showOneTVEvaluation', {
          params: {
            name: this.item.title
          }
        })
        .then(successResponse => {
          this.$set(
            this.hotCmt,
            "data",
            this.evaluationProcess(successResponse.data)
          );
        });
    }
    else if(this.item.type === "book") {
      this.$axios
        .get('showOneBookEvaluation', {
          params: {
            name: this.item.title
          }
        })
        .then(successResponse => {
          this.$set(
            this.hotCmt,
            "data",
            this.evaluationProcess(successResponse.data)
          );
        });
    }
  }
};
</script>

<style scoped>
div {
  margin: 0;
  padding: 0;
}
p {
  margin: 2px;
  line-height: 27px;
}
.intro {
  width: 100%;
  line-height: 25px;
  margin: 0;
  position: relative;
  bottom: 15px;

  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bigger-logo-card {
  margin: 0 0 40px 0;
  padding: 0;
  height: 180px;
  width: 300px;
}
.top-header {
  width: 100%;
  height: 75%;
  float: left;
}
.logo {
  height: 100%;
  width: 40%;
  float: left;
}
.logo img {
  height: 100%;
  width: auto;
  overflow: hidden;
  float: left;
}
.text {
  height: 100%;
  width: 60%;
  float: right;
  text-align: left;
}
h1 {
  position: relative;
  bottom: 18px;
  width: 100%;
  text-align: left;
  line-height: 30px;
  margin: 20px 0 0 0;
}
.title {
  text-align: left;
  height: 25%;
  width: 100%;
  float: right;

  line-height: 25px;
  font-size: 13px;

  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>