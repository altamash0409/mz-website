import { Reveal } from "@/components/site/Reveal";

const STATS = [
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "25+", label: "Automations Created" },
  { value: "24x7", label: "Customer Support" },
  { value: "98%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="border-b border-border bg-card">
      <div className="shell grid grid-cols-2 gap-px divide-border py-12 sm:grid-cols-3 lg:grid-cols-5">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="px-4 text-center">
            <p className="font-display text-3xl font-bold text-brand sm:text-4xl">{s.value}</p>
            <p className="mt-1.5 text-xs tracking-wide text-muted-foreground uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}