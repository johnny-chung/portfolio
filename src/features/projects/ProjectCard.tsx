import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";
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
      className="max-w-xs m-6 rounded-lg shadow-lg"
      sx={{ minWidth: "300px", bgcolor: "#eee9ea" }}
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
        <Typography
          variant="body1"
          className="mb-6"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          {project.description}
        </Typography>
        <div className="flex flex-wrap gap-2">
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
