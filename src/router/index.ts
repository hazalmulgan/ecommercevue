import VueRouter from 'vue-router'
import BasketList from '@/components/BasketList.vue'
import ProductList from '@/components/ProductList.vue'
import ThankYou from '@/components/ThankYou.vue'
import OrderDetail from '@/components/OrderDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/Basket',
    name: 'Basket',
    component: BasketList
  },
  {
    path: '/order/success',
    name: 'ThankYou',
    component: ThankYou
  },
  {
    path: '/order-detail',
    name: 'OrderDetail',
    component: OrderDetail
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
