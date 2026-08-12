import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineCodeBracketSquare,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-development")({
  head: () => ({
    meta: [
      { title: "NetSuite Development Services | Custom ERP Solutions | Consider Pie" },
      {
        name: "description",
        content:
          "Custom NetSuite development services in Mumbai. We build tailored SuiteScript applications, custom records, and complex business logic for enterprise scale.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Development Services, NetSuite Developer Mumbai, Custom NetSuite Development, NetSuite Development Company, NetSuite Custom Development",
      },
      { property: "og:title", content: "NetSuite Development Services | Custom ERP Solutions | Consider Pie" },
      {
        property: "og:description",
        content:
          "Custom NetSuite development services, SuiteScript engineering, custom record architectures, and complex logic.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-development" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-development" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Development Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Custom NetSuite development, SuiteScript 2.x engineering, custom transaction extensions, and enterprise software customization.",
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
            { "@type": "ListItem", position: 3, name: "NetSuite Development", item: "https://www.considerpie.com/netsuite-development" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteDevelopmentPage,
});

const CAPABILITIES = [
  "Custom SuiteScript 2.1 Backend Engineering",
  "Tailored Custom Record & Sublist Architectures",
  "User Event & Client Script Validation Logic",
  "Governance-Safe Map/Reduce Batch Processing",
  "Suitelet Web App & Custom Portal Development",
  "Automated Transaction Generation & Calculations",
];

const FAQS = [
  {
    q: "Why hire a dedicated NetSuite developer?",
    a: "Standard NetSuite configurations cannot always handle specialized business logic. A skilled NetSuite developer uses SuiteScript to extend standard capabilities cleanly without breaking future ERP updates.",
  },
  {
    q: "Do you follow SuiteScript governance limits?",
    a: "Yes, all custom development at Consider Pie is written to SuiteScript 2.x standards, leveraging governance monitoring, yield management, and Map/Reduce structures to prevent execution timeouts.",
  },
];

function NetSuiteDevelopmentPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE DEVELOPMENT
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Development Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Tailored SuiteScript engineering, custom record architectures, and scalable business logic developed by technical NetSuite experts in Mumbai.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Custom Solutions"
            title="Extending NetSuite Beyond Standard Capabilities"
            subtitle="Engineered for performance, governance safety, and upgrade compatibility."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-5 text-sm font-semibold text-[#0B1F4B]">
                  <HiOutlineCheckCircle size={20} className="shrink-0 text-[#0B1F4B]" />
                  <span>{cap}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="Case Study"
            title="Landed Cost Calculation Automation"
            subtitle="See how custom development automated complex inventory unit cost calculations."
          />

          <Reveal className="mt-8">
            <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="inline-block rounded-md bg-[#EAF2F8] px-3 py-1 text-xs font-bold text-[#0B1F4B] uppercase">
                  Featured Development
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-[#0B1F4B]">
                  Automated Landed Cost & Effective Unit Cost Calculation
                </h3>
                <p className="mt-2 text-sm text-[#667085] max-w-2xl">
                  Automated allocation retrieval and line-item unit cost recalculations across receipts, transfer orders, and assembly builds.
                </p>
              </div>
              <Link
                to="/case-studies/landed-cost-automation"
                className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#0B1F4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#16357A]"
              >
                <span>View Case Study</span>
                <HiOutlineArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Development FAQs"
            subtitle="Common questions regarding NetSuite custom development."
          />

          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
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
