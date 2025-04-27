"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  signIn, signUp } from "@/lib/actions/user.action";
const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // sign up with AppWrite and create plaid token

      if (type === "Sign Up") {
        const newUser = await signUp(data);
        setUser(newUser);
      }
      if (type === "Sign In") {
        console.log("logging in");
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
       
        console.log(response);
        if (response) router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
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
        <div>Link your account to get started</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === "Sign Up" && (
              <>
                <div className="flex justify-center gap-4">
                  <CustomInput
                    control={form.control}
                    name="firstName"
                    label="First Name"
                    placeHolder="Suvo"
                  />
                  <CustomInput
                    control={form.control}
                    name="lastName"
                    label="Last Name"
                    placeHolder="Shek"
                  />
                </div>
                <CustomInput
                  control={form.control}
                  name="address1"
                  label="Address"
                  placeHolder="Street, City "
                />
                <CustomInput
                  control={form.control}
                  name="city"
                  label="City"
                  placeHolder="ex: New York"
                />
                <div className="flex justify-center gap-4">
                  <CustomInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeHolder="ex: BN or NY"
                  />
                  <CustomInput
                    control={form.control}
                    name="postalCode"
                    label="Postal Code"
                    placeHolder=" ex: 1223"
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <CustomInput
                    control={form.control}
                    name="dateOfBirth"
                    label="Date of Birth"
                    placeHolder="YYYY-MM-DD"
                  />
                  <CustomInput
                    control={form.control}
                    name="ssn"
                    label="SSN"
                    placeHolder="Ex: 1234"
                  />
                </div>
              </>
            )}
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeHolder="example@gmail.com"
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeHolder="$Password123"
            />
            <div className="flex flex-col gap-4">
              <Button className="form-btn" disabled={isLoading} type="submit">
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    &nbsp; Loading...
                  </>
                ) : type === "Sign In" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}
      <footer className="flex justify-center gap-1 mt-4">
        <p className="text-14 font-semibold">
          {type === "Sign In"
            ? "Don't have an account?"
            : "Already have an account?"}
          <Link
            className="form-link"
            href={type === "Sign In" ? "sign-up" : "/sign-in"}
          >
            {type === "Sign In" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default AuthForm;
