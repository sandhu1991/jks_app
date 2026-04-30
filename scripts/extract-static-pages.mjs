/**
 * Extracts <main id="pxl-content-main"> inner HTML from jks_static pages,
 * plus the shared Elementor <footer id="pxl-footer-elementor"> from index.html.
 * Rewrites asset and internal links for the Vue SPA, writes to src/content/pages/.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const JKS_VUE = path.resolve(__dirname, '..')
const STATIC_ROOT = path.resolve(JKS_VUE, '..', 'jks_static')
const OUT_DIR = path.join(JKS_VUE, 'src', 'content', 'pages')

const JOBS = [
  ['index.html', 'home.html'],
  ['pages/about.html', 'about.html'],
  ['pages/contact-us.html', 'contact-us.html'],
  ['pages/cookie-policy.html', 'cookie-policy.html'],
  ['pages/faq.html', 'faq.html'],
  ['pages/privacy-policy.html', 'privacy-policy.html'],
  ['pages/terms-condition.html', 'terms-condition.html'],
  ['services/index.html', 'services-index.html'],
  ['services/immigration/express-entry.html', 'immigration-express-entry.html'],
  ['services/immigration/business-immigration.html', 'immigration-business-immigration.html'],
  ['services/immigration/family-and-spousal-immigration.html', 'immigration-family-and-spousal-immigration.html'],
  ['services/immigration/provincial-nomination-programs.html', 'immigration-provincial-nomination-programs.html'],
  ['services/visas/tourist-visa.html', 'visas-tourist-visa.html'],
  ['services/visas/work-visa.html', 'visas-work-visa.html'],
  ['services/visas/study-visa.html', 'visas-study-visa.html'],
  ['services/visas/super-visa.html', 'visas-super-visa.html'],
  ['services/other-services/pr-card.html', 'other-pr-card.html'],
  ['services/other-services/canadian-citizenship.html', 'other-canadian-citizenship.html'],
  ['services/other-services/study-work-permit-extension.html', 'other-study-work-permit-extension.html'],
]

function extractMain(html) {
  const open = '<main id="pxl-content-main">'
  const i = html.indexOf(open)
  if (i === -1) throw new Error('main#pxl-content-main not found')
  const start = i + open.length
  const j = html.indexOf('</main>', start)
  if (j === -1) throw new Error('</main> not found')
  return html.slice(start, j).trim()
}

/** Full <footer id="pxl-footer-elementor">…</footer> block (same markup as static site). */
function extractFooter(html) {
  const open = '<footer id="pxl-footer-elementor">'
  const i = html.indexOf(open)
  if (i === -1) throw new Error('footer#pxl-footer-elementor not found')
  const j = html.indexOf('</footer>', i)
  if (j === -1) throw new Error('</footer> not found')
  return html.slice(i, j + '</footer>'.length).trim()
}

