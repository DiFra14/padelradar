<template>
  <div>
    <p class="titolo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <PadelList :position=position />
  </div>
</template>

<script>
import PadelList from '@/components/PadelList.vue';
import getLocation from '@/utils/geo';

export default {
  data() {
    return {
      position: '',
    };
  },
  components: {
    PadelList,
  },
  async mounted() {
    const { latitude, longitude } = await getLocation();
    this.position = `${latitude},${longitude}`;
  },
};
</script>
