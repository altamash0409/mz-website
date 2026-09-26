import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineDocumentDuplicate,
  HiOutlineArrowTrendingUp,
  HiOutlineSquares2X2,
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
          "Automated journal entry creation for COGS department corrections in NetSuite, enhancing financial control and GL consistency.",
      },
      {
        property: "og:title",
        content:
          "Automated Journal Entry Creation for COGS Department Corrections | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Automated journal entry creation for COGS department corrections in NetSuite, enhancing financial control and GL consistency.",
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

const TECH_TAGS = [
  "NetSuite ERP",
  "Finance Automation",
  "General Ledger Control",
  "COGS Reclassification",
];

const CHALLENGES = [
  { title: "Manual Journal Overhead", desc: "Finance teams spending extensive time manually compiling transaction spreadsheets to create monthly reclassification journal entries." },
  { title: "Risk of Posting Errors", desc: "Manual line-item entry increased the likelihood of incorrect GL account or department selections." },
  { title: "Lack of Approval Auditability", desc: "Absence of a centralized interface to verify proposed adjustments before journal creation." },
  { title: "Department Misallocations", desc: "Transactions posting to default departments instead of line-item specific operational departments." },
];

const BUSINESS_REQUIREMENTS = [
  "Automatic identification of COGS transactions requiring departmental reclassification based on item attributes.",
  "Controlled finance management interface allowing line-item review and verification prior to journal posting.",
  "Automated creation of reclassification Journal Entries for large transaction volumes without manual line entry.",
  "Complete audit trail ensuring compliance with corporate accounting policies and internal controls.",
];

const OUTCOMES = [
  {
    icon: HiOutlineClock,
    title: "Reduced Repetitive Finance Activities",
    desc: "Streamlined the monthly financial close by eliminating manual spreadsheet compilation and repetitive line-item entry.",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "More Consistent Accounting Treatment",
    desc: "Ensured uniform departmental reclassification rules applied systematically across all transactions without human error.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Improved Finance Review and Control",
    desc: "Gave finance managers complete visibility and confirmation oversight before committing journal adjustments to the GL.",
  },
  {
    icon: HiOutlineDocumentDuplicate,
    title: "Better Transaction-Level Accounting",
    desc: "Accurately captured granular departmental GL impacts at the transaction level for precise cost accounting.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Scalable Financial Processing",
    desc: "Enabled the finance department to process thousands of line-item reclassifications effortlessly without operational friction.",
  },
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

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> FINANCE AUTOMATION
              </span>
              <span className="inline-flex items-center rounded-md bg-[#0B1F4B] px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-2xs">
                AUTOMATED GL IMPACT
              </span>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              Automated Journal Entry Creation for COGS Department Corrections
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-[#667085]">
              Streamlining complex Cost of Goods Sold department reclassifications through controlled verification and automated journal entry processing.
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
        <div className="shell max-w-4xl">
          <SectionHeading
            eyebrow="Challenges"
            title="The Business Challenge"
            subtitle="Operational obstacles requiring an automated financial reclassification workflow."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085]">
            <p>
              In multi-subsidiary NetSuite accounts, inventory transactions and Cost of Goods Sold (COGS) postings can occasionally record against default departments instead of line-item specific operational departments. Manually reviewing and creating journal entries to reclassify these transactions is time-consuming and prone to human oversight.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <h3 className="text-base font-bold text-[#0B1F4B]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS REQUIREMENTS */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell max-w-4xl">
          <SectionHeading
            eyebrow="Objectives"
            title="Business Requirements"
            subtitle="Core capabilities required to automate COGS reclassifications with full administrative control."
          />

          <Reveal className="mt-10">
            <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 shadow-[0_8px_25px_rgba(11,31,75,0.06)]">
              <ul className="space-y-4">
                {BUSINESS_REQUIREMENTS.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <HiOutlineCheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0B1F4B]" />
                    <span className="text-base text-[#667085] leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. BUSINESS OUTCOME */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Results & Value"
            title="Business Outcome"
            subtitle="Operational value and enhanced financial governance delivered."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1F4B] text-white">
                    <o.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0B1F4B]">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                    {o.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY & EXPERTISE */}
      <section className="py-12 bg-[#F5F9FC] border-t border-[#D9E2EA]">
        <div className="shell text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#0B1F4B]">
              <HiOutlineSquares2X2 size={16} />
              <span>Technology & Core Expertise</span>
            </div>
            <p className="text-sm text-[#667085] max-w-xl mx-auto">
              NetSuite ERP • Financial Reclassification • General Ledger Management • Automated Journal Operations
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
