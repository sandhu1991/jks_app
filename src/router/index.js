import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'JKS Immigration' },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: { title: 'About — JKS Immigration' },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta: { title: 'Contact Us — JKS Immigration' },
      },
      {
        path: 'book',
        name: 'book',
        component: () => import('@/views/BookView.vue'),
        meta: { title: 'Book a Consultation — JKS Immigration' },
      },
      {
        path: 'services/immigration/:slug',
        redirect: (to) => ({ path: `/immigration/${to.params.slug}`, query: to.query, hash: to.hash }),
      },
      {
        path: 'services/visas/:slug',
        redirect: (to) => ({ path: `/visas/${to.params.slug}`, query: to.query, hash: to.hash }),
      },
      {
        path: 'services/other/:slug',
        redirect: (to) => ({ path: `/other/${to.params.slug}`, query: to.query, hash: to.hash }),
      },
      {
        path: 'services',
        name: 'services',
        component: () => import('@/views/ServicesView.vue'),
        meta: { title: 'Services — JKS Immigration' },
      },
      {
        path: 'immigration',
        name: 'immigration-hub',
        component: () => import('@/views/ServicesView.vue'),
        meta: { title: 'Immigrate — JKS Immigration', servicesHub: 'immigration' },
      },
      {
        path: 'immigration/:slug',
        name: 'immigration-topic',
        component: () => import('@/views/ServiceTopicView.vue'),
        meta: { category: 'immigration' },
      },
      {
        path: 'visas',
        name: 'visas-hub',
        component: () => import('@/views/ServicesView.vue'),
        meta: { title: 'Canada Visas — JKS Immigration', servicesHub: 'visas' },
      },
      {
        path: 'visas/:slug',
        name: 'visas-topic',
        component: () => import('@/views/ServiceTopicView.vue'),
        meta: { category: 'visas' },
      },
      {
        path: 'other',
        name: 'other-hub',
        component: () => import('@/views/ServicesView.vue'),
        meta: { title: 'Other Services — JKS Immigration', servicesHub: 'other-services' },
      },
      {
        path: 'other/:slug',
        name: 'other-topic',
        component: () => import('@/views/ServiceTopicView.vue'),
        meta: { category: 'other-services' },
      },
      {
        path: 'legal/terms',
        name: 'terms',
        component: () => import('@/views/LegalPlaceholderView.vue'),
        meta: { title: 'Terms & Conditions — JKS Immigration', heading: 'Terms & Conditions' },
      },
      {
        path: 'legal/privacy',
        name: 'privacy',
        component: () => import('@/views/LegalPlaceholderView.vue'),
        meta: { title: 'Privacy Policy — JKS Immigration', heading: 'Privacy Policy' },
      },
      {
        path: 'legal/cookies',
        name: 'cookies',
        component: () => import('@/views/LegalPlaceholderView.vue'),
        meta: { title: 'Cookie Policy — JKS Immigration', heading: 'Cookie Policy' },
      },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('@/views/LegalPlaceholderView.vue'),
        meta: { title: 'FAQ — JKS Immigration', heading: 'FAQ' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          resolve(el ? { el: to.hash, behavior: 'smooth', top: 72 } : { top: 0 })
        }, 120)
      })
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  document.body.classList.add('jks-theme-ircc-home')
})

export default router
