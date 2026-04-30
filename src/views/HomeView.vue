<script setup>
import StaticPageContent from '@/components/content/StaticPageContent.vue'
import LegacyPageShell from '@/components/layout/LegacyPageShell.vue'
import { getStaticPageHtml } from '@/content/staticPages.js'

const html = getStaticPageHtml('home.html')
</script>

<template>
  <LegacyPageShell full-bleed>
    <StaticPageContent :html="html" />
  </LegacyPageShell>
</template>
