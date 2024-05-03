import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";

import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Project } from "../../types/types";
import "./projectCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card
      className="max-w-md m-6 rounded-lg shadow-lg"
      sx={{ minWidth: "300px", bgcolor: "rgb(233, 239, 242)", margin: "10px" }}
    >
      <Slider {...settings}>
        {project.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Project ${image}`} />
          </div>
        ))}
      </Slider>
      <CardContent>
        <Typography variant="h5" component="h2" className="mb-4">
          {project.title}
        </Typography>
        {project.description.split("\n").map((line, index) => (
          <Typography
            key={index}
            variant="body1"
            className="mb-2" // Adjust margin as needed
            sx={{ marginTop: index === 0 ? "10px" : 0 }} // Add marginTop for first line
          >
            {line}
          </Typography>
        ))}
        {project.github && (
          <div className="flex flex-wrap gap-2 mt-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ marginRight: "5px" }} />
              GitHub
            </a>
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon style={{ marginRight: "5px" }} />
                Youtube
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <OpenInNewIcon style={{ marginRight: "5px" }} />
                Demo
              </a>
            )}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 rounded skill">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
