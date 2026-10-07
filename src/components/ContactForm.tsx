"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CircleAlert, CircleCheck, Loader2, Mail, Send } from "lucide-react";
import { serviceOptions } from "@/lib/services";
import { submitInquiry, type InquiryPayload } from "@/lib/contact";
import { site } from "@/lib/site";

type FieldName = keyof InquiryPayload;
type Errors = Partial<Record<FieldName, string>>;
type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "sent" }
  | { state: "mailto"; href: string }
  | { state: "error"; message: string };

const emptyForm: InquiryPayload = { name: "", email: "", company: "", phone: "", service: "", details: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_DETAILS = 4000;

function validate(v: InquiryPayload): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!v.email.trim()) errors.email = "Please enter your business email address.";
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = "Please enter a valid email address, like name@company.com.";
  if (v.phone.trim()) {
    const digits = v.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15 || /[^\d\s()+.\-x]/i.test(v.phone)) {
      errors.phone = "Please enter a valid phone number, or leave this field blank.";
    }
  }
  if (!v.details.trim()) errors.details = "Please tell us a little about your project or requirement.";
  else if (v.details.trim().length < 20) errors.details = "Please add a bit more detail (at least 20 characters).";
  else if (v.details.length > MAX_DETAILS) errors.details = `Please keep project details under ${MAX_DETAILS} characters.`;
  return errors;
}

const selectChevron = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#64748b" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
)}")`;

const fieldOrder: FieldName[] = ["name", "email", "company", "phone", "service", "details"];

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<InquiryPayload>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [honeypot, setHoneypot] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Preselect a service when linked with ?service=consulting|solutions|engineering
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("service");
    if (param && serviceOptions.some((o) => o.value === param)) {
      setValues((v) => ({ ...v, service: param }));
    }
  }, []);

  const id = (name: string) => `${uid}-${name}`;

  function update(name: FieldName, value: string) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  }

  function blur(name: FieldName) {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "submitting") return;

    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, details: true });
    const firstInvalid = fieldOrder.find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(firstInvalid))}`)?.focus();
      return;
    }

    // Silently drop submissions that filled the hidden honeypot field.
    if (honeypot) {
      setStatus({ state: "sent" });
      return;
    }

    setStatus({ state: "submitting" });
    const trimmed = Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, v.trim()]),
    ) as InquiryPayload;
    const result = await submitInquiry(trimmed);

    if (result.kind === "sent") {
      setStatus({ state: "sent" });
      setValues(emptyForm);
      setTouched({});
    } else if (result.kind === "mailto") {
      setStatus({ state: "mailto", href: result.href });
      window.location.href = result.href;
    } else {
      setStatus({ state: "error", message: result.message });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const inputBase =
    "block w-full rounded-lg border bg-white px-3.5 py-2.5 text-base text-ink-950 placeholder:text-slate-400 transition-colors focus:outline-none focus-visible:outline-none focus:ring-4";
  const inputClass = (name: FieldName) =>
    `${inputBase} ${
      errors[name] && touched[name]
        ? "border-red-500 focus:border-red-500 focus:ring-red-100"
        : "border-slate-300 hover:border-slate-400 focus:border-brand-600 focus:ring-brand-100"
    }`;

  const showError = (name: FieldName) => Boolean(errors[name] && touched[name]);
  const describedBy = (name: FieldName, hint?: string) =>
    [hint, showError(name) ? id(`${name}-error`) : null].filter(Boolean).join(" ") || undefined;

  const errorText = (name: FieldName) =>
    showError(name) ? (
      <p id={id(`${name}-error`)} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
        <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {errors[name]}
      </p>
    ) : null;

  const label = (name: FieldName, text: string, required = false) => (
    <label htmlFor={id(name)} className="mb-1.5 block text-sm font-semibold text-ink-950">
      {text}
      {required ? (
        <span className="ml-0.5 text-red-600" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="ml-1.5 text-xs font-normal text-slate-500">(optional)</span>
      )}
    </label>
  );

  if (status.state === "sent") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 focus:outline-none"
      >
        <CircleCheck className="h-8 w-8 text-emerald-600" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-semibold">Thank you — your inquiry has been sent.</h2>
        <p className="mt-2 leading-relaxed text-slate-700">
          We&rsquo;ll review the details and follow up to arrange an initial conversation. If your request is
          time-sensitive, you can also call {site.phone.display}.
        </p>
        <button type="button" className="btn-secondary mt-6" onClick={() => setStatus({ state: "idle" })}>
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-describedby={id("required-note")} className="space-y-5">
      <p id={id("required-note")} className="text-sm text-slate-500">
        Fields marked <span className="text-red-600">*</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label("name", "Name", true)}
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={showError("name") || undefined}
            aria-describedby={describedBy("name")}
            className={inputClass("name")}
          />
          {errorText("name")}
        </div>
        <div>
          {label("email", "Business Email", true)}
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={showError("email") || undefined}
            aria-describedby={describedBy("email")}
            className={inputClass("email")}
          />
          {errorText("email")}
        </div>
        <div>
          {label("company", "Company")}
          <input
            id={id("company")}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass("company")}
          />
        </div>
        <div>
          {label("phone", "Phone")}
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => blur("phone")}
            aria-invalid={showError("phone") || undefined}
            aria-describedby={describedBy("phone")}
            className={inputClass("phone")}
          />
          {errorText("phone")}
        </div>
      </div>

      <div>
        {label("service", "Service Needed")}
        <select
          id={id("service")}
          name="service"
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          className={`${inputClass("service")} appearance-none bg-[length:16px] bg-[position:right_0.9rem_center] bg-no-repeat pr-10`}
          style={{ backgroundImage: selectChevron }}
        >
          <option value="">Select a service…</option>
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        {label("details", "Project Details", true)}
        <p id={id("details-hint")} className="mb-2 text-sm text-slate-500">
          Briefly describe the requirement, the systems involved, and any timing considerations.
        </p>
        <textarea
          id={id("details")}
          name="details"
          rows={6}
          required
          maxLength={MAX_DETAILS}
          value={values.details}
          onChange={(e) => update("details", e.target.value)}
          onBlur={() => blur("details")}
          aria-invalid={showError("details") || undefined}
          aria-describedby={describedBy("details", id("details-hint"))}
          className={`${inputClass("details")} min-h-36 resize-y`}
        />
        {errorText("details")}
      </div>

      {/* Honeypot: hidden from people and assistive technology, often filled by bots. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input
          id={id("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {(status.state === "error" || status.state === "mailto") && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role={status.state === "error" ? "alert" : "status"}
          className={`flex gap-3 rounded-lg border p-4 text-[0.9375rem] leading-relaxed focus:outline-none ${
            status.state === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-brand-200 bg-brand-50 text-ink-900"
          }`}
        >
          {status.state === "error" ? (
            <>
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p>{status.message}</p>
            </>
          ) : (
            <>
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
              <p>
                Your email application should open with a pre-filled message to {site.email}. Review it and press
                send to deliver your inquiry. If nothing opened,{" "}
                <a href={status.href} className="font-semibold text-brand-700 underline underline-offset-2">
                  try again
                </a>{" "}
                or email us directly.
              </p>
            </>
          )}
        </div>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status.state === "submitting"}>
          {status.state === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
        <p className="text-xs leading-relaxed text-slate-500 sm:max-w-xs sm:text-right">
          Information you submit is used only to respond to your inquiry. See our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-brand-700">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
