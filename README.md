# Yufei Zhang - Academic Homepage

Personal academic, research, and open-source homepage for Yufei Zhang. The site is an Astro static project deployed as a GitHub Pages project site.

## Repository and deployment

- Repository: `ninjaduck7/Felix.github.io`
- Production URL: `https://ninjaduck7.github.io/Felix.github.io/`
- Astro `site`: `https://ninjaduck7.github.io`
- Astro `base`: `/Felix.github.io`
- Deployment: `.github/workflows/deploy.yml` on pushes to `main`

In GitHub, configure **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.

## Development

Use Node.js 22.23.2, matching `.nvmrc` and the deployment workflow.

```bash
npm install
npm run dev
npm run build
npm run preview
```

Astro serves the project under its configured base path. During development, open the URL printed by Astro, normally `http://localhost:4321/Felix.github.io/`.

## Languages

The site is bilingual. English is the default language and Simplified Chinese is available under `/zh/`.

- English: `http://localhost:4321/Felix.github.io/`
- 中文: `http://localhost:4321/Felix.github.io/zh/`
- The language switch preserves the current section, such as `/research` and `/zh/research`.
- Canonical, `hreflang`, Open Graph locale, and document language metadata are generated for both versions.

Shared identity and translated research content live in `src/settings.ts`. Chinese page copy lives in `src/pages/zh/`; bilingual CV and project data live in `src/data/`.

## Content map

- Site identity, social links, research areas, SEO, and base path: `src/settings.ts`
- Education, skills, experience, and publications: `src/data/cv.ts`
- Public repositories: `src/data/projects.ts`
- Pages: `src/pages/`
- Chinese pages: `src/pages/zh/`
- Locale routing helpers: `src/lib/i18n.ts`
- Optional research notes: `src/content/BlogPosts/`
- TensorCircuit-NG contribution details are linked directly from the Projects page (PRs #131 and #132).
- Notes are published as paired English and Chinese entries under `src/content/BlogPosts/` and `/blog/` or `/zh/blog/`.
- Profile image: `src/assets/profile-picture.png`

The Notes navigation item appears only when at least one Markdown file exists in `src/content/BlogPosts/`.

## Content still requiring verification

The source contains explicit `TODO` markers for information that was not available and must not be guessed:

- research appointments, awards, talks, and service;
- publication metadata and canonical URLs;
- LinkedIn, Google Scholar, and ORCID URLs.

Find every unresolved field with:

```bash
rg -n "TODO" src
```

## Template provenance

This site uses [Astro Academia](https://github.com/maiobarbero/astro_academia) as its implementation baseline, as requested. It was imported from upstream `main` at commit `665b66b` (`Chore(deps): Bump vite from 6.4.1 to 6.4.2 (#37)`) on 2026-08-17. Upstream Git metadata, dependencies, and build output were excluded from the import.

The local repository remains the sole Git repository and retains its original `origin`: `https://github.com/ninjaduck7/Felix.github.io.git`.
