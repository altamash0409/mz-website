import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CASE_STUDIES } from "@/data/case-studies";
import { Contact } from "@/components/home/Contact";
import { HiOutlineArrowRight } from "react-icons/hi2";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Consider Pie" },
      {
        name: "description",
        content:
          "Explore Oracle NetSuite ERP case studies covering SuiteScript 2.x automation, landed cost calculation, Saved Search workflows, customer statements, and business solutions by Consider Pie.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Case Studies, Oracle NetSuite, ERP Automation, Saved Search, SuiteScript, NetSuite Script, NetSuite Integration, Landed Cost Automation, Customer Statements, Journal Entry Automation, Business Solutions",
      },
      {
        property: "og:title",
        content: "NetSuite Case Studies | Automation & Development Solutions | Consider Pie",
      },
      {
        property: "og:description",
        content:
          "Explore NetSuite automation, development, inventory costing, customer statement, and financial process solutions developed by Consider Pie.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesIndexPage,
});

function CaseStudiesIndexPage() {
  return (
    <main className="bg-[#F5F9FC]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> OUR WORK
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
              NetSuite Solutions Built for Complex Business Processes
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
              Explore how we design and implement scalable NetSuite automation, customization, and financial process solutions to solve complex operational challenges.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDY CARDS SECTION */}
      <section className="section-pad bg-[#FFFFFF]">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <Reveal key={cs.id} delay={i * 0.08} className="h-full">
                  <article className="group flex h-full flex-col justify-between rounded-2xl border border-[#D9E2EA] bg-[#FFFFFF] p-8 shadow-[0_8px_25px_rgba(11,31,75,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B1F4B] hover:shadow-[0_12px_30px_rgba(11,31,75,0.12)]">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex rounded-md bg-[#EAF2F8] px-3 py-1 text-[11px] font-bold tracking-wider text-[#0B1F4B] uppercase">
                          {cs.category}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F9FC] text-[#0B1F4B] transition-colors group-hover:bg-[#0B1F4B] group-hover:text-white">
                          <Icon size={20} />
                        </div>
                      </div>

                      <h2 className="mt-5 font-display text-xl font-bold leading-snug text-[#0B1F4B] transition-colors group-hover:text-[#0B1F4B]">
                        {cs.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                        {cs.shortDescription}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {cs.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#D9E2EA] bg-[#F5F9FC] px-2.5 py-0.5 text-xs font-medium text-[#0B1F4B]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[#D9E2EA]/60 pt-5">
                      <Link
                        to={cs.link as any}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F4B] transition-all group-hover:gap-3 hover:text-[#16357A]"
                      >
                        <span>View Case Study</span>
                        <HiOutlineArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CONTACT SECTION */}
      <Contact />
    </main>
  );
}
