import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
export default function Navbar() {
  return (
    <nav className="w-full shadow px-4 py-3 flex items-center justify-between border-b-1">
      <div className="text-xl font-bold text-white">
        <SidebarTrigger className="cursor-pointer text-white" />
      </div>
      <div className="space-x-4">
        <Link
          href="/profile"
          className="text-white cursor-pointer hover:underline"
        >
          Profile
        </Link>
        <button className="text-white cursor-pointer hover:underline">
          Logout
        </button>
      </div>
    </nav>
  );
}
