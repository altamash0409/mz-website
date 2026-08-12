import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineGlobeAlt,
  HiOutlineLanguage,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export const Route = createFileRoute(
  "/case-studies/customer-statement-automation"
)({
  head: () => ({
    meta: [
      {
        title: "Consider Pie",
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
        content: "/case-studies/customer-statement-automation",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "/case-studies/customer-statement-automation",
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

const CONFIG_FIELDS = [
  {
    label: "AS OF DATE",
    desc: "Generates customer statements through the current live execution date.",
  },
  {
    label: "AS OF MONTH END",
    desc: "Generates customer statements through the previous month-end cutoff date.",
  },
  {
    label: "TRANSACTION TYPE",
    desc: "Configures statements to include open invoices, credit memos, or both.",
  },
  {
    label: "SEND MONTHLY STATEMENT",
    desc: "Boolean control specifying if the customer is included in automated runs.",
  },
  {
    label: "STATEMENT LAST SENT DATE",
    desc: "Audit timestamp tracking exact date and time statement was generated.",
  },
  {
    label: "STATEMENT SENT SUCCESSFULLY",
    desc: "Status confirmation verifying email dispatch and attachment delivery.",
  },
  {
    label: "STATEMENT TIME ZONE",
    desc: "Supports localized time-zone processing for international subsidiaries.",
  },
];

const SCALE_STEPS = [
  "Identifies eligible customer records using optimized saved search filters.",
  "Reads customer-specific statement preferences and configuration fields.",
  "Applies required date ranges and transaction type selection rules.",
  "Processes subsidiary-specific templates and regional localization logic.",
  "Generates formatted Excel statement files dynamically via SuiteScript.",
  "Distributes emails automatically with generated attachments.",
  "Updates transaction tracking fields and logs execution history.",
];

function CustomerStatementCaseStudyPage() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-4 flex items-center justify-center">
              <Link
                to="/case-studies"
                className="text-xs font-semibold text-[#667085] hover:text-[#0B1F4B] transition-colors"
              >
                ← Back to Case Studies
              </Link>
            </div>

            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE AUTOMATION
            </span>

            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              Automating Customer Statements Across a Multi-Subsidiary Environment
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
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

          <Reveal className="mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
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

      {/* 3. THE SOLUTION & PROCESS FLOW */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="Architecture & Workflow"
            title="The Solution"
            subtitle="Configurable framework leveraging custom customer fields, saved searches, SuiteScript 2.x, and Map/Reduce."
          />

          <Reveal className="mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
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
                <h3 className="text-sm font-bold tracking-wider text-[#0B1F4B] uppercase mb-8 text-center sm:text-left">
                  Automated Statement Generation Process Flow
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {PROCESS_STEPS.map((ps, idx) => (
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
                      {idx < PROCESS_STEPS.length - 1 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#0B1F4B] bg-[#FFFFFF] rounded-full p-1 border border-[#D9E2EA]">
                          <HiOutlineArrowRight size={14} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. FLEXIBLE CUSTOMER CONFIGURATION */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Data Control"
            title="Flexible Customer-Level Configuration"
            subtitle="Custom fields on customer records allow granular control over execution parameters."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONFIG_FIELDS.map((cf, idx) => (
              <Reveal key={cf.label} delay={idx * 0.04}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 shadow-2xs hover:border-[#0B1F4B]">
                  <span className="inline-block rounded-md bg-[#EAF2F8] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#0B1F4B] uppercase">
                    FIELD CONTROLLER
                  </span>
                  <h3 className="mt-3 text-base font-bold text-[#0B1F4B]">
                    {cf.label}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                    {cf.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BUILT FOR SCALE */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="Scalability"
            title="Built for Multi-Subsidiary Processing"
            subtitle="Governance-safe Map/Reduce execution designed to process thousands of customer records."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="space-y-4">
                {SCALE_STEPS.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-4 shadow-2xs"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B1F4B] text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <p className="text-sm font-medium text-[#0B1F4B] pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-[#0B1F4B] bg-[#0B1F4B] p-8 text-white shadow-xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D8E1EC]">
                  <HiOutlineShieldCheck size={18} className="text-white" />
                  KEY ADVANTAGE
                </span>
                <blockquote className="mt-6 text-xl font-bold leading-snug text-white">
                  "One scalable automation framework supporting complex multi-subsidiary requirements."
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-[#D8E1EC]">
                  Map/Reduce handles governance limits seamlessly, enabling full background execution without timeout failures or manual batch slicing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. REGIONAL VARIATIONS */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Global Flexibility"
            title="One Framework. Multiple Regional Requirements."
            subtitle="Parameter-driven localization logic tailored for localized subsidiary operations."
          />

          <Reveal className="mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
            <p>
              Script parameters and configuration records are used to support variations across regional entities:
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Localized Language Templates",
              "Subsidiary-Specific Branding & Layouts",
              "Regional Calculation & Tax Formatting Rules",
              "Configurable Currency Symbol Display",
              "Subsidiary-Specific Email Sender Profiles",
              "Customized Attachment Naming Conventions",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-lg border border-[#D9E2EA] bg-[#F5F9FC] p-4 text-sm font-semibold text-[#0B1F4B]">
                  <HiOutlineCheckCircle size={18} className="shrink-0 text-[#0B1F4B]" />
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE RESULT */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell text-center">
          <SectionHeading
            eyebrow="Outcome"
            title="The Result"
            subtitle="Centralized, dependable, and fully automated statement distribution."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
            <p>
              The solution created a centralized and configurable process for customer statement generation and distribution. By combining customer-level configuration, saved search processing,{" "}
              <Link to="/netsuite-automation" className="font-semibold text-[#0B1F4B] underline hover:text-[#16357A]">
                NetSuite process automation
              </Link>
              , dynamic Excel generation, and{" "}
              <Link to="/netsuite-oneworld-consulting" className="font-semibold text-[#0B1F4B] underline hover:text-[#16357A]">
                NetSuite OneWorld multi-subsidiary logic
              </Link>
              , the business manages complex global statement requirements powered by custom{" "}
              <Link to="/suitescript-development" className="font-semibold text-[#0B1F4B] underline hover:text-[#16357A]">
                SuiteScript 2.x development
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section-pad bg-[#FFFFFF]">
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
                className="group block h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-xs"
              >
                <span className="text-xs font-bold text-[#0B1F4B] uppercase">PRACTICE AREA</span>
                <h3 className="mt-2 text-base font-bold text-[#0B1F4B] group-hover:text-[#16357A]">
                  NetSuite Automation Services →
                </h3>
                <p className="mt-1.5 text-xs text-[#667085]">
                  Financial reconciliations, automated statement dispatch, and background processing.
                </p>
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <Link
                to="/suitescript-development"
                className="group block h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-xs"
              >
                <span className="text-xs font-bold text-[#0B1F4B] uppercase">PRACTICE AREA</span>
                <h3 className="mt-2 text-base font-bold text-[#0B1F4B] group-hover:text-[#16357A]">
                  SuiteScript Development →
                </h3>
                <p className="mt-1.5 text-xs text-[#667085]">
                  Governance-safe Map/Reduce batch processing and dynamic file generation.
                </p>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                to="/netsuite-oneworld-consulting"
                className="group block h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-xs"
              >
                <span className="text-xs font-bold text-[#0B1F4B] uppercase">PRACTICE AREA</span>
                <h3 className="mt-2 text-base font-bold text-[#0B1F4B] group-hover:text-[#16357A]">
                  NetSuite OneWorld Consulting →
                </h3>
                <p className="mt-1.5 text-xs text-[#667085]">
                  Multi-subsidiary parameter routing, localized templates, and language controls.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
