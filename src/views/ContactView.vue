<script setup>
import StaticPageContent from '@/components/content/StaticPageContent.vue'
import ContactLeadForm from '@/components/content/ContactLeadForm.vue'
import LegacyPageShell from '@/components/layout/LegacyPageShell.vue'
import { getStaticPageHtml } from '@/content/staticPages.js'

const raw = getStaticPageHtml('contact-us.html')
const hasFormMount = raw.includes('jks-contact-form-mount')
</script>

<template>
  <LegacyPageShell>
    <template v-if="hasFormMount">
      <StaticPageContent :html="raw" />
      <Teleport defer to="#jks-contact-form-mount">
        <div
          class="elementor-element elementor-element-f9cbae5 elementor-widget elementor-widget-shortcode jks-contact-form-widget"
          data-id="f9cbae5"
          data-element_type="widget"
          data-e-type="widget"
          data-widget_type="shortcode.default"
        >
          <div class="elementor-widget-container">
            <div class="elementor-shortcode">
              <ContactLeadForm />
            </div>
          </div>
        </div>
      </Teleport>
    </template>
    <StaticPageContent v-else :html="raw" />
  </LegacyPageShell>
</template>
