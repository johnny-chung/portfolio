import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Project } from "../../types/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
      <Card className="max-w-xs m-4 rounded-lg shadow-lg">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000} // 5 seconds
          infiniteLoop={true} // Loop back to the first slide after reaching the end
        >
          {project.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Project ${project.id}`} />
            </div>
          ))}
        </Carousel>
        <CardContent>
          <Typography variant="h5" component="h2" className="mb-2">
            {project.title}
          </Typography>
          <Typography variant="body1" className="mb-4">
            {project.description}
          </Typography>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default ProjectCard;