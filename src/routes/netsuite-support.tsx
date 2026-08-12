import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineLifebuoy,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-support")({
  head: () => ({
    meta: [
      { title: "NetSuite Support & Managed Services | Consider Pie" },
      {
        name: "description",
        content:
          "SLA-backed NetSuite support and managed administration services. Ongoing incident resolution, user permissions, saved search maintenance, and hypercare.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Support Services, NetSuite Managed Support, NetSuite Administration Services, NetSuite Support Mumbai, Ongoing NetSuite Support, NetSuite Managed Services",
      },
      { property: "og:title", content: "NetSuite Support & Managed Services | Consider Pie" },
      {
        property: "og:description",
        content:
          "SLA-backed NetSuite support, incident management, user administration, and ongoing maintenance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-support" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-support" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Support & Managed Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Managed NetSuite administration, technical support, user permission management, release regression testing, and ongoing ERP optimization.",
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
            { "@type": "ListItem", position: 3, name: "NetSuite Support", item: "https://www.considerpie.com/netsuite-support" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteSupportPage,
});

const SERVICES = [
  { name: "Ongoing Incident Support", desc: "Rapid troubleshooting and resolution for user errors, script exceptions, and processing blocks." },
  { name: "Managed System Administration", desc: "Role setup, permission governance, custom field maintenance, and global preference updates." },
  { name: "Saved Search & Report Maintenance", desc: "Updating complex saved search formulas, custom KPI layouts, and financial summary reports." },
  { name: "Semi-Annual Release Testing", desc: "Pre-release regression testing in NetSuite sandbox environments to safeguard customized workflows." },
  { name: "Integration Monitoring", desc: "Daily health checks for API endpoints, RESTlets, and external sync payloads." },
  { name: "User Training & Documentation", desc: "Custom standard operating procedures (SOPs) and hands-on training for operational teams." },
];

const FAQS = [
  {
    q: "What support models do you offer?",
    a: "We offer flexible retainer-based managed support as well as ad-hoc incident resolution packages tailored to your organization's internal NetSuite expertise.",
  },
  {
    q: "How fast do you respond to urgent NetSuite issues?",
    a: "Our SLA-backed managed support packages prioritize critical production errors with guaranteed initial response times.",
  },
];

function NetSuiteSupportPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE SUPPORT
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Support & Managed Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Dependable, SLA-backed NetSuite administration, incident resolution, and continuous system maintenance delivered by experienced ERP specialists.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Managed Support"
            title="Comprehensive Support Practice"
            subtitle="Keeping your NetSuite environment secure, performant, and aligned with business growth."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                    MANAGED SUPPORT
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{s.name}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{s.desc}</p>
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
            title="Support FAQs"
            subtitle="Common questions regarding NetSuite support services."
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
