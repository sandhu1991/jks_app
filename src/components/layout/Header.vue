<script setup>
import { RouterLink } from 'vue-router'
import Nav from '@/components/layout/Nav.vue'
import { site } from '@/config/site.js'
</script>

<template>
  <header class="jks-header">
    <div class="jks-header__top">
      <div class="jks-header__top-inner">
        <RouterLink to="/" class="jks-header__logo">
          <img :src="site.logo" width="144" height="56" alt="JKS Immigration" fetchpriority="high" />
        </RouterLink>

        <div class="jks-header__actions">
          <RouterLink to="/book" class="jks-btn jks-btn--primary jks-header__book">
            Book a Consultation
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="jks-header__nav-band">
      <div class="jks-header__nav-inner">
        <Nav :dark="true" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.jks-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
}

.jks-header__top {
  border-bottom: 1px solid var(--jks-border, #dde3ea);
  box-shadow: 0 1px 12px rgba(26, 26, 26, 0.04);
}

.jks-header__top-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.65rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.jks-header__logo {
  line-height: 0;
  text-decoration: none;
  flex-shrink: 0;
  align-self: flex-end;
  margin-bottom: -0.15rem;
}

.jks-header__logo img {
  display: block;
  height: 44px;
  width: auto;
  max-width: min(180px, 48vw);
  object-fit: contain;
}

.jks-header__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.jks-header__book {
  white-space: nowrap;
  padding: 0.7rem 1.35rem;
  font-size: 0.95rem;
}

/* Black nav bar */
.jks-header__nav-band {
  background: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.jks-header__nav-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.35rem 1.25rem 0.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .jks-header__nav-band {
    background: #1a1a1a;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    height: auto;
    min-height: 0;
    overflow: visible;
  }

  .jks-header__nav-inner {
    padding: 0.25rem 0.75rem 0.45rem;
    max-width: none;
    justify-content: center;
  }

  .jks-header__book {
    font-size: 0.82rem;
    padding: 0.55rem 0.85rem;
  }
}
</style>
