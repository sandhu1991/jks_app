<script setup>
import StaticPageContent from '@/components/content/StaticPageContent.vue'
import LegacyPageShell from '@/components/layout/LegacyPageShell.vue'
import { getStaticPageHtml } from '@/content/staticPages.js'

const html = getStaticPageHtml('about.html')
</script>

<template>
  <LegacyPageShell>
    <StaticPageContent :html="html" />
  </LegacyPageShell>
</template>
