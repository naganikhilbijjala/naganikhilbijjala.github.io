"use client";
import React, { useState } from "react";
import {
  greeting,
  workExperiences,
  skillsSection
} from "@/portfolio";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;

  const navItems = [
    { show: viewSkills, href: "#skills", label: "Skills" },
    { show: viewExperience, href: "#experience", label: "Experience" },
    { show: true, href: "#sideprojects", label: "Projects" },
    { show: true, href: "/blogs", label: "Blog" },
    { show: true, href: "#contact", label: "Contact" },
  ].filter(item => item.show);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl border-b border-black/[0.04] dark:border-white/[0.04]">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-6xl">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-emerald-500/20">
            N
          </span>
          <span className="hidden sm:inline">Nikhil</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-white/[0.05] rounded-full px-1.5 py-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-white dark:hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-l border-black/[0.04] dark:border-white/[0.04]">
            <nav className="flex flex-col gap-1 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-xl transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
