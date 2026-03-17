import React, { useState } from "react";
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
  function adminDash() {
    navigate("/admin");
  }
  function moveToAllusers() {
    navigate("/get/users");
  }
  function userDetalis() {
    const user = JSON.parse(localStorage.getItem("user"));
    alert(`user name: ${user.username} \n user type: ${user.user_type}`);
  }
  return (
    <div className="navbar-bth-box">
      <button className="navbar-bth" onClick={logout}>
        Logout
      </button>
      <button className="navbar-bth" onClick={adminDash}>
        Home
      </button>
      <button className="navbar-bth" onClick={userDetalis}>
        My Details
      </button>
      <button className="navbar-bth" onClick={moveToAllusers}>
        All Users
      </button>
      <button className="navbar-bth" onClick={moveToRegister}>
        Register
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
