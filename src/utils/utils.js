/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable no-unused-vars */

/*
  Plugin da aggiungere a Vuex. Questo viene interrogato ogni
  volta che avviene un qualsiasi mutamento,
  in questo caso di tipo: padel/SET_PADELS_FAVORITE
*/
export default function saveStateInStorage(state) {
  state.subscribe((mutation, state) => {
    if (mutation.type === 'padel/SET_PADELS_FAVORITE') {
      localStorage.setItem('favorites', JSON.stringify(state.padel.padelsFavorite));
    }
  });
}

export function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((success) => resolve(success.coords),
      () => {
        console.log('Errore nel ricevere una posizione GPS!');
      },
      { enableHighAccuracy: true });
  });
}
