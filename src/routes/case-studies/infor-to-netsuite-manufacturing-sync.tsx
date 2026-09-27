import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineCircleStack,
  HiOutlineDocumentText,
  HiOutlineScale,
  HiOutlineSquares2X2,
  HiOutlineKey,
  HiOutlineArrowPath,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

export const Route = createFileRoute("/case-studies/infor-to-netsuite-manufacturing-sync")({
  head: () => ({
    meta: [
      {
        title:
          "High-Volume Manufacturing Master Data Migration from Infor to NetSuite | Case Study | Consider Pie",
      },
      {
        name: "description",
        content:
          "A NetSuite integration solution built to migrate manufacturing master data — Bills of Materials, BOM Routings, and Advanced Manufacturing Routings — from Infor into NetSuite, using an OAuth 2.0-authenticated RESTlet integration and a Python-based data transformation layer.",
      },
      {
        property: "og:title",
        content:
          "High-Volume Manufacturing Master Data Migration from Infor to NetSuite | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "A NetSuite integration solution built to migrate manufacturing master data — Bills of Materials, BOM Routings, and Advanced Manufacturing Routings — from Infor into NetSuite, using an OAuth 2.0-authenticated RESTlet integration and a Python-based data transformation layer.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://www.considerpie.com/case-studies/infor-to-netsuite-manufacturing-sync",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.considerpie.com/case-studies/infor-to-netsuite-manufacturing-sync",
      },
    ],
    scripts: [
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
              name: "Case Studies",
              item: "https://www.considerpie.com/case-studies",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Infor-to-NetSuite Manufacturing Sync",
              item: "https://www.considerpie.com/case-studies/infor-to-netsuite-manufacturing-sync",
            },
          ],
        }),
      },
    ],
  }),
  component: InforToNetSuiteCaseStudyPage,
});

const TECH_TAGS = [
  "NetSuite ERP",
  "RESTlet Integration",
  "Advanced Manufacturing",
  "Python Automation",
];

const CHALLENGES = [
  {
    icon: HiOutlineCircleStack,
    title: "High-Volume Record Set",
    desc: "Approximately 250,000 manufacturing master data records requiring migration.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Excel-Based Source Format",
    desc: "Flat Excel/CSV exports needing conversion into structured NetSuite objects.",
  },
  {
    icon: HiOutlineScale,
    title: "Governance & Usage Limits",
    desc: "Individual record creation at this volume risked exceeding NetSuite's API and script governance limits.",
  },
  {
    icon: HiOutlineSquares2X2,
    title: "Redundant Record Structures",
    desc: "Many routing lines shared the same parent BOM, creating an opportunity to consolidate.",
  },
  {
    icon: HiOutlineKey,
    title: "Secure System-to-System Auth",
    desc: "The client's Python application needed a secure, token-based way to authenticate against NetSuite.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Reliable Batch Processing",
    desc: "Records needed to process without data loss or duplication on failure/retry.",
  },
];

const BUSINESS_REQUIREMENTS = [
  "Establish a secure OAuth 2.0-authenticated connection between the client's Python application and NetSuite via RESTlet.",
  "Convert Infor's Excel-format exports into structured objects mapped to NetSuite's manufacturing master data records.",
  "Group related routing lines under a shared parent object where source data was similar, reducing total record volume and object count.",
  "Implement a queue-based processing architecture to stage and throttle the ~250,000-record load.",
  "Build a Map/Reduce script to consume the queue and create the corresponding records in NetSuite.",
];

const OUTCOMES = [
  {
    icon: HiOutlineClock,
    title: "Reduced Manual Data Entry",
    desc: "Removed manual creation across a 250,000+ row manufacturing dataset.",
  },
  {
    icon: HiOutlineScale,
    title: "Reduced Object & Governance Load",
    desc: "Grouping similar records lowered total object count and eased governance pressure.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Resilient, Repeatable Sync Architecture",
    desc: "Queue-based, Map/Reduce-driven design created a reusable processing pattern for future synchronization requirements.",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "Improved Data Accuracy",
    desc: "Structured data conversion reduced mapping errors compared with manual entry.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Scalable Migration Framework",
    desc: "Created a reusable pattern that can be adapted for other high-volume manufacturing data migrations.",
  },
];

function InforToNetSuiteCaseStudyPage() {
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
                  { label: "Infor-to-NetSuite Manufacturing Sync" },
                ]}
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> DATA MIGRATION &
                INTEGRATION
              </span>
              <span className="inline-flex items-center rounded-md bg-[#0B1F4B] px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-2xs">
                INFOR-TO-NETSUITE MANUFACTURING SYNC
              </span>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              High-Volume Manufacturing Master Data Migration from Infor to NetSuite
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base text-[#667085]">
              A NetSuite integration solution built to migrate manufacturing master data — Bills of
              Materials, BOM Routings, and Advanced Manufacturing Routings — from Infor into
              NetSuite, using an OAuth 2.0-authenticated RESTlet integration and a Python-based data
              transformation layer.
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

      {/* 2. BACKGROUND & PROBLEM — THE CHALLENGE */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Background & Problem"
            title="The Challenge"
            subtitle="Migrating 250,000+ manufacturing master data records without breaking NetSuite governance limits."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085]">
            <p>
              The client ran core manufacturing operations on Infor, including advanced WMS-driven
              BOMs, BOM Routings, and Manufacturing Routings. Moving this manufacturing master data
              to NetSuite meant handling roughly 2.5 lakh (250,000) rows exported from Infor in
              Excel/CSV format — far beyond what manual entry or a simple one-shot API import could
              support.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1F4B] text-white">
                    <c.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#0B1F4B]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OBJECTIVES — BUSINESS REQUIREMENTS */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell max-w-4xl">
          <SectionHeading
            eyebrow="Objectives"
            title="Business Requirements"
            subtitle="Core integration architecture and batch processing requirements established for high-volume data migration."
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

      {/* 4. RESULTS & IMPACT — BUSINESS OUTCOME */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Results & Impact"
            title="Business Outcome"
            subtitle="Operational improvements and governance-compliant execution achieved through custom NetSuite integration."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1F4B] text-white">
                    <o.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0B1F4B]">{o.title}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{o.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY & CORE EXPERTISE */}
      <section className="py-12 bg-[#F5F9FC] border-t border-[#D9E2EA]">
        <div className="shell text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#0B1F4B]">
              <HiOutlineSquares2X2 size={16} />
              <span>Technology & Core Expertise</span>
            </div>
            <p className="text-sm text-[#667085] max-w-xl mx-auto">
              OAuth 2.0 • Python Integration • Advanced Manufacturing
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
