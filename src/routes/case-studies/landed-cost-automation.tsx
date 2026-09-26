import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineCalculator,
  HiOutlineCube,
  HiOutlineArrowsRightLeft,
  HiOutlineSparkles,
  HiOutlineDocumentCheck,
  HiOutlineScale,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export const Route = createFileRoute(
  "/case-studies/landed-cost-automation"
)({
  head: () => ({
    meta: [
      {
        title: "Automated Landed Cost Calculation | NetSuite Case Study | Consider Pie",
      },
      {
        name: "description",
        content:
          "Explore a NetSuite business automation solution for landed cost allocations and effective unit cost calculations across inventory transactions.",
      },
      {
        property: "og:title",
        content: "Automated Landed Cost Calculation in NetSuite | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Explore a NetSuite business automation solution for landed cost allocations and effective unit cost calculations across inventory transactions.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.considerpie.com/case-studies/landed-cost-automation",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.considerpie.com/case-studies/landed-cost-automation",
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
            { "@type": "ListItem", position: 3, name: "Landed Cost Automation", item: "https://www.considerpie.com/case-studies/landed-cost-automation" },
          ],
        }),
      },
    ],
  }),
  component: LandedCostCaseStudyPage,
});

const TECH_TAGS = [
  "NetSuite ERP",
  "Inventory Costing & Valuation",
  "Landed Cost Allocation",
  "Supply Chain Management",
];

const CHALLENGES = [
  {
    icon: HiOutlineCalculator,
    title: "Manual Landed Cost Overhead",
    desc: "Labor-intensive manual calculations for allocating freight, duty, and handling fees to individual inventory items.",
  },
  {
    icon: HiOutlineArrowsRightLeft,
    title: "Multiple Transaction Types",
    desc: "Managing diverse inventory transaction flows including item receipts, inventory adjustments, transfers, and assembly builds.",
  },
  {
    icon: HiOutlineCube,
    title: "Varied Sublist Structures",
    desc: "Ensuring uniform landed cost treatment across different transaction line types and item categories.",
  },
  {
    icon: HiOutlineScale,
    title: "Complex Allocation Factors",
    desc: "Retrieving accurate freight, duty, and insurance allocations per transaction line without manual error.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Foreign Currency Adjustments",
    desc: "Accurately combining foreign currency purchase rates with allocated landed cost charges.",
  },
  {
    icon: HiOutlineDocumentCheck,
    title: "Valuation Consistency",
    desc: "Preventing calculation drift and ensuring full auditability for historical and current inventory valuations.",
  },
];

const BUSINESS_REQUIREMENTS = [
  "Automated line-item identification of inventory receipts, assembly builds, and transfers requiring landed cost adjustments.",
  "Dynamic retrieval and allocation of applicable freight, duty, tax, and handling charges per transaction line.",
  "Automated calculation of effective net unit costs combining purchase rates and allocated landed cost components.",
  "Direct updating of transaction values in NetSuite to maintain accurate cost accounting across all inventory assets.",
  "Seamless support for multi-currency transactions and varied inventory sublists.",
];

const OUTCOMES = [
  {
    icon: HiOutlineCheckCircle,
    title: "Improved Inventory Costing Consistency",
    desc: "Ensured landed cost allocations apply uniformly and accurately across all inventory movements and assembly builds.",
  },
  {
    icon: HiOutlineCalculator,
    title: "Reduced Manual Cost Calculations",
    desc: "Eliminated manual spreadsheet calculations, reducing administrative overhead and preventing human entry errors.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Better Effective Unit Cost Visibility",
    desc: "Provided management with accurate, real-time effective unit cost data for reliable product margin evaluation.",
  },
  {
    icon: HiOutlineScale,
    title: "Better Freight & Duty Management",
    desc: "Seamlessly incorporated complex ancillary logistics costs directly into gross margin and inventory balance sheet metrics.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Reliable Financial & Supply Chain Data",
    desc: "Strengthened balance sheet integrity and supply chain transparency with fully audit-ready inventory valuation records.",
  },
];

function LandedCostCaseStudyPage() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-20 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Case Studies", to: "/case-studies" }, { label: "Landed Cost Automation" }]} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> INVENTORY & COSTING AUTOMATION
              </span>
              <span className="inline-flex items-center rounded-md bg-[#0B1F4B] px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-2xs">
                AUTOMATED LANDED COST PROCESSING
              </span>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              Automated Landed Cost & Effective Unit Cost Calculation
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-[#667085]">
              A NetSuite business automation solution designed to retrieve landed cost allocations, calculate effective unit costs, and update transaction values automatically.
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
            eyebrow="Background & Problem"
            title="The Challenge"
            subtitle="Eliminating manual calculation bottlenecks in inventory valuation."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085]">
            <p>
              Additional costs such as freight, duties, and handling charges directly affect the true cost of inventory. Calculating and applying these costs consistently across individual transaction lines and multiple transaction types requires manual effort.
            </p>
            <p className="mt-4">
              The objective was to establish an automated business solution to identify applicable transaction lines, retrieve landed cost allocations, calculate the effective unit cost, and update calculated values directly within NetSuite.
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
            subtitle="Key inventory management requirements established for landed cost automation."
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
            subtitle="Operational improvements achieved in inventory accounting and cost accuracy."
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
              NetSuite ERP • Inventory Costing & Landed Cost • Multi-Currency Valuation • Supply Chain Accounting
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
