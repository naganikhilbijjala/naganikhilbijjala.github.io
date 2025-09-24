import React from "react";
import {techStack} from "@/portfolio";
import {motion} from "framer-motion";

export default function StackProgress() {
  if (!techStack.viewSkillBars) {
    return null;
  }

  const getGradientColor = (index: number) => {
    const gradients = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500",
      "from-green-500 to-teal-500",
      "from-yellow-500 to-orange-500",
      "from-red-500 to-pink-500",
      "from-indigo-500 to-purple-500",
    ];
    return gradients[index % gradients.length];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{ once: true, margin: "-100px" }}
      transition={{duration: 1}}
      className="relative py-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-8">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Proficiency
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {techStack.experience.map((exp, i) => {
            const percentage = parseInt(exp.progressPercentage);
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {exp.Stack}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {exp.progressPercentage}
                  </span>
                </div>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getGradientColor(i)} rounded-full shadow-lg`}
                    initial={{ width: 0 }}
                    whileInView={{ width: exp.progressPercentage }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
