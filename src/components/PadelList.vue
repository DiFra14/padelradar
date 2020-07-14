<template>
  <div>
    <div class="location">
      <p class="location__text">Campi da Padel a <span class="important-text">Roma</span></p>
      <span class="location__icon">
        <fontawesome :icon="['fas', 'plus']" size="2x" />
      </span>
    </div>
    <div v-if="padel.loader">
      <p>CARICAMENTO...</p>
    </div>
    <template v-else>
      <Padel v-for="padel in padel.padels" :key="padel.place_id" :padel="padel"/>
    </template>
  </div>
</template>

<script>
import Padel from '@/components/Padel.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Padel,
  },
  created() {
    this.$store.dispatch('getPadelsByLocation', '41.909986,12.3959154');
  },
  computed: {
    ...mapState(['padel']),
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
