import React from "react";
import Image from "next/image";
import "./project.css";
import { Button } from "@nextui-org/react";

const ProjectItems = ({ img, title }) => {
  return (
    <div>
      <div className="card z-10">
        <Image src={img}></Image>
        <div className="card-content">{title}</div>
        <div className="absolute inset-0  flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
          <p className="text-center text-white text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloremque enim quam nobis! Dolorem perspiciatis laudantium
            repudiandae suscipit, natus et fugit voluptatum aperiam quaerat,
            illo voluptate dolores voluptatibus repellendus sed!
          </p>
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
