# Personal Website

Astro, TypeScript, plain CSS. Static pages and dependency-free interactions.

## Development

Use Node 22.12+.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Updating your information

- Homepage: `src/content/home.md`
- Bio: `src/content/about.md`
- Projects: `src/data/projects.ts`
- Current activity: `src/content/now.md`
- Notes: `src/content/notes/*.md` (frontmatter: title, description, date)
- Name, email, social links, canonical URL, timezone: `src/config.ts`
- Suggested questions and local answers: `src/data/answers.ts` (answer adapter: `src/lib/ask.ts`)

The homepage and bio use the supplied structural placeholder (including Columbia); replace or confirm these details. The initial text is starter copy, and the second project is explicitly a placeholder. Email and LinkedIn are blank until supplied. The live URL is https://tristan-de-halleux.netlify.app. Update `site.url` when connecting a custom domain; it controls canonical URLs, social metadata, RSS, and sitemap.

## Deployment

Connect `tris256d/personal-website` to Netlify, branch `main`.

- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node: 22 (configured in `netlify.toml`)

No environment secrets or SPA redirects required. Netlify's `COMMIT_REF` supplies the command palette revision; local builds use Git. Native cross-document view transitions progressively enhance navigation; reduced motion is respected.

The initial release is deployed with the CLI. To enable automatic deploys, open Netlify → Project configuration → Build & deploy → Continuous deployment → Link repository, and choose the repository and `main`.
