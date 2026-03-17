import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/AdminNavbar.css";
export default function AdminNavbar() {
  const navigate = useNavigate();
  function moveToRegister() {
    navigate("/register/create");
  }
  function moveToUpdateUser() {
    navigate("/register/update");
  }
  function moveToDeleteUser() {
    navigate("/register/delete");
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <div className="navbar-bth-box">
      <button className="navbar-bth" onClick={moveToRegister}>
        Logout
      </button>
      <button className="navbar-bth" onClick={logout}>
        register
      </button>
      <button className="navbar-bth" onClick={moveToUpdateUser}>
        update
      </button>
      <button className="navbar-bth" onClick={moveToDeleteUser}>
        Delete user
      </button>
    </div>
  );
}
