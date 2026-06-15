<script setup>
import { ref, computed } from 'vue'
import { reviews, site } from '@/config/site.js'

const index = ref(0)
const total = reviews.length
const current = computed(() => reviews[index.value])

function prev() {
  index.value = (index.value - 1 + total) % total
}

function next() {
  index.value = (index.value + 1) % total
}
</script>

<template>
  <section class="jks-section jks-section--alt">
    <div class="jks-container">
      <div class="jks-reviews__head">
        <div>
          <p class="jks-kicker">Client feedback</p>
          <h2 class="jks-heading">Stories from people we have helped</h2>
        </div>
        <div class="jks-reviews__aside">
          <div class="jks-reviews__badge">
            <span class="jks-reviews__rating">{{ site.clientRating }}</span>
            <span class="jks-reviews__stars" aria-hidden="true">★★★★★</span>
            <span class="jks-reviews__label">average rating</span>
          </div>

          <a
            :href="site.reviewUrl"
            class="jks-reviews__badge jks-reviews__write"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="jks-reviews__write-title">{{ site.reviewCtaLabel }}</span>
            <span class="jks-reviews__write-note">Share your experience</span>
          </a>
        </div>
      </div>

      <div class="jks-card jks-reviews__panel">
        <blockquote class="jks-reviews__quote">
          <p>"{{ current.text }}"</p>
          <footer class="jks-reviews__footer">
            <cite class="jks-reviews__name">— {{ current.name }}</cite>
            <span v-if="current.case" class="jks-reviews__case">{{ current.case }}</span>
          </footer>
        </blockquote>

        <div class="jks-reviews__nav">
          <button type="button" class="jks-reviews__btn" aria-label="Previous" @click="prev">←</button>
          <button type="button" class="jks-reviews__btn" aria-label="Next" @click="next">→</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jks-reviews__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.jks-reviews__aside {
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.jks-reviews__badge {
  text-align: right;
  padding: 0.75rem 1rem;
  background: #fff;
  border-radius: var(--jks-radius);
  border: 1px solid var(--jks-border);
}

.jks-reviews__write {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.jks-reviews__write:hover {
  border-color: var(--jks-navy);
  box-shadow: 0 4px 14px rgba(15, 31, 51, 0.08);
}

.jks-reviews__write-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--jks-navy);
}

.jks-reviews__write-note {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.75rem;
  color: var(--jks-muted);
}

.jks-reviews__rating {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--jks-navy);
  margin-right: 0.35rem;
}

.jks-reviews__stars {
  color: var(--jks-brand);
  font-size: 0.9rem;
}

.jks-reviews__label {
  display: block;
  font-size: 0.75rem;
  color: var(--jks-muted);
  margin-top: 0.15rem;
}

.jks-reviews__panel {
  padding: 1.75rem 1.75rem 1.25rem;
}

.jks-reviews__quote {
  margin: 0;
}

.jks-reviews__quote p {
  margin: 0 0 1rem;
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--jks-ink);
}

.jks-reviews__footer {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.jks-reviews__name {
  font-style: normal;
  font-weight: 600;
  color: var(--jks-navy);
  font-size: 0.95rem;
}

.jks-reviews__case {
  font-size: 0.82rem;
  color: var(--jks-muted);
  font-weight: 500;
}

.jks-reviews__nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--jks-border);
}

.jks-reviews__btn {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--jks-border);
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  color: var(--jks-navy);
  font-size: 1rem;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.jks-reviews__btn:hover {
  background: var(--jks-surface);
  border-color: var(--jks-navy);
}
</style>
