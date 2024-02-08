import React from "react";
import { Button } from "@nextui-org/react";

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-10">
        Resume
      </h1>
      <a href="https://m.media-amazon.com/images/I/51n8Y559qtL._AC_UF1000,1000_QL80_.jpg">
        <p className="flex justify-center text-sm">Click here to Download</p>
      </a>
      <div className="flex justify-center p-6">
        <Button className="" color="secondary" variant="ghost">
          Ghost
        </Button>
      </div>
    </div>
  );
};

export default Resume;
