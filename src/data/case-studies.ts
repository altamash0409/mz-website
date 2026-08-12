import {
  HiOutlineDocumentText,
  HiOutlineCalculator,
  HiOutlineDocumentDuplicate,
  HiOutlineCpuChip,
  HiOutlineArrowPath,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
} from "react-icons/hi2";

export interface CaseStudy {
  id: string;
  slug: string;
  category: string;
  title: string;
  fullTitle: string;
  subtitle: string;
  shortDescription: string;
  techTags: string[];
  link: string;
  icon: typeof HiOutlineDocumentText;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "customer-statement-automation",
    slug: "customer-statement-automation",
    category: "NETSUITE AUTOMATION",
    title: "Automated Customer Statement Distribution",
    fullTitle: "Automating Customer Statements Across a Multi-Subsidiary Environment",
    subtitle:
      "A scalable NetSuite automation solution designed to generate and distribute customer statements based on configurable customer and subsidiary-level requirements.",
    shortDescription:
      "Built a scalable NetSuite automation framework to generate and distribute customer statements across a complex multi-subsidiary environment.",
    techTags: [
      "NetSuite",
      "SuiteScript 2.x",
      "Map/Reduce",
      "Saved Searches",
      "Excel Generation",
    ],
    link: "/case-studies/customer-statement-automation",
    icon: HiOutlineDocumentText,
  },
  {
    id: "landed-cost-automation",
    slug: "landed-cost-automation",
    category: "INVENTORY & COSTING AUTOMATION",
    title: "Automated Landed Cost & Effective Unit Cost Calculation",
    fullTitle: "Automated Landed Cost & Effective Unit Cost Calculation",
    subtitle:
      "A NetSuite automation solution designed to retrieve applicable landed cost allocations, calculate effective unit costs, and update transaction values automatically.",
    shortDescription:
      "Developed a NetSuite automation solution to retrieve landed cost allocations, calculate effective unit costs, and automatically update transaction values across multiple transaction types.",
    techTags: [
      "NetSuite",
      "SuiteScript 2.x",
      "JavaScript",
      "Inventory Automation",
      "Landed Cost",
    ],
    link: "/case-studies/landed-cost-automation",
    icon: HiOutlineCalculator,
  },
  {
    id: "finance-automation-je-creation",
    slug: "finance-automation-je-creation",
    category: "FINANCE AUTOMATION",
    title: "Automated Journal Entry Creation for COGS Department Corrections",
    fullTitle: "Automating Journal Entry Creation for Department Corrections",
    subtitle:
      "A NetSuite automation workflow designed to identify transactions requiring department corrections, provide a review process, and automate journal entry creation for financial processing.",
    shortDescription:
      "Developed a NetSuite automation workflow to identify transactions requiring department corrections, allow users to review processing data, and automate journal entry creation for financial processing.",
    techTags: [
      "NetSuite",
      "SuiteScript 2.x",
      "Suitelet",
      "Map/Reduce",
      "Saved Searches",
    ],
    link: "/case-studies/finance-automation-je-creation",
    icon: HiOutlineDocumentDuplicate,
  },
];
