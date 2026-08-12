import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-automation")({
  head: () => ({
    meta: [
      { title: "NetSuite Automation Services | Workflow & Process Automation | Consider Pie" },
      {
        name: "description",
        content:
          "NetSuite workflow & process automation services. We automate financial reconciliations, customer statements, landed cost, and intercompany transactions.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Automation Services, NetSuite Workflow Automation, NetSuite Business Process Automation, NetSuite Financial Automation, NetSuite Process Automation",
      },
      { property: "og:title", content: "NetSuite Automation Services | Workflow & Process Automation | Consider Pie" },
      {
        property: "og:description",
        content:
          "NetSuite workflow & process automation services. We automate financial reconciliations, customer statements, landed cost, and intercompany transactions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-automation" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-automation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Automation Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Automated NetSuite process solutions eliminating manual data entry, financial reconciliation bottlenecks, and repetitive administrative tasks.",
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
            { "@type": "ListItem", position: 3, name: "NetSuite Automation", item: "https://www.considerpie.com/netsuite-automation" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteAutomationPage,
});

const AUTOMATIONS = [
  { name: "Financial & Reconciliation Automations", desc: "Automated journal entry postings, COGS department corrections, and month-end close schedules." },
  { name: "Customer Statement Distribution", desc: "Scheduled generation and automated emailing of customized Excel customer statements." },
  { name: "Landed Cost & Inventory Valuation", desc: "Dynamic allocation of duties, freight, and insurance directly to inventory receipt lines." },
  { name: "Approval Matrices & SuiteFlow", desc: "Multi-level purchase order and vendor bill approval workflows with threshold routing." },
  { name: "Intercompany Transaction Sync", desc: "Automated arm's-length intercompany sales order to purchase order creation." },
  { name: "Automated Order Processing", desc: "Scheduled order release, payment capture, and fulfillment status updates." },
];

const FAQS = [
  {
    q: "How does NetSuite automation benefit finance teams?",
    a: "By replacing manual spreadsheet reconciliations with automated SuiteScript and Map/Reduce jobs, finance teams eliminate human data entry errors and accelerate month-end closing.",
  },
  {
    q: "Can SuiteFlow workflows be combined with custom SuiteScript?",
    a: "Yes, we frequently combine SuiteFlow for visual state management with custom SuiteScript action handlers for complex backend logic.",
  },
];

function NetSuiteAutomationPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE AUTOMATION
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Automation Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Eliminate manual handoffs, reduce human errors, and accelerate business operations with tailored NetSuite process automation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Solutions"
            title="Enterprise Automation Practice Areas"
            subtitle="Transforming manual administrative procedures into background automated scripts."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUTOMATIONS.map((auto, i) => (
              <Reveal key={auto.name} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                    AUTOMATION
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{auto.name}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{auto.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="Case Studies"
            title="Automation in Practice"
            subtitle="Explore real-world NetSuite process automation case studies."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-md bg-[#EAF2F8] px-3 py-1 text-xs font-bold text-[#0B1F4B] uppercase">
                    Customer Statement Automation
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#0B1F4B]">
                    Automating Customer Statements Across 40+ Subsidiaries
                  </h3>
                  <p className="mt-2 text-sm text-[#667085]">
                    Scheduled Map/Reduce statement generation and emailing with customer-level preference controls.
                  </p>
                </div>
                <Link
                  to="/case-studies/customer-statement-automation"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F4B] hover:text-[#16357A]"
                >
                  <span>Read Case Study</span>
                  <HiOutlineArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-md bg-[#EAF2F8] px-3 py-1 text-xs font-bold text-[#0B1F4B] uppercase">
                    Finance Automation
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#0B1F4B]">
                    Automated Journal Entry Creation for COGS Corrections
                  </h3>
                  <p className="mt-2 text-sm text-[#667085]">
                    Controlled Suitelet review interface with background Map/Reduce journal entry generation.
                  </p>
                </div>
                <Link
                  to="/case-studies/finance-automation-je-creation"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F4B] hover:text-[#16357A]"
                >
                  <span>Read Case Study</span>
                  <HiOutlineArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Automation FAQs"
            subtitle="Answers to common questions regarding NetSuite process automation."
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
