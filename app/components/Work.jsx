import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Full Stack || Front End Web Developer (MERN Stack)",
    duration: "2 Years",
    details:
      'From the moment I produced "Hello World" in the console of my first application, I knew I was hooked into the world of software development. My specialities include quickly learning new skills and programming languages, problem solving, responsive design principles, website optimization,. So far I have HTML, CSS, Javascript, ReactJS, Typescript,Javascript,TailwindCSS, Bootstrap, Node.JS, Express.JS, Shopify, and Git/GitHub under my belt I also have mechanical engineerig degree. I`m still enthusiastically grabbing onto any other programming languages',
  },
];

const Work = () => {
  return (
    <div
      id="edu"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-green-100 slant-bottom"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-10">
        ABOUT ME
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
