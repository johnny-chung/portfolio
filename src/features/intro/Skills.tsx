import React from "react";
import { useTransition, animated } from "react-spring";
import { skillsData } from "./skills_data";
import './skills.css'

const SkillsShowcase: React.FC = () => {
  // Define the animation transitions for skills
  const transitions = useTransition(skillsData, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { mass: 1, tension: 120, friction: 14 }, // Animation config for all skills
    trail: 50, // Delay between each skill
  });

  return (
    <div className="mt-8 skills-container">
      <h2 className="text-xl font-semibold mb-4">What I Can Offer</h2>
      <div className="flex flex-wrap space-x-2">
        {transitions((style, item) => (
          <animated.span
            key={item}
            className="px-2 py-1 rounded skill"
            style={style}
          >
            {item}
          </animated.span>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;
