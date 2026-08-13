import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { HiOutlineClock, HiArrowRight, HiXMark } from "react-icons/hi2";
import { Reveal } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ARTICLES, Article } from "@/data/articles";

export const Route = createFileRoute("/thoughts")({
  head: () => ({
    meta: [
      { title: "Thoughts from the Cloud | NetSuite ERP Insights | Consider Pie" },
      {
        name: "description",
        content:
          "Field notes on NetSuite ERP strategy, SuiteScript 2.x development, saved search optimization, RESTlet integration, and business solution architecture from Consider Pie.",
      },
      {
        name: "keywords",
        content:
          "NetSuite Articles, Oracle NetSuite, NetSuite ERP, SuiteScript, Saved Search, NetSuite Integration, NetSuite Automation, Business Solutions, ERP Strategy",
      },
      { property: "og:title", content: "Thoughts from the Cloud | Consider Pie" },
      {
        property: "og:description",
        content: "ERP strategy, NetSuite administration, SuiteScript and integration insights.",
      },
      { property: "og:url", content: "https://www.considerpie.com/thoughts" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.considerpie.com/thoughts" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Consider Pie", item: "https://www.considerpie.com" },
            { "@type": "ListItem", position: 2, name: "Thoughts", item: "https://www.considerpie.com/thoughts" },
          ],
        }),
      },
    ],
  }),
  component: ThoughtsPage,
});

const CATEGORIES = [
  "ERP Strategy",
  "NetSuite Administration",
  "Engineering",
  "Integrations",
] as const;

function ThoughtsPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("ERP Strategy");
  const [open, setOpen] = useState<Article | null>(null);

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => a.category === active);
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <main className="bg-[#F5F9FC]">
      <section className="relative overflow-hidden bg-[#F5F9FC] pt-44 sm:pt-52 pb-24 text-[#0B1F4B]">
        <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#0B1F4B]/[0.02] blur-[140px]" />
        <div className="shell relative">
          <div className="text-center">
            <Reveal>
              <div className="mb-6 flex justify-center">
                <Breadcrumbs items={[{ label: "Thoughts from the Cloud" }]} />
              </div>
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" /> The Consider Pie journal
              </span>
              <h1 className="mt-6 text-4xl font-bold text-[#0B1F4B] sm:text-5xl">
                Thoughts from the <span className="text-[#0B1F4B]">Cloud</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base text-[#667085]">
                Field notes from live NetSuite engagements — architecture decisions, engineering
                patterns and the operational lessons behind them.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  active === c
                    ? "border-[#0B1F4B] bg-[#0B1F4B] text-white shadow-xs"
                    : "border-[#D9E2EA] bg-[#FFFFFF] text-[#667085] hover:border-[#0B1F4B] hover:text-[#0B1F4B]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <article
                key={a.slug}
                className="group flex h-full cursor-pointer flex-col rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-7 shadow-[0_8px_25px_rgba(11,31,75,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B1F4B]"
                onClick={() => setOpen(a)}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="w-fit rounded-md bg-[#EAF2F8] px-3 py-1 text-xs font-semibold text-[#0B1F4B]">
                    {a.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#667085]">
                    <HiOutlineClock size={14} /> {a.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-lg leading-snug font-semibold text-[#0B1F4B] transition-colors group-hover:text-[#0B1F4B]">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#667085] line-clamp-3">
                  {a.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[#D9E2EA] pt-4 text-xs font-semibold text-[#0B1F4B]">
                  <span>Read article</span>
                  <HiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {/* Article Reader Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setOpen(null)}
          />

          {/* Reader Modal Window */}
          <div
            className="relative z-10 max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-[#FFFFFF] p-6 sm:p-8 border border-[#D9E2EA] text-[#0B1F4B] shadow-2xl transition-all duration-300"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center bg-[#F5F9FC] text-[#667085] hover:bg-[#0B1F4B] hover:text-white transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              <HiXMark size={20} />
            </button>

            {/* Article Content Header */}
            <div className="flex flex-wrap items-center gap-3 mb-2 pr-8">
              <span className="w-fit rounded-md bg-[#EAF2F8] px-3 py-1 text-xs font-semibold text-[#0B1F4B]">
                {open.category}
              </span>
              <span className="text-xs text-[#667085]">
                {open.readTime} • {open.date}
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold leading-snug text-[#0B1F4B] mt-2">
              {open.title}
            </h2>

            <p className="text-[#667085] text-base mt-2 leading-relaxed">
              {open.excerpt}
            </p>

            {/* Article Body */}
            <div className="mt-6 space-y-5 text-sm sm:text-base leading-relaxed text-[#475467] border-t border-[#D9E2EA] pt-6">
              {open.sections.map((sec, idx) => {
                switch (sec.type) {
                  case "h2":
                    return (
                      <h2 key={idx} className="text-xl sm:text-2xl font-bold text-[#0B1F4B] pt-4 mt-6 mb-2 border-t border-[#D9E2EA]/60">
                        {sec.title}
                      </h2>
                    );
                  case "h3":
                    return (
                      <h3 key={idx} className="text-lg font-semibold text-[#0B1F4B] mt-4 mb-2">
                        {sec.title}
                      </h3>
                    );
                  case "paragraph":
                    return <p key={idx} className="leading-relaxed">{sec.content}</p>;
                  case "list":
                    return (
                      <ul key={idx} className="list-disc pl-5 space-y-2 my-4 text-[#475467]">
                        {sec.items?.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    );
                  case "numbered-list":
                    return (
                      <ol key={idx} className="list-decimal pl-5 space-y-2 my-4 text-[#475467]">
                        {sec.items?.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                        ))}
                      </ol>
                    );
                  case "quote":
                    return (
                      <blockquote key={idx} className="border-l-4 border-[#0B1F4B] bg-[#F5F9FC] p-4 my-4 rounded-r-lg italic text-[#0B1F4B] font-medium text-sm sm:text-base">
                        {sec.content}
                      </blockquote>
                    );
                  case "callout":
                    return (
                      <div key={idx} className="rounded-xl border border-[#D9E2EA] bg-[#F5F9FC] p-4 my-4 text-[#0B1F4B] font-mono text-xs sm:text-sm border-l-4 border-l-[#0B1F4B] whitespace-pre-line leading-relaxed">
                        {sec.content}
                      </div>
                    );
                  case "key-principle":
                    return (
                      <div key={idx} className="rounded-xl border border-[#0B1F4B]/20 bg-[#EAF2F8]/60 p-5 sm:p-6 my-6 border-l-4 border-l-[#0B1F4B]">
                        <span className="inline-block rounded-md bg-[#0B1F4B] px-2.5 py-0.5 text-xs font-bold text-white uppercase tracking-wider mb-2">
                          {sec.title || "Key Principle"}
                        </span>
                        <div className="text-[#0B1F4B] font-medium text-base leading-relaxed whitespace-pre-line">
                          {sec.content}
                        </div>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}