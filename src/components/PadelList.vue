<template>
  <div>
    <div class="location">
      <p class="location__text">Campi da Padel a
        <span class="important-text">
          {{ position }}
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
import { mapState } from 'vuex';

export default {
  data() {
    return {
      position: '',
    };
  },
  components: {
    Padel,
  },
  async created() {
    const { latitude, longitude } = await getLocation();
    this.position = `${latitude},${longitude}`;
    this.$store.dispatch('getPadelsByLocation', this.position);
  },
  computed: {
    ...mapState(['padel']),
  },
  methods: {
    nextPage(nextPage) {
      console.log('go to:', nextPage);
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
