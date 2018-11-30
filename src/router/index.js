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
  routes: [
    {
      path: '/first',
      component: FirstEntry
    },
    {
      path: '/home',
      component: HomePages
    },
    {
      path: '/classify',
      component: ClassifyPages
    },
    {
      path: '/share',
      component: SharePages
    },
    {
      path: '/shopping',
      component: ShoppingPages
    },
    {
      path: '/personal',
      component: PersonalPages
    },
    {
      path: '/',
      redirect: '/first'
    }
  ]
})
