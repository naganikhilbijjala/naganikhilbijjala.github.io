import type {MetadataRoute} from "next";
import {getAllPosts, getAllTags, tagSlug} from "@/lib/posts";
import {absoluteUrl} from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  return [
    {url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1},
    {url: absoluteUrl("/blog"), changeFrequency: "weekly", priority: 0.8},
    ...posts.map(p => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.updated ?? p.date,
      changeFrequency: "yearly" as const,
      priority: 0.7
    })),
    ...getAllTags().map(t => ({
      url: absoluteUrl(`/blog/tags/${tagSlug(t.tag)}`),
      changeFrequency: "weekly" as const,
      priority: 0.4
    }))
  ];
}
