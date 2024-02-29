import React from "react";
import Image from "next/image";

const ProjectItems = ({ img, title }) => {
  return (
    <div className="card">
      <div className="card">
        <Image src={img}></Image>
      </div>
    </div>
  );
};

export default ProjectItems;
