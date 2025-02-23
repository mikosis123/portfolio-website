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
          &quot;From the moment I typed &apos;Hello World&apos; into my console,
          I was captivated by software development. With a background in
          mechanical engineering, I transitioned into full-stack development,
          driven by my passion for creating and optimizing digital solutions. I
          am proficient in Solidity programming, smart contract development, and
          DApp creation, with hands-on experience using tools like Hardhat and
          Foundry. My expertise extends to front-end and back-end development,
          including HTML, CSS, JavaScript, ReactJS, NextJS, TypeScript,
          TailwindCSS, Bootstrap, Node.js, and Express. I am skilled in Git for
          version control, RESTful API design, and database management with
          MySQL and MongoDB, ensuring robust data handling and seamless
          collaboration in development environments. excellence in every
          project&quot;
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
