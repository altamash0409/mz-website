import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineCalculator,
} from "react-icons/hi2";

export const Route = createFileRoute(
  "/case-studies/finance-automation-je-creation"
)({
  head: () => ({
    meta: [
      {
        title: "Automated Journal Entry Creation | NetSuite Case Study | Consider Pie",
      },
      {
        name: "description",
        content:
          "Automated journal entry creation for COGS department corrections in NetSuite using Suitelets, Custom Records, and Map/Reduce automation.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Journal Entry Automation, COGS Department Correction, SuiteScript Map Reduce, NetSuite Finance Automation",
      },
      {
        property: "og:title",
        content:
          "Automated Journal Entry Creation for COGS Department Corrections | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Automated journal entry creation for COGS department corrections in NetSuite using Suitelets, Custom Records, and Map/Reduce automation.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content:
          "https://www.considerpie.com/case-studies/finance-automation-je-creation",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.considerpie.com/case-studies/finance-automation-je-creation",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Consider Pie", item: "https://www.considerpie.com" },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.considerpie.com/case-studies" },
            { "@type": "ListItem", position: 3, name: "Finance Automation JE Creation", item: "https://www.considerpie.com/case-studies/finance-automation-je-creation" },
          ],
        }),
      },
    ],
  }),
  component: FinanceAutomationCaseStudy,
});

const METRICS = [
  { label: "AUTOMATED CORRECTIONS", value: "100%", sub: "Eliminated manual JE data entry" },
  { label: "FINANCIAL CONTROL", value: "Review First", sub: "User approval before script execution" },
  { label: "SCALABILITY", value: "Multi-Threaded", sub: "Map/Reduce background processing" },
];

const ARCHITECTURE_NODES = [
  "Saved Search Filtering",
  "Suitelet Verification Dashboard",
  "Staging Custom Record",
  "Map/Reduce Journal Posting",
];

