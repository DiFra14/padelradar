<template>
  <div>
    <p class="titolo">Dove andrai a giocare a Padel questa volta?</p>
    <PadelList />
  </div>
</template>

<script>
import PadelList from '@/components/PadelList.vue';

export default {
  components: {
    PadelList,
  },
};
</script>
