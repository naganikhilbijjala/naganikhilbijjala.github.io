import {ArrowUpRight} from "lucide-react";
import {site} from "@/lib/site";
import {Reveal} from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent p-8 text-accent-ink sm:p-16">
          <h2 className="max-w-3xl text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.035em]">
            Have something in mind? Let&rsquo;s <em className="font-serif font-normal italic">talk</em>.
          </h2>
          <p className="mt-6 max-w-lg text-lg opacity-75">
            I&rsquo;m always happy to chat about full-stack roles, product engineering or a project that needs a careful hand.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent-ink px-7 py-3.5 font-medium text-accent transition hover:opacity-85 dark:ring-1 dark:ring-accent-ink"
            >
              {site.email} <ArrowUpRight size={18} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent-ink/30 px-7 py-3.5 font-medium transition hover:border-accent-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
