<script setup>
import { RouterLink } from 'vue-router'
import { services, site } from '@/config/site.js'
</script>

<template>
  <section id="services" class="jks-section">
    <div class="jks-container">
      <div class="jks-services__header">
        <p class="jks-kicker">Practice areas</p>
        <h2 class="jks-heading">Immigration programs we handle</h2>
      </div>

      <div class="jks-services__grid">
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

      <div class="jks-services__cta jks-card">
        <p>
          Not sure which program applies?
          <strong>{{ site.bookCtaLabel }}</strong> and we will map out your next steps.
        </p>
        <RouterLink to="/book" class="jks-btn jks-btn--primary">{{ site.bookCtaLabel }}</RouterLink>
      </div>
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
  padding: 1.35rem 1.35rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.jks-services__icon {
  margin-bottom: 0.35rem;
}

.jks-services__title {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 600;
  color: var(--jks-ink);
}

.jks-services__desc {
  margin: 0;
  flex: 1;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--jks-muted);
}

.jks-services__more {
  margin-top: 0.35rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--jks-brand);
}

.jks-services__cta {
  margin-top: 1.75rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  background: var(--jks-surface);
  border-color: rgba(30, 58, 95, 0.12);
}

.jks-services__cta p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--jks-muted);
  max-width: 32rem;
}

@media (max-width: 800px) {
  .jks-services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
