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
      {suffix ? <span className="text-cherry">{suffix}</span> : null}
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
      <span className="text-cherry">{separator}</span>
      {c2}
    </span>
  );
}

export function TrackRecord() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="shell">
        <Reveal>
          <div className="rounded-[28px] md:rounded-[36px] bg-[#F2F7F4] border border-[#E0ECE5] px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 shadow-sm text-center">
            {/* Heading */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-cherry font-black text-xl italic tracking-tighter select-none">
                ///
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E3B33]">
                Our Track Record is your{" "}
                <span className="text-brand">Strength</span>
              </h2>
            </div>

            {/* Stats Container */}
            <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
              {/* Row 1: 3 Items */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E3B33]">
                    <CounterNumber value={15} suffix="+" />
                  </span>
                  <span className="text-left text-xs sm:text-sm font-semibold leading-tight text-[#3A524A] max-w-[90px]">
                    Projects<br />Delivered
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E3B33]">
                    <CounterNumber value={10} suffix="+" />
                  </span>
                  <span className="text-left text-xs sm:text-sm font-semibold leading-tight text-[#3A524A] max-w-[90px]">
                    Happy<br />Clients
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E3B33]">
                    <CounterNumber value={25} suffix="+" />
                  </span>
                  <span className="text-left text-xs sm:text-sm font-semibold leading-tight text-[#3A524A] max-w-[100px]">
                    Automations<br />Created
                  </span>
                </div>
              </div>

              {/* Row 2: 2 Items Centered */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E3B33]">
                    <CounterStaticText val1={24} val2={7} separator="x" />
                  </span>
                  <span className="text-left text-xs sm:text-sm font-semibold leading-tight text-[#3A524A] max-w-[90px]">
                    Customer<br />Support
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E3B33]">
                    <CounterNumber value={98} suffix="%" />
                  </span>
                  <span className="text-left text-xs sm:text-sm font-semibold leading-tight text-[#3A524A] max-w-[90px]">
                    Client<br />Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
