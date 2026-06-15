<script setup>
import { RouterLink } from 'vue-router'
import { site, contactChannels, socialLinks } from '@/config/site.js'

function resolveCard(card) {
  const value = card.valueKey ? site[card.valueKey] : ''
  let href = null
  if (card.href === 'maps') {
    href = site.mapsUrl
  } else if (card.hrefKey) {
    href = `${card.hrefPrefix}${site[card.hrefKey]}`
  }
  const note = card.noteKey ? site[card.noteKey] : card.note
  return { ...card, value, href, note }
}

function iconClass(icon) {
  return icon.includes('fa-brands') ? icon : `fa-solid ${icon}`
}

const cards = contactChannels.map(resolveCard)
</script>

<template>
  <div class="jks-modern-page">
    <section class="jks-section jks-contact-hero">
      <div class="jks-container jks-contact-hero__inner">
        <p class="jks-kicker">Get in touch</p>
        <h1 class="jks-heading">We are here to answer your questions</h1>
        <p class="jks-lead">{{ site.responseNote }}</p>
      </div>
    </section>

    <section class="jks-section jks-section--muted">
      <div class="jks-container">
        <div class="jks-contact-cards__grid">
          <article v-for="card in cards" :key="card.title" class="jks-card jks-contact-card">
            <span class="jks-icon-badge jks-icon-badge--navy" aria-hidden="true">
              <i :class="iconClass(card.icon)" />
            </span>
            <h2 class="jks-contact-card__title">{{ card.title }}</h2>
            <p class="jks-contact-card__value">
              <a
                v-if="card.href"
                :href="card.href"
                :target="card.external ? '_blank' : undefined"
                :rel="card.external ? 'noopener noreferrer' : undefined"
                class="jks-contact-card__link"
              >
                {{ card.value }}
              </a>
              <span v-else>{{ card.value }}</span>
            </p>
            <p class="jks-contact-card__note">{{ card.note }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="jks-section jks-contact-ready">
      <div class="jks-container jks-contact-ready__inner jks-card">
        <div>
          <h2 class="jks-contact-ready__title">Ready to discuss your file?</h2>
          <p class="jks-contact-ready__text">
            {{ site.hours }}<br />
            {{ site.virtualNote }}
          </p>
        </div>
        <RouterLink to="/book" class="jks-btn jks-btn--primary">{{ site.bookCtaLabel }}</RouterLink>
      </div>
    </section>

    <section class="jks-section">
      <div class="jks-container">
        <p class="jks-kicker">Social</p>
        <h2 class="jks-heading">Follow us online</h2>
        <p class="jks-lead jks-contact-social__intro">
          Immigration tips, updates, and answers to common questions on Instagram, Facebook, and TikTok.
        </p>
        <div class="jks-contact-social__grid">
          <article v-for="link in socialLinks" :key="link.platform" class="jks-card jks-contact-card">
            <span class="jks-icon-badge jks-icon-badge--navy" aria-hidden="true">
              <i :class="iconClass(link.icon)" />
            </span>
            <h2 class="jks-contact-card__title">{{ link.platform }}</h2>
            <p class="jks-contact-card__value">
              <a
                :href="link.url"
                class="jks-contact-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.handle }}
              </a>
            </p>
            <p class="jks-contact-card__note">{{ link.note }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="jks-contact-book">
      <div class="jks-container jks-contact-book__inner">
        <div>
          <h2 class="jks-contact-book__title">Book a Consultation</h2>
          <p class="jks-contact-book__text">{{ site.consultationNote }}</p>
          <p class="jks-contact-book__meta">{{ site.hours }} · {{ site.credential }}</p>
        </div>
        <RouterLink to="/book" class="jks-btn jks-btn--primary jks-contact-book__btn">
          Book a Consultation
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.jks-contact-hero {
  padding-bottom: 0;
}

.jks-contact-hero__inner {
  text-align: center;
}

.jks-contact-hero__inner .jks-heading,
.jks-contact-hero__inner .jks-lead {
  margin-left: auto;
  margin-right: auto;
}

.jks-contact-cards__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.15rem;
}

.jks-contact-card {
  padding: 1.35rem;
}

.jks-contact-card__title {
  margin: 0.65rem 0 0.35rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--jks-navy);
}

.jks-contact-card__value {
  margin: 0 0 0.5rem;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--jks-ink);
}

.jks-contact-card__link {
  color: var(--jks-brand);
  text-decoration: none;
  font-weight: 500;
}

.jks-contact-card__link:hover {
  text-decoration: underline;
}

.jks-contact-card__note {
  margin: 0;
  font-size: 0.82rem;
  color: var(--jks-muted);
  line-height: 1.5;
}

.jks-contact-social__intro {
  margin-bottom: 1.5rem;
}

.jks-contact-ready__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1.75rem;
}

.jks-contact-ready__title {
  margin: 0 0 0.35rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.jks-contact-ready__text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #5c5c5c;
}

.jks-contact-ready__link {
  color: var(--jks-brand);
  text-decoration: none;
  font-weight: 500;
}

.jks-contact-ready__link:hover {
  text-decoration: underline;
}

.jks-contact-social__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.15rem;
}

.jks-contact-book {
  padding: 2.5rem 1.25rem;
  background: linear-gradient(120deg, #0f1f33 0%, #152a45 55%, #1a1a2e 100%);
  color: #fff;
}

.jks-contact-book__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.jks-contact-book__title {
  margin: 0 0 0.35rem;
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  font-weight: 700;
  color: #fff;
}

.jks-contact-book__text {
  margin: 0 0 0.35rem;
  color: #e8edf3;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 36rem;
}

.jks-contact-book__meta {
  margin: 0;
  font-size: 0.88rem;
  color: #c5d0dc;
}

.jks-contact-book__btn {
  flex-shrink: 0;
  background: var(--jks-brand);
  border-color: var(--jks-brand);
}

.jks-contact-book__btn:hover {
  background: var(--jks-brand-dark);
  border-color: var(--jks-brand-dark);
}

@media (max-width: 800px) {
  .jks-contact-social__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .jks-contact-cards__grid,
  .jks-contact-social__grid {
    grid-template-columns: 1fr;
  }
}
</style>
