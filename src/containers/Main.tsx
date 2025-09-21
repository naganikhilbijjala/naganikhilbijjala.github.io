import React from "react";
import Header from "@/components/header";
import Greeting from "@/containers/greeting/Greeting";
import Skills from "@/containers/skills/Skills";
import StackProgress from "@/containers/skillProgress/skillProgress";
import WorkExperience from "@/containers/workExperience/WorkExperience";
import Projects from "@/containers/projects/Projects";
import SideProjects from "@/containers/sideProjects/SideProjects";
import BlogSection from "@/containers/blog/BlogSection";
import Footer from "@/components/footer";
import Education from "@/containers/education/Education";
import ScrollToTopButton from "@/containers/topbutton/Top";
import Profile from "@/containers/profile/Profile";

const Main = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <SideProjects />
        <BlogSection />
        <Profile />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Main;
