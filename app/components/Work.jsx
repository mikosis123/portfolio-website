import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import imageer from "../assets/greenbg.png";
import Image from "next/image";

const Work = () => {
  return (
    <div
      id="work"
      className="md:flex-row flex flex-col justify-center w-full bg-[#97b2f4] slant-bottom md:pl-20 p-4 py-16"
    >
      <div id="edu" className="m-auto md:pl-20 p-4 py-16 slant-bottom">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-10">
          About me
        </h1>
        <h3>
          From the instant I typed 'Hello World' into my console, I was hooked
          on software development. Originally trained as a mechanical engineer,
          I pivoted to full stack development, driven by my fascination with
          building and optimizing digital solutions. I excel at swiftly learning
          new skills and programming languages, solving problems, and enhancing
          websites. My toolkit includes HTML, CSS, JavaScript, ReactJS,
          TypeScript, TailwindCSS, Bootstrap, Node.js, and Express. My fluency
          extends to Git for version control, RESTful API design, and
          server-side scripting with Node.js. I wield advanced knowledge in
          database management systems like MySQL and MongoDB, ensuring robust
          data handling. With a robust understanding of GitHub workflows, I am
          primed to deliver excellence in collaborative development
          environments.
        </h3>
      </div>

      <Image
        className="mx-auto"
        alt="learners"
        height={400}
        width={400}
        src={imageer}
      />
    </div>
  );
};

export default Work;
