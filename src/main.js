import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import './styles/modern.css'

document.body.classList.add(
  'jks-legacy-site',
  'elementor-default',
  'elementor-kit-7',
  'theme-immigway',
  'wp-theme-immigway',
  'bd-px-header--default',
)
document.body.classList.add('jks-theme-ircc-home')

createApp(App).use(router).mount('#app')
