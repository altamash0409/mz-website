import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { HiOutlineClock } from "react-icons/hi2";
import { Reveal } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/thoughts")({
  head: () => ({
    meta: [
      { title: "Consider Pie" },
      {
        name: "description",
        content:
          "Field notes on ERP strategy, NetSuite administration, SuiteScript engineering and integration architecture from the cpie consulting team.",
      },
      { property: "og:title", content: "Thoughts from the Cloud — cpie" },
      {
        property: "og:description",
        content: "ERP strategy, NetSuite administration, SuiteScript and integration insights.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/thoughts" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/thoughts" }],
  }),
  component: ThoughtsPage,
});

const CATEGORIES = [
  "All",
  "ERP Strategy",
  "NetSuite Administration",
  "Engineering",
  "Integrations",
] as const;

const ARTICLES = [
  {
    title: "The real cost of a rushed NetSuite implementation",
    category: "ERP Strategy",
    date: "12 July 2026",
    read: "7 min read",
    excerpt:
      "Cutting discovery short saves four weeks and costs nine months. Here is where compressed timelines actually break.",
    body: [
      "Every ERP programme that lands badly shares one trait: discovery was treated as overhead rather than as the design phase it is. Teams jump to configuration because configuration looks like progress.",
      "The failure surfaces later — usually at UAT, when finance discovers the chart of accounts cannot support the segment reporting the board asked for, or when operations realise the item hierarchy does not model kits the way the warehouse picks them.",
      "Our rule is simple: no configuration begins until success metrics, process maps and the reporting model are signed off in writing. That takes two to three weeks. It routinely saves a two-quarter remediation project.",
    ],
  },
  {
    title: "Governance limits: writing SuiteScript that survives production",
    category: "Engineering",
    date: "28 June 2026",
    read: "9 min read",
    excerpt:
      "Usage units are the hard boundary of the SuiteCloud platform. A guide to Map/Reduce, yielding and defensive scripting.",
    body: [
      "Governance is not a warning — it is a hard stop. A scheduled script that dies at 10,000 units leaves half your records processed and no audit trail explaining why.",
      "Reach for Map/Reduce whenever the record set is unbounded. The stage boundaries give you free checkpointing, automatic rescheduling and per-key parallelism you would otherwise hand-roll badly.",
      "Then instrument everything. A custom execution-log record with start time, records processed, units remaining and error payload turns a 3 a.m. incident from archaeology into a two-minute read.",
    ],
  },
  {
    title: "Saved searches vs. SuiteAnalytics workbooks: choosing correctly",
    category: "NetSuite Administration",
    date: "14 June 2026",
    read: "6 min read",
    excerpt:
      "Both query the same data. They fail in very different ways at scale — pick based on consumer, not on habit.",
    body: [
      "Saved searches remain the workhorse: scriptable, schedulable, embeddable in portlets and available to every role. Workbooks give real joins, pivots and a far better analyst experience.",
      "Our heuristic: if a script, workflow or integration consumes the result, build a saved search. If a human explores the result, build a workbook.",
      "Whichever you pick, name it with an owner prefix and document the criteria. Undocumented searches accumulate faster than any other artifact in a NetSuite account.",
    ],
  },
  {
    title: "Designing idempotent integrations with RESTlets",
    category: "Integrations",
    date: "02 June 2026",
    read: "8 min read",
    excerpt:
      "Networks retry. If your endpoint is not idempotent, retries become duplicate sales orders and angry customers.",
    body: [
      "Every integration will replay a message eventually — a timeout on the caller side, a middleware retry policy, a manual reprocess. The endpoint must treat this as normal.",
      "Carry an external identifier on every inbound payload and store it in a dedicated external-ID field. On receipt, search first, upsert second. Never blind-create.",
      "Return structured responses with an explicit status, the NetSuite internal ID and a machine-readable error code. Callers cannot build sensible retry logic against a stack trace in a string.",
    ],
  },
  {
    title: "Multi-subsidiary rollouts without breaking consolidation",
    category: "ERP Strategy",
    date: "19 May 2026",
    read: "10 min read",
    excerpt:
      "OneWorld makes global consolidation possible, not automatic. Currency, elimination and calendar decisions come first.",
    body: [
      "The three decisions that determine whether consolidation works are made in week one: functional currency per subsidiary, elimination subsidiary structure and fiscal calendar alignment.",
      "Intercompany elimination fails most often because teams skip dedicated elimination accounts and try to reverse-engineer entries at period close.",
      "Roll out one subsidiary fully, close a period on it, and only then parallelise. A clean first close is the template every subsequent entity inherits.",
    ],
  },
  {
    title: "A practical permissions model for growing teams",
    category: "NetSuite Administration",
    date: "05 May 2026",
    read: "5 min read",
    excerpt:
      "Administrator access for convenience is the most common finding in every ERP audit we run. Here is the alternative.",
    body: [
      "Start from job function, not from person. Define roles that describe what work someone does, then assign people to roles — never the reverse.",
      "Use restricted roles for anything touching journal entries, bank records or vendor bank details, and enforce segregation of duties between vendor creation and payment approval.",
      "Review quarterly. Export role assignments to a saved search, diff against the HR roster and revoke anything orphaned. It takes an hour and closes the majority of audit findings.",
    ],
  },
];

function ThoughtsPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<(typeof ARTICLES)[number] | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active)),
    [active],
  );

  return (
    <main>
      <section className="relative overflow-hidden bg-brand-deep pt-36 pb-24 text-background">
        <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-sage/20 blur-[140px]" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-cherry" /> The cpie journal
            </span>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
              Thoughts from the <span className="text-gradient-cherry">Cloud</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-background/70">
              Field notes from live NetSuite engagements — architecture decisions, engineering
              patterns and the operational lessons behind them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === c
                    ? "border-brand bg-brand text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-sage hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <article
                key={a.title}
                className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-sage hover:shadow-xl"
                onClick={() => setOpen(a)}
              >
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand">
                  {a.category}
                </span>
                <h2 className="mt-4 text-lg leading-snug font-semibold text-foreground group-hover:text-brand">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <HiOutlineClock size={14} /> {a.read}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-h-[85vh] w-[92vw] max-w-2xl overflow-y-auto rounded-2xl p-5 sm:p-7">
          <DialogHeader>
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand">
              {open?.category}
            </span>
            <DialogTitle className="font-display pt-2 text-2xl leading-snug">
              {open?.title}
            </DialogTitle>
            <DialogDescription>
              {open?.read}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            {open?.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}