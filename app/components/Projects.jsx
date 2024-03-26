import React from "react";
import ProjectItems from "./ProjectItems";
import musicapp from "../assets/music app.png";
import netflixe from "../assets/netflix.png";
import tweeterclone from "../assets/tweeterclone.jpg";
import apple from "../assets/apple replica image.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold  text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 font-normal text-stone-500">
        showcase of my expertise in web development through a diverse array of
        projects. Dive into the realm of digital innovation as you explore
        meticulously crafted web applications designed to show my skills on
        development industry.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems
          img={musicapp}
          discription="showcase of my expertise in web development through a diverse array of
        projects. Dive into the realm of digital innovation as you explore
        meticulously crafted web applications designed to show my skills on
        development industry."
        />
        <ProjectItems
          img={tweeterclone}
          discription="showcase of my expertise in web development through a diverse array of
        projects. Dive into the realm of digital innovation as you explore
        meticulously crafted web applications designed to show my skills on
        development industry."
        />
        <ProjectItems
          img={apple}
          discription="showcase of my expertise in web development through a diverse array of
        projects. Dive into the realm of digital innovation as you explore
        meticulously crafted web applications designed to show my skills on
        development industry."
        />
        <ProjectItems
          img={netflixe}
          discription="showcase of my expertise in web development through a diverse array of
        projects. Dive into the realm of digital innovation as you explore
        meticulously crafted web applications designed to show my skills on
        development industry."
        />
        <ProjectItems
          img={apple}
          discription="showcase of my expertise in web development through a diverse array of
        projects. Dive into the realm of digital innovation as you explore
        meticulously crafted web applications designed to show my skills on
        development industry."
        />
        <ProjectItems
          img={netflixe}
          discription="showcase of my expertise in web development through a diverse array of
        projects. Dive into the realm of digital innovation as you explore
        meticulously crafted web applications designed to show my skills on
        development industry."
        />
      </div>
    </div>
  );
};

export default Projects;
