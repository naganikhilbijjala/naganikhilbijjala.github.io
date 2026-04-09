import React from "react";
import { motion } from "framer-motion";
import EducationCard from "@/components/educationCard";
import {educationInfo} from "@/portfolio";

export default function Education() {
  if (!educationInfo.display) {
    return null;
  }

  return (
    <div className="relative py-24 px-6 max-w-6xl mx-auto" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 block">
          Education
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-foreground">
          Academic Background
        </h2>
      </motion.div>

      <div className="space-y-5">
        {educationInfo.schools.map((school, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <EducationCard school={school} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
