"use client";
import React from "react";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
const CitySelect = ({ control, id, label, placeholder, list, setValue }) => {
  return (
    <div>
      <Label htmlFor={id} className="font-semibold text-md">
        {label}
      </Label>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem>
            <Select
              onValueChange={(val) => {
                field.onChange(val);
                const res = val?.split(",");
                const result = [parseFloat(res[0]), parseFloat(res[1])];
                setValue(result);
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {list?.map((item, index) => (
                  <SelectItem
                    key={index}
                    value={`${item?.latitude},${item?.longitude}`}
                  >
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CitySelect;
