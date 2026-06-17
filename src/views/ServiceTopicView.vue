<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ServiceTopicPage from '@/components/services/ServiceTopicPage.vue'
import { serviceLabels } from '@/config/serviceLabels.js'
import { getServiceTopic, serviceHubs } from '@/config/serviceTopics.js'

const route = useRoute()

const category = computed(() => route.meta.category)
const slug = computed(() => route.params.slug)

const title = computed(() => {
  const map = serviceLabels[category.value]
  return map?.[slug.value] || 'Service'
})

const hub = computed(() => serviceHubs[category.value] ?? null)
const topic = computed(() => getServiceTopic(category.value, slug.value))

watchEffect(() => {
  document.title = `${title.value} — JKS Immigration`
})
</script>

<template>
  <ServiceTopicPage
    v-if="topic && hub"
    :hub="hub"
    :title="title"
    :topic="topic"
  />
  <article v-else class="page">
    <h1>{{ title }}</h1>
    <p class="lead">This service page could not be loaded.</p>
    <p><router-link to="/services">← Services</router-link></p>
  </article>
</template>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.25rem;
}
.page h1 {
  font-family: 'PT Serif', Georgia, serif;
  color: #1a1a1a;
}
.lead {
  line-height: 1.65;
  color: #444;
}
.page a {
  color: #da291c;
}
</style>
