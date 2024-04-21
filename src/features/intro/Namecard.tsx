// src/components/NameCard.tsx
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
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
      <div className="name-card">
        <Avatar
          alt="Johnny"
          src="/path/to/avatar.jpg"
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
      <div className="links">
        {/* Replace href with your actual links */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:your-email@example.com">Email</a>
      </div>
    </div>
  );
};

export default NameCard;
