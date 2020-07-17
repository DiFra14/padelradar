import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faMapPin, faPhone, faHeart, faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'nprogress/nprogress.css';

library.add(faPlus, faMapPin, faPhone, faHeart, faStar);

Vue.component('fontawesome', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
