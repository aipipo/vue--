import Vue from 'vue'
import VueRouter from 'vue-router'
/*import FirstEntry from '../pages/FirstEntry/FirstEntry'
import HomePages from '../pages/HomePages/HomePages'
import ClassifyPages from '../pages/ClassifyPages/ClassifyPages'
import SharePages from '../pages/SharePages/SharePages'
import ShoppingPages from '../pages/ShoppingPages/ShoppingPages'
import PersonalPages from '../pages/PersonalPages/PersonalPages'*/
const HomePages = () => import('../pages/HomePages/HomePages')
const FirstEntry = () => import('../pages/FirstEntry/FirstEntry')
const ClassifyPages= () => import('../pages/ClassifyPages/ClassifyPages')
const SharePages = () => import('../pages/SharePages/SharePages')
const ShoppingPages = () => import('../pages/ShoppingPages/ShoppingPages')
const PersonalPages = () => import('../pages/PersonalPages/PersonalPages')

const LoginMethods = () => import('../pages/PersonalPages/LoginMethods/LoginMethods')
const EmailLogin = () => import('../pages/PersonalPages/EmailLogin/EmailLogin')
const PhoneLogin = () => import('../pages/PersonalPages/PhoneLogin/PhoneLogin')
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
      children: [
        {
          path: '/personal/login',
          component: LoginMethods
        },
        {
          path: '/personal/email',
          component: EmailLogin
        },
        {
          path: '/personal/phone',
          component: PhoneLogin
        },
        {
          path: '',
          redirect: '/personal/login'
        }

      ]
    },
    {
      path: '/',
      redirect: '/first'
    }
  ]
})
