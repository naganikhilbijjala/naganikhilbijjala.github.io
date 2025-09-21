"use client";
import React, {createRef} from "react";
import { motion } from "framer-motion";
import { School } from "../../portfolio";

interface EducationCardProps {
  school: School;
}

interface GetDescBulletsProps {
  descBullets?: string[];
}

export default function EducationCard({school}: EducationCardProps) {
  const imgRef = createRef<HTMLImageElement>();

  const GetDescBullets = ({descBullets}: GetDescBulletsProps) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="text-secondary">
            {item}
          </li>
        ))
      : null;
  };

  if (!school.logo)
    console.error(`Image of ${school.schoolName} is missing in education section`);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row max-xl:flex-col max-xl:pb-2.5 max-md:text-center">
          {school.logo && (
            <div>
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="object-cover mr-8 w-24 h-24 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.3)] rounded-full max-xl:w-16 max-xl:h-16 max-xl:mb-2 max-xl:mr-0 max-md:mt-2.5 max-md:w-16 max-md:h-16 max-md:mb-4 max-md:mr-0"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="max-w-[70%] max-xl:max-w-[90%] max-md:max-w-full">
            <h5 className="m-0 text-[28px] font-bold text-ellipsis overflow-hidden whitespace-nowrap h-[27px] max-xl:text-xl max-xl:h-[23px]">{school.schoolName}</h5>

            <div>
              <h5 className="text-black font-bold text-[19px] m-0 pt-3 leading-normal max-xl:pt-2 max-xl:text-base">
                {school.subHeader}
              </h5>
              <p className="text-black text-[19px] m-0 pt-2 max-xl:text-base">
                {school.duration}
              </p>
              <p className="mt-2 mb-2">{school.desc}</p>
              <div className="mt-2">
                <ul className="mt-2 max-md:max-w-[80%] max-md:mx-auto">
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="h-7.5 w-[80%] border-t-2 border-gray-300 mb-5 transition-all duration-[0.6s] ease-in-out hover:border-[#a9a7f9] hover:w-full max-xl:w-[90%] max-md:w-full"></div>
      </motion.div>
    </div>
  );
}
