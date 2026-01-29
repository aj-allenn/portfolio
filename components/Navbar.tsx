"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const links = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "services", label: "Services" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  /* 🔥 Scroll-spy logic */
  useEffect(() => {
    const elements = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-30% 0px -50% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  /* ESC to close mobile menu */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1">
      {links.map((l) => {
        const isActive = active === l.id;

        return (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={onClick}
            className="relative rounded-full px-4 py-2 text-sm transition text-slate-200/80 hover:text-white hover:bg-white/5"
          >
            <span className="relative z-10">{l.label}</span>

            {/* {isActive && (
              <motion.span
                layoutId="navActivePill"
                className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )} */}
          </a>
        );
      })}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4">
        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-glow">
          <div className="absolute inset-0 rounded-2xl opacity-60 pointer-events-none bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10" />

          <nav className="relative flex items-center justify-between px-4 sm:px-5 py-3">
            <Link
              href="/"
              className="text-base sm:text-lg font-semibold tracking-tight gradient-text-2"
            >
              Allen
            </Link>

            <div className="hidden md:block">
              <NavLinks />
              <ThemeToggle/>
            </div>

            <div className="md:hidden">
              <ThemeToggle/>
            </div>



            <button
              onClick={() => setOpen(true)}
              className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white"
            >
              <Menu size={18} />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: -12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
              className="absolute left-1/2 top-4 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-3 shadow-glow"
            >
              <div className="flex items-center justify-between px-2 pb-2">
                <span className="text-sm text-slate-200/70">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <NavLinks onClick={() => setOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
