// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import store from './store.js'

var axios = require('axios')
axios.defaults.baseURL='http://localhost:8080/api'

Vue.prototype.$axios=axios


Vue.use(VueAxios)

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})


router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requireAuth)){
    if(window.sessionStorage.getItem('flag')==='true'){
      //alert('auth为true')
      next();
      store.commit('login',window.sessionStorage.getItem('username'));
      
    }
    else{
      if(to.name==='login'){
        return next();
      }
      return next({
        path:'/login'
      })
    }
  }
  else{
    if(window.sessionStorage.getItem('flag')==='true'){
      store.commit('login',window.sessionStorage.getItem('username'));
    }
    return next();
  }
})

/*router.beforeEach((to,from,next) => {
  
  if(to.meta.requireAuth===true){
    if(window.sessionStorage.getItem('flag')==='true'){
      this.$store.commit('login',window.sessionStorage.getItem('username'));
      next();
    }
    else{
      if(to.name==='login'){
        next();
        return;
      }
      next({
        path:'/login'
      });
    }
  }
  else{
    alert('auth为false')
    next();
  }
})*/

