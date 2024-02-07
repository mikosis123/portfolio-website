import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold  text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 font-normal text-stone-500">
        A paragraph is a self-contained unit of discourse in writing dealing
        with a particular point or idea. Though not required by the orthographic
        conventions of any language with a writing system, paragraphs are a
        conventional means of organizing extended segments of prose.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems />
        <ProjectItems />
        <ProjectItems />
        <ProjectItems />
      </div>
    </div>
  );
};

export default Projects;
