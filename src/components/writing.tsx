import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {getAllPosts} from "@/lib/posts";
import {PostCard} from "./post-card";
import {Section} from "./section";

export function Writing() {
  const posts = getAllPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title={<>Notes on building for the <em className="font-serif font-normal italic">web</em>.</>}
    >
      <div>
        {posts.map(p => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
      <Link href="/blog" className="mt-8 inline-flex items-center gap-2 font-medium hover:text-accent-text">
        All posts <ArrowRight size={16} />
      </Link>
    </Section>
  );
}
