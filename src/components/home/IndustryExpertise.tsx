import { Reveal } from "@/components/site/Reveal";
import {
  HiOutlineBuildingOffice2,
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineTruck,
  HiOutlineCpuChip,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const SECTORS = [
  {
    icon: HiOutlineBuildingOffice2,
    title: "Manufacturing & Assembly",
    subTag: "MULTI-LEVEL BOMS, WORK ORDERS & SUPPLY CHAIN CONTROL",
    description:
      "Streamline raw material procurement, work-in-progress (WIP) tracking, shop floor execution, and assembly management. cpie builds custom SuiteScripts to calculate actual vs standard production costs in real time.",
    capabilities: [
      "Work Order & Routing Automation",
      "Multi-Level Bill of Materials (BOM)",
      "Subcontracted Manufacturing Tracking",
    ],
  },
  {
    icon: HiOutlineShoppingBag,
    title: "Retail & Multi-Channel E-Commerce",
    subTag: "OMNICHANNEL ORDER MANAGEMENT & AUTOMATED STOCK SYNC",
    description:
      "Connect Shopify, Amazon, and physical POS systems directly to NetSuite core. Enable real-time Available-to-Promise (ATP) inventory levels, automated order routing, and instant tracking pushbacks.",
    capabilities: [
      "Shopify & Storefront Connectors",
      "Multi-Warehouse Inventory Allocation",
      "Automated Refund & Return Management",
    ],
  },
  {
    icon: HiOutlineHeart,
    title: "Healthcare & Life Sciences",
    subTag: "HIPAA COMPLIANT ERP WORKFLOWS & LOT SERIALIZATION",
    description:
      "Ensure stringent compliance, lot tracking, expiration management, and medical device inventory controls. We configure strict access roles and audit trails to keep data secure.",
    capabilities: [
      "Lot Number & Expiration Tracking",
      "FDA Audit-Ready System Logs",
      "Medical Supply Chain Optimization",
    ],
  },
  {
    icon: HiOutlineTruck,
    title: "Distribution & Logistics",
    subTag: "HIGH-VOLUME PICKING, PACKING & 3PL INTEGRATION",
    description:
      "Optimize warehouse bin management, demand planning, and automated carrier rate shopping. Seamlessly sync 3PL logistics networks with real-time inventory visibility.",
    capabilities: [
      "Demand Planning & Bin Management",
      "Automated 3PL Carrier Rate Shopping",
      "High-Volume Order Batching",
    ],
  },
  {
    icon: HiOutlineCpuChip,
    title: "Technology & SaaS",
    subTag: "ASC 606 REVENUE RECOGNITION & RECURRING BILLING",
    description:
      "Automate complex contract renewals, usage-based invoicing, and multi-book ASC 606 revenue schedules without manual spreadsheet reconciliations.",
    capabilities: [
      "ASC 606 & IFRS 15 Revenue Schedules",
      "Usage-Based & Milestone Invoicing",
      "Automated Contract Renewal Triggers",
    ],
  },
  {
    icon: HiOutlineBriefcase,
    title: "Professional Services",
    subTag: "PROJECT ACCOUNTING & RESOURCE UTILIZATION",
    description:
      "Track project profitability, resource allocation, and billable time in one ledger. Ensure accurate milestone billing and budget-vs-actual financial reporting.",
    capabilities: [
      "Project Budget & Profitability Tracking",
      "Timesheet & Resource Allocation",
      "Milestone & Time-and-Materials Billing",
    ],
  },
];

export function IndustryExpertise() {
  return (
    <section className="section-pad bg-[#F5F9FC]" id="industry-expertise">
      <div className="shell">
        {/* Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0B1F4B]/40 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0B1F4B]" />
            </span>
            Industry Expertise
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-[#0B1F4B] sm:text-4xl lg:text-5xl">
            Specialized Solutions for{" "}
            <span className="text-[#0B1F4B]">Your Sector</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#667085] max-w-2xl mx-auto">
            Generic ERP implementations fail because every industry operates differently. We pre-configure
            NetSuite with tailored workflows, KPIs, and compliance rules built for your domain.
          </p>
        </Reveal>

        {/* 3-Column Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <Reveal key={sec.title} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col justify-between rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 md:p-9 shadow-[0_8px_25px_rgba(11,31,75,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B1F4B]">
                  <div>
                    {/* Icon Header */}
                    <div className="flex h-13 w-13 items-center justify-center rounded-lg bg-[#EAF2F8] text-[#0B1F4B] transition-colors group-hover:bg-[#0B1F4B] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#0B1F4B]">
                      {sec.title}
                    </h3>

                    {/* Sub-tagline */}
                    <p className="mt-2 text-xs font-bold tracking-wider text-[#0B1F4B] uppercase">
                      {sec.subTag}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-[#667085]">
                      {sec.description}
                    </p>
                  </div>

                  {/* Bottom Capabilities Checklist */}
                  <div>
                    <div className="my-6 border-t border-[#D9E2EA]" />
                    <p className="text-[11px] font-bold tracking-wider text-[#667085] uppercase mb-3.5">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-2.5">
                      {sec.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5 text-xs font-medium text-[#0B1F4B]">
                          <HiOutlineCheckCircle size={16} className="text-[#0B1F4B] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
