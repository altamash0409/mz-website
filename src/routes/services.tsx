import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { IndustryExpertise } from "@/components/home/IndustryExpertise";
import {
  HiOutlineRocketLaunch,
  HiOutlineCodeBracketSquare,
  HiOutlineArrowsRightLeft,
  HiOutlineLifebuoy,
  HiOutlineBoltSlash,
  HiOutlineCircleStack,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChartBarSquare,
  HiOutlineBuildingOffice2,
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineTruck,
  HiOutlineCpuChip,
  HiOutlineBriefcase,
} from "react-icons/hi2";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "NetSuite Services & Integrations | cpie" },
      {
        name: "description",
        content:
          "NetSuite implementation, SuiteScript 2.1 engineering, integrations, managed admin, data migration and ERP audits — delivered by certified cpie consultants.",
      },
      { property: "og:title", content: "Enterprise NetSuite Services Engineered for Scale" },
      {
        property: "og:description",
        content:
          "Implementation, SuiteScript engineering, integrations and 24/7 managed NetSuite support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: HiOutlineRocketLaunch,
    title: "NetSuite Implementation",
    body: "End-to-end greenfield rollouts and re-implementations — chart of accounts, subsidiaries, roles, and go-live cutover.",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: "SuiteScript 2.1 Engineering",
    body: "Map/Reduce, User Event, Scheduled and Suitelet scripts written to governance-safe, testable standards.",
  },
  {
    icon: HiOutlineArrowsRightLeft,
    title: "System Integrations",
    body: "RESTlets, SuiteTalk and middleware pipelines that keep NetSuite in lockstep with every surrounding system.",
  },
  {
    icon: HiOutlineLifebuoy,
    title: "Managed Admin & 24/7 Support",
    body: "SLA-backed administration, release-window regression testing and hypercare for global operations.",
  },
  {
    icon: HiOutlineBoltSlash,
    title: "Workflow & SuiteFlow Automation",
    body: "Approval matrices, state machines and event-driven automations that remove manual handoffs.",
  },
  {
    icon: HiOutlineCircleStack,
    title: "Data Migration & Cleansing",
    body: "Legacy extraction, de-duplication, transformation and validated loads with full reconciliation reporting.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "ERP Health Audit",
    body: "Deep review of scripts, saved searches, permissions and performance with a prioritised remediation plan.",
  },
  {
    icon: HiOutlineChartBarSquare,
    title: "Financial Reporting & Dashboards",
    body: "Executive KPI dashboards, multi-book reporting and saved searches finance teams actually trust.",
  },
];

const INDUSTRIES = [
  {
    icon: HiOutlineBuildingOffice2,
    name: "Manufacturing",
    body: "Work orders, assembly builds, landed cost and shop-floor visibility across multi-plant operations.",
  },
  {
    icon: HiOutlineShoppingBag,
    name: "Retail & E-Commerce",
    body: "Omnichannel order orchestration, POS reconciliation and real-time inventory availability.",
  },
  {
    icon: HiOutlineHeart,
    name: "Healthcare",
    body: "Lot and expiry traceability, compliance-ready audit trails and controlled procurement workflows.",
  },
  {
    icon: HiOutlineTruck,
    name: "Distribution",
    body: "Demand planning, warehouse bin management and 3PL synchronisation at high order volume.",
  },
  {
    icon: HiOutlineCpuChip,
    name: "Technology & SaaS",
    body: "ASC 606 revenue recognition, subscription billing and usage-based invoicing automation.",
  },
  {
    icon: HiOutlineBriefcase,
    name: "Professional Services",
    body: "Project accounting, resource utilisation, timesheets and milestone-based billing.",
  },
];

const INTEGRATIONS = [
  {
    name: "Shopify",
    tag: "Commerce",
    body: "Bi-directional order, fulfilment, refund and inventory sync with SKU-level mapping.",
  },
  {
    name: "Salesforce",
    tag: "CRM",
    body: "Opportunity-to-cash flow with account, quote and invoice parity between both platforms.",
  },
  {
    name: "3PL Logistics",
    tag: "ShipStation · FedEx",
    body: "Automated shipment creation, rate shopping, label generation and tracking write-back.",
  },
  {
    name: "Payment Gateways",
    tag: "Stripe · PayPal",
    body: "Tokenised payments, automated deposit matching and settlement reconciliation.",
  },
  {
    name: "Custom RESTlets",
    tag: "SuiteTalk",
    body: "Purpose-built authenticated endpoints for partner portals and in-house applications.",
  },
  {
    name: "Middleware",
    tag: "Celigo · Boomi",
    body: "iPaaS flow design, error-handling frameworks and monitored retry orchestration.",
  },
];

function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-brand-deep pt-36 pb-24 text-background">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-sage/20 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cherry/15 blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-cherry" /> Services & Integrations
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
              Enterprise NetSuite Services{" "}
              <span className="text-gradient-cherry">Engineered for Scale</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-background/70">
              From first configuration to the thousandth automated transaction — a single team for
              implementation, engineering, integration and long-term care of your NetSuite account.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Core services"
            title="What we deliver"
            subtitle="Eight practice areas covering the full lifecycle of an Oracle NetSuite account."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-sage hover:shadow-xl">
                  <span className="inline-flex rounded-xl bg-secondary p-3 text-brand transition-colors group-hover:bg-cherry group-hover:text-accent-foreground">
                    <s.icon size={22} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <IndustryExpertise />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Integration architecture"
            title="Connected to everything you run"
            subtitle="Resilient, observable data flows with retry logic, alerting and full audit trails."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATIONS.map((it, i) => (
              <Reveal key={it.name} delay={i * 0.04}>
                <article className="h-full bg-card p-8 transition-colors hover:bg-secondary/60">
                  <span className="text-xs font-semibold tracking-widest text-sage uppercase">
                    {it.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{it.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}