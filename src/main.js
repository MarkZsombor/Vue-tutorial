import Vue from 'vue';
import App from './App.vue';
import CreateItem from './components/CreateItem.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

const routes = [
  {
    name: 'CreateItem',
    path: '/', 
    component: CreateItem
  }
];

const router = new VueRouter({ 
  mode: 'history', 
  routes: routes 
});

Vue.prototype.item = {};

new Vue(Vue.util.extend({
  router
}, App)).$mount('#app');

