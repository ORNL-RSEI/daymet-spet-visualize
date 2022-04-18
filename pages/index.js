import { useState, useEffect } from "react";
import { fetchDaymet } from "../functions/fetchDaymet";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FormComponent } from "../components/FormComponent";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

export default function Document() {
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [daymetData, setDaymetData] = useState(null);
  const [climateVariable, setClimateVariable] = useState("dayl (s)");
  const [startDate, setStartDate] = useState("1990-01-01");
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (coordinates.lat === null || coordinates.lng === null) return;
    fetchDaymet({
      coordinates,
      setDaymetData,
      startDate,
    });
  }, [coordinates, startDate]);

  const text =
    daymetData === null ? "Loading..." : daymetData.data[climateVariable][0];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="title">
          <a>Daymet SPET Visualization</a>
        </h1>
      </header>

      <main className={styles.main}>
        <FormComponent
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          climateVariable={climateVariable}
          setClimateVariable={setClimateVariable}
          startDate={startDate}
          setStartDate={setStartDate}
        />

        <MapComponent
          coordinates={coordinates}
          setCoordinates={setCoordinates}
        />

        <>
          <h3>{`The ${climateVariable} is`}</h3>
          <h3>{text}</h3>
        </>
      </main>
      <footer className={styles.footer}>
        <h4 className="title">
          <Link href="/page2">
            <a>Go to page2</a>
          </Link>
        </h4>
      </footer>
    </div>
  );
}
