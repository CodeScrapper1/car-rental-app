"use client";
import React from "react";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
const InputForm = ({ control, id, label, placeholder, type }) => {
  return (
    <div>
      <Label htmlFor={id} className="font-semibold text-md">
        {label}
      </Label>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem className="border-gray-300 bg-slate-100 border my-3">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="bg-slate-100"
                {...field}
                type={type}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputForm;
