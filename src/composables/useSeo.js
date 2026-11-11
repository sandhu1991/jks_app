import { watchEffect } from 'vue'
import { publicPrograms } from '@/config/programs.js'
import { serviceLabels } from '@/config/serviceLabels.js'
import { getServiceTopic } from '@/config/serviceTopics.js'
import { site } from '@/config/site.js'

const defaultDescription =
  'CICC-licensed Canadian immigration consulting for visas, permanent residence, family sponsorship and citizenship.'

const staticPages = {
  home: {
    title: 'JKS Immigration | Canadian Immigration Guidance',
    description: defaultDescription,
  },
  about: {
    title: 'About JKS Immigration | CICC-Licensed RCIC',
    description: 'Meet JKS Immigration and RCIC Jasmine Kaur. Get clear, regulated guidance for your Canadian immigration application.',
  },
  contact: {
    title: 'Contact JKS Immigration | Vaudreuil-Dorion, Quebec',
    description: 'Contact JKS Immigration to book a Canadian immigration consultation by phone, email, WhatsApp or online.',
  },
  book: {
    title: 'Book a Canadian Immigration Consultation | JKS Immigration',
    description: 'Book an online consultation with JKS Immigration for clear guidance on Canadian visas, permanent residence and family sponsorship.',
  },
  services: {
    title: 'Canadian Immigration Services | JKS Immigration',
    description: 'Explore Canadian immigration services for visas, work and study permits, permanent residence, sponsorship and citizenship.',
  },
  programs: {
    title: 'Canadian Immigration Programs | JKS Immigration',
    description: 'Explore official Canadian federal, provincial and territorial immigration programs, pathways and current application information.',
  },
  faq: {
    title: 'Canadian Immigration FAQ | JKS Immigration',
    description: 'Answers to common questions about Canadian immigration services, consultations and working with an RCIC.',
  },
  terms: {
    title: 'Terms & Conditions | JKS Immigration',
    description: 'Terms and conditions for JKS Immigration services.',
  },
  privacy: {
    title: 'Privacy Policy | JKS Immigration',
    description: 'Privacy policy for JKS Immigration.',
  },
  cookies: {
    title: 'Cookie Policy | JKS Immigration',
    description: 'Cookie policy for JKS Immigration.',
  },
}

function pageInfo(route) {
  if (route.name === 'program-detail') {
    const program = publicPrograms[route.params.provider]
    if (program) {
      return {
        title: `${program.name} | Canadian Immigration Programs | JKS Immigration`,
        description: program.intro || `Explore official information about ${program.name}, its streams and immigration pathways.`,
      }
    }
  }

  if (['immigration-topic', 'visas-topic', 'other-topic'].includes(route.name)) {
    const category = route.meta.category
    const title = serviceLabels[category]?.[route.params.slug]
    const topic = getServiceTopic(category, route.params.slug)
    if (title && topic) {
      return {
        title: `${title} | JKS Immigration`,
        description: topic.intro,
      }
    }
  }

  if (['immigration-hub', 'visas-hub', 'other-hub'].includes(route.name)) {
    return {
      title: route.meta.title,
      description: 'Explore Canadian immigration services and get regulated guidance from JKS Immigration.',
    }
  }

  return staticPages[route.name] || {
    title: route.meta.title || 'JKS Immigration | Canadian Immigration Guidance',
    description: defaultDescription,
  }
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
}

export function useSeo(route) {
  watchEffect(() => {
    const seo = pageInfo(route)
    const canonical = new URL(route.path, `${site.url}/`).href
    const image = `${site.url}/images/jks-home-hero-canadian-mountains.png`

    document.title = seo.title
    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical })

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      description: seo.description,
      url: canonical,
      isPartOf: { '@type': 'WebSite', name: site.name, url: `${site.url}/` },
    }
    let schemaTag = document.head.querySelector('#jks-page-schema')
    if (!schemaTag) {
      schemaTag = document.createElement('script')
      schemaTag.id = 'jks-page-schema'
      schemaTag.type = 'application/ld+json'
      document.head.appendChild(schemaTag)
    }
    schemaTag.textContent = JSON.stringify(schema)
  })
}
