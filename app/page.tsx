"use client";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
