# Portfolio

A personal portfolio site — React 19 + TypeScript, Vite, Tailwind CSS v4, React Router.

This is a scaffold, not a finished design: routing, tooling, and CI/deploy are wired up so you
can focus on making it look and feel like yours.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL. Edit files under `src/` — Vite hot-reloads on save.

## Where to start customizing

- `src/index.css` — design tokens (colors, spacing baseline) at the top of the file. Start here.
- `src/pages/Home.tsx` — hero copy, About text, Contact links. Full of placeholder copy marked
  with comments — replace it with your own.
- `src/data/projects.ts` — your project list. Each entry auto-generates a card on the home page
  and a detail page at `/projects/:slug`.
- `src/components/Header.tsx` / `Footer.tsx` — nav links and footer content.

## Project structure

```
src/
  components/   Header, Footer, Layout, ProjectCard — shared UI
  pages/        Home, ProjectDetail, NotFound — route-level components
  data/         projects.ts — typed content, no CMS needed for a v1
  hooks/        useTheme.ts — light/dark mode toggle
```

## Scripts

| Command           | What it does                                      |
| ------------------ | -------------------------------------------------- |
| `npm run dev`       | Local dev server with hot reload                    |
| `npm run build`     | Type-checks, builds to `dist/`, and copies a 404.html for GitHub Pages SPA routing |
| `npm run preview`   | Serves the production build locally                 |
| `npm run lint`      | ESLint                                              |

## Deploying for free

### Option A — GitHub Pages (workflow included)

A ready-to-go GitHub Actions workflow lives at `.github/workflows/deploy.yml`. It builds and
deploys automatically on every push to `main`.

1. Create a GitHub repo and push this project to it.
2. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

The workflow sets the Vite base path to `/<repo-name>/` automatically, so you don't need to edit
`vite.config.ts` for a standard project-page deployment. If you later attach a custom domain to
GitHub Pages, set `VITE_BASE_PATH: /` in the workflow instead (custom domains are served from the
root).

### Option B — Vercel / Netlify / Cloudflare Pages

All three have generous free tiers and slightly smoother DX than GitHub Pages (preview URLs per
PR, no base-path gymnastics since apps are served from `/`). Any of them work with this project
unmodified:

- **Vercel**: import the GitHub repo at vercel.com/new. Framework preset: Vite. Done.
- **Netlify**: import the repo, build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages**: import the repo, build command `npm run build`, output directory `dist`.

For any of these, you can leave `vite.config.ts`'s `base` at `/` (the default) since these hosts
serve from the domain root rather than a `/repo-name/` subpath.

## Notes

- Routing uses `react-router-dom`'s `BrowserRouter` with `basename={import.meta.env.BASE_URL}`,
  so the same code works whether you're on a GitHub Pages subpath or a root domain elsewhere.
- Tailwind v4 is configured via the `@tailwindcss/vite` plugin — no separate `tailwind.config.js`
  needed for basic customization; extend it later if you want custom theme tokens.
- This scaffold was generated without running `npm install` against it, so **the first thing to
  do is run `npm install` and skim through `npm run lint` / `npm run build`** to confirm
  everything resolves cleanly in your environment before you start building on top of it.
