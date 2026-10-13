import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineBugAnt,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineCpuChip,
} from "react-icons/hi2";

export const Route = createFileRoute("/suitescript-ai")({
  head: () => ({
    meta: [
      {
        title: "AI Tool | Consider Pie",
      },
      {
        name: "description",
        content:
          "Explore AI-assisted SuiteScript analysis, code explanations, debugging assistance, and script modernization. Help NetSuite developers understand complex code, identify potential issues, and accelerate their development workflow.",
      },
      {
        name: "keywords",
        content:
          "AI Tool, NetSuite AI development, SuiteScript analysis, SuiteScript modernization, Consider Pie",
      },
      {
        property: "og:title",
        content: "AI Tool | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "AI-Powered NetSuite Script Engineering & Modernization. Explore AI-assisted SuiteScript analysis, code explanations, debugging assistance, and script modernization.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.considerpie.com/suitescript-ai",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/suitescript-ai" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "AI Tool",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Cloud-based",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          url: "https://ai.considerpie.com",
          description:
            "Explore AI-assisted SuiteScript analysis, code explanations, debugging assistance, and script modernization. Help NetSuite developers understand complex code, identify potential issues, and accelerate their development workflow.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Consider Pie",
              item: "https://www.considerpie.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "AI Tool",
              item: "https://www.considerpie.com/suitescript-ai",
            },
          ],
        }),
      },
    ],
  }),
  component: SuiteScriptAIPage,
});

const CAPABILITIES = [
  {
    icon: HiOutlineDocumentMagnifyingGlass,
    tag: "Analysis",
    title: "SuiteScript Analysis",
    description:
      "Perform deep structural reviews of entry points, record load logic, search query construction, and NetSuite governor unit consumption.",
  },
  {
    icon: HiOutlineCodeBracket,
    tag: "Explanations",
    title: "Code Explanations",
    description:
      "Get clear, plain-English architectural breakdowns of legacy SuiteScript 1.0 or intricate 2.x scripts, cross-record mutations, and dependencies.",
  },
  {
    icon: HiOutlineBugAnt,
    tag: "Diagnostics",
    title: "Debugging Assistance",
    description:
      "Identify silent runtime exceptions, record collision risks, unhandled errors, and governance limit breaches before deploying to production.",
  },
  {
    icon: HiOutlineArrowPath,
    tag: "Refactoring",
    title: "Script Modernization",
    description:
      "Modernize legacy scripts into clean, modular SuiteScript 2.1 (ES6+), adopting Map/Reduce parallelism and RESTlet performance standards.",
  },
];