function rewriteAssetsAndLinks(fragment, sourceRel) {
  let s = fragment
  s = s.replace(/\burl\(\s*(['"]?)(\.\.\/)*images\//gi, 'url($1/images/')
  s = s.replace(/src="(\.\.\/)*images\//g, 'src="/images/')
  s = s.replace(/href="(\.\.\/)*images\//g, 'href="/images/')
  s = s.replace(/data-src="(\.\.\/)*images\//g, 'data-src="/images/')
  s = s.replace(/data-lazyload="(\.\.\/)*images\//g, 'data-lazyload="/images/')
  s = s.replace(/srcset="([^"]*)"/g, (_, inner) => {
    const fixed = inner.replace(/(^|[\s,])((?:\.\.\/)*)images\//g, '$1/images/')
    return `srcset="${fixed}"`
  })

  s = s.replace(/href="([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})"/g, 'href="mailto:$1"')

  s = s.replace(/href="(?:\.\.\/)*(?:pages\/)?contact-us\.html(?:#[^"]*)?"/g, 'href="/contact"')
  s = s.replace(/href="(?:\.\.\/)*(?:pages\/)?about\.html(?:#[^"]*)?"/g, 'href="/about"')
  s = s.replace(/href="(?:\.\.\/)*(?:pages\/)?faq\.html(?:#[^"]*)?"/g, 'href="/faq"')
  s = s.replace(/href="(?:\.\.\/)*(?:pages\/)?terms-condition\.html(?:#[^"]*)?"/g, 'href="/legal/terms"')
  s = s.replace(/href="(?:\.\.\/)*(?:pages\/)?privacy-policy\.html(?:#[^"]*)?"/g, 'href="/legal/privacy"')
  s = s.replace(/href="(?:\.\.\/)*(?:pages\/)?cookie-policy\.html(?:#[^"]*)?"/g, 'href="/legal/cookies"')

  s = s.replace(/href="(?:\.\.\/)*services\/index\.html(?:#[^"]*)?"/g, 'href="/immigration"')
  if (sourceRel === 'services/index.html') {
    s = s.replace(/href="\.\/index\.html(?:#[^"]*)?"/g, 'href="/immigration"')
  }

  s = s.replace(/href="(?:\.\.\/)*services\/immigration\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/immigration/${slug}${hash}"`
  })
  s = s.replace(/href="(?:\.\.\/)*services\/visas\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/visas/${slug}${hash}"`
  })
  s = s.replace(/href="(?:\.\.\/)*services\/other-services\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/other/${slug}${hash}"`
  })

  s = s.replace(/href="services\/immigration\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/immigration/${slug}${hash}"`
  })
  s = s.replace(/href="services\/visas\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/visas/${slug}${hash}"`
  })
  s = s.replace(/href="services\/other-services\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/other/${slug}${hash}"`
  })
  s = s.replace(/href="services\/index\.html(?:#[^"]*)?"/g, 'href="/immigration"')

  s = s.replace(/href="immigration\/([^"#?]+\.html)"/g, (_, f) => {
    const slug = f.replace(/\.html$/, '')
    return `href="/immigration/${slug}"`
  })
  s = s.replace(/href="visas\/([^"#?]+\.html)"/g, (_, f) => {
    const slug = f.replace(/\.html$/, '')
    return `href="/visas/${slug}"`
  })
  s = s.replace(/href="other-services\/([^"#?]+\.html)"/g, (_, f) => {
    const slug = f.replace(/\.html$/, '')
    return `href="/other/${slug}"`
  })

  s = s.replace(/href="\.\.\/visas\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/visas/${slug}${hash}"`
  })
  s = s.replace(/href="\.\.\/immigration\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/immigration/${slug}${hash}"`
  })
  s = s.replace(/href="\.\.\/other-services\/([^"#?]+)\.html(#[^"]*)?"/g, (_, slug, hash = '') => {
    return `href="/other/${slug}${hash}"`
  })

  s = s.replace(/href="pages\/contact-us\.html(?:#[^"]*)?"/g, 'href="/contact"')
  s = s.replace(/href="pages\/about\.html(?:#[^"]*)?"/g, 'href="/about"')

  s = s.replace(/href="\.\.\/index\.html(?:#[^"]*)?"/g, 'href="/"')
  s = s.replace(/href="\.\.\/\.\.\/index\.html(?:#[^"]*)?"/g, 'href="/"')
  s = s.replace(/href="\.\/\/?index\.html(?:#[^"]*)?"/g, 'href="/"')
  s = s.replace(/href="index\.html(?:#[^"]*)?"/g, 'href="/"')

  /* Catch-all: any remaining static-style service paths + share URLs */
  s = s.replaceAll('/services/other-services/', '/other/')
  s = s.replaceAll('/services/immigration/', '/immigration/')
  s = s.replaceAll('/services/visas/', '/visas/')
  s = s.replaceAll('/services/other/', '/other/')
  s = s.replace(/href="\/services"/g, 'href="/immigration"')
  s = s.replace(/\/immigration\/([\w-]+)\.html/g, '/immigration/$1')
  s = s.replace(/\/visas\/([\w-]+)\.html/g, '/visas/$1')
  s = s.replace(/\/other\/([\w-]+)\.html/g, '/other/$1')

  return s
}

/** WordPress comment form is non-functional in the SPA; drop it from extracted main HTML. */
function stripWordPressComments(fragment) {
  let s = fragment.replace(/\s*<!--\s*#post\s*-->\s*<div id="comments"[\s\S]*$/i, '')
  if (s === fragment) {
    s = fragment.replace(/\s*<div id="comments"[\s\S]*$/i, '')
  }
  return s.trim()
}

/** Counter widgets ship with start digit "1" for theme JS; SPA shows final value from data-to-value. */
function normalizeCountersForSpa(fragment) {
  return fragment.replace(
    /(<span class="pxl--counter-value[^"]*"[^>]*\bdata-to-value="(\d+)"[^>]*>)[^<]*(<\/span>)/g,
    '$1$2$3',
  )
}

/** Forminator shortcode is non-functional in the SPA; Vue mounts `ContactLeadForm` via Teleport into this mount. */
function replaceContactFormWithSpaPlaceholder(fragment) {
  return fragment.replace(
    /<div class="elementor-element elementor-element-f9cbae5[^>]+>[\s\S]*?<\/form>\s*<\/div>\s*<\/div>\s*<\/div>/,
    '<div id="jks-contact-form-mount"></div>',
  )
}

fs.mkdirSync(OUT_DIR, { recursive: true })

for (const [rel, outName] of JOBS) {
  const abs = path.join(STATIC_ROOT, rel)
  const raw = fs.readFileSync(abs, 'utf8')
  const inner = stripWordPressComments(extractMain(raw))
  let done = normalizeCountersForSpa(rewriteAssetsAndLinks(inner, rel))
  if (outName === 'contact-us.html') {
    done = replaceContactFormWithSpaPlaceholder(done)
  }
  fs.writeFileSync(path.join(OUT_DIR, outName), done, 'utf8')
  console.log('wrote', outName, `(${done.length} chars)`)
}

{
  const raw = fs.readFileSync(path.join(STATIC_ROOT, 'index.html'), 'utf8')
  const footer = extractFooter(raw)
  const done = rewriteAssetsAndLinks(footer, 'index.html')
  fs.writeFileSync(path.join(OUT_DIR, 'footer.html'), done, 'utf8')
  console.log('wrote footer.html', `(${done.length} chars)`)
}

console.log('done')
