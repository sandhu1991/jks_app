<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site.js'
</script>

<template>
  <section class="jks-cta">
    <div class="jks-container jks-cta__inner">
      <div>
        <h2 class="jks-cta__title">Take the first step today</h2>
        <p class="jks-cta__text">{{ site.consultationNote }}</p>
      </div>
      <RouterLink to="/book" class="jks-btn jks-btn--primary jks-cta__btn">
        Book a Consultation
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.jks-cta {
  padding: 2.5rem 1.25rem;
  background: linear-gradient(120deg, #0f1f33 0%, #152a45 55%, #1a1a2e 100%);
  color: #fff;
}

.jks-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.jks-cta__title {
  margin: 0 0 0.35rem;
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  font-weight: 700;
  color: #fff;
}

.jks-cta__text {
  margin: 0;
  color: #e8edf3;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 28rem;
}

.jks-cta__btn {
  flex-shrink: 0;
  background: var(--jks-brand);
  border-color: var(--jks-brand);
}

.jks-cta__btn:hover {
  background: var(--jks-brand-dark);
  border-color: var(--jks-brand-dark);
}
</style>
