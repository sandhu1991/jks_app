<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  /** Mobile slide-out menu open (controlled by Header + burger). */
  drawerOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['close-drawer'])

const immigration = [
  { to: '/immigration/express-entry', label: 'Express Entry' },
  { to: '/immigration/business-immigration', label: 'Business Immigration' },
  { to: '/immigration/family-and-spousal-immigration', label: 'Family & Spousal Sponsorship' },
  { to: '/immigration/provincial-nomination-programs', label: 'Provincial Nominee Programs' },
]
const visas = [
  { to: '/visas/tourist-visa', label: 'Tourist & Visitor Visa' },
  { to: '/visas/work-visa', label: 'Work in Canada' },
  { to: '/visas/study-visa', label: 'Study in Canada' },
  { to: '/visas/super-visa', label: 'Super Visa' },
]
const other = [
  { to: '/other/pr-card', label: 'PR Card Renewal' },
  { to: '/other/canadian-citizenship', label: 'Canadian Citizenship' },
  { to: '/other/study-work-permit-extension', label: 'Study–Work Permit Extensions' },
]

const navRef = ref(null)
/** Which mega panel is open (hover or tap); null = closed */
const activeMega = ref(null)
let leaveTimer = null

function isMobileNav() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
}

function clearLeaveTimer() {
  if (leaveTimer != null) {
    clearTimeout(leaveTimer)
    leaveTimer = null
  }
}

function openMega(key) {
  clearLeaveTimer()
  activeMega.value = key
}

function scheduleCloseMega() {
  if (isMobileNav()) return
  clearLeaveTimer()
  leaveTimer = window.setTimeout(() => {
    activeMega.value = null
    leaveTimer = null
  }, 160)
}

function closeMega() {
  clearLeaveTimer()
  activeMega.value = null
}

/** Toggle dropdown; no navigation on the trigger (button only). */
function onMegaTriggerAll(e, key) {
  e.preventDefault()
  clearLeaveTimer()
  activeMega.value = activeMega.value === key ? null : key
}

/**
 * Only dismiss mega panels when pressing outside mega columns.
 * Do not run closeMega() on pointerdown inside a dropdown link — capture runs before
 * the click reaches router-link and v-show would hide the panel before navigation.
 */
function onDocPointerDown(e) {
  if (e.target.closest?.('.nav__backdrop')) {
    emit('close-drawer')
    closeMega()
    return
  }
  if (!navRef.value?.contains(e.target)) {
    closeMega()
    if (isMobileNav()) emit('close-drawer')
    return
  }
  if (!e.target.closest?.('.nav__mega')) {
    closeMega()
  }
}

function onRootClickCapture(e) {
  if (!isMobileNav() || !props.drawerOpen) return
  const link = e.target.closest?.('a[href]')
  if (!link || !navRef.value?.contains(link)) return
  emit('close-drawer')
  deferCloseMega()
}

function deferCloseMega() {
  nextTick(() => closeMega())
}

onMounted(() => {
  document.addEventListener('pointerdown', onDocPointerDown, true)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', onDocPointerDown, true)
  clearLeaveTimer()
})
</script>

<template>
  <nav
    id="jks-main-nav"
    ref="navRef"
    class="nav"
    :class="{ 'nav--drawer-open': drawerOpen }"
    aria-label="Main"
  >
    <button
      v-show="drawerOpen"
      type="button"
      class="nav__backdrop"
      aria-label="Close menu"
      tabindex="-1"
      @click="emit('close-drawer')"
    />
    <ul class="nav__root" @click.capture="onRootClickCapture">
      <li class="nav__item">
        <router-link to="/" class="nav__link">Home</router-link>
      </li>
      <li
        class="nav__mega"
        @mouseenter="!isMobileNav() && openMega('immigration')"
        @mouseleave="!isMobileNav() && scheduleCloseMega()"
      >
        <button
          id="nav-trigger-immigration"
          type="button"
          class="nav__mega-trigger nav__link"
          :class="{ 'nav__mega-trigger--open': activeMega === 'immigration' }"
          :aria-expanded="activeMega === 'immigration'"
          aria-haspopup="true"
          aria-controls="nav-panel-immigration"
          @click="onMegaTriggerAll($event, 'immigration')"
        >
          <span class="nav__mega-label">Immigrate</span>
          <span class="nav__chevron" aria-hidden="true" />
        </button>
        <div
          id="nav-panel-immigration"
          v-show="activeMega === 'immigration'"
          class="nav__dropdown"
          role="menu"
          aria-labelledby="nav-trigger-immigration"
        >
          <p class="nav__dropdown-kicker">Immigration pathways</p>
          <ul>
            <li v-for="item in immigration" :key="item.to">
              <router-link :to="item.to" class="nav__dropdown-link" @click="deferCloseMega">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li
        class="nav__mega"
        @mouseenter="!isMobileNav() && openMega('visas')"
        @mouseleave="!isMobileNav() && scheduleCloseMega()"
      >
        <button
          id="nav-trigger-visas"
          type="button"
          class="nav__mega-trigger nav__link"
          :class="{ 'nav__mega-trigger--open': activeMega === 'visas' }"
          :aria-expanded="activeMega === 'visas'"
          aria-haspopup="true"
          aria-controls="nav-panel-visas"
          @click="onMegaTriggerAll($event, 'visas')"
        >
          <span class="nav__mega-label">Visas</span>
          <span class="nav__chevron" aria-hidden="true" />
        </button>
        <div
          id="nav-panel-visas"
          v-show="activeMega === 'visas'"
          class="nav__dropdown"
          role="menu"
          aria-labelledby="nav-trigger-visas"
        >
          <p class="nav__dropdown-kicker">Visa options</p>
          <ul>
            <li v-for="item in visas" :key="item.to">
              <router-link :to="item.to" class="nav__dropdown-link" @click="deferCloseMega">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li
        class="nav__mega"
        @mouseenter="!isMobileNav() && openMega('other')"
        @mouseleave="!isMobileNav() && scheduleCloseMega()"
      >
        <button
          id="nav-trigger-other"
          type="button"
          class="nav__mega-trigger nav__link"
          :class="{ 'nav__mega-trigger--open': activeMega === 'other' }"
          :aria-expanded="activeMega === 'other'"
          aria-haspopup="true"
          aria-controls="nav-panel-other"
          @click="onMegaTriggerAll($event, 'other')"
        >
          <span class="nav__mega-label">Other Services</span>
          <span class="nav__chevron" aria-hidden="true" />
        </button>
        <div
          id="nav-panel-other"
          v-show="activeMega === 'other'"
          class="nav__dropdown"
          role="menu"
          aria-labelledby="nav-trigger-other"
        >
          <p class="nav__dropdown-kicker">More support</p>
          <ul>
            <li v-for="item in other" :key="item.to">
              <router-link :to="item.to" class="nav__dropdown-link" @click="deferCloseMega">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav__item">
        <router-link to="/about" class="nav__link">About</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/contact" class="nav__link">Contact Us</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  width: 100%;
}

