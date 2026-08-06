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
    <footer className="border-t border-border bg-brand-deep text-background">
      <div className="shell grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-2xl font-bold">
            c<span className="text-cherry">pie</span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
            A specialist Oracle NetSuite consultancy. We implement, engineer and maintain ERP
            systems that scale — from SuiteScript 2.1 automation to enterprise-grade integrations.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.linkedin.com/in/considerpie-%CF%80-836384421/"
              target="_blank"
              rel="noreferrer"
              aria-label="cpie LinkedIn profile"
              className="rounded-full border border-background/20 p-2.5 text-background/80 transition-colors hover:border-cherry hover:text-cherry"
            >
              <FaLinkedinIn size={15} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-background/50 uppercase">
            Navigate
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-background/75">
            <li>
              <Link to="/" className="hover:text-cherry">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cherry">
                Services
              </Link>
            </li>
            <li>
              <Link to="/thoughts" className="hover:text-cherry">
                Thoughts from the Cloud
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-background/50 uppercase">
            Legal
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-background/75">
            <li>
              <button onClick={() => setLegal("privacy")} className="hover:text-cherry">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => setLegal("terms")} className="hover:text-cherry">
                Terms of Service
              </button>
            </li>
            <li>
              <a
                href="mailto:nssupport.in@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cherry"
              >
                nssupport.in@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="shell flex flex-col items-center justify-between gap-2 py-6 text-xs text-background/55 sm:flex-row">
          <p>© {new Date().getFullYear()} cpie. All rights reserved.</p>
          <p>Oracle NetSuite consulting · SuiteScript engineering · Global delivery</p>
        </div>
      </div>

      <Dialog open={legal !== null} onOpenChange={(o) => !o && setLegal(null)}>
        <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              {legal ? LEGAL[legal].title : ""}
            </DialogTitle>
            <DialogDescription>Last updated {new Date().getFullYear()}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            {legal
              ? LEGAL[legal].body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)
              : null}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}