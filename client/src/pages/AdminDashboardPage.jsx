import React from "react";
import LaunchersList from "../components/LaunchersList";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminDashboardPage() {
  return (
    <div>
      <AdminNavbar />
      <LaunchersList />
    </div>
  );
}
