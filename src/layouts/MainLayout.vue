<script setup>
import Header from '@/components/layout/Header.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div id="pxl-wapper" class="jks-app jks-wapper pxl-wapper">
    <Header />
    <main id="main" class="jks-main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.jks-app {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
}

.jks-main {
  flex: 1 0 auto;
}

.jks-app :deep(.site-footer) {
  flex-shrink: 0;
  margin-top: auto;
}
</style>
