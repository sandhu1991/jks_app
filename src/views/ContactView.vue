<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import BookCtaBand from '@/components/common/BookCtaBand.vue'
import { site, contactPage, contactChannels, socialLinks } from '@/config/site.js'

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
    <PageHero
      :kicker="contactPage.kicker"
      :title="contactPage.title"
      :lead="contactPage.lead"
    />

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

    <BookCtaBand standalone />
  </div>
</template>

<style scoped>
.jks-contact-cards__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.15rem;
}

.jks-contact-card {
  position: relative;
  overflow: hidden;
  padding: 1.35rem;
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease,
    background 0.35s ease;
}

.jks-contact-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--jks-brand) 0%, var(--jks-navy) 100%);
  transform: scaleY(0);
  transform-origin: center top;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border-radius: var(--jks-radius) 0 0 var(--jks-radius);
}

.jks-contact-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 40%,
    rgba(255, 255, 255, 0.55) 50%,
    transparent 60%
  );
  transform: translateX(-120%);
  transition: transform 0.65s ease;
  pointer-events: none;
}

.jks-contact-card:hover {
  transform: translateY(-8px) scale(1.015);
  border-color: rgba(185, 28, 28, 0.32);
  box-shadow:
    0 16px 40px rgba(30, 58, 95, 0.14),
    0 0 0 1px rgba(185, 28, 28, 0.08);
  background: linear-gradient(145deg, #fff 0%, #fff9f9 45%, #f6f8fb 100%);
}

.jks-contact-card:hover::before {
  transform: scaleY(1);
}

.jks-contact-card:hover::after {
  transform: translateX(120%);
}

.jks-contact-card .jks-icon-badge {
  transition:
    transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
}

.jks-contact-card:hover .jks-icon-badge {
  background: var(--jks-brand);
  color: #fff;
  box-shadow: 0 6px 16px rgba(185, 28, 28, 0.28);
  animation: jks-contact-icon-shuffle 0.55s ease;
}

.jks-contact-card__title {
  margin: 0.65rem 0 0.35rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--jks-navy);
  transition: color 0.25s ease;
}

.jks-contact-card:hover .jks-contact-card__title {
  color: var(--jks-brand-dark);
}

.jks-contact-card__value {
  margin: 0 0 0.5rem;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--jks-ink);
  transition: color 0.25s ease;
}

.jks-contact-card:hover .jks-contact-card__value {
  color: var(--jks-navy);
}

.jks-contact-card__link {
  color: var(--jks-brand);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.25s ease;
}

.jks-contact-card:hover .jks-contact-card__link {
  color: var(--jks-navy);
}

.jks-contact-card__link:hover {
  text-decoration: underline;
}

.jks-contact-card__note {
  margin: 0;
  font-size: 0.82rem;
  color: var(--jks-muted);
  line-height: 1.5;
  transition: color 0.25s ease;
}

.jks-contact-card:hover .jks-contact-card__note {
  color: var(--jks-ink);
}

@keyframes jks-contact-icon-shuffle {
  0% {
    transform: scale(1) rotate(0deg);
  }
  20% {
    transform: scale(1.12) rotate(-8deg) translateX(-2px);
  }
  45% {
    transform: scale(1.08) rotate(6deg) translateX(2px);
  }
  70% {
    transform: scale(1.1) rotate(-4deg);
  }
  100% {
    transform: scale(1.08) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .jks-contact-card,
  .jks-contact-card::before,
  .jks-contact-card::after,
  .jks-contact-card .jks-icon-badge {
    transition: none;
    animation: none;
  }

  .jks-contact-card:hover {
    transform: none;
  }

  .jks-contact-card:hover .jks-icon-badge {
    animation: none;
    transform: none;
  }

  .jks-contact-card:hover::after {
    transform: translateX(-120%);
  }
}

.jks-contact-social__intro {
  margin-bottom: 1.5rem;
}

.jks-contact-social__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.15rem;
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
