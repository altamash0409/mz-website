import { Reveal } from "@/components/site/Reveal";
import { HiOutlineEnvelope, HiOutlineArrowRight } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";

const LINKEDIN_URL = "https://www.linkedin.com/in/considerpie-%CF%80-836384421/";
const EMAIL_ADDRESS = "nssupport.in@gmail.com";

export function Contact() {
  return (
    <section className="relative overflow-hidden section-pad bg-[#FFFFFF]" id="contact">
      {/* Top Left Corner Only Soft Background Wave */}
      <div className="pointer-events-none absolute top-0 left-0 w-[420px] sm:w-[540px] h-64 overflow-hidden z-0">
        <svg
          viewBox="0 0 540 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#0B1F4B]/[0.03] fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L540,0 C400,90 280,240 0,300 Z" />
        </svg>
      </div>

      <div className="shell relative z-10">
        {/* Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F4B]">
            Let&apos;s Transform Your Business with{" "}
            <span className="text-[#0B1F4B]">NetSuite</span>
          </h2>
        </Reveal>

        {/* Content Layout */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column */}
          <Reveal>
            <p className="text-sm sm:text-base leading-relaxed text-[#667085] font-medium max-w-md">
              Book a free strategy call with our certified NetSuite consultants. We&apos;ll map your
              ERP roadmap and share a transparent proposal within 48 hours.
            </p>

            <div className="mt-8 space-y-4 max-w-md">
              {/* Email Link Card */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-4 shadow-[0_8px_25px_rgba(11,31,75,0.06)] transition-all duration-300 hover:border-[#0B1F4B]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF2F8] text-[#0B1F4B] transition-colors group-hover:bg-[#0B1F4B] group-hover:text-white">
                    <HiOutlineEnvelope size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#667085] uppercase">
                      EMAIL
                    </span>
                    <p className="text-sm font-semibold text-[#0B1F4B] transition-colors">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F9FC] text-[#0B1F4B] transition-all group-hover:bg-[#0B1F4B] group-hover:text-white">
                  <HiOutlineArrowRight size={16} />
                </div>
              </a>

              {/* LinkedIn Link Card */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-[#D9E2EA] bg-[#FFFFFF] p-4 shadow-[0_8px_25px_rgba(11,31,75,0.06)] transition-all duration-300 hover:border-[#0B1F4B]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF2F8] text-[#0B1F4B] transition-colors group-hover:bg-[#0B1F4B] group-hover:text-white">
                    <FaLinkedinIn size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#667085] uppercase">
                      LINKEDIN
                    </span>
                    <p className="text-sm font-semibold text-[#0B1F4B] transition-colors">
                      linkedin.com
                    </p>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F9FC] text-[#0B1F4B] transition-all group-hover:bg-[#0B1F4B] group-hover:text-white">
                  <HiOutlineArrowRight size={16} />
                </div>
              </a>
            </div>
          </Reveal>

          {/* Right Column: Featured Consultation Card (Navy Contrast Section) */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-[#0B1F4B] bg-[#0B1F4B] p-6 sm:p-8 md:p-12 shadow-2xl text-white">
              {/* Subtle top right ambient background gradient */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/[0.05] blur-3xl" />

              {/* Pill Badge */}
              <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                READY WHEN YOU ARE
              </span>

              {/* Headline */}
              <h3 className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Book a free <span className="text-white">NetSuite</span>
                <br />
                consultation
              </h3>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#D8E1EC]">
                No forms. Reach us directly via email, phone, or WhatsApp and a certified NetSuite
                expert will respond within one business day.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-between rounded-lg bg-[#FFFFFF] px-7 py-3.5 text-sm font-semibold text-[#0B1F4B] shadow-xs transition-all duration-300 hover:bg-[#F5F9FC]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <HiOutlineEnvelope size={18} /> Email Our Team
                  </span>
                  <HiOutlineArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-between rounded-lg border border-white/30 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <FaLinkedinIn size={18} className="text-white" /> Connect on LinkedIn
                  </span>
                  <HiOutlineArrowRight size={18} className="text-[#D8E1EC] transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Divider & Metrics */}
              <div className="my-8 border-t border-white/15" />

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-display text-lg font-bold text-white">48h</p>
                  <p className="text-[10px] font-bold tracking-wider text-[#D8E1EC] uppercase">
                    RESPONSE
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Free</p>
                  <p className="text-[10px] font-bold tracking-wider text-[#D8E1EC] uppercase">
                    CONSULTATION
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">NDA</p>
                  <p className="text-[10px] font-bold tracking-wider text-[#D8E1EC] uppercase">
                    ON REQUEST
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}