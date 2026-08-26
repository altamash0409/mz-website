import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Capabilities } from "@/components/home/Capabilities";
import { IndustryExpertise } from "@/components/home/IndustryExpertise";
import { AiHighlight } from "@/components/home/AiHighlight";
import { Approach } from "@/components/home/Approach";
import { TrackRecord } from "@/components/home/TrackRecord";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";

const TITLE = "Consider Pie | NetSuite Consulting & Implementation Services";
const DESC =
  "Consider Pie is a NetSuite consulting and development firm. We provide expert NetSuite consultant services, NetSuite implementation services, SuiteScript customization, API integration, and business automation globally.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "NetSuite, NetSuite consultant, NetSuite consulting, NetSuite consulting services, NetSuite implementation, NetSuite implementation services, NetSuite customization, NetSuite integration, NetSuite development, NetSuite support, NetSuite ERP, NetSuite automation",
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
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
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
            "NetSuite SuiteScript 2.x Development",
            "NetSuite Advanced Saved Search",
            "NetSuite RESTlet & SuiteTalk Integration",
            "NetSuite Workflow Automation",
            "NetSuite Enterprise Business Solutions",
            "NetSuite Customization & Support",
          ],
          serviceType: "NetSuite ERP Consulting, SuiteScript Development, Integration & Business Solutions",
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

