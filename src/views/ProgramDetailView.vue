<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import ProgramTreeItem from '@/components/programs/ProgramTreeItem.vue'
import { federalProgram, publicPrograms } from '@/config/programs.js'

const route = useRoute()
const program = computed(() => publicPrograms[route.params.provider] ?? federalProgram)

</script>

<template>
  <div class="jks-modern-page program-detail">
    <PageHero
      :title="program.name"
      :lead="program.intro"
      :breadcrumbs="[{ label: 'Immigration programs', to: '/programs' }, { label: program.jurisdiction }]"
    />

    <section class="jks-section jks-section--muted">
      <div class="jks-container">
        <div class="program-detail__heading">
          <div>
            <p class="jks-kicker">Official resources</p>
            <h2 class="jks-heading">Current information from {{ program.jurisdiction }}</h2>
          </div>
          <a class="jks-btn jks-btn--primary" :href="program.officialUrl" target="_blank" rel="noopener noreferrer">Official Site ↗</a>
        </div>
        <div class="program-detail__info" :class="{ 'program-detail__info--single': !program.drawUrl }">
          <a :href="program.officialUrl" target="_blank" rel="noopener noreferrer">
            <span>Official program page</span>
            <strong>Visit {{ program.name }}</strong>
            <small>View current program information and application guidance ↗</small>
          </a>
          <a v-if="program.drawUrl" :href="program.drawUrl" target="_blank" rel="noopener noreferrer">
            <span>Official source</span>
            <strong>{{ program.drawTitle }}</strong>
            <small>{{ program.drawDescription }} ↗</small>
          </a>
        </div>
      </div>
    </section>

    <section class="jks-section program-detail__streams-section">
      <div class="jks-container">
        <div class="program-detail__heading">
          <div>
            <p class="jks-kicker">Program pathways</p>
            <h2 class="jks-heading">Programs and streams</h2>
          </div>
          <p class="program-detail__verified">Information reviewed: {{ program.lastVerified }}</p>
        </div>

        <div class="program-detail__directory">
          <article v-for="stream in program.streams" :key="stream.name" class="program-detail__stream jks-card">
            <div class="program-detail__stream-main">
              <span :class="`program-detail__status program-detail__status--${stream.status.toLowerCase()}`">{{ stream.status }}</span>
              <div class="program-detail__stream-content">
                <h3>{{ stream.name }}</h3>
                <p>{{ stream.summary }}</p>
              </div>
              <a
                v-if="!['deprecated', 'closed', 'superseded'].includes(stream.status.toLowerCase()) && stream.url"
                :href="stream.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Page <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div v-if="stream.substreams?.length" class="program-detail__pathways">
              <p>Pathways</p>
              <ul class="program-tree">
                <ProgramTreeItem
                  v-for="substream in stream.substreams"
                  :key="substream.name"
                  :item="substream"
                />
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.program-detail__heading { display:flex; align-items:end; justify-content:space-between; gap:1.5rem; }
.program-detail__heading .jks-heading { margin:0; }
.program-detail__info { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1rem; margin-top:2rem; }
.program-detail__info--single { grid-template-columns:1fr; }
.program-detail__info a { display:grid; gap:.4rem; padding:1.35rem; border:1px solid var(--jks-border); border-left:4px solid var(--jks-brand); border-radius:var(--jks-radius); background:#fff; color:inherit; text-decoration:none; transition:transform .15s ease,box-shadow .15s ease; }
.program-detail__info a:hover { transform:translateY(-2px); box-shadow:var(--jks-shadow); }
.program-detail__info span,.program-detail__verified { color:var(--jks-muted); font-size:.75rem; letter-spacing:.08em; text-transform:uppercase; }
.program-detail__info strong { color:var(--jks-navy); }
.program-detail__info small { color:var(--jks-muted); font-size:.88rem; line-height:1.5; }
.program-detail__verified { margin:0; white-space:nowrap; }
.program-detail__streams-section { padding-bottom:2rem; }
.program-detail__directory { display:grid; gap:.85rem; margin-top:1.5rem; }
.program-detail__stream { overflow:hidden; padding:0; }
.program-detail__stream-main { display:grid; grid-template-columns:110px minmax(0,1fr) max-content; align-items:center; gap:1.25rem; padding:1.25rem 1.4rem; }
.program-detail__status { justify-self:start; padding:.22rem .48rem; border-radius:999px; background:#e7f4ea; color:#22633a; font-size:.72rem; font-weight:700; }
.program-detail__status--closed { background:#fce8e8; color:#a22828; }
.program-detail__status--deprecated { background:#f5ece6; color:#8b4a22; }
.program-detail__status--superseded { background:#edf0f4; color:#536170; }
.program-detail__stream-content h3 { margin:0; color:var(--jks-navy); font-size:1.08rem; line-height:1.3; }
.program-detail__stream-content p { margin:.35rem 0 0; color:var(--jks-muted); font-size:.91rem; line-height:1.55; }
.program-detail__stream-main > a { color:var(--jks-brand); font-size:.88rem; font-weight:700; text-decoration:none; white-space:nowrap; }
.program-detail__stream-main > a:hover { text-decoration:underline; }
.program-detail__pathways { border-top:1px solid var(--jks-border); background:#fbfcfe; }
.program-detail__pathways > p { margin:0; padding:1rem 1.4rem 0 8.9rem; color:var(--jks-brand); font-size:.67rem; font-weight:700; letter-spacing:.09em; text-transform:uppercase; }
.program-detail__pathways :deep(> .program-tree) { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:.75rem; padding:1.1rem 1.4rem 1.2rem 8.9rem; }
.program-detail__pathways :deep(> .program-tree > .program-tree__item) { padding:.85rem .9rem; border:1px solid var(--jks-border); border-radius:.55rem; background:#fff; box-shadow:0 2px 8px rgba(30,58,95,.035); }
.program-tree { margin:0; padding:0; list-style:none; }
@media (max-width:1050px) { .program-detail__pathways :deep(> .program-tree) { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (max-width:780px) {
  .program-detail__heading { align-items:flex-start; flex-direction:column; }
  .program-detail__info { grid-template-columns:1fr; }
  .program-detail__verified { white-space:normal; }
  .program-detail__stream-main { grid-template-columns:1fr; gap:.55rem; }
  .program-detail__pathways :deep(> .program-tree) { padding:1rem 1.25rem 1.1rem; }
  .program-detail__pathways > p { padding:1rem 1.25rem 0; }
  .program-detail__pathways :deep(> .program-tree) { grid-template-columns:1fr; }
}
</style>
