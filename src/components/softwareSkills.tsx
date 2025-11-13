"use client";
import React from "react";
import { skillsSection } from "@/portfolio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export default function SoftwareSkill() {
  const getIconColor = (index: number) => {
    const colors = [
      "text-purple-500 hover:text-purple-600",
      "text-blue-500 hover:text-blue-600",
      "text-green-500 hover:text-green-600",
      "text-yellow-500 hover:text-yellow-600",
      "text-pink-500 hover:text-pink-600",
      "text-cyan-500 hover:text-cyan-600",
      "text-orange-500 hover:text-orange-600",
      "text-indigo-500 hover:text-indigo-600",
    ];
    return colors[index % colors.length];
  };

  return (
    <TooltipProvider>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-4xl">
          {skillsSection.softwareSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <i
                      className={`${skill.fontAwesomeClassname} text-5xl mb-2 ${getIconColor(i)} transition-all duration-300 relative z-10`}
                      style={{
                        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
                      }}
                    />
                    <p className="text-xs text-center font-medium text-gray-700 dark:text-gray-300 relative z-10">
                      {skill.skillName}
                    </p>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none">
                  <p className="font-semibold">{skill.skillName}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}