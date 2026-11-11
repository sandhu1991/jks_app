import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const siteUrl = 'https://jksimmigration.ca'
const imageUrl = `${siteUrl}/images/jks-home-hero-canadian-mountains.png`

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const pages = [
  ['/', 'JKS Immigration | Canadian Immigration Guidance', 'CICC-licensed Canadian immigration consulting for visas, permanent residence, family sponsorship and citizenship.'],
  ['/about', 'About JKS Immigration | CICC-Licensed RCIC', 'Meet JKS Immigration and RCIC Jasmine Kaur. Get clear, regulated guidance for your Canadian immigration application.'],
  ['/contact', 'Contact JKS Immigration | Vaudreuil-Dorion, Quebec', 'Contact JKS Immigration to book a Canadian immigration consultation by phone, email, WhatsApp or online.'],
  ['/book', 'Book a Canadian Immigration Consultation | JKS Immigration', 'Book an online consultation with JKS Immigration for clear guidance on Canadian visas, permanent residence and family sponsorship.'],
  ['/services', 'Canadian Immigration Services | JKS Immigration', 'Explore Canadian immigration services for visas, work and study permits, permanent residence, sponsorship and citizenship.'],
  ['/programs', 'Canadian Immigration Programs | JKS Immigration', 'Explore official Canadian federal, provincial and territorial immigration programs, pathways and current application information.'],
  ['/immigration', 'Immigrate to Canada | JKS Immigration', 'Explore permanent residence pathways and get regulated Canadian immigration guidance from JKS Immigration.'],
  ['/visas', 'Canada Visas | JKS Immigration', 'Explore visitor, work, study and super visa services with regulated Canadian immigration guidance.'],
  ['/other', 'Other Canadian Immigration Services | JKS Immigration', 'Explore Canadian citizenship, PR card and status-extension services with JKS Immigration.'],
  ['/faq', 'Canadian Immigration FAQ | JKS Immigration', 'Answers to common questions about Canadian immigration services, consultations and working with an RCIC.'],
  ['/legal/terms', 'Terms & Conditions | JKS Immigration', 'Terms and conditions for JKS Immigration services.'],
  ['/legal/privacy', 'Privacy Policy | JKS Immigration', 'Privacy policy for JKS Immigration.'],
  ['/legal/cookies', 'Cookie Policy | JKS Immigration', 'Cookie policy for JKS Immigration.'],
]

const serviceGroups = {
  immigration: {
    'express-entry': 'Express Entry',
    'business-immigration': 'Business Immigration',
    'family-and-spousal-immigration': 'Family & Spousal Sponsorship',
    'provincial-nomination-programs': 'Provincial Nominee Programs',
  },
  visas: {
    'tourist-visa': 'Tourist & Visitor Visa',
    'work-visa': 'Work in Canada',
    'study-visa': 'Study in Canada',
    'super-visa': 'Super Visa',
  },
  other: {
    'pr-card': 'PR Card & Renewal',
    'canadian-citizenship': 'Canadian Citizenship',
    'visitor-record-extension': 'Visitor Record Extension',
    'study-work-permit-extension': 'Study–Work Permit Extensions',
  },
}

for (const [segment, topics] of Object.entries(serviceGroups)) {
  for (const [slug, label] of Object.entries(topics)) {
    pages.push([
      `/${segment}/${slug}`,
      `${label} | JKS Immigration`,
      `Learn about ${label} and get regulated Canadian immigration guidance from JKS Immigration.`,
    ])
  }
}

const catalog = JSON.parse(await readFile(path.join(root, 'src/config/programs.json'), 'utf8'))
for (const [slug, program] of Object.entries(catalog.programs)) {
  pages.push([
    `/programs/${slug}`,
    `${program.name} | Canadian Immigration Programs | JKS Immigration`,
    program.intro || `Explore official information about ${program.name}, its streams and immigration pathways.`,
  ])
}

function cleanHead(html) {
  return html
    .replace(/<title>[^<]*<\/title>/i, '')
    .replace(/\s*<meta name="description"[^>]*>/gi, '')
    .replace(/\s*<link rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<meta property="og:(title|description|url|image)"[^>]*>/gi, '')
    .replace(/\s*<meta name="twitter:(title|description|image)"[^>]*>/gi, '')
}

function metadata(pathname, title, description) {
  const canonical = new URL(pathname, `${siteUrl}/`).href
  const escapedTitle = escapeHtml(title)
  const escapedDescription = escapeHtml(description)
  return `
    <title>${escapedTitle}</title>
    <meta name="description" content="${escapedDescription}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapedTitle}" />
    <meta property="og:description" content="${escapedDescription}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta name="twitter:title" content="${escapedTitle}" />
    <meta name="twitter:description" content="${escapedDescription}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <script id="jks-static-page-schema" type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonical,
      isPartOf: { '@type': 'WebSite', name: 'JKS Immigration', url: `${siteUrl}/` },
    })}</script>`
}

function fallbackContent(title, description) {
  return `<noscript><main><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p><p>JKS Immigration Inc. is a CICC-licensed Canadian immigration consulting practice. <a href="/contact">Contact JKS Immigration</a> to book a consultation.</p></main></noscript>`
}

const base = await readFile(path.join(dist, 'index.html'), 'utf8')

for (const [pathname, title, description] of pages) {
  const rendered = cleanHead(base)
    .replace('</head>', `${metadata(pathname, title, description)}\n  </head>`)
    .replace('<div id="app" class="jks-root"></div>', `<div id="app" class="jks-root"></div>${fallbackContent(title, description)}`)
  const output = pathname === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, pathname.slice(1), 'index.html')
  await mkdir(path.dirname(output), { recursive: true })
  await writeFile(output, rendered)
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([pathname]) => `  <url><loc>${new URL(pathname, `${siteUrl}/`).href}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
await writeFile(path.join(dist, 'sitemap.xml'), sitemap)

console.log(`Generated SEO files for ${pages.length} public routes.`)
