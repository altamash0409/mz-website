import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const LEGAL = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "cpie collects only the information you voluntarily provide through our consultation forms — name, email, phone, company and message content.",
      "We use this data solely to respond to your enquiry and scope potential NetSuite engagements. We never sell or rent personal data to third parties.",
      "Client ERP data accessed during implementation engagements is governed by a signed NDA and handled under least-privilege access controls inside your own NetSuite account.",
      "You may request deletion of your enquiry data at any time by writing to nssupport.in@gmail.com.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "All engagements are governed by a mutually executed Statement of Work defining scope, deliverables, timelines and commercials.",
      "Custom SuiteScript, SuiteFlow and integration artifacts developed under a paid engagement are assigned to the client upon final payment.",
      "Support SLAs apply only to environments under an active managed-services retainer.",
      "cpie is an independent consultancy. Oracle and NetSuite are trademarks of Oracle Corporation.",
    ],
  },
} as const;

export function Footer() {
  const [legal, setLegal] = useState<keyof typeof LEGAL | null>(null);

  return (
    <footer className="border-t border-white/12 bg-[#071633] text-white pt-20 sm:pt-24 pb-8">
      <div className="shell grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr] items-start">
        {/* LEFT COLUMN: Logo, Description, LinkedIn */}
        <div className="flex flex-col items-start">
          <Link to="/" className="inline-block bg-white/95 px-3 py-2 rounded-xl shadow-md border border-white/20 transition-transform hover:scale-[1.02]">
            <img
              src="/logo.png"
              alt="Consider Pie / cpie logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-6 max-w-[420px] text-sm leading-[1.6] text-[#AAB7C7]">
            A specialist Oracle NetSuite consultancy focused on implementation, development, automation, and scalable ERP solutions.
          </p>
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/considerpie-%CF%80-836384421/"
              target="_blank"
              rel="noreferrer"
              aria-label="Consider Pie LinkedIn profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#D8E1EC] transition-colors duration-200 hover:border-white hover:text-white"
            >
              <FaLinkedinIn size={15} />
            </a>
          </div>
        </div>

        {/* CENTER COLUMN: NAVIGATE */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-[#AAB7C7] uppercase mb-6">
            NAVIGATE
          </h4>
          <ul className="space-y-4 text-sm font-medium text-[#D8E1EC]">
            <li>
              <Link to="/" className="transition-colors duration-200 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors duration-200 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/thoughts" className="transition-colors duration-200 hover:text-white">
                Thoughts from the Cloud
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN: LEGAL */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-[#AAB7C7] uppercase mb-6">
            LEGAL
          </h4>
          <ul className="space-y-4 text-sm font-medium text-[#D8E1EC]">
            <li>
              <button
                onClick={() => setLegal("privacy")}
                className="transition-colors duration-200 hover:text-white text-left cursor-pointer"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => setLegal("terms")}
                className="transition-colors duration-200 hover:text-white text-left cursor-pointer"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <a
                href="mailto:nssupport.in@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="shell mt-16">
        <div className="border-t border-white/12" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-[#AAB7C7]">
          <p className="text-white font-medium">© 2026 Consider Pie (cpie). All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#D8E1EC]">
            <button
              onClick={() => setLegal("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setLegal("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* LEGAL MODAL */}
      <Dialog open={legal !== null} onOpenChange={(o) => !o && setLegal(null)}>
        <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-lg bg-[#071633] border-white/12 text-white">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-white">
              {legal ? LEGAL[legal].title : ""}
            </DialogTitle>
            <DialogDescription className="text-[#AAB7C7]">
              Last updated {new Date().getFullYear()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed text-[#AAB7C7]">
            {legal
              ? LEGAL[legal].body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)
              : null}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}