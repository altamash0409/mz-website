import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineGlobeAlt,
  HiOutlineLanguage,
  HiOutlineClock,
} from "react-icons/hi2";

export const Route = createFileRoute(
  "/case-studies/customer-statement-automation"
)({
  head: () => ({
    meta: [
      {
        title: "Automated Customer Statement Distribution | NetSuite Case Study | Consider Pie",
      },
      {
        name: "description",
        content:
          "Explore a scalable NetSuite automation solution for customer statement generation and distribution across a multi-subsidiary environment.",
      },
      {
        property: "og:title",
        content:
          "Automated Customer Statement Distribution in NetSuite | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Explore a scalable NetSuite automation solution for customer statement generation and distribution across a multi-subsidiary environment.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.considerpie.com/case-studies/customer-statement-automation",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.considerpie.com/case-studies/customer-statement-automation",
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
            { "@type": "ListItem", position: 3, name: "Customer Statement Automation", item: "https://www.considerpie.com/case-studies/customer-statement-automation" },
          ],
        }),
      },
    ],
  }),
  component: CustomerStatementCaseStudyPage,
});

const TECH_TAGS = [
  "NetSuite",
  "SuiteScript 2.x",
  "Map/Reduce",
  "Saved Searches",
  "Excel Generation",
];

const CHALLENGES = [
  {
    icon: HiOutlineCalendar,
    title: "Different Statement Date Requirements",
    desc: "Varying requirements for statement cutoff dates (As Of Date vs Month End).",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Invoice-Only or Combined Statements",
    desc: "Need to include either open invoices only or open invoices with credit memos.",
  },
  {
    icon: HiOutlineCog,
    title: "Customer-Level Configuration",
    desc: "Individual customer preferences governing opt-in, formatting, and timing.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Multi-Subsidiary Processing",
    desc: "Managing statements across nearly 40 subsidiaries in a single enterprise framework.",
  },
  {
    icon: HiOutlineLanguage,
    title: "Regional Language & Formatting",
    desc: "Subsidiary-specific currency symbols, languages, and regional rules.",
  },
  {
    icon: HiOutlineClock,
    title: "Scheduled Automated Distribution",
    desc: "Background execution without manual intervention or script timeout risks.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Customer Configuration", desc: "Evaluate custom fields on customer record" },
  { step: "02", title: "Saved Search", desc: "Identify eligible accounts dynamically" },
  { step: "03", title: "Map/Reduce Processing", desc: "Process bulk data governance-safely" },
  { step: "04", title: "Subsidiary-Specific Logic", desc: "Apply regional rules and parameters" },
  { step: "05", title: "Dynamic Excel Generation", desc: "Create localized statement files" },
  { step: "06", title: "Automated Distribution", desc: "Dispatch email notifications with attachments" },
  { step: "07", title: "Status Tracking", desc: "Record sent dates and delivery statuses" },
];

function CustomerStatementCaseStudyPage() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-20 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Case Studies", to: "/case-studies" }, { label: "Customer Statement Automation" }]} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE AUTOMATION
              </span>
              <span className="inline-flex items-center rounded-md bg-[#0B1F4B] px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-2xs">
                SCRIPT: SUITESCRIPT 2.X MAP/REDUCE
              </span>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              Automating Customer Statements Across a Multi-Subsidiary Environment
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-[#667085]">
              A scalable NetSuite automation solution designed to generate and distribute customer statements based on configurable customer and subsidiary-level requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {TECH_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-3 py-1 text-xs font-semibold text-[#0B1F4B] shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Background & Requirements"
            title="The Challenge"
            subtitle="Centralizing customer statement distribution across global business units with distinct requirements."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085]">
            <p>
              Managing customer statements across a large multi-subsidiary environment can become complex when customers and subsidiaries have different requirements for statement timing, transaction selection, language, formatting, and calculation rules.
            </p>
            <p className="mt-4">
              The requirement was to create a centralized and scalable automation process capable of generating statements based on configurable criteria while supporting regional variations across nearly 40 subsidiaries.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1F4B] text-white">
                    <c.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#0B1F4B]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                    {c.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="Architecture & Workflow"
            title="The Solution"
            subtitle="Configurable framework leveraging custom customer fields, saved searches, SuiteScript 2.x, and Map/Reduce."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085]">
            <p>
              A configurable NetSuite automation framework was developed using custom customer fields, saved searches, SuiteScript 2.x, and Map/Reduce processing.
            </p>
            <p className="mt-4">
              Customer-level fields control how statements are generated, while a saved search dynamically identifies eligible customers. The Map/Reduce process then applies the required logic and generates statements dynamically.
            </p>
          </Reveal>

          {/* PROCESS FLOW DIAGRAM */}
          <div className="mt-12">
            <Reveal>
              <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 sm:p-8 shadow-[0_8px_25px_rgba(11,31,75,0.06)]">
                <h3 className="text-sm font-bold tracking-wider text-[#0B1F4B] uppercase mb-8 text-center">
                  Automated Statement Generation Process Flow
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {PROCESS_STEPS.map((ps) => (
                    <div
                      key={ps.title}
                      className="relative flex flex-col justify-between rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-5"
                    >
                      <div>
                        <span className="text-xs font-bold text-[#0B1F4B]">
                          STEP {ps.step}
                        </span>
                        <h4 className="mt-2 text-base font-semibold text-[#0B1F4B]">
                          {ps.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-[#667085] leading-relaxed">
                          {ps.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
