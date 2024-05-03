import React from "react";
import NameCard from "./Namecard";
import SkillsShowcase from "./Skills";
import Timeline from "./Timeline";
import BackToTopButton from "../../ui/BackToTopBtn";
import { useSpring, animated } from "react-spring";

const Intro: React.FC = () => {
  const timelineProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 4000, duration: 2000  }, // Animation duration of 1000 milliseconds (1 second) with a delay of 1000 milliseconds (1 second)
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <NameCard />
      <SkillsShowcase />
      <animated.div style={timelineProps}>
        <Timeline />
      </animated.div>
      <BackToTopButton />
    </div>
  );
};

export default Intro;
