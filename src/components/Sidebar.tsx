import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { HiHome } from "react-icons/hi";
import { CiBank } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { MdAssignmentAdd } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";

const navItems = [
  { href: "/dashboard", icon: HiHome, label: "Home" },
  { href: "/banks", icon: CiBank, label: "My Banks" },
  { href: "/transactions", icon: GrTransaction, label: "Transaction History" },
  { href: "/transfer", icon: FaMoneyBillAlt, label: "Payment Transfer" },
  { href: "/connect-bank", icon: MdAssignmentAdd, label: "Connect Bank" },
];

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg group transition-all ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon
                    className={`shrink-0 w-5 h-5 transition duration-75 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    }`}
                    size={20}
                  />
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4">
        <Button className="w-full">Submit</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
