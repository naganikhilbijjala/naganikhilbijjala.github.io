"use client";
import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // storage unavailable (private mode) — theme just won't persist
    }
    setDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:text-fg hover:border-fg/30"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
