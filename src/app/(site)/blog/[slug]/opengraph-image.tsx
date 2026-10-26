import {ImageResponse} from "next/og";
import {getAllPosts, getPost} from "@/lib/posts";
import {site} from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map(p => ({slug: p.slug}));
}

export default async function Image({params}: {params: Promise<{slug: string}>}) {
  const post = getPost((await params).slug);
  return new ImageResponse(
    (
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0b", color: "#f3f0e8", padding: 80}}>
        <div style={{fontSize: 28, color: "#c8ff3d", display: "flex"}}>{site.name} · Blog</div>
        <div style={{fontSize: 80, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, display: "flex"}}>{post?.title}</div>
        <div style={{fontSize: 30, color: "#8f8f98", display: "flex"}}>{post?.tags.map(t => `#${t}`).join("  ")}</div>
      </div>
    ),
    size
  );
}
