/* eslint-disable no-unused-vars */

export default function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((success) => resolve(success.coords),
      () => {
        console.log('Errore nel ricevere una posizione GPS!');
      },
      { enableHighAccuracy: true });
  });
}