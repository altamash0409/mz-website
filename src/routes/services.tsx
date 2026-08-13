import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { IndustryExpertise } from "@/components/home/IndustryExpertise";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineRocketLaunch,
  HiOutlineCodeBracketSquare,
  HiOutlineArrowsRightLeft,
  HiOutlineLifebuoy,
  HiOutlineBoltSlash,
  HiOutlineCircleStack,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChartBarSquare,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowRight,
} from "react-icons/hi2";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "NetSuite Services & Integration Solutions | Consider Pie" },
      {
        name: "description",
        content:
          "Enterprise Oracle NetSuite implementation, SuiteScript 2.1 engineering, RESTlet integrations, Saved Search reporting, data migration, and ongoing managed support by Consider Pie.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Services, Oracle NetSuite, NetSuite ERP, SuiteScript 2.1, NetSuite Integration, Saved Search, Script, NetSuite Automation, Business Solutions, RESTlet, SuiteTalk, Managed Support",
      },
      { property: "og:title", content: "Enterprise NetSuite Services Engineered for Scale | Consider Pie" },
      {
        property: "og:description",
        content:
          "Implementation, SuiteScript engineering, integrations and ongoing managed NetSuite support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Consider Pie", item: "https://www.considerpie.com" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://www.considerpie.com/services" },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: HiOutlineBriefcase,
    title: "NetSuite Consulting",
    to: "/netsuite-consulting",
    body: "Strategic NetSuite advisory, ERP roadmap planning, process evaluation, and techno-functional architecture.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "NetSuite Implementation",
    to: "/netsuite-implementation",
    body: "End-to-end greenfield rollouts, chart of accounts setup, multi-subsidiary config, and cutover execution.",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: "NetSuite Development",
    to: "/netsuite-development",
    body: "Custom record structures, complex transaction logic, and SuiteScript applications built for scale.",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: "SuiteScript 2.1 Engineering",
    to: "/suitescript-development",
    body: "Governance-safe User Event, Client, Map/Reduce, Scheduled, and Suitelet scripts written to testable standards.",
  },
  {
    icon: HiOutlineArrowsRightLeft,
    title: "System Integrations",
    to: "/netsuite-integration",
    body: "RESTlets, SuiteTalk, and iPaaS middleware pipelines keeping NetSuite in sync with e-commerce, CRM, and banking.",
  },
  {
    icon: HiOutlineBoltSlash,
    title: "Workflow & Process Automation",
    to: "/netsuite-automation",
    body: "Approval matrices, automated financial reconciliations, customer statements, and intercompany cross-charges.",
  },
  {
    icon: HiOutlineLifebuoy,
    title: "Managed Admin & Support",
    to: "/netsuite-support",
    body: "SLA-backed administration, saved search maintenance, role permissions, and hypercare for global operations.",
  },
  {
    icon: HiOutlineAdjustmentsHorizontal,
    title: "NetSuite Customization",
    to: "/netsuite-customization",
    body: "Custom transaction forms, body/column fields, role-based views, and Advanced PDF/HTML printing templates.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "ERP Health Audit",
    to: "/netsuite-health-check",
    body: "Deep review of scripts, saved search performance, permission governance, and a prioritized remediation plan.",
  },
  {
    icon: HiOutlineCircleStack,
    title: "Data Migration & Cleansing",
    to: "/netsuite-data-migration",
    body: "Legacy data extraction, de-duplication, transformation, and validated trial balance financial loads.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "NetSuite OneWorld Consulting",
    to: "/netsuite-oneworld-consulting",
    body: "Multi-subsidiary setup, automated intercompany eliminations, multi-currency revaluation, and global reporting.",
  },
];

const INTEGRATIONS = [
  {
    name: "Shopify",
    tag: "Commerce",
    body: "Bi-directional order, fulfilment, refund and inventory sync with SKU-level mapping.",
  },
  {
    name: "Salesforce",
    tag: "CRM",
    body: "Opportunity-to-cash flow with account, quote and invoice parity between both platforms.",
  },
  {
    name: "HubSpot",
    tag: "CRM & Inbound",
    body: "Bi-directional sync for leads, contacts, deals, company records, and lifecycle stage alignment.",
  },
  {
    name: "SFTP & File Automation",
    tag: "Batch & Banking",
    body: "Automated secure file transfers, bank statement processing, CSV imports, and scheduled batch feeds.",
  },
  {
    name: "Custom RESTlets",
    tag: "SuiteTalk",
    body: "Purpose-built authenticated endpoints for partner portals and in-house applications.",
  },
  {
    name: "Middleware",
    tag: "Celigo · Boomi",
    body: "iPaaS flow design, error-handling frameworks and monitored retry orchestration.",
  },
];

function ServicesPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Services" }]} />
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> Services & Integrations
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              Enterprise NetSuite Services{" "}
              <span className="text-[#0B1F4B]">Engineered for Scale</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              From first configuration to the thousandth automated transaction — a single team for
              implementation, engineering, integration and long-term care of your NetSuite account.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Core Services Hub"
            title="What We Deliver"
            subtitle="Dedicated practice areas covering the full lifecycle of a NetSuite ERP account."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04} className="h-full">
                <Link
                  to={s.to as any}
                  className="group flex h-full flex-col justify-between rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-7 shadow-[0_8px_25px_rgba(11,31,75,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B1F4B]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-lg bg-[#EAF2F8] p-3 text-[#0B1F4B] transition-colors group-hover:bg-[#0B1F4B] group-hover:text-white">
                        <s.icon size={22} />
                      </span>
                    </div>
                    <h2 className="mt-5 text-lg font-bold text-[#0B1F4B]">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#667085]">{s.body}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-[#D9E2EA]/60 pt-4 text-xs font-bold text-[#0B1F4B] transition-all group-hover:text-[#16357A]">
                    <span>Learn More & Capabilities</span>
                    <HiOutlineArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <IndustryExpertise />

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Integration architecture"
            title="Connected to Everything You Run"
            subtitle="Resilient, observable data flows with retry logic, alerting and full audit trails."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[#D9E2EA] bg-[#D9E2EA] sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATIONS.map((it, i) => (
              <Reveal key={it.name} delay={i * 0.04}>
                <article className="h-full bg-[#FFFFFF] p-8 transition-colors hover:bg-[#F5F9FC]">
                  <span className="text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase">
                    {it.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[#0B1F4B]">{it.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#667085]">{it.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}