<script setup>
import { RouterLink } from 'vue-router'
import { site } from '@/config/site.js'
</script>

<template>
  <section class="jks-section jks-section--muted">
    <div class="jks-container">
      <div class="jks-program-directory">
        <div class="jks-program-directory__content">
          <p class="jks-kicker">Program directory</p>
          <h2 class="jks-heading">Explore Canadian immigration programs</h2>
          <p class="jks-program-directory__intro">
            Browse federal, provincial and territorial pathways in one place. See the programs that
            are active, understand their purpose and visit the official government source before you apply.
          </p>
          <ul class="jks-program-directory__points">
            <li><i class="fa-solid fa-check" aria-hidden="true" /> Federal and provincial pathways</li>
            <li><i class="fa-solid fa-check" aria-hidden="true" /> Active and deprecated program status</li>
            <li><i class="fa-solid fa-check" aria-hidden="true" /> Official government links</li>
          </ul>
          <RouterLink to="/programs" class="jks-program-directory__explore">Explore programs <span aria-hidden="true">→</span></RouterLink>
        </div>

        <div class="jks-program-directory__consult">
          <p class="jks-program-directory__consult-label">Need help choosing?</p>
          <h3>Discuss your options with us</h3>
          <p>
            Not sure which program may fit your situation? We will help you understand your options.
          </p>
          <RouterLink to="/book" class="jks-btn jks-btn--primary">{{ site.bookCtaLabel }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jks-program-directory {
  display: grid;
  grid-template-columns: minmax(0, 7.2fr) minmax(13.5rem, 2.8fr);
  gap: clamp(1.25rem, 3vw, 2.25rem);
  align-items: stretch;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border: 1px solid var(--jks-border);
  border-radius: var(--jks-radius-lg);
  background: #fff;
  box-shadow: var(--jks-shadow);
}

.jks-program-directory__intro {
  max-width: 40rem;
  margin: 0 0 1.1rem;
  color: var(--jks-muted);
  line-height: 1.65;
}

.jks-program-directory__points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.25rem;
  margin: 0 0 1.1rem;
  padding: 0;
  list-style: none;
  color: var(--jks-navy);
}

.jks-program-directory__points li {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.45;
}

.jks-program-directory__points i {
  margin-top: 0.18rem;
  color: var(--jks-brand);
  font-size: 0.72rem;
}

.jks-program-directory__explore {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--jks-brand);
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
}

.jks-program-directory__explore:hover {
  text-decoration: underline;
  text-underline-offset: 0.22em;
}

.jks-program-directory__explore span {
  color: var(--jks-brand);
  font-size: 1.1em;
}

.jks-program-directory__consult {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.8rem;
  padding: 1.25rem;
  border-radius: var(--jks-radius);
  background: linear-gradient(145deg, var(--jks-navy) 0%, var(--jks-navy-dark) 100%);
  color: #fff;
}

.jks-program-directory__consult::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background: var(--jks-brand);
}

.jks-program-directory__consult-label {
  margin: 0 !important;
  color: #f9b4b4 !important;
  font-size: 0.68rem !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.jks-program-directory__consult h3 {
  margin: 0.15rem 0 0.2rem;
  color: #fff;
  font-size: 1.25rem;
  line-height: 1.25;
}

.jks-program-directory__consult p {
  max-width: 38rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.55;
}

.jks-program-directory__consult strong {
  color: var(--jks-ink);
}

.jks-program-directory__consult .jks-btn {
  margin-top: auto;
  align-self: center;
}


@media (max-width: 720px) {
  .jks-program-directory {
    grid-template-columns: 1fr;
  }

  .jks-program-directory__points { display: grid; gap: 0.65rem; }

  .jks-program-directory__consult {
    padding: 1.25rem;
  }
}
</style>
