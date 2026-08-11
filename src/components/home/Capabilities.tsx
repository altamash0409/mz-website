import { Reveal, SectionHeading } from "@/components/site/Reveal";
import {
  HiOutlineBanknotes,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
  HiOutlineChartPie,
} from "react-icons/hi2";

const ITEMS = [
  {
    icon: HiOutlineBanknotes,
    title: "Financial Management",
    body: "Real-time close, multi-book accounting, revenue recognition and audit-ready controls in a single ledger.",
  },
  {
    icon: HiOutlineCube,
    title: "Supply Chain & Inventory",
    body: "Demand planning, multi-location inventory, landed cost and procurement visibility end to end.",
  },
  {
    icon: HiOutlineShoppingCart,
    title: "Commerce & Order Management",
    body: "Unified omnichannel order orchestration from cart to fulfilment to cash collection.",
  },
  {
    icon: HiOutlineSquares2X2,
    title: "SuiteCloud Platform",
    body: "Custom records, SuiteScript, SuiteFlow and SDF-managed deployments as a real engineering practice.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "CRM & Customer 360",
    body: "Lead-to-cash on one record set — no reconciliation between sales and finance systems.",
  },
  {
    icon: HiOutlineChartPie,
    title: "Analytics & Reporting",
    body: "Executive dashboards, SuiteAnalytics workbooks and saved searches your board can rely on.",
  },
];

export function Capabilities() {
  return (
    <section className="section-pad bg-[#FFFFFF]" id="capabilities">
      <div className="shell">
        <SectionHeading
          eyebrow="Why NetSuite"
          title="One platform, every core capability"
          subtitle="NetSuite replaces the patchwork of disconnected tools most growing enterprises outgrow. We make it fit the way you actually operate."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-7 shadow-[0_8px_25px_rgba(11,31,75,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B1F4B]">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#0B1F4B] transition-transform duration-300 group-hover:scale-x-100" />
                <span className="inline-flex rounded-lg bg-[#EAF2F8] p-3 text-[#0B1F4B] transition-colors group-hover:bg-[#0B1F4B] group-hover:text-white">
                  <it.icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#0B1F4B]">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#667085]">{it.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}