/**
 * Raw HTML page fragments bundled at build time (see scripts/extract-static-pages.mjs).
 */
const modules = import.meta.glob('./pages/*.html', { query: '?raw', import: 'default', eager: true })

const htmlByFilename = Object.fromEntries(
  Object.entries(modules).map(([key, raw]) => {
    const name = key.replace(/\\/g, '/').split('/').pop()
    return [name, raw]
  }),
)

/** @param {string} filename e.g. "home.html", "footer.html" */
export function getStaticPageHtml(filename) {
  return htmlByFilename[filename] ?? ''
}
