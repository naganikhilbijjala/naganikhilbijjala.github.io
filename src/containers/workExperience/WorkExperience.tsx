import React from "react";
import ExperienceCard from "@/components/experienceCard";
import {workExperiences} from "@/portfolio";
import {motion} from "framer-motion";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }

  return (
    <div className="relative py-24 px-6 max-w-6xl mx-auto" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 block">
          Experience
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-foreground">
          Where I&apos;ve Worked
        </h2>
      </motion.div>

      <div className="space-y-5">
        {workExperiences.experience.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <ExperienceCard
              cardInfo={{
                company: card.company,
                desc: card.desc || "",
                date: card.date,
                companylogo: card.companylogo,
                role: card.role,
                descBullets: card.descBullets || []
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
