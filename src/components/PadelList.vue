<template>
  <div>
    <Modal v-show="isModalOpen" @close="closeModal">
      <template #modal-title>
        Scegli un'altra località
      </template>
      <template #modal-content>
        <input class="modal-input"
          v-model="cercaIndirizzo"
          type="text"
          placeholder="Inserisci un'inderizzo">
        <button class="btn btn-secondary" @click="cambiaPosizione">Salva</button>
      </template>
    </Modal>
    <div class="location">
      <p class="location__text">Padel nei pressi di
        <span class="important-text">
          {{ address }}
        </span>
      </p>
      <span class="location__icon" @click="showModal">
        <fontawesome :icon="['fas', 'plus']" size="2x" />
      </span>
    </div>
    <div v-if="padel.loader">
      <p>CARICAMENTO...</p>
    </div>
    <template v-else>
      <Padel v-for="padel in padel.padels.results" :key="padel.place_id" :padel="padel"/>
    </template>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-eval */

import Padel from '@/components/Padel.vue';
import Modal from '@/components/Modal.vue';
import getLocation from '@/utils/geo';
import LocationService from '@/services/LocationService';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      position: '',
      address: '',
      isModalOpen: false,
      cercaIndirizzo: '',
    };
  },
  components: {
    Padel,
    Modal,
  },
  async created() {
    const { latitude, longitude } = await getLocation();
    this.position = `${latitude},${longitude}`;
    this.getPadelsByLocation(this.position);
    const address = await LocationService.getAddressFromCoords(latitude, longitude);
    this.address = address.data.results[0].formatted_address;
  },
  computed: {
    ...mapState(['padel']),
  },
  methods: {
    nextPage(nextPage) {
      console.log('go to:', nextPage);
    },
    ...mapActions({ getPadelsByLocation: 'padel/getPadelsByLocation' }),
    showModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async cambiaPosizione() {
      this.address = this.cercaIndirizzo;
      const { data } = await LocationService.getInitMap();
      // best solution??
      eval(data);
      new google.maps.Geocoder().geocode({ address: this.cercaIndirizzo }, (result) => {
        const latitude = result[0].geometry.location.lat();
        const longitude = result[0].geometry.location.lng();
        this.position = `${latitude},${longitude}`;
        this.getPadelsByLocation(this.position);
      });
      this.cercaIndirizzo = '';
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.location {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--dark-color);

  &__icon {
    color: var(--dark-color);
  }

  &__text {
    font-size: 1.6rem;
    color: var(--dark-color);
    padding: 1rem 0;
  }
}
</style>
