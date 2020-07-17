<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import LocationService from '@/services/LocationService';

export default {
  props: {
    lat: {
      required: true,
    },
    lng: {
      required: true,
    },
  },
  async mounted() {
    const { data } = await LocationService.getInitMap();
    // best solution??
    eval(data);
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.lat, lng: this.lng },
      zoom: 15,
    });
    const position = { lat: this.lat, lng: this.lng };
    const marker = new google.maps.Marker({ position, map });
  },
};
</script>

<style lang="scss" scoped>
#map {
  background: var(--primary-color);
  width: 100%;
  height: 350px;
  border-radius: 10px;
}
</style>
