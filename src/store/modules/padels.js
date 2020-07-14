/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import PadelServices from '@/services/PadelService';

export const state = {
  padels: [],
  loader: false,
  padel: Object,
};

export const mutations = {
  SET_PADELS(state, padels) {
    state.padels = padels;
  },
  SET_LOADER(state, loader) {
    state.loader = loader;
  },
  SET_PADEL(state, padel) {
    state.padel = padel;
  },
};

export const actions = {
  getPadelsByLocation({ commit }, location) {
    commit('SET_LOADER', true);
    PadelServices.getPadelByLocations(location)
      .then((res) => {
        commit('SET_PADELS', res.data);
        commit('SET_LOADER', false);
      })
      .catch((error) => {
        console.log(`Errore nel recupero dei campi: ${error}`);
      });
  },
  getPadelDetailsById({ commit }, placeId) {
    return PadelServices.getPadelDetails(placeId)
      .then((res) => {
        commit('SET_PADEL', res.data.result);
        return res.data.result;
      })
      .catch((error) => {
        console.log(`Errore nel recupero dei dettagli del campo: ${error}`);
      });
  },
};
