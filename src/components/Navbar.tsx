import { SidebarTrigger } from "./ui/sidebar";
export default function Navbar() {
  return (
    <nav className="w-full bg-black shadow px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-white">
        <SidebarTrigger className="cursor-pointer" />
      </div>
      <div className="space-x-4">
        <button className="text-white hover:underline">Profile</button>
        <button className="text-white hover:underline">Logout</button>
      </div>
    </nav>
  );
}
