<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Nav from '@/components/layout/Nav.vue'
import SiteTopBar from '@/components/layout/SiteTopBar.vue'

const route = useRoute()
const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false
  },
)

watch(mobileMenuOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

function onKeydown(e) {
  if (e.key === 'Escape') closeMobileMenu()
}

function onResize() {
  if (typeof window === 'undefined') return
  if (!window.matchMedia('(max-width: 900px)').matches) {
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="header">
    <SiteTopBar :drawer-open="mobileMenuOpen" @toggle-nav="toggleMobileMenu" />
    <div class="header__nav-band">
      <div class="header__nav-inner">
        <Nav :drawer-open="mobileMenuOpen" @close-drawer="closeMobileMenu" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--jks-secondary, #1a1a1a);
  color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
}
.header__nav-band {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.header__nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.1rem 1.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .header__nav-band {
    border-top: none;
  }
  .header__nav-inner {
    padding: 0;
    min-height: 0;
    overflow: visible;
  }
}
</style>
