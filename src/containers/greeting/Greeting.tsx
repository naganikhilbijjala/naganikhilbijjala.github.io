import React from "react";
import { motion } from "framer-motion";
import SocialMedia from "@/components/socialMedia";
import Button from "@/components/button";

import {greeting} from "@/portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="relative min-h-[80vh] md:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-emerald-400/[0.07] dark:bg-emerald-500/[0.05] rounded-full blur-[100px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: "-10%", right: "10%" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-cyan-400/[0.05] dark:bg-cyan-500/[0.04] rounded-full blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: "0%", left: "5%" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-violet-400/[0.04] dark:bg-violet-500/[0.03] rounded-full blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: "40%", left: "40%" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full"
      >
        <div className="max-w-6xl py-8 px-6 mx-auto" id="greeting">
          <div className="flex flex-col items-start max-md:items-center max-md:text-center">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6 font-extrabold tracking-[-0.04em] text-foreground max-md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {greeting.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{greeting.title.split(" ").slice(-1)}</span>
            </motion.h1>

            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2 text-base font-semibold tracking-wide bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full shadow-lg shadow-emerald-500/20">
                UI/UX Engineer
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg lg:text-xl leading-relaxed mb-8 text-slate-600 dark:text-slate-400 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {greeting.subTitle}
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <SocialMedia />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex gap-4 mt-8 max-md:justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5 text-sm"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              {greeting.resumeLink && (
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 dark:border-slate-700 text-foreground font-semibold rounded-full hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  View resume
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
