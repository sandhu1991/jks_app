<script setup>
import Breadcrumbs from './Breadcrumbs.vue'

defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  breadcrumbs: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="jks-section jks-page-hero">
    <div v-if="breadcrumbs.length" class="jks-container jks-page-hero__breadcrumb">
      <Breadcrumbs :items="breadcrumbs" light />
    </div>
    <div class="jks-container jks-page-hero__inner">
      <p v-if="kicker" class="jks-kicker">{{ kicker }}</p>
      <h1 class="jks-heading">{{ title }}</h1>
      <p v-if="lead" class="jks-lead">{{ lead }}</p>
    </div>
  </section>
</template>

<style scoped>
.jks-page-hero { padding-top: 1rem; }
.jks-page-hero__inner { padding-top: clamp(2.25rem, 4vw, 3.25rem); }
:deep(.jks-page-hero__breadcrumb .jks-breadcrumb) { margin-bottom: 0; }
</style>
