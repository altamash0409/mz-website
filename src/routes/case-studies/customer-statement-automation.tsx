import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineGlobeAlt,
  HiOutlineLanguage,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export const Route = createFileRoute(
  "/case-studies/customer-statement-automation"
)({
  head: () => ({
    meta: [
      {
        title: "Automated Customer Statement Distribution | NetSuite Case Study | Consider Pie",
      },
      {
        name: "description",
        content:
          "Explore a scalable NetSuite business automation solution for customer statement generation and distribution across a multi-subsidiary environment.",
      },
      {
        property: "og:title",
        content:
          "Automated Customer Statement Distribution in NetSuite | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Explore a scalable NetSuite business automation solution for customer statement generation and distribution across a multi-subsidiary environment.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.considerpie.com/case-studies/customer-statement-automation",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.considerpie.com/case-studies/customer-statement-automation",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Consider Pie", item: "https://www.considerpie.com" },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.considerpie.com/case-studies" },
            { "@type": "ListItem", position: 3, name: "Customer Statement Automation", item: "https://www.considerpie.com/case-studies/customer-statement-automation" },
          ],
        }),
      },
    ],
  }),
  component: CustomerStatementCaseStudyPage,
});

const TECH_TAGS = [
  "NetSuite ERP",
  "Business Process Automation",
  "Multi-Subsidiary Management",
  "AR Operations",
];

const CHALLENGES = [
  {
    icon: HiOutlineCalendar,
    title: "Varying Statement Cutoff Timing",
    desc: "Managing diverse requirements for statement cutoff dates across distinct business units.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Transaction Selection Preferences",
    desc: "Accommodating accounts requiring invoice-only views versus combined credit memo statements.",
  },
  {
    icon: HiOutlineCog,
    title: "Customer Preferences",
    desc: "Handling customer-specific formatting, opt-in rules, and delivery schedules.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Multi-Subsidiary Scope",
    desc: "Operating across nearly 40 subsidiaries within a single unified enterprise account.",
  },
  {
    icon: HiOutlineLanguage,
    title: "Regional & Language Requirements",
    desc: "Supporting subsidiary-specific currencies, regional formatting, and localized customer requirements.",
  },
  {
    icon: HiOutlineClock,
    title: "Manual Overhead & Inefficiency",
    desc: "Eliminating time-consuming manual statement generation and manual distribution cycles.",
  },
];

const BUSINESS_REQUIREMENTS = [
  "Centralized operational framework supporting statement generation across nearly 40 global subsidiaries.",
  "Configurable transaction scope allowing customers to receive open-invoices-only or combined balances.",
  "Flexible cutoff date parameters accommodating As-Of Date and Month-End statements.",
  "Localized currency, language, and regional formatting adaptation per subsidiary.",
  "Automated background processing to eliminate manual staff effort and prevent operational bottlenecks.",
];

const OUTCOMES = [
  {
    icon: HiOutlineClock,
    title: "Reduced Manual Processing Effort",
    desc: "Completely eliminated manual statement assembly and email distribution across all global accounting teams.",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "Consistent Statement Operations",
    desc: "Established standardized, reliable customer communications through uniform, automated execution.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Support for Nearly 40 Subsidiaries",
    desc: "Enabled seamless multi-subsidiary execution without increasing finance headcount or administrative overhead.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Enterprise Scalability",
    desc: "Delivered a flexible operational model that scales effortlessly with growing customer accounts and new business units.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Enhanced Regional & Customer Management",
    desc: "Improved customer satisfaction by automatically honoring individual preferences and local currency requirements.",
  },
];

function CustomerStatementCaseStudyPage() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-20 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={[{ label: "Case Studies", to: "/case-studies" }, { label: "Customer Statement Automation" }]} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE AUTOMATION
              </span>
              <span className="inline-flex items-center rounded-md bg-[#0B1F4B] px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-2xs">
                MULTI-SUBSIDIARY AR SOLUTIONS
              </span>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-[#0B1F4B] sm:text-4xl lg:text-5xl">
              Automating Customer Statements Across a Multi-Subsidiary Environment
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-[#667085]">
              A scalable NetSuite business automation solution designed to generate and distribute customer statements based on configurable customer and subsidiary-level requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {TECH_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-3 py-1 text-xs font-semibold text-[#0B1F4B] shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Business Overview"
            title="The Challenge"
            subtitle="Centralizing customer statement distribution across global business units with distinct requirements."
          />

          <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#667085]">
            <p>
              Managing customer statements across a large multi-subsidiary environment can become complex when customers and subsidiaries have different requirements for statement timing, transaction selection, language, formatting, and calculation rules.
            </p>
            <p className="mt-4">
              The requirement was to create a centralized and scalable operational process capable of generating statements based on configurable criteria while supporting regional variations across nearly 40 subsidiaries.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1F4B] text-white">
                    <c.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#0B1F4B]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                    {c.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS REQUIREMENTS */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell max-w-4xl">
          <SectionHeading
            eyebrow="Key Objectives"
            title="Business Requirements"
            subtitle="Core operational capabilities defined to streamline multi-subsidiary statement distribution."
          />

          <Reveal className="mt-10">
            <div className="rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 shadow-[0_8px_25px_rgba(11,31,75,0.06)]">
              <ul className="space-y-4">
                {BUSINESS_REQUIREMENTS.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <HiOutlineCheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0B1F4B]" />
                    <span className="text-base text-[#667085] leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. BUSINESS OUTCOME */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Results & Impact"
            title="Business Outcome"
            subtitle="Operational improvements and value achieved through centralized NetSuite automation."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 transition-all hover:border-[#0B1F4B] hover:shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1F4B] text-white">
                    <o.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0B1F4B]">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                    {o.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY & EXPERTISE */}
      <section className="py-12 bg-[#F5F9FC] border-t border-[#D9E2EA]">
        <div className="shell text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#0B1F4B]">
              <HiOutlineSquares2X2 size={16} />
              <span>Technology & Core Expertise</span>
            </div>
            <p className="text-sm text-[#667085] max-w-xl mx-auto">
              NetSuite ERP • Accounts Receivable Automation • Multi-Subsidiary Architecture • Customer Communications
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <Contact />
    </main>
  );
}
