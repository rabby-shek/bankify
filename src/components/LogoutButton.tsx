"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/actions/user.action";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push('/');
  };
  return (
    <Button
      onClick={handleLogout}
      className="bg-black text-white cursor-pointer w-full"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
