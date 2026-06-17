<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site.js'

defineProps({
  /** Wrap in full-width section + container (About, Contact). */
  standalone: { type: Boolean, default: false },
})
</script>

<template>
  <component
    :is="standalone ? 'section' : 'div'"
    :class="standalone ? 'jks-section jks-section--muted' : undefined"
  >
    <div :class="standalone ? 'jks-container' : undefined">
      <div class="jks-book-cta-band jks-card">
        <p>
          Not sure which program applies?
          <strong>{{ site.bookCtaLabel }}</strong> and we will map out your next steps.
        </p>
        <RouterLink to="/book" class="jks-btn jks-btn--primary">{{ site.bookCtaLabel }}</RouterLink>
      </div>
    </div>
  </component>
</template>

<style scoped>
.jks-book-cta-band {
  margin-top: 1.75rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  background: var(--jks-surface);
  border-color: rgba(30, 58, 95, 0.12);
}

section > .jks-container > .jks-book-cta-band {
  margin-top: 0;
  background: #fff;
}

.jks-book-cta-band p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--jks-muted);
  max-width: 32rem;
}

.jks-book-cta-band strong {
  color: var(--jks-ink);
  font-weight: 600;
}
</style>
