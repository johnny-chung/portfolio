import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectData";
import BackToTopButton from "../../ui/BackToTopBtn";
import { useTrail, animated } from "react-spring";

const ProjectList: React.FC = () => {
  const trail = useTrail(projectsData.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 500, // Initial delay before the animation starts
  });

  return (
    <div className="container mx-auto px-4 py-8 flex flex-wrap justify-center">
      {trail.map((style, index) => (
        <animated.div key={projectsData[index].id} style={style}>
          <ProjectCard project={projectsData[index]} />
        </animated.div>
      ))}
      <BackToTopButton />
    </div>
  );
};

export default ProjectList;
