import {ArrowUpRight} from "lucide-react";
import {FaGithub} from "react-icons/fa";
import {projects, workProjects} from "@/data/profile";
import {Section} from "./section";
import {Reveal} from "./reveal";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected projects"
      title={<>Products I&rsquo;ve <em className="font-serif font-normal italic">built</em> &amp; shipped.</>}
    >
      <div className="mb-5 grid gap-5 md:grid-cols-2">
        {workProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-text/50 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                At Smart Structures
              </p>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">{p.name}</h3>
              <p className="mt-1 font-serif text-xl italic text-accent-text">{p.tagline}</p>
              <p className="mt-5 flex-1 leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{s}</li>
                ))}
              </ul>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} — visit site`}
                className="mt-6 inline-flex items-center gap-1 border-t border-line pt-5 text-sm font-medium after:absolute after:inset-0 hover:text-accent-text"
              >
                Visit site <ArrowUpRight size={16} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
      <h3 className="mb-5 mt-14 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Side projects
      </h3>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-text/50">
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-30"
                style={{background: "var(--accent)"}}
                aria-hidden
              />
              <p className="font-mono text-xs text-muted">0{i + 1}</p>
              <h3 className="mt-10 text-3xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-1 font-serif text-xl italic text-accent-text">{p.tagline}</p>
              <p className="mt-5 flex-1 leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{s}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium after:absolute after:inset-0 hover:text-accent-text"
                  aria-label={`${p.name} — live site`}
                >
                  Live site <ArrowUpRight size={16} />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on GitHub`}
                  className="relative z-10 text-muted hover:text-fg"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
