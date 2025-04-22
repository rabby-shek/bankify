"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="bg-white shadow rounded-xl w-full max-w-lg p-8">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-3">
        Bankify
      </h1>
      <p className="mb-5 text-center">
        {user
          ? "Link Account"
          : type === "Sign In"
          ? "Welcome back! Please enter your details."
          : "Please enter your details."}
      </p>
      {user ? (
        <div>Plaid link</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeHolder="Enter your email"
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeHolder="Enter your password"
            />
            <Button className="form-btn" type="submit">
              Log In
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default AuthForm;
