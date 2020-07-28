<template>
  <div>
    <p class="titolo">Qui la lista dei tuoi campi preferiti!</p>
    <Padel v-for="padel in padel.padelsFavorite" :key="padel.place_id" :padel="padel"/>
  </div>
</template>

<script>
import Padel from '@/components/Padel.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Padel,
  },
  computed: {
    ...mapState(['padel']),
  },
};
</script>

<style>

</style>
