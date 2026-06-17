<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site.js'
</script>

<template>
  <section class="jks-hero jks-hero--enter">
    <div class="jks-hero__bg" :style="{ backgroundImage: `url(${site.heroImage})` }" aria-hidden="true" />
    <div class="jks-hero__overlay" aria-hidden="true" />
    <div class="jks-container jks-hero__content">
      <p class="jks-hero__badge">
        <span class="jks-hero__badge-pill">CICC Licensed RCIC · {{ site.rcicLicense }}</span>
      </p>
      <h1 class="jks-hero__title">
        Clear guidance for<br />
        <span class="jks-hero__title-accent">your Canadian immigration goals</span>
      </h1>
      <p class="jks-hero__sub">
        Study, work, reunite with family, or settle permanently — JKS Immigration helps you
        understand the rules, prepare strong applications, and move forward with confidence.
      </p>
      <div class="jks-hero__actions">
        <RouterLink to="/book" class="jks-btn jks-btn--primary jks-hero__cta">Book a Consultation</RouterLink>
        <RouterLink to="/about" class="jks-btn jks-btn--outline jks-hero__cta-secondary">About Us</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jks-hero {
  position: relative;
  min-height: clamp(400px, 70vh, 540px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.jks-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center 30%;
}

.jks-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 20, 35, 0.94) 0%,
    rgba(15, 31, 51, 0.88) 45%,
    rgba(10, 20, 35, 0.94) 100%
  );
}

.jks-hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 44rem;
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 5rem) 1.25rem;
  color: #fff;
  text-align: center;
}

.jks-hero__badge {
  margin: 0 0 1.25rem;
  display: flex;
  justify-content: center;
}

.jks-hero__badge-pill {
  display: inline-block;
  padding: 0.45rem 0.9rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(15, 31, 51, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 999px;
  backdrop-filter: blur(8px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.jks-hero__title {
  margin: 0 0 1rem;
  font-size: clamp(1.9rem, 4.5vw, 3rem);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.45);
}

.jks-hero__title-accent {
  color: #ffd4d6;
}

.jks-hero__sub {
  margin: 0 auto 1.75rem;
  max-width: 36rem;
  font-size: 1.02rem;
  line-height: 1.65;
  color: #f2f6fa;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.4);
}

.jks-hero__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.jks-hero__cta {
  background: var(--jks-brand);
  border-color: var(--jks-brand);
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
}

.jks-hero__cta:hover {
  background: var(--jks-brand-dark);
  border-color: var(--jks-brand-dark);
}

.jks-hero__cta-secondary {
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.55);
}

.jks-hero__cta-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.75);
}

.jks-hero--enter .jks-hero__content {
  animation: jks-hero-enter 0.85s ease both;
}

@keyframes jks-hero-enter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .jks-hero--enter .jks-hero__content {
    animation: none;
  }
}
</style>
