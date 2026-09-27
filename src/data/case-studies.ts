import {
  HiOutlineDocumentText,
  HiOutlineCalculator,
  HiOutlineDocumentDuplicate,
  HiOutlineChartBar,
  HiOutlineCircleStack,
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
      "A scalable NetSuite business automation solution designed to generate and distribute customer statements based on configurable customer and subsidiary-level requirements.",
    shortDescription:
      "A scalable NetSuite business automation framework to generate and distribute customer statements across a complex multi-subsidiary environment.",
    techTags: ["NetSuite ERP", "Business Automation", "Multi-Subsidiary", "AR Operations"],
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
      "A NetSuite business automation solution designed to retrieve applicable landed cost allocations, calculate effective unit costs, and update transaction values automatically.",
    shortDescription:
      "A NetSuite business automation solution to retrieve landed cost allocations, calculate effective unit costs, and update transaction values across multiple transaction types.",
    techTags: ["NetSuite ERP", "Inventory Costing", "Landed Cost", "Supply Chain"],
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
      "A NetSuite finance automation workflow designed to identify transactions requiring department corrections, provide a review process, and automate journal entry creation.",
    shortDescription:
      "A NetSuite finance automation workflow to identify transactions requiring department corrections, enable user review, and automate journal entry creation for GL impact.",
    techTags: ["NetSuite ERP", "Finance Automation", "GL Reclassification", "Journal Control"],
    link: "/case-studies/finance-automation-je-creation",
    icon: HiOutlineDocumentDuplicate,
  },
  {
    id: "netsuite-pricing-intelligence",
    slug: "netsuite-pricing-intelligence",
    category: "PRICING & REPORTING AUTOMATION",
    title: "NetSuite Pricing Intelligence & Analysis Solution",
    fullTitle: "NetSuite Pricing Intelligence & Transaction-Level Analysis Solution",
    subtitle:
      "A custom NetSuite reporting solution designed to access complex Pricing Matrix data, compare Base Prices against Customer Price Levels, and process bulk report requests.",
    shortDescription:
      "A custom NetSuite reporting solution to analyze Pricing Matrix data, compare Base Prices against Customer Price Levels across transaction types, and manage high-volume report requests.",
    techTags: ["NetSuite ERP", "Pricing Matrix", "Margin Analytics", "Commercial Reporting"],
    link: "/case-studies/netsuite-pricing-intelligence",
    icon: HiOutlineChartBar,
  },
  {
    id: "infor-to-netsuite-manufacturing-sync",
    slug: "infor-to-netsuite-manufacturing-sync",
    category: "DATA MIGRATION & INTEGRATION",
    title: "High-Volume Manufacturing Master Data Migration",
    fullTitle: "High-Volume Manufacturing Master Data Migration from Infor to NetSuite",
    subtitle:
      "A NetSuite integration solution built to migrate manufacturing master data — Bills of Materials, BOM Routings, and Advanced Manufacturing Routings — from Infor into NetSuite, using an OAuth 2.0-authenticated RESTlet integration and a Python-based data transformation layer.",
    shortDescription:
      "A NetSuite integration solution built to migrate manufacturing master data from Infor into NetSuite using an OAuth 2.0 RESTlet and Python transformation layer.",
    techTags: [
      "NetSuite ERP",
      "RESTlet Integration",
      "Advanced Manufacturing",
      "Python Automation",
    ],
    link: "/case-studies/infor-to-netsuite-manufacturing-sync",
    icon: HiOutlineCircleStack,
  },
];
