"use client";
import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaGitlab, FaFacebookF, FaInstagram, FaMediumM, FaStackOverflow, FaKaggle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

import {socialMediaLinks} from "@/portfolio";

const iconMap: Record<string, { icon: React.ReactNode; label: string }> = {
  github: { icon: <FaGithub className="w-5 h-5" />, label: "GitHub" },
  linkedin: { icon: <FaLinkedinIn className="w-5 h-5" />, label: "LinkedIn" },
  gmail: { icon: <FaEnvelope className="w-5 h-5" />, label: "Email" },
  gitlab: { icon: <FaGitlab className="w-5 h-5" />, label: "GitLab" },
  facebook: { icon: <FaFacebookF className="w-5 h-5" />, label: "Facebook" },
  instagram: { icon: <FaInstagram className="w-5 h-5" />, label: "Instagram" },
  twitter: { icon: <FaXTwitter className="w-5 h-5" />, label: "X (Twitter)" },
  medium: { icon: <FaMediumM className="w-5 h-5" />, label: "Medium" },
  stackoverflow: { icon: <FaStackOverflow className="w-5 h-5" />, label: "Stack Overflow" },
  kaggle: { icon: <FaKaggle className="w-5 h-5" />, label: "Kaggle" },
};

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  const links = Object.entries(socialMediaLinks)
    .filter(([key, value]) => key !== "display" && value && iconMap[key])
    .map(([key, value]) => ({
      key,
      href: key === "gmail" ? `mailto:${value}` : value as string,
      ...iconMap[key],
    }));

  return (
    <div className="flex items-center gap-2">
      {links.map((link, index) => (
        <motion.a
          key={link.key}
          href={link.href}
          target={link.key !== "gmail" ? "_blank" : undefined}
          rel={link.key !== "gmail" ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 border border-transparent hover:border-emerald-200/50 dark:hover:border-emerald-500/20"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
