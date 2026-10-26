import Link from "next/link";
import {site} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {site.name}. Built with Next.js.</p>
        <ul className="flex flex-wrap gap-5">
          <li><Link href="/blog" className="hover:text-fg">Blog</Link></li>
          <li><a href="/rss.xml" className="hover:text-fg">RSS</a></li>
          <li><a href={site.github} className="hover:text-fg" target="_blank" rel="me noopener noreferrer">GitHub</a></li>
          <li><a href={site.linkedin} className="hover:text-fg" target="_blank" rel="me noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}
