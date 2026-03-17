import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ admin }) {
  const token = a;
  if (!token) {
    return <Navigate to="/" replace />;
  }
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  if (admin && role !== "admin") {
    return <Navigate to="/launchers" replace />;
  }

  return <Outlet />;
}
