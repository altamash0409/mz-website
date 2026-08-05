import { Reveal } from "@/components/site/Reveal";
import { HiOutlineEnvelope, HiOutlineArrowRight } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";

const LINKEDIN_URL = "https://www.linkedin.com/in/considerpie-%CF%80-836384421/";
const EMAIL_ADDRESS = "nssupport.in@gmail.com";

export function Contact() {
  return (
    <section className="relative overflow-hidden section-pad bg-gradient-to-br from-[#EBF3FA] via-[#F4F9F7] to-[#E5F0FA]" id="contact">
      {/* Soft Flowing Background Shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Top Left Organic Flowing Wave */}
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-[320px] text-[#DCEAF8]/70 fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,0 L1440,120 C1100,240 750,80 400,220 C200,290 80,180 0,220 Z" />
        </svg>

        {/* Bottom Soft Curved Organic Layer */}
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 w-full h-[350px] text-[#D8E6F5]/60 fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,400 L1440,400 L1440,180 C1180,320 850,140 500,260 C250,340 100,220 0,300 Z" />
        </svg>

        {/* Soft Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-sage/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#DCEAF8]/40 blur-3xl" />
      </div>

      <div className="shell relative z-10">
        {/* Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Let&apos;s Transform Your Business with{" "}
            <span className="text-brand">NetSuite</span>
          </h2>
        </Reveal>

        {/* Content Layout */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column */}
          <Reveal>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-md">
              Book a free strategy call with our certified NetSuite consultants. We&apos;ll map your
              ERP roadmap and share a transparent proposal within 48 hours.
            </p>

            <div className="mt-8 space-y-4 max-w-md">
              {/* Email Link Card */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="group flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition-all duration-300 hover:border-brand hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cherry/10 text-cherry transition-colors group-hover:bg-cherry group-hover:text-accent-foreground">
                    <HiOutlineEnvelope size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                      EMAIL
                    </span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all group-hover:bg-brand group-hover:text-primary-foreground">
                  <HiOutlineArrowRight size={16} />
                </div>
              </a>

              {/* LinkedIn Link Card */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition-all duration-300 hover:border-brand hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cherry/10 text-cherry transition-colors group-hover:bg-cherry group-hover:text-accent-foreground">
                    <FaLinkedinIn size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                      LINKEDIN
                    </span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                      linkedin.com
                    </p>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all group-hover:bg-brand group-hover:text-primary-foreground">
                  <HiOutlineArrowRight size={16} />
                </div>
              </a>
            </div>
          </Reveal>

          {/* Right Column: Featured Consultation Card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-card p-8 sm:p-10 md:p-12 shadow-xl">
              {/* Subtle top right ambient background gradient */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-sage/15 blur-3xl" />

              {/* Pill Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3.5 py-1 text-[10px] font-bold tracking-widest text-muted-foreground uppercase shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-cherry animate-pulse" />
                READY WHEN YOU ARE
              </span>

              {/* Headline */}
              <h3 className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Book a free <span className="text-brand">NetSuite</span>
                <br />
                consultation
              </h3>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                No forms. Reach us directly via email, phone, or WhatsApp and a certified NetSuite
                expert will respond within one business day.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="group flex w-full items-center justify-between rounded-full bg-[#1E3B33] px-7 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand"
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
                  className="group flex w-full items-center justify-between rounded-full border border-border/80 bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-2xs transition-all duration-300 hover:bg-secondary/60"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <FaLinkedinIn size={18} className="text-cherry" /> Connect on LinkedIn
                  </span>
                  <HiOutlineArrowRight size={18} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Divider & Metrics */}
              <div className="my-8 border-t border-border/60" />

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-display text-lg font-bold text-brand">48h</p>
                  <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                    RESPONSE
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-brand">Free</p>
                  <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                    CONSULTATION
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-brand">NDA</p>
                  <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
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