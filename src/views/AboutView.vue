<script setup>
import { RouterLink } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import BookCtaBand from '@/components/common/BookCtaBand.vue'
import { about, teamMembers, processSteps } from '@/config/site.js'

const member = teamMembers[0]

function iconClass(icon) {
  return icon.includes('fa-brands') ? icon : `fa-solid ${icon}`
}
</script>

<template>
  <div class="jks-modern-page">
    <PageHero
      kicker="About JKS Immigration"
      :title="about.missionTitle"
      :lead="about.missionText"
    />

    <section class="jks-section jks-about-founder">
      <div class="jks-container jks-about-founder__grid">
        <figure class="jks-about-founder__figure">
          <img
            :src="member.image"
            :alt="`${member.name} — ${member.role}`"
            loading="eager"
          />
          <figcaption class="jks-about-founder__badge">
            <span class="jks-about-founder__badge-label">{{ member.license }}</span>
          </figcaption>
        </figure>

        <div class="jks-about-founder__content">
          <p class="jks-kicker">Meet your consultant</p>
          <h2 class="jks-heading jks-about-founder__name">{{ member.name }}</h2>
          <p class="jks-about-founder__role">{{ member.role }}</p>
          <p class="jks-about-founder__tagline">“{{ member.tagline }}”</p>
          <p class="jks-about-founder__bio">{{ member.bio }}</p>

          <ul class="jks-about-founder__creds">
            <li v-for="cred in member.credentials" :key="cred">{{ cred }}</li>
          </ul>

          <RouterLink to="/book" class="jks-btn jks-btn--navy">{{ member.ctaLabel }}</RouterLink>
        </div>
      </div>
    </section>

    <section class="jks-section jks-section--muted jks-about-pillars">
      <div class="jks-container jks-about-pillars__grid">
        <article v-for="pillar in about.pillars" :key="pillar.title" class="jks-about-pillar">
          <span class="jks-about-pillar__icon" aria-hidden="true">
            <i :class="iconClass(pillar.icon)" />
          </span>
          <div>
            <h3 class="jks-about-pillar__title">{{ pillar.title }}</h3>
            <p class="jks-about-pillar__text">{{ pillar.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="jks-section jks-about-process">
      <div class="jks-container">
        <p class="jks-kicker">How we work</p>
        <h2 class="jks-heading">Three simple steps</h2>

        <div class="jks-about-process__grid">
          <article v-for="step in processSteps" :key="step.step" class="jks-about-process__card">
            <span class="jks-about-process__step">{{ step.step }}</span>
            <h3 class="jks-about-process__title">{{ step.title }}</h3>
            <p class="jks-about-process__desc">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <BookCtaBand standalone />
  </div>
</template>

<style scoped>
.jks-about-founder__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
}

.jks-about-founder__figure {
  position: relative;
  margin: 0;
}

.jks-about-founder__figure img {
  width: 100%;
  display: block;
  border-radius: var(--jks-radius-lg);
  box-shadow: 0 16px 48px rgba(30, 58, 95, 0.14);
  object-fit: cover;
  aspect-ratio: 1024 / 812;
}

.jks-about-founder__badge {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  margin: 0;
  padding: 0.5rem 0.85rem;
  background: rgba(30, 58, 95, 0.92);
  border-radius: 8px;
  backdrop-filter: blur(4px);
}

.jks-about-founder__badge-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
}

.jks-about-founder__name {
  margin-bottom: 0.35rem;
}

.jks-about-founder__role {
  margin: 0 0 0.75rem;
  font-weight: 600;
  color: var(--jks-navy);
  font-size: 0.95rem;
}

.jks-about-founder__tagline {
  margin: 0 0 1rem;
  font-family: 'PT Serif', Georgia, serif;
  font-size: 1.1rem;
  font-style: italic;
  color: var(--jks-brand);
  line-height: 1.4;
}

.jks-about-founder__bio {
  margin: 0 0 1.25rem;
  line-height: 1.65;
  color: var(--jks-muted);
  max-width: 30rem;
  font-size: 0.98rem;
}

.jks-about-founder__creds {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 1.5rem;
  padding: 0;
  list-style: none;
}

.jks-about-founder__creds li {
  padding: 0.35rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--jks-navy);
  background: var(--jks-surface);
  border: 1px solid var(--jks-border);
  border-radius: 999px;
}

.jks-about-pillars {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.jks-about-pillars__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.jks-about-pillar {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem;
  background: #fff;
  border: 1px solid var(--jks-border);
  border-radius: var(--jks-radius);
}

.jks-about-pillar__icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 10px;
  background: var(--jks-brand-soft);
  color: var(--jks-brand);
  font-size: 0.95rem;
}

.jks-about-pillar__title {
  margin: 0 0 0.15rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--jks-ink);
}

.jks-about-pillar__text {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.4;
  color: var(--jks-muted);
}

.jks-about-process__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.jks-about-process__card {
  padding: 1.35rem 1.25rem;
  background: var(--jks-surface);
  border: 1px solid var(--jks-border);
  border-radius: var(--jks-radius);
}

.jks-about-process__step {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.75rem;
  border-radius: 50%;
  background: var(--jks-brand);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
}

.jks-about-process__title {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 700;
}

.jks-about-process__desc {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--jks-muted);
}

@media (max-width: 900px) {
  .jks-about-founder__grid {
    grid-template-columns: 1fr;
  }

  .jks-about-pillars__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .jks-about-pillars__grid,
  .jks-about-process__grid {
    grid-template-columns: 1fr;
  }
}
</style>
