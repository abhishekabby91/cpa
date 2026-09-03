"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { actions, forms } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-brand border border-line bg-surface px-3.5 py-2.5 text-[0.9375rem] text-ink " +
  "placeholder:text-ink-muted/60 transition-colors " +
  "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 " +
  "aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/20";

const labelClass = "mb-1.5 block text-sm font-medium text-primary";

const selectChevron = {
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23516176' stroke-width='2' stroke-linecap='round'><path d='M4 6l4 4 4-4'/></svg>\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.85rem center",
  backgroundSize: "1rem",
} as const;

function Field({
  id,
  label,
  required,
  error,
  children,
  hint,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <span className="ml-0.5 text-accent" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-ink-muted">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Contact / consultation request form.
 *
 * Validation runs on the client for responsiveness and again on the server in
 * `/api/contact` — the server check is the one that counts. A hidden honeypot
 * field catches the most common bot submissions without a CAPTCHA; add a real
 * CAPTCHA or rate limiter before handling high volume.
 */
export function ContactForm({
  defaultService,
  compact = false,
}: {
  defaultService?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const nextErrors: Record<string, string> = {};
    if (!data.firstName?.trim()) nextErrors.firstName = "Please enter your first name.";
    if (!data.lastName?.trim()) nextErrors.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email ?? ""))
      nextErrors.email = "Please enter a valid email address.";
    if (data.preferredContact === "phone" && !data.phone?.trim())
      nextErrors.phone = "Please add a phone number so we can reach you.";
    if (!data.message?.trim() || data.message.trim().length < 10)
      nextErrors.message = "A sentence or two about your situation helps us prepare.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>(
        `[name="${Object.keys(nextErrors)[0]}"]`,
      );
      firstInvalid?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(result?.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(result?.message ?? "");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(forms.contact.errorFallback);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-brand-lg border border-accent/30 bg-accent/5 p-8 text-center"
      >
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-fg">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <h3 className="text-xl">{forms.contact.successTitle}</h3>
        <p className="mx-auto mt-2.5 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted">
          {message}
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          {forms.contact.successAgain}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from users and assistive tech, attractive to bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company-website">Do not fill this in</label>
        <input
          id="company-website"
          type="text"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First name" required error={errors.firstName}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            className={fieldClass}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
        </Field>
        <Field id="lastName" label="Last name" required error={errors.lastName}>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            className={fieldClass}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
      </div>

      {!compact ? (
        <Field id="company" label="Company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </Field>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="service" label={forms.contact.serviceLabel}>
          <select
            id="service"
            name="service"
            defaultValue={defaultService ?? ""}
            className={cn(fieldClass, "appearance-none pr-9")}
            style={selectChevron}
          >
            <option value="">{forms.contact.serviceUnsure}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="other">{forms.contact.serviceOther}</option>
          </select>
        </Field>

        <Field id="preferredContact" label={forms.contact.preferredContactLabel}>
          <select
            id="preferredContact"
            name="preferredContact"
            defaultValue="email"
            className={cn(fieldClass, "appearance-none pr-9")}
            style={selectChevron}
          >
            <option value="email">Email</option>
            <option value="phone">Phone call</option>
            <option value="either">Either is fine</option>
          </select>
        </Field>
      </div>

      <Field
        id="message"
        label={forms.contact.messageLabel}
        required
        error={errors.message}
        hint={forms.contact.messageHint}
      >
        <textarea
          id="message"
          name="message"
          rows={compact ? 4 : 5}
          className={cn(fieldClass, "resize-y")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
        />
      </Field>

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-brand border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {message}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? actions.sending : actions.sendMessage}
        </Button>
        <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
          <Icon name="lock" className="mt-px h-3.5 w-3.5 shrink-0" />
          <span>{forms.contact.privacyNote}</span>
        </p>
      </div>
    </form>
  );
}
