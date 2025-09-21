"use client";
import React from "react";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <div className="max-h-[100px]">
      <header className="bg-white w-full px-5 py-[15px] mx-auto md:flex md:items-center md:justify-between">
        <a href="/" className="block flex-none float-left text-xl no-underline mt-2.5 leading-normal text-black transition-colors duration-300 hover:text-primary">
          <span className="font-semibold tracking-tight text-lg">{greeting.username}</span>
        </a>
        <input className="hidden peer" type="checkbox" id="menu-btn" />
        <label
          className="cursor-pointer inline-block float-right py-7 px-5 relative select-none md:hidden"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="bg-[#333] block h-0.5 relative transition-all duration-200 ease-out w-[18px] before:content-[''] before:bg-[#333] before:block before:h-full before:absolute before:transition-all before:duration-200 before:ease-out before:w-full before:top-[5px] after:content-[''] after:bg-[#333] after:block after:h-full after:absolute after:transition-all after:duration-200 after:ease-out after:w-full after:top-[-5px] peer-checked:bg-transparent peer-checked:before:rotate-[-45deg] peer-checked:after:rotate-45 peer-checked:before:top-0 peer-checked:after:top-0"></span>
        </label>
        <ul className="m-0 p-0 list-none overflow-hidden clear-both max-h-0 transition-all duration-200 ease-out peer-checked:max-h-[486px] md:max-h-none">
          {viewSkills && (
            <li className="md:float-left">
              <a href="#skills" className="block py-[15px] px-5 text-black no-underline hover:bg-[#f4f4f4]">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li className="md:float-left">
              <a href="#experience" className="block py-[15px] px-5 text-black no-underline hover:bg-[#f4f4f4]">Experience</a>
            </li>
          )}
          {viewOpenSource && (
            <li className="md:float-left">
              <a href="#opensource" className="block py-[15px] px-5 text-black no-underline hover:bg-[#f4f4f4]">Projects</a>
            </li>
          )}
          <li className="md:float-left">
            <a href="#sideprojects" className="block py-[15px] px-5 text-black no-underline hover:bg-[#f4f4f4]">Side Projects</a>
          </li>
          <li className="md:float-left">
            <a href="#blog" className="block py-[15px] px-5 text-black no-underline hover:bg-[#f4f4f4]">Blog</a>
          </li>
          <li className="md:float-left">
            <a href="#contact" className="block py-[15px] px-5 text-black no-underline hover:bg-[#f4f4f4]">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
