import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask  from 'vue-the-mask'
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import './assets/css/main.css'
import 'vue-select/dist/vue-select.css';
import 'bootstrap'
import "./assets/js/fontawesome"
import store from './store/store'
import money from 'v-money'

Vue.use(money, {precision:4})
Vue.use(VueTheMask)
Vue.use(VueToast)
Vue.config.productionTip = false

import vSelect from 'vue-select'
import Sidebar from '../src/components/Sidebar.vue'
import {Money} from 'v-money'
Vue.component('sidebar', Sidebar)
Vue.component('v-select', vSelect)
Vue.component('money', Money)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
