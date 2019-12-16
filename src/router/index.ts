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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Register.vue'),
  },
  {
    path: '/verify',
    name: 'verify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Verify.vue'),
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Products.vue'),
  },
  {
    path: '/new',
    name: 'new',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NewProduct.vue'),
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
      import(/* webpackChunkName: "about" */ '../views/Show.vue'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditProduct.vue'),
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
      import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/CheckOut.vue'),
  },
  {
    path: '/successfulorder',
    name: 'successfulorder',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Order.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
