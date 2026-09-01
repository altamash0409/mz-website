import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePhone, HiOutlineXMark } from "react-icons/hi2";

export function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user already closed the popup in the current session
    if (typeof window !== "undefined") {
      const isDismissed = sessionStorage.getItem("cp_consultation_popup_dismissed") === "true";
      if (isDismissed) return;
    }

    // Automatically trigger popup 2.5 seconds after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("cp_consultation_popup_dismissed", "true");
    }
  };

  // Close popup when user presses Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 select-none">
          {/* Dark backdrop matching site overlay style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#040D1F]/70 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* High-Impact Tech Card - Substantially Enlarged & Typography Focused */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-[92%] max-w-[420px] sm:max-w-2xl lg:max-w-[720px] max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-[#16357A] bg-gradient-to-br from-[#0D265C] via-[#0B1F4B] to-[#071633] p-7 sm:p-12 lg:p-16 shadow-[0_25px_70px_-15px_rgba(7,22,51,0.85)] text-white"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-headline"
          >
            {/* Vertical Tech Stripes Background Overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_12px)] [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Ambient Radial Soft Light */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-10 flex h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-xl text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              aria-label="Close popup"
            >
              <HiOutlineXMark className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
            </button>

            {/* Popup Content */}
            <div className="relative z-10 flex flex-col items-start text-left">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3.5 py-1 sm:px-4.5 sm:py-1.5 text-[11px] sm:text-xs lg:text-sm font-bold tracking-widest text-white uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                <span>NETSUITE EXPERTS</span>
              </div>

              {/* Main Headline - High impact stacked typography style matching reference image */}
              <h2
                id="popup-headline"
                className="mt-6 sm:mt-8 font-display tracking-tight text-white leading-[1.08] uppercase"
              >
                <span className="block font-light text-2xl sm:text-4xl lg:text-5xl text-white/90">
                  NEED HELP WITH
                </span>
                <span className="block font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white mt-1 sm:mt-2">
                  NETSUITE?
                </span>
              </h2>

              {/* Visual Highlight Badge */}
              <div className="mt-4 sm:mt-6 inline-flex items-center rounded-lg bg-white/10 px-4 py-1.5 sm:px-5 sm:py-2 border border-white/20 text-sm sm:text-lg lg:text-xl font-bold tracking-wide text-white uppercase">
                FREE CONSULTATION.
              </div>

              {/* Action Area */}
              <div className="mt-8 sm:mt-10 lg:mt-12 w-full">
                {/* Primary Call Now Button */}
                <a
                  href="tel:+919167843480"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-2xl font-bold text-[#0B1F4B] shadow-md transition-all duration-200 hover:bg-[#F5F9FC] hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  <HiOutlinePhone className="h-6 w-6 sm:h-7 sm:w-7 text-[#0B1F4B] shrink-0" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
