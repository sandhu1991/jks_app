# JKS Immigration — Vue SPA

Vite + Vue 3 + Vue Router. Deployed to **Cloudflare Workers** via Wrangler.

## Commands

```bash
cd jks_app
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run deploy   # build + wrangler deploy
```

## Images

Site images live in `public/images/`. Run `node scripts/prune-unused-images.mjs` to remove unreferenced files after changes.

## Deploying

The app uses HTML5 history mode. Production uses `wrangler.toml` with SPA fallback (`not_found_handling = "single-page-application"`).

For other hosts, rewrite unknown paths to `index.html` (e.g. Nginx `try_files $uri $uri/ /index.html;`).
