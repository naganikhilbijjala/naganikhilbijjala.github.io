# Writing a blog post

## In the browser (normal workflow)

1. Go to `/keystatic` on the live site and sign in with GitHub.
2. **Blog posts → +** and fill in the title, description, tags and content.
3. Leave **Draft** ticked while writing. Untick it to publish.
4. **Save** commits to the repo, and Vercel redeploys in about a minute.

To preview a post without publishing: use the branch menu to create a branch, save the draft there, and open that branch's Vercel preview URL. Drafts are visible on previews and hidden on production. Merge the branch to go live.

## Locally

`npm run dev`, then open http://localhost:3000/keystatic. Edits are written straight to `content/blog/`.

## By hand

Create `content/blog/<slug>.mdx` with frontmatter:

```yaml
---
title: "Required"
description: "Shown in search results & link previews (aim for ~150 chars)"
date: 2026-11-01          # required
updated: 2026-11-10       # optional
tags: [react, performance]
draft: false              # true hides it on production
---
```

Fenced code blocks accept `title="file.ts"`, `showLineNumbers` and `{2,4-6}` line ranges.
`<Callout type="note|warning">…</Callout>` is available in every post.

## One-time setup for the production admin

See the README in the repo root, or the steps below.

1. `NEXT_PUBLIC_KEYSTATIC_STORAGE=github npm run dev`, open http://localhost:3000/keystatic and follow **Set up GitHub app** (creates the app and writes keys to `.env`).
2. Copy these four variables from `.env` into Vercel → Project → Settings → Environment Variables, then redeploy:
   `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
3. Install the GitHub App on the `naganikhilbijjala.github.io` repo only.
