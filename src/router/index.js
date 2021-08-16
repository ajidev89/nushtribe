import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resturants',
    name: 'Resturants',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resturants.vue')
  },
    {
    path: '/resturants/:vendorName',
    name: 'ResturantsPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResturantsPage.vue'),
    meta: { transition: 'slide-left' },
  },
   {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
  },
  {
    path: '/payment-information',
    name: 'PaymentSuccess',
    component: () => import(/* webpackChunkName: "about" */ '../views/PaymentSuccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
  },
})

router.beforeEach((to, from) => {
  if (to.name === "Resturants" || to.name === "ResturantsPage" ) {
    const Address = localStorage.getItem('Address') ? localStorage.getItem('Address') : '';
    console.log(to, from, Address);
    if (!Address) {
      router.push({ name: 'Home' });
    }
  }


})

export default router
