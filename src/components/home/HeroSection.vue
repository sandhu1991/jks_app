<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site.js'
</script>

<template>
  <section class="jks-hero jks-hero--enter">
    <div class="jks-hero__bg" :style="{ backgroundImage: `url(${site.heroImage})` }" aria-hidden="true" />
    <div class="jks-hero__overlay" aria-hidden="true" />
    <div class="jks-container jks-hero__content">
      <div class="jks-hero__copy">
        <p class="jks-hero__badge">
          <span class="jks-hero__badge-pill">CICC licensed RCIC · {{ site.rcicLicense }}</span>
        </p>
        <h1 class="jks-hero__title">
          Making immigration<br />
          <span class="jks-hero__title-accent">easy for you.</span>
        </h1>
        <p class="jks-hero__sub">
          Personalized, regulated guidance for every Canadian immigration pathway.<br />
          Clear answers, a thoughtful strategy, and confident next steps.<br />
          <RouterLink to="/programs" class="jks-hero__programs-link">
            Explore all current pathways <span aria-hidden="true">→</span>
          </RouterLink>
        </p>
        <div class="jks-hero__actions">
          <RouterLink to="/book" class="jks-btn jks-btn--primary jks-hero__cta">Book a Consultation</RouterLink>
          <RouterLink to="/about" class="jks-btn jks-btn--outline jks-hero__cta-secondary">About Us</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jks-hero {
  position: relative;
  min-height: clamp(445px, 64vh, 535px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.jks-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
  transform: scale(1.02);
  filter: saturate(0.58) brightness(0.9) contrast(0.94);
}

.jks-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 42%, rgba(141, 153, 167, 0.13), transparent 46%),
    linear-gradient(180deg, rgba(71, 83, 98, 0.48) 0%, rgba(85, 98, 113, 0.43) 52%, rgba(55, 66, 81, 0.62) 100%);
}

.jks-hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  padding: clamp(3.25rem, 7vw, 4.5rem) 1.25rem;
  color: #fff;
  text-align: center;
}

.jks-hero__copy {
  width: min(100%, 41rem);
  margin: 0 auto;
}

.jks-hero__badge {
  margin: 0 0 1rem;
  display: flex;
  justify-content: center;
}

.jks-hero__badge-pill {
  position: relative;
  display: inline-block;
  padding: 0.45rem 0.9rem 0.45rem 1.15rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #f9fbfd;
  background-color: rgba(255, 255, 255, 0.1);
  background-image: radial-gradient(rgba(255, 255, 255, 0.38) 0.7px, transparent 0.7px);
  background-size: 5px 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  backdrop-filter: blur(8px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.jks-hero__badge-pill::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0.55rem;
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
  background: #e23b3b;
  box-shadow: 0 0 0 3px rgba(226, 59, 59, 0.16);
  transform: translateY(-50%);
}

.jks-hero__title {
  margin: 0 0 1.3rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.25rem, 4.5vw, 3.55rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.45);
}

.jks-hero__title-accent {
  color: #ffd4d6;
  font-style: italic;
}

.jks-hero__sub {
  margin: 0 auto 1.35rem;
  max-width: 36rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.72;
  color: #f2f6fa;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.4);
}

.jks-hero__programs-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.75rem;
  padding: 0.28rem 0.65rem;
  border: 1px solid rgba(255, 212, 214, 0.42);
  border-radius: 999px;
  color: #fff;
  background: rgba(185, 28, 28, 0.26);
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.jks-hero__programs-link::before {
  content: none;
}

.jks-hero__programs-link:hover {
  color: #fff;
  border-color: #ffd4d6;
  background: rgba(185, 28, 28, 0.48);
  transform: translateY(-1px);
}

.jks-hero__programs-link span:last-child {
  color: #ffb4b9;
  font-size: 1.1em;
}

.jks-hero__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.jks-hero__cta {
  background: linear-gradient(135deg, #d52a2a, var(--jks-brand));
  border-color: var(--jks-brand);
  color: #fff;
  box-shadow: 0 8px 18px rgba(185, 28, 28, 0.32);
  padding: 0.7rem 1.15rem;
  font-size: 0.9rem;
}

.jks-hero__cta:hover {
  background: var(--jks-brand-dark);
  border-color: var(--jks-brand-dark);
  color: #fff;
  box-shadow: 0 10px 22px rgba(185, 28, 28, 0.42);
}

.jks-hero__cta-secondary {
  padding: 0.7rem 1.15rem;
  font-size: 0.9rem;
  color: #fff;
  background: rgba(7, 18, 35, 0.36);
  border: 1px solid rgba(255, 212, 214, 0.58);
}

.jks-hero__cta-secondary:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  border-color: #ffd4d6;
}

.jks-hero--enter .jks-hero__content {
  animation: jks-hero-enter 0.85s ease both;
}

@keyframes jks-hero-enter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .jks-hero--enter .jks-hero__content {
    animation: none;
  }
}

@media (max-width: 700px) {
  .jks-hero {
    min-height: 455px;
  }

  .jks-hero__bg {
    background-position: 56% center;
  }

  .jks-hero__overlay {
    background: linear-gradient(180deg, rgba(54, 65, 79, 0.76) 0%, rgba(73, 86, 101, 0.68) 56%, rgba(45, 55, 68, 0.8) 100%);
  }

  .jks-hero__content {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .jks-hero__title {
    font-size: clamp(1.9rem, 9vw, 2.5rem);
  }
}
</style>
