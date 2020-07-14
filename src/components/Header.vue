<template>
  <header class="top-header">
    <h1 class="top-header__title">Padel Radar</h1>
    <nav class="top-menu">
      <ul class="top-menu__ul">
        <li class="top-menu__ul__li">
          <router-link :to="{ name: 'home' }">lista</router-link>
        </li>
        <li class="top-menu__ul__li">
          <router-link :to="{ name: 'preferiti' }">preferiti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.top-header {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: 3.5rem;
    font-weight: 900;
    color: var(--primary-color);
  }
}

.top-menu {
  font-size: 2rem;
  font-weight: 300;

  &__ul {
    display: flex;

    &__li {
      list-style: none;

      &:not(:last-child) {
        margin-right: 4rem;
      }
    }
  }
}
</style>
