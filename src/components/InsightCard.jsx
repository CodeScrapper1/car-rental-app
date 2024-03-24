import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/contants/motion";
import { useRouter, useSearchParams } from "next/navigation";

const InsightCard = ({ imgUrl, title, subtitle, index, isForm, form }) => {
  const searchParams = useSearchParams();
  const option = searchParams.get("option");
  const router = useRouter();
  return (
    <motion.div
      variants={fadeIn("up", "string", index * 0.5, 1)}
      className="flex justify-center md:flex-row flex-col gap-4"
    >
      <img
        src={imgUrl}
        className="md:w-[350px] w-full h-[250px] rounded-[32px] object-cover"
        alt=""
      />
      <div>
        <div className="flex justify-between">
          <h4 className="font-extrabold text-slate-500 lg:text-[42px] text-[26px]">
            {title}
          </h4>
          {isForm && (
            <button
              onClick={() => {
                form.setValue("imgUrl", imgUrl);
                form.setValue("title", title);
                form.setValue("subtitle", subtitle);
                router.push(`/booking?index=2&option=${index}`);
              }}
              className={`${
                option == index
                  ? "bg-third-color text-white"
                  : "bg-slate-200 text-slate-500"
              } h-12 teext-md px-7 rounded-full`}
              disabled={option == index ? true : false}
            >
              Select
            </button>
          )}
        </div>
        <p className="mt-4 font-normal lg:text-lg text-sm text-slate-400">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default InsightCard;
