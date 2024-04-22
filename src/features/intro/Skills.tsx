// src/components/SkillsShowcase.tsx
import React from "react";
import "./skills.css"; // Import the CSS file
import { skillsData } from "./skills_data";

const SkillsShowcase: React.FC = () => {
  return (
    <div className="mt-8 skills-container">
      {" "}
      {/* Add the skills-container class */}
      <h2 className="text-xl font-semibold mb-4">What I know</h2>
      <div className="flex flex-wrap space-x-2">
        {/* Use the .skill class for each skill */}
        {skillsData.map((skill, index) => (
          <span key={index} className="px-2 py-1 rounded skill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;
