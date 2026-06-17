<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
})

const root = ref(null)
const visible = ref(false)
let observer

onMounted(() => {
  if (typeof window === 'undefined' || !root.value) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    visible.value = true
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
  )
  observer.observe(root.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div
    ref="root"
    class="jks-reveal"
    :class="{ 'jks-reveal--visible': visible }"
    :style="delay ? { transitionDelay: `${delay}ms` } : undefined"
  >
    <slot />
  </div>
</template>
