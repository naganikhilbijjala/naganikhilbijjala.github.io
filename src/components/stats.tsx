import {stats} from "@/data/profile";
import {Reveal} from "./reveal";

export function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-line gap-px lg:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="bg-bg p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl font-semibold tracking-tight sm:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-muted">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
