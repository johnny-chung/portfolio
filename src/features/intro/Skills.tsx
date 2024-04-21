// src/components/SkillsShowcase.tsx
import React from "react";

const SkillsShowcase: React.FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex space-x-2">
        <span className="bg-gray-200 px-2 py-1 rounded">Web Development</span>
        <span className="bg-gray-200 px-2 py-1 rounded">Frontend</span>
        <span className="bg-gray-200 px-2 py-1 rounded">React</span>
        <span className="bg-gray-200 px-2 py-1 rounded">Python</span>
        {/* Add more skills as needed */}
      </div>
    </div>
  );
};

export default SkillsShowcase;
