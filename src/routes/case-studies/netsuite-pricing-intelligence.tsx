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
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
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
          "Explore a NetSuite reporting solution designed to evaluate transaction-level pricing, compare Base Prices against Customer Price Levels, and support commercial decision-making.",
      },
      {
        property: "og:title",
        content:
          "NetSuite Pricing Intelligence & Analysis Solution | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Explore a NetSuite reporting solution designed to evaluate transaction-level pricing, compare Base Prices against Customer Price Levels, and support commercial decision-making.",
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
  "NetSuite ERP",
  "Pricing Matrix Analysis",
  "Commercial Intelligence",
  "Executive Reporting",
];

const CHALLENGES = [
  {
    icon: HiOutlineChartBar,
    title: "Daily Item Cost Fluctuation",
    desc: "Item costs change day-to-day, making constant monitoring of transaction-level margins essential for accuracy.",
  },
  {
    icon: HiOutlineTableCells,
    title: "Complex Pricing Structures",
    desc: "Pricing details reside inside complex pricing levels and matrices, hindering direct transaction-level evaluation.",
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
    title: "High Volume Reporting Overhead",
    desc: "Large multi-subsidiary datasets spanning thousands of invoice and credit memo lines required extensive manual aggregation.",
  },
  {
    icon: HiOutlineInbox,
    title: "Lack of Centralized Audit History",
    desc: "Absence of a centralized portal for managers to track request history and maintain audit visibility.",
  },
];

const BUSINESS_REQUIREMENTS = [
  "Granular transaction-level pricing reporting across Invoices and Credit Memos.",
  "Comparison of item Base Prices against Customer Price Levels for specific transaction lines.",
  "Multi-dimensional reporting filters including Subsidiary, Date Range, Customer, Location, Brand, and Sales Representative.",
  "High-volume reporting capability for enterprise datasets without operational performance degradation.",
  "Centralized dashboard interface for executives to track report requests and export commercial analysis.",
];

const OUTCOMES = [
  {
    icon: HiOutlineChartBar,
    title: "Improved Transaction-Level Pricing Visibility",
    desc: "Gave commercial leaders clear visibility into price level execution and margin performance across every line item.",
  },
  {
    icon: HiOutlineTableCells,
    title: "Easier Pricing Analysis",
    desc: "Simplified the evaluation of base prices versus customer-specific price levels across global subsidiaries.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Better Management Reporting",
    desc: "Delivered fast, multi-filtered financial reports for senior executives, sales leaders, and financial controllers.",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "Faster Identification of Pricing Variances",
    desc: "Accelerated detection of pricing discrepancies, unapproved discounts, and transaction-level margin erosion.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Better Support for Commercial Decision-Making",
    desc: "Empowered leadership with reliable pricing intelligence to optimize commercial strategies and protect profitability.",
  },
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
                SALES PRICING & MARGIN VISIBILITY
              </span>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              NetSuite Pricing Intelligence & Analysis Solution
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base text-[#667085]">
              A custom NetSuite reporting solution designed to evaluate complex Pricing Matrix data, compare Base Prices against Customer Price Levels across subsidiaries, and automate commercial report processing.
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
            subtitle="Bridging the gap between day-to-day item price fluctuations and transaction margin transparency."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085] space-y-4">
            <p>
              Managers need to monitor item pricing for specific transactions across different subsidiaries and date ranges. Since item costs can fluctuate from day to day, comparing the <strong>Base Price</strong> against the applicable <strong>Customer Price Level</strong> for each transaction is essential to identify pricing differences and ensure accurate commercial execution.
            </p>
            <p>
              However, obtaining this visibility across large transaction volumes requires consolidating multi-layered pricing structures into accessible, high-level business reports that executives can use for decision-making.
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

      {/* 3. BUSINESS REQUIREMENTS */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell max-w-4xl">
          <SectionHeading
            eyebrow="Objectives"
            title="Business Requirements"
            subtitle="Commercial intelligence requirements defined for transaction-level pricing visibility."
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
            eyebrow="Results & Impact"
            title="Business Outcome"
            subtitle="Commercial value and decision-making support delivered to leadership."
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
              NetSuite ERP • Pricing Matrix Intelligence • Commercial Reporting • Sales Variance Analysis
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
