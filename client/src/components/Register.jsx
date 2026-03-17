import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";
import AdminNavbar from "./AdminNavbar";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user_type, setUser_type] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function hansleSubmit(event) {
    event.preventDefault();
    setSuccess(false);
    setError(false);
    const token = localStorage.getItem("token");

    const newUser = {
      username,
      password,
      email,
      user_type,
    };
    try {
      const user = await axios.post(
        "http://localhost:3000/api/auth/register/create",
        newUser,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess(true);
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  }
  return (
    <div className="register">
      <AdminNavbar />
      <h1 className="logo-register">Register</h1>
      <form className="register-box" onSubmit={hansleSubmit}>
        <label htmlFor="username-register">User Name</label>
        <input
          type="text"
          id="username-register"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password-register">Password</label>
        <input
          type="text"
          id="password-register"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="email-register">Email</label>
        <input
          type="email"
          id="email-register"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="user-type">User type</label>
        <select id="user-type" onChange={(e) => setUser_type(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="air force">Air forch</option>
          <option value="intelligence">Intelligence</option>
        </select>
        <button type="submit">Create new user</button>
      </form>
      {success && <div className="success">User created successfully</div>}
      {error && <div className="error">Error Try again</div>}
    </div>
  );
}
