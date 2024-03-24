import React from "react";
import { IoMdContacts } from "react-icons/io";
import { MdCardTravel } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";

const Subfooter = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-[0_2px_15px_-3px-rgba(0,0,0,0.07),0_10px_20px_-2px-rgba(0,0,0,0.04)] md:flex-row relative">
      <img
        src="/lower-banner.jpg"
        alt=""
        className="h-96 w-full object-cover md:h-[60vh] lg:h-[80vh]"
      />
      <div className="flex flex-col justify-center gap-8 md:px-16 px-8 md:my-0 my-8">
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <MdCardTravel className="text-third-color" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-gray-900 font-bold">Wedding</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              Seeking Wedding Transportation Services? Contact Us to Customize
              Your Special Day!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <IoCarSport className="text-third-color" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-gray-900 font-bold">Our fleet</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              Discover the Perfect Ride for Any Event - What’s Your Selection?
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <IoMdContacts className="text-third-color" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-gray-900 font-bold">About Us</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              Discover Unmatched Luxury Travel with Limolux in Melbourne’s
              Finest Experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
