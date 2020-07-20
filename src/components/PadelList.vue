<template>
  <div>
    <div class="location">
      <p class="location__text">Padel nei pressi di
        <span class="important-text">
          {{ address }}
        </span>
      </p>
      <span class="location__icon">
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
import Padel from '@/components/Padel.vue';
import getLocation from '@/utils/geo';
import LocationService from '@/services/LocationService';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      position: '',
      address: '',
    };
  },
  components: {
    Padel,
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
