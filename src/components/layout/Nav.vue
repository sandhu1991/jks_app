<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  /** White links on black nav bar (desktop header band). */
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <nav
    id="jks-main-nav"
    class="jks-nav"
    :class="{ 'jks-nav--dark': dark }"
    aria-label="Main"
  >
    <ul class="jks-nav__root">
      <li class="jks-nav__item">
        <RouterLink to="/" class="jks-nav__link">Home</RouterLink>
      </li>

      <li class="jks-nav__item">
        <RouterLink to="/services" class="jks-nav__link">Services</RouterLink>
      </li>

      <li class="jks-nav__item">
        <RouterLink to="/about" class="jks-nav__link">About</RouterLink>
      </li>

      <li class="jks-nav__item">
        <RouterLink to="/book" class="jks-nav__link">Book Now</RouterLink>
      </li>

      <li class="jks-nav__item">
        <RouterLink to="/contact" class="jks-nav__link">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.jks-nav {
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 0;
}

.jks-nav__root {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.1rem;
}

.jks-nav__item {
  position: relative;
}

.jks-nav__link {
  color: var(--jks-ink, #1c2836);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
}

.jks-nav__link:hover,
.jks-nav__link.router-link-exact-active {
  color: var(--jks-navy);
  background: rgba(30, 58, 95, 0.08);
}

/* Dark bar (desktop) — matches legacy black header nav */
.jks-nav--dark .jks-nav__link {
  color: rgba(255, 255, 255, 0.92);
}

.jks-nav--dark .jks-nav__link:hover,
.jks-nav--dark .jks-nav__link.router-link-exact-active {
  color: #ffb4b9;
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 900px) {
  .jks-nav--dark .jks-nav__link {
    color: rgba(255, 255, 255, 0.92);
  }

  .jks-nav--dark .jks-nav__link:hover,
  .jks-nav--dark .jks-nav__link.router-link-exact-active {
    color: #ffb4b9;
    background: rgba(255, 255, 255, 0.08);
  }

  .jks-nav {
    flex: 1;
    width: 100%;
    height: auto;
    overflow: visible;
  }

  .jks-nav__root {
    display: flex;
    position: static;
    width: 100%;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
    padding: 0;
    overflow-x: visible;
    background: transparent;
    box-shadow: none;
  }

  .jks-nav__root::-webkit-scrollbar {
    display: none;
  }

  .jks-nav__item {
    flex-shrink: 0;
  }

  .jks-nav__link {
    width: auto;
    justify-content: center;
    padding: 0.45rem 0.55rem;
    font-size: 0.82rem;
    white-space: nowrap;
  }
}
</style>
