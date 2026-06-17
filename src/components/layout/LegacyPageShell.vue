<script setup>
import { onMounted, onUnmounted } from 'vue'

const ELEMENTOR_BODY = ['elementor-page']
const POST_BODY = ['single-post', 'single', 'post-template-default']

function syncBody() {
  POST_BODY.forEach((c) => document.body.classList.remove(c))
  ELEMENTOR_BODY.forEach((c) => document.body.classList.add(c))
}

function clearBody() {
  ELEMENTOR_BODY.concat(POST_BODY).forEach((c) => document.body.classList.remove(c))
}

onMounted(() => syncBody())
onUnmounted(() => clearBody())
</script>

<template>
  <div id="pxl-main" class="legacy-page-shell">
    <div class="elementor-container">
      <div class="row pxl-content-wrap no-sidebar">
        <div id="pxl-content-area" class="pxl-content-area pxl-content-page col-12">
          <div id="pxl-content-main">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
