import { serviceLabels } from './serviceLabels.js'
import { serviceHubs, serviceTopics } from './serviceTopics.js'

const categoryMeta = {
  immigration: {
    icon: 'fa-home',
    summary:
      'Permanent residence for skilled workers, entrepreneurs, families, and provincial nominees.',
  },
  visas: {
    icon: 'fa-plane-arrival',
    summary:
      'Temporary visas and permits for visitors, workers, students, and parents or grandparents.',
  },
  'other-services': {
    icon: 'fa-id-card',
    summary: 'PR card renewal, citizenship, visitor record extensions, and study or work permit extensions.',
  },
}

function buildTopics(categoryId) {
  const labels = serviceLabels[categoryId] ?? {}
  const topics = serviceTopics[categoryId] ?? {}
  const hubPath = serviceHubs[categoryId]?.path ?? ''

  return Object.entries(labels).map(([slug, title]) => {
    const topic = topics[slug]
    return {
      slug,
      title,
      path: `${hubPath}/${slug}`,
      intro: topic?.intro ?? '',
      image: topic?.image ?? null,
      imageAlt: topic?.imageAlt ?? title,
    }
  })
}

/** All service categories with topics for the services index page. */
export const serviceCategories = Object.keys(serviceHubs).map((id) => ({
  id,
  ...serviceHubs[id],
  ...categoryMeta[id],
  topics: buildTopics(id),
}))
