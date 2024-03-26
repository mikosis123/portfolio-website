import React from "react";
import Image from "next/image";
import "./project.css";

const ProjectItems = ({ img, title }) => {
  return (
    <div>
      <div className="card z-10">
        <Image src={img}></Image>
      </div>
    </div>
  );
};

export default ProjectItems;
