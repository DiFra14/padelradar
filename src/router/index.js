/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Nprogress from 'nprogress';
import store from '@/store/index';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/preferiti',
    name: 'preferiti',
    component: () => import('../views/Preferiti.vue'),
  },
  {
    path: '/dettaglio/:id',
    name: 'dettaglio',
    component: () => import('../views/Dettaglio.vue'),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('getPadelDetailsById', routeTo.params.id).then((padel) => {
        routeTo.params.padel = padel;
        next();
      });
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  Nprogress.start();
  next();
});

router.afterEach((routeTo, routeFrom, next) => {
  Nprogress.done();
});

export default router;
