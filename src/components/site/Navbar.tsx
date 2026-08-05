import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/thoughts", label: "Thoughts from the Cloud" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const goContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.assign("/#contact");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-[0_1px_0_0_var(--border)]" : "bg-transparent"
      }`}
    >
      <nav className="shell flex h-18 items-center justify-between py-4">
        <Link
          to="/"
          className={`font-display text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-brand" : "text-background"
          }`}
        >
          c<span className="text-cherry">pie</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={`text-sm font-medium transition-colors hover:text-cherry ${
                  scrolled ? "text-muted-foreground" : "text-background/75"
                }`}
                activeProps={{ className: "font-semibold !text-cherry" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={goContact}
            className="hidden rounded-full bg-cherry px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-cherry/25 transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Book Consultation
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`rounded-full border p-2 md:hidden ${
              scrolled ? "border-border text-brand" : "border-background/25 text-background"
            }`}
          >
            {open ? <HiOutlineXMark size={20} /> : <HiOutlineBars3 size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass-strong overflow-hidden md:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={goContact}
                  className="mt-2 w-full rounded-full bg-cherry px-5 py-2.5 text-sm font-semibold text-accent-foreground"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}