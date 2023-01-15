import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import 'vue-select/dist/vue-select.css';
import 'bootstrap'
import "./assets/js/fontawesome"
import money from 'v-money'

Vue.use(money, {precision:4})
Vue.config.productionTip = false

import vSelect from 'vue-select'
import Sidebar from '../src/components/Sidebar.vue'
import {Money} from 'v-money'
Vue.component('sidebar', Sidebar)
Vue.component('v-select', vSelect)
Vue.component('money', Money)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
