import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
const UserLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <Navbar /> {/* 👈 insert navbar */}
        <main>
         
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default UserLayout;
