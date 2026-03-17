import axios from "axios";
import { useEffect, useState } from "react";
import "../css/Details.css";
import { useNavigate } from "react-router-dom";
export default function Details({ id }) {
  const navigate = useNavigate();
  const [launcher, setLauncher] = useState({});
  async function fetchLauncherById() {
    try {
      const launcher2 = await axios.get(
        `http://localhost:3000/api/launchers/${id}`
      );
      setLauncher(launcher2.data["launcher"]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchLauncherById();
  }, []);
  return (
    <div className="launcherDetails">
      <button className="back" onClick={() => navigate("/launchers")}>
        Back
      </button>
      <h1 className="details-logo">DETAILS</h1>
      <div className="details2">
        <div className="id">
          <p>ID</p>
          {launcher._id}
        </div>
        <div className="name">
          <p>NAME</p>
          <p>{launcher.name}</p>
        </div>
        <div className="city">
          <p>CITY</p>
          {launcher.city}
        </div>
        <div className="rocket-type">
          <p>ROCKET TYPE</p>
          {launcher.rocketType}
        </div>
        <div className="latitude">
          <p>LATITUDE</p>
          {launcher.latitude}
        </div>
        <div className="longitude">
          <p>LONGITUDE</p>
          {launcher.longitude}
        </div>
      </div>
    </div>
  );
}
