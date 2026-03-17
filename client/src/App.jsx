import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LauncherDetalis from "./pages/LauncherDetalis";
import AddLauncherPage from "./pages/AddLauncherPage";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import AllUsers from "./components/AllUsers";
export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/launchers" element={<HomePage />} />
        <Route path="/details/:id" element={<LauncherDetalis />} />
        <Route path="/added/launcher" element={<AddLauncherPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/register/create" element={<RegisterPage />} />
        <Route path="/register/update" element={<UpdateUser />} />
        <Route path="/register/delete" element={<DeleteUser />} />
        <Route path="/get/users" element={<AllUsers />} />
      </Routes>
    </div>
  );
}
