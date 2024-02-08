import React from "react";
import imageer from "../assets/greenbg.png";
import Image from "next/image";

const Work = () => {
  return (
    <div
      id="work"
      className=" flex justify-center w-full   bg-[#97b2f4] slant-bottom md:pl-20 p-4 py-16 "
    >
      <div id="edu" className="m-auto md:pl-20 p-4 py-16  slant-bottom  ">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-10">
          About me
        </h1>
        From the moment I produced 'Hello World' in the console of my first
        application, I knew I was hooked into the world of software development.
        My specialities include quickly learning new skills and programming
        languages, problem solving, responsive design principles, website
        optimization,. So far I have HTML, CSS, Javascript, ReactJS,
        Typescript,Javascript,TailwindCSS, Bootstrap, Node.JS, Express.
      </div>

      <Image height={400} width={400} src={imageer}></Image>
    </div>
  );
};

export default Work;
