<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site.js'

const year = new Date().getFullYear()

const footerSub =
  'Vaudreuil-Dorion, QC · CICC Licensed RCIC · Virtual practice · Zoom & Google Meet'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/book', label: 'Book Now' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="footer-brand">
        <div class="footer-name">{{ site.legalName }}</div>
        <div class="footer-sub">{{ footerSub }}</div>
      </div>

      <nav class="footer-links" aria-label="Footer">
        <RouterLink
          v-for="link in footerLinks"
          :key="link.label"
          :to="link.to"
          class="footer-link"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="footer-copy">
        © {{ year }} {{ site.legalName }}. All Rights Reserved. · Vaudreuil-Dorion, QC, Canada ·
        jksimmigration.ca
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 2.75rem 1.5rem 1.75rem;
  background: #0f1f33;
  color: #e8edf3;
}

.site-footer__inner {
  max-width: var(--jks-max, 1120px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.85rem;
}

.footer-brand {
  width: 100%;
}

.footer-name {
  font-size: 0.92rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.4rem;
}

.footer-sub {
  font-size: 0.82rem;
  color: #c5d0dc;
  line-height: 1.5;
  max-width: 36rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0.65rem 1.25rem;
  margin: 0;
  width: 100%;
}

.footer-link {
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

.footer-link:hover,
.footer-link.router-link-exact-active {
  color: #f4c4c6;
}

.footer-copy {
  width: 100%;
  margin: 0.5rem 0 0;
  padding: 1rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  color: #9aabb8;
  line-height: 1.5;
  text-align: left;
}
</style>
