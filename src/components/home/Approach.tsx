import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  {
    title: "Discovery & Consultation.",
    body: "We uncover goals, pain points, and success metrics to define your project scope.",
  },
  {
    title: "Planning & Solution Design.",
    body: "Architecting your ideal NetSuite blueprint with tailored workflows and security roles.",
  },
  {
    title: "Development & Configuration.",
    body: "Building, customizing, and configuring custom SuiteScripts with precision.",
  },
  {
    title: "Testing & Deployment.",
    body: "Rigorous QA, sandboxed testing, and clean data migration before a confident cutover.",
  },
  {
    title: "Training & Go-Live.",
    body: "Empowering your team for day-one success with hands-on training and transition support.",
  },
  {
    title: "Support & Optimization.",
    body: "Continuous improvement, SLA-backed hypercare, and ongoing system administration.",
  },
];

export function Approach() {
  return (
    <section className="section-pad bg-[#FFFFFF]" id="approach">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex items-center rounded-md border border-[#D9E2EA] bg-[#F5F9FC] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
              Implementation method
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#0B1F4B] sm:text-4xl">
              Our Proven Implementation Approach
            </h2>
            <p className="mt-4 max-w-md text-base text-[#667085]">
              Follow our battle-tested 6-step framework to transform your NetSuite ERP operations.
            </p>
          </div>
        </Reveal>

        <ol className="divide-y divide-[#D9E2EA] border-y border-[#D9E2EA]">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <li className="group flex gap-6 py-7 transition-colors">
                <span className="font-display w-8 shrink-0 text-lg font-bold text-[#0B1F4B] tabular-nums">
                  {i + 1}.
                </span>
                <p className="text-base leading-relaxed text-[#667085]">
                  <span className="font-semibold text-[#0B1F4B]">{s.title}</span> {s.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}