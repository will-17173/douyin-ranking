import Vue from 'vue';
import App from './App';
import store from './store';

const Bus = new Vue();

Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
Vue.prototype.$bus = Bus;

const app = new Vue(App);
app.$mount();
