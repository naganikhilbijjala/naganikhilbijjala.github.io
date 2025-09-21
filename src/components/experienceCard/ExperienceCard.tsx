"use client";
import React from "react";

interface ExperienceCardProps {
  cardInfo: {
    company: string;
    desc: string;
    date: string;
    companylogo: any;
    role: string;
    descBullets: string[];
  };
  isDark: boolean;
}

interface GetDescBulletsProps {
  descBullets?: string[];
  isDark: boolean;
}

export default function ExperienceCard({cardInfo, isDark}: ExperienceCardProps) {

  const GetDescBullets = ({descBullets, isDark}: GetDescBulletsProps) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "text-white" : "text-secondary"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const cardClasses = isDark
    ? "relative bg-[#171c28] shadow-[rgba(0,0,0,0.2)_0px_10px_30px_-15px] rounded-[10px] border border-[rgba(211,211,211,0.397)] hover:shadow-[rgba(0,0,0,0.2)_0px_20px_30px_-10px]"
    : "relative bg-white shadow-[rgba(0,0,0,0.2)_0px_10px_30px_-15px] rounded-[10px] border border-[rgba(211,211,211,0.397)] hover:shadow-[rgba(0,0,0,0.2)_0px_20px_30px_-10px]";

  return (
    <div className={cardClasses}>
      <div className="bg-center bg-no-repeat bg-[150%] bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.5)] rounded-t-[10px] h-44 flex items-end justify-center relative">
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] blur-[5px] h-44 top-0 left-0 w-full rounded-t-[10px]"></div>
        <div className="absolute bg-transparent h-36 top-0 left-0 w-full flex items-center justify-center">
          <h5 className="text-center p-6 m-0 text-white text-[25px] font-bold text-ellipsis overflow-hidden whitespace-nowrap max-xl:text-[22px] max-md:text-[22px]">{cardInfo.company}</h5>
        </div>

        <img
          className="absolute object-cover left-0 right-0 top-28 mx-auto w-32 h-32 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.3)] rounded-full max-xl:w-26 max-xl:h-26"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />
      </div>
      <div className="p-6 mt-8">
        <h5
          className={`text-center font-bold text-[25px] m-0 pt-6 leading-normal max-xl:pt-2 max-xl:text-[22px] max-md:text-[22px] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {cardInfo.role}
        </h5>
        <h5
          className={`text-center text-xl m-0 pt-4 font-semibold max-xl:text-lg max-md:text-lg ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {cardInfo.date}
        </h5>
        <p
          className={`text-center max-md:text-base ${
            isDark ? "text-white" : "text-secondary"
          }`}
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
