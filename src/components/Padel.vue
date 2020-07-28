<template>
  <div class="padel">
    <div class="padel__info">
      <div class="padel__info__content">
        <h1 class="padel__info__title">
          {{ padel.name }}
        </h1>
        <span class="opening" :class="[ padel.opening_hours ? 'opening__open' : 'opening__close' ]">
          {{ padel.opening_hours ? 'Aperto' : 'Chiuso' }}
        </span>
      </div>
      <p class="padel__info__indirizzo">{{ padel.formatted_address }}</p>
    </div>
    <div class="padel__details">
      <div>
        <p class="padel_details__voto">
          <fontawesome :icon="['fas', 'star']" />
          {{ padel.rating }}
        </p>
      </div>
      <div>
        <router-link
          v-if="disabled()"
          class="btn btn-primary"
          :to="{ name: 'dettaglio', params: { id: padel.place_id } }"
        >
          Dettagli
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    padel: Object,
  },
  methods: {
    disabled() {
      return this.padel.opening_hours;
    },
  },
};
</script>

<style lang="scss" scoped>
.padel {
  padding: 5rem 2.5rem;
  box-shadow: .5rem .3rem 1.2rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 2rem;
  transition: all .4s;

  &__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    margin-bottom: 1rem;

    &__content {
      display: flex;
      align-items: center;
    }

    &__title {
      color: var(--dark-color);
      font-size: 2.5rem;
      margin-right: 1rem;
    }

    &__indirizzo {
      font-size:  1.2rem;
      color: var(--dark-color);
    }
  }

  &:hover {
    box-shadow: 1em .3rem 1.2rem rgba(0, 0, 0, 0.3);
  }
}

.opening {
  font-size: 1rem;
  color: white;
  padding: .5rem;
  border-radius: 5px;

  &__open {
    background: var(--green-color);
  }

  &__close {
    background: var(--red-color);
  }
}
</style>
