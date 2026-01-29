"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        relative flex items-center justify-center
        h-9 w-9 rounded-full
        border border-white/10
        bg-white/5 backdrop-blur
        transition-all duration-300
        hover:bg-white/10 hover:scale-105
        active:scale-95
      "
    >
      {isDark ? (
        <Sun
          size={18}
          className="text-yellow-400 transition-transform duration-300 rotate-0"
        />
      ) : (
        <Moon
          size={18}
          className="text-sky-500 transition-transform duration-300 rotate-0"
        />
      )}
    </button>
  );
}
