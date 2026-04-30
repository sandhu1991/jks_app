<script setup>
import { onMounted, onUnmounted } from 'vue'
import ServicePageSidebar from '@/components/layout/ServicePageSidebar.vue'

const props = defineProps({
  /** `no-sidebar`: Elementor-style pages (home, about, contact, …). `sidebar-right`: service topic posts + sidebar. */
  variant: {
    type: String,
    default: 'no-sidebar',
    validator: (v) => v === 'no-sidebar' || v === 'sidebar-right',
  },
  /**
   * Home uses full-bleed sections; theme only pads `#pxl-main > .elementor-container` below 1024px.
   * Other no-sidebar pages need horizontal padding at all breakpoints — set fullBleed on Home only.
   */
  fullBleed: { type: Boolean, default: false },
})

const ELEMENTOR_BODY = ['elementor-page']
const POST_BODY = ['single-post', 'single', 'post-template-default']

function syncBody() {
  const other = props.variant === 'sidebar-right' ? ELEMENTOR_BODY : POST_BODY
  const active = props.variant === 'sidebar-right' ? POST_BODY : ELEMENTOR_BODY
  other.forEach((c) => document.body.classList.remove(c))
  active.forEach((c) => document.body.classList.add(c))
}

function clearBody() {
  ELEMENTOR_BODY.concat(POST_BODY).forEach((c) => document.body.classList.remove(c))
}

onMounted(() => syncBody())
onUnmounted(() => clearBody())
</script>

<template>
  <div
    id="pxl-main"
    class="legacy-page-shell"
    :class="{ 'legacy-page-shell--full-bleed': fullBleed && variant === 'no-sidebar' }"
  >
    <template v-if="variant === 'sidebar-right'">
      <div class="container">
        <div class="row pxl-content-wrap pxl-has-sidebar pxl-sidebar-right">
          <div id="pxl-content-area" class="pxl-content-area pxl-content-post col-12 col-lg-8">
            <div id="pxl-content-main">
              <slot />
            </div>
          </div>
          <ServicePageSidebar />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="elementor-container">
        <div class="row pxl-content-wrap no-sidebar">
          <div id="pxl-content-area" class="pxl-content-area pxl-content-page col-12">
            <div id="pxl-content-main">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
