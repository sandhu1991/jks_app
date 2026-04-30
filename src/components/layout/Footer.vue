<script setup>
import StaticPageContent from '@/components/content/StaticPageContent.vue'
import { getStaticPageHtml } from '@/content/staticPages.js'

const html = getStaticPageHtml('footer.html')
</script>

<template>
  <div class="footer-layout">
    <StaticPageContent v-if="html" :html="html" />
    <footer v-else class="footer-fallback">
      <p><a href="mailto:jksimmigration@gmail.com">jksimmigration@gmail.com</a> · <a href="tel:+15147060130">+1 (514) 706 0130</a></p>
    </footer>
  </div>
</template>

<style scoped>
.footer-fallback {
  text-align: center;
  padding: 2rem 1rem;
  background: #05070b;
  color: #fff;
}
.footer-fallback a {
  color: #ffb4b9;
}
</style>
