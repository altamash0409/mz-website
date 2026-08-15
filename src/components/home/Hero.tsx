import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { HiArrowRight } from "react-icons/hi2";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FC] min-h-screen min-h-[100dvh] flex flex-col justify-center pt-24 sm:pt-32 pb-16 sm:pb-24 text-[#0B1F4B] lg:pt-36 lg:pb-28">
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
          className="mb-5 sm:mb-6 inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1.5 rounded-full border border-[#D9E2EA] bg-white px-3.5 sm:px-4.5 py-1.5 sm:py-2 shadow-[0_2px_8px_rgba(11,31,75,0.04)] text-[9px] min-[380px]:text-[10px] font-bold tracking-widest text-[#0B1F4B] uppercase sm:text-xs"
        >
          <span className="inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B] shrink-0" />
            <span>NETSUITE CONSULTING</span>
          </span>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B] shrink-0" />
            <span>AUTOMATION</span>
          </span>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B] shrink-0" />
            <span>INTEGRATIONS</span>
          </span>
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
      </div>
    </section>
  );
}