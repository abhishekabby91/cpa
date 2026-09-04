import { NextResponse } from "next/server";
import { getService } from "@/content/services";

/**
 * Contact form endpoint.
 *
 * ⚠️  BEFORE LAUNCH: this handler validates the submission and forwards it to
 * `CONTACT_FORM_WEBHOOK_URL` if one is configured. Wire it to your CRM, help
 * desk, or transactional email provider, and add a rate limiter or CAPTCHA if
 * you see abuse. Never log or store sensitive taxpayer data here — the form
 * copy explicitly asks clients not to send it.
 */

export const runtime = "nodejs";

interface Submission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  preferredContact: string;
  message: string;
  companyWebsite: string;
}

const MAX_LENGTHS: Record<keyof Submission, number> = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  company: 200,
  service: 100,
  preferredContact: 20,
  message: 5000,
  companyWebsite: 200,
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Control characters, which could otherwise forge lines in downstream logs or
 * email headers. Tabs and newlines inside the message body are normalized to
 * spaces rather than preserved.
 */
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;

/** Coerces a field to a bounded, control-character-free string. */
function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL_CHARS, " ").trim().slice(0, max);
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;

  const submission: Submission = {
    firstName: clean(body.firstName, MAX_LENGTHS.firstName),
    lastName: clean(body.lastName, MAX_LENGTHS.lastName),
    email: clean(body.email, MAX_LENGTHS.email),
    phone: clean(body.phone, MAX_LENGTHS.phone),
    company: clean(body.company, MAX_LENGTHS.company),
    service: clean(body.service, MAX_LENGTHS.service),
    preferredContact: clean(body.preferredContact, MAX_LENGTHS.preferredContact),
    message: clean(body.message, MAX_LENGTHS.message),
    companyWebsite: clean(body.companyWebsite, MAX_LENGTHS.companyWebsite),
  };

  // Honeypot: a filled hidden field means a bot. Respond as though it worked so
  // the bot doesn't learn to adapt, but discard the submission.
  if (submission.companyWebsite) {
    return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch." });
  }

  const invalidFields: string[] = [];
  if (!submission.firstName) invalidFields.push("firstName");
  if (!submission.lastName) invalidFields.push("lastName");
  if (!EMAIL.test(submission.email)) invalidFields.push("email");
  if (submission.message.length < 10) invalidFields.push("message");

  if (invalidFields.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        fields: invalidFields,
      },
      { status: 422 },
    );
  }

  const webhook = process.env.CONTACT_FORM_WEBHOOK_URL;
  if (webhook) {
    try {
      const { companyWebsite: _honeypot, ...forwarded } = submission;
      const fullName = `${submission.firstName} ${submission.lastName}`.trim();
      const serviceName = submission.service
        ? (getService(submission.service)?.name ?? submission.service)
        : "Not specified";

      /**
       * Form services (Web3Forms, FormSubmit, Formspree and similar) authenticate
       * with an access key in the payload and render `name`/`email`/`subject`/
       * `message` as the body of the notification email. Sending those alongside
       * the raw fields means the firm gets a readable message whichever service
       * is wired up, and a plain webhook still receives everything.
       *
       * The key stays server-side because the browser posts to this route, not
       * to the form service — which also keeps the honeypot and the validation
       * above in front of it.
       */
      const accessKey = process.env.CONTACT_FORM_ACCESS_KEY;
      const payload = {
        // Raw fields first: the composed values below must win, or the
        // notification email loses the phone, company and service details.
        ...forwarded,
        ...(accessKey ? { access_key: accessKey } : {}),
        name: fullName,
        email: submission.email,
        subject: `Website inquiry from ${fullName}`,
        message: [
          submission.message,
          "",
          `Service needed: ${serviceName}`,
          `Phone: ${submission.phone || "Not provided"}`,
          `Company: ${submission.company || "Not provided"}`,
          `Preferred contact: ${submission.preferredContact || "Not specified"}`,
        ].join("\n"),
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      // Web3Forms answers 200 with {success:false} on a bad key, so check the body.
      if (response.ok) {
        const result = await response.json().catch(() => null);
        if (result && result.success === false) {
          throw new Error(`Form service rejected the submission: ${result.message ?? "unknown reason"}`);
        }
      }
      if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
    } catch (error) {
      // Logged without the submission body, so contact details never reach
      // application logs.
      console.error("[contact] webhook delivery failed:", error);
      return NextResponse.json(
        {
          ok: false,
          message:
            "We couldn't deliver your message. Please call the office and we'll take the details directly.",
        },
        { status: 502 },
      );
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info(
      "[contact] No CONTACT_FORM_WEBHOOK_URL configured — submission validated but not delivered.",
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks — we'll be in touch within one business day.",
  });
}
