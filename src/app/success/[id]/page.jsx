"use server";
import { orderedMail } from "@/actions/order";
import Order from "@/models/Order";
import React from "react";

const Success = async ({ params }) => {
  const updateEmail = await orderedMail(params.id);
  return (
    <div className="grid items-center justify-center h-[90vh]">
      {updateEmail && (
        <div className="flex justify-center items-center gap-10 flex-col">
          <img src="/success.png" className="w-40 h-40" />
          <h1 className="text-4xl text-green-500">Successfull payment</h1>
        </div>
      )}
    </div>
  );
};

export default Success;
