import React from "react";
import ProjectItems from "./ProjectItems";
import musicapp from "../assets/music app.png";
import countdown from "../assets/count down.jpg";
import netflixe from "../assets/netflix.png";
import calculater from "../assets/Screenshot 2023-12-23 042216.png";
import tweeterclone from "../assets/tweeterclone.jpg";
import apple from "../assets/apple replica image.jpeg";

const Projects = () => {
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
      <div className="grid sm:grid-cols-2 gap-12">
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
          img={tweeterclone}
          liveSiteLink={"https://twitter-clone-sooty-alpha.vercel.app/"}
          githubLink={"https://github.com/mikosis123/Twitter-clone"}
          description=" Twitter-like social media clone using Next.js, Tailwind CSS, and Firebase, where users can post, comment, like, and delete posts."
        />
        <ProjectItems
          img={apple}
          liveSiteLink={"https://apple-website-with-react.vercel.app/"}
          githubLink={"https://github.com/mikosis123/Apple-website-with-react"}
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
          githubLink={"https://github.com/mikosis123/-JavaScript-Calculator"}
          description="FreeCodeCamp project: A simple calculator built with Vanilla JavaScript"
        />
      </div>
    </div>
  );
};

export default Projects;
