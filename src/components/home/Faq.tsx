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
    a: "Yes. Every implementation includes a hypercare period, and most clients continue on a managed-services retainer covering administration, release-window regression testing, enhancements and ongoing incident support.",
  },
  {
    q: "Can you customise NetSuite without breaking upgrades?",
    a: "That is the core discipline. We build with SuiteScript 2.1, custom records and SDF-managed deployments — never unsupported hacks — and we regression-test every customisation against each NetSuite release before it reaches production.",
  },
  {
    q: "Which systems can you integrate with NetSuite?",
    a: "Shopify, Salesforce, HubSpot, SFTP pipelines, and any REST or SOAP-capable platform via RESTlets, SuiteTalk or middleware such as Celigo and Boomi. Every integration ships with idempotent handling, retry logic and monitoring.",
  },
  {
    q: "Can you rescue a stalled or failed implementation?",
    a: "Frequently. We start with an ERP health audit covering configuration, scripts, permissions and data quality, then deliver a prioritised remediation plan you can execute with us or with your internal team.",
  },
];

export function Faq() {
  return (
    <section className="section-pad bg-[#F5F9FC]" id="faq">
      <div className="shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions enterprise teams ask us"
          subtitle="Straight answers on timelines, cost, support and customisation."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="divide-y divide-[#D9E2EA] border-y border-[#D9E2EA]">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b-0">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#0B1F4B] hover:text-[#0B1F4B] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-[#667085]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}