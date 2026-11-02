<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site.js'

defineProps({
  /** Wrap in full-width section + container (About, Contact). */
  standalone: { type: Boolean, default: false },
  /** Use the muted section background when standalone. */
  muted: { type: Boolean, default: true },
})
</script>

<template>
  <component
    :is="standalone ? 'section' : 'div'"
    :class="standalone ? ['jks-section', { 'jks-section--muted': muted }] : undefined"
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
  position: relative;
  overflow: hidden;
  margin-top: 1.75rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  background: linear-gradient(145deg, #fff 0%, #fff9f9 45%, #f6f8fb 100%);
  border-color: rgba(185, 28, 28, 0.32);
  box-shadow:
    0 16px 40px rgba(30, 58, 95, 0.14),
    0 0 0 1px rgba(185, 28, 28, 0.08);
}

.jks-book-cta-band::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(180deg, var(--jks-brand) 0%, var(--jks-navy) 100%);
}

section > .jks-container > .jks-book-cta-band {
  margin-top: 0;
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

.jks-book-cta-band > * { position: relative; }
</style>
