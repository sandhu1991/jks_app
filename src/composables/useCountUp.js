import { ref, onMounted, onUnmounted } from 'vue'

/** Ease-out count from 0 → end over duration ms. */
export function useCountUp(end, { duration = 1400, decimals = 0, suffix = '' } = {}) {
  const display = ref(decimals ? (0).toFixed(decimals) + suffix : `0${suffix}`)
  const started = ref(false)
  let observer

  function run() {
    if (started.value) return
    started.value = true

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      display.value = `${decimals ? end.toFixed(decimals) : end}${suffix}`
      return
    }

    const startTime = performance.now()
    function tick(now) {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - t) ** 3
      const current = eased * end
      display.value = `${decimals ? current.toFixed(decimals) : Math.round(current)}${suffix}`
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  function observe(el) {
    if (!el || typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      run()
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          observer?.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
  }

  onUnmounted(() => observer?.disconnect())

  return { display, observe, run }
}