.nav__backdrop {
  display: none;
}

.nav__root {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.15rem 0.35rem;
}

.nav__item,
.nav__mega {
  position: relative;
}

.nav__mega::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 0.75rem;
  z-index: 48;
}

.nav__link,
.nav__mega-trigger {
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  font-family: 'Rubik', system-ui, sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.45rem 0.65rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

button.nav__mega-trigger {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  font: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: inherit;
}

.nav__item .nav__link:hover,
.nav__item .nav__link.router-link-active {
  color: #ffb4b9;
  background: rgba(255, 255, 255, 0.08);
}

.nav__mega-trigger {
  cursor: pointer;
  line-height: 1;
}

.nav__mega-label {
  white-space: nowrap;
  line-height: 1;
  display: inline-flex;
  align-items: center;
}

.nav__chevron {
  flex-shrink: 0;
  display: block;
  box-sizing: border-box;
  width: 0.45em;
  height: 0.45em;
  margin: -7px 0 0;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  /* Border “L” rotated 45°: flex centers the box, not the glyph — nudge for optical vertical align with label */
  transform: translateY(0.1em) rotate(45deg);
  opacity: 0.85;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav__mega-trigger:hover,
.nav__mega-trigger--open {
  color: #fff;
  background: rgba(218, 41, 28, 0.35);
}

.nav__mega-trigger--open .nav__chevron {
  opacity: 1;
  transform: translateY(0.1em) rotate(45deg) scale(1.05);
}

.nav__dropdown {
  position: absolute;
  top: calc(100% + 0.35rem);
  left: 0;
  min-width: 17rem;
  max-width: min(22rem, calc(100vw - 2rem));
  z-index: 50;
  padding: 0;
  margin: 0;
  background: #fff;
  color: #1a1a1a;
  border-radius: 12px;
  border: 1px solid rgba(26, 26, 26, 0.08);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.06),
    0 18px 38px -8px rgba(26, 26, 26, 0.18);
  overflow: hidden;
  animation: navDrop 0.18s ease;
}

@keyframes navDrop {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav__dropdown::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 1.35rem;
  width: 0;
  height: 0;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 8px solid #fff;
  filter: drop-shadow(0 -1px 0 rgba(26, 26, 26, 0.06));
}

.nav__dropdown-kicker {
  margin: 0;
  padding: 0.65rem 1rem 0.4rem;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(26, 26, 26, 0.45);
  border-bottom: 1px solid rgba(26, 26, 26, 0.08);
  background: linear-gradient(180deg, rgba(218, 41, 28, 0.08) 0%, transparent 100%);
}

.nav__dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0.35rem 0.4rem 0.5rem;
}

.nav__dropdown li {
  margin: 0;
  border-radius: 8px;
}

.nav__dropdown-link {
  display: block;
  padding: 0.55rem 0.75rem;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.35;
  text-decoration: none;
  border-radius: 8px;
  transition:
    background 0.12s ease,
    color 0.12s ease;
}

.nav__dropdown-link:hover {
  background: rgba(218, 41, 28, 0.12);
  color: #6b1218;
}

.nav__dropdown-link.router-link-active {
  background: rgba(218, 41, 28, 0.16);
  color: #da291c;
  font-weight: 600;
}

@media (max-width: 900px) {
  .nav__backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 10040;
    margin: 0;
    padding: 0;
    border: none;
    background: rgba(10, 12, 18, 0.52);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .nav .nav__root {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: min(22rem, 92vw);
    height: 100vh;
    height: 100dvh;
    z-index: 10041;
    margin: 0;
    padding: 4.75rem 1rem 1.5rem;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0.2rem;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background: linear-gradient(180deg, #1f2329 0%, #12161c 100%);
    box-shadow: -12px 0 40px rgba(0, 0, 0, 0.35);
    border-left: 1px solid rgba(255, 255, 255, 0.06);
  }

  .nav.nav--drawer-open .nav__root {
    display: flex !important;
  }

  .nav__mega::after {
    display: none;
  }

  .nav__dropdown {
    position: static;
    min-width: unset;
    max-width: none;
    width: 100%;
    margin-top: 0.35rem;
    margin-bottom: 0.25rem;
    border-radius: 10px;
    animation: none;
  }

  .nav__dropdown::before {
    display: none;
  }

  .nav__dropdown-kicker {
    padding-top: 0.5rem;
    border-left: 3px solid #da291c;
  }

  .nav__link,
  .nav__mega-trigger {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
