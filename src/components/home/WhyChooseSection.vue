<script setup>
import { whyChoose } from '@/config/site.js'
</script>

<template>
  <section class="jks-section jks-section--muted">
    <div class="jks-container">
      <p class="jks-kicker">The JKS difference</p>
      <h2 class="jks-heading">What you can expect from us</h2>
      <p class="jks-lead jks-why__intro">
        Immigration rules change often. We stay current so your file is prepared correctly the first
        time — with honest answers when a pathway is not the right fit.
      </p>

      <div class="jks-why__list">
        <article v-for="item in whyChoose" :key="item.title" class="jks-why__row">
          <span class="jks-icon-badge jks-icon-badge--navy" aria-hidden="true">
            <i class="fa-solid" :class="item.icon" />
          </span>
          <div>
            <h3 class="jks-why__title">{{ item.title }}</h3>
            <p class="jks-why__desc">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jks-why__intro {
  margin-bottom: 2rem;
}

.jks-why__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.jks-why__row {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  background: #fff;
  border-radius: var(--jks-radius);
  border: 1px solid var(--jks-border);
}

.jks-why__title {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--jks-navy);
}

.jks-why__desc {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--jks-muted);
}

@media (max-width: 700px) {
  .jks-why__list {
    grid-template-columns: 1fr;
  }
}
</style>
