import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more about your project").max(1000),
});

const EMPTY = { name: "", email: "", phone: "", company: "", message: "" };

export function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setValues(EMPTY);
    toast.success("Thanks — we'll be in touch within one business day.");
  };

  const field = (
    name: keyof typeof EMPTY,
    label: string,
    type = "text",
    placeholder = "",
  ) => (
    <div>
      <label htmlFor={name} className="text-xs font-semibold tracking-wide text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={values[name]}
        onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
        className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage focus:ring-2 focus:ring-sage/25"
      />
      {errors[name] ? <p className="mt-1.5 text-xs text-destructive">{errors[name]}</p> : null}
    </div>
  );

  return (
    <section className="section-pad bg-secondary/50" id="contact">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-widest text-brand uppercase">
            Book a consultation
          </span>
          <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s scope your NetSuite project
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            Share a few details and a senior consultant — not a sales rep — will reply within one
            business day with an honest read on scope, effort and timeline.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="rounded-xl bg-card p-3 text-brand shadow-sm">
                <HiOutlineEnvelope size={20} />
              </span>
              <a href="mailto:hello@cpie.com" className="text-sm font-medium text-foreground hover:text-brand">
                hello@cpie.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-xl bg-card p-3 text-brand shadow-sm">
                <HiOutlinePhone size={20} />
              </span>
              <a href="tel:+919000000000" className="text-sm font-medium text-foreground hover:text-brand">
                +91 90000 00000
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-xl bg-card p-3 text-brand shadow-sm">
                <FaWhatsapp size={20} />
              </span>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-foreground hover:text-brand"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-xl bg-card p-3 text-brand shadow-sm">
                <HiOutlineMapPin size={20} />
              </span>
              <span className="text-sm font-medium text-foreground">
                Global delivery · IST, EST & GMT coverage
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {field("name", "Full name", "text", "Jane Doe")}
              {field("email", "Work email", "email", "jane@company.com")}
              {field("phone", "Phone", "tel", "+1 555 000 0000")}
              {field("company", "Company", "text", "Acme Inc.")}
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-xs font-semibold tracking-wide text-foreground">
                How can we help?
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                placeholder="Tell us about your current ERP setup and what you're trying to achieve."
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage focus:ring-2 focus:ring-sage/25"
              />
              {errors["message"] ? (
                <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-cherry px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-cherry/20 transition-transform hover:scale-[1.01]"
            >
              Request my consultation
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}