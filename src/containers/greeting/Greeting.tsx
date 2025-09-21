import React from "react";
import { motion } from "framer-motion";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="w-[90%] py-5 px-2.5 mx-auto max-w-[320px]:w-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-[90%] py-5 px-2.5 mx-auto" id="greeting">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 mb-7.5">
              <div>
                <h1 className="text-[56px] leading-[1.2] text-black my-0 mb-5 font-semibold max-xl:text-[50px] max-md:text-[30px] max-md:text-center">
                  {greeting.title}
                </h1>
                <p className="text-xl leading-[1.6] my-0 mb-7.5 text-secondary max-xl:text-xl max-md:text-base max-md:leading-normal max-md:text-center">
                  {greeting.subTitle}
                </p>
                <SocialMedia />
                <div className="flex mt-5 max-md:justify-around">
                  <Button text="Contact me" href="#contact" className="" />
                  {greeting.resumeLink && (
                    <Button
                      text="See my resume"
                      newTab={true}
                      href={greeting.resumeLink}
                      className=""
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex-1 mb-7.5 max-md:h-64">
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
