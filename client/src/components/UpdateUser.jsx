import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

export default function UpdateUser() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user_type, setUser_type] = useState("");
  const [error, SetError] = useState("");
  const [success, setSuccess] = useState("");
  async function handleSubmit(event) {
    SetError("");
    event.preventDefault();
    const token = localStorage.getItem("token");
    const update = { id };
    if (!id) {
      return SetError("missing id");
    }
    if (username) update.username = username;
    if (password) update.password = password;
    if (email) update.email = email;
    if (user_type) update.user_type = user_type;
    try {
      const updateUser = await axios.put(
        "http://localhost:3000/api/auth/register/update",
        update,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("user updated");
    } catch (err) {
      console.log(err);
      SetError(err);
    }
  }
  return (
    <div className="register">
      <AdminNavbar />
      <h1 className="logo-register">Update user</h1>
      <form className="register-box" onSubmit={handleSubmit}>
        <label htmlFor="id-update">ID</label>
        <input
          type="text"
          id="id-update"
          placeholder="must id"
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="username-update">User Name</label>
        <input
          type="text"
          id="username-update"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password-update">Password</label>
        <input
          type="text"
          id="password-update"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="email-update">Email</label>
        <input
          type="email"
          id="email-update"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="user-type-">User type</label>
        <select id="user-type" onChange={(e) => setUser_type(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="air force">Air force</option>
          <option value="intelligence">Intelligence</option>
        </select>
        <button type="submit">Update user</button>
      </form>
      {success && <div className="success">User created successfully</div>}
      {error && <div className="error">Error Try again</div>}
    </div>
  );
}
