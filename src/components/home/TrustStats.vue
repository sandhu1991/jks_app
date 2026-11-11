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
  position: relative;
  padding: 1.35rem 1.25rem;
  background-color: rgba(221, 229, 239, 0.94);
  background-image:
    radial-gradient(rgba(30, 58, 95, 0.08) 0.8px, transparent 0.95px),
    linear-gradient(100deg, rgba(255, 255, 255, 0.42), rgba(203, 216, 231, 0.3));
  background-size: 6px 6px, 100% 100%;
  border-bottom: 3px solid var(--jks-brand);
  box-shadow: 0 -10px 22px rgba(3, 17, 35, 0.2);
  backdrop-filter: blur(8px);
}

.jks-trust::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--jks-navy), #5a718d 48%, var(--jks-brand));
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
  color: var(--jks-brand);
  line-height: 1.2;
  font-variant-numeric: tabular-nums;
  transition: color 0.2s ease, transform 0.2s ease;
  animation: jks-trust-value-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.jks-trust__label {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #3d4f63;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.jks-trust__item:nth-child(2) .jks-trust__value {
  animation-delay: 0.08s;
}

.jks-trust__item:nth-child(3) .jks-trust__value {
  animation-delay: 0.16s;
}

.jks-trust__item:nth-child(4) .jks-trust__value {
  animation-delay: 0.24s;
}

.jks-trust__item:hover .jks-trust__value {
  color: var(--jks-brand);
  transform: translateY(-2px);
}

.jks-trust__item:hover .jks-trust__label {
  color: var(--jks-navy);
}

@keyframes jks-trust-value-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .jks-trust__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem 0.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .jks-trust__value {
    animation: none;
    transition: none;
  }
}
</style>
