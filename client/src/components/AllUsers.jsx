import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/AllUsers.css";
import AdminNavbar from "./AdminNavbar";

export default function AllUsers() {
  const [userslist, setUserslist] = useState([]);
  async function getUsers() {
    const token = localStorage.getItem("token");
    try {
      const users = await axios.get(
        "http://localhost:3000/api/auth/get/users",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUserslist(users.data.users);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User name</th>
            <th>Password</th>
            <th>Email</th>
            <th>User type</th>
            <th>last login</th>
          </tr>
        </thead>
        <tbody>
          {userslist.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.user_type}</td>
                <td>{user.last_login}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
