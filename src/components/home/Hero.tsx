import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const TRUST = [
  { icon: HiOutlineBuildingOffice2, label: "Enterprise Expertise" },
  { icon: HiOutlineShieldCheck, label: "ISO Standards" },
  { icon: HiOutlineGlobeAlt, label: "Global Delivery" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FC] pt-56 sm:pt-64 pb-32 text-[#0B1F4B] lg:pt-72 lg:pb-40">
      {/* Background ambient glow - extremely soft */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-[#0B1F4B]/[0.02] blur-[150px]" />

      <div className="shell relative flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-3xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl tracking-tight text-[#0B1F4B]"
        >
          Oracle NetSuite Expert Partner by{" "}
          <span className="text-[#0B1F4B] underline decoration-[#0B1F4B] underline-offset-8">
            Consider Pie
          </span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-[#667085] sm:text-lg md:text-xl"
        >
          <span className="font-bold text-[#0B1F4B]">Consider Pie</span> is a leading Oracle NetSuite partner specializing in enterprise ERP implementation, SuiteScript 2.1 engineering, and workflow automation. With deep operational expertise, we guarantee tax, financial, and process compliance to boost your company's growth.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
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
            className="rounded-lg bg-[#0B1F4B] px-8 py-3.5 text-base font-semibold text-white shadow-xs transition-all hover:bg-[#16357A]"
          >
            Let's talk about your project
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-medium text-[#667085]"
        >
          {TRUST.map((t) => (
            <li key={t.label} className="inline-flex items-center gap-2">
              <t.icon size={18} className="text-[#0B1F4B]" />
              {t.label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}