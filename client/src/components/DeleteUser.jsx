import axios from "axios";
import { useState } from "react";
import "../css/DeleteUser.css";
export default function DeleteUser() {
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  async function handlesubmit(event) {
    setError("");
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!id) {
      return setError("must id");
    }
    try {
      const deleteUser = await axios.delete(
        `http://localhost:3000/api/auth/register/delete/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("user deleted");
    } catch (err) {
      console.log(err);
      setError("Error cant connect to server");
    }
  }
  return (
    <div className="delete">
      <h1 className="logo-delete">Delete user</h1>
      <form className="delete-box" onSubmit={handlesubmit}>
        <label htmlFor="id-delete">ID</label>
        <input
          type="text"
          id="id-update"
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete user</button>
      </form>
    </div>
  );
}
