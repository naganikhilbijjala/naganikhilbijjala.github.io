"use client";
import React from "react";
import {motion} from "framer-motion";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

export default function SideProjects() {
  const projects = [
    {
      name: "FinPilot",
      tagline: "Precision Portfolio Analytics",
      description:
        "A comprehensive portfolio management platform for tracking investment allocations across countries and asset classes. Features include CAGR and XIRR calculations for SIPs, IPO watchlist management, real-time portfolio analytics, and performance tracking.",
      techStack: ["Java", "Spring Boot", "PostgreSQL"],
      githubLink: "https://github.com/naganikhilbijjala/finpilot",
      liveLink: "https://precision-portfolio-analytics.vercel.app/"
    },
    {
      name: "BioCraft",
      tagline: "Bio Data Builder",
      description:
        "A modern web application for creating professional bio data PDFs for marriage proposals with customizable templates and instant PDF generation.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/naganikhilbijjala/bio-data-builder",
      liveLink: "https://bio-data-builder.vercel.app/"
    },
    {
      name: "LedgeWise",
      tagline: "Smart Financial Ledger",
      description:
        "A modern financial management application for tracking expenses, managing ledgers, and gaining insights into spending patterns. Built with a type-safe full-stack architecture, Prisma ORM, and comprehensive test coverage.",
      techStack: ["Next.js", "TypeScript", "Prisma"],
      githubLink: "https://github.com/naganikhilbijjala/ledge-wise",
      liveLink: "https://ledge-wise.vercel.app/"
    }
  ];

  const accentColors = [
    { bg: "bg-emerald-50 dark:bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200/50 dark:border-emerald-500/20", dot: "bg-emerald-500" },
    { bg: "bg-sky-50 dark:bg-sky-500/10", text: "text-sky-600 dark:text-sky-400", border: "border-sky-200/50 dark:border-sky-500/20", dot: "bg-sky-500" },
    { bg: "bg-violet-50 dark:bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-200/50 dark:border-violet-500/20", dot: "bg-violet-500" },
  ];

  return (
    <div id="sideprojects" className="relative py-24 px-6">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.6}}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 block">
            Projects
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-foreground mb-3">
            Side Projects
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl">
            Personal projects and open-source contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const accent = accentColors[index % accentColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: true}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{y: -6}}
                className="group relative flex flex-col bg-white/70 dark:bg-white/[0.04] rounded-2xl border border-slate-200/60 dark:border-white/[0.06] hover:border-emerald-300/50 dark:hover:border-emerald-500/20 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/[0.06] overflow-hidden"
              >
                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Project header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${accent.dot} mt-1.5 shrink-0`} />
                    <div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md ${accent.bg} ${accent.text} border ${accent.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-white/[0.04]">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                      >
                        <FaGithub className="text-base" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
