import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "cpie:splash-seen";

export function SessionLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem(KEY);
    }
    return false;
  });

  useEffect(() => {
    if (!visible) return;

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
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep"
        >
          <div className="absolute h-72 w-72 rounded-full bg-sage/25 blur-[140px]" />
          <div className="relative text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl font-bold text-background sm:text-5xl"
            >
              c<span className="text-cherry">pie</span>
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="mx-auto mt-5 h-0.5 w-40 origin-left bg-cherry"
            />
            <p className="mt-4 text-xs tracking-[0.3em] text-background/50 uppercase">
              NetSuite Excellence
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}