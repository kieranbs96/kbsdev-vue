import Vue from 'vue';
import App from './App';
import router from './router';

import './assets/scss/style.scss';

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
