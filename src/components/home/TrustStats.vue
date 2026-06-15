<script setup>
import { trustStats } from '@/config/site.js'
</script>

<template>
  <section class="jks-trust" aria-label="Practice highlights">
    <div class="jks-container jks-trust__grid">
      <div v-for="stat in trustStats" :key="stat.label" class="jks-trust__item">
        <span class="jks-trust__value">{{ stat.value }}</span>
        <span class="jks-trust__label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jks-trust {
  padding: 1.35rem 1.25rem;
  background: #e2e8f0;
  border-bottom: 3px solid var(--jks-brand);
}

.jks-trust__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;
}

.jks-trust__value {
  display: block;
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  font-weight: 700;
  color: #0f1f33;
  line-height: 1.2;
}

.jks-trust__label {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #3d4f63;
  text-transform: uppercase;
}

@media (max-width: 700px) {
  .jks-trust__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem 0.75rem;
  }
}
</style>
