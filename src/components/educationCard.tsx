"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { School } from "@/portfolio";

interface EducationCardProps {
  school: School;
}

interface GetDescBulletsProps {
  descBullets?: string[];
}

export default function EducationCard({school}: EducationCardProps) {
  const GetDescBullets = ({descBullets}: GetDescBulletsProps) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative pl-5 text-slate-600 dark:text-slate-400 mb-2 text-sm leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-emerald-500 before:rounded-full"
          >
            {item}
          </motion.li>
        ))
      : null;
  };

  if (!school.logo)
    console.error(`Image of ${school.schoolName} is missing in education section`);

  return (
    <motion.div
      className="group relative p-6 bg-white/70 dark:bg-white/[0.04] rounded-2xl border border-slate-200/60 dark:border-white/[0.06] hover:border-emerald-300/50 dark:hover:border-emerald-500/20 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/[0.04]"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="relative flex flex-row gap-6 items-start max-xl:flex-col max-xl:items-center max-md:text-center">
        {school.logo && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex-shrink-0"
          >
            <div className="relative w-20 h-20 max-md:w-16 max-md:h-16">
              <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-white/10 p-2.5 flex items-center justify-center shadow-sm">
                <Image
                  src={school.logo}
                  alt={school.schoolName}
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex-1 space-y-2">
          <h5 className="text-xl font-bold text-foreground max-xl:text-lg">
            {school.schoolName}
          </h5>

          <div className="space-y-1.5">
            <h6 className="text-base font-medium text-slate-700 dark:text-slate-300">
              {school.subHeader}
            </h6>
            <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1.5 max-md:justify-center font-medium">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {school.duration}
            </p>
            {school.desc && (
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mt-2">
                {school.desc}
              </p>
            )}

            {school.descBullets && (
              <ul className="mt-3 space-y-1.5">
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
