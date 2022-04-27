import { useState, useEffect } from "react";
import { fetchDaymet } from "../functions/fetchDaymet";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FormComponent } from "../components/FormComponent";
import { LineChart } from "../components/LineChart";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

export default function Document() {
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [daymetData, setDaymetData] = useState(null);
  const [climateVariable, setClimateVariable] = useState("dayl (s)");
  const [startDate, setStartDate] = useState("1990-01-01");
  const [endDate, setEndDate] = useState("1990-01-02");

  useEffect(() => {
    if (coordinates.lat === null || coordinates.lng === null) return;
    fetchDaymet({
      coordinates,
      setDaymetData,
      startDate,
      endDate,
    });
  }, [coordinates, startDate, endDate]);

  const text =
    //daymetData === null ? "Loading..." : daymetData.data[climateVariable][0];
    daymetData === null
      ? "Loading"
      : avgClimate(daymetData.data[climateVariable]);

  const climateText =
    //daymetData === null ? "Loading..." : daymetData.data[climateVariable][0];
    daymetData === null ? "Loading" : daymetData.data[climateVariable];

  const ydayText =
    //daymetData === null ? "Loading..." : daymetData.data[climateVariable][0];
    daymetData === null ? "Loading" : daymetData.data["yday"];

  console.log("climateText", { climateText });
  console.log("ydayText", { ydayText });

  function avgClimate(array) {
    var weather = 0;
    for (var i = 0; i < array.length; i++) {
      weather = weather + array[i];
    }
    return weather / array.length;
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="title">
          <a>Daymet SPET Visualization</a>
        </h1>
      </header>

      <main className={styles.main}>
        <div class="displayrow">
          <FormComponent
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            climateVariable={climateVariable}
            setClimateVariable={setClimateVariable}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <p>Here</p>
          <MapComponent
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
          <LineChart
            climateText={climateText}
            ydayText={ydayText}
            coordinates={coordinates}
            climateVariable={climateVariable}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <>
          <h3>{`The Average ${climateVariable} from '${startDate}' to '${endDate}' is`}</h3>
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
