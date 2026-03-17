import React, { useEffect, useState } from "react";
import axios from "axios";
import Launcer from "./Launcer";
import "../css/LaunchersList.css";
import { useNavigate } from "react-router-dom";
export default function LaunchersList() {
  const navigate = useNavigate();
  const [launchers, setlaunchers] = useState([]);
  const [filterLauncher, setFilterLaunchers] = useState([]);
  const [city, setcity] = useState("");
  const [rocketType, setRocketType] = useState("");
  const [id, setId] = useState("");
  const [launchersList, setLaunchersList] = useState(true);
  const [query, setQuery] = useState(false);
  const [searchById, setSearchById] = useState(false);
  async function fetchLaunchers() {
    const resLaunchers = await axios.get("http://localhost:3000/api/launchers");
    setlaunchers(resLaunchers.data["launchers"]);
  }
  async function heldlLauncherByQuery(event) {
    event.preventDefault();
    const filter = {};
    if (city) filter.city = city;
    if (rocketType) filter.rocketType = rocketType;
    try {
      const res = await axios.get("http://localhost:3000/api/launchers", {
        params: filter,
      });
      setFilterLaunchers(res.data["launchers"]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchLaunchers();
  }, []);
  return (
    <div>
      <div className="butoons">
        <button className="back" onClick={() => navigate("/")}>
          Logout
        </button>
        <button className="add" onClick={() => navigate("/added/launcher")}>
          add launcher
        </button>
        <button
          className="add"
          onClick={() => {
            setQuery(!query),
              setLaunchersList(!launchersList),
              setSearchById(false);
          }}
        >
          Filter
        </button>
        <button
          className="add"
          onClick={() => {
            setSearchById(!searchById),
              setLaunchersList(!launchersList),
              setQuery(false);
          }}
        >
          Serach by ID
        </button>
      </div>
      {query && (
        <div>
          <form onSubmit={heldlLauncherByQuery}>
            <label htmlFor="">city</label>
            <input
              type="text"
              id="c"
              onChange={(e) => setcity(e.target.value)}
            />
            <label htmlFor="">rocket type</label>
            <input
              type="text"
              id="r"
              onChange={(e) => setRocketType(e.target.value)}
            />
            <button type="submit">search</button>
          </form>
          {filterLauncher.map((launcher) => (
            <Launcer
              key={launcher._id}
              id={launcher._id}
              name={launcher.name}
              city={launcher.city}
              rocketType={launcher.rocketType}
            />
          ))}
        </div>
      )}
      {searchById && <div></div>}
      {launchersList && (
        <div className="lainchers-list">
          {launchers.map((launcher) => (
            <Launcer
              key={launcher._id}
              id={launcher._id}
              name={launcher.name}
              city={launcher.city}
              rocketType={launcher.rocketType}
            />
          ))}
        </div>
      )}
    </div>
  );
}
