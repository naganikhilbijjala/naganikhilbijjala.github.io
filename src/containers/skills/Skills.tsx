import React from "react";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {motion} from "framer-motion";
import codingPerson from "../../assets/lottie/codingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="py-[60px] px-5 mx-auto max-w-[1400px]" id="skills">
      <div className="flex w-full overflow-hidden flex-col md:flex-row">
        <motion.div
          initial={{opacity: 0, x: -40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          className="flex-1 mb-7.5 order-2 md:order-1"
        >
          <div className="max-w-full h-auto">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
                className="max-w-full h-auto"
              ></img>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, x: 40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          className="flex-1 mb-7.5 order-1 md:order-2"
        >
          <div className="ml-0 md:ml-12 mx-5 md:mx-0">
            <h1 className="text-[48px] font-normal my-0 mb-5 text-black max-xl:text-[40px] max-md:text-[30px] max-md:text-center">
              {skillsSection.title}{" "}
            </h1>
            <p className="text-secondary my-0 mb-5 leading-[1.6] text-base max-md:text-center">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className="text-secondary my-0 mb-5 leading-[1.6] max-md:text-base"
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
