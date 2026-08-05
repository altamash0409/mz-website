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
    <section className="relative overflow-hidden bg-brand-deep py-28 text-background">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-sage/20 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cherry/15 blur-[140px]" />

      <div className="shell relative grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        {/* Left Column: Heading & Live Copilot Demo Card */}
        <Reveal className="flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cherry animate-pulse" /> AI & Automation
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Next-Gen Intelligence Layered on Your{" "}
              <span className="text-gradient-cherry">NetSuite Core</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-background/75 sm:text-lg">
              NetSuite holds the single source of truth for your business. We supercharge it —
              combining generative AI and machine learning with production-grade SuiteScript 2.1
              so insights automatically trigger executed transactions.
            </p>
          </div>

          {/* Interactive AI Copilot Mockup Window */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-background/15 bg-background/6 p-6 backdrop-blur-xl shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-background/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 flex items-center gap-1.5 text-xs font-medium text-background/60">
                  <HiOutlineCommandLine size={14} className="text-cherry" /> cpie AI Automation Terminal
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
              </span>
            </div>

            {/* Terminal Output Content */}
            <div className="mt-4 space-y-3 font-mono text-xs leading-relaxed text-background/85">
              <div className="flex items-start gap-2 text-cherry font-semibold">
                <span>&gt;</span>
                <span>exec suiteScript.aiForecasting({`{ period: "Q3", autoApprove: true }`})</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <HiOutlineCheckCircle size={15} />
                <span>14 Purchase orders validated against budget thresholds.</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <HiOutlineCheckCircle size={15} />
                <span>2 Anomaly alerts flagged &amp; routed for CFO review.</span>
              </div>
              <div className="rounded-lg bg-background/10 p-3 text-background/70 border border-background/10">
                <span className="font-semibold text-background">Result:</span> Executed Map/Reduce batch in 1.4s. 0 governance limits breached.
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-background/10 pt-4 text-center">
              {HIGHLIGHT_STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-bold text-background">{s.val}</p>
                  <p className="text-[10px] tracking-wider text-background/50 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
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
    </section>
  );
}