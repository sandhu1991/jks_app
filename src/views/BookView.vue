<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import {
  site,
  bookPage,
  bookFeaturedPackage,
  bookPackages,
  bookLink,
} from '@/config/site.js'

const featuredHref = bookLink(bookFeaturedPackage)
const featuredExternal = featuredHref.startsWith('https://cal.com/')
</script>

<template>
  <div class="jks-modern-page">
    <PageHero
      :kicker="bookPage.kicker"
      :title="bookPage.title"
      :lead="bookPage.lead"
    />

    <section class="jks-section jks-section--muted">
      <div class="jks-container">
        <div class="jks-book-online jks-card jks-book-hover">
          <span class="jks-book-online__icon" aria-hidden="true">💻</span>
          <p class="jks-book-online__text">{{ bookPage.onlineNote }}</p>
        </div>

        <article class="jks-book-featured jks-book-hover jks-book-hover--featured">
          <div class="jks-book-featured__accent" aria-hidden="true" />

          <div class="jks-book-featured__inner">
            <div class="jks-book-featured__main">
              <span class="jks-book-featured__badge">
                <span class="jks-book-featured__badge-star" aria-hidden="true">★</span>
                {{ bookFeaturedPackage.badge }}
              </span>
              <h2 class="jks-book-featured__title">{{ bookFeaturedPackage.title }}</h2>
              <p class="jks-book-featured__subtitle">{{ bookFeaturedPackage.subtitle }}</p>

              <ul class="jks-book-featured__list">
                <li v-for="item in bookFeaturedPackage.features" :key="item">
                  <span class="jks-book-featured__check" aria-hidden="true">✓</span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="jks-book-featured__aside">
              <div class="jks-book-featured__price-card">
                <span class="jks-book-featured__price-label">Starting at</span>
                <p class="jks-book-featured__price">
                  <span class="jks-book-featured__amount">{{ bookFeaturedPackage.price }}</span>
                  <span class="jks-book-featured__price-note">{{ bookFeaturedPackage.priceNote }}</span>
                </p>
              </div>

              <a
                :href="featuredHref"
                class="jks-btn jks-btn--primary jks-book-featured__btn"
                :target="featuredExternal ? '_blank' : undefined"
                :rel="featuredExternal ? 'noopener noreferrer' : undefined"
              >
                {{ bookFeaturedPackage.bookLabel }}
              </a>

              <p class="jks-book-featured__meta">
                <template v-if="featuredExternal">Secure booking via Cal.com · </template>
                Appointment required · {{ site.credential }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="jks-section">
      <div class="jks-container">
        <p class="jks-kicker">All services</p>
        <h2 class="jks-heading">Extended services</h2>
        <p class="jks-lead jks-book-packages__intro">
          Additional services and fees. Book the initial consultation above to discuss which option fits your case.
        </p>

        <div class="jks-book-packages__grid">
          <article
            v-for="pkg in bookPackages"
            :key="pkg.title"
            class="jks-card jks-book-package jks-book-hover"
          >
            <h3 class="jks-book-package__title">{{ pkg.title }}</h3>
            <p class="jks-book-package__price">
              <span class="jks-book-package__amount">{{ pkg.price }}</span>
              <span v-if="pkg.duration" class="jks-book-package__duration">{{ pkg.duration }}</span>
            </p>
            <p class="jks-book-package__desc">{{ pkg.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="jks-section jks-section--muted">
      <div class="jks-container">
        <div class="jks-book-bottom-cta jks-card jks-book-hover">
          <p>
            Not sure which program applies?
            <strong>{{ site.bookCtaLabel }}</strong> and we will map out your next steps.
          </p>
          <a
            :href="featuredHref"
            class="jks-btn jks-btn--primary"
            :target="featuredExternal ? '_blank' : undefined"
            :rel="featuredExternal ? 'noopener noreferrer' : undefined"
          >
            {{ site.bookCtaLabel }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.jks-book-online {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.35rem;
  margin-bottom: 1.5rem;
  background: #fff;
}

.jks-book-online__icon {
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.jks-book-online__text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--jks-ink);
}

.jks-book-featured {
  position: relative;
  overflow: hidden;
  border-radius: var(--jks-radius-lg);
  border: 1px solid rgba(185, 28, 28, 0.22);
  background: linear-gradient(135deg, #fff 0%, #fff9f9 48%, #f8fafc 100%);
  box-shadow:
    0 10px 32px rgba(30, 58, 95, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.8) inset;
}

.jks-book-featured__accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(180deg, var(--jks-brand) 0%, var(--jks-navy) 100%);
}

.jks-book-featured__inner {
  display: grid;
  grid-template-columns: 1.35fr 0.9fr;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.15rem;
  align-items: start;
}

.jks-book-featured__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1rem;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: var(--jks-brand);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px rgba(185, 28, 28, 0.28);
}

.jks-book-featured__badge-star {
  font-size: 0.78rem;
  line-height: 1;
}

.jks-book-featured__title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.75rem, 3vw, 2.1rem);
  font-weight: 700;
  color: var(--jks-navy);
  line-height: 1.15;
  transition: color 0.25s ease;
}

.jks-book-featured__subtitle {
  margin: 0 0 1.25rem;
  font-size: 1.02rem;
  color: var(--jks-muted);
  line-height: 1.55;
  max-width: 34rem;
}

.jks-book-featured__list {
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--jks-ink);
  line-height: 1.55;
}

.jks-book-featured__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
}

