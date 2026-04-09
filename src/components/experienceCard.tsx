"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceCardProps {
  cardInfo: {
    company: string;
    desc: string;
    date: string;
    companylogo: any;
    role: string;
    descBullets: string[];
  };
}

interface GetDescBulletsProps {
  descBullets?: string[];
}

export default function ExperienceCard({cardInfo}: ExperienceCardProps) {
  const GetDescBullets = ({descBullets}: GetDescBulletsProps) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative pl-5 text-slate-600 dark:text-slate-400 mb-2 text-sm leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-emerald-500 before:rounded-full"
          >
            {item}
          </motion.li>
        ))
      : null;
  };

  return (
    <motion.div
      className="group relative p-6 bg-white/70 dark:bg-white/[0.04] rounded-2xl border border-slate-200/60 dark:border-white/[0.06] hover:border-emerald-300/50 dark:hover:border-emerald-500/20 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/[0.04]"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="relative flex flex-row gap-6 items-start max-xl:flex-col max-xl:items-center max-md:text-center">
        {cardInfo.companylogo && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex-shrink-0"
          >
            <div className="relative w-20 h-20 max-md:w-16 max-md:h-16">
              <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-white/10 p-2.5 flex items-center justify-center shadow-sm">
                <Image
                  src={cardInfo.companylogo}
                  alt={cardInfo.company}
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h5 className="text-xl font-bold text-foreground max-xl:text-lg">
              {cardInfo.company}
            </h5>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-500/20 whitespace-nowrap w-fit max-md:mx-auto">
              {cardInfo.date}
            </span>
          </div>

          <div className="space-y-1.5">
            <h6 className="text-base font-semibold text-slate-700 dark:text-slate-300">
              {cardInfo.role}
            </h6>
            {cardInfo.desc && (
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {cardInfo.desc}
              </p>
            )}

            {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                <GetDescBullets descBullets={cardInfo.descBullets} />
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
