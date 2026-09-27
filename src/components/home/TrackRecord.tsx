import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";

function CounterNumber({
  value,
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(easeProgress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(value);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {current}
      {suffix ? <span className="text-[#0B1F4B]">{suffix}</span> : null}
    </span>
  );
}

function CounterStaticText({
  val1,
  val2,
  separator = "x",
}: {
  val1: number;
  val2: number;
  separator?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / 1600, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setC1(Math.floor(easeProgress * val1));
      setC2(Math.floor(easeProgress * val2));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setC1(val1);
        setC2(val2);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, val1, val2]);

  return (
    <span ref={ref}>
      {c1}
      <span className="text-[#0B1F4B]">{separator}</span>
      {c2}
    </span>
  );
}

export function TrackRecord() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-[#F5F8FC]">
      {/* World Map Background Image spanning full section edge-to-edge */}
      <div className="absolute inset-0 z-0">
        <img
          src="/world-map-bg.jpg"
          alt="World Map Global Reach Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlay gradient for high text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F8FC]/50 via-white/40 to-[#F5F8FC]/60" />
      </div>

      <div className="shell relative z-10 text-center">
        <Reveal>
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E2EA] bg-[#FFFFFF]/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold tracking-widest text-[#0B1F4B] uppercase shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4B]" />
              OUR GLOBAL REACH
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="mt-6 font-display text-2xl min-[480px]:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F4B] max-w-5xl mx-auto leading-tight sm:whitespace-nowrap">
            Supporting Businesses, Wherever You Are
          </h2>

          {/* Description Paragraph */}
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-[#0B1F4B] font-semibold">
            Helping businesses worldwide unlock the full potential of NetSuite with solutions built
            around their unique needs. From implementation to optimization, we turn complex business
            processes into smarter, scalable solutions.
          </p>

          {/* Clean Stats Grid - 4 Stats Sitting directly over the map graphic */}
          <div className="mt-14 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* Stat 1: 15+ Projects Delivered */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1F4B]">
                <CounterNumber value={15} suffix="+" />
              </span>
              <span className="mt-3 text-sm sm:text-base font-bold text-[#0B1F4B] leading-snug">
                Projects Delivered
              </span>
            </div>

            {/* Stat 2: 10+ Happy Clients */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1F4B]">
                <CounterNumber value={10} suffix="+" />
              </span>
              <span className="mt-3 text-sm sm:text-base font-bold text-[#0B1F4B] leading-snug">
                Happy Clients
              </span>
            </div>

            {/* Stat 3: 24x7 Customer Support */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1F4B]">
                <CounterStaticText val1={24} val2={7} separator="x" />
              </span>
              <span className="mt-3 text-sm sm:text-base font-bold text-[#0B1F4B] leading-snug">
                Customer Support
              </span>
            </div>

            {/* Stat 4: 98% Client Retention */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1F4B]">
                <CounterNumber value={98} suffix="%" />
              </span>
              <span className="mt-3 text-sm sm:text-base font-bold text-[#0B1F4B] leading-snug">
                Client Retention
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
