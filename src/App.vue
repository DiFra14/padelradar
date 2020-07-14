<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  created() {
  },
};
</script>

<style lang="scss">
:root {
  --dark-color: #444545;
  --primary-color: #0091AD;
  --green-color: #468966;
  --red-color: #8E2800;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
  font-family: 'Nunito', sans-serif;
}

#app {
  width: 35%;
  margin: 0px auto;
}

.titolo {
  font-size: 4rem;
  font-weight: 400;
  color: var(--dark-color);
  padding: 5rem 0;
}

.important-text {
  color: var(--primary-color);
  font-weight: 700;
}

.btn {
  padding: 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.btn-dettaglio {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  background: white;
}
</style>
