import Image from "next/image";
import {experience} from "@/data/profile";
import {Section} from "./section";
import {Reveal} from "./reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I&rsquo;ve <em className="font-serif font-normal italic">shipped</em> things.</>}
    >
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <li key={job.role + job.period} className="relative">
            <span className="absolute -left-[1.85rem] top-8 size-3 rounded-full border-2 border-bg bg-accent sm:-left-[2.85rem]" />
            <Reveal delay={i * 0.05}>
              <article className="rounded-3xl border border-line bg-surface p-6 transition hover:border-fg/20 sm:p-8">
                <header className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={job.logo}
                      alt=""
                      width={"logoWide" in job ? 96 : 44}
                      height={44}
                      className={`h-11 shrink-0 rounded-xl border border-line bg-white object-contain ${
                        "logoWide" in job ? "w-24 px-2.5 py-3" : "w-11 p-1"
                      }`}
                    />
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                      <p className="text-muted">{job.company}</p>
                    </div>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {job.period}
                  </p>
                </header>
                <p className="mt-5 text-fg/80">{job.summary}</p>
                <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                  {job.points.map(p => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent-text" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map(t => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
