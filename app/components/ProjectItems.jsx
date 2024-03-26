import React from "react";
import Image from "next/image";
import "./project.css";
import { Button } from "@nextui-org/react";

const ProjectItems = ({ img, title, discription }) => {
  return (
    <div>
      <div className="card z-10">
        <Image height={350} width={350} src={img} className=""></Image>
        <div className="card-content">{title}</div>
        <div className="absolute inset-0  flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
          <p className="text-center text-white text-sm">{discription}</p>
          <div className="flex gap-4 mt-24">
            <Button color="secondary">Live Site</Button>
            <Button color="secondary">GitHub Code</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
