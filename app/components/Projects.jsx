import React, { use, useState } from "react";
import ProjectItems from "./ProjectItems";
import musicapp from "../assets/music app.png";
import countdown from "../assets/count down.jpg";
import netflixe from "../assets/netflix.png";
import calculater from "../assets/Screenshot 2023-12-23 042216.png";
import tweeterclone from "../assets/tweeterclone.jpg";
import apple from "../assets/apple replica image.jpeg";
import voting from "../assets/votingimage.webp";

const Projects = () => {
  const [web2pro, setWeb2pro] = useState(false);

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

      <div
        className="inline-flex rounded-md shadow-sm my-10 justify-center w-full "
        role="group"
      >
        <button
          type="button"
          onClick={() => {
            setWeb2pro(false);
          }}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          {/* <svg
            className="w-3 h-3 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg> */}
          Web 2 projucts
        </button>

        <button
          type="button"
          onClick={() => {
            setWeb2pro(true);
          }}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          {/* <svg
            className="w-3 h-3 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg> */}
          Web 3 projucts
        </button>
      </div>

      <div>
        {!web2pro ? (
          <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItems
              img={tweeterclone}
              liveSiteLink={"https://courageous-lily-4450c0.netlify.app/"}
              githubLink={"https://github.com/mikosis123/Twitter-clone"}
              description=" Twitter-like social media clone using Next.js, Tailwind CSS, and Firebase, where users can post, comment, like, and delete posts."
            />
            <ProjectItems
              img={musicapp}
              liveSiteLink={"https://song-app-psi.vercel.app/"}
              githubLink={"https://github.com/mikosis123/Song-App"}
              description="Song app where you can perform CRUD operations on any song on the frontend. I use Next.js and Tailwind CSS, along with Redux Toolkit for state management, and for the backend, Node.js with MongoDB database and Cloudinary for cloud storage."
            />
            <ProjectItems
              img={netflixe}
              liveSiteLink={"https://netflix-clone1-f593e.web.app/"}
              githubLink={"https://github.com/mikosis123/Netflix-clone"}
              description=" a Netflix clone showcasing the latest movies sourced from a movie database API, using React.js."
            />

            <ProjectItems
              img={apple}
              liveSiteLink={"https://apple-website-with-react.vercel.app/"}
              githubLink={
                "https://github.com/mikosis123/Apple-website-with-react"
              }
              description="Apple replica website built from scratch using React"
            />

            <ProjectItems
              img={countdown}
              liveSiteLink={"https://25-clock-snowy.vercel.app/"}
              githubLink={"https://github.com/mikosis123/25-clock"}
              description=" Simple countdown timer set for a given duration of time, and implement an alarm using Vanilla JavaScript for a FreeCodeCamp project"
            />
            <ProjectItems
              img={calculater}
              liveSiteLink={"https://bespoke-blancmange-b95ea7.netlify.app/"}
              githubLink={
                "https://github.com/mikosis123/-JavaScript-Calculator"
              }
              description="FreeCodeCamp project: A simple calculator built with Vanilla JavaScript"
            />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItems
              img={voting}
              liveSiteLink={"https://voting-app-five-eta.vercel.app/"}
              githubLink={"https://github.com/mikosis123/VOTING-APP"}
              description=" This is a Web3 app that enables voting on public proposals, developed from smart contract creation to UI integration using Next.js and the Thirdweb SDK"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
