import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import SideProjects from "./sideProjects/SideProjects";
import BlogSection from "./blog/BlogSection";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";

const Main = () => {
  return (
    <div className="mt-0 pt-10 pb-10">
      <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <Education />
      <WorkExperience />
      <Projects />
      <SideProjects />
      <BlogSection />
      <Profile />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Main;
