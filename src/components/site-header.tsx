"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ThemeToggle} from "./theme-toggle";

const links = [
  {label: "Work", href: "/#experience"},
  {label: "Projects", href: "/#projects"},
  {label: "Skills", href: "/#skills"},
  {label: "Blog", href: "/blog"}
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className="flex w-full max-w-3xl items-center justify-between rounded-full border border-line bg-bg/70 py-2 pl-5 pr-2 backdrop-blur-xl"
      >
        <Link href="/" className="font-semibold tracking-tight">
          nikhil<span className="text-accent-text">.</span>
        </Link>
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map(l => {
            const active = l.href.startsWith("/blog") && pathname.startsWith("/blog");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-1.5 text-sm transition hover:text-fg ${
                    active ? "text-fg" : "text-muted"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href="/blog"
            className="rounded-full px-3 py-1.5 text-sm text-muted sm:hidden"
          >
            Blog
          </Link>
          <ThemeToggle />
          <Link
            href="/#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition hover:brightness-95"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
