"use client";
import { usePathname } from "next/navigation";
import { CalendarSync, HomeIcon, PiggyBank, DollarSign } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenu,
} from "./ui/sidebar";

export default function AppSidebar() {
  const pathname = usePathname();
  const sidebarItems = [
    {
      id: 1,
      title: "Home",
      icon: <HomeIcon />,
      url: "/dashboard",
    },
    {
      id: 2,
      title: "My Banks",
      icon: <PiggyBank />,
      url: "/my-banks",
    },
    {
      id: 3,
      title: "Transaction History",
      icon: <CalendarSync />,
      url: "/transaction-history",
    },
    {
      id: 4,
      title: "Transfer Funds",
      icon: <DollarSign />,
      url: "/transfer-funds",
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader className="text-2xl font-bold text-center text-black">
        Bankify
      </SidebarHeader>
      <SidebarContent className="bg-black">
        <SidebarGroup />
        <SidebarMenu>
          {sidebarItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.id} className="mx-2">
                <SidebarMenuButton
                  asChild
                  className={`border hover:bg-black hover:text-white hover:border-white ${
                    isActive
                      ? "bg-black text-white border-white"
                      : "bg-white text-black border-black"
                  }`}
                >
                  <Link href={item.url}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
