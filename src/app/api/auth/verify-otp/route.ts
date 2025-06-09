// app/api/verify-otp/route.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { otp_code } = await request.json();
  console.log(otp_code);

  if (!otp_code) {
    return NextResponse.json(
      { error: "OTP code is required" },
      { status: 400 }
    );
  }

  const [otpResult] = await db.query(
    `SELECT * FROM otp_tokens WHERE otp_code = ? ORDER BY created_at DESC LIMIT 1`,
    [otp_code]
  );
  // console.log(otpResult);

  const otp = otpResult[0];
  console.log("otp : ", !otp);

  if (!otp) {
    return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
  }

  const isExpired = new Date(otp.expires_at) < new Date();
  const isUsed = otp.is_used;

  if (isExpired) {
    return NextResponse.json({ message: "OTP has expired" }, { status: 400 });
  }

  if (isUsed) {
    return NextResponse.json({ message: "OTP already used" }, { status: 400 });
  }

  await db.query(`UPDATE otp_tokens SET is_used = 1 WHERE id = ?`, [otp.id]);
  await db.query(`UPDATE users SET is_email_verified = 1 WHERE id = ?`, [
    otp.user_id,
  ]);

  return NextResponse.json({ message: "OTP verified" });
}
