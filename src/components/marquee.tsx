const items = [
  "React", "Next.js", "TypeScript", "Node.js", "NestJS", "Python",
  "PostgreSQL", "Redis", "BullMQ", "Docker", "Azure", "AWS", "LangChain"
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="marquee relative mt-24 overflow-hidden border-y border-line py-5"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-serif text-2xl italic text-muted">
            {t}
            <span className="size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
