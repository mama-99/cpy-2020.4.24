import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/js/flexible.min.js'
import './assets/css/style.css'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

import homeData from './data'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
