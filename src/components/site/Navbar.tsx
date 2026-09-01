import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark, HiChevronRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/thoughts", label: "Thoughts from the Cloud" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  useEffect(() => setOpen(false), [pathname]);

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

        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="text-[#0B1F4B] transition-colors hover:text-[#16357A]"
                  activeProps={{ className: "!text-[#0B1F4B] font-semibold underline decoration-[#0B1F4B] underline-offset-8 decoration-2" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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


