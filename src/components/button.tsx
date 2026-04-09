"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  className?: string;
  href: string;
  newTab?: boolean;
}

export default function Button({text, className, href, newTab}: ButtonProps) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={className || "inline-flex items-center px-6 py-3 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 text-sm"}
    >
      {text}
    </Link>
  );
}
