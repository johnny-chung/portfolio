// src/components/NameCard.tsx
import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import "./nameCard.css"; // Import custom CSS for styling

const NameCard: React.FC = () => {
  useEffect(() => {
    const typingTimeout1 = setTimeout(() => {
      setTimeout(() => {
        document.getElementById("typing-text1")?.classList.add("typing");
      }, 100);
    }, 0); // Start typing "I am Johnny" immediately

    const typingTimeout2 = setTimeout(() => {
      setTimeout(() => {
        document.getElementById("typing-text2")?.classList.add("typing");
      }, 100);
    }, 2100); // Start typing "A software developer" after 3 seconds

    return () => {
      clearTimeout(typingTimeout1);
      clearTimeout(typingTimeout2);
    };
  }, []);
  return (
    <div className="name-card-container">
      <div className="overlay">
        <div className="name-card">
          <Avatar
            alt="Johnny"
            src="https://res.cloudinary.com/dp2anoz4i/image/upload/v1713816219/portfolio/DSC_0803_z6q4zn.jpg"
            sx={{ width: 120, height: 120 }}
            className="avatar-large"
          />
          <div className="name-card-text">
            <h1 id="typing-text1" className="text-4xl font-bold typing-text">
              <span>Johnny</span>
            </h1>
            <h2 id="typing-text2" className="typing-text">
              <span>{` A software developer`}</span>
            </h2>
          </div>
        </div>
        <h4 style={{ marginBottom: "12px" }}>
          <PlaceIcon style={{ marginRight: "5px" }} />
          GTA, Canada
        </h4>
        <div className="links">
          {/* Replace href with your actual links */}
          <a
            href="https://www.linkedin.com/in/johnny-wychung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ marginRight: "5px" }} />
            LinkedIn
          </a>
          <a
            href="https://github.com/johnny-chung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ marginRight: "5px" }} />
            GitHub
          </a>
          <a href="mailto:johnny.chung2046@gmail.com">
            <EmailIcon style={{ marginRight: "5px" }} />
            johnny.chung2046@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
