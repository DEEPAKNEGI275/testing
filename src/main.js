import Vue from 'vue'
import App from './App.vue'
 
import './assets/formulate.css'
import VueFormulate from '@braid/vue-formulate'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import HellOw from './components/HellOw.vue'
import AppForm from './components/AppForm.vue'

import createRouter from 'vue-router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new createRouter({
  routes:[{path:'/', component:AppForm},
{path:'/hellow',component:HellOw}]
});
Vue.use(VueFormulate)
Vue.use(createRouter)
// //Vue.use(VueSwal)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)




Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
