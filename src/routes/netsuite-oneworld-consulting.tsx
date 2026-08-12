import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-oneworld-consulting")({
  head: () => ({
    meta: [
      { title: "NetSuite OneWorld Consulting | Multi-Subsidiary | Consider Pie" },
      {
        name: "description",
        content:
          "NetSuite OneWorld consulting for multi-entity businesses. Intercompany elimination automation, multi-currency processing, tax compliance, and global reporting.",
      },
      {
        name: "keywords",
        content:
          "NetSuite OneWorld Consulting, NetSuite Multi-Subsidiary, NetSuite Intercompany Automation, NetSuite Subsidiary Management, OneWorld Consultant Mumbai",
      },
      { property: "og:title", content: "NetSuite OneWorld Consulting | Multi-Subsidiary | Consider Pie" },
      {
        property: "og:description",
        content:
          "NetSuite OneWorld consulting for multi-entity businesses. Intercompany elimination automation, multi-currency processing, and global reporting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-oneworld-consulting" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-oneworld-consulting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite OneWorld Consulting",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Multi-subsidiary enterprise architecture, automated intercompany journal eliminations, multi-currency revaluation, and global consolidated reporting.",
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
            { "@type": "ListItem", position: 3, name: "NetSuite OneWorld Consulting", item: "https://www.considerpie.com/netsuite-oneworld-consulting" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteOneWorldConsultingPage,
});

const ONEWORLD_AREAS = [
  { name: "Subsidiary Tree Architecture", desc: "Designing multi-tiered subsidiary trees, parent-child consolidations, and regional operating structures." },
  { name: "Automated Intercompany Eliminations", desc: "Configuring automated intercompany elimination accounts and period-end elimination journal entries." },
  { name: "Multi-Currency & Revaluation", desc: "Automating currency revaluation, realized/unrealized exchange gain/loss calculations, and exchange rate feeds." },
  { name: "Consolidated Financial Reporting", desc: "Real-time consolidated balance sheets, income statements, and cash flow reports in primary reporting currency." },
  { name: "Regional Tax & Compliance Setup", desc: "Configuring subsidiary-specific tax engines, GST/VAT compliance rules, and localized nexus settings." },
  { name: "Intercompany Cross-Charge Automations", desc: "Automated intercompany sales orders, purchase orders, and transfer order cross-charges." },
];

const FAQS = [
  {
    q: "What is NetSuite OneWorld?",
    a: "NetSuite OneWorld is NetSuite's multi-subsidiary global management module, enabling businesses to manage multiple legal entities, currencies, taxation rules, and consolidated reporting within a single ERP system.",
  },
  {
    q: "How do automated intercompany eliminations work in OneWorld?",
    a: "OneWorld tracks transactions between intercompany entities and automatically generates elimination journal entries at period-end to remove internal revenue and expenses from consolidated reports.",
  },
];

function NetSuiteOneWorldConsultingPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE ONEWORLD
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite OneWorld Consulting Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Expert multi-subsidiary architecture, intercompany elimination automation, and global financial consolidation for multi-entity organizations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="OneWorld Practice"
            title="Global Multi-Entity Capabilities"
            subtitle="Architected for multi-subsidiary compliance, localized reporting, and currency management."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ONEWORLD_AREAS.map((ow, i) => (
              <Reveal key={ow.name} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                    ONEWORLD
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{ow.name}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{ow.desc}</p>
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
            title="OneWorld FAQs"
            subtitle="Common questions regarding multi-subsidiary NetSuite setups."
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
