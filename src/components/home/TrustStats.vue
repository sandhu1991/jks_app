<script setup>
import { ref, onMounted } from 'vue'
import { trustStats } from '@/config/site.js'
import { useCountUp } from '@/composables/useCountUp.js'

const sectionRef = ref(null)
const counters = trustStats.map((stat) => {
  if (stat.text) {
    return { label: stat.label, display: ref(stat.text), observe: () => {} }
  }
  const { display, observe } = useCountUp(stat.countTo, {
    decimals: stat.decimals ?? 0,
    suffix: stat.suffix ?? '',
  })
  return { label: stat.label, display, observe }
})

onMounted(() => {
  if (!sectionRef.value) return
  counters.forEach((c) => c.observe(sectionRef.value))
})
</script>

<template>
  <section ref="sectionRef" class="jks-trust" aria-label="Practice highlights">
    <div class="jks-container jks-trust__grid">
      <div v-for="stat in counters" :key="stat.label" class="jks-trust__item">
        <span class="jks-trust__value">{{ stat.display }}</span>
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
  font-variant-numeric: tabular-nums;
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
