import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";

// Drafts are hidden on the live site but visible in dev and on Vercel preview
// deployments, so a branch can be previewed before publishing.
const HIDE_DRAFTS =
  process.env.VERCEL_ENV === "production" ||
  (process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV);

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  updated?: string;
  tags: string[];
  readingMinutes: number;
  featured: boolean;
}

export interface Post extends PostMeta {
  content: string;
  headings: {id: string; text: string; level: 2 | 3}[];
}

const toArray = <T,>(v: T | T[] | undefined): T[] =>
  v === undefined ? [] : Array.isArray(v) ? v : [v];

function extractHeadings(source: string) {
  const slugger = new GithubSlugger();
  const headings: Post["headings"] = [];
  let inFence = false;
  for (const line of source.split("\n")) {
    if (line.trimStart().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*#*$/.exec(line);
    if (m) {
      const text = m[2].replace(/[`*_]/g, "");
      headings.push({
        id: slugger.slug(text),
        text,
        level: m[1].length as 2 | 3
      });
    }
  }
  return headings;
}

function readPost(file: string): Post | null {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const {data, content} = matter(raw);
  if (data.draft && HIDE_DRAFTS) return null;
  if (!data.title || !data.date) {
    throw new Error(`content/blog/${file}: frontmatter needs title and date`);
  }
  return {
    slug,
    title: String(data.title),
    description: String(data.description ?? ""),
    // gray-matter parses bare YYYY-MM-DD into a Date
    date: new Date(data.date).toISOString().slice(0, 10),
    updated: data.updated
      ? new Date(data.updated).toISOString().slice(0, 10)
      : undefined,
    tags: toArray<string>(data.tags),
    readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
    featured: Boolean(data.featured),
    content,
    headings: extractHeadings(content)
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => /\.mdx?$/.test(f))
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) =>
  getAllPosts().find(p => p.slug === slug);

export function getAllTags() {
  const counts = new Map<string, number>();
  for (const p of getAllPosts()) {
    for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({tag, count}))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export const tagSlug = (tag: string) =>
  tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });
