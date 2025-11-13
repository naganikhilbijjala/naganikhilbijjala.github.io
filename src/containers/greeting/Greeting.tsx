import React from "react";
import { motion } from "framer-motion";
import SocialMedia from "@/components/socialMedia";
import Button from "@/components/button";

import {greeting} from "@/portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>

      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full"
      >
        <div className="w-[90%] py-5 px-2.5 mx-auto" id="greeting">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 mb-7.5">
              <div>
                <motion.h1
                  className="text-[56px] leading-[1.2] my-0 mb-5 font-bold gradient-text max-xl:text-[50px] max-md:text-[30px] max-md:text-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {greeting.title}
                </motion.h1>
                <motion.p
                  className="text-xl leading-[1.6] my-0 mb-7.5 text-gray-700 dark:text-gray-300 max-xl:text-xl max-md:text-base max-md:leading-normal max-md:text-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {greeting.subTitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <SocialMedia />
                </motion.div>
                <motion.div
                  className="flex gap-4 mt-5 max-md:justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Button text="Contact me" href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg" />
                  {greeting.resumeLink && (
                    <Button
                      text="See my resume"
                      newTab={true}
                      href={greeting.resumeLink}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    />
                  )}
                </motion.div>
              </div>
            </div>
            <motion.div
              className="flex-1 mb-7.5 max-md:h-64 flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Space for avatar or illustration */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
