<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  drawerOpen: { type: Boolean, default: false },
})

defineEmits(['toggle-nav'])

const logoSrc = '/images/wp-content__uploads__2023__11__WhatsApp-Image-2025-06-14-at-6.37.54-PM.jpeg'
</script>

<template>
  <div class="jks-site-topbar elementor elementor-32 elementor-kit-7" data-elementor-type="wp-post" data-elementor-id="32">
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-c69413d elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none"
      data-id="c69413d"
      data-element_type="section"
      data-e-type="section"
      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
    >
      <button
        type="button"
        class="jks-site-topbar__menu-btn"
        :aria-expanded="drawerOpen"
        aria-controls="jks-main-nav"
        aria-label="Menu"
        @click="$emit('toggle-nav')"
      >
        <span class="jks-site-topbar__menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <div class="elementor-container elementor-column-gap-extended">
        <div
          class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d8844c6 pxl-column-none"
          data-id="d8844c6"
          data-element_type="column"
          data-e-type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-3d9edc4 elementor-widget__width-initial elementor-widget-laptop__width-initial elementor-widget elementor-widget-pxl_logo"
              data-id="3d9edc4"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="pxl_logo.default"
            >
              <div class="elementor-widget-container">
                <div class="pxl-logo" data-wow-delay="ms">
                  <RouterLink to="/">
                    <img
                      fetchpriority="high"
                      width="500"
                      height="500"
                      :src="logoSrc"
                      class="attachment-full"
                      alt="JKS Immigration"
                    />
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7c3bb13 pxl-column-none"
          data-id="7c3bb13"
          data-element_type="column"
          data-e-type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated jks-site-topbar__meta">
            <div
              class="elementor-element elementor-element-3d93caf elementor-widget__width-auto elementor-widget elementor-widget-pxl_icon_box"
              data-id="3d93caf"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="pxl_icon_box.default"
            >
              <div class="elementor-widget-container">
                <div class="pxl-icon-box pxl-icon-box5" data-wow-delay="ms">
                  <div class="pxl-item--inner df-row align-center flex-start">
                    <div class="pxl-item--icon pxl-mr-11">
                      <i aria-hidden="true" class="fa-regular fa-envelope"></i>
                    </div>
                    <div class="pxl-item--holder">
                      <h5 class="pxl-item--title el-empty">
                        <a class="jks-site-topbar__mailto" href="mailto:jksimmigration@gmail.com">jksimmigration@gmail.com</a>
                      </h5>
                      <span class="pxl-item--description el-empty">Send us mail</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-22bab2c elementor-widget__width-auto elementor-widget elementor-widget-pxl_icon_box"
              data-id="22bab2c"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="pxl_icon_box.default"
            >
              <div class="elementor-widget-container">
                <div class="pxl-icon-box pxl-icon-box5" data-wow-delay="ms">
                  <div class="pxl-item--inner df-row align-center flex-start">
                    <div class="pxl-item--icon pxl-mr-11">
                      <i aria-hidden="true" class="fa-regular fa-clock"></i>
                    </div>
                    <div class="pxl-item--holder">
                      <h5 class="pxl-item--title el-empty">Mon – Fri 10am – 6pm</h5>
                      <span class="pxl-item--description el-empty">Opening hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-341139e elementor-widget__width-auto elementor-widget elementor-widget-pxl_button"
              data-id="341139e"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="pxl_button.default"
            >
              <div class="elementor-widget-container">
                <div id="pxl-pxl_button-341139e-5881" class="pxl-button" data-wow-delay="ms">
                  <RouterLink to="/contact" class="btn pxl-icon-active btn-nanuk pxl-icon--left" data-wow-delay="ms">
                    <span class="pxl--btn-text">Book appointment</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Explicit palette: parent header uses color:#fff which would hide text on this white strip */
