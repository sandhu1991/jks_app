<script setup>
import { ref } from 'vue'

const submitted = ref(false)
const error = ref('')

function onSubmit(e) {
  error.value = ''
  const form = e.target
  const name = form.querySelector('[name="name-1"]')?.value?.trim() ?? ''
  const email = form.querySelector('[name="email-1"]')?.value?.trim() ?? ''
  const phone = form.querySelector('[name="phone-1"]')?.value?.trim() ?? ''
  const message = form.querySelector('[name="textarea-1"]')?.value?.trim() ?? ''

  if (!name || !email) {
    error.value = 'Please enter your name and email address.'
    return
  }

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    '',
    message || '(No message)',
  ]
    .filter(Boolean)
    .join('\n')

  const subject = encodeURIComponent('Website inquiry')
  const mail = `mailto:jksimmigration@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
  window.location.href = mail
  submitted.value = true
}
</script>

<template>
  <form
    id="forminator-module-4879"
    class="forminator-ui forminator-custom-form forminator-custom-form-4879 forminator-design--default"
    method="get"
    action="#"
    data-design="default"
    data-grid="open"
    @submit.prevent="onSubmit"
  >
    <div
      v-if="error"
      role="alert"
      class="forminator-response-message forminator-error"
      style="display: block; margin-bottom: 1rem"
    >
      {{ error }}
    </div>
    <div
      v-if="submitted"
      role="status"
      class="forminator-response-message forminator-success"
      style="display: block; margin-bottom: 1rem"
    >
      If your mail app did not open, email us at
      <a href="mailto:jksimmigration@gmail.com">jksimmigration@gmail.com</a>.
    </div>
    <div class="forminator-row">
      <div id="name-1" class="forminator-field-name forminator-col forminator-col-12">
        <div class="forminator-field">
          <label for="jks-form-name" class="forminator-label"
            >First name <span class="forminator-required">*</span></label
          >
          <input
            id="jks-form-name"
            type="text"
            name="name-1"
            class="forminator-input forminator-name--field"
            placeholder="E.g. John"
            autocomplete="name"
            required
          />
        </div>
      </div>
    </div>
    <div class="forminator-row">
      <div id="email-1" class="forminator-field-email forminator-col forminator-col-12">
        <div class="forminator-field">
          <label for="jks-form-email" class="forminator-label"
            >Email address <span class="forminator-required">*</span></label
          >
          <input
            id="jks-form-email"
            type="email"
            name="email-1"
            class="forminator-input forminator-email--field"
            placeholder="E.g. john@example.com"
            autocomplete="email"
            required
          />
        </div>
      </div>
    </div>
    <div class="forminator-row">
      <div id="phone-1" class="forminator-field-phone forminator-col forminator-col-12">
        <div class="forminator-field">
          <label for="jks-form-phone" class="forminator-label">Phone number</label>
          <input
            id="jks-form-phone"
            type="text"
            name="phone-1"
            class="forminator-input forminator-field--phone"
            placeholder="E.g. +1 514 706 0130"
            autocomplete="tel"
          />
        </div>
      </div>
    </div>
    <div class="forminator-row">
      <div id="textarea-1" class="forminator-field-textarea forminator-col forminator-col-12">
        <div class="forminator-field">
          <label for="jks-form-message" class="forminator-label">Message</label>
          <textarea
            id="jks-form-message"
            name="textarea-1"
            class="forminator-textarea"
            rows="6"
            style="min-height: 140px"
            maxlength="180"
            placeholder="Enter your message…"
          />
        </div>
      </div>
    </div>
    <div class="forminator-row forminator-row-last">
      <div class="forminator-col">
        <div class="forminator-field">
          <button type="submit" class="forminator-button forminator-button-submit">Send message</button>
        </div>
      </div>
    </div>
  </form>
</template>
