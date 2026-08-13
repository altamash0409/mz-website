import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineCodeBracket,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/suitescript-development")({
  head: () => ({
    meta: [
      { title: "SuiteScript Development Services | NetSuite Scripting | Consider Pie" },
      {
        name: "description",
        content:
          "SuiteScript 2.x development services including User Event, Scheduled, Map/Reduce, and Suitelet scripts engineered for governance-safe NetSuite execution.",
      },
      {
        name: "keywords",
        content:
          "SuiteScript Development Services, SuiteScript Developer Mumbai, NetSuite SuiteScript Developer, NetSuite Custom Scripts, SuiteScript 2.x Development, Map/Reduce Development, Suitelet Development",
      },
      { property: "og:title", content: "SuiteScript Development Services | NetSuite Scripting | Consider Pie" },
      {
        property: "og:description",
        content:
          "SuiteScript 2.x development services including User Event, Scheduled, Map/Reduce, and Suitelet scripts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/suitescript-development" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/suitescript-development" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "SuiteScript Development Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Professional SuiteScript 2.1 development services for NetSuite customization, automated workflows, and governance-safe data processing.",
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
            { "@type": "ListItem", position: 3, name: "SuiteScript Development", item: "https://www.considerpie.com/suitescript-development" },
          ],
        }),
      },
    ],
  }),
  component: SuiteScriptDevelopmentPage,
});

const SCRIPT_TYPES = [
  { name: "User Event Scripts", desc: "Executed on record load, submit, or edit to enforce business rules and validate field values." },
  { name: "Client Scripts", desc: "Interactive browser-side scripts for real-time form validation and dynamic UI behavior." },
  { name: "Map/Reduce Scripts", desc: "Governance-safe multi-threaded processing designed for large transaction datasets." },
  { name: "Suitelet Scripts", desc: "Custom HTML interfaces and backend web services built directly inside NetSuite." },
  { name: "RESTlet Scripts", desc: "Lightweight JSON/REST endpoints for real-time external integration feeds." },
  { name: "Scheduled Scripts", desc: "Automated background cron jobs for recurring data sweeps and nightly processing." },
];

const FAQS = [
  {
    q: "What is SuiteScript 2.1?",
    a: "SuiteScript 2.1 is NetSuite's modern JavaScript API supporting modern ECMAScript standards (ES6+), enabling cleaner, modular, and performant custom scripting.",
  },
  {
    q: "How do you handle SuiteScript governance limits?",
    a: "We structure large-scale data processing using Map/Reduce scripts and governance monitor checks to ensure continuous execution without script abort errors.",
  },
];

function SuiteScriptDevelopmentPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "SuiteScript Development" }]} />
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> SUITESCRIPT DEVELOPMENT
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              SuiteScript Development Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Modular, testable, and governance-safe SuiteScript 2.x development by expert NetSuite developers in Mumbai, India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Script Types"
            title="Comprehensive SuiteScript Engineering"
            subtitle="Extending NetSuite functionality across every script execution context."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCRIPT_TYPES.map((st, i) => (
              <Reveal key={st.name} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                    SUITESCRIPT 2.X
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{st.name}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{st.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="Case Study"
            title="Customer Statement Automation"
            subtitle="Map/Reduce and SuiteScript 2.x powering multi-subsidiary statement distribution."
          />

          <Reveal className="mt-8">
            <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="inline-block rounded-md bg-[#EAF2F8] px-3 py-1 text-xs font-bold text-[#0B1F4B] uppercase">
                  Featured Scripting Project
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-[#0B1F4B]">
                  Automating Customer Statements Across a Multi-Subsidiary Environment
                </h3>
                <p className="mt-2 text-sm text-[#667085] max-w-2xl">
                  Custom SuiteScript 2.x solution evaluating saved searches and generating localized customer statements dynamically.
                </p>
              </div>
              <Link
                to="/case-studies/customer-statement-automation"
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
            title="SuiteScript FAQs"
            subtitle="Answers to common questions about NetSuite custom scripting."
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
