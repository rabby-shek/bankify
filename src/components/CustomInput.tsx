import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";
const formSchema = authFormSchema("Sign Up");
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeHolder: string;
}
const CustomInput = ({ control, name, label, placeHolder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeHolder}
              className="input-class"
              type={name === "password" ? "password" : "text"}
              {...field}
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
