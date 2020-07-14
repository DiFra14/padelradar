import Vuex from 'vuex';
import Vue from 'vue';
import * as padel from '@/store/modules/padels';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    padel,
  },
});
