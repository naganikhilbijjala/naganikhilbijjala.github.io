import {Reveal} from "./reveal";

export function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-text">
          {eyebrow}
        </p>
        <h2 className="mb-14 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
