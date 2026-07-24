"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Kitchen fitout",
  "Full home renovation",
  "Bathroom refit",
  "Office / retail fitout",
  "Design consultation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm">
        <h3 className="font-display text-xl text-charcoal">Thank you</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
          We&apos;ve received your message and will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-black/10 bg-cream px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-terracotta"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-black/10 bg-cream px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-terracotta"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-charcoal">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-lg border border-black/10 bg-cream px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-terracotta"
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="text-sm font-medium text-charcoal">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="mt-1.5 w-full rounded-lg border border-black/10 bg-cream px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-terracotta"
            defaultValue={projectTypes[0]}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-charcoal">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-black/10 bg-cream px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-terracotta"
          placeholder="Space, timeline, budget range, or anything else that helps us understand the project"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
      >
        Send message
      </button>
    </form>
  );
}
