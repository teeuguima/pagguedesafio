import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import 'bootstrap'
import "./assets/js/fontawesome"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
