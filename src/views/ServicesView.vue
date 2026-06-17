<script setup>
import { computed, watch, nextTick } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import TrustStats from '@/components/home/TrustStats.vue'
import PageHero from '@/components/layout/PageHero.vue'
import { serviceCategories } from '@/config/serviceCatalog.js'
import { site, servicesPage } from '@/config/site.js'

const route = useRoute()

const hero = computed(() => {
  const hub = route.meta.servicesHub
  if (hub && servicesPage.hubs[hub]) {
    return servicesPage.hubs[hub]
  }
  return {
    kicker: servicesPage.kicker,
    title: servicesPage.title,
    lead: servicesPage.lead,
  }
})

function scrollToSection() {
  const id = route.meta.servicesHub || (route.hash ? route.hash.slice(1) : null)
  if (!id || typeof document === 'undefined') return
  nextTick(() => {
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

watch(() => route.fullPath, scrollToSection, { immediate: true })

function topicSummary(intro) {
  if (!intro) return ''
  const sentence = intro.match(/^[^.!?]+[.!?]/)?.[0]
  return sentence && sentence.length <= 160 ? sentence : `${intro.slice(0, 140).trim()}…`
}
</script>

<template>
  <div class="jks-modern-page">
    <PageHero
      :kicker="hero.kicker"
      :title="hero.title"
      :lead="hero.lead"
    />

    <TrustStats />

    <nav class="jks-services-jump" aria-label="Service categories">
      <div class="jks-container jks-services-jump__inner">
        <RouterLink
          v-for="category in serviceCategories"
          :key="category.id"
          :to="{ path: '/services', hash: `#${category.id}` }"
          class="jks-services-jump__link"
        >
          <i class="fa-solid" :class="category.icon" aria-hidden="true" />
          {{ category.label }}
        </RouterLink>
      </div>
    </nav>

    <section
      v-for="(category, index) in serviceCategories"
      :id="category.id"
      :key="category.id"
      class="jks-section jks-services-category"
      :class="{ 'jks-section--muted': index % 2 === 0 }"
    >
      <div class="jks-container">
        <header class="jks-services-category__header">
          <span class="jks-icon-badge jks-icon-badge--navy jks-services-category__icon" aria-hidden="true">
            <i class="fa-solid" :class="category.icon" />
          </span>
          <div>
            <p class="jks-kicker">{{ category.kicker }}</p>
            <h2 class="jks-services-category__title">{{ category.label }}</h2>
            <p class="jks-services-category__summary">{{ category.summary }}</p>
          </div>
        </header>

        <div class="jks-services-category__grid">
          <RouterLink
            v-for="topic in category.topics"
            :key="topic.path"
            :to="topic.path"
            class="jks-card jks-card--link jks-services-topic"
          >
            <img
              v-if="topic.image"
              class="jks-services-topic__image"
              :src="topic.image"
              :alt="topic.imageAlt"
              loading="lazy"
            />
            <div class="jks-services-topic__body">
              <h3 class="jks-services-topic__title">{{ topic.title }}</h3>
              <p class="jks-services-topic__intro">{{ topicSummary(topic.intro) }}</p>
              <span class="jks-services-topic__more">Learn more →</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="jks-section jks-section--muted jks-services-cta">
      <div class="jks-container">
        <div class="jks-services-cta__inner jks-card">
          <div>
            <h2 class="jks-services-cta__title">Not sure which program applies?</h2>
            <p class="jks-services-cta__text">
              {{ site.hours }}<br />
              {{ site.virtualNote }}
            </p>
          </div>
          <RouterLink to="/book" class="jks-btn jks-btn--primary">{{ site.bookCtaLabel }}</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.jks-services-category {
  scroll-margin-top: 5.5rem;
}

.jks-services-jump {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid var(--jks-border);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1.25rem;
}

.jks-services-jump__inner {
  display: flex;
  gap: 0.65rem;
  overflow-x: auto;
  scrollbar-width: none;
}

.jks-services-jump__inner::-webkit-scrollbar {
  display: none;
}

.jks-services-jump__link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  flex-shrink: 0;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--jks-border);
  background: #fff;
  color: var(--jks-navy);
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.jks-services-jump__link:hover {
  background: var(--jks-brand-soft);
  border-color: rgba(185, 28, 28, 0.25);
  color: var(--jks-brand-dark);
}

.jks-services-category__header {
  display: flex;
  gap: 1.15rem;
  align-items: flex-start;
  margin-bottom: 1.75rem;
}

.jks-services-category__icon {
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.jks-services-category__title {
  margin: 0 0 0.35rem;
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: var(--jks-navy);
}

.jks-services-category__summary {
  margin: 0;
  max-width: 40rem;
  line-height: 1.6;
  color: var(--jks-muted);
}

.jks-services-category__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.15rem;
}

.jks-services-topic {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.jks-services-topic__image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.jks-services-topic__body {
  padding: 1.15rem 1.25rem 1.1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.35rem;
}

.jks-services-topic__title {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--jks-ink);
}

.jks-services-topic__intro {
  margin: 0;
  flex: 1;
  font-size: 0.86rem;
  line-height: 1.55;
  color: var(--jks-muted);
}

.jks-services-topic__more {
  margin-top: 0.25rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--jks-brand);
}

.jks-services-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1.75rem;
}

.jks-services-cta__title {
  margin: 0 0 0.35rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.jks-services-cta__text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #5c5c5c;
}

@media (max-width: 800px) {
  .jks-services-category__grid {
    grid-template-columns: 1fr;
  }

  .jks-services-category__header {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
