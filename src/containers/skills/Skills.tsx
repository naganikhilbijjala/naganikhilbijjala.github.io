import React from "react";
import SoftwareSkill from "@/components/softwareSkills";
import {skillsSection} from "@/portfolio";
import {motion} from "framer-motion";

export default function Skills() {
  if (!skillsSection.display) {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative py-[60px] px-5 mx-auto max-w-[1400px] overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative flex w-full overflow-hidden flex-col md:flex-row">
        <motion.div
          initial={{opacity: 0, x: 40}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true, margin: "-100px" }}
          transition={{duration: 1}}
          className="flex-1 mb-7.5 order-1 md:order-2"
        >
          <motion.div
            className="ml-0 md:ml-12 mx-5 md:mx-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h1
              className="text-[48px] font-bold my-0 mb-5 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent max-xl:text-[40px] max-md:text-[30px] max-md:text-center"
              variants={itemVariants}
            >
              {skillsSection.title}{" "}
            </motion.h1>
            <motion.p
              className="text-gray-700 dark:text-gray-300 my-0 mb-8 leading-[1.6] text-lg max-md:text-center"
              variants={itemVariants}
            >
              {skillsSection.subTitle}
            </motion.p>
            <motion.div variants={itemVariants}>
              <SoftwareSkill />
            </motion.div>
            <motion.div
              className="mt-8 space-y-4"
              variants={containerVariants}
            >
              {skillsSection.skills.map((skills, i) => {
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:rounded-full before:animate-pulse"
                  >
                    <p className="text-gray-600 dark:text-gray-400 my-0 leading-[1.6] text-base transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 group-hover:translate-x-2">
                      {skills}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
