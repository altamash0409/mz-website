import { SectionHeading } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How long does a typical NetSuite implementation take?",
    a: "A focused single-subsidiary rollout usually runs 10–14 weeks from kickoff to go-live. Multi-subsidiary OneWorld programmes with heavy customisation and data migration typically land between 4 and 7 months. We commit to a dated plan at the end of discovery, not before.",
  },
  {
    q: "What does an engagement cost?",
    a: "Implementations are quoted as fixed-scope Statements of Work after discovery, so you are never billed against an open-ended estimate. Engineering and managed-admin work is available on retainer with a defined monthly block of hours and an SLA.",
  },
  {
    q: "Do you support our account after go-live?",
    a: "Yes. Every implementation includes a hypercare period, and most clients continue on a managed-services retainer covering administration, release-window regression testing, enhancements and 24x7 incident response.",
  },
  {
    q: "Can you customise NetSuite without breaking upgrades?",
    a: "That is the core discipline. We build with SuiteScript 2.1, custom records and SDF-managed deployments — never unsupported hacks — and we regression-test every customisation against each NetSuite release before it reaches production.",
  },
  {
    q: "Which systems can you integrate with NetSuite?",
    a: "Shopify, Salesforce, Stripe, PayPal, ShipStation, FedEx, and any REST or SOAP-capable platform via RESTlets, SuiteTalk or middleware such as Celigo and Boomi. Every integration ships with idempotent handling, retry logic and monitoring.",
  },
  {
    q: "Can you rescue a stalled or failed implementation?",
    a: "Frequently. We start with an ERP health audit covering configuration, scripts, permissions and data quality, then deliver a prioritised remediation plan you can execute with us or with your internal team.",
  },
];

export function Faq() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#EEF6F2]" id="faq">
      {/* Organic Wavy Background Shapes matching screenshot */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full text-[#D4E8DE]/70 fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,160 C320,340 540,60 840,240 C1140,420 1320,120 1440,260 L1440,900 L0,900 Z" />
        </svg>
      </div>

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions enterprise teams ask us"
          subtitle="Straight answers on timelines, cost, support and customisation."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-[28px] md:rounded-[36px] border border-[#D5E6DC] bg-card p-6 sm:p-10 md:p-12 shadow-xl shadow-black/4">
            <Accordion type="single" collapsible className="divide-y divide-border">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-b-0 py-1">
                  <AccordionTrigger className="py-4 text-left font-display text-base sm:text-lg font-semibold text-foreground transition-colors hover:text-brand hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}