<script setup>
import PageHero from '@/components/layout/PageHero.vue'

defineProps({
  hub: { type: Object, required: true },
  title: { type: String, required: true },
  topic: { type: Object, required: true },
})
</script>

<template>
  <div class="jks-modern-page">
    <PageHero
      :kicker="hub.kicker"
      :title="title"
      :lead="topic.intro"
      :breadcrumbs="[{ label: hub.label, to: hub.path }, { label: title }]"
    />

    <section v-if="topic.image" class="jks-section jks-service-topic-image">
      <div class="jks-container">
        <img
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
      :class="{ 'jks-section--muted': index === 0 }"
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
  </div>
</template>

<style scoped>
.jks-service-topic-image { padding-top: 2.25rem; padding-bottom: 2.25rem; }

.jks-service-hero__image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  object-position: center 55%;
  border-radius: var(--jks-radius-lg);
  display: block;
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
