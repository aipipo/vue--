import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loding2.gif'
import './mock/mockServer'
import 'swiper/dist/css/swiper.min.css'
// 图片懒加载
Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
