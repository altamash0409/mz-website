import { Link, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { HiOutlineArrowRight } from "react-icons/hi2";

interface CaseStudyCtaProps {
  heading?: string;
  subtext?: string;
}

export function CaseStudyCta({
  heading = "Have a Complex NetSuite Challenge?",
  subtext = "From automation and customization to integrations and financial process optimization, we help businesses build scalable NetSuite solutions around their operational requirements.",
}: CaseStudyCtaProps) {
  const navigate = useNavigate();

  const handleContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate({ to: "/", hash: "contact" });
    }
  };

  return (
    <section className="section-pad bg-[#FFFFFF] border-t border-[#D9E2EA]">
      <div className="shell">
        <Reveal className="mx-auto max-w-4xl rounded-2xl border border-[#0B1F4B] bg-[#0B1F4B] p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/[0.05] blur-3xl" />

          <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            LET'S BUILD TOGETHER
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
            {heading}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#D8E1EC]">
            {subtext}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleContact}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#0B1F4B] shadow-xs transition-all hover:bg-[#F5F9FC] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <HiOutlineArrowRight size={18} />
            </button>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-transparent px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
