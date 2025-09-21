import React from "react";

import {bigProjects} from "../../portfolio";
import {motion} from "framer-motion";

export default function StartupProject() {
  function openUrlInNewTab(url: string) {
    if (!url) {
      return;
    }
    if (typeof window !== 'undefined') {
      var win = window.open(url, "_blank");
      if (win) {
        win.focus();
      }
    }
  }

  if (!bigProjects.display) {
    return null;
  }
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    >
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className="project-card project-card-light"
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5 className="card-title">
                      {project.projectName}
                    </h5>
                    <p className="card-subtitle">
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className="project-tag"
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
