import Vue from 'vue'
import VueRouter from 'vue-router'

import FirstEntry from '../pages/FirstEntry/FirstEntry'
import HomePages from '../pages/HomePages/HomePages'
import ClassifyPages from '../pages/ClassifyPages/ClassifyPages'
import SharePages from '../pages/SharePages/SharePages'
import ShoppingPages from '../pages/ShoppingPages/ShoppingPages'
import PersonalPages from '../pages/PersonalPages/PersonalPages'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/first',
      component: FirstEntry
    },
    {
      path: '/home',
      component: HomePages,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: ClassifyPages,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/share',
      component: SharePages,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopping',
      component: ShoppingPages,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: PersonalPages,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/first'
    }
  ]
})
