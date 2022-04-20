import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export const FormComponent = (props) => {
  const [formCoordinates, setFormCoordinates] = useState({ lat: "", lng: "" });

  useEffect(() => {
    if (props.coordinates.lat === null) return;
    setFormCoordinates(props.coordinates);
  }, [props.coordinates]);

  function onSubmit(event) {
    event.preventDefault();
    const newCoordinates = {
      lat: formCoordinates.lat,
      lng: formCoordinates.lng,
    };
    props.setCoordinates(newCoordinates);
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div id="form">
        <label htmlFor="lat">Latitude</label>
        <br></br>

        <input
          id="lat"
          name="lat"
          type="number"
          value={formCoordinates.lat}
          onChange={(e) => {
            setFormCoordinates((old) => ({ ...old, lat: e.target.value }));
          }}
          required
        />
        <br></br>
        <br></br>

        <label htmlFor="lng">Longitude</label>
        <br></br>

        <input
          id="lng"
          name="lng"
          type="number"
          value={formCoordinates.lng}
          onChange={(e) => {
            setFormCoordinates((old) => ({ ...old, lng: e.target.value }));
          }}
          required
        />
        <br></br>
        <br></br>

        <label htmlFor="climateVariable">Climate Variable</label>
        <br></br>

        <select
          id="climateVariable"
          name="climateVariable"
          value={props.climateVariable}
          onChange={(e) => {
            props.setClimateVariable(e.target.value);
          }}
        >
          <option value="dayl (s)">Duration of the Daylight </option>
          <option value="prcp (mm/day)">Daily Total Precipitation</option>
          <option value="srad (W/m^2)">Shortwave Radiation Flux Density</option>
          <option value="swe (kg/m^2)">Snow Water Equivalent</option>
          <option value="tmax (deg c)">Daily Maximum Air Temperature</option>
          <option value="tmin (deg c)">Daily Minimum Air Temperature</option>
          <option value="vp (Pa)">Water Vapor Pressure</option>
        </select>

        <br></br>
        <br></br>

        <label htmlFor="start">Start date:</label>
        <br></br>

        <input
          type="date"
          name="startDate"
          min="1990-01-01"
          max="2000-01-01"
          value={props.startDate}
          onChange={(e) => {
            props.setStartDate(e.target.value);
          }}
        ></input>
        <br></br>

        <br></br>
        <label htmlFor="end">End date:</label>
        <br></br>

        <input
          type="date"
          name="endDate"
          min="1990-01-01"
          max="2000-01-01"
          value={props.endDate}
          onChange={(e) => {
            props.setEndDate(e.target.value);
          }}
        ></input>

        <br></br>
        <br></br>

        <button id="button1" type="submit">
          Get Weather Info
        </button>
      </div>
    </form>
  );
};
