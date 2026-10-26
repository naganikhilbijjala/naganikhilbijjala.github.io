"use client";
import {useEffect, useState} from "react";

export function Toc({headings}: {headings: {id: string; text: string; level: number}[]}) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    const els = headings
      .map(h => document.getElementById(h.id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      {rootMargin: "-80px 0px -70% 0px"}
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;
  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">On this page</p>
      <ul className="border-l border-line">
        {headings.map(h => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`-ml-px block border-l py-1 transition ${
                h.level === 3 ? "pl-7" : "pl-4"
              } ${
                active === h.id
                  ? "border-accent-text text-fg"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
