# JKS Immigration — Vue SPA

Vite + Vue 3 + Vue Router. **Header**, **nav**, and **footer** live in `src/components/layout/`; the app shell is `src/layouts/MainLayout.vue`.

## Commands

```bash
cd jks-vue
npm install
npm run dev    # http://localhost:5173
npm run build  # output in dist/
```

## Images

`public/images` is a **symlink** to the parent repo’s `images/` folder so hero/logo paths match `/images/...` in dev and build. If the symlink is missing (e.g. after clone on Windows), recreate from `jks-vue`:

- macOS/Linux: `ln -sf ../../images public/images`

Or copy the `images` folder into `public/images`.

## Deploying the SPA

Use **history** mode (`createWebHistory`), so the server must rewrite unknown paths to `index.html`. Examples:

- **Netlify:** `public/_redirects` is included (`/* → /index.html`).
- **Nginx:** `try_files $uri $uri/ /index.html;`
- **Apache:** `FallbackResource /index.html`

## Static page HTML

Run `npm run extract-static` to pull main/footer fragments from `../jks_static` into `src/content/pages/` (see `scripts/extract-static-pages.mjs`). Views render them through `StaticPageContent.vue`.
