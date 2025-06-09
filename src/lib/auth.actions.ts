'use server';
import axios from "axios";
import { redirect } from "next/navigation";
import { RegisterFormDataTypes } from "./types";
export async function signup(data: RegisterFormDataTypes) {
  try {
    const response = await axios.post("/api/auth/register", data);
    console.log(response.status);
    if (response.status === 200) {
      // Redirect to OTP page, e.g. /otp
      console.log("in");
      redirect("/otp-verification");
    } else {
      // handle error, show message
      alert(response.data.error || "Signup failed");
    }
    console.log("Login success:", response.data);
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
  }
}
