import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineChartBar,
  HiOutlineTableCells,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineClock,
  HiOutlineFunnel,
  HiOutlineInbox,
} from "react-icons/hi2";

export const Route = createFileRoute(
  "/case-studies/netsuite-pricing-intelligence"
)({
  head: () => ({
    meta: [
      {
        title: "NetSuite Pricing Intelligence & Analysis Solution | Case Study | Consider Pie",
      },
      {
        name: "description",
        content:
          "Explore a custom NetSuite reporting solution designed to access Pricing Matrix data, compare Base Prices against Customer Price Levels, and automate bulk report generation.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Pricing Matrix, Customer Price Level, NetSuite Pricing Intelligence, SuiteScript Reporting, NetSuite Invoice Analysis, Credit Memo Pricing, Bulk Report Processing",
      },
      {
        property: "og:title",
        content:
          "NetSuite Pricing Intelligence & Analysis Solution | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Explore a custom NetSuite reporting solution designed to access Pricing Matrix data, compare Base Prices against Customer Price Levels, and automate bulk report generation.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content:
          "https://www.considerpie.com/case-studies/netsuite-pricing-intelligence",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.considerpie.com/case-studies/netsuite-pricing-intelligence",
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
            { "@type": "ListItem", position: 3, name: "NetSuite Pricing Intelligence & Analysis Solution", item: "https://www.considerpie.com/case-studies/netsuite-pricing-intelligence" },
          ],
        }),
      },
    ],
  }),
  component: PricingIntelligenceCaseStudyPage,
});

const TECH_TAGS = [
  "NetSuite",
  "SuiteScript 2.x",
  "Pricing Matrix",
  "Suitelet",
  "Scheduled Script",
  "Excel / CSV Export",
];

const CHALLENGES = [
  {
    icon: HiOutlineChartBar,
    title: "Daily Item Cost Fluctuation",
    desc: "Item costs change day-to-day, making constant monitoring of transaction-level margins essential for accuracy.",
  },
  {
    icon: HiOutlineTableCells,
    title: "Complex Pricing Matrix Structure",
    desc: "Pricing details reside inside NetSuite's complex Pricing Matrix, which standard reporting tools cannot query directly.",
  },
  {
    icon: HiOutlineFunnel,
    title: "Base vs. Customer Price Level Gaps",
    desc: "Difficulty comparing item Base Prices against custom customer price levels applicable for specific transactions.",
  },
  {
    icon: HiOutlineAdjustmentsHorizontal,
    title: "Multi-Dimensional Filter Needs",
    desc: "Managers require granular filtering by Subsidiary, Date Range, Customer, Location, Brand, and Sales Rep.",
  },
  {
    icon: HiOutlineClock,
    title: "UI Execution Timeouts",
    desc: "Large multi-subsidiary reports spanning thousands of invoice and credit memo lines crash standard browser sessions.",
  },
  {
    icon: HiOutlineInbox,
    title: "Lack of Request Tracking & Audit",
    desc: "Absence of a centralized portal for managers to view request history, status progress, and re-download generated reports.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Filter Selection", desc: "Select mandatory Subsidiary & Date Range plus optional filters (Customer, Location, Brand, Sales Rep)." },
  { step: "02", title: "Pre-Flight Validation", desc: "System checks required filters and queries data availability before submitting." },
  { step: "03", title: "Transaction Fetch", desc: "Retrieves all relevant Invoices and Credit Memos matching criteria within the subsidiary." },
  { step: "04", title: "Pricing Matrix Lookup", desc: "Queries item Pricing Matrix to extract Base Price and applicable Customer Price Level." },
  { step: "05", title: "Variance Analysis", desc: "Compares Base Price vs. Customer Price Level for transaction-level margin evaluation." },
  { step: "06", title: "Report Dispatch", desc: "Paginates on-screen view and processes bulk exports via background queue with email notification." },
];

function PricingIntelligenceCaseStudyPage() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-20 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs
                items={[
                  { label: "Case Studies", to: "/case-studies" },
                  { label: "NetSuite Pricing Intelligence & Analysis" },
                ]}
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> PRICING & REPORTING AUTOMATION
              </span>
              <span className="inline-flex items-center rounded-md bg-[#0B1F4B] px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-2xs">
                SCRIPT: SUITELET & SCHEDULED REPORTING ENGINE
              </span>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              NetSuite Pricing Intelligence & Analysis Solution
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base text-[#667085]">
              A custom NetSuite reporting solution designed to access complex Pricing Matrix data, compare Base Prices against Customer Price Levels across subsidiaries, and automate bulk report processing.
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

      {/* 2. THE PROBLEM STATEMENT */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Background & Problem"
            title="The Business Challenge"
            subtitle="Bridging the gap between day-to-day item price fluctuations and NetSuite's complex Pricing Matrix."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085] space-y-4">
            <p>
              Managers need to monitor item pricing for specific transactions across different subsidiaries and date ranges. Since item costs can fluctuate from day to day, they need to compare the <strong>Base Price</strong> against the applicable <strong>Customer Price Level</strong> for each transaction to identify pricing differences and ensure accurate pricing.
            </p>
            <p>
              However, this information cannot be obtained through standard NetSuite reporting tools. The required pricing information resides within the <strong>Pricing Matrix</strong>, which has a complex multi-tiered structure that is not directly accessible through standard Saved Searches or native NetSuite reports.
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
            eyebrow="Custom Architecture"
            title="The Solution"
            subtitle="Centralized transaction-level pricing reporting with custom Pricing Matrix traversal."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085] space-y-4">
            <p>
              A custom reporting solution was developed to address this requirement. The solution allows managers to select the required <strong>Subsidiary, Start Date, and End Date</strong> (mandatory filters), alongside optional filters including <strong>Customer, Location, Brand, and Sales Representative</strong>, to generate a detailed transaction-level report.
            </p>
            <p>
              The system retrieves all relevant transaction types—specifically <strong>Invoices and Credit Memos</strong>—within the selected subsidiary and date range. It inspects each line item, accesses the relevant Pricing Matrix data programmatically, determines the customer price level applicable for that transaction, and compares it directly against the item's Base Price.
            </p>
          </Reveal>

          {/* PROCESS FLOW DIAGRAM */}
          <div className="mt-12">
            <Reveal>
              <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 sm:p-8 shadow-[0_8px_25px_rgba(11,31,75,0.06)]">
                <h3 className="text-sm font-bold tracking-wider text-[#0B1F4B] uppercase mb-8 text-center">
                  End-to-End Pricing Intelligence Pipeline
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
