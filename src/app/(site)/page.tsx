import {Hero} from "@/components/hero";
import {Stats} from "@/components/stats";
import {Marquee} from "@/components/marquee";
import {Experience} from "@/components/experience";
import {Projects} from "@/components/projects";
import {Skills} from "@/components/skills";
import {Writing} from "@/components/writing";
import {Contact} from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <Experience />
      <Projects />
      <Skills />
      <Writing />
      <Contact />
    </>
  );
}
