<script setup>
defineProps({
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>

<template>
  <section class="jks-section jks-page-hero">
    <div class="jks-container jks-page-hero__inner">
      <p class="jks-kicker">{{ kicker }}</p>
      <h1 class="jks-heading">{{ title }}</h1>
      <p v-if="lead" class="jks-lead">{{ lead }}</p>
    </div>
  </section>
</template>
