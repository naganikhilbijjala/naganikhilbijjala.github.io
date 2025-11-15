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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-6 text-gray-600 dark:text-gray-400 mb-2 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-500 before:rounded-full"
          >
            {item}
          </motion.li>
        ))
      : null;
  };

  return (
    <motion.div
      className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      <div className="relative flex flex-row gap-6 items-start max-xl:flex-col max-xl:items-center max-md:text-center">
        {cardInfo.companylogo && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0"
          >
            <div className="relative w-24 h-24 max-xl:w-20 max-xl:h-20 max-md:w-16 max-md:h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 p-3 flex items-center justify-center">
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

        <div className="flex-1 space-y-3">
          <motion.h5
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent max-xl:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {cardInfo.company}
          </motion.h5>

          <div className="space-y-2">
            <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-200 max-xl:text-base">
              {cardInfo.role}
            </h6>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2 max-md:justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {cardInfo.date}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {cardInfo.desc}
            </p>

            {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                <GetDescBullets descBullets={cardInfo.descBullets} />
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Decorative gradient line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}