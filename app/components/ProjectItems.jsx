import React from "react";
import "./project.css";
import Image from "next/image";

const ProjectItems = ({ img, title }) => {
  return (
    <div className="card">
      <Image src={img}></Image>
    </div>
  );
};

export default ProjectItems;
