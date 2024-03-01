import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion

type Props = {
  children: React.ReactNode;
};

const FramerChilds = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null); // Specify the type of ref
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2); // Corrected syntax for calculation
    const y = clientY - (top + height / 2); // Corrected syntax for calculation
    setPosition({ x, y });
  };

  return (
    <motion.div // Use motion.div for animation
      onMouseMove={mouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      ref={ref}
      animate={{ x: position.x, y: position.y }} // Use animate prop to define animation properties
      style={{ position: "relative" }} // Add necessary styling
    >
      {children}
    </motion.div>
  );
};

export default FramerChilds;
