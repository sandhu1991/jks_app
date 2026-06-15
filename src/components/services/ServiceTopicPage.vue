<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site.js'

defineProps({
  hub: { type: Object, required: true },
  title: { type: String, required: true },
  topic: { type: Object, required: true },
})
</script>

<template>
  <div class="jks-modern-page">
    <section class="jks-section jks-service-hero">
      <div class="jks-container jks-service-hero__inner">
        <nav class="jks-service-breadcrumb" aria-label="Breadcrumb">
          <RouterLink :to="hub.path" class="jks-service-breadcrumb__link">{{ hub.label }}</RouterLink>
          <span class="jks-service-breadcrumb__sep" aria-hidden="true">/</span>
          <span>{{ title }}</span>
        </nav>
        <p class="jks-kicker">{{ hub.kicker }}</p>
        <h1 class="jks-heading">{{ title }}</h1>
        <p class="jks-lead">{{ topic.intro }}</p>
        <img
          v-if="topic.image"
          class="jks-service-hero__image"
          :src="topic.image"
          :alt="topic.imageAlt || title"
          loading="lazy"
        />
      </div>
    </section>

    <section
      v-for="(section, index) in topic.sections"
      :key="section.heading"
      class="jks-section"
      :class="{ 'jks-section--muted': index % 2 === 1 }"
    >
      <div class="jks-container jks-service-content">
        <h2 class="jks-service-content__heading">{{ section.heading }}</h2>
        <p
          v-for="(paragraph, pIndex) in section.paragraphs"
          :key="pIndex"
          class="jks-service-content__text"
        >
          {{ paragraph }}
        </p>
        <ul v-if="section.list?.length" class="jks-service-content__list">
          <li v-for="item in section.list" :key="item">{{ item }}</li>
        </ul>
        <ol v-if="section.orderedList?.length" class="jks-service-content__olist">
          <li v-for="item in section.orderedList" :key="item">{{ item }}</li>
        </ol>
        <p v-if="section.link" class="jks-service-content__link-wrap">
          <a
            :href="section.link.url"
            class="jks-service-content__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ section.link.label }} →
          </a>
        </p>
      </div>
    </section>

    <section class="jks-section jks-section--muted jks-service-cta">
      <div class="jks-container">
        <div class="jks-service-cta__inner jks-card">
          <div>
            <h2 class="jks-service-cta__title">Ready to discuss your file?</h2>
            <p class="jks-service-cta__text">
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
.jks-service-hero {
  padding-bottom: 0;
}

.jks-service-hero__inner .jks-lead {
  max-width: none;
}

.jks-service-hero__image {
  width: 100%;
  margin-top: 1.75rem;
  max-height: 400px;
  object-fit: cover;
  object-position: center 55%;
  border-radius: var(--jks-radius-lg);
  display: block;
}

.jks-service-breadcrumb {
  margin: 0 0 1rem;
  font-size: 0.88rem;
  color: var(--jks-muted);
}

.jks-service-breadcrumb__link {
  color: var(--jks-brand);
  text-decoration: none;
  font-weight: 500;
}

.jks-service-breadcrumb__link:hover {
  text-decoration: underline;
}

.jks-service-breadcrumb__sep {
  margin: 0 0.35rem;
}

.jks-service-content__heading {
  margin: 0 0 1rem;
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: var(--jks-navy);
}

.jks-service-content__text {
  margin: 0 0 1rem;
  line-height: 1.65;
  color: #5c5c5c;
}

.jks-service-content__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.jks-service-content__list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.55;
  color: #3d3d3d;
}

.jks-service-content__list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--jks-brand);
  font-weight: 700;
}

.jks-service-content__olist {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  line-height: 1.65;
  color: #3d3d3d;
}

.jks-service-content__olist li {
  margin-bottom: 0.45rem;
}

.jks-service-content__link-wrap {
  margin: 0;
}

.jks-service-content__link {
  color: var(--jks-brand);
  text-decoration: none;
  font-weight: 600;
}

.jks-service-content__link:hover {
  text-decoration: underline;
}

.jks-service-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1.75rem;
}

.jks-service-cta__title {
  margin: 0 0 0.35rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.jks-service-cta__text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #5c5c5c;
}
</style>
