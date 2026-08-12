import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineCircleStack,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-data-migration")({
  head: () => ({
    meta: [
      { title: "NetSuite Data Migration Services | ERP Data Migration | Consider Pie" },
      {
        name: "description",
        content:
          "Secure NetSuite data migration services. Legacy data extraction, transformation, duplicate cleansing, and validated financial loads with zero data loss.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Data Migration Services, ERP Data Migration, Financial Data Migration to NetSuite, NetSuite Data Migration Consultant, Data Migration Mumbai",
      },
      { property: "og:title", content: "NetSuite Data Migration Services | ERP Data Migration | Consider Pie" },
      {
        property: "og:description",
        content:
          "Secure NetSuite data migration services. Legacy extraction, transformation, duplicate cleansing, and validated financial loads.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-data-migration" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-data-migration" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Data Migration Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Data extraction, field mapping, duplicate record cleansing, and financial reconciliation for legacy ERP migration to NetSuite.",
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
            { "@type": "ListItem", position: 3, name: "NetSuite Data Migration", item: "https://www.considerpie.com/netsuite-data-migration" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteDataMigrationPage,
});

const MIGRATION_PHASES = [
  { name: "Data Discovery & Extraction", desc: "Extracting master data and historical balances from legacy systems (QuickBooks, SAP, Microsoft Dynamics, Tally)." },
  { name: "Data Cleansing & Transformation", desc: "De-duplicating customer and vendor lists, standardizing addresses, and re-formatting records to NetSuite CSV templates." },
  { name: "Chart of Accounts Mapping", desc: "Mapping legacy GL account structures to NetSuite primary accounts, departments, classes, and locations." },
  { name: "Trial Data Import Runs", desc: "Executing CSV import runs in NetSuite sandbox environment to validate mapping rules and sublist dependencies." },
  { name: "Financial Reconciliation Reporting", desc: "Comparing pre and post-migration trial balances, open AR/AP balances, and inventory valuation totals." },
  { name: "Final Go-Live Cutover Load", desc: "Performing production data migration during cutover window with full validation sign-off." },
];

const FAQS = [
  {
    q: "What data can be migrated to NetSuite?",
    a: "We migrate master data (Customers, Vendors, Items, Chart of Accounts, Employees) as well as open transactions (Unpaid Invoices, Open Bills, Purchase Orders) and historical monthly GL balances.",
  },
  {
    q: "How do you ensure financial balance accuracy?",
    a: "We run detailed pre and post-migration trial balance reconciliation reports, ensuring zero balance drift between legacy systems and NetSuite.",
  },
];

function NetSuiteDataMigrationPage() {
  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> DATA MIGRATION
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Data Migration Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Seamless data extraction, duplicate cleansing, field transformation, and verified financial loads for legacy ERP cutovers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Migration Process"
            title="Validated Data Migration Methodology"
            subtitle="Ensuring strict data integrity and zero financial loss during ERP cutovers."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MIGRATION_PHASES.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                    DATA MIGRATION
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#0B1F4B]">{m.name}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{m.desc}</p>
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
            title="Data Migration FAQs"
            subtitle="Common questions regarding NetSuite data migration."
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
