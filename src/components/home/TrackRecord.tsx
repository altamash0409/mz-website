import { Reveal } from "@/components/site/Reveal";

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
                    15<span className="text-cherry">+</span>
                  </span>
                  <span className="text-left text-xs sm:text-sm font-semibold leading-tight text-[#3A524A] max-w-[90px]">
                    Projects<br />Delivered
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E3B33]">
                    10<span className="text-cherry">+</span>
                  </span>
                  <span className="text-left text-xs sm:text-sm font-semibold leading-tight text-[#3A524A] max-w-[90px]">
                    Happy<br />Clients
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E3B33]">
                    25<span className="text-cherry">+</span>
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
                    24x7
                  </span>
                  <span className="text-left text-xs sm:text-sm font-semibold leading-tight text-[#3A524A] max-w-[90px]">
                    Customer<br />Support
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E3B33]">
                    98<span className="text-cherry">%</span>
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
