import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title:
      "Full Stack Web 2 and Web 3  Front End Web || Smart-Contract Developer (freelancing)",
    duration: "2 Years",
    details:
      " Passionate junior full-stack developer specializing in Web3 and DApp development, with expertise in Solidity, ReactJS, NextJS, and Node.js. I build secure smart contracts, scalable decentralized applications",
  },
  {
    year: 2022,
    title: " Front End Web Developer at Terakiapp Intern",
    duration: "3 months",
    details:
      "At TerakiApp, I delved into the world of Next.js, mastering its capabilities to build robust and performant frontend solutions. Through hands-on projects and collaborative efforts, I deepened my understanding of React-based frameworks, enhancing my proficiency in crafting dynamic user interfaces. ",
  },
];

const Expriance = () => {
  return (
    <div id="edu" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold  text-center text-[#001b5e] pb-10">
        Work Expriance
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

export default Expriance;
