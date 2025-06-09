"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signup } from "@/lib/auth.actions";
import { registerSchema } from "@/schemas/authSchemas";
import { RegisterFormDataTypes } from "@/lib/types";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormDataTypes>({
    resolver: zodResolver(registerSchema),
  });

  const email = watch("email");
  const password = watch("password");
  const isDisabled = !email || password.length < 6;

  const onSubmit = async (data: RegisterFormDataTypes) => {
    signup(data);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-black w-full max-w-lg p-6 rounded-2xl shadow-2xl border-1">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Bankify
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-2">
            <div>
              <Input
                className="text-white"
                type="text"
                placeholder="First Name"
                {...register("first_name")}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className="text-white"
                type="text"
                placeholder="Last Name"
                {...register("last_name")}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Input
              className="text-white"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Input
              className="text-white"
              type="text"
              placeholder="Enter your address"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-2">
            <div>
              <Input
                className="text-white"
                type="text"
                placeholder="State example: NY"
                {...register("state")}
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className="text-white"
                type="text"
                placeholder="Postal Code"
                {...register("postal_code")}
              />
              {errors.postal_code && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.postal_code.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-2">
            <div>
              <Input
                className="text-white"
                type="text"
                placeholder="Date of Birth"
                {...register("date_of_birth")}
              />
              {errors.date_of_birth && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date_of_birth.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className="text-white"
                type="text"
                placeholder="SSN Exm: 1224"
                {...register("ssn")}
              />
              {errors.ssn && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.ssn.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Input
              className="text-white"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isDisabled}>
            Submit
          </Button>
        </form>
        <div className="text-center text-white mt-4">
          Already have and account?
          <Link href="/" className="hover:underline font-medium">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
