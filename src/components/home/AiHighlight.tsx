import { Reveal } from "@/components/site/Reveal";
import { HiOutlineSparkles, HiOutlineCpuChip, HiOutlineArrowPath } from "react-icons/hi2";

const POINTS = [
  {
    icon: HiOutlineSparkles,
    title: "Generative AI assistants",
    body: "Embedded copilots that draft purchase orders, summarise customer history and answer natural-language queries against live NetSuite data.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "Predictive analytics",
    body: "Demand forecasting and cash-flow projection models trained on your own transaction history, surfaced directly on role dashboards.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Automated SuiteScript 2.1",
    body: "Map/Reduce pipelines that reconcile, validate and post at volume — with structured logging and self-healing retry logic.",
  },
];

export function AiHighlight() {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-background">
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-sage/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 -bottom-20 h-80 w-80 rounded-full bg-cherry/15 blur-[140px]" />
      <div className="shell section-pad relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cherry" /> AI & Automation
          </span>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Intelligence layered on top of your{" "}
            <span className="text-gradient-cherry">ERP core</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-background/70">
            NetSuite holds the cleanest data in your business. We put it to work — pairing
            generative AI and predictive models with production-grade SuiteScript so insights turn
            into posted transactions, not slide decks.
          </p>
        </Reveal>

        <div className="space-y-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.1}>
              <article className="flex gap-5 rounded-2xl border border-background/15 bg-background/8 p-6 backdrop-blur-md">
                <span className="h-fit rounded-xl bg-cherry/15 p-3 text-cherry">
                  <p.icon size={22} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-background">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-background/65">{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}