import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
      navigate("/launchers");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }
  return (
    <div className="login">
      <form className="login-box" onSubmit={handelSubmit}>
        <label htmlFor="username-login">User Name</label>
        <input
          type="text"
          id="username-login"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password-login">Password</label>
        <input
          type="text"
          id="password-login"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && (
        <div className="error-login">
          <p>Error! please try agein</p>
        </div>
      )}
    </div>
  );
}
