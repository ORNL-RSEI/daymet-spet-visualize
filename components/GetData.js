import React, { useState, useEffect } from "react";
import { fetchDaymet } from "../functions/fetchDaymet";

export default function GetData({ lat, lon }) {
  const [daymetData, setDaymetData] = useState(null);
  useEffect(() => {
    fetchDaymet({ lat, lon, setDaymetData });
  }, []);
  console.log(daymetData);
  const text =
    daymetData === null ? "Loading..." : daymetData.data["tmax (deg c)"][0];

  return (
    <>
      <h3>The tmax is:</h3>
      <h3>{text}</h3>
    </>
  );
}
