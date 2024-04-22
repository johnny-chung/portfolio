// src/components/ProjectList.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectData";
import BackToTopButton from "../../ui/BackToTopBtn";

const ProjectList: React.FC = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <BackToTopButton />
    </div>
  );
};

export default ProjectList;
