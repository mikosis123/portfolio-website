import React from "react";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa"; // Importing icons

const skills = [
  {
    name: "JavaScript",
    level: 90,
    icon: <FaJsSquare className="text-yellow-500" size={22} />,
  },
  {
    name: "React",
    level: 85,
    icon: <FaReact className="text-blue-500" size={22} />,
  },
  {
    name: "Node.js",
    level: 80,
    icon: <FaNodeJs className="text-green-500" size={22} />,
  },
  // Add more skills as needed
];

const SkillBar = ({ level }) => (
  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div
      className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
      style={{ width: `${level}%` }}
    >
      {level}%
    </div>
  </div>
);

const Skills = () => (
  <div className="max-w-[1040px] m-auto space-y-4 bg-blue-700 p-4 slant-bottom">
    {skills.map((skill, index) => (
      <div key={index} className="flex items-center space-x-2">
        <div>{skill.icon}</div> {/* Display the icon */}
        <div className="flex-1 space-y-1">
          <h4 className="text-lg font-medium">{skill.name}</h4>
          <SkillBar level={skill.level} />
        </div>
      </div>
    ))}
  </div>
);

export default Skills;
