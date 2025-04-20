"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaMoneyBillAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { CiBank } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { MdAssignmentAdd } from "react-icons/md";
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white border-r p-4 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:inset-0`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:brand-bg-color"
          >
            <HiHome size={20} /> Home
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:brand-bg-color"
          >
            <CiBank size={20} /> My Banks
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:brand-bg-color"
          >
            <GrTransaction size={20} /> Transaction History
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:brand-bg-color"
          >
            <FaMoneyBillAlt size={20} /> Payment Transfer
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:brand-bg-color"
          >
            <MdAssignmentAdd size={20} /> Connect Bank
          </a>
        </nav>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:px-6">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <FaBars size={22} />
          </button>
          <h1 className="text-xl font-semibold"></h1>
          <div className="hidden md:block">👤 User</div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
