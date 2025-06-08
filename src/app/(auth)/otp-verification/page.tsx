import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InputOTPDemo() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <Card className="bg-black w-full max-w-sm p-6 rounded-2xl shadow-2xl flex justify-center">
        <div className="w-full flex justify-center">
          <InputOTP
            maxLength={6}
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
        </div>
        <Button type="submit">Submit OTP</Button>
        <Link href='/' className="text-center text-white hover:underline">Resend OTP?</Link>
      </Card>
    </div>
  );
}
