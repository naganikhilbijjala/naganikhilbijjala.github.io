"use client";
import React from "react";
import {motion} from "framer-motion";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

export default function SideProjects() {
  const projects = [
    {
      name: "FinPilot - Precision Portfolio Analytics",
      description:
        "A comprehensive portfolio management platform for tracking investment allocations across countries and asset classes. Features include CAGR and XIRR calculations for SIPs, IPO watchlist management, real-time portfolio analytics, and performance tracking. Built with modern web technologies for seamless financial analysis.",
      techStack: ["Java", "Spring Boot", "PostgreSQL"],
      githubLink: "https://github.com/naganikhilbijjala/finpilot",
      liveLink: "https://precision-portfolio-analytics.vercel.app/"
    },
    {
      name: "BioCraft - Bio Data Builder",
      description:
        "A modern web application for creating professional bio data PDFs for marriage proposals with customizable templates and instant PDF generation.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/naganikhilbijjala/bio-data-builder",
      liveLink: "https://bio-data-builder.vercel.app/"
    },
    {
      name: "Project Name 3",
      description:
        "A third project demonstrating your versatility as a developer.",
      techStack: ["Python", "Django", "Docker"],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.com"
    }
  ];

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getGradientColor = (index: number) => {
    const gradients = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500",
      "from-green-500 to-teal-500"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div id="sideprojects" className="relative py-16 px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.6}}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Side Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Personal projects and open-source contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{y: -10, scale: 1.02}}
              transition={{type: "spring", stiffness: 300}}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient top border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradientColor(
                  index
                )}`}
              />

              {/* Card content */}
              <div className="p-6 space-y-4">
                {/* Project name with gradient on hover */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed min-h-[60px]">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{opacity: 0, scale: 0.8}}
                      whileInView={{opacity: 1, scale: 1}}
                      viewport={{once: true}}
                      transition={{duration: 0.3, delay: 0.1 * i}}
                      whileHover={{scale: 1.1}}
                      className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getGradientColor(
                        i
                      )} text-white shadow-md`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                    >
                      <FaGithub className="text-lg" />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