.jks-site-topbar {
  width: 100%;
  color: #1a1a1a;
  --jks-topbar-title: #1a1a1a;
  --jks-topbar-muted: #4a4a4a;
  --jks-topbar-accent: #da291c;
}
.jks-site-topbar :deep(.pxl-icon-box5 .pxl-item--title),
.jks-site-topbar :deep(.pxl-icon-box5 .pxl-item--title a) {
  color: var(--jks-topbar-title);
}
.jks-site-topbar :deep(.pxl-icon-box5 .pxl-item--description) {
  color: var(--jks-topbar-muted);
}
.jks-site-topbar :deep(.pxl-icon-box5 .pxl-item--icon),
.jks-site-topbar :deep(.pxl-icon-box5 .pxl-item--icon i) {
  color: var(--jks-topbar-accent);
}
.jks-site-topbar :deep(.pxl-button .btn) {
  color: var(--jks-topbar-accent);
  border-color: var(--jks-topbar-accent);
}
.jks-site-topbar :deep(.pxl-button .btn:hover) {
  color: #fff;
  background-color: var(--jks-topbar-accent);
  border-color: var(--jks-topbar-accent);
}
.jks-site-topbar :deep(.pxl-logo) {
  line-height: 0;
}
.jks-site-topbar :deep(.pxl-logo a) {
  display: inline-block;
  line-height: 0;
  text-decoration: none;
  transition: opacity 0.2s ease;
}
.jks-site-topbar :deep(.pxl-logo a:hover) {
  opacity: 0.88;
}
.jks-site-topbar :deep(.elementor-element-3d9edc4 .pxl-logo img) {
  display: block;
  width: auto;
  height: auto;
  max-height: 144px !important;
  object-fit: contain;
}
/* Match nav band width and center; cancel stretched-section edge bleed */
.jks-site-topbar :deep(.elementor-section.elementor-section-stretched) {
  width: 100% !important;
  max-width: 100%;
  left: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.jks-site-topbar :deep(.elementor-section.elementor-element-c69413d > .elementor-container) {
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.jks-site-topbar :deep(.elementor-element.elementor-element-d8844c6 > .elementor-widget-wrap) {
  justify-content: flex-start;
}
.jks-site-topbar :deep(.elementor-element.elementor-element-7c3bb13 > .elementor-widget-wrap) {
  justify-content: flex-end;
}
.jks-site-topbar__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem 0.5rem;
}
.jks-site-topbar__mailto {
  color: var(--jks-topbar-title);
  text-decoration: none;
  font-weight: 600;
  font-size: inherit;
}
.jks-site-topbar__mailto:hover {
  color: var(--jks-topbar-accent);
}

.jks-site-topbar :deep(.elementor-section.elementor-element-c69413d) {
  position: relative;
  /* Pull strip tight to nav; theme Elementor sections often add vertical padding */
  padding-top: 0.35rem !important;
  padding-bottom: 0.35rem !important;
  margin-bottom: 0 !important;
}

.jks-site-topbar__menu-btn {
  display: none;
}

@media (max-width: 900px) {
  .jks-site-topbar {
    overflow-x: clip;
  }

  .jks-site-topbar__menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 6;
    width: 2.75rem;
    height: 2.75rem;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(26, 26, 26, 0.12);
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(26, 26, 26, 0.08);
    cursor: pointer;
    color: #1a1a1a;
    transition:
      background 0.15s ease,
      border-color 0.15s ease,
      box-shadow 0.15s ease;
  }

  .jks-site-topbar__menu-btn:hover {
    border-color: rgba(218, 41, 28, 0.35);
    box-shadow: 0 4px 14px rgba(218, 41, 28, 0.12);
  }

  .jks-site-topbar__menu-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 1.15rem;
  }

  .jks-site-topbar__menu-icon span {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background: currentColor;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }

  .jks-site-topbar__menu-btn[aria-expanded='true'] .jks-site-topbar__menu-icon span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .jks-site-topbar__menu-btn[aria-expanded='true'] .jks-site-topbar__menu-icon span:nth-child(2) {
    opacity: 0;
  }

  .jks-site-topbar__menu-btn[aria-expanded='true'] .jks-site-topbar__menu-icon span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .jks-site-topbar :deep(.elementor-element.elementor-element-7c3bb13) {
    display: none !important;
  }

  .jks-site-topbar :deep(.elementor-section.elementor-element-c69413d > .elementor-container) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    min-height: 3.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-right: 3.75rem;
    gap: 0;
  }

  .jks-site-topbar :deep(.elementor-col-50),
  .jks-site-topbar :deep(.elementor-element.elementor-element-d8844c6) {
    width: auto !important;
    max-width: none !important;
    flex: 0 1 auto;
  }

  .jks-site-topbar :deep(.elementor-element.elementor-element-d8844c6 > .elementor-widget-wrap) {
    justify-content: flex-start;
  }

  .jks-site-topbar :deep(.pxl-logo img) {
    max-height: 88px !important;
  }
}
</style>
