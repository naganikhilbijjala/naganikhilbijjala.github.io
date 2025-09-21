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
  return (
    <TooltipProvider>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-4xl">
          {skillsSection.softwareSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                    <i
                      className={`${skill.fontAwesomeClassname} text-5xl mb-2 text-muted-foreground hover:text-primary transition-colors`}
                    />
                    <p className="text-xs text-center text-muted-foreground">
                      {skill.skillName}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.skillName}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}