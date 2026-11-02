<script setup>
defineOptions({ name: 'ProgramTreeItem' })

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <li class="program-tree__item">
    <div class="program-tree__row">
      <a
        v-if="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ item.name }} <span aria-hidden="true">↗</span>
      </a>
      <span v-else>{{ item.name }}</span>
      <span
        v-if="item.status"
        :class="`program-tree__status program-tree__status--${item.status.toLowerCase()}`"
      >
        {{ item.status }}
      </span>
    </div>
    <p v-if="item.summary">{{ item.summary }}</p>
    <ul v-if="item.substreams?.length" class="program-tree">
      <ProgramTreeItem
        v-for="substream in item.substreams"
        :key="substream.name"
        :item="substream"
      />
    </ul>
  </li>
</template>

<style scoped>
.program-tree { display:grid; gap:.65rem; margin:.75rem 0 0; padding:0 0 0 .9rem; border-left:1px solid var(--jks-border); list-style:none; }
.program-tree__item { min-width:0; }
.program-tree__row { display:flex; align-items:flex-start; justify-content:space-between; gap:.7rem; color:var(--jks-navy); font-size:.86rem; font-weight:700; line-height:1.35; }
.program-tree__row > a { color:inherit; text-decoration:none; }
.program-tree__row > a:hover { color:var(--jks-brand); text-decoration:underline; }
.program-tree__row > a span { color:var(--jks-brand); }
.program-tree__item > p { margin:.22rem 0 0; color:var(--jks-muted); font-size:.8rem; line-height:1.45; }
.program-tree__status { flex:0 0 auto; padding:.14rem .38rem; border-radius:999px; background:#e7f4ea; color:#22633a; font-size:.62rem; font-weight:700; line-height:1.2; }
.program-tree__status--closed { background:#fce8e8; color:#a22828; }
.program-tree__status--deprecated { background:#f5ece6; color:#8b4a22; }
.program-tree__status--superseded { background:#edf0f4; color:#536170; }
</style>
