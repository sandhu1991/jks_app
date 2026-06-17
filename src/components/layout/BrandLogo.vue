<script setup>
defineProps({
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <span class="jks-brand" :class="{ 'jks-brand--compact': compact }">
    <i class="jks-brand__leaf fa-brands fa-canadian-maple-leaf" aria-hidden="true" />
    <span class="jks-brand__lockup">
      <span class="jks-brand__name">JKS</span>
      <span class="jks-brand__tag">Immigration</span>
    </span>
  </span>
</template>

<style scoped>
.jks-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  line-height: 1;
  color: #1a1a1a;
}

.jks-brand__leaf {
  flex-shrink: 0;
  font-size: 2.35rem;
  color: #da291c;
  line-height: 1;
}

.jks-brand__lockup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.28rem;
  min-width: 0;
}

.jks-brand__name {
  font-family: 'PT Serif', Georgia, 'Times New Roman', serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 0.95;
}

.jks-brand__tag {
  font-family: 'Rubik', system-ui, sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: #5c5c5c;
  line-height: 1;
}

.jks-brand--compact .jks-brand__leaf {
  font-size: 1.9rem;
}

.jks-brand--compact .jks-brand__name {
  font-size: 1.65rem;
}

.jks-brand--compact .jks-brand__tag {
  font-size: 0.68rem;
  letter-spacing: 0.28em;
}

@media (max-width: 900px) {
  .jks-brand__leaf {
    font-size: 1.85rem;
  }

  .jks-brand__name {
    font-size: 1.65rem;
  }

  .jks-brand__tag {
    font-size: 0.65rem;
    letter-spacing: 0.26em;
  }
}
</style>
