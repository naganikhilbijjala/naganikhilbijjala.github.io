"use client";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  href: string;
  newTab?: boolean;
}

export default function Button({text, className, href, newTab}: ButtonProps) {
  const buttonClasses = className === "project-button"
    ? "flex justify-center mt-5"
    : "";

  const linkClasses = className === "project-button"
    ? "bg-primary border border-primary text-white font-bold w-max py-[13px] px-[22px] mr-0 uppercase rounded-md text-center no-underline block mt-5 text-base cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-primary hover:-translate-y-1 max-md:text-[0.938rem] max-md:py-3 max-md:px-[18px] max-md:mr-0 max-[320px]:text-xs"
    : "bg-primary border border-primary text-white font-bold w-max py-[13px] px-[22px] mr-12 uppercase rounded-md text-center no-underline block mt-5 text-base cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-primary hover:-translate-y-1 max-md:text-[0.938rem] max-md:py-3 max-md:px-[18px] max-md:mr-0 max-[320px]:text-xs";

  return (
    <div className={buttonClasses}>
      <a className={linkClasses} href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
