<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  items: { type: Array, default: () => [] },
  light: { type: Boolean, default: false },
})
</script>

<template>
  <nav class="jks-breadcrumb" :class="{ 'jks-breadcrumb--light': light }" aria-label="Breadcrumb">
    <RouterLink to="/">Home</RouterLink>
    <template v-for="(item, index) in items" :key="item.label">
      <span class="jks-breadcrumb__separator" aria-hidden="true">/</span>
      <RouterLink v-if="item.to" :to="item.to">{{ item.label }}</RouterLink>
      <span v-else :aria-current="index === items.length - 1 ? 'page' : undefined">{{ item.label }}</span>
    </template>
  </nav>
</template>

<style scoped>
.jks-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 0.42rem;
  margin: 0 0 1.15rem;
  color: var(--jks-muted);
  font-size: 0.85rem;
  line-height: 1.4;
}

.jks-breadcrumb a {
  color: var(--jks-brand);
  font-weight: 600;
  text-decoration: none;
}

.jks-breadcrumb a:hover { text-decoration: underline; }
.jks-breadcrumb__separator { opacity: 0.72; }

.jks-breadcrumb--light { color: rgba(255, 255, 255, 0.68); }
.jks-breadcrumb--light a { color: #fff; }
</style>
