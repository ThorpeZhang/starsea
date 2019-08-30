// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import store from './store.js'
import dataProcess from './dataProcess/index'

var axios = require('axios')
axios.defaults.baseURL = 'http://114.115.131.124:8666/api'
//axios.defaults.baseURL='http://localhost:8666/api'

Vue.prototype.$axios = axios
Vue.prototype.movieDataProcess = dataProcess.movieDataProcess
Vue.prototype.movieDataListProcess = dataProcess.movieDataListProcess
Vue.prototype.bookDataProcess = dataProcess.bookDataProcess
Vue.prototype.bookDataListProcess = dataProcess.bookDataListProcess
Vue.prototype.evaluationProcess = dataProcess.evaluationProcess
Vue.prototype.evaluationListProcess = dataProcess.evaluationListProcess


Vue.use(VueAxios)

Vue.use(ElementUI)

Vue.use(dataProcess)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (window.sessionStorage.getItem('flag') === 'true') {
      //alert('auth为true')
      next();
      store.commit('login', window.sessionStorage.getItem('username'));

    }
    else {
      if (to.name === 'login') {
        return next();
      }
      return next({
        path: '/login'
      })
    }
  }
  else {
    if (window.sessionStorage.getItem('flag') === 'true') {
      store.commit('login', window.sessionStorage.getItem('username'));
    }
    return next();
  }
})


//注册封装全局函数
//登录
Vue.prototype.login = function (obj) {
  this.$axios
    .post('/login', {
      username: obj.form.username,
      password: obj.form.password
    })
    .then(successResponse => {
      //this.responseResult = JSON.stringify(successResponse.data)
      if (successResponse.data.code === 200) {
        this.$notify({
          title: '登录成功',
          message: '欢迎您 ,' + obj.form.username + '！',
          type: 'success'
        })
        this.$store.commit('login', obj.form.username)
        this.$router.replace({ path: '/' });
      }
      else {
        this.$notify({
          title: '登录失败',
          message: successResponse.data.message,
          type: 'error'
        })
      }
    })
    .catch(failResponse => { })
}

//注册
Vue.prototype.register = function (obj) {
  this.$axios
    .post('/register', {
      username: obj.form.username,
      password: obj.form.password
    })
    .then(successResponse => {
      //this.responseResult = JSON.stringify(successResponse.data)
      if (successResponse.data.code === 200) {
        this.$notify({
          title: '注册成功',
          message: '欢迎您 ,' + obj.form.username + '！',
          type: 'success'
        })
        this.$store.commit('login', obj.form.username)
        this.$router.replace({ path: '/' })
      }
      else {
        this.$notify({
          title: '注册失败',
          message: successResponse.data.message,
          type: 'error'
        })
      }
    })
    .catch(failResponse => { })
}

//查询登录状态
Vue.prototype.isLogin = function () {
  if (window.sessionStorage.getItem('flag')) {
    this.$store.commit('login', window.sessionStorage.getItem('username'));
  }
  return this.$store.state.flag;
}

//查询用户名
Vue.prototype.getUsername = function () {
  return this.$store.state.username;
}

//添加电影电视图书评论
Vue.prototype.addEvaluation = function (type, id, mark, content) {
  //alert(id)
  var username = "";
  if (this.isLogin()) {
    username = this.getUsername();
  } else {
    this.$notify({
      title: "评论失败",
      message: "你需要先登录才能继续评论",
      type: "error"
    });
    return;
  }
  if (type === "book") {
    this.$axios
      .post("/addBookEvaluation", {
        username: username,
        isbn: id,
        score: mark,
        evaluation: content,
      })
      .then(successResponse => {
        if (successResponse.data === "SUCCESS") {
          this.$notify({
            title: "评论成功",
            message: "刷新页面就可以看到您的评论啦！",
            type: "success"
          });
        }
        else {
          this.$notify({
            title: "评论失败",
            message: successResponse.data,
            type: "error"
          });
        }
      })
      .catch(failResponse => {
        this.$notify({
          title: "评论失败",
          message: "连接似乎有些问题...",
          type: "error"
        });
      });
  }
  else if (type === 'movie' || type === 'TV') {
    //alert("评论影视")
    this.$axios
      .post("/addMovieEvaluation", {
        username: username,
        id: id,
        score: mark,
        evaluation: content
      })
      .then(successResponse => {
        if (successResponse.data === "SUCCESS") {
          this.$notify({
            title: "评论成功",
            message: "刷新页面就可以看到您的评论啦！",
            type: "success"
          });
        }
        else {
          this.$notify({
            title: "评论失败",
            message: successResponse.data,
            type: "error"
          });
        }
      })
      .catch(failResponse => {
        this.$notify({
          title: "评论失败",
          message: "连接似乎有些问题...",
          type: "error"
        });
      });
  }
}

//转换项目id
Vue.prototype.getId=function(items){
  var str= '';
  var len=items.length;
  for(i=0 ;i<len ;i++){
    str+=parseInt(items[i],16)
  }
  return str
}