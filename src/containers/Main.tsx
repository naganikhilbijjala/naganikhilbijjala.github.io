import React from "react";
import Header from "@/components/header";
import Greeting from "@/containers/greeting/Greeting";
import Skills from "@/containers/skills/Skills";
import WorkExperience from "@/containers/workExperience/WorkExperience";
import SideProjects from "@/containers/sideProjects/SideProjects";
import Education from "@/containers/education/Education";
import ScrollToTopButton from "@/containers/topbutton/Top";
import {motion} from "framer-motion";
import Profile from "./profile/Profile";

const Main = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background grain-overlay">
      {/* Subtle dot grid pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.03)_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.03)_1px,_transparent_0)] bg-[size:32px_32px]" />

        {/* Large ambient gradient orbs */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-emerald-200/20 to-cyan-200/10 dark:from-emerald-900/10 dark:to-cyan-900/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-violet-200/10 to-emerald-200/10 dark:from-violet-900/5 dark:to-emerald-900/5 rounded-full blur-[120px]" />
      </div>

      <Header />
      <main className="relative">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
        >
          <Greeting />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.7, ease: "easeOut"}}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.7, ease: "easeOut"}}
        >
          <Education />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.7, ease: "easeOut"}}
        >
          <WorkExperience />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.7, ease: "easeOut"}}
        >
          <SideProjects />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.7, ease: "easeOut"}}
        >
          <Profile />
        </motion.div>
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default Main;
