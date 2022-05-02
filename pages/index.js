import { useState, useEffect } from "react";
import { fetchDaymet } from "../functions/fetchDaymet";
import { avgClimate } from "../functions/avgClimate";
import dynamic from "next/dynamic";
import { FormComponent } from "../components/FormComponent";
import { LineChart } from "../components/LineChart";
import { MainHeader } from "../components/MainHeader";
import { MainFooter } from "../components/MainFooter";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

export default function Document() {
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [daymetData, setDaymetData] = useState(null);
  const [climateVariable, setClimateVariable] = useState("dayl (s)");
  const [startDate, setStartDate] = useState("1990-01-01");
  const [endDate, setEndDate] = useState("1990-01-06");

  useEffect(() => {
    if (coordinates.lat === null || coordinates.lng === null) return;
    fetchDaymet({
      coordinates,
      setDaymetData,
      startDate,
      endDate,
    });
  }, [coordinates, startDate, endDate]);

  const dataForText =
    daymetData === null ? "" : avgClimate(daymetData.data[climateVariable]);

  const text =
    daymetData === null
      ? ""
      : `The Average ${climateVariable} from '${startDate}' to '${endDate}' is ${dataForText}`;

  return (
    <div className={"indexContainer"}>
      <MainHeader />
      <main className={"main"}>
        <div className={"displayrow"}>
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

          <MapComponent
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
          <div className={"chartPanel"}>
            <LineChart
              climateVariable={climateVariable}
              daymetData={daymetData}
            />
          </div>
        </div>

        <h3 className="averageText">{text}</h3>
      </main>
      <MainFooter />
    </div>
  );
}
