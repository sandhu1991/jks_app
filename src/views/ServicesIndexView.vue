<script setup>
import { watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import StaticPageContent from '@/components/content/StaticPageContent.vue'
import LegacyPageShell from '@/components/layout/LegacyPageShell.vue'
import { getStaticPageHtml } from '@/content/staticPages.js'

const route = useRoute()
const html = getStaticPageHtml('services-index.html')

function scrollToHubSection() {
  const id = route.meta.servicesHub
  if (!id || typeof document === 'undefined') return
  nextTick(() => {
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

watch(() => [route.name, route.path], scrollToHubSection, { immediate: true })
</script>

<template>
  <LegacyPageShell>
    <StaticPageContent :html="html" />
  </LegacyPageShell>
</template>
