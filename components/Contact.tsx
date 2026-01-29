"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
import { Send } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [result, setResult] = useState("");
  const [mounted, setMounted] = useState(false); // ensures client-only rendering

  // Avoid SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setResult("Sending...");

    emailjs
      .sendForm(
        "service_q5a3yzv",
        "template_s21paaw",
        form.current,
        "Kdv-G7hongAKUizi7" 
      )
      .then(() => {
        setResult("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        setResult("Failed to send. Please try again.");
      });
  };

  // Only render the form on client to prevent hydration errors
  if (!mounted) return null;

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24">
      <Reveal>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-black/70 dark:text-slate-200/70">
            Connect with me
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight gradient-text-1">
            Get in touch
          </h2>
          <p className="text-center max-w-2xl mx-auto mt-5 text-black/80 dark:text-slate-200/80">
            I&apos;d love to hear from you. If you have questions, ideas, or
            opportunities, send a message below.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="max-w-2xl mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-3xl card p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <label className="grid gap-2">
              <span className="text-sm text-black/70 dark:text-slate-200/70">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-white/10 dark:border-white/10 border-black/20 bg-white/50 dark:bg-black/20 px-4 py-3 text-sm text-black dark:text-white outline-none placeholder:text-black/50 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300/60"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-black/70 dark:text-slate-200/70">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-white/10 dark:border-white/10 border-black/20 bg-white/50 dark:bg-black/20 px-4 py-3 text-sm text-black dark:text-white outline-none placeholder:text-black/50 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300/60"
              />
            </label>
          </div>

          <label className="grid gap-2 mb-6">
            <span className="text-sm text-black/70 dark:text-slate-200/70">Message</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project…"
              required
              className="w-full resize-none rounded-xl border border-white/10 dark:border-white/10 border-black/20 bg-white/50 dark:bg-black/20 px-4 py-3 text-sm text-black dark:text-white outline-none placeholder:text-black/50 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300/60"
            />
          </label>

          <button
            type="submit"
            className="group mx-auto flex w-max items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 text-sm font-medium text-black shadow-[0_12px_30px_rgba(34,211,238,0.16)] transition will-change-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            Send message
            <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>

          {result && (
            <p className="mt-4 text-center text-sm text-black/80 dark:text-slate-200/80">
              {result}
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;
