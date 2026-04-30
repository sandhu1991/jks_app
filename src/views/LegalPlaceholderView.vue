<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import StaticPageContent from '@/components/content/StaticPageContent.vue'
import LegacyPageShell from '@/components/layout/LegacyPageShell.vue'
import { getStaticPageHtml } from '@/content/staticPages.js'

const route = useRoute()

const fileName = computed(() => {
  const n = route.name
  if (n === 'terms') return 'terms-condition.html'
  if (n === 'privacy') return 'privacy-policy.html'
  if (n === 'cookies') return 'cookie-policy.html'
  if (n === 'faq') return 'faq.html'
  return ''
})

const html = computed(() => getStaticPageHtml(fileName.value))

watchEffect(() => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
})
</script>

<template>
  <LegacyPageShell v-if="html">
    <StaticPageContent :html="html" />
  </LegacyPageShell>
  <article v-else class="page">
    <h1>{{ route.meta.heading || 'Page' }}</h1>
    <p>Content is not available.</p>
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
</style>
