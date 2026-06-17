/**
 * Raw HTML page fragments bundled at build time (see scripts/extract-static-pages.mjs).
 */
const modules = import.meta.glob(
  [
    './pages/terms-condition.html',
    './pages/privacy-policy.html',
    './pages/cookie-policy.html',
    './pages/faq.html',
  ],
  { query: '?raw', import: 'default', eager: true },
)

const htmlByFilename = Object.fromEntries(
  Object.entries(modules).map(([key, raw]) => {
    const name = key.replace(/\\/g, '/').split('/').pop()
    return [name, raw]
  }),
)

/** @param {string} filename e.g. "faq.html" */
export function getStaticPageHtml(filename) {
  return htmlByFilename[filename] ?? ''
}
