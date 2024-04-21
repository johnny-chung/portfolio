import React from "react";
import { Paper, Typography } from "@mui/material";
import "./timeLine.css";

interface Experience {
  date: string;
  title: string;
  description: string;
}

const experiences: Experience[] = [
  {
    date: "2018 - Present",
    title: "Software Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod nisi velit.",
  },
  {
    date: "2016 - 2018",
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod nisi velit.",
  },
  {
    date: "2016 - 2018",
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod nisi velit.",
  },
  {
    date: "2016 - 2018",
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod nisi velit.",
  },
  // Add more experiences as needed
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">    
    <h2 className="text-xl font-semibold mb-4">My Experience</h2>  
      <div className="lists">
        {experiences.map((experience, index) => (
          <div key={index} className="item">
            <div className="date">
              <Typography variant="body1">{experience.date}</Typography>
            </div>
            <div className="line-container">
              <div className="dot"></div>
              <Paper key={index} elevation={3} className="card">
                <Typography variant="h6" className="card-title">
                  {experience.title}
                </Typography>
                <Typography variant="body1" className="card-description">
                  {experience.description}
                </Typography>
              </Paper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
