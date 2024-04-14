import Lottie from "lottie-react";
import React from "react";
import animationdata from "../assets/Animation -lottie.json";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" flex flex-col md:flex-row md:justify-around item-center bg-[#97b2f4]  md:pl-20 py-16"
    >
      <Lottie
        className=" flex sm:mx-auto md:mx-10 w-[300px]"
        animationData={animationdata}
      />
      <div className="md:w-[60%]">
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e] pb-10">
          Contact Me
        </h1>
        <form
          action="https://getform.io/f/lakmnyja"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-[80%] mx-auto py-2">
            <div className="flex flex-col ">
              <label className="uppercase text-sm py-2" htmlFor="">
                Name
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="">
                Phone
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2" htmlFor="">
                Email
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2" htmlFor="">
                Subject
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2" htmlFor="">
                Message
              </label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                rows="2"
                type="text"
                name="message"
              ></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
