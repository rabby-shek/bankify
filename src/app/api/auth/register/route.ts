import { db } from "@/lib/db";
import { hashPassword } from "@/lib/hash";
import { sendOTP } from "@/lib/mailer";
import { registerSchema } from "@/lib/validation";
import type { ResultSetHeader } from "mysql2";
import { NextResponse } from "next/server";
export async function POST(request : Request) {
  try {
    const body = await request.json();
    const data = registerSchema.parse(body);

    const [userCheck] = await db.query("SELECT id FROM users WHERE email = ?", [
      data.email,
    ]);
    if (userCheck.length > 0)
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });

    const hashedPassword = await hashPassword(data.password);

    const [result] = await db.query(
      `INSERT INTO users (first_name, last_name, email, password, address, state, postal_code, date_of_birth, ssn)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.first_name,
        data.last_name,
        data.email,
        hashedPassword,
        data.address,
        data.state,
        data.postal_code,
        data.date_of_birth,
        data.ssn,
      ]
    ) as [ResultSetHeader, any];

    const userId = result.insertId;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
    await db.query("INSERT INTO otp_tokens (user_id, otp_code, expires_at) VALUES (?, ?, ?)", [
      userId,
      otp,
      expiresAt
    ]);
   //  await sendOTP(data.email, otp);

    return NextResponse.json({ message: "User registered. OTP sent to email." });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
