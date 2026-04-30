<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { destroyLegacySwipers, initLegacySwipers } from '@/lib/initLegacySwipers.js'

const props = defineProps({
  html: { type: String, default: '' },
})

const router = useRouter()
const swiperRoot = ref(null)

const serviceTopicPath = /^\/(immigration|visas|other)\/[\w-]+\/?$/
const serviceHubPath = /^\/(immigration|visas|other)\/?$/

function isInternalPath(pathname) {
  if (pathname === '/' || pathname === '/about' || pathname === '/contact' || pathname === '/faq') return true
  if (pathname === '/legal/terms' || pathname === '/legal/privacy' || pathname === '/legal/cookies') return true
  if (serviceHubPath.test(pathname)) return true
  return serviceTopicPath.test(pathname)
}

function onClickCapture(e) {
  const a = e.target.closest?.('a[href]')
  if (!a) return
  if (a.target === '_blank' || a.getAttribute('download')) return
  const raw = a.getAttribute('href')
  if (!raw || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) return
  if (raw === '#' || (raw.startsWith('#') && !raw.includes('/'))) return

  let url
  try {
    url = new URL(raw, window.location.origin)
  } catch {
    return
  }
  if (url.origin !== window.location.origin) return
  const pathname = (url.pathname || '/').replace(/\/+$/, '') || '/'
  if (!isInternalPath(pathname)) return

  e.preventDefault()
  router.push(url.pathname + url.search + url.hash)
}

watch(
  () => props.html,
  () => {
    if (swiperRoot.value) destroyLegacySwipers(swiperRoot.value)
  },
  { flush: 'sync' },
)

watch(
  () => props.html,
  async (html) => {
    await nextTick()
    if (html && swiperRoot.value) initLegacySwipers(swiperRoot.value)
  },
  { flush: 'post', immediate: true },
)

onBeforeUnmount(() => {
  if (swiperRoot.value) destroyLegacySwipers(swiperRoot.value)
})
</script>

<template>
  <div
    v-if="props.html"
    ref="swiperRoot"
    class="static-page-content"
    @click.capture="onClickCapture"
    v-html="props.html"
  />
  <div v-else class="static-page-content static-page-content--empty" role="status">
    <p>This section did not load. Try running <code>npm run extract-static</code> from the project root.</p>
  </div>
</template>

<style>
.static-page-content {
  min-height: 1px;
}
.static-page-content--empty {
  padding: 2rem 1.25rem;
  max-width: 40rem;
  margin: 0 auto;
  color: #555;
}
.static-page-content--empty code {
  font-size: 0.88em;
  background: #f0f4f8;
  padding: 0.15em 0.4em;
  border-radius: 4px;
}
</style>
