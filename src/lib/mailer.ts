import nodemailer from 'nodemailer';

export async function sendOTP(email: string, otp: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify(); // Verify connection

    await transporter.sendMail({
      from: `"Bankify" <${process.env.SMTP_USER}>`, // proper email sender format
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is: ${otp}`,
    });

    return { success: true };
  } catch (error: any) {
    console.error('Error sending OTP email:', error);
    throw new Error('Failed to send OTP email');
  }
}
