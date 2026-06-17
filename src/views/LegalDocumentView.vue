<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import termsHtml from '@/content/legal/terms-condition.html?raw'
import privacyHtml from '@/content/legal/privacy-policy.html?raw'
import cookieHtml from '@/content/legal/cookie-policy.html?raw'

const route = useRoute()

const pages = {
  terms: termsHtml,
  privacy: privacyHtml,
  cookies: cookieHtml,
}

const html = computed(() => pages[route.name] || '')
const heading = computed(() => route.meta.heading || 'Legal')
</script>

<template>
  <div class="jks-modern-page">
    <section class="jks-section jks-page-hero">
      <div class="jks-container">
        <p class="jks-kicker">Legal</p>
        <h1 class="jks-heading">{{ heading }}</h1>
      </div>
    </section>

    <section class="jks-section">
      <div class="jks-container jks-prose" v-html="html" />
    </section>
  </div>
</template>
