import React from "react";
import { motion } from "framer-motion";
import EducationCard from "@/components/educationCard";
import {educationInfo} from "@/portfolio";

export default function Education() {
  if (!educationInfo.display) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative py-16 px-8 max-w-7xl mx-auto overflow-hidden" id="education">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Education
        </h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {educationInfo.schools.map((school, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <EducationCard school={school} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
