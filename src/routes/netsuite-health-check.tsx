import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-health-check")({
  head: () => ({
    meta: [
      { title: "NetSuite Health Check & ERP Audit Services | Consider Pie" },
      {
        name: "description",
        content:
          "Comprehensive NetSuite health check & ERP performance audit. Identify script bottlenecks, saved search inefficiencies, governance risks, and security gaps.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Health Check, NetSuite Optimization, NetSuite Audit, NetSuite Performance Optimization, NetSuite Health Check Mumbai, ERP Audit Mumbai",
      },
      { property: "og:title", content: "NetSuite Health Check & ERP Audit Services | Consider Pie" },
      {
        property: "og:description",
        content:
          "Comprehensive NetSuite health check & ERP performance audit. Identify script bottlenecks, governance risks, and performance gaps.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-health-check" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-health-check" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Health Check & ERP Audit Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Deep architectural audit of NetSuite SuiteScript performance, saved search optimization, role permission security, and data governance.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.considerpie.com" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://www.considerpie.com/services" },
            { "@type": "ListItem", position: 3, name: "NetSuite Health Check", item: "https://www.considerpie.com/netsuite-health-check" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteHealthCheckPage,
});

const AUDIT_AREAS = [
  { name: "SuiteScript Performance & Governance Audit", desc: "Reviewing custom scripts for governance usage, unoptimized N/search calls, and execution timeout risks." },
  { name: "Saved Search & Report Optimization", desc: "Identifying redundant or un-indexed saved searches causing slow page load times across user dashboards." },
  { name: "Role & Permission Security Review", desc: "Auditing role assignments, access permissions, and segregation of duties (SoD) risks." },
  { name: "Integration API & Error Log Inspection", desc: "Evaluating RESTlet payload sizes, SOAP web service concurrency, and failure retry handlers." },
  { name: "System Preference & Feature Utilization", desc: "Assessing unused native features, multi-currency settings, and accounting period controls." },
  { name: "Prioritized Remediation Roadmap", desc: "Delivering an executive summary with actionable high, medium, and low priority optimization tasks." },
];

const FAQS = [
  {
    q: "What is included in a NetSuite Health Check?",
    a: "Our health check evaluates your custom scripts, saved search performance, integration logs, role permissions, and system governance to produce a prioritized remediation report.",
  },
  {
    q: "How long does a NetSuite audit take?",
    a: "A typical technical health check takes 1 to 2 weeks, requiring read-only administrator sandbox access to inspect system logs and configurations.",
  },
];

function NetSuiteHealthCheckPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE HEALTH CHECK
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Health Check & ERP Audit Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Identify script bottlenecks, optimize slow saved searches, eliminate security risks, and accelerate system performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Audit Scope"
            title="Six Key Health Check Pillars"
            subtitle="Thorough evaluation of your NetSuite account codebase and architecture."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIT_AREAS.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                    HEALTH CHECK
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{a.name}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{a.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Health Check FAQs"
            subtitle="Common questions regarding NetSuite audits and performance optimization."
          />

          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-6 shadow-2xs">
                  <h3 className="text-base font-bold text-[#0B1F4B] flex items-center gap-2">
                    <HiOutlineQuestionMarkCircle size={18} className="text-[#0B1F4B]" />
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed pl-6">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
