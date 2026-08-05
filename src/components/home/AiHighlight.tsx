import { Reveal } from "@/components/site/Reveal";
import {
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineArrowPath,
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineCommandLine,
} from "react-icons/hi2";

const FEATURES = [
  {
    icon: HiOutlineSparkles,
    tag: "Generative AI",
    title: "Generative ERP Copilots",
    body: "Embedded copilots that draft purchase orders, summarize vendor histories, and query live NetSuite datasets using natural language.",
  },
  {
    icon: HiOutlineCpuChip,
    tag: "Machine Learning",
    title: "Predictive Analytics Engine",
    body: "Demand forecasting and cash-flow projection models trained on your transactional history, surfaced natively on role dashboards.",
  },
  {
    icon: HiOutlineArrowPath,
    tag: "SuiteScript 2.1",
    title: "Self-Healing Automation Pipelines",
    body: "Map/Reduce scripts that reconcile, validate, and post high-volume transactions with structured error handling and automated retries.",
  },
  {
    icon: HiOutlineBolt,
    tag: "SuiteFlow",
    title: "Smart Workflow Orchestration",
    body: "Multi-tier approval matrices and event-driven triggers that eliminate manual handoffs between finance, sales, and logistics.",
  },
];

const HIGHLIGHT_STATS = [
  { label: "Processing Speed", val: "10x Faster" },
  { label: "Data Accuracy", val: "99.9%" },
  { label: "Governance Safe", val: "100%" },
];

export function AiHighlight() {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-background">
      {/* Ambient Glow Effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-sage/20 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cherry/15 blur-[140px]" />

      <div className="shell section-pad relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column */}
        <Reveal className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cherry" /> AI & Automation
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Intelligence Layered on Top of Your{" "}
            <span className="text-gradient-cherry">ERP Core</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-background/75 sm:text-lg">
            NetSuite holds the cleanest data in your business. We put it to work — pairing
            generative AI and predictive models with production-grade SuiteScript so insights turn
            into posted transactions, not slide decks.
          </p>
        </Reveal>

        {/* Right Column: Feature Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-background/15 bg-background/7 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cherry/40 hover:bg-background/12 hover:shadow-2xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cherry/20 text-cherry transition-colors group-hover:bg-cherry group-hover:text-accent-foreground">
                      <f.icon size={24} />
                    </span>
                    <span className="rounded-full border border-background/15 bg-background/5 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-background/60 uppercase">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-background">{f.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-background/70">{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom SVG Wave Divider */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mb-1">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-20 text-background fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C240,80 460,0 720,40 C980,80 1200,15 1440,50 L1440,90 L0,90 Z"></path>
        </svg>
      </div>
    </section>
  );
}