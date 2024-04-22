// src/components/ProjectList.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectData";

const ProjectList: React.FC = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
