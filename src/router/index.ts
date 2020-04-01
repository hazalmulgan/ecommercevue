import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BasketItem from '@/components/BasketItem.vue'
import ProductList from '@/components/ProductList.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/Basket',
    name: 'Basket',
    component: BasketItem
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
