import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "cpie:splash-seen";

export function SessionLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) {
      return;
    }

    setVisible(true);
    sessionStorage.setItem(KEY, "1");
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1600);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          id="initial-splash"
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F5F9FC]"
        >
          <div className="absolute h-72 w-72 rounded-full bg-[#0B1F4B]/[0.04] blur-[140px]" />
          <div className="relative text-center">
            <motion.img
              src="/logo.png"
              alt="cpie logo"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto h-36 sm:h-48 md:h-64 lg:h-72 w-auto max-w-[420px] sm:max-w-[620px] md:max-w-[800px] object-contain drop-shadow-2xl mb-6 scale-110"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="mx-auto mt-5 h-0.5 w-40 origin-left bg-[#0B1F4B]"
            />
            <p className="mt-4 text-xs tracking-[0.3em] text-[#667085] uppercase">
              NetSuite Excellence
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}