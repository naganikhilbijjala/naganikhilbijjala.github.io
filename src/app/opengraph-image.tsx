import {ImageResponse} from "next/og";
import {site} from "@/lib/site";

export const dynamic = "force-static";
export const alt = site.title;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0b", color: "#f3f0e8", padding: 80}}>
        <div style={{display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#c8ff3d"}}>
          <div style={{width: 16, height: 16, borderRadius: 8, background: "#c8ff3d"}} />
          {new URL(site.url).host}
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{fontSize: 108, fontWeight: 700, letterSpacing: -4, lineHeight: 1}}>{site.name}</div>
          <div style={{fontSize: 44, color: "#c8ff3d", marginTop: 24}}>Full-Stack Software Engineer · TypeScript · React · Node.js</div>
        </div>
      </div>
    ),
    size
  );
}
