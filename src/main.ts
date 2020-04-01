import Vue from 'vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ProductList from './components/ProductList.vue'
import Home from './views/Home.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
