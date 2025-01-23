import React from "react";
import UserNav from "./components/user-nav";
import SidePanel from "./side-panel";

export default function DashboradLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-200">
      {/* side panel */}
      <aside className="w-64 text-black bg-slate-300 border-r shadow-lg">
        <SidePanel />
      </aside>
      <div className="flex flex-1 bg-yellow-500 flex-col overflow-hidden">
        {/* dashboard header */}
        <header className="bg-white h-16 items-center justify-between gap-4 border-b px-6 shadow-sm flex">
          <h1 className="text-2xl font-bold text-blue-900">Mflix Dashboard</h1>
          <UserNav />
        </header>

        {/* dashbord pages */}
        <main className="flex flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
