// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FaBars, FaTimes, FaMoneyBillAlt } from "react-icons/fa";
// import { HiHome } from "react-icons/hi";
// import { CiBank } from "react-icons/ci";
// import { GrTransaction } from "react-icons/gr";
// import { MdAssignmentAdd } from "react-icons/md";
// import { Button } from "@/components/ui/button";
// import { getLoggedInUser, logout } from "@/lib/actions/user.action";
// import LogoutButtom from "@/components/LogoutButtom";
// const AppLayout = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   //const loggedInUser = await getLoggedInUser();

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const user = await getLoggedInUser();
//         if (!user) {
//           router.push("/sign-in");
//         } else {
//           setLoggedInUser(user);
//         }
//       } catch (error) {
//         console.error("Failed to fetch user", error);
//         router.push("/sign-in");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, [router]);

//   if (loading) {
//     return <div className="flex items-center justify-center h-screen">Loading...</div>;
//   }
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow  p-4 transition-transform duration-300 ease-in-out ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:static md:inset-0`}
//       >
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold text-white bg-green-500 w-full p-2 rounded-2xl">Bankify</h2>
//           <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
//             <FaTimes size={20} />
//           </button>
//         </div>
//         <nav className="space-y-2 relative">
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-500"
//           >
//             <HiHome size={20} /> Home
//           </a>
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-500"
//           >
//             <CiBank size={20} /> My Banks
//           </a>
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-500"
//           >
//             <GrTransaction size={20} /> Transaction History
//           </a>
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-500"
//           >
//             <FaMoneyBillAlt size={20} /> Payment Transfer
//           </a>
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-500"
//           >
//             <MdAssignmentAdd size={20} /> Connect Bank
//           </a>
//          <LogoutButtom />
//         </nav>
//       </div>

//       {/* Mobile overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:px-6">
//           <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
//             <FaBars size={22} />
//           </button>
//           <h1 className="text-xl font-semibold"></h1>
//           <div className="hidden md:block">👤 User</div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default AppLayout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (


<div>
  <Navbar />

  <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
     {children}
    </div>
  </div>
</div>


  )
};

export default AppLayout;
