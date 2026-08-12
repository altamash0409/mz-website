import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CASE_STUDIES } from "@/data/case-studies";
import { HiOutlineArrowRight } from "react-icons/hi2";

export function FeaturedCaseStudies() {
  return (
    <section className="section-pad bg-[#F5F9FC]" id="case-studies">
      <div className="shell">
        <SectionHeading
          eyebrow="Case Studies"
          title="Featured NetSuite Engineering Projects"
          subtitle="Explore real-world NetSuite automation, customization, and financial process engineering built for enterprise scale."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((cs, i) => {
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

                    <h3 className="mt-5 font-display text-xl font-bold leading-snug text-[#0B1F4B]">
                      {cs.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                      {cs.shortDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {cs.techTags.slice(0, 4).map((tag) => (
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

        <div className="mt-12 text-center">
          <Reveal>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0B1F4B] px-8 py-3.5 text-base font-semibold text-white shadow-xs transition-all hover:bg-[#16357A] hover:-translate-y-0.5"
            >
              <span>View All Case Studies</span>
              <HiOutlineArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
