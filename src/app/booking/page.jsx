"use client";
import { steps } from "@/contants/appdata";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import StepOne from "@/components/StepOne";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import StepFour from "@/components/StepFour";

const Booking = ({ searchParams }) => {
  const current = parseInt(searchParams.index) || 1;
  const form = useForm();
  
  return (
    <div className="pt-20">
      <div className="hidden lg:flex justify-center items-center mt-10 ml-24">
        <div className="grid grid-cols-4 gap-5 mt-5 items-center w-[75%]">
          {steps?.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-5">
                <svg
                  className="w-10 h-10 cursor-pointer"
                  viewBox="0 0 38 38"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 19C0 8.50547 8.50547 0 19 0C29.4945 0 38 8.50547 38 19C38 29.4945 29.4945 38 19 38C8.50547 38 0 29.4945 0 19ZM27.5945 15.7195C28.4035 14.9105 28.4035 13.5895 27.5945 12.7805C26.7855 11.9715 25.4645 11.9715 24.6555 12.7805L16.625 20.8109L13.3445 17.5305C12.5355 16.7215 11.2145 16.7215 10.4055 17.5305C9.59648 18.3395 9.59648 19.6605 10.4055 20.4695L15.1555 25.2195C15.9645 26.0285 17.2855 26.0285 18.0945 25.2195L27.5945 15.7195Z"
                    fill={current >= index + 1 ? "#26d4e0" : "black"}
                  />
                </svg>
                {index !== 3 && (
                  <div
                    className={`w-full h-0.5 ${
                      current > index + 1 ? "bg-third-color" : "bg-black"
                    } rounded`}
                  ></div>
                )}
              </div>
              <p className="w-full font-roboto font-semibold text-sm uppercase my-2 text-slate-400">
                Step {index + 1}
              </p>
              <p className="w-full font-roboto font-semibold text-sm uppercase text-slate-400">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {current === 1 && <StepOne form={form} />}
      {current === 2 && <Insights isForm={true} form={form} />}
      {current === 3 && <Contact form={form} />}
      {current === 4 && <StepFour form={form} />}
      <div
        className={`${
          current == 4 ? "hidden" : "flex"
        } justify-between items-center px-[10%] py-3`}
      >
        <button className="bg-slate-100 px-10 py-3 rounded-full">Back</button>
        <Link
          href={`/booking?index=${current + 1}`}
          className="bg-third-color text-white px-10 py-3 rounded-full"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Booking;
