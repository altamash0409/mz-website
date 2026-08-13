import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-customization")({
  head: () => ({
    meta: [
      { title: "NetSuite Customization Services | Custom Workflows | Consider Pie" },
      {
        name: "description",
        content:
          "Tailored NetSuite customization services. Modify standard transaction forms, build custom records, configure custom fields, and align NetSuite with your business.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Customization Services, NetSuite Custom Development, NetSuite Custom Workflows, NetSuite Custom Scripts, NetSuite Customization Mumbai",
      },
      { property: "og:title", content: "NetSuite Customization Services | Custom Workflows | Consider Pie" },
      {
        property: "og:description",
        content:
          "Tailored NetSuite customization services. Modify transaction forms, custom records, custom fields, and business logic.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-customization" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-customization" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Customization Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Custom NetSuite record architecture, advanced PDF/HTML transaction template design, custom entry forms, and SuiteFlow state machine configuration.",
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
            { "@type": "ListItem", position: 3, name: "NetSuite Customization", item: "https://www.considerpie.com/netsuite-customization" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteCustomizationPage,
});

const CUSTOMIZATIONS = [
  { name: "Custom Record & Field Architecture", desc: "Designing scalable custom records, parent-child sublists, and custom body/column fields." },
  { name: "Transaction Form Tailoring", desc: "Customizing entry forms, field sourcing rules, mandatory fields, and role-based form layouts." },
  { name: "Advanced PDF/HTML Printing Templates", desc: "Designing branded, print-ready invoices, purchase orders, statements, and packing slips." },
  { name: "SuiteFlow Workflow Configuration", desc: "Building visual approval states, conditional routing, and event-driven field locks." },
  { name: "Custom Key Performance Indicators (KPIs)", desc: "Configuring custom dashboard meters, saved search KPIs, and financial summary scorecards." },
  { name: "Role-Based Security & Permissions", desc: "Restricting field-level data visibility and establishing strict segregation of duties." },
];

const FAQS = [
  {
    q: "Will custom fields and forms break during NetSuite version upgrades?",
    a: "No, native NetSuite customizations (custom records, fields, forms, Advanced PDF templates) are version-locked by NetSuite's upgrade framework and carry forward seamlessly.",
  },
  {
    q: "How do you customize PDF invoices and order confirmations?",
    a: "We use NetSuite's Advanced PDF/HTML template editor (FreeMarker XML/HTML) to produce clean, localized print and email document layouts.",
  },
];

function NetSuiteCustomizationPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "NetSuite Customization" }]} />
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE CUSTOMIZATION
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Customization Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Tailoring NetSuite standard records, transaction forms, workflows, and PDF templates to mirror your exact operational requirements.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Customization Practice"
            title="Tailoring NetSuite to Your Business"
            subtitle="Clean, upgrade-compatible customizations built on NetSuite best practices."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOMIZATIONS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                    CUSTOMIZATION
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{c.name}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{c.desc}</p>
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
            title="Customization FAQs"
            subtitle="Common questions regarding NetSuite custom setup."
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
