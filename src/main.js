import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';

const routes = [
  {
    name: 'CreateItem',
    path: '/create/item', 
    component: CreateItem
  },
  {
    name: 'DisplayItem',
    path: '/',
    component: DisplayItem
  }
];

const router = new VueRouter({ 
  mode: 'history', 
  routes: routes 
});

Vue.prototype.item = {};
Vue.prototype.addItem = () => {}

new Vue(Vue.util.extend({
  router
}, App)).$mount('#app');

