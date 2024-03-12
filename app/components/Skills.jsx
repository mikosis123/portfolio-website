import React, { useEffect } from "react";
import Redux from "../assets/skillsIcon/Redux";
import Nexticon from "../assets/skillsIcon/Nexticon";
import NodeIcon from "../assets/skillsIcon/NodeIcon";
import Reactlogo from "../assets/skillsIcon/Reactlogo";
import Tailwind from "../assets/skillsIcon/Tailwind";
import JavascriptIcon from "../assets/skillsIcon/JavascriptIcon";
import Typescript from "../assets/skillsIcon/Typescript";
import FramerChilds from "./FramerChilds";
import { animate, motion, useMotionValue } from "framer-motion";
import { useMeasure } from "react-use";

const Skills = () => {
  const [ref, { width }] = useMeasure(); // Specify type for ref and destructure width
  const Xtransition = useMotionValue(0);

  useEffect(() => {
    let control;

    const finalPosition = width / 2 - 8; // Access width from useMeasure
    control = animate(Xtransition, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      control.stop(); // Use function form to stop animation
    };
  }, [Xtransition, width]); // Include width in dependencies

  return (
    <div className="overflow-x-hidden h-[200px] mt-10">
      <motion.div
        className="flex justify-center item-center gap-8 item-between "
        ref={ref}
        style={{ x: Xtransition }}
      >
        <div className=" flex justify-center item-center gap-10">
          <FramerChilds>
            <NodeIcon />
          </FramerChilds>
          <FramerChilds>
            <Reactlogo />
          </FramerChilds>
          <FramerChilds>
            <Nexticon />
          </FramerChilds>
          <FramerChilds>
            <Typescript />
          </FramerChilds>
          <FramerChilds>
            <JavascriptIcon />
          </FramerChilds>
          <FramerChilds>
            <Redux />
          </FramerChilds>
          <FramerChilds>
            <Tailwind />
          </FramerChilds>
          <FramerChilds>
            <NodeIcon />
          </FramerChilds>
          <FramerChilds>
            <Reactlogo />
          </FramerChilds>
          <FramerChilds>
            <Nexticon />
          </FramerChilds>
          <FramerChilds>
            <Typescript />
          </FramerChilds>
          <FramerChilds>
            <JavascriptIcon />
          </FramerChilds>
          <FramerChilds>
            <Redux />
          </FramerChilds>
          <FramerChilds>
            <Tailwind />
          </FramerChilds>
          <FramerChilds>
            <NodeIcon />
          </FramerChilds>
          <FramerChilds>
            <Reactlogo />
          </FramerChilds>
          <FramerChilds>
            <Nexticon />
          </FramerChilds>
          <FramerChilds>
            <Typescript />
          </FramerChilds>
          <FramerChilds>
            <JavascriptIcon />
          </FramerChilds>
          <FramerChilds>
            <Redux />
          </FramerChilds>
          <FramerChilds>
            <Tailwind />
          </FramerChilds>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
