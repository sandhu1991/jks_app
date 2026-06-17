<script setup>
import { RouterLink } from 'vue-router'
import { services } from '@/config/site.js'
import BookCtaBand from '@/components/common/BookCtaBand.vue'
</script>

<template>
  <section id="services" class="jks-section">
    <div class="jks-container">
      <div class="jks-services__header">
        <p class="jks-kicker">Practice areas</p>
        <h2 class="jks-heading">Immigration programs we handle</h2>
      </div>

      <div class="jks-services__grid jks-stagger">
        <RouterLink
          v-for="service in services"
          :key="service.to"
          :to="service.to"
          class="jks-card jks-card--link jks-services__card"
        >
          <span class="jks-icon-badge jks-services__icon" aria-hidden="true">
            <i class="fa-solid" :class="service.icon" />
          </span>
          <h3 class="jks-services__title">{{ service.title }}</h3>
          <p class="jks-services__desc">{{ service.description }}</p>
          <span class="jks-services__more">Learn more →</span>
        </RouterLink>
      </div>

      <BookCtaBand />
    </div>
  </section>
</template>

<style scoped>
.jks-services__header {
  margin-bottom: 2rem;
}

.jks-services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.15rem;
}

.jks-services__card {
  position: relative;
  overflow: hidden;
  padding: 1.35rem 1.35rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease,
    background 0.35s ease;
}

.jks-services__card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--jks-brand) 0%, var(--jks-navy) 100%);
  transform: scaleY(0);
  transform-origin: center top;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border-radius: var(--jks-radius) 0 0 var(--jks-radius);
}

.jks-services__card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 40%,
    rgba(255, 255, 255, 0.55) 50%,
    transparent 60%
  );
  transform: translateX(-120%);
  transition: transform 0.65s ease;
  pointer-events: none;
}

.jks-services__card:hover {
  transform: translateY(-8px) scale(1.015);
  border-color: rgba(185, 28, 28, 0.32);
  box-shadow:
    0 16px 40px rgba(30, 58, 95, 0.14),
    0 0 0 1px rgba(185, 28, 28, 0.08);
  background: linear-gradient(145deg, #fff 0%, #fff9f9 45%, #f6f8fb 100%);
}

.jks-services__card:hover::before {
  transform: scaleY(1);
}

.jks-services__card:hover::after {
  transform: translateX(120%);
}

.jks-services__icon {
  margin-bottom: 0.35rem;
  transition:
    transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
}

.jks-services__card:hover .jks-services__icon {
  background: var(--jks-brand);
  color: #fff;
  box-shadow: 0 6px 16px rgba(185, 28, 28, 0.28);
  animation: jks-service-icon-shuffle 0.55s ease;
}

.jks-services__title {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 600;
  color: var(--jks-ink);
  transition: color 0.25s ease;
}

.jks-services__card:hover .jks-services__title {
  color: var(--jks-navy);
}

.jks-services__desc {
  margin: 0;
  flex: 1;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--jks-muted);
  transition: color 0.25s ease;
}

.jks-services__card:hover .jks-services__desc {
  color: var(--jks-ink);
}

.jks-services__more {
  margin-top: 0.35rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--jks-brand);
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  transition:
    transform 0.3s ease,
    color 0.25s ease;
}

.jks-services__card:hover .jks-services__more {
  transform: translateX(5px);
  color: var(--jks-navy);
}

@keyframes jks-service-icon-shuffle {
  0% {
    transform: scale(1) rotate(0deg);
  }
  20% {
    transform: scale(1.12) rotate(-8deg) translateX(-2px);
  }
  45% {
    transform: scale(1.08) rotate(6deg) translateX(2px);
  }
  70% {
    transform: scale(1.1) rotate(-4deg);
  }
  100% {
    transform: scale(1.08) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .jks-services__card,
  .jks-services__card::before,
  .jks-services__card::after,
  .jks-services__icon,
  .jks-services__more {
    transition: none;
    animation: none;
  }

  .jks-services__card:hover {
    transform: none;
  }

  .jks-services__card:hover .jks-services__icon {
    animation: none;
    transform: none;
  }

  .jks-services__card:hover::after {
    transform: translateX(-120%);
  }
}

@media (max-width: 800px) {
  .jks-services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
