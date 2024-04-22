import React from "react";
import { Paper, Typography } from "@mui/material";
import "./timeLine.css";
import { experiences } from "./experience_data";

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <h2 className="text-xl font-semibold mb-4">My Journery</h2>
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
