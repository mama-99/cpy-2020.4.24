import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/js/flexible.min.js'
import './assets/css/style.css'

import jsCookie from 'js-cookie'
Vue.prototype.$jsCookie = jsCookie

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

import homeData from './data'

import * as api from './api'
Vue.prototype.$api = api



import { Dialog } from 'vant';

// 全局注册
Vue.use(Dialog);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
