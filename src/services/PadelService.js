import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.VUE_APP_PROXY}/${process.env.VUE_APP_PLACES_ENDPOINT}`,
});

export default {
  getPadelByLocations(location) {
    return http.get(`textsearch/json?query=padel&location=${location}&key=${process.env.VUE_APP_KEY}&radius=2000`);
  },
  getPadelDetails(placeId) {
    return http.get(`details/json?place_id=${placeId}&key=${process.env.VUE_APP_KEY}`);
  },
};
