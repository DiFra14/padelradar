import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.VUE_APP_PROXY}/${process.env.VUE_APP_MAP_ENDPOINT}`,
});

export default {
  getAddressFromCoords(lat, long) {
    return http.get(`geocode/json?latlng=${lat},${long}&key=${process.env.VUE_APP_KEY}`);
  },
  getInitMap() {
    return http.get(`js?key=${process.env.VUE_APP_KEY}&callback=initMap&libraries=&v=weekly"`);
  },
};
