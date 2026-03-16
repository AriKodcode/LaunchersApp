import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Launcher.css";

export default function Launcer({ id, name, city, rocketType }) {
  const navigate = useNavigate();
  return (
    <div className="launcher">
      <div className="details">
        <div className="name">
          <p>name:</p>
          <p>{name}</p>
        </div>
        <div className="city">
          <p>city:</p>
          <p>{city}</p>
        </div>
        <div className="rocket">
          <p>rocket type:</p>
          <p>{rocketType}</p>
        </div>
      </div>
      <button
        className="launcher-bth"
        onClick={() => navigate(`/details/${id}`)}
      >
        Launcher details
      </button>
    </div>
  );
}
