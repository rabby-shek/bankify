import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bankify",
  description: "Your trusted banking system.",
  icons: {
    icon : '/favicon.ico'
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //  const loggedInUser = await getLoggedInUser();
  //  console.log(log)
  //  if(!loggedInUser){
  //   return redirect("/sign-in");
  //  }
  // const login = false;
  // if(!login){
  //   redirect('/sign-in')
  // }


 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
