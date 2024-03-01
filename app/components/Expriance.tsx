import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Full Stack || Front End Web Developer (freelancing)",
    duration: "2 Years",
    details:
      " As a dedicated junior full-stack developer in the realm of freelancing, I bring a dynamic and versatile skill set to the table. With a strong foundation in JavaScript,Reactjs/Nextjs, I have seamlessly navigated both front-end and back-end development challenges",
  },
  {
    year: 2023,
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
