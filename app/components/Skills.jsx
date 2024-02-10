import React from "react";
import Redux from "../assets/skillsIcon/Redux";
import Nexticon from "../assets/skillsIcon/Nexticon";
import NodeIcon from "../assets/skillsIcon/NodeIcon";
import Reactlogo from "../assets/skillsIcon/Reactlogo";
import Tailwind from "../assets/skillsIcon/Tailwind";
import JavascriptIcon from "../assets/skillsIcon/JavascriptIcon";
import Typescript from "../assets/skillsIcon/Typescript";

const Skills = () => {
  return (
    <div className="flex justify-center item-between">
      <NodeIcon />
      <Reactlogo />
      <Nexticon />
      <Typescript />
      <JavascriptIcon />
      <Redux />
      <Tailwind />
    </div>
  );
};

export default Skills;
