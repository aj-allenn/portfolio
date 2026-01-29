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
      {/* Theme Toggle - First in mobile, last in desktop */}
      <div className="order-1 md:order-3 md:ml-2">
        <ThemeToggle />
      </div>

      {/* Navigation Links - Second in mobile, first in desktop */}
      <div className="order-2 md:order-1 flex flex-col md:flex-row gap-2 md:gap-1">
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
            </a>
          );
        })}
      </div>

      {/* Resume button - Third in mobile, second in desktop */}
      <a 
        href="/resume/Allen_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="order-3 md:order-2 inline-flex items-center gap-2
              px-3 py-1.5 md:px-4 md:py-2 rounded-full
              border border-white/15 bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs md:text-sm font-medium
              bg-white/5 backdrop-blur
              hover:bg-white/10 transition">
         
          View Resume
         
        </a>
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
      {/* Mobile Menu */}
<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="absolute right-0 top-0 h-full w-[85%] max-w-sm
                   bg-black/80 backdrop-blur-xl
                   border-l border-white/10
                   shadow-glow z-50"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-lg font-semibold gradient-text-2">
           
          </span>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full border border-white/20 bg-white/10 p-2 text-white
                       hover:bg-white/20 transition"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <div className="px-5 py-6">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}








