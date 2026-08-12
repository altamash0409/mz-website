import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineArrowUp } from "react-icons/hi2";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={`https://wa.me/919167843480?text=${encodeURIComponent("Hi, I’m interested in your NetSuite consulting services. I’d like to discuss my requirements and explore how you can help.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[oklch(0.72_0.17_145)] p-3.5 text-white shadow-xl transition-transform hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

      <AnimatePresence>
        {show ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => {
              if (window.lenis) {
                window.lenis.scrollTo(0);
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-label="Back to top"
            className="fixed right-6 bottom-6 z-40 rounded-full bg-[#0B1F4B] p-3.5 text-white shadow-xl transition-all hover:bg-[#16357A] hover:scale-110 cursor-pointer"
          >
            <HiOutlineArrowUp size={20} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}