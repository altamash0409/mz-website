import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineDocumentDuplicate,
  HiOutlineClipboardDocumentCheck,
  HiOutlineBuildingOffice2,
  HiOutlineClock,
  HiOutlineQueueList,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
} from "react-icons/hi2";

export const Route = createFileRoute(
  "/case-studies/finance-automation-je-creation"
)({
  head: () => ({
    meta: [
      {
        title: "Consider Pie",
      },
      {
        name: "description",
        content:
          "Explore a NetSuite financial automation workflow for transaction review, department corrections, and automated journal entry creation.",
      },
      {
        property: "og:title",
        content: "Automated Journal Entry Creation in NetSuite | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Explore a NetSuite financial automation workflow for transaction review, department corrections, and automated journal entry creation.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "/case-studies/finance-automation-je-creation",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "/case-studies/finance-automation-je-creation",
      },
    ],
  }),
  component: FinanceAutomationCaseStudyPage,
});

const TECH_TAGS = [
  "NetSuite",
  "SuiteScript 2.x",
  "Suitelet",
  "Map/Reduce",
  "Saved Searches",
];

const CHALLENGES = [
  {
    icon: HiOutlineBuildingOffice2,
    title: "Department Values Missing or Overwritten",
    desc: "Department values on COGS transactions overwritten during downstream processing.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Manual Review of Affected Transactions",
    desc: "Finance teams forced to manually inspect line-by-line accounting entries.",
  },
  {
    icon: HiOutlineDocumentDuplicate,
    title: "COGS Accounting Corrections",
    desc: "Laborious creation of manual adjustment journal entries at month-end.",
  },
  {
    icon: HiOutlineClock,
    title: "Month-End Processing Pressure",
    desc: "Tight accounting close windows impacted by manual reconciliation bottlenecks.",
  },
  {
    icon: HiOutlineQueueList,
    title: "Large Transaction Volumes",
    desc: "Processing tens of thousands of lines exceeding UI governance thresholds.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Need for Controlled Review",
    desc: "Requirement for finance user verification before posting automated adjustments.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Saved Search", desc: "Retrieve transactions needing department fixes" },
  { step: "02", title: "Suitelet UI", desc: "Render interactive review interface" },
  { step: "03", title: "Select Criteria", desc: "Filter by subsidiary & posting period" },
  { step: "04", title: "Generate Data", desc: "Load transaction information for review" },
  { step: "05", title: "Review Data", desc: "Paginated user verification of entries" },
  { step: "06", title: "Submit Processing", desc: "Write queue payload to custom record" },
  { step: "07", title: "Map/Reduce JE Creation", desc: "Execute background journal posting" },
  { step: "08", title: "Error Handling & Email", desc: "Log exceptions and send email alert" },
];

const WORKFLOW_STEPS_DETAILED = [
  {
    step: "STEP 1 — Identify Transactions",
    desc: "A saved search retrieves transactions containing the relevant department information.",
  },
  {
    step: "STEP 2 — Select Processing Criteria",
    desc: "Users select the required subsidiary and posting period through a Suitelet interface.",
  },
  {
    step: "STEP 3 — Generate Information",
    desc: "The user generates the relevant transaction information for review.",
  },
  {
    step: "STEP 4 — Review the Data",
    desc: "The Suitelet provides a structured review process before submission. For larger data volumes, pagination is used to support efficient data review.",
  },
  {
    step: "STEP 5 — Submit for Processing",
    desc: "When the user submits the process, a custom record captures the required processing inputs.",
  },
  {
    step: "STEP 6 — Map/Reduce Processing",
    desc: "The Map/Reduce script processes the submitted entries and creates the required journal entries.",
  },
  {
    step: "STEP 7 — Error Handling and Completion",
    desc: "The process includes error handling and sends completion information through email.",
  },
];

const ARCHITECTURE_NODES = [
  "Saved Search",
  "Suitelet Interface",
  "User Review",
  "Custom Record",
  "Map/Reduce Processing",
  "Journal Entry Creation",
  "Error Handling",
  "Email Completion",
];

function FinanceAutomationCaseStudyPage() {
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> FINANCE AUTOMATION
            </span>

            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              Automating Journal Entry Creation for Department Corrections
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              A NetSuite automation workflow designed to identify transactions requiring department corrections, provide a review process, and automate journal entry creation for financial processing.
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
            eyebrow="Financial Operations Context"
            title="The Challenge"
            subtitle="Controlled department corrections for COGS-related transactions."
          />

          <Reveal className="mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
            <p>
              During financial processing, department values associated with COGS-related transactions can be missing or overwritten as transactions move through purchasing, sales, payment, and downstream processes.
            </p>
            <p className="mt-4">
              As a result, finance teams may need to manually identify affected transactions and perform department corrections through journal entries.
            </p>
            <p className="mt-4">
              The objective was to create a structured automation process to identify relevant transactions, allow users to review the data, and automate the journal entry creation process.
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
            eyebrow="Workflow Architecture"
            title="The Solution"
            subtitle="Structured review Suitelet coupled with asynchronous Map/Reduce journal entry posting."
          />

          <div className="mt-12">
            <Reveal>
              <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 sm:p-8 shadow-[0_8px_25px_rgba(11,31,75,0.06)]">
                <h3 className="text-sm font-bold tracking-wider text-[#0B1F4B] uppercase mb-8 text-center sm:text-left">
                  Visual Process Flow
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

      {/* 4. HOW THE PROCESS WORKS */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Step-by-Step Execution"
            title="How the Process Works"
            subtitle="Clear audit trail from data discovery to automated journal entry generation."
          />

          <div className="mt-12 space-y-4 max-w-4xl">
            {WORKFLOW_STEPS_DETAILED.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 0.04}>
                <div className="rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6">
                  <span className="text-xs font-bold tracking-wider text-[#0B1F4B] uppercase">
                    {s.step}
                  </span>
                  <p className="mt-2 text-sm font-medium text-[#667085] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL APPROACH / ARCHITECTURE */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="System Architecture"
            title="Designed for Controlled Financial Processing"
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
        <div className="shell text-center">
          <SectionHeading
            eyebrow="Outcome"
            title="The Result"
            subtitle="Streamlined financial review and accurate department correction journal posting."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
            <p>
              The solution created a structured workflow for identifying transactions requiring department corrections and automating journal entry creation. By combining saved searches, a Suitelet-based review process, custom records, and Map/Reduce processing, the process supports controlled financial automation while reducing manual processing requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
