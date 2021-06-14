import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import('../views/Register.vue'),
  },
  {
    path: '/verify',
    name: 'verify',
    component: () =>
      import('../views/Verify.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () =>
      import('../views/Products.vue'),
  },
  {
    path: '/new',
    name: 'new',
    component: () =>
      import('../views/NewProduct.vue'),
    beforeEnter(to: any, from: any, next: any) {
      if (store.state.idToken) {
        next();
      } else {
        next('/products');
      }
    },
  },
  {
    path: '/product/:id',
    name: 'show',
    component: () =>
      import('../views/Show.vue'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () =>
      import('../views/EditProduct.vue'),
    beforeEnter(to: any, from: any, next: any) {
      if (store.state.idToken) {
        next();
      } else {
        next('/products');
      }
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () =>
      import('../views/Cart.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () =>
      import('../views/CheckOut.vue'),
  },
  {
    path: '/successfulorder',
    name: 'successfulorder',
    component: () =>
      import('../views/Order.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
