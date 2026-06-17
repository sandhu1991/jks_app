<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { faqItems } from '@/config/faq.js'

const openIndex = ref(0)

function formatAnswer(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n')
}

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <div class="jks-modern-page">
    <section class="jks-section jks-page-hero">
      <div class="jks-container">
        <p class="jks-kicker">Frequently asked questions</p>
        <h1 class="jks-heading">Questions &amp; answers</h1>
        <p class="jks-lead">
          Common questions about Canadian immigration — eligibility, timelines, documents, and how we can help.
        </p>
      </div>
    </section>

    <section class="jks-section jks-section--muted">
      <div class="jks-container jks-faq">
        <div v-for="(item, index) in faqItems" :key="item.q" class="jks-faq__item">
          <button
            type="button"
            class="jks-faq__question"
            :class="{ 'jks-faq__question--open': openIndex === index }"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <span class="jks-faq__question-text">{{ item.q }}</span>
            <i class="fa-solid fa-angle-down jks-faq__icon" aria-hidden="true" />
          </button>
          <div v-show="openIndex === index" class="jks-faq__answer">
            <p class="jks-faq__answer-text">{{ formatAnswer(item.a) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="jks-section jks-faq-cta">
      <div class="jks-container jks-faq-cta__inner">
        <h2 class="jks-heading">Want to ask more questions?</h2>
        <p class="jks-lead">Book a consultation or send us a message — we respond within one business day.</p>
        <div class="jks-faq-cta__actions">
          <RouterLink to="/contact" class="jks-btn jks-btn--navy">Contact us</RouterLink>
          <RouterLink to="/book" class="jks-btn jks-btn--outline">Book a consultation</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
