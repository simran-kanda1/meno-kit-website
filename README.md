# Meno-Kit Website

Coming-soon site for Meno-Kit — community, quarterly kits, quiz, and waitlist.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

Fill in Firebase values in `.env` (see `.env.example`).

## Deploy on Render

1. Push this repo to GitHub.
2. In [Render](https://render.com), create a **Static Site** and connect the repo.
3. Render will pick up `render.yaml`, or set manually:
   - **Build command:** `npm ci && npm run build`
   - **Publish directory:** `dist`
4. Add environment variables in Render (same as `.env.example`, prefixed with `VITE_`).
5. Deploy.

### Client-side routing (reload fix)

This app uses React Router. Direct visits and reloads on routes like `/blog` need every path to serve `index.html`. That is configured via:

- `render.yaml` rewrite rules
- `public/_redirects` (copied into `dist` on build)

Without those, refreshing a subpage on Render returns **Not Found**.
