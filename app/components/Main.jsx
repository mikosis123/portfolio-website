import { TypeAnimation } from "react-type-animation";
import { Iconmain } from "../assets/Iconmain";

import Image from "next/image";
import mikipic from "../assets/main illustration.png";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

const Main = () => {
  const texter = {
    tx1: "I'm Mikiyas Sisay",
    tx2: "I am ",
  };
  return (
    <div id="main">
      <div className="w-full h-screen object-cover object-left  "></div>
      <div className="w-full h-screen absolute top-0 left-0  flex">
        <div className="max-w-[700px] m-auto  h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            {texter.tx1}
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            {texter.tx2}
            <TypeAnimation
              sequence={["Student", 1500, "Coder", 1500, "Developer", 1500]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.linkedin.com/in/mikiyas-sisay/">
              <FaLinkedin
                size={30}
                className="cursor-pointer hover:scale-110"
              />
            </a>

            <a href="https://instagram.com/praneet_084?igshid=OGQ5ZDc2ODk2ZA==">
              <FaGithub size={30} className="cursor-pointer hover:scale-110" />
            </a>
            <a href="https://t.me/Mikiyas_sisay">
              <FaTelegram
                size={30}
                className="cursor-pointer hover:scale-110"
              />
            </a>
            <a href="https://x.com/praneet_K10?t=EqWgLxa43bT1Sx3ntllLVw&s=09">
              <FaTwitter size={30} className="cursor-pointer hover:scale-110" />
            </a>
          </div>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1XGhkC3V9X4nSkXDdU3OI7zVmcwr1p2xt"
              )
            }
            className=" bg-[#dcfce7] border-gray-300 border-4 rounded-lg mt-16 hover:bg-gray-400 text-gray-800 font-bold py-4 px-6  inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Cv</span>
          </button>
        </div>
        <Image className="h-[500px] my-auto mr-4 imageer" src={mikipic}></Image>
      </div>
    </div>
  );
};

export default Main;
