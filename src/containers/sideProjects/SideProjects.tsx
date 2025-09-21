"use client";
import React from "react";

import {motion} from "framer-motion";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

export default function SideProjects() {

  const projects = [
    {
      name: "Project Name 1",
      description: "Brief description of your project and the technologies used.",
      techStack: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1.com"
    },
    {
      name: "Project Name 2",
      description: "Another project showcasing different skills and technologies.",
      techStack: ["Java", "Spring Boot", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/project2",
      liveLink: ""
    },
    {
      name: "Project Name 3",
      description: "A third project demonstrating your versatility as a developer.",
      techStack: ["Python", "Django", "Docker"],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.com"
    }
  ];

  return (
    <div id="sideprojects" className="main">
      <div className="side-projects-header">
        <h1 className="side-projects-title">Side Projects</h1>
        <p className="side-projects-subtitle">
          Personal projects and open-source contributions
        </p>
      </div>
      <div className="side-projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="project-card"
          >
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}