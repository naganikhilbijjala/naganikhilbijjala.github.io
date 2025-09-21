import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {motion} from "framer-motion";
import { useStyleContext } from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useStyleContext();
  if (workExperiences.display) {
    return (
      <div id="experience">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
          <div className="flex w-[90%] py-5 px-2.5 mx-auto" id="workExperience">
            <div className="flex-1">
              <h1 className="text-[48px] font-normal my-0 mb-5 text-black max-xl:text-[40px] max-md:text-[30px] max-md:text-center">Experiences</h1>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc || "",
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets || []
                      }}
                      isDark={isDark}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  return null;
}
