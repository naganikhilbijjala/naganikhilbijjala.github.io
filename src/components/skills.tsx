import {skills, education} from "@/data/profile";
import Image from "next/image";
import {Section} from "./section";
import {Reveal} from "./reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title={<>From database to <em className="font-serif font-normal italic">pixel</em>.</>}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.06}>
            <div className="h-full rounded-3xl border border-line bg-surface p-7">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent-text">
                {g.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map(s => (
                  <li key={s} className="rounded-full border border-line px-3.5 py-1.5 text-sm transition hover:border-accent-text/60">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</h3>
        <ul className="grid gap-5 sm:grid-cols-2">
          {education.map(e => (
            <li key={e.school} className="flex items-center gap-4 rounded-3xl border border-line p-5">
              <Image src={e.logo} alt="" width={48} height={48} className="size-12 rounded-xl border border-line bg-white object-contain p-1" />
              <div>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
