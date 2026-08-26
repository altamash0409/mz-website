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
          "Explore a NetSuite automation solution for retrieving landed cost allocations and calculating effective unit costs across multiple transaction types.",
      },
      {
        property: "og:title",
        content: "Automated Landed Cost Calculation in NetSuite | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Explore a NetSuite automation solution for retrieving landed cost allocations and calculating effective unit costs across multiple transaction types.",
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
  "NetSuite",
  "SuiteScript 2.x",
  "JavaScript",
  "Inventory Automation",
  "Landed Cost",
];

const CHALLENGES = [
  {
    icon: HiOutlineCalculator,
    title: "Manual Landed Cost Calculations",
    desc: "Labor-intensive manual spreadsheet calculations for allocating landed charges to items.",
  },
  {
    icon: HiOutlineArrowsRightLeft,
    title: "Multiple Transaction Types",
    desc: "Requirement to handle receipts, adjustments, transfers, and assembly builds seamlessly.",
  },
  {
    icon: HiOutlineCube,
    title: "Different Transaction Sublists",
    desc: "Navigating varied NetSuite sublists (item sublist, inventory sublist, component sublist).",
  },
  {
    icon: HiOutlineScale,
    title: "Landed Cost Allocation Retrieval",
    desc: "Dynamically fetching correct duty, freight, and insurance allocations per transaction line.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Effective Unit Cost Calculation",
    desc: "Accurately combining foreign currency (FX) amounts with allocated landed costs.",
  },
  {
    icon: HiOutlineDocumentCheck,
    title: "Consistent Transaction Processing",
    desc: "Ensuring zero calculation drift across historical and new inventory transactions.",
  },
];

const WORKFLOW_STEPS = [
  { step: "1", title: "Trigger", desc: "User or script event triggers transaction processing" },
  { step: "2", title: "Identify Applicable Lines", desc: "Scan transaction for eligible inventory lines" },
  { step: "3", title: "Determine Correct Sublist", desc: "Select item, inventory, or component sublist" },
  { step: "4", title: "Retrieve Landed Cost", desc: "Fetch freight, duty, and fee allocations" },
  { step: "5", title: "Calculate Effective Unit Cost", desc: "Combine FX amounts and landed cost allocations to compute net unit cost" },
  { step: "6", title: "Update Transaction Value", desc: "Write calculated unit cost back to transaction" },
  { step: "7", title: "Complete", desc: "Save record with full audit trail" },
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
                SCRIPT: SUITESCRIPT 2.X LANDED COST SCRIPT
              </span>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              Automated Landed Cost & Effective Unit Cost Calculation
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-[#667085]">
              A NetSuite automation solution designed to retrieve applicable landed cost allocations, calculate effective unit costs, and update transaction values automatically.
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
              Additional costs such as freight, duties, and other applicable charges can affect the true cost of inventory. Calculating and applying these costs consistently across transaction lines and multiple transaction types can require manual effort.
            </p>
            <p className="mt-4">
              The objective was to automate the identification of applicable transaction lines, retrieve landed cost allocations, calculate the effective unit cost, and update the calculated value directly within NetSuite.
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
            eyebrow="Automation Pipeline"
            title="The Solution"
            subtitle="Automated line identification, allocation lookup, math processing, and line updates."
          />

          <div className="mt-12">
            <Reveal>
              <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 sm:p-8 shadow-[0_8px_25px_rgba(11,31,75,0.06)]">
                <h3 className="text-sm font-bold tracking-wider text-[#0B1F4B] uppercase mb-8 text-center">
                  Visual Cost Calculation Workflow
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {WORKFLOW_STEPS.map((ws) => (
                    <div
                      key={ws.title}
                      className="relative flex flex-col justify-between rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-5"
                    >
                      <div>
                        <span className="text-xs font-bold text-[#0B1F4B]">
                          STEP {ws.step}
                        </span>
                        <h4 className="mt-2 text-base font-semibold text-[#0B1F4B]">
                          {ws.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-[#667085] leading-relaxed">
                          {ws.desc}
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
