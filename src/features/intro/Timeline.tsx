import React from "react";
import { Paper, Typography } from "@mui/material";
import "./timeLine.css";
import { experiences } from "./experience_data";

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <h2 className="text-xl font-semibold mb-4">My Journey</h2>
      <div className="lists">
        {experiences.map((experience, index) => (
          <div key={index} className="item">
            <div className="date">
              <Typography variant="body1">{experience.date}</Typography>
            </div>
            <div className="line-container">
              <div className="dot"></div>
              <Paper key={index} elevation={3} className="card" sx={{ minWidth: "300px", bgcolor: "rgb(233, 239, 242)" }}>
                <Typography variant="h6" className="card-title">
                  {experience.title}
                </Typography>
                {experience.description.split("\n").map((line, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    className="mb-2" // Adjust margin as needed
                    sx={{ marginTop: index === 0 ? "10px" : 0 }} // Add marginTop for first line
                  >
                    {line}
                  </Typography>
                ))}
              </Paper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
