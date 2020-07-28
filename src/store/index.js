import Vuex from 'vuex';
import Vue from 'vue';
import * as padel from '@/store/modules/padels';
import saveStateInStorage from '@/utils/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [saveStateInStorage],
  modules: {
    padel,
  },
});
