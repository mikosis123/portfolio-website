import React from "react";
import Image from "next/image";
import "./project.css";
import { Button } from "@nextui-org/react";

const ProjectItems = ({
  img,
  title,
  description,
  liveSiteLink,
  githubLink,
}) => {
  return (
    <div>
      <div className="card z-10 sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px]">
        <Image
          className="h-[350px] w-[350px] object-cover"
          height={350}
          width={350}
          src={img}
        ></Image>
        <div className="card-content">{title}</div>
        <div className="absolute inset-0  flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
          <p className="text-center text-white text-sm">{description}</p>
          <div className="flex gap-4 mt-24">
            <Button color="secondary" onClick={() => window.open(liveSiteLink)}>
              Live Site
            </Button>
            <Button color="secondary" onClick={() => window.open(githubLink)}>
              GitHub Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
