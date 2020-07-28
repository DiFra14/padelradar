<template>
  <div class="padel">
    <p class="titolo">{{ padel.name }}</p>
    <Map :lat="padel.geometry.location.lat" :lng="padel.geometry.location.lng" />
    <div class="padel__details">
      <div class="preferito">
        <p class="padel__details__address">
          <fontawesome :icon="['fas', 'map-pin']" />
          {{ padel.formatted_address }}
        </p>
        <p class="padel__details__pref"
          @click="addToFavorite(padel)"
          :class="[ isFavorited() ? 'fav' : 'no-fav' ]"
        >
          <fontawesome :icon="['fas', 'heart']" size="2x" />
        </p>
      </div>
      <div class="padel__details__info">
        <div>
          <p class="padel__details__info__phone">
            <fontawesome :icon="['fas', 'phone']" />
            {{ padel.formatted_phone_number }}
          </p>
          <a :href="padel.website" target="_blank" class="padel__details__info__web">
            {{ padel.website }}
          </a>
        </div>
        <p class="padel__details__info__voto">
          <fontawesome :icon="['fas', 'star']" />
          {{ padel.rating }}
        </p>
      </div>
      <div class="padel__details__week">
        <p>Orari di apertura:</p>
        <ul>
          <li v-for="period in padel.opening_hours.weekday_text" :key="period">
            {{ period }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

import Map from '@/components/Map.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Map,
  },
  props: {
    padel: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters({ getPadelFavoriteById: 'padel/getPadelFavoriteById' }),
  },
  methods: {
    ...mapActions({ setPadelsFavorite: 'padel/setPadelsFavorite' }),
    addToFavorite(padel) {
      if (this.isFavorited()) {
        console.log('già è favorito!');
      } else {
        const padelFavorite = {
          name: padel.name,
          opening_hours: padel.opening_hours,
          formatted_address: padel.formatted_address,
          rating: padel.rating,
          place_id: padel.place_id,
        };
        this.setPadelsFavorite(padelFavorite);
      }
    },
    isFavorited() {
      return this.getPadelFavoriteById(this.padel.place_id);
    },
  },
};
</script>

<style lang="scss" scoped>
.padel {
  display: flex;
  flex-direction: column;

  &__details {
    &__pref {
      cursor: pointer;
    }

    &__address {
      font-size: 1.6rem;
      color: var(--dark-color);
    }

    &__info {
      margin-top: 3.5rem;
      font-size: 1.2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__phone {
        font-weight: 700;
      }
    }

    &__week {
      margin: 3.5rem 0;
      font-size: 1.6rem;

      & > p {
        font-weight: 700;
      }

      & > ul  {
        margin-top: 1rem;

        & > li {
          list-style: circle;
          margin-left: 2rem;
        }
      }
    }
  }
}

.fav {
  color: var(--red-color);
}
.no-fav {
  color: var(--primary-color);
}

.preferito {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>
