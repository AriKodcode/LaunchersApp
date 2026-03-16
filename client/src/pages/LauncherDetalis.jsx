import React from "react";
import Details from "../components/Details";
import { useParams } from "react-router-dom";

export default function LauncherDetalis() {
  const { id } = useParams();
  return (
    <div>
      <Details id={id} />
      <p></p>
    </div>
  );
}
