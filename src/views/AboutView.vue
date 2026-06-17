<script setup>
import { RouterLink } from 'vue-router'
import TrustStats from '@/components/home/TrustStats.vue'
import { about, teamMembers, processSteps, site } from '@/config/site.js'
</script>

<template>
  <div class="jks-modern-page">
    <section class="jks-section jks-page-hero jks-about-hero">
      <div class="jks-container jks-about-hero__inner">
        <p class="jks-kicker">Our story</p>
        <h1 class="jks-heading">{{ about.missionTitle }}</h1>
        <p class="jks-lead">{{ about.missionText }}</p>
      </div>
    </section>

    <TrustStats />

    <section class="jks-section">
      <div class="jks-container jks-about-split">
        <div class="jks-about-split__media">
          <img :src="about.image" alt="JKS Immigration — guiding your path to Canada" loading="lazy" />
        </div>
        <div class="jks-about-split__content">
          <p class="jks-kicker">Who we are</p>
          <h2 class="jks-heading">{{ about.introTitle }}</h2>
          <p class="jks-about-text">{{ about.introText }}</p>
          <p class="jks-about-text">{{ about.accreditation }}</p>
          <ul class="jks-about-highlights">
            <li v-for="item in about.highlights" :key="item">{{ item }}</li>
          </ul>
          <RouterLink to="/book" class="jks-btn jks-btn--navy">Book a Consultation</RouterLink>
        </div>
      </div>
    </section>

    <section class="jks-section jks-section--muted">
      <div class="jks-container">
        <p class="jks-kicker">Lead consultant</p>
        <h2 class="jks-heading">Who leads your file</h2>
        <p class="jks-lead jks-about-team__intro">{{ about.teamIntro }}</p>

        <article v-for="member in teamMembers" :key="member.name" class="jks-card jks-about-team__profile">
          <div class="jks-about-team__media">
            <img
              :src="member.image"
              :alt="`${member.name} — ${member.role}`"
              loading="lazy"
            />
          </div>
          <div class="jks-about-team__body">
            <h3 class="jks-about-team__name">{{ member.name }}</h3>
            <p class="jks-about-team__role">{{ member.role }}</p>
            <p class="jks-about-team__license">{{ member.license }}</p>
            <p class="jks-about-team__bio">{{ member.bio }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="jks-section jks-about-contact">
      <div class="jks-container jks-about-contact__inner jks-card">
        <div>
          <h2 class="jks-about-contact__title">Ready to discuss your file?</h2>
          <p class="jks-about-contact__text">
            {{ site.hours }}<br />
            {{ site.virtualNote }}
          </p>
          <a
            :href="site.facebookUrl"
            class="jks-about-contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on Facebook
          </a>
        </div>
        <RouterLink to="/book" class="jks-btn jks-btn--primary">{{ site.bookCtaLabel }}</RouterLink>
      </div>
    </section>

    <section class="jks-section">
      <div class="jks-container">
        <p class="jks-kicker">How we work</p>
        <h2 class="jks-heading">Three phases from first call to decision</h2>
        <p class="jks-lead jks-about-process__intro">{{ about.processIntro }}</p>

        <div class="jks-about-process__grid">
          <article v-for="step in processSteps" :key="step.step" class="jks-card jks-about-process__card">
            <span class="jks-about-process__step">{{ step.step }}</span>
            <h3 class="jks-about-process__title">{{ step.title }}</h3>
            <p class="jks-about-process__desc">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.jks-about-hero__inner .jks-lead {
  max-width: 48rem;
}

.jks-about-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
}

.jks-about-split__media img {
  width: 100%;
  border-radius: var(--jks-radius-lg);
  display: block;
  object-fit: cover;
}

.jks-about-text {
  margin: 0 0 1rem;
  line-height: 1.65;
  color: #5c5c5c;
}

.jks-about-highlights {
  margin: 0 0 1.5rem;
  padding: 0;
  list-style: none;
}

.jks-about-highlights li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3d3d3d;
  line-height: 1.5;
}

.jks-about-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--jks-brand);
  font-weight: 700;
}

.jks-about-team__intro {
  margin-bottom: 2rem;
}

.jks-about-team__profile {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 2rem;
  align-items: center;
  padding: 1.75rem;
}

.jks-about-team__media img {
  width: 100%;
  border-radius: var(--jks-radius-lg);
  display: block;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

.jks-about-team__body {
  padding: 0;
}

.jks-about-team__name {
  margin: 0 0 0.25rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.jks-about-team__role {
  margin: 0 0 0.25rem;
  font-weight: 600;
  color: var(--jks-navy);
  font-size: 0.95rem;
}

.jks-about-team__license {
  margin: 0 0 1rem;
  font-size: 0.85rem;
  color: #5c5c5c;
}

.jks-about-team__bio {
  margin: 0;
  line-height: 1.65;
  color: #5c5c5c;
  font-size: 0.98rem;
}

.jks-about-process__intro {
  margin-bottom: 2rem;
}

.jks-about-process__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.jks-about-process__card {
  padding: 1.5rem;
}

.jks-about-process__step {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--jks-brand);
  line-height: 1;
  margin-bottom: 0.75rem;
}

.jks-about-process__title {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.jks-about-process__desc {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #5c5c5c;
}

.jks-about-contact__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1.75rem;
}

.jks-about-contact__title {
  margin: 0 0 0.35rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.jks-about-contact__text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #5c5c5c;
}

.jks-about-contact__link {
  color: var(--jks-brand);
  text-decoration: none;
  font-weight: 500;
}

.jks-about-contact__link:hover {
  text-decoration: underline;
}

@media (max-width: 800px) {
  .jks-about-split {
    grid-template-columns: 1fr;
  }

  .jks-about-team__profile {
    grid-template-columns: 1fr;
  }

  .jks-about-process__grid {
    grid-template-columns: 1fr;
  }
}
</style>
