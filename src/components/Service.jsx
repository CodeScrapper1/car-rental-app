"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/contants/motion";
import TitleText from "./TitleText";
import styles from "@/contants/styles";

const Service = ({ service }) => {
  return (
    <section className="">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} grid grid-cols-1 mt-10 mx-auto gap-5`}
      >
        <TitleText title={service.title} />
        <motion.div
          variants={service.variant1}
          className="flex justify-center items-center flex-col"
        >
          <p className="font-normal text-sm lg:text-lg text-slate-400 text-center leading-6 w-full max-w-7xl mb-5">
            {service.text}
          </p>
          <div className="w-11/12 lg:w-10/12">
            <img
              src={service.img}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;
