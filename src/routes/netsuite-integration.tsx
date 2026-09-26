import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineArrowsRightLeft,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-integration")({
  head: () => ({
    meta: [
      { title: "NetSuite Integration Services & API Connectors | Consider Pie" },
      {
        name: "description",
        content:
          "Enterprise NetSuite integration services. Seamlessly connect NetSuite ERP with Salesforce, Shopify, HubSpot, 3PL logistics, and custom APIs via RESTlets & SuiteTalk.",
      },
      {
        name: "keywords",
        content:
          "netsuite integration services, netsuite api integration company, netsuite integration company near me, netsuite salesforce integration, netsuite shopify integration, netsuite 3pl integration, restlet integration",
      },
      { property: "og:title", content: "NetSuite Integration Services & API Connectors | Consider Pie" },
      {
        property: "og:description",
        content:
          "Enterprise NetSuite API integration services connecting NetSuite ERP with e-commerce, CRM, 3PL, EDI, and custom API ecosystems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-integration" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-integration" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Integration Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Seamless API integrations connecting NetSuite ERP with e-commerce portals, CRM platforms, banking APIs, and middleware.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Consider Pie", item: "https://www.considerpie.com" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://www.considerpie.com/services" },
            { "@type": "ListItem", position: 3, name: "NetSuite Integration", item: "https://www.considerpie.com/netsuite-integration" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteIntegrationPage,
});

const INTEGRATION_TYPES = [
  { name: "RESTlet API Endpoints", desc: "Custom, lightweight JSON endpoints for real-time external data synchronizations." },
  { name: "SuiteTalk Web Services", desc: "SOAP & REST web services for standardized ERP record creation and updates." },
  { name: "Shopify & E-Commerce Sync", desc: "Automated real-time inventory, order fulfillment, and refund synchronization." },
  { name: "Salesforce & HubSpot CRM", desc: "Bi-directional customer, quote, and billing record synchronization." },
  { name: "SFTP & Banking Automation", desc: "Automated secure file transfers, bank reconciliation feeds, and batch feeds." },
  { name: "Middleware (Celigo & Boomi)", desc: "iPaaS integration design, error alerting, and automated retry orchestration." },
];

const FAQS = [
  {
    q: "What is the difference between RESTlets and SuiteTalk?",
    a: "SuiteTalk is NetSuite's standard SOAP/REST web service API, while RESTlets are custom SuiteScript endpoints built inside NetSuite for optimized payload structure and maximum performance.",
  },
  {
    q: "How do you handle integration errors?",
    a: "We build retry logic, error logging custom records, and automated email alerts to ensure zero data loss during network disruptions.",
  },
];

function NetSuiteIntegrationPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "NetSuite Integration" }]} />
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE INTEGRATION
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Integration Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Seamless RESTlet, SuiteTalk, and iPaaS middleware integrations keeping NetSuite in sync with your surrounding software ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Integrations"
            title="Connected Systems Architecture"
            subtitle="Robust data pipelines with token-based authentication and full audit trails."
          />

          <Reveal className="mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
            <p>
              Our NetSuite integration services combine specialized NetSuite API integration capabilities with custom NetSuite development to drive real-time data sync and cross-platform NetSuite automation. From e-commerce and CRM tools to banking portals and 3PL providers, we build reliable, secure connection pipelines.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATION_TYPES.map((it, i) => (
              <Reveal key={it.name} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                    INTEGRATION
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{it.name}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{it.desc}</p>
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
            title="Integration FAQs"
            subtitle="Common questions about connecting external platforms to NetSuite."
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
