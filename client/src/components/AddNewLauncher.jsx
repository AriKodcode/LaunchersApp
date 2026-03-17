import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AddNewLauncher.css";
export default function AddNewLauncher() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [rocketType, setRocketType] = useState("");
  const [latitude, setLatidue] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    const token = localStorage.getItem("token");
    
    event.preventDefault();
    try {

      const newLauncher = {
        city,
        rocketType,
        latitude,
        longitude,
        name,
      };
      setError(false);
      setSuccess(false);

      const res = await axios.post(
        "http://localhost:3000/api/launchers",
        newLauncher,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }
  return (
    <div>
      <button className="back" onClick={() => navigate("/launchers")}>
        Back
      </button>
      <form className="new-launcher" onSubmit={handleSubmit}>
        <label htmlFor="new-name">Name</label>
        <input
          type="text"
          id="new-name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="new-city">City</label>
        <input
          type="text"
          id="new-city"
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="new-rocket">rocket type</label>
        <select id="new-rocket" onChange={(e) => setRocketType(e.target.value)}>
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
        <label htmlFor="new-latitude">Latitude</label>
        <input
          type="number"
          id="new-latitude"
          onChange={(e) => setLatidue(e.target.value)}
        />
        <label htmlFor="new-longitude">Longitude</label>
        <input
          type="nuber"
          id="new-longitude"
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button type="submit">Create new launcher</button>
      </form>
      {success && (
        <div className="success">
          <p>Launcher Created successfully</p>
        </div>
      )}
    </div>
  );
}