function SuiteScriptAIPage() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-52 sm:pt-60 md:pt-64 pb-20 sm:pb-24 text-[#0B1F4B]">
        {/* Subtle Ambient Light Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />

        <div className="shell relative">
          <Reveal className="text-center">
            {/* Breadcrumb Navigation */}
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "AI Tool" }]} />
            </div>

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <HiOutlineSparkles size={14} className="text-[#0B1F4B]" />
              <span>AI-Powered NetSuite Development</span>
            </div>

            {/* Main Heading */}
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold tracking-tight text-[#0B1F4B] sm:text-5xl lg:text-6xl">
              AI-Powered NetSuite Script Engineering &amp; Modernization
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#667085] sm:text-lg">
              Explore AI-assisted SuiteScript analysis, code explanations, debugging assistance, and
              script modernization. Help NetSuite developers understand complex code, identify
              potential issues, and accelerate their development workflow.
            </p>

            {/* CTA Action Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://ai.considerpie.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B1F4B] px-8 py-3.5 text-base font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#16357A] hover:shadow-md hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                aria-label="Try SuiteScript AI (opens in a new tab)"
              >
                <span>Try SuiteScript AI</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>

          {/* AI CODE & SCRIPT ANALYSIS PREVIEW CARD */}
          <Reveal delay={0.15} className="mt-14 sm:mt-16 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-4 sm:p-6 lg:p-8 shadow-[0_12px_36px_rgba(11,31,75,0.08)]">
              {/* Window Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-[#E5EBF0] pb-4 gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#E5EBF0]" />
                    <span className="h-3 w-3 rounded-full bg-[#E5EBF0]" />
                    <span className="h-3 w-3 rounded-full bg-[#E5EBF0]" />
                  </div>
                  <span className="ml-2 font-mono text-xs font-semibold text-[#0B1F4B]">
                    order_approval_ue.js
                  </span>
                  <span className="rounded bg-[#EAF2F8] px-2 py-0.5 font-mono text-[10px] font-bold text-[#0B1F4B]">
                    SuiteScript 2.1
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    AI Analysis Ready
                  </span>
                </div>
              </div>

              {/* Code Snippet & AI Panel Split Grid */}
              <div className="mt-5 grid gap-6 lg:grid-cols-12 items-start">
                {/* Left: Code Snippet */}
                <div className="lg:col-span-7 rounded-xl bg-[#071633] p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto shadow-inner border border-[#16357A]/40">
                  <div className="flex items-center justify-between text-[11px] text-[#AAB7C7] border-b border-white/10 pb-2 mb-3">
                    <span>// SuiteScript 2.1 User Event Script</span>
                    <span className="text-[#AAB7C7]/70">Context: beforeSubmit</span>
                  </div>
                  <pre className="text-left font-mono">
                    <code>
                      <span className="text-sky-300">/**</span>
                      {"\n"}
                      <span className="text-sky-300"> * @NApiVersion 2.1</span>
                      {"\n"}
                      <span className="text-sky-300"> * @NScriptType UserEventScript</span>
                      {"\n"}
                      <span className="text-sky-300"> */</span>
                      {"\n"}
                      <span className="text-purple-300">define</span>([
                      <span className="text-amber-200">&apos;N/record&apos;</span>,{" "}
                      <span className="text-amber-200">&apos;N/search&apos;</span>,{" "}
                      <span className="text-amber-200">&apos;N/log&apos;</span>], (record, search,
                      log) =&gt; &#123;
                      {"\n"}
                      {"  "}
                      <span className="text-purple-300">const</span>{" "}
                      <span className="text-blue-300">beforeSubmit</span> = (context) =&gt; &#123;
                      {"\n"}
                      {"    "}
                      <span className="text-purple-300">if</span> (context.type !==
                      context.UserEventType.CREATE) <span className="text-purple-300">return</span>;
                      {"\n"}
                      {"    "}
                      <span className="text-purple-300">const</span> newRec = context.newRecord;
                      {"\n"}
                      {"    "}
                      <span className="text-emerald-400">
                        // Governance check: optimized single lookup
                      </span>
                      {"\n"}
                      {"    "}
                      <span className="text-purple-300">const</span> total =
                      Number(newRec.getValue(&#123; fieldId:{" "}
                      <span className="text-amber-200">&apos;total&apos;</span> &#125;) || 0);
                      {"\n"}
                      {"    "}
                      <span className="text-purple-300">if</span> (total &gt; 50000) &#123;
                      {"\n"}
                      {"      "}newRec.setValue(&#123; fieldId:{" "}
                      <span className="text-amber-200">&apos;approvalstatus&apos;</span>, value: 1
                      &#125;);
                      {"\n"}
                      {"      "}log.audit(&#123; title:{" "}
                      <span className="text-amber-200">&apos;Approval Routed&apos;</span>, details:
                      `Amount: $&#123;total&#125;` &#125;);
                      {"\n"}
                      {"    "}&#125;
                      {"\n"}
                      {"  "}&#125;;
                      {"\n"}
                      {"  "}
                      <span className="text-purple-300">return</span> &#123; beforeSubmit &#125;;
                      {"\n"}
                      &#125;);
                    </code>
                  </pre>
                </div>

                {/* Right: AI Analysis Breakdown */}
                <div className="lg:col-span-5 space-y-3.5">
                  <div className="rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-4">
                    <div className="flex items-center gap-2">
                      <HiOutlineShieldCheck className="h-5 w-5 text-[#0B1F4B]" />
                      <h4 className="text-sm font-bold text-[#0B1F4B]">Governance Analysis</h4>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#667085]">
                      0 query loops detected. Minimal consumption of 0 governor units in
                      beforeSubmit.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-4">
                    <div className="flex items-center gap-2">
                      <HiOutlineCpuChip className="h-5 w-5 text-[#0B1F4B]" />
                      <h4 className="text-sm font-bold text-[#0B1F4B]">Modernization Check</h4>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#667085]">
                      Targeted for SuiteScript 2.1 with ES6+ syntax. Verified parameter signatures
                      and clean module exports.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-4">
                    <div className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="h-5 w-5 text-[#0B1F4B]" />
                      <h4 className="text-sm font-bold text-[#0B1F4B]">Code Explanation</h4>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#667085]">
                      Enforces high-value purchase routing on new transactions without requiring
                      heavy database queries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section id="capabilities" className="section-pad bg-[#FFFFFF] border-t border-[#E5EBF0]">
        <div className="shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="Core SuiteScript AI Capabilities"
            subtitle="Designed specifically for NetSuite developers, administrators, and ERP technical teams."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.06}>
                <article className="group flex h-full flex-col justify-between rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0B1F4B] hover:bg-[#FFFFFF]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF2F8] text-[#0B1F4B] transition-colors group-hover:bg-[#0B1F4B] group-hover:text-white">
                        <cap.icon size={24} />
                      </span>
                      <span className="rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#0B1F4B] uppercase">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#0B1F4B]">{cap.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#667085]">{cap.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTING TEXT & SANDBOX BEST PRACTICES CALLOUT */}
      <section className="section-pad bg-[#F5F9FC] border-t border-[#E5EBF0]">
        <div className="shell max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF2F8] text-[#0B1F4B]">
                  <HiOutlineShieldCheck size={22} />
                </span>
                <span className="text-xs font-bold tracking-wider text-[#0B1F4B] uppercase">
                  Development Guidance & Safety
                </span>
              </div>

              {/* Required Supporting Text */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#0B1F4B] font-medium">
                From analyzing existing scripts to exploring modernization opportunities,
                SuiteScript AI helps make NetSuite development more efficient. Always review
                generated code and validate changes in a Sandbox before production deployment.
              </p>

              {/* Best Practice Highlights */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3 pt-6 border-t border-[#E5EBF0]">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F4B]">
                    1. Sandbox Validation
                  </h4>
                  <p className="text-xs leading-relaxed text-[#667085]">
                    Always test trigger conditions and execution limits in non-production accounts.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F4B]">
                    2. Code Review
                  </h4>
                  <p className="text-xs leading-relaxed text-[#667085]">
                    Verify business logic, field IDs, and accounting impact with a NetSuite peer
                    review.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F4B]">
                    3. Governance Check
                  </h4>
                  <p className="text-xs leading-relaxed text-[#667085]">
                    Ensure scripts respect execution limits for high-volume Map/Reduce and User
                    Event queues.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONSULTATION & CONTACT */}
      <Contact />
    </main>
  );
}
