import React from "react";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {motion} from "framer-motion";
import { useStyleContext } from "../../contexts/StyleContext";

export default function Achievement() {
  const { isDark } = useStyleContext();
  if (!achievementSection.display) {
    return null;
  }
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    >
      <div className="py-[60px] px-5 mx-auto max-w-[1400px]" id="achievements">
        <div>
          <div>
            <h1 className="text-[48px] font-normal leading-[1.2] my-0 mb-5 text-black max-xl:text-[40px] max-md:text-[30px] max-md:text-center">
              {achievementSection.title}
            </h1>
            <p className="uppercase my-0 mb-10 text-secondary max-md:text-base max-md:leading-normal max-md:text-center">
              {achievementSection.subtitle}
            </p>
          </div>
          <div>
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                  isDark={isDark}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
