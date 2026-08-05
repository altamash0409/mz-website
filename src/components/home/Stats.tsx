import { Reveal } from "@/components/site/Reveal";
import { HiOutlineBriefcase, HiOutlineLightBulb, HiOutlineHandThumbUp } from "react-icons/hi2";
import { FaAward } from "react-icons/fa6";

const STAT_CARDS = [
  {
    icon: HiOutlineBriefcase,
    title: "18+ Years Of Industry Experience",
  },
  {
    icon: FaAward,
    title: "Best Industry Experts",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Effective ERP Solutions",
  },
  {
    icon: HiOutlineHandThumbUp,
    title: "98% Customer Satisfaction",
  },
];

export function Stats() {
  return (
    <section className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24 pb-8">
      <div className="shell">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {STAT_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.08} className="h-full">
                <div className="relative flex h-full min-h-[200px] flex-col items-center justify-center rounded-2xl bg-card p-8 text-center shadow-xl shadow-black/8 border-b-4 border-cherry transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cherry text-white shadow-md shadow-cherry/25">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 max-w-[200px] text-base font-bold leading-snug text-foreground">
                    {card.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}