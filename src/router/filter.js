import router from "./router"

router.beforeEach((to,from,next) => {
    if(to.meta.requireAuth){
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
      next();
    }
  })