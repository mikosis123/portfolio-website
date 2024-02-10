import React from "react";
import { Button } from "@nextui-org/react";
import Lottie from "lottie-react";
import animationdata from "../assets/Animation -lottie.json";

const Resume = () => {
  return (
    <div className="flex justify-center flex-start">
      {/* <Lottie animationData={animationdata} /> */}

      <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-10">
          Resume
        </h1>
        <a href="https://m.media-amazon.com/images/I/51n8Y559qtL._AC_UF1000,1000_QL80_.jpg">
          <p className="flex justify-center text-sm">Click here to Download</p>
        </a>
        <div className="flex justify-center p-6">
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1XGhkC3V9X4nSkXDdU3OI7zVmcwr1p2xt"
              )
            }
            className="px-10"
            color="secondary"
            variant="ghost"
          >
            Ghost
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
