"use client";
import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import Link from "next/link";

interface ButtonProps {
  text: string;
  className?: string;
  href: string;
  newTab?: boolean;
}

export default function Button({text, className, href, newTab}: ButtonProps) {
  const isProjectButton = className === "project-button";

  return (
    <div className={isProjectButton ? "flex justify-center mt-5" : "mt-5"}>
      <ShadcnButton
        asChild
        size="lg"
        className={`
          uppercase font-bold transition-all duration-300 hover:-translate-y-1
          ${isProjectButton ? "" : "mr-12 max-md:mr-0"}
        `}
      >
        <Link
          href={href}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {text}
        </Link>
      </ShadcnButton>
    </div>
  );
}