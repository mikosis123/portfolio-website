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
          am proficient in HTML, CSS, JavaScript, ReactJS, NextJS, TypeScript,
          TailwindCSS, Bootstrap, Node.js, and Express, and I have recently
          expanded my skill set to include Solidity programming, smart contract
          development, and DApp creation. My expertise in Git for version
          control, RESTful API design, and with minor database management with
          MySQL and MongoDB ensures robust data handling and seamless
          collaboration in development environments. I thrive on learning new
          technologies and solving complex problems, always striving for
          excellence in every project&quot;
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
