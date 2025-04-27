"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/actions/user.action";

const LogoutButtom = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push('sign-in');
  };
  return (
    <Button
      onClick={handleLogout}
      className="bg-black text-white cursor-pointer"
    >
      Logout
    </Button>
  );
};

export default LogoutButtom;
