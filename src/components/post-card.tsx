import Link from "next/link";
import {formatDate, tagSlug, type PostMeta} from "@/lib/posts";

export function PostCard({post}: {post: PostMeta}) {
  return (
    <article className="group relative flex flex-col gap-3 border-t border-line py-7 transition first:border-t-0 sm:flex-row sm:gap-10">
      <time
        dateTime={post.date}
        className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted sm:w-40 sm:pt-2"
      >
        {formatDate(post.date)}
      </time>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold tracking-tight transition group-hover:text-accent-text">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 max-w-2xl leading-relaxed text-muted">{post.description}</p>
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
          <span>{post.readingMinutes} min read</span>
          {post.tags.map(t => (
            <Link
              key={t}
              href={`/blog/tags/${tagSlug(t)}`}
              className="relative z-10 hover:text-fg"
            >
              #{t}
            </Link>
          ))}
        </p>
      </div>
    </article>
  );
}
