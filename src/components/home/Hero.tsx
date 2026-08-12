import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  HiOutlineGlobeAlt,
  HiOutlineCheckBadge,
  HiOutlineSquare3Stack3D,
  HiArrowRight,
} from "react-icons/hi2";

const TRUST = [
  { icon: HiOutlineCheckBadge, label: "NetSuite Consulting & Development" },
  { icon: HiOutlineGlobeAlt, label: "Mumbai, India · Serving Globally" },
  { icon: HiOutlineSquare3Stack3D, label: "Customization · Automation · Integrations" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-24 text-[#0B1F4B] lg:pt-72 lg:pb-32">
      {/* Background ambient glow - extremely soft */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] sm:h-[48rem] sm:w-[48rem] rounded-full bg-[#0B1F4B]/[0.025] blur-[150px]" />

      {/* Subtle grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0B1F4B08_1px,transparent_1px),linear-gradient(to_bottom,#0B1F4B08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />

      <div className="shell relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-[#D9E2EA] bg-white px-4 py-1.5 shadow-[0_2px_8px_rgba(11,31,75,0.04)] text-[10px] font-bold tracking-widest text-[#0B1F4B] uppercase sm:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" />
          <span>NETSUITE CONSULTING</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" />
          <span>AUTOMATION</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" />
          <span>INTEGRATIONS</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl font-display text-4xl font-bold leading-[1.12] text-[#0B1F4B] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
        >
          Transform Your Business{" "}
          <span className="block sm:inline">
            with{" "}
            <span className="relative inline-block text-[#0B1F4B] underline decoration-[#0B1F4B] underline-offset-8 decoration-3 sm:decoration-4">
              NetSuite.
            </span>
          </span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#667085] sm:text-lg md:text-xl font-normal"
        >
          We help businesses optimize, customize, automate, and integrate NetSuite — turning complex processes into scalable operations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          <a
            href="#contact"
            onClick={(e) => {
              const el = document.getElementById("contact");
              if (el && window.lenis) {
                e.preventDefault();
                window.lenis.scrollTo(el);
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B1F4B] px-8 py-3.5 text-base font-semibold text-white shadow-xs hover:bg-[#16357A] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Talk to a NetSuite Expert</span>
            <HiArrowRight className="text-lg" />
          </a>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-[#D9E2EA] bg-white px-7 py-3.5 text-base font-semibold text-[#0B1F4B] shadow-2xs hover:bg-[#F5F9FC] hover:border-[#0B1F4B] hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Our Services
          </Link>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 w-full max-w-4xl"
        >
          <div className="rounded-2xl border border-[#D9E2EA]/90 bg-white/90 backdrop-blur-xs p-4 sm:p-5 shadow-[0_4px_25px_rgba(11,31,75,0.05)]">
            <ul className="flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#D9E2EA]/60 text-xs sm:text-sm font-medium text-[#475467]">
              {TRUST.map((t, idx) => (
                <li
                  key={t.label}
                  className={`flex items-center gap-3 w-full sm:w-auto justify-center ${
                    idx !== 0 ? "pt-3 sm:pt-0 sm:pl-6" : ""
                  }`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF2F8] text-[#0B1F4B]">
                    <t.icon size={18} />
                  </div>
                  <span className="text-[#0B1F4B] font-semibold text-center sm:text-left">
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}