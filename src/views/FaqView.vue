<script setup>
import { ref } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
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
        <Breadcrumbs :items="[{ label: 'Frequently asked questions' }]" light />
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
  </div>
</template>
