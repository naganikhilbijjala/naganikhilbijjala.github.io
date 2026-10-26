import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {formatDate, getAllPosts, getPost, tagSlug} from "@/lib/posts";
import {renderMdx} from "@/lib/mdx";
import {Toc} from "@/components/toc";
import {JsonLd} from "@/components/json-ld";
import {absoluteUrl, site} from "@/lib/site";

type Params = {slug: string};

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllPosts().map(p => ({slug: p.slug}));
}

export async function generateMetadata({params}: {params: Promise<Params>}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {canonical: url},
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [site.name],
      tags: post.tags
    },
    twitter: {card: "summary_large_image", title: post.title, description: post.description}
  };
}

export default async function PostPage({params}: {params: Promise<Params>}) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const all = getAllPosts();
  const i = all.findIndex(p => p.slug === post.slug);
  const newer = all[i - 1];
  const older = all[i + 1];
  const body = await renderMdx(post.content);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          keywords: post.tags.join(", "),
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          author: {"@type": "Person", name: site.name, url: site.url},
          publisher: {"@id": `${site.url}/#person`}
        }}
      />
      <div className="grid gap-16 lg:grid-cols-[minmax(0,44rem)_1fr]">
        <article>
          <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-fg">
            ← All posts
          </Link>
          <header className="mb-12 mt-8">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-5 text-xl leading-relaxed text-muted">{post.description}</p>
            )}
            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>{post.readingMinutes} min read</span>
              {post.updated && <span>Updated {formatDate(post.updated)}</span>}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">{body}</div>

          {post.tags.length > 0 && (
            <ul className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
              {post.tags.map(t => (
                <li key={t}>
                  <Link
                    href={`/blog/tags/${tagSlug(t)}`}
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition hover:border-accent-text/60 hover:text-fg"
                  >
                    #{t}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <nav aria-label="More posts" className="mt-12 grid gap-4 sm:grid-cols-2">
            {newer && (
              <Link href={`/blog/${newer.slug}`} className="rounded-2xl border border-line p-5 transition hover:border-accent-text/50">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">← Newer</span>
                <span className="mt-1 block font-medium">{newer.title}</span>
              </Link>
            )}
            {older && (
              <Link href={`/blog/${older.slug}`} className="rounded-2xl border border-line p-5 text-right transition hover:border-accent-text/50 sm:col-start-2">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">Older →</span>
                <span className="mt-1 block font-medium">{older.title}</span>
              </Link>
            )}
          </nav>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <Toc headings={post.headings} />
          </div>
        </aside>
      </div>
    </div>
  );
}
