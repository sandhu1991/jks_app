<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div id="pxl-wapper" class="jks-app jks-wapper pxl-wapper">
    <Header />
    <main id="main" class="jks-main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.jks-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.jks-main {
  flex: 1;
}
</style>
