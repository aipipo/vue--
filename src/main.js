import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/1.8da5d1f.jpg'
import './mock/mockServer'
import 'swiper/dist/css/swiper.min.css'
import ShareHeader from './components/Share/ShareHeader/ShareHeader'
import DivLine from './components/DivLine/DivLine'
Vue.component('DivLine', DivLine)
Vue.component('ShareHeader', ShareHeader)
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
