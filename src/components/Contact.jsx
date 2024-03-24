import React from "react";
import InputForm from "./InputForm";
import { Form } from "./ui/form";

const Contact = ({ form }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mx-10 md:mx-[10%] my-10">
        <Form {...form}>
          <form className="w-full bg-white p-5 shadow-md border">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputForm
                  id="firstname"
                  label="First Name"
                  control={form.control}
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputForm
                  id="lastname"
                  label="Last Name"
                  control={form.control}
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputForm
                  id="email"
                  label="Email"
                  control={form.control}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <InputForm
                  id="phoneNumber"
                  label="Phone Number"
                  control={form.control}
                  type="number"
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <InputForm
                  id="comment"
                  label="Comment"
                  control={form.control}
                  type="text"
                  placeholder="Enter a Comment"
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
