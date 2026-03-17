import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  async function handelSubmit(event) {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    try {
      const user = await axios.post(
        "http://localhost:3000/api/auth/login",
        user
      );
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("user", JSON.stringify(user.data.user));
      
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }
  return <div>Login</div>;
}
