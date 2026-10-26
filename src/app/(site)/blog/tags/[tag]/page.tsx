import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getAllPosts, getAllTags, tagSlug} from "@/lib/posts";
import {PostCard} from "@/components/post-card";

type Params = {tag: string};

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const tags = getAllTags();
  // `output: export` needs at least one param; fall back to a placeholder.
  return tags.length ? tags.map(t => ({tag: tagSlug(t.tag)})) : [{tag: "none"}];
}

const resolve = (slug: string) => getAllTags().find(t => tagSlug(t.tag) === slug)?.tag;

export async function generateMetadata({params}: {params: Promise<Params>}): Promise<Metadata> {
  const name = resolve((await params).tag);
  if (!name) return {};
  return {
    title: `Posts tagged “${name}”`,
    description: `All articles about ${name} by Naga Nikhil Bijjala.`,
    alternates: {canonical: `/blog/tags/${tagSlug(name)}`}
  };
}

export default async function TagPage({params}: {params: Promise<Params>}) {
  const name = resolve((await params).tag);
  if (!name) notFound();
  const posts = getAllPosts().filter(p => p.tags.includes(name));
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-40">
      <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-fg">
        ← All posts
      </Link>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
        <span className="text-accent-text">#</span>{name}
      </h1>
      <div className="mt-12">
        {posts.map(p => <PostCard key={p.slug} post={p} />)}
      </div>
    </div>
  );
}
