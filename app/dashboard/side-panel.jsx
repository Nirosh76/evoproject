import Link from "next/link";
import React from "react";

export default function SidePanel() {
  return (
    <div className="flex flex-col p-4 space-y-2">
      <Link href="/dashboard" className="hover:bg-blue-200 text-sm p-2 rounded">
        Over View
      </Link>
      <Link
        href="/dashboard/movie"
        className="hover:bg-blue-200 text-sm p-2 rounded"
      >
        Movie
      </Link>
      <Link
        href="/dashboard/add-movie"
        className="hover:bg-blue-200 text-sm p-2 rounded"
      >
        Add Movie
      </Link>
      <Link
        href="/dashboard/users"
        className="hover:bg-blue-200 text-sm p-2 rounded"
      >
        Users
      </Link>
      <Link
        href="/dashboard/settings"
        className="hover:bg-blue-200 text-sm p-2 rounded"
      >
        Settings
      </Link>
    </div>
  );
}
