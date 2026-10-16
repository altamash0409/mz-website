import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { to: "/", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/thoughts", label: "Thoughts from the Cloud" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
    setAiDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAiDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setAiDropdownOpen(false);
    }, 150);
  };

  const goContact = () => {
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

  const isAiActive = pathname === "/suitescript-ai";

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-[#FFFFFF] border-b border-[#E5EBF0] text-[#0B1F4B]">
      <nav className="shell flex items-center justify-between py-3.5 sm:py-4">
        <Link
          to="/"
          className="inline-flex items-center shrink-0 transition-opacity hover:opacity-90"
        >
          <img
            src="/logo.png"
            alt="Consider Pie - NetSuite Consulting & Development Logo"
            fetchPriority="high"
            decoding="async"
            width={200}
            height={64}
            className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain drop-shadow-xs scale-170 sm:scale-190 md:scale-210 lg:scale-225 origin-left translate-y-2.5 sm:translate-y-3.5 md:translate-y-4"
          />
        </Link>

        <div className="hidden items-center gap-4 lg:gap-6 xl:gap-8 md:flex">
          <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="text-[#0B1F4B] transition-colors hover:text-[#16357A]"
                  activeProps={{
                    className:
                      "!text-[#0B1F4B] font-semibold underline decoration-[#0B1F4B] underline-offset-8 decoration-2",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* AI Tool with Hover Dropdown */}
            <li
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/suitescript-ai"
                className={`transition-colors hover:text-[#16357A] ${
                  isAiActive
                    ? "!text-[#0B1F4B] font-semibold underline decoration-[#0B1F4B] underline-offset-8 decoration-2"
                    : "text-[#0B1F4B]"
                }`}
              >
                AI Tool
              </Link>

              <AnimatePresence>
                {aiDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2 z-50 min-w-[210px]"
                  >
                    <div className="rounded-xl border border-[#E5EBF0] bg-[#FFFFFF] p-4 shadow-[0_12px_36px_rgba(11,31,75,0.08)]">
                      <div className="border-l-2 border-[#D9E2EA] pl-3.5 py-0.5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#667085]">
                          AI Tools
                        </div>
                        <div className="mt-2.5">
                          <a
                            href="https://ai.considerpie.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setAiDropdownOpen(false)}
                            className="block text-sm font-medium text-[#0B1F4B] transition-colors hover:text-[#16357A] whitespace-nowrap"
                          >
                            SuiteScript Converter
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <button
            onClick={goContact}
            className="rounded-lg bg-[#0B1F4B] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#16357A] cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2.5 text-[#0B1F4B] md:hidden cursor-pointer hover:bg-[#F5F9FC]"
          aria-label="Toggle navigation menu"
        >
          {open ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#FFFFFF] overflow-hidden md:hidden border-t border-[#E5EBF0]"
          >
            <ul className="shell flex flex-col gap-2 py-5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-base font-medium text-[#0B1F4B] hover:text-[#16357A] hover:bg-[#F5F9FC]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Mobile AI Tool section */}
              <li>
                <Link
                  to="/suitescript-ai"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-base font-medium text-[#0B1F4B] hover:text-[#16357A] hover:bg-[#F5F9FC]"
                >
                  AI Tool
                </Link>
                <div className="ml-6 pl-4 border-l border-[#D9E2EA] my-2 py-0.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#667085] mb-2">
                    AI Tools
                  </div>
                  <a
                    href="https://ai.considerpie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-[#0B1F4B] hover:text-[#16357A]"
                  >
                    SuiteScript Converter
                  </a>
                </div>
              </li>

              <li className="pt-2 border-t border-[#E5EBF0]">
                <button
                  onClick={goContact}
                  className="w-full rounded-lg bg-[#0B1F4B] px-6 py-3 text-base font-semibold text-white hover:bg-[#16357A]"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
