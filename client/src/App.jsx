import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LauncherDetalis from "./pages/LauncherDetalis";
import AddLauncherPage from "./pages/AddLauncherPage";
import Login from "./components/Login";
export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Login path="/" element={<Login />} />
        <Route path="/launchers" element={<HomePage />} />
        <Route path="/details/:id" element={<LauncherDetalis />} />
        <Route path="/added/launcher" element={<AddLauncherPage />} />
      </Routes>
    </div>
  );
}
