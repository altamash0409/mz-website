import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineChartBarSquare,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export const Route = createFileRoute("/netsuite-consulting")({
  head: () => ({
    meta: [
      { title: "NetSuite Consulting Services in Mumbai | Consider Pie" },
      {
        name: "description",
        content:
          "Consider Pie provides enterprise NetSuite consulting services, ERP strategy, process optimization, and technical guidance from Mumbai, India, serving clients globally.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Consulting Services, NetSuite Consultant Mumbai, NetSuite ERP Consultant, NetSuite Consulting Mumbai, NetSuite Consultant India, ERP Consulting Mumbai",
      },
      { property: "og:title", content: "NetSuite Consulting Services in Mumbai | Consider Pie" },
      {
        property: "og:description",
        content:
          "Enterprise NetSuite consulting services, ERP strategy, process optimization, and technical guidance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/netsuite-consulting" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/netsuite-consulting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NetSuite Consulting Services",
          provider: {
            "@type": "ProfessionalService",
            name: "Consider Pie",
            url: "https://www.considerpie.com",
          },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          description:
            "Strategic NetSuite consulting, ERP process evaluation, system architecture, and optimization guidance for enterprise businesses.",
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
            { "@type": "ListItem", position: 3, name: "NetSuite Consulting", item: "https://www.considerpie.com/netsuite-consulting" },
          ],
        }),
      },
    ],
  }),
  component: NetSuiteConsultingPage,
});

const CHALLENGES = [
  { title: "Underutilized NetSuite Modules", desc: "Paying for enterprise ERP capabilities while relying on external spreadsheets for core operations." },
  { title: "Process Bottlenecks & Manual Handoffs", desc: "Inefficient workflows that cause delays in order processing, billing, and inventory reconciliation." },
  { title: "Lack of Internal Technical Expertise", desc: "Difficulty finding techno-functional NetSuite experts to guide complex architectural decisions." },
  { title: "Scalability & Governance Risks", desc: "Existing NetSuite setup struggling to support business growth or multi-subsidiary expansion." },
];

const CAPABILITIES = [
  "ERP Architectural Assessment & Roadmap Planning",
  "Techno-Functional Process Optimization",
  "Chart of Accounts & Subsidiary Alignment",
  "Custom Workflow & SuiteScript Strategy",
  "Financial Reporting & Saved Search Governance",
  "Integration Architecture & Middleware Selection",
];

const FAQS = [
  {
    q: "What does a NetSuite consultant do?",
    a: "A NetSuite consultant evaluates your business workflows, designs optimal ERP system architecture, configures records and modules, and provides technical guidance to align NetSuite with your operational goals.",
  },
  {
    q: "Do you provide NetSuite consulting services in Mumbai?",
    a: "Yes, Consider Pie is based in Mumbai, Maharashtra, India. We provide on-site and remote NetSuite consulting services to businesses across Mumbai, India, and globally.",
  },
  {
    q: "How does Consider Pie approach NetSuite consulting engagements?",
    a: "We combine functional domain knowledge with deep technical SuiteScript expertise to deliver scalable, practical solutions without over-engineering your NetSuite account.",
  },
];

function NetSuiteConsultingPage() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> NETSUITE CONSULTING
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Consulting Services in Mumbai
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Strategic NetSuite ERP guidance, process optimization, and techno-functional architecture delivered by experienced consultants in Mumbai, serving businesses globally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW & BUSINESS CHALLENGES */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Strategic Advisory"
            title="Maximize the Value of Your NetSuite ERP Investment"
            subtitle="Transforming complex business requirements into clear, scalable NetSuite architecture."
          />

          <Reveal className="mt-8 max-w-3xl text-base leading-relaxed text-[#667085]">
            <p>
              Growing organizations often struggle to translate complex business processes into efficient NetSuite workflows. Without strategic guidance, NetSuite accounts can suffer from performance degradation, redundant customizations, and operational friction.
            </p>
            <p className="mt-4">
              At Consider Pie, our Mumbai-based NetSuite consultants work closely with your leadership, finance, and operations teams to evaluate your current setup, remove process bottlenecks, and build a sustainable long-term ERP roadmap.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-6 shadow-2xs">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1F4B] text-white">
                    <HiOutlineBriefcase size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#0B1F4B]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL & FUNCTIONAL CAPABILITIES */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="Our NetSuite Consulting Expertise"
            subtitle="Techno-functional advisory spanning implementation strategy, scripting, and optimization."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-5 shadow-2xs text-sm font-semibold text-[#0B1F4B]">
                  <HiOutlineCheckCircle size={20} className="shrink-0 text-[#0B1F4B]" />
                  <span>{cap}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDY LINK */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <SectionHeading
            eyebrow="Real-World Impact"
            title="Consulting in Action"
            subtitle="Explore how strategic NetSuite consulting drives measurable operational results."
          />

          <Reveal className="mt-8">
            <div className="rounded-2xl border border-[#D9E2EA] bg-[#F5F9FC] p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="inline-block rounded-md bg-[#EAF2F8] px-3 py-1 text-xs font-bold text-[#0B1F4B] uppercase">
                  Featured Project
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-[#0B1F4B]">
                  Automating Journal Entry Creation for Department Corrections
                </h3>
                <p className="mt-2 text-sm text-[#667085] max-w-2xl">
                  Discover how our consulting team designed a controlled Suitelet and Map/Reduce architecture for automated COGS department corrections.
                </p>
              </div>
              <Link
                to="/case-studies/finance-automation-je-creation"
                className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#0B1F4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#16357A]"
              >
                <span>Read Case Study</span>
                <HiOutlineArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-pad bg-[#F5F9FC]">
        <div className="shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions regarding NetSuite consulting services."
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

      {/* CONTACT CTA */}
      <Contact />
    </main>
  );
}
