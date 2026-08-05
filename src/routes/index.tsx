import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Capabilities } from "@/components/home/Capabilities";
import { AiHighlight } from "@/components/home/AiHighlight";
import { Approach } from "@/components/home/Approach";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";

const TITLE = "cpie — Oracle NetSuite Consulting & SuiteScript Experts";
const DESC =
  "cpie helps enterprises streamline operations, automate workflows and maximize ROI through Oracle NetSuite consulting, SuiteScript development and implementation services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "cpie",
          description: DESC,
          areaServed: "Worldwide",
          email: "hello@cpie.com",
          telephone: "+91-90000-00000",
          knowsAbout: [
            "Oracle NetSuite",
            "SuiteScript 2.1",
            "ERP Implementation",
            "SuiteFlow Automation",
            "NetSuite Integrations",
          ],
          serviceType: "NetSuite ERP consulting and implementation",
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
      <Stats />
      <Capabilities />
      <AiHighlight />
      <Approach />
      <Faq />
      <Contact />
    </main>
  );
}
