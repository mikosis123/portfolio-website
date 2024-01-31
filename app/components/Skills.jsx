import React from "react";
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  // Add more skills as needed
];

const SkillBar = ({ level }) => (
  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div
      className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
      style={{ width: `${level}%` }}
    >
      {" "}
      {level}%
    </div>
  </div>
);
const Skills = () => (
  <div className="space-y-4">
    {skills.map((skill, index) => (
      <div key={index} className="space-y-1">
        <h4 className="text-lg font-medium">{skill.name}</h4>
        <SkillBar level={skill.level} />
      </div>
    ))}
  </div>
);

export default Skills;
