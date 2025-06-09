"use client";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
// Zod schema
const otpSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits")
    .regex(/^\d{6}$/, "OTP must be numeric"),
});

type OtpForm = z.infer<typeof otpSchema>;

export default function InputOTPDemo() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OtpForm>({
    resolver: zodResolver(otpSchema),
  });
  const router = useRouter();
  const otp = watch("otp");

  const onSubmit = async (data: OtpForm) => {
    try {
      const response = await axios.post("/api/auth/verify-otp", {
        otp_code: data.otp,
      });
      console.log("trying");

      console.log("Success:", response.data);
      router.push("/dashboard"); // ✅ Redirect on success
    } catch (error: any) {
      console.error("Error verifying OTP:", error.response.data.message);
      // You can set error state here to show in UI if needed
    }
    // TODO: Submit to backend
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <Card className="bg-black w-full max-w-sm p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-4"
        >
          <InputOTP
            maxLength={6}
            value={otp || ""}
            onChange={(value) => setValue("otp", value)}
            className="text-white flex justify-between gap-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} className="text-white" />
              <InputOTPSlot index={1} className="text-white" />
              <InputOTPSlot index={2} className="text-white" />
            </InputOTPGroup>
            <InputOTPSeparator className="text-white px-1" />
            <InputOTPGroup>
              <InputOTPSlot index={3} className="text-white" />
              <InputOTPSlot index={4} className="text-white" />
              <InputOTPSlot index={5} className="text-white" />
            </InputOTPGroup>
          </InputOTP>

          {errors.otp && (
            <p className="text-red-500 text-sm">{errors.otp.message}</p>
          )}

          <Button type="submit">Submit OTP</Button>
        </form>

        <Link href="/" className="text-center text-white hover:underline">
          Resend OTP?
        </Link>
      </Card>
    </div>
  );
}
