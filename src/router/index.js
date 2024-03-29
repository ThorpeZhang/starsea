import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/pages/PageIndex.vue'
import pageGroup from '@/pages/PageGroup.vue'

import bookIndex from '@/pages/bookIndex.vue'
import bookDetail from '@/pages/bookDetail.vue'

import movieIndex from '@/pages/movieIndex.vue'
import movieDetail from '@/pages/movieDetail.vue'
import tvDetail from '@/pages/tvDetail.vue'


import pageLogin from '@/pages/PageLogin.vue'
import pageRegister from '@/pages/PageRegister.vue'

import groupDetail from "@/groupcomponents/groupDetail.vue"
import topicDetail from "@/groupcomponents/topicDetail.vue"
import pageUser from "@/pages/pageUser.vue"
import groupMemberPage from "@/pages/groupMemberPage.vue"

import mainSearchPage from "../pages/mainSearchPage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: pageIndex
    },
    {
      path: '/movieIndex',
      name: 'movieIndex',
      meta: {
        requireAuth: true,
      },
      component: movieIndex,
    },
    {
      path: '/movieDetail/:title',
      component: movieDetail
    },
    {
      path: '/TVDetail/:title',
      component: tvDetail
    },
    {
      path: '/bookIndex',
      name: 'bookIndex',
      component: bookIndex
    },
    {
      path: '/bookDetail/:title',
      component: bookDetail
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
    },
    {
      path: '/mainSearchPage',
      name: mainSearchPage,
      component: mainSearchPage
    },
    {
      path: '/groupDetail/:title',
      name: 'groupDetail',
      component: groupDetail
    },
    {
      path: '/topicDetail/:title',
      name: 'topicDetail',
      component: topicDetail
    },
    {
      path: '/pageUser/:id',
      name: 'pageUser',
      component: pageUser,
    },
    {
      path: '/groupMemberPage',
      name: 'groupMemberPage',
      component: groupMemberPage
    }
  ]
})
