"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
        aria-label="Toggle theme"
      >
        <Sun size={18} />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: isDark ? 0 : 180 }}
      transition={{ duration: 0.3 }}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}

