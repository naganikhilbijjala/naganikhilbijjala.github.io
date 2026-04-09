import React from "react";
import SoftwareSkill from "@/components/softwareSkills";
import {skillsSection} from "@/portfolio";
import {motion} from "framer-motion";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className="relative py-24 px-6 max-w-6xl mx-auto" id="skills">
      <div className="relative flex w-full flex-col md:flex-row">
        <motion.div
          initial={{opacity: 0, x: 40}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true, margin: "-100px" }}
          transition={{duration: 0.7}}
          className="flex-1 mb-7.5 order-1 md:order-2"
        >
          <div className="ml-0 md:ml-12 mx-5 md:mx-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 block"
            >
              Skills
            </motion.span>
            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-foreground mb-5 max-md:text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {skillsSection.title}
            </motion.h2>
            <motion.p
              className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-lg max-md:text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {skillsSection.subTitle}
            </motion.p>
            <SoftwareSkill />
            <div className="mt-8 space-y-3">
              {skillsSection.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-emerald-500 before:rounded-full"
                >
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
