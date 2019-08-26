import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '../pages/PageIndex.vue'
import pageMovie from '../pages/PageMovie.vue'
import pageBook from '../pages/PageBook.vue'
import pageGroup from '../pages/PageGroup.vue'

import movieIndex from '../pages/movieIndex.vue'
import movieDetail from '../pages/movieDetail.vue'
import pageLogin from '../pages/PageLogin.vue'
import pageRegister from '../pages/PageRegister.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: pageIndex
    },
    {
      path: '/movie',
      name: 'movie',
      meta: {
        requireAuth: true,
      },
      component: pageMovie,
    },
    {
      path: '/movieDetail',
      component: movieDetail
    },
    {
      path: '/book',
      name: 'book',
      component: pageBook
    },
    {
      path: '/group',
      name: 'group',
      component: pageGroup
    },
    {
      path: '/login',
      name: 'login',
      component: pageLogin
    },
    {
      path: '/register',
      name: 'register',
      component: pageRegister
    }
  ]
})