function FinanceAutomationCaseStudy() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-20 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Case Studies", to: "/case-studies" }, { label: "Finance Automation JE Creation" }]} />
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> CASE STUDY · FINANCE AUTOMATION
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              Automated Journal Entry Creation for COGS Department Corrections
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#667085]">
              Streamlining complex Cost of Goods Sold department reclassifications through controlled Suitelet verification and background Map/Reduce processing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="border-y border-[#D9E2EA] bg-[#FFFFFF] py-10">
        <div className="shell">
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05}>
                <div className="p-4">
                  <div className="text-xs font-bold tracking-wider text-[#0B1F4B] uppercase">
                    {m.label}
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-[#0B1F4B]">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-[#667085]">{m.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell max-w-4xl">
          <SectionHeading
            eyebrow="Overview"
            title="Executive Summary"
            subtitle="Automating high-volume department reclassifications while ensuring strict financial governance."
          />

          <Reveal className="mt-8 text-base leading-relaxed text-[#667085] space-y-4">
            <p>
              In multi-subsidiary NetSuite accounts, inventory transactions and Cost of Goods Sold (COGS) postings can occasionally record against default departments instead of line-item specific operational departments. Manually reviewing and creating journal entries to reclassify these transactions is time-consuming and prone to human oversight.
            </p>
            <p>
              Consider Pie designed an enterprise automation framework using NetSuite Saved Searches, a custom Suitelet review dashboard, custom staging records, and a Map/Reduce execution engine to identify, verify, and post department correction journal entries automatically.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGE */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell max-w-4xl">
          <SectionHeading
            eyebrow="Challenges"
            title="The Business Challenge"
            subtitle="Operational obstacles requiring an automated financial reclassification workflow."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Manual Journal Overhead", desc: "Finance team spending hours manually compiling spreadsheets to create monthly reclassification journal entries." },
              { title: "Risk of Posting Errors", desc: "Manual line-item entry increased the likelihood of incorrect GL account or department selections." },
              { title: "Lack of Approval Auditability", desc: "Absence of a centralized interface to verify proposed adjustments before journal creation." },
              { title: "Governance Timeouts", desc: "Attempting to create hundreds of journal lines synchronously caused UI execution timeouts." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 shadow-2xs">
                  <h3 className="text-base font-bold text-[#0B1F4B]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SOLUTION */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell max-w-4xl">
          <SectionHeading
            eyebrow="Implementation"
            title="The Technical Solution"
            subtitle="Combining NetSuite SuiteScript 2.x components into a controlled three-stage pipeline."
          />

          <div className="mt-10 space-y-6">
            {[
              {
                step: "01",
                title: "Identification via Saved Searches",
                desc: "Optimized saved searches continuously identify COGS transactions where recorded department differs from expected item department parameters.",
              },
              {
                step: "02",
                title: "Suitelet Verification Dashboard",
                desc: "A custom Suitelet interface presents eligible transactions to finance managers, allowing line-item selection and confirmation prior to processing.",
              },
              {
                step: "03",
                title: "Staging Custom Record & Map/Reduce",
                desc: "Confirmed items generate staging records that trigger a governance-safe Map/Reduce script to post consolidated Journal Entries in background threads.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="flex gap-5 rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0B1F4B] text-white font-bold">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1F4B]">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-[#667085] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURE PIPELINE */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="System Design"
            title="Pipeline Architecture"
            subtitle="Separating data selection, user verification, and background execution for high volumes."
          />

          <Reveal className="mt-8">
            <div className="rounded-2xl border border-[#0B1F4B] bg-[#0B1F4B] p-8 sm:p-10 text-white shadow-xl">
              <span className="text-xs font-bold tracking-widest text-[#D8E1EC] uppercase">
                ENTERPRISE ARCHITECTURE PIPELINE
              </span>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {ARCHITECTURE_NODES.map((node, i) => (
                  <div key={node} className="flex items-center gap-3">
                    <span className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white shadow-xs">
                      {node}
                    </span>
                    {i < ARCHITECTURE_NODES.length - 1 && (
                      <HiOutlineArrowRight size={16} className="text-[#D8E1EC]" />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-[#D8E1EC] max-w-2xl mx-auto leading-relaxed">
                The architecture separates data selection, user review, and background processing to support larger transaction volumes without risking UI timeouts or unverified posting.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. THE RESULT */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell text-center max-w-4xl">
          <SectionHeading
            eyebrow="Outcome"
            title="The Result"
            subtitle="Streamlined financial review and accurate department correction journal posting."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
            <p>
              The solution created a structured workflow for identifying transactions requiring department corrections and automating journal entry creation. By combining saved searches, a Suitelet-based review process, custom records, and{" "}
              <Link to="/netsuite-automation" className="font-semibold text-[#0B1F4B] underline hover:text-[#16357A]">
                NetSuite process automation
              </Link>
              , the process supports controlled financial automation built using specialized{" "}
              <Link to="/suitescript-development" className="font-semibold text-[#0B1F4B] underline hover:text-[#16357A]">
                SuiteScript development
              </Link>
              {" "}and custom{" "}
              <Link to="/netsuite-development" className="font-semibold text-[#0B1F4B] underline hover:text-[#16357A]">
                NetSuite custom development services
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="Related NetSuite Services"
            subtitle="Explore the underlying practice areas featured in this automation solution."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Reveal>
              <Link
                to="/netsuite-automation"
                className="group block h-full rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-xs"
              >
                <span className="text-xs font-bold text-[#0B1F4B] uppercase">PRACTICE AREA</span>
                <h3 className="mt-2 text-base font-bold text-[#0B1F4B] group-hover:text-[#16357A]">
                  NetSuite Automation Services →
                </h3>
                <p className="mt-1.5 text-xs text-[#667085]">
                  Automated financial journal creation, GL reclassification, and month-end close automation.
                </p>
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <Link
                to="/suitescript-development"
                className="group block h-full rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-xs"
              >
                <span className="text-xs font-bold text-[#0B1F4B] uppercase">PRACTICE AREA</span>
                <h3 className="mt-2 text-base font-bold text-[#0B1F4B] group-hover:text-[#16357A]">
                  SuiteScript Development →
                </h3>
                <p className="mt-1.5 text-xs text-[#667085]">
                  Suitelet review dashboards, N/search APIs, and background Map/Reduce script pipelines.
                </p>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                to="/netsuite-development"
                className="group block h-full rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-xs"
              >
                <span className="text-xs font-bold text-[#0B1F4B] uppercase">PRACTICE AREA</span>
                <h3 className="mt-2 text-base font-bold text-[#0B1F4B] group-hover:text-[#16357A]">
                  NetSuite Development Services →
                </h3>
                <p className="mt-1.5 text-xs text-[#667085]">
                  Custom staging record design, field sourcing rules, and enterprise logic.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
