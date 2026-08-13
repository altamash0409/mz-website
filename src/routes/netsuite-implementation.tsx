import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineRocketLaunch,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-implementation")({
  head: () => ({
    meta: [
      { title: "NetSuite Implementation Services | ERP Rollout | Consider Pie" },
      {
        name: "description",
        content:
          "End-to-end NetSuite implementation services, multi-subsidiary configuration, chart of accounts setup, and go-live support delivered by Consider Pie in Mumbai.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Implementation Services, NetSuite Implementation Mumbai, NetSuite Implementation Consultant, NetSuite ERP Implementation, ERP Consultant Mumbai",
      },
      { property: "og:title", content: "NetSuite Implementation Services | ERP Rollout | Consider Pie" },
      {
        property: "og:description",
        content:
          "End-to-end NetSuite implementation services, multi-subsidiary configuration, chart of accounts setup, and go-live support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-implementation" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-implementation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Implementation Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Full lifecycle NetSuite ERP implementation, configuration, multi-subsidiary setup, and go-live support.",
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
            { "@type": "ListItem", position: 3, name: "NetSuite Implementation", item: "https://www.considerpie.com/netsuite-implementation" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteImplementationPage,
});

const PROCESS_STEPS = [
  { step: "01", title: "Discovery & Requirements", desc: "Mapping core business requirements to native NetSuite features and data models." },
  { step: "02", title: "Configuration & Setup", desc: "Configuring Chart of Accounts, subsidiaries, roles, permissions, and tax rules." },
  { step: "03", title: "Customization & SuiteScript", desc: "Developing business-critical automations, custom fields, and form layouts." },
  { step: "04", title: "Data Migration & Testing", desc: "Extracting legacy data, executing trial migration runs, and validating account balances." },
  { step: "05", title: "Go-Live & Hypercare", desc: "Executing cutover checklist, user onboarding, and post-launch hypercare support." },
];

const FAQS = [
  {
    q: "How long does a NetSuite implementation take?",
    a: "Implementation timelines vary based on business scope, module requirements, and customization depth, typically ranging between 3 to 6 months for mid-market to enterprise companies.",
  },
  {
    q: "Do you support multi-subsidiary NetSuite implementations?",
    a: "Yes, we specialize in multi-subsidiary and OneWorld setups, configuring consolidated financial reporting, intercompany transactions, and localized compliance rules.",
  },
];

function NetSuiteImplementationPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "NetSuite Implementation" }]} />
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE IMPLEMENTATION
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Implementation Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Structured, low-risk NetSuite ERP rollouts, re-implementations, and multi-subsidiary configurations engineered for operational continuity.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Methodology"
            title="A Structured Approach to ERP Implementation"
            subtitle="Minimizing cutover risk while establishing a scalable NetSuite foundation."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((ps, i) => (
              <Reveal key={ps.step} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="text-xs font-bold tracking-wider text-[#0B1F4B] uppercase">
                    PHASE {ps.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{ps.title}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{ps.desc}</p>
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
            title="Implementation FAQs"
            subtitle="Answers to common questions regarding ERP rollouts."
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
