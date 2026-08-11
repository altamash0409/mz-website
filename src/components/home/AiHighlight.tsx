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
    <section className="relative overflow-hidden bg-[#F5F9FC] text-[#0B1F4B]">
      {/* Ambient Glow Effects - subtle light blue */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[#0B1F4B]/[0.02] blur-[150px]" />

      <div className="shell section-pad relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column */}
        <Reveal className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> AI & Automation
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#0B1F4B] sm:text-4xl lg:text-5xl">
            Intelligence Layered on Top of Your{" "}
            <span className="text-[#0B1F4B]">ERP Core</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#667085] sm:text-lg">
            NetSuite holds the cleanest data in your business. We put it to work — pairing
            generative AI and predictive models with production-grade SuiteScript so insights turn
            into posted transactions, not slide decks.
          </p>
        </Reveal>

        {/* Right Column: Feature Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 shadow-[0_8px_25px_rgba(11,31,75,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B1F4B]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF2F8] text-[#0B1F4B] transition-colors group-hover:bg-[#0B1F4B] group-hover:text-white">
                      <f.icon size={24} />
                    </span>
                    <span className="rounded-md border border-[#D9E2EA] bg-[#F5F9FC] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[#667085] uppercase">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0B1F4B]">{f.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#667085]">{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom SVG Wave Divider transitioning to white section */}
      <div className="relative w-full overflow-hidden leading-none pointer-events-none -mb-px">
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-20 sm:h-28 md:h-36 lg:h-44 text-[#FFFFFF] fill-current translate-y-[1px]"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,110 480,0 720,65 C960,130 1200,20 1440,75 L1440,140 L0,140 Z"></path>
        </svg>
      </div>
    </section>
  );
}