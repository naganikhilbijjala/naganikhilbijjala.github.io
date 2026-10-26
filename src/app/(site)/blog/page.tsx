import type {Metadata} from "next";
import Link from "next/link";
import {getAllPosts, getAllTags, tagSlug} from "@/lib/posts";
import {PostCard} from "@/components/post-card";
import {JsonLd} from "@/components/json-ld";
import {absoluteUrl, site} from "@/lib/site";

const description =
  "Writing on full-stack engineering, React and Next.js, Node.js, data pipelines, system design and building products — by Naga Nikhil Bijjala.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {canonical: "/blog"},
  openGraph: {title: `Blog — ${site.name}`, description, url: absoluteUrl("/blog"), type: "website"}
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const tags = getAllTags();
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-40">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${site.name} — Blog`,
          url: absoluteUrl("/blog"),
          description,
          author: {"@id": `${site.url}/#person`},
          blogPost: posts.map(p => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(`/blog/${p.slug}`),
            datePublished: p.date
          }))
        }}
      />
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-text">Blog</p>
      <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
        Notes &amp; <em className="font-serif font-normal italic">essays</em>.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        What I&rsquo;m learning about building for the web. Subscribe via{" "}
        <a href="/rss.xml" className="underline decoration-accent-text decoration-2 underline-offset-4">RSS</a>.
      </p>

      {tags.length > 0 && (
        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Topics">
          {tags.map(({tag, count}) => (
            <li key={tag}>
              <Link
                href={`/blog/tags/${tagSlug(tag)}`}
                className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition hover:border-accent-text/60 hover:text-fg"
              >
                {tag} <span className="opacity-60">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-14">
        {posts.length ? (
          posts.map(p => <PostCard key={p.slug} post={p} />)
        ) : (
          <p className="text-muted">First post coming soon.</p>
        )}
      </div>
    </div>
  );
}
