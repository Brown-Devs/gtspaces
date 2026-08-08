"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { emailjsConfig, isEmailjsConfigured } from "@/lib/emailjs";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export function EnquiryForm({
  projectName,
  compact = false,
}: {
  projectName?: string;
  compact?: boolean;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setError(false);

    // Fire both integrations. Neither should block the other. If EmailJS
    // is down we still want the lead in the CRM, and vice versa.
    const results = await Promise.allSettled([
      // 1. Push the lead into Trevion CRM via our server route
      //    (keeps the CRM API key out of the browser bundle).
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          projectName,
          sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      }).then(async (res) => {
        if (!res.ok) throw new Error(`CRM submission failed with status ${res.status}`);
        return res.json();
      }),

      // 2. Send the notification email via EmailJS (if configured)
      isEmailjsConfigured
        ? emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            {
              from_name: data.name,
              phone: data.phone,
              email: data.email,
              project_name: projectName ?? "General Enquiry",
              message: data.message,
            },
            { publicKey: emailjsConfig.publicKey }
          )
        : Promise.resolve(
            console.warn(
              "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_* env vars to send real emails. Submission:",
              { ...data, projectName }
            )
          ),
    ]);

    const [crmResult, emailResult] = results;
    if (crmResult.status === "rejected") console.error("CRM lead submission failed:", crmResult.reason);
    if (emailResult.status === "rejected") console.error("EmailJS send failed:", emailResult.reason);

    // Only show the error state if BOTH integrations failed. The lead
    // capture is what matters most, the email is a secondary notification.
    if (crmResult.status === "rejected" && emailResult.status === "rejected") {
      setError(true);
      return;
    }

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl bg-gold-50 p-10 text-center"
      >
        <CheckCircle2 className="text-gold-600" size={44} />
        <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900">Thank You!</h3>
        <p className="mt-2 text-sm text-ink-600">
          Your enquiry has been received. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline-dark mt-6 !py-2.5 text-xs"
        >
          Submit Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", compact && "space-y-3")} noValidate>
      <div>
        <input
          {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name is too short" } })}
          placeholder="Full Name*"
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400",
            errors.name ? "border-red-400" : "border-ink-900/12"
          )}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: { value: /^[0-9+\s-]{8,15}$/, message: "Enter a valid phone number" },
            })}
            placeholder="Phone Number*"
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400",
              errors.phone ? "border-red-400" : "border-ink-900/12"
            )}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
            placeholder="Email Address*"
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400",
              errors.email ? "border-red-400" : "border-ink-900/12"
            )}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <textarea
          {...register("message", { required: "Please add a short message" })}
          placeholder={projectName ? `I'm interested in ${projectName}...` : "Your Message*"}
          rows={compact ? 3 : 4}
          className={cn(
            "w-full resize-none rounded-xl border bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400",
            errors.message ? "border-red-400" : "border-ink-900/12"
          )}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-500">
          <AlertTriangle size={13} /> Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
        {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
