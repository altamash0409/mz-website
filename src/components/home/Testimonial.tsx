import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { FaQuoteLeft } from "react-icons/fa6";

export function Testimonial() {
  return (
    <section className="section-pad bg-[#FFFFFF]" id="testimonial">
      <div className="shell">
        <SectionHeading
          eyebrow="Client Testimonial"
          title="What Clients Say About Working With Us"
          subtitle="Building lasting partnerships through NetSuite expertise, responsiveness, and dependable support."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D9E2EA] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F5F9FC]/60 p-8 sm:p-12 md:p-14 shadow-[0_10px_35px_rgba(11,31,75,0.06)]">
              {/* Subtle background quote mark */}
              <FaQuoteLeft
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 right-4 sm:top-6 sm:right-8 h-20 w-20 sm:h-28 sm:w-28 text-[#0B1F4B]/[0.04]"
              />

              <div className="relative z-10">
                {/* Quote Icon Badge */}
                <div className="mb-6 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#EAF2F8] text-[#0B1F4B]">
                  <FaQuoteLeft className="h-5 w-5" />
                </div>

                {/* Testimonial Quote */}
                <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-medium leading-relaxed sm:leading-relaxed text-[#0B1F4B]">
                  &ldquo;Qazi was especially knowledgeable and quick to respond. I met with him over a video call, and his English was excellent. I intend to make Qazi my first call for NetSuite matters in the future. I would highly recommend him.&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#D9E2EA] flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B1F4B] text-white font-display text-sm font-bold tracking-wider"
                  >
                    GS
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#0B1F4B]">
                      Gabe Schrade
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#667085]">
                      Founder of Quantbook · New York (USA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
