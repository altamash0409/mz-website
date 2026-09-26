import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Capabilities } from "@/components/home/Capabilities";
import { IndustryExpertise } from "@/components/home/IndustryExpertise";
import { AiHighlight } from "@/components/home/AiHighlight";
import { Approach } from "@/components/home/Approach";
import { TrackRecord } from "@/components/home/TrackRecord";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";

const TITLE = "NetSuite Consulting, Custom Development & Integration | Consider Pie";
const DESC =
  "Consider Pie provides expert NetSuite consulting, custom SuiteScript 2.1 development, RESTlet API integrations, and workflow automation. Based in Mumbai, India, serving US & global businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "NetSuite consulting, NetSuite development, NetSuite integration, NetSuite automation, SuiteScript development, NetSuite consultant USA, hire NetSuite developer, NetSuite solution provider, NetSuite customization, Consider Pie",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.considerpie.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Consider Pie",
          alternateName: ["ConsiderPie", "Consider Pie NetSuite Solutions", "Consider Pie ERP Solutions"],
          url: "https://www.considerpie.com/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Consider Pie",
          url: "https://www.considerpie.com",
          logo: "https://www.considerpie.com/logo.png",
          description: DESC,
          areaServed: ["United States", "UAE", "Saudi Arabia", "Qatar", "Australia", "United Kingdom", "India"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          email: "contact@considerpie.com",
          telephone: "+91-91678-43480",
          knowsAbout: [
            "Oracle NetSuite ERP Consulting",
            "NetSuite SuiteScript 2.1 Development",
            "NetSuite Advanced Saved Search",
            "NetSuite RESTlet & SuiteTalk Integration",
            "NetSuite Workflow Automation",
            "NetSuite Enterprise Business Solutions",
            "NetSuite Customization & Support",
          ],
          serviceType: "NetSuite ERP Consulting, SuiteScript Development, Integration & Business Automation",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <AiHighlight />
      <Approach />
      <TrackRecord />
      <Faq />
      <Contact />
    </main>
  );
}

