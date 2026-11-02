<script setup>
import { RouterLink } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import { publicProgramOrder, publicPrograms } from '@/config/programs.js'

const countActivePathways = (items = []) => items.reduce((count, item) => {
  const ownCount = item.status === 'Active' ? 1 : 0
  return count + ownCount + countActivePathways(item.substreams)
}, 0)

const programGroups = publicProgramOrder.map((slug) => {
  const program = publicPrograms[slug]
  const activeCount = countActivePathways(program.streams)
  return {
    ...program,
    to: `/programs/${slug}`,
    count: `${activeCount} ${activeCount === 1 ? 'Pathway' : 'Pathways'}`,
    description: slug === 'federal'
      ? 'Explore federal pathways for permanent residence, temporary work, study, family sponsorship, citizenship and more.'
      : `Explore official ${program.jurisdiction} immigration pathways, program status and government information.`,
  }
})
</script>

<template>
  <div class="jks-modern-page programs-page">
    <PageHero
      kicker="Immigration programs"
      title="Immigration programs in Canada"
      lead="Find official information about federal, provincial and territorial immigration pathways."
      :breadcrumbs="[{ label: 'Immigration programs' }]"
    />

    <section class="jks-section"><div class="jks-container">
        <div class="programs-heading"><div><p class="jks-kicker">Program directory</p><h2 class="jks-heading">Explore Canadian immigration pathways</h2></div></div>
      <div class="programs-grid">
        <RouterLink v-for="program in programGroups" :key="program.code" :to="program.to" class="program-card jks-card">
          <div class="program-card__top"><span>{{ program.jurisdiction }}</span><b>{{ program.code }}</b></div>
          <h3>{{ program.name }}</h3><p>{{ program.description }}</p>
          <div class="program-card__bottom"><span>{{ program.count }}</span><strong aria-label="Explore program">→</strong></div>
        </RouterLink>
      </div>
    </div></section>

  </div>
</template>

<style scoped>
.programs-heading { display:flex; align-items:end; justify-content:space-between; gap:1.5rem; margin-bottom:1.6rem; }.programs-heading .jks-heading { margin:0; }.programs-heading > p { max-width:19rem; margin:0; color:var(--jks-muted); line-height:1.55; font-size:.93rem; }.programs-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1.25rem; }.program-card { position:relative; display:flex; min-height:240px; overflow:hidden; flex-direction:column; padding:1.6rem; color:inherit; text-decoration:none; transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s ease,border-color .35s ease,background .35s ease; }.program-card::before { position:absolute; top:0; bottom:0; left:0; width:4px; border-radius:var(--jks-radius) 0 0 var(--jks-radius); background:linear-gradient(180deg,var(--jks-brand) 0%,var(--jks-navy) 100%); content:''; transform:scaleY(0); transform-origin:center top; transition:transform .4s cubic-bezier(.22,1,.36,1); }.program-card::after { position:absolute; inset:0; background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.55) 50%,transparent 60%); content:''; pointer-events:none; transform:translateX(-120%); transition:transform .65s ease; }.program-card:hover { border-color:rgba(185,28,28,.32); box-shadow:0 16px 40px rgba(30,58,95,.14),0 0 0 1px rgba(185,28,28,.08); background:linear-gradient(145deg,#fff 0%,#fff9f9 45%,#f6f8fb 100%); transform:translateY(-8px) scale(1.015); }.program-card:hover::before { transform:scaleY(1); }.program-card:hover::after { transform:translateX(120%); }.program-card__top,.program-card__bottom { display:flex; align-items:center; justify-content:space-between; gap:.75rem; }.program-card__top span { color:var(--jks-muted); font-size:.75rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; }.program-card__top b { padding:.25rem .48rem; border-radius:5px; background:var(--jks-brand); color:#fff; font-size:.72rem; letter-spacing:.07em; }.program-card h3 { margin:1.5rem 0 .35rem; color:var(--jks-ink); font-size:1.08rem; font-weight:600; line-height:1.35; transition:color .25s ease; }.program-card:hover h3 { color:var(--jks-navy); }.program-card p { margin:0; color:var(--jks-muted); font-size:.88rem; line-height:1.55; transition:color .25s ease; }.program-card:hover p { color:var(--jks-ink); }.program-card__bottom { justify-content:flex-end; gap:.35rem; margin-top:auto; padding-top:1.5rem; color:var(--jks-brand); font-size:.85rem; font-weight:700; }.program-card__bottom strong { display:inline-flex; align-items:center; color:var(--jks-brand); font-size:1.25rem; line-height:1; }.programs-notice { display:flex; align-items:center; justify-content:space-between; gap:2rem; padding:2rem; border-radius:var(--jks-radius-lg); background:var(--jks-navy); color:#fff; }.programs-notice .jks-kicker { color:rgba(255,255,255,.65); }.programs-notice h2 { margin:0 0 .65rem; font-size:clamp(1.25rem,2.5vw,1.6rem); }.programs-notice p { max-width:720px; margin:0; color:rgba(255,255,255,.8); line-height:1.6; }@media (prefers-reduced-motion:reduce) { .program-card,.program-card::before,.program-card::after { transition:none; }.program-card:hover { transform:none; }.program-card:hover::after { transform:translateX(-120%); } }@media (max-width:680px) { .programs-heading,.programs-notice { align-items:flex-start; flex-direction:column; }.programs-grid { grid-template-columns:1fr; } }
</style>