.jks-book-featured__list li + li {
  margin-top: 0.65rem;
}

.jks-book-featured__check {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.1rem;
  border-radius: 50%;
  background: var(--jks-brand-soft);
  color: var(--jks-brand);
  font-size: 0.72rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.jks-book-featured__aside {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  padding: 1.35rem;
  border-radius: var(--jks-radius);
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(30, 58, 95, 0.1);
  box-shadow: 0 4px 18px rgba(30, 58, 95, 0.06);
}

.jks-book-featured__price-card {
  text-align: center;
  padding: 0.5rem 0 0.25rem;
}

.jks-book-featured__price-label {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--jks-muted);
}

.jks-book-featured__price {
  margin: 0;
}

.jks-book-featured__amount {
  display: block;
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--jks-brand);
  line-height: 1;
  letter-spacing: -0.02em;
  transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.jks-book-featured__price-note {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--jks-navy);
}

.jks-book-featured__btn {
  width: 100%;
  padding: 0.85rem 1.25rem;
  font-size: 1rem;
  box-shadow: 0 6px 18px rgba(185, 28, 28, 0.25);
}

.jks-book-featured__btn:hover {
  box-shadow: 0 8px 22px rgba(185, 28, 28, 0.32);
}

.jks-book-featured__meta {
  margin: 0;
  font-size: 0.78rem;
  color: var(--jks-muted);
  line-height: 1.5;
  text-align: center;
}

.jks-book-packages__intro {
  margin-bottom: 1.5rem;
}

.jks-book-packages__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.jks-book-package {
  display: flex;
  flex-direction: column;
  padding: 1.35rem 1.35rem 1.25rem;
}

.jks-book-package__title {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--jks-navy);
  line-height: 1.3;
  transition: color 0.25s ease;
}

.jks-book-package__price {
  margin: 0 0 0.75rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.jks-book-package__amount {
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--jks-brand);
  transition: color 0.25s ease;
}

.jks-book-package__duration {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--jks-muted);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.jks-book-package__desc {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--jks-muted);
  transition: color 0.25s ease;
}

/* Shared hover highlight (matches home & contact cards) */
.jks-book-hover {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease,
    background 0.35s ease;
}

.jks-book-hover:not(.jks-book-hover--featured)::before {
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
  z-index: 1;
}

.jks-book-hover::after {
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
  z-index: 1;
}

.jks-book-hover:hover {
  transform: translateY(-8px) scale(1.015);
  border-color: rgba(185, 28, 28, 0.32);
  box-shadow:
    0 16px 40px rgba(30, 58, 95, 0.14),
    0 0 0 1px rgba(185, 28, 28, 0.08);
}

.jks-book-online:hover,
.jks-book-package:hover,
.jks-book-bottom-cta:hover {
  background: linear-gradient(145deg, #fff 0%, #fff9f9 45%, #f6f8fb 100%);
}

.jks-book-hover--featured:hover {
  box-shadow:
    0 18px 44px rgba(30, 58, 95, 0.16),
    0 0 0 1px rgba(185, 28, 28, 0.12);
}

.jks-book-hover:not(.jks-book-hover--featured):hover::before {
  transform: scaleY(1);
}

.jks-book-hover:hover::after {
  transform: translateX(120%);
}

.jks-book-online:hover .jks-book-online__icon {
  animation: jks-book-icon-shuffle 0.55s ease;
}

.jks-book-package:hover .jks-book-package__title {
  color: var(--jks-brand-dark);
}

.jks-book-package:hover .jks-book-package__amount {
  color: var(--jks-navy);
}

.jks-book-package:hover .jks-book-package__desc {
  color: var(--jks-ink);
}

.jks-book-hover--featured:hover .jks-book-featured__title {
  color: var(--jks-brand-dark);
}

.jks-book-hover--featured:hover .jks-book-featured__amount {
  transform: scale(1.04);
}

.jks-book-bottom-cta:hover strong {
  color: var(--jks-navy);
}

.jks-book-bottom-cta strong {
  transition: color 0.25s ease;
}

@keyframes jks-book-icon-shuffle {
  0% {
    transform: scale(1) rotate(0deg);
  }
  20% {
    transform: scale(1.15) rotate(-8deg) translateX(-2px);
  }
  45% {
    transform: scale(1.1) rotate(6deg) translateX(2px);
  }
  70% {
    transform: scale(1.12) rotate(-4deg);
  }
  100% {
    transform: scale(1.08) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .jks-book-hover,
  .jks-book-hover::before,
  .jks-book-hover::after,
  .jks-book-online__icon,
  .jks-book-featured__amount {
    transition: none;
    animation: none;
  }

  .jks-book-hover:hover {
    transform: none;
  }

  .jks-book-hover:hover::after {
    transform: translateX(-120%);
  }

  .jks-book-hover--featured:hover .jks-book-featured__amount {
    transform: none;
  }
}

.jks-book-bottom-cta {
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  background: #fff;
  border-color: rgba(30, 58, 95, 0.12);
}

.jks-book-bottom-cta p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--jks-muted);
  max-width: 36rem;
}

@media (max-width: 768px) {
  .jks-book-featured__inner {
    grid-template-columns: 1fr;
    gap: 1.35rem;
    padding: 1.5rem 1.35rem 1.5rem 1.5rem;
  }

  .jks-book-packages__grid {
    grid-template-columns: 1fr;
  }

  .jks-book-featured__amount {
    font-size: 2.35rem;
  }
}
</style>
