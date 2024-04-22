import React from "react";
import NameCard from "./Namecard";
import SkillsShowcase from "./Skills";
import Timeline from "./Timeline";
import BackToTopButton from "../../ui/BackToTopBtn";

const Intro: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <NameCard />
      <SkillsShowcase />
      <Timeline />
      <BackToTopButton />
    </div>
  );
};

export default Intro;
