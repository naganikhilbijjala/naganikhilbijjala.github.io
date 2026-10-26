import {ArrowDownRight} from "lucide-react";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {hero} from "@/data/profile";
import {site} from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[120px] dark:opacity-20"
        style={{background: "radial-gradient(closest-side, var(--accent), transparent)"}}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-40 sm:pt-52">
        <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur">
          <span className="pulse-dot size-2 rounded-full bg-accent" />
          {hero.openToWork ? "Open to new opportunities" : hero.eyebrow}
        </p>

        <h1 className="max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          {hero.headline.map((line, i) => (
            <span key={i} className="block">
              {line.split(" ").map((w, j) =>
                w === hero.accentWord ? (
                  <em
                    key={j}
                    className="font-serif font-normal italic tracking-[-0.02em] text-accent-text"
                  >
                    {w}{" "}
                  </em>
                ) : (
                  `${w} `
                )
              )}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition hover:brightness-95"
          >
            See my work
            <ArrowDownRight size={18} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <span className="mx-2 hidden h-6 w-px bg-line sm:block" />
          <a href={site.github} aria-label="GitHub" target="_blank" rel="me noopener noreferrer" className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:border-fg/40 hover:text-fg">
            <FaGithub size={18} />
          </a>
          <a href={site.linkedin} aria-label="LinkedIn" target="_blank" rel="me noopener noreferrer" className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:border-fg/40 hover:text-fg">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
