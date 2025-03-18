import React, { use, useState } from "react";
import ProjectItems from "./ProjectItems";
import musicapp from "../assets/music app.png";
import countdown from "../assets/count down.jpg";
import netflixe from "../assets/netflix.png";
import calculater from "../assets/Screenshot 2023-12-23 042216.png";
import tweeterclone from "../assets/tweeterclone.jpg";
import apple from "../assets/apple replica image.jpeg";
import voting from "../assets/votingimage.webp";
import { Button } from "@nextui-org/react";
import Link from "next/link";

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
          className={
            !web2pro
              ? ` inline-flex items-center px-4 py-2 text-sm font-medium  border  rounded-s-lg bg-gray-900 text-white  `
              : `inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white `
          }
        >
          <svg
            className="w-3 h-3 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm7.93 9h-3.95a16.086 16.086 0 0 0-1.66-6.13 8.02 8.02 0 0 1 5.61 6.13ZM12 4a14.11 14.11 0 0 1 2 6h-4a14.11 14.11 0 0 1 2-6ZM4.07 11a8.02 8.02 0 0 1 5.61-6.13A16.086 16.086 0 0 0 8.02 11H4.07Zm0 2h3.95a16.086 16.086 0 0 0 1.66 6.13A8.02 8.02 0 0 1 4.07 13Zm7.93 7a14.11 14.11 0 0 1-2-6h4a14.11 14.11 0 0 1-2 6Zm2.32-.87a16.086 16.086 0 0 0 1.66-6.13h3.95a8.02 8.02 0 0 1-5.61 6.13Z" />
          </svg>
          Web 2 projects
        </button>

        <button
          type="button"
          onClick={() => {
            setWeb2pro(true);
          }}
          className={
            web2pro
              ? ` inline-flex items-center px-4 py-2 text-sm font-medium  border  rounded-s-lg bg-gray-900 text-white  `
              : `inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white `
          }
        >
          <svg
            className="w-3 h-3 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0L4 6l8 6 8-6-8-6zm0 24l8-6-8-6-8 6 8 6zm0-8.5l6-4.5-6-4.5-6 4.5 6 4.5z" />
          </svg>
          Web 3 projects
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
            <div>
              <p>
                This is a Web3 app that enables voting on public proposals,
                developed from smart contract creation to UI integration using
                Next.js and the Thirdweb SDK
              </p>
              <div className="flex gap-4 mt-24">
                <Button
                  color="secondary"
                  onClick={() =>
                    window.open("https://voting-app-five-eta.vercel.app/")
                  }
                >
                  Live Site
                </Button>
                <Button
                  color="secondary"
                  onClick={() =>
                    window.open("https://github.com/mikosis123/VOTING-APP")
                  }
                >
                  GitHub Code
                </Button>
              </div>
            </div>
            <div className="flex">
              <div className="space-y-2">
                <Link
                  href="https://github.com/mikosis123/NFT-Foundry"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.29 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.206.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.49.997.108-.774.42-1.305.763-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.237-3.22-.124-.303-.536-1.522.116-3.17 0 0 1.01-.323 3.31 1.23a11.5 11.5 0 0 1 3.02-.405c1.02.006 2.05.138 3.02.405 2.3-1.553 3.31-1.23 3.31-1.23.652 1.648.24 2.867.116 3.17.77.84 1.237 1.91 1.237 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.82 1.096.82 2.21v3.293c0 .32.19.694.8.576C20.57 22.09 24 17.58 24 12.296 24 5.67 18.627.297 12 .297z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Foundry Fund-Me Project
                </Link>

                <Link
                  href="https://github.com/mikosis123/foundry-FundME"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.29 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.206.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.49.997.108-.774.42-1.305.763-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.237-3.22-.124-.303-.536-1.522.116-3.17 0 0 1.01-.323 3.31 1.23a11.5 11.5 0 0 1 3.02-.405c1.02.006 2.05.138 3.02.405 2.3-1.553 3.31-1.23 3.31-1.23.652 1.648.24 2.867.116 3.17.77.84 1.237 1.91 1.237 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.82 1.096.82 2.21v3.293c0 .32.19.694.8.576C20.57 22.09 24 17.58 24 12.296 24 5.67 18.627.297 12 .297z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Foundry NFT-Minter Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
