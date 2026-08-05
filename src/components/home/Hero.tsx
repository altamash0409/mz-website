import { motion } from "framer-motion";
import {
  HiOutlineRocketLaunch,
  HiOutlineCodeBracketSquare,
  HiOutlineBolt,
  HiOutlinePresentationChartLine,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const CARDS = [
  {
    icon: HiOutlineRocketLaunch,
    title: "NetSuite Implementation",
    body: "Blueprint to go-live, without the guesswork.",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: "SuiteScript Development",
    body: "Governance-safe SuiteScript 2.1 engineering.",
  },
  {
    icon: HiOutlineBolt,
    title: "Workflow Automation",
    body: "SuiteFlow approvals that remove manual steps.",
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: "ERP Consulting",
    body: "Advisory grounded in real finance operations.",
  },
];

const TRUST = [
  { icon: HiOutlineBuildingOffice2, label: "Enterprise Expertise" },
  { icon: HiOutlineShieldCheck, label: "ISO Standards" },
  { icon: HiOutlineGlobeAlt, label: "Global Delivery" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-deep pt-32 pb-24 text-background lg:pt-40 lg:pb-32">
      <div className="pointer-events-none absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-sage/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cherry/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-brand/40 blur-[120px]" />

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cherry opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cherry" />
            </span>
            Certified NetSuite Experts
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-6xl"
          >
            Accelerate Business Growth with{" "}
            <span className="text-gradient-cherry">cpie</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-background/70 sm:text-lg"
          >
            Helping enterprises streamline operations, automate workflows, and maximize ROI through
            Oracle NetSuite consulting, development, and implementation services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="rounded-full bg-cherry px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-xl shadow-cherry/25 transition-transform hover:scale-[1.03]"
            >
              Book a Consultation
            </a>
            <a
              href="#approach"
              className="rounded-full border border-background/25 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              See our approach
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-background/60"
          >
            {TRUST.map((t) => (
              <li key={t.label} className="inline-flex items-center gap-2">
                <t.icon size={16} className="text-sage" />
                {t.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              className={`rounded-2xl border border-background/15 bg-background/8 p-6 backdrop-blur-md transition-transform hover:-translate-y-1.5 ${
                i % 2 === 1 ? "sm:translate-y-8" : ""
              }`}
            >
              <c.icon size={24} className="text-cherry" />
              <h3 className="mt-4 text-sm font-semibold text-background">{c.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-background/60">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}