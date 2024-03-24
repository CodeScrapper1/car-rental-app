import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/contants/motion";
import styles from "@/contants/styles";

const Feedback = () => {
  return (
    <section className="xs:p-8 my-6 sm:my-2 px-[10%]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-6`}
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-5xl text-[26px] border-5 border-l-third-color mb-3">
              Where Luxury Drives Excellence
            </h4>
            <p className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
              Code scrapper is your premier choice for a brand-new chauffeured
              car service in Melbourne.
            </p>
          </div>
          <p className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
            “We pride ourselves on being just the right size chauffeured car
            business – not too big, not to small. This means we have a small but
            experienced team of drivers, dedicated to providing the highest
            quality service in town. We promise to always have a car that suits
            your needs and service with a smile. Book your next luxury ride
            today.”
          </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <img
            src="/aboutus.png"
            className="px-0 lg:px-4 xl:px-14 w-full h-auto object-cover rounded-3xl"
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
